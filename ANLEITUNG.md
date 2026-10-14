# Bewerbungsabsagen – Outlook-Add-in einrichten

Einmalige Einrichtung, ca. 15 Minuten.

## 1. GitHub-Konto
Unter https://github.com/signup ein kostenloses Konto anlegen und den **Benutzernamen** notieren (z. B. `mmeisenberg`).

## 2. Benutzernamen in manifest.xml eintragen
1. `manifest.xml` mit TextEdit öffnen.
2. Bearbeiten → Suchen → Suchen und Ersetzen …
3. `DEIN-GITHUB-NAME` durch Ihren Benutzernamen **in Kleinbuchstaben** ersetzen → „Alle ersetzen“ → Sichern.

## 3. Dateien auf GitHub hochladen
1. Auf github.com oben rechts „+“ → **New repository**.
2. Name: `outlook-absagen` (genau so), Sichtbarkeit **Public** → „Create repository“.
3. Auf „uploading an existing file“ klicken und **alle Dateien samt Ordner `assets`** aus dem entpackten Ordner ins Browserfenster ziehen → „Commit changes“.

## 4. GitHub Pages einschalten
1. Im Repository: **Settings** → links **Pages**.
2. Source: „Deploy from a branch“, Branch: `main`, Ordner `/ (root)` → **Save**.
3. 1–2 Minuten warten. Test: `https://BENUTZERNAME.github.io/outlook-absagen/taskpane.html` muss die Seite „Bewerbungsabsage“ zeigen.

## 5. Add-in in Outlook installieren
1. Im Browser https://aka.ms/olksideload öffnen (mit Firmenkonto anmelden).
2. **Meine Add-ins** → ganz unten **Benutzerdefiniertes Add-in hinzufügen** → **Aus Datei hinzufügen …** → `manifest.xml` wählen → Installieren.
3. Outlook auf dem Mac beenden und neu starten.

## Täglicher Gebrauch
1. Bewerbung auswählen → **Antworten**.
2. In der Symbolleiste der Antwort **„Absage einfügen“** klicken (ggf. unter „Apps“ bzw. „…“). Mit der Stecknadel lässt sich der Bereich anheften.
3. Eine der 4 Absagen anklicken → Text (Aptos, 12 pt) wird oben eingefügt, BCC an bewerbung@objectsystems.de gesetzt.
4. Prüfen → **Senden**.

Für eine manuelle Antwort das Add-in einfach nicht benutzen – dann wird auch keine BCC gesetzt.

## Texte später ändern
Auf GitHub die Datei `templates.js` öffnen → Stift-Symbol → Text ändern → „Commit changes“.
Damit Outlook die neue Fassung sicher lädt, in `taskpane.html` zusätzlich `?v=1` an beiden Stellen auf `?v=2` (usw.) erhöhen.

## Hinweise
- Fügt Outlook bei Antworten automatisch eine Signatur ein, steht diese unter dem Absagetext. Da die Vorlagen bereits mit „Marcus Meisenberg“ enden, ggf. für Antworten die Signatur auf „(keine)“ stellen.
- Das GitHub-Repository ist öffentlich; es enthält nur die Absagetexte und keine Zugangsdaten.
