---
title: Gebruikersonderzoek toetsenbordbesturing tekenen op de kaart
hide_title: true
hide_table_of_contents: false
sidebar_label: Gebruikersonderzoek toetsenbordbesturing tekenen op de kaart
pagination_label: Gebruikersonderzoek toetsenbordbesturing tekenen op de kaart
description: In hoeverre is de voorgestelde toetsenbordbesturing voor kaarttekenen intuïtief voor gebruikers zonder muis, en welke verbeterpunten zijn er in menu's, toelichting en opslaan?
summary: Sanity check met de doelgroep om te controleren of de gekozen richting van een vroege ontwerpvariant klopt ('paper prototype'). We onderzoeken of de oplossing intuïtief werkt voor mensen die geen muis kunnen gebruiken en afhankelijk zijn van toetsenbord, spraakbesturing of screenreader. De inzichten uit deze fase geven richting aan verdere aanscherping van het ontwerp.
keywords:
  - toetsenbordbesturing
  - kaartfunctionaliteit
  - kaartapplicatie
  - handbeperking
  - geografisch informatie systeem
  - paper prototype
  - sanity check
  - kadaster
tags:
  - toetsenbordbesturing
  - kaartfunctionaliteit
  - kaartapplicatie
  - handbeperking
  - geografisch informatie systeem
  - paper prototype
  - sanity check
themes:
  - doelgroep-specifiek
  - navigatie
  - toegankelijkheid
conducted_by:
  - Valsplat / Happy Labs
date_added: 2026-04-01
date_conducted: 2026-27-02
target_group: Mensen die geen muis kunnen gebruiken en afhankelijk zijn van toetsenbord, spraakbesturing of screenreader
type: Interviews
---

<!-- @license CC0-1.0 -->

# Gebruikersonderzoek toetsenbordbesturing tekenen op de kaart

## Doel van het onderzoek

Het Generieke Geo Componenten team ontwikkelt een toegankelijke kaartoplossing die breed inzetbaar moet zijn binnen meerdere applicaties van Kadaster en het Ministerie van VRO. Met toetsenbordbediening, logische stapgroottes en duidelijke selecties staat toegankelijkheid centraal.

Dit onderzoek vormt fase 1: een sanity check. In deze fase toetsen wij een vroege ontwerpvariant met de doelgroep om te controleren of de gekozen richting klopt. We onderzoeken of de oplossing intuïtief werkt voor mensen die geen muis kunnen gebruiken en afhankelijk zijn van toetsenbord, spraakbesturing of screenreader. De inzichten uit deze fase geven richting aan verdere aanscherping van het ontwerp.

Hoofdvragen onderzoek:

- Hoe begrijpen en beoordelen gebruikers de voorgestelde oplossingsrichtingen voor de kaartapplicaties van het Kadaster?
- Welke knelpunten en verbeterkansen zijn er in deze oplossingsrichtingen?

## Advies

Huidige uitgangspunten goede basis om op door te ontwikkelen

### Interactie sluit grotendeels aan op verwachting

De uitgangspunten van toetsenbordinteractie zoals die met het huidige prototype zijn getest (bewegende kaart, zwevend paneel met toelichting) sluiten over het algemeen aan bij het verwachtingspatroon van de respondenten en leveren geen onoverkomelijke issues op.

Ook het principe van tekenen + aanpassen op een kaart sluit aan bij hoe men dit zou verwachten (maar een test met een echt werkend prototype/site is nodig om hier harde uitspraken over te doen).

### Grootste issues binnen menu, knoppen en toelichting

Wel is er op verschillende punten verbetering mogelijk:

- De combinatie van zeer verschillende soorten functionaliteit binnen hetzelfde menu (kiezen van
  bediening en configureren van stapgrootte vs tekenen en aanpassen) is niet vanzelfsprekend - zeker wanneer er geen labels bij staan.
