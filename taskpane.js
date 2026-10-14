/* global Office, VORLAGEN, BCC_ADRESSE, SCHRIFTART, SCHRIFTGROESSE */
(function () {
  "use strict";

  var eingefuegt = false;      // wurde in diese Mail schon eine Vorlage eingefügt?
  var wiederholenKey = null;   // zweiter Klick bestätigt erneutes Einfügen

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function baueHtml(zeilen) {
    var stil = "font-family:" + SCHRIFTART + ";font-size:" + SCHRIFTGROESSE + ";";
    var inhalt = zeilen.map(function (z) {
      return z === "" ? '<div style="' + stil + '"><br></div>'
                      : '<div style="' + stil + '">' + escapeHtml(z) + "</div>";
    }).join("");
    // Leerzeile am Ende als Abstand zur Signatur bzw. zur zitierten Bewerbung
    return '<div style="' + stil + '">' + inhalt + '<div style="' + stil + '"><br></div></div>';
  }

  function baueText(zeilen) {
    return zeilen.join("\n") + "\n\n";
  }

  function status(text, art) {
    var el = document.getElementById("status");
    el.textContent = text;
    el.className = "status " + (art || "");
  }

  function asyncCall(fn) {
    return new Promise(function (resolve, reject) {
      fn(function (res) {
        if (res.status === Office.AsyncResultStatus.Succeeded) { resolve(res.value); }
        else { reject(res.error); }
      });
    });
  }

  function setzeBcc(item) {
    return asyncCall(function (cb) { item.bcc.getAsync(cb); }).then(function (liste) {
      var vorhanden = (liste || []).some(function (r) {
        return (r.emailAddress || "").toLowerCase() === BCC_ADRESSE.toLowerCase();
      });
      if (vorhanden) { return; }
      return asyncCall(function (cb) { item.bcc.addAsync([BCC_ADRESSE], cb); });
    });
  }

  function fuegeTextEin(item, vorlage) {
    return asyncCall(function (cb) { item.body.getTypeAsync(cb); }).then(function (typ) {
      if (typ === Office.CoercionType.Html) {
        return asyncCall(function (cb) {
          item.body.prependAsync(baueHtml(vorlage.zeilen), { coercionType: Office.CoercionType.Html }, cb);
        });
      }
      return asyncCall(function (cb) {
        item.body.prependAsync(baueText(vorlage.zeilen), { coercionType: Office.CoercionType.Text }, cb);
      });
    });
  }

  function einfuegen(key) {
    var vorlage = VORLAGEN[key];
    var item = Office.context.mailbox.item;
    if (!vorlage || !item || !item.body || !item.bcc) {
      status("Bitte zuerst auf „Antworten“ klicken – das Add-in arbeitet im Antwortfenster.", "fehler");
      return;
    }
    if (eingefuegt && wiederholenKey !== key) {
      wiederholenKey = key;
      status("In diese Mail wurde bereits eine Absage eingefügt. Zum erneuten Einfügen nochmals klicken.", "warnung");
      return;
    }
    wiederholenKey = null;
    status("Wird eingefügt …", "");
    fuegeTextEin(item, vorlage)
      .then(function () { return setzeBcc(item); })
      .then(function () {
        eingefuegt = true;
        status("✓ „" + vorlage.titel + "“ eingefügt, BCC an " + BCC_ADRESSE + " gesetzt. Bitte prüfen und senden.", "ok");
      })
      .catch(function (err) {
        status("Fehler: " + (err && err.message ? err.message : err), "fehler");
      });
  }

  function zuruecksetzen() {
    eingefuegt = false;
    wiederholenKey = null;
    status("Vorlage wählen – Text und BCC werden in die Antwort eingefügt.", "");
  }

  Office.onReady(function () {
    var knoepfe = document.querySelectorAll("button[data-vorlage]");
    Array.prototype.forEach.call(knoepfe, function (b) {
      b.disabled = false;
      b.addEventListener("click", function () { einfuegen(b.getAttribute("data-vorlage")); });
    });
    document.getElementById("bcc").textContent = BCC_ADRESSE;
    // Bei angeheftetem Bereich: Zustand zurücksetzen, wenn eine andere Mail gewählt wird
    try {
      Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged, zuruecksetzen);
    } catch (e) { /* ältere Outlook-Versionen */ }
    zuruecksetzen();
  });

  // für Tests
  if (typeof window !== "undefined") { window.__absage = { baueHtml: baueHtml, einfuegen: einfuegen }; }
})();
