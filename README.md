# Website

## Ontwikkelen op je eigen computer

We maken gebruik van `pnpm` om `npm packages` te installeren en scripts te draaien.
Om te beginnen kun je alle afhankelijkheden installeren met

```bash
pnpm install
```

Om daarna de preview server te starten met

```bash
pnpm run start
```

Hiermee start je lokale `development server`, opent een browser venster en herlaad deze de pagina als je lokaal veranderingen maakt. Voor veranderingen in de configuratie zoals `astro.config.js` bijvoorbeeld moet je mogelijk de server afsluiten door `Ctrl+C` in je terminal te doen en opnieuw `pnpm run start` te draaien.

## Build

De versie die gebruikt voor in productie wordt gebouwd door de code te `builden`. De statische website zoals deze op een server kan worden gezet, of in ons geval door GitHub Pages kan worden opgepakt, staat dan in de `/build` map.

```bash
pnpm run build
```

## Markdown om documentatie en onderzoek toe te voegen

De Markdown bestanden met de onderzoeken en documentatie van het project staan in de `/docs` map. Deze worden automatisch door de server opgepakt en als pagina's op de website neergezet.

Bovenin elke pagina staat een stukje metadata, deze wordt gebruikt om pagina titels in browser tabjes, menu-items in de sidebar en pagination componenten te stoppen en tags toe te voegen en SEO te verbeteren.

## Plaatjes toevoegen

Plaatjes zijn heel groot om via GitHub heen en weer te sturen. Daarom gebruiken we de [assets branch](https://github.com/nl-design-system/gebruikersonderzoeken/tree/assets) om plaatjes te uploaden. Deze kunnen vervolgens als plaatje in markdown worden gezet, zoals bijvoorbeeld:

```md
![Plaatje van een browser met waar de Google Translate pop-up getoond wordt om de pagina te gaan vertalen.](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/utrecht-google-translate.png)
```

Voor de naam van het bestand gebruik je `<naam van het markdown bestand>__<plek in de markdown>` bijvoorbeeld:

```md
![Een lijst van contactmomenten met de datum van het contactmoment, de beschrijving van het type contactmoment en titel](https://raw.githubusercontent.com/nl-design-system/gebruikersonderzoeken/assets/denhaag-mijn-omgeving__contactmomenten.png)
```
