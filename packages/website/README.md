# Website

Deze repository bevat de code voor de website [gebruikersonderzoeken.nl](https://gebruikersonderzoeken.nl)

De website is gebouwd met behulp van [Astro](https://astro.build)

<!-- TODO: Update de readme (#344) -->

## Lokaal de build draaien met de Apache HTTP server

Apache HTTP server wordt momenteel gebruikt voor hosting van gebruikersonderzoeken.nl. Als je [Docker](https://docs.docker.com/desktop/) geïnstalleerd hebt, dan kun je de website starten met Apache, zodat je lokale testomgeving nauwkeuriger lijkt op productie.

Het belangrijkste voordeel is dat je HTTP redirects kunt testen die in `public/.htaccess` zijn ingesteld.

1. Zorg dat je een build hebt gemaakt: `pnpm run build`
2. `docker compose up`
3. ga naar [`http://localhost:8080/`](http://localhost:8080/)
4. Je kunt nu `static/.htaccess` aanpassen, en gelijk de resultaten testen.
5. Bijvoorbeeld: ga naar [`http://localhost/example-404`](http://localhost/example-404) om te kijken of onze eigen 404-foutpagina zichtbaar is.