- De formulering en vormgeving van de toelichting maakt het soms lastig om goed te begrijpen wat je moet doen
- De mogelijkheid van het instellen van stapgrootte is hierdoor soms ook lastig te begrijpen en toe te passen.
- 'Opslaan' wordt op verschillende plekken aangeboden, waardoor het niet duidelijk is welke je moet gebruiken om wat op te slaan.

### Goed om te weten

We gaan in deze beknopte rapportage vooral in op verwachting en perceptie van de mogelijkheden binnen het tekenen op de kaart. Echte interactie was met het statische prototype niet mogelijk.

Daarom geven we niet overal uitgesproken conclusies of aanbevelingen over specifieke details van daadwerkelijk gebruik. Dat zou zeker in een vervolgtest met een werkend prototype goed zijn om nader te onderzoeken.

## Resultaten en inzichten

### Starten met tekenen

> "Heb ik 'm dan nu al getekend?"

#### Niet duidelijk hoe je start met tekenen

![Screenshot van prototype toont titel: nieuwe KLIC melding. Daaronder een stap indicator waarbij stap twee is geselecteerd. Daaronder de vraag: Op welke locatie wilt u graven? Daaronder enkele formulierelementen en een kaart. Onder de kaart staan twee knoppen met de tekst 'vorige' en 'teken graafgebied'.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-1.png)

##### Observaties

Verschillende respondenten willen al in dit scherm beginnen met tekenen en zien de knop 'teken graafgebied' niet of pas later (soms zelfs pas nadat de interviewer hierop heeft gewezen).

### Toetsenbordbesturing is duidelijk wanneer dit wordt uitgelegd

> "Ik kan maar één hand gebruiken, dus kan ik sommige toetscombinaties niet uitvoeren."

#### Toetsenbord besturing

![Screenshot van prototype toont een kaart met daarop een ronde lichtgevende cirkel als kruissteken. Rechts in de bovenhoek ligt op de kaart een element met vier iconen. Het eerste icoon is geselecteerd. Onder de iconen staat de titel: Hoe wilt u de kaart besturen? Daaronder staan twee opties: muis en toetsenbord. Daaronder staat een tekst met de titel: Toetsenbordbesturing.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-2.png)

##### Observaties

- Deze respondenten wisten niet uit zichzelf hoe je de toetsenbord optie kunt kiezen. Tab-navigatie en andere standaard toetsenbord functies zijn vaak onbekend of worden gemist in de uitleg.

- Als er eenmaal voor toetsenbordbediening is gekozen, is de interactie in de UI duidelijk en werkt het kruisteken niet storend.

- Bij de eerste keer zien van het paneel/menu zien we dat respondenten dicht bij het scherm gaan zitten. De tekst wordt als klein ervaren.

##### Aanbevelingen

- Overweeg om de werking van tab-navigatie en andere basishandelingen expliciet uit te leggen (bij de start van de flow).
- Combinaties als 'Ctrl+pijltje' zijn voor sommige respondenten lastig uit te voeren. Navigeren met één toets werkt makkelijker en fijner. Behoud de navigatie met enkele toetsen in plaats van toetsencombinaties. Dit staat nu al goed in het prototype.

### Bewegen van de kaart werkt prima.

> "Het werkt goed, maar ik zou eerst inzoomen."

#### Kaart beweging

![Screenshot van prototype toont een kaart met daarop een blauw rechthoekig kader. In het kader staat een kruis van pijlen die naar boven, rechts, onder en links wijzen. Onder dit rechthoek staat een button met de tekst 'Kies gebied'.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-3.png)

##### Observaties

- Het verplaatsen van de kaart met pijltjestoetsen wordt logisch gevonden en werkt prettig. De meeste respondenten accepteren deze methode zonder problemen, zeker als ze het “Topokaart”-voorbeeld zien. Sommige respondenten geven aan liever het vaste kruis/vizier te kunnen bewegen.
- Het vizier is niet storend zolang het duidelijk aangeeft wat het middelpunt is.

##### Aanbevelingen

