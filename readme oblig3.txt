**********************
*** README OBLIG 3 ***
** ØYVIND AHLSTRØM ***
**********************

**** VALG AV TEKNOLOGI ****

Lånekalkulatoren ble laget i Web-API.

Det ble gjort to forsøk på lage en applikasjon i Angular, men
disse egnet seg ikke til innlevering da de begge hadde problemer med å
kommunisere med API'en. Det ble brukt alt for mye tid på å identifisere
problemet til at det lønnet seg. Valgte derfor å forsøke .NET Web-API med
mye fokus på jQuery til manipulere DOM'en.
(Alt er tekst er på engelsk da jeg ønsker å bli flinkere å kode på engelsk)

**** FUNKSJONALITET ****

Lånekalkulator-applikasjonen er konstruert for å være brukervennlig med mye javascript-funksjonalitet.
Brukergrensesnittet er delt i to ledd.

Første ledd:
Brukeren må først velge ønsket lånebeløp og antall år ved å bevege på de tilhørende sliderne.
Resultatet blir vist i rubrikkene under. All annen informasjon er fjernet for brukeren for øyeblikket.
Dersom brukeren ønsker å gå videre med ønsket lån må brukeren trykke på knappen: 'Wow, looks great! How can I apply?'.
Da kjører et JavaScript som åpner det andre leddet og automatisk scroller brukeren ned.

Andre ledd:
Her må brukeren fylle inn personnummer, telefonnummer og epost. Disse blir validert fortløpende med tilbakemeldinger
om hva som er gyldig og om det du har skrevet er gyldig. Dersom alt er gyldig kan brukeren registrere en lånesøknad.

Når en lånesøknad blir registrert kjøres et kall til API'et som sjekker om bruker allerede har søkt eller om det er gyldig
i forhold til modellen. Uavhengig av utfallet vil brukergrensesnittet forsvinne og en liten boks med resultatet blir vist.
(OBS, dette kallet kan ta et par sekunder, så vær litt tålmodig etter å ha trykket på knappen)

Dersom du er administrator (alle er) så kan du se samtlige lånesøknader ved å trykke på knappen helt øverst på skjermen.
Dette kjører et GET kall til API'et før samtlige søknader vises. (OBS, dette kallet tar et par sekunder, så vær litt tålmodig).

**** INSPIRASJON ****

CSS finner du i mappen 'Content' og filen 'styles.css'.

Jeg har funnet inspirasjon til CSS hos følgende:
** Input fields **
http://callmenick.com/post/various-css-input-text-styles

** Slider range **
https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/

**** Javascript/ jQuery ****

Scriptene finner du i mappen 'Scripts' og filen 'oblig3.js'.
