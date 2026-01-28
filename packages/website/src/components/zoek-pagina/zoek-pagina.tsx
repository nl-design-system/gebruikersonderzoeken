import { fetchResults } from '@components/search/algolia-api/fetch-results.ts';
const url = new URL(document.URL);
const searchParams = new URLSearchParams(url.searchParams);

if (searchParams.has('query') && document.querySelector('h1')) {
  document.querySelector('h1').innerText += ` naar "${searchParams.get('query')}"`;
}

fetchResults(searchParams).then((map) => {
  if (!map) return;
  const resultList = document.getElementById('result-list');
  map.forEach((snippets, url) => {
    const listItem = document.createElement('li');
    const link: HTMLAnchorElement = document.createElement('a');

    link.href = url;
    link.innerHTML = snippets.lvl0;
    listItem.appendChild(link);

    if (snippets.content.length) {
      snippets.content.forEach((snipet) => {
        const span = document.createElement('span');
        span.innerHTML = snipet;

        const br = document.createElement('br');
        listItem.appendChild(br);

        listItem.appendChild(span);
      });
    }

    resultList.appendChild(listItem);
  });
});

export default function ZoekPagina() {
  console.log('zoek pagina');
  return (
    <>
      <h1>zoeken</h1>
      <ul id="result-list"></ul>
    </>
  );
}