- Behoud de huidige werking waarin het kruisteken stilstaat en de kaart beweegt bij toetsenbordnavigatie.
- Test het gedrag in een werkende prototype/versie om zeker te weten of men er in de praktijk snel aan went. Onze aanname is van wel.

### Stapgrootte aanpassen niet vanzelfsprekend

> "Ik neem aan dat ze in/uitzoomen bedoelen?"

#### Stapgrootte

![Screenshot van prototype toont een kaart. Rechts in de bovenhoek ligt op de kaart een element met vier iconen. Het tweede icoon is geselecteerd. Onder de iconen staan vier opties: Picro, Klein, Middel en Groot. Middel is geselecteerd. Daaronder staat een tekst met de titel: Pas de afstand aan waarmee u de kaart verplaatst.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-4.png)

##### Observaties

- Het kunnen aanpassen van de stapgrootte is niet iets wat mensen verwachten meteen zelf te kunnen doen (deels testeffect omdat dit nu als eerste moest worden gedaan).
- Een enkeling verwoordt een prima begrip; anderen hebben er moeite mee om te begrijpen wat het doet.
- Het icoon '←→' zonder label wordt niet altijd goed begrepen en eerder gerelateerd aan de iconen er naast om te teken en aan aan te passen
- Het is niet altijd duidelijk wat je dan concreet aanpast: sommigen verwarren het, ook op basis van de toelichtingsterm als 'afstand', met inzoomen.
- Soms heeft men moeite met het vinden van de '[' en ']' karakters op het toetsenbord.
- De relatie tussen het aanpassen en de termen 'micro/klein/middel/groot' wordt niet altijd begrepen en ook niet expliciet gemaakt.

##### Aanbevelingen

- Het configureren van de stapgrootte staat als functionaliteit niet op hetzelfde niveau als tekenen en aanpassen - maak in de interface een duidelijk onderscheid hiertussen.
- Leg in de toelichting duidelijk verband tussen de 4 gradaties: “Kies met behulp van '[' en ']' - toetsen om te wisselen tussen micro, klein, middel en grote afstand van je stap”. Of label de stappen met 1, 2, 3, 4 en maak de keuze heel direct door ze met nummertoetsen te kunnen kiezen.
- Denk goed na over de vraag waarom je de stapgrootte eigenlijk zou moeten kunnen aanpassen. Sommige respondenten verwachten dat de stap ook kleiner wordt als je verder inzoomt.

### Het tekenen, aanpassen en toevoegen wordt begrepen

> Ik zou op de 'Enter'-toets drukken en dan zou ik die punten markeren waar ik zou willen, ja, die ik zou willen aftekenen.

> Ik zou op bewerken willen drukken, daar rechtsboven met dat potloodje.

#### Tekenen, aanpassen & toevoegen

![Screenshot van prototype toont een kaart met daarop een ronde lichtgevende cirkel als kruissteken. Rechts in de bovenhoek ligt op de kaart een element met vier iconen. Het vierde icoon is geselecteerd. Onder de iconen staan vier opties: Hoekpunt aanpassen, Hoekpunt toevoegen, Opslaan, Annuleren. Hoekpunt aanpassen is geselecteerd. Daaronder staat een tekst met de titel: Kies het hoekpunt dat u wilt bewerken.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-5.png)

##### Observaties

- Het tekenen, aanpassen en toevoegen lijkt te worden begrepen, de respondenten konden in eigen woorden goed uitleggen wat ze zouden doen en wat er op het scherm zou gebeuren.
- De uitleg onder de tabs en naast het tekenen hielp bij het begrijpen van de functies. Al was deze soms wel te klein.
- Na het instellen van toetsenbordbediening was er bij sommige deelnemers kort twijfel over hoe te starten. Ze konden het menu prima zelfstandig verkennen, maar verwachtten onder het potlood-icoon te kunnen tekenen en bij het pijltjes-icoon getekende punten te verplaatsen. Dit wijst op een potentiële mismatch tussen de verwachtingen die iconen oproepen en hun daadwerkelijke functie.

