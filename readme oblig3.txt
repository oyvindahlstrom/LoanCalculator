**********************
*** README OBLIG 3 ***
** �YVIND AHLSTR�M ***
**********************

**** VALG AV TEKNOLOGI ****

L�nekalkulatoren ble laget i Web-API.

Det ble gjort to fors�k p� lage en applikasjon i Angular, men
disse egnet seg ikke til innlevering da de begge hadde problemer med �
kommunisere med API'en. Det ble brukt alt for mye tid p� � identifisere
problemet til at det l�nnet seg. Valgte derfor � fors�ke .NET Web-API med
mye fokus p� jQuery til manipulere DOM'en.
(Alt er tekst er p� engelsk da jeg �nsker � bli flinkere � kode p� engelsk)

**** FUNKSJONALITET ****

L�nekalkulator-applikasjonen er konstruert for � v�re brukervennlig med mye javascript-funksjonalitet.
Brukergrensesnittet er delt i to ledd.

F�rste ledd:
Brukeren m� f�rst velge �nsket l�nebel�p og antall �r ved � bevege p� de tilh�rende sliderne.
Resultatet blir vist i rubrikkene under. All annen informasjon er fjernet for brukeren for �yeblikket.
Dersom brukeren �nsker � g� videre med �nsket l�n m� brukeren trykke p� knappen: 'Wow, looks great! How can I apply?'.
Da kj�rer et JavaScript som �pner det andre leddet og automatisk scroller brukeren ned.

Andre ledd:
Her m� brukeren fylle inn personnummer, telefonnummer og epost. Disse blir validert fortl�pende med tilbakemeldinger
om hva som er gyldig og om det du har skrevet er gyldig. Dersom alt er gyldig kan brukeren registrere en l�nes�knad.

N�r en l�nes�knad blir registrert kj�res et kall til API'et som sjekker om bruker allerede har s�kt eller om det er gyldig
i forhold til modellen. Uavhengig av utfallet vil brukergrensesnittet forsvinne og en liten boks med resultatet blir vist.
(OBS, dette kallet kan ta et par sekunder, s� v�r litt t�lmodig etter � ha trykket p� knappen)

Dersom du er administrator (alle er) s� kan du se samtlige l�nes�knader ved � trykke p� knappen helt �verst p� skjermen.
Dette kj�rer et GET kall til API'et f�r samtlige s�knader vises. (OBS, dette kallet tar et par sekunder, s� v�r litt t�lmodig).

**** INSPIRASJON ****

CSS finner du i mappen 'Content' og filen 'styles.css'.

Jeg har funnet inspirasjon til CSS hos f�lgende:
** Input fields **
http://callmenick.com/post/various-css-input-text-styles

** Slider range **
https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/

**** Javascript/ jQuery ****

Scriptene finner du i mappen 'Scripts' og filen 'oblig3.js'.
