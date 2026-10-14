// Absagevorlagen – hier können die Texte jederzeit angepasst werden.
// Jede Zeile ist ein Eintrag; "" erzeugt eine Leerzeile.

var BCC_ADRESSE = "bewerbung@objectsystems.de";
var SCHRIFTART = "Aptos, Calibri, Helvetica, Arial, sans-serif";
var SCHRIFTGROESSE = "12pt";

var VORLAGEN = {
  standard_de: {
    titel: "Standardabsage – Deutsch",
    zeilen: [
      "Sehr geehrte(r) Bewerber*In,",
      "",
      "vielen Dank für Ihre Bewerbung und das in die Object Systems GmbH gesetzte Vertrauen. Als Consulting Unternehmen mit den Schwerpunkten Softwareentwicklung und Qualitätssicherung in Softwareentwicklungsprojekten bieten wir momentan keine Stellen an, die Ihren Schwerpunkten entsprechen.",
      "",
      "Daher können wir Ihre Bewerbung nicht weiter berücksichtigen.",
      "",
      "Mit freundlichen Grüßen",
      "Marcus Meisenberg"
    ]
  },
  standard_en: {
    titel: "Standard rejection – English",
    zeilen: [
      "Dear Applicant,",
      "",
      "Thank you very much for your application and for the trust you have placed in Object Systems GmbH. As a consultancy firm specialising in software development and quality assurance in software development projects, we do not currently have any vacancies that match your areas of expertise.",
      "",
      "We are therefore unable to consider your application further.",
      "",
      "Yours faithfully,",
      "Marcus Meisenberg"
    ]
  },
  werkstudent_de: {
    titel: "Werkstudentabsage – Deutsch",
    zeilen: [
      "Sehr geehrte(r) Bewerber*In,",
      "",
      "vielen Dank für Ihre Bewerbung und das in die Object Systems GmbH gesetzte Vertrauen. Als ein personell noch recht kleines Consulting Unternehmen sind wir gegenwärtig nicht in der Lage, Werkstudenten zu betreuen. Gern möchten wir aber auf unser Mutterunternehmen Ordix verweisen (www.ordix.de). Dort ist so etwas nicht unüblich. Fragen Sie gern dort einmal an!",
      "",
      "Als Object Systems können wir Ihre Bewerbung leider nicht weiter berücksichtigen.",
      "",
      "Mit freundlichen Grüßen",
      "Marcus Meisenberg"
    ]
  },
  werkstudent_en: {
    titel: "Working student rejection – English",
    zeilen: [
      "Dear Applicant,",
      "",
      "Thank you very much for your application and for the trust you have placed in Object Systems GmbH. As a consulting firm that is still relatively small in terms of staff numbers, we are currently unable to take on working students. However, we would be happy to refer you to our parent company, Ordix (www.ordix.de). Such arrangements are not uncommon there. Please feel free to enquire with them!",
      "",
      "Unfortunately, Object Systems is unable to consider your application further.",
      "",
      "Yours faithfully,",
      "Marcus Meisenberg"
    ]
  }
};