##### Aanbeveling

- Overweeg labels toe te voegen bij de verschillende menu-items zodat het direct duidelijk is wat je kan doen.
- En overweeg configuratiefuncties te splitsen van de tekenfuncties.

### Wat sla je waarmee op?

#### Opslaan

![Screenshot van prototype toont een kaart met daarop een ronde lichtgevende cirkel als kruissteken. Rechts in de bovenhoek ligt op de kaart een element met vier iconen. Het vierde icoon is geselecteerd. Onder de iconen staan vier opties: Hoekpunt aanpassen, Hoekpunt toevoegen, Opslaan, Annuleren. Hoekpunt toevoegen is geselecteerd. Daaronder staat een tekst met de titel: Kies de lijn waar u een hoekpunt wilt toevoegen. Linksonder de kaart staan twee knoppen met de tekst 'Annuleren' en 'Opslaan'.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-6.png)

##### Observaties

Niet iedereen ziet beide knoppen voor 'opslaan'. En als men het ziet, kan niet iedereen helder aangeven wat je met welke knop precies opslaat.

##### Aanbeveling

- Implementeer autosave binnen de kaart, daarmee is de knop 'opslaan' in het paneel overbodig.
- Pas de verwoording in de knop onderin aan om verwarring te voorkomen en relateer deze meer aan het overkoepelende KLIC-proces waarmee je bezig bent: “Door naar volgende stap: [naam]”.

### Klein kruisteken heeft voorkeur, maar andere opties staan niet in de weg

> Hij zou wel iets kleiner mogen

#### Kruistekens & achtergronden

[Ronde lichtgevende cirkel als kruissteken op drie verschillende kaart-typen. Illustratief, zwart-wit en satelietfoto.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/kadaster-7.png)

##### Observaties

- Respondenten lijken geen problemen te hebben met de zichtbaarheid van het kruisteken op verschillende kaart achtergronden.
- Een aantal respondenten geeft aan dat een kleiner kruisteken nauwkeuriger aanvoelt, omdat de kruislijnen dichter bij elkaar staan. Dit zou af kunnen hangen van de behoefte aan detail.

## Wat is er mee gedaan?

De opgedane kennis wordt ingezet om een werkend prototype te maken waarmee vervolgonderzoek binnen de doelgroep zal plaatsvinden.

## Opzet onderzoek

### De interviews

De interviews vonden plaats op 16 februari 2026 in het remote UX lab van Happy Labs. In één-op-één interviews van 60 minuten gingen respondenten samen met ons aan de slag met het testmateriaal.

### 3 Respondenten

Alle respondenten hadden in zekere mate een beperking met betrekking tot het gebruik van muis en/of toetsenbord. Deze respondenten waren niet native toetsenbordgebruikers.

### Testmateriaal

Een statisch prototype met kaart-tekenfuncties. Dit prototype lijkt op een KLIC-graafmelding, zodat respondenten zich makkelijk kunnen verplaatsen in deze situatie.

## Documentatie

De volgende site is gebruikt in dit onderzoek:

https://topokaarten.kadaster.nl/#/kaart-bestellen (Bestellen - Gebied kiezen - Zoeken)

De inzichten uit dit onderzoek hebben onder andere waarde voor:

- https://www.kaartenvannederland.nl (Tekenen en Meten)
- https://app.pdok.nl/viewer (Meten)

## Contactinformatie

Valsplat:

- https://valsplat.nl/nl/
- hello@valsplat.nl

Happy Labs:

- https://happylabs.nl/nl/
- hello@happylabs.nl

## Bijlagen

[kadaster-toegankelijkheid-tekenen-op-de-kaart-sanity-check (PDF, 2,8MB](https://github.com/user-attachments/files/26438420/kadaster-toegankelijkheid-tekenen-op-de-kaart-sanity-check.pdf)
