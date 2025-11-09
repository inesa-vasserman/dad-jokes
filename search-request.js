import { getData } from "./index.js";

const $searchRequest = document.createElement('p');

export function getJokeByTerm(event) {
  event.preventDefault();
    $searchRequest.innerHTML = '';
  const $searchValue = document.getElementById('search-value');
  const $searchBar = document.getElementById('search-bar');

  const value = $searchValue.value.trim();

  if (!value) return;

  
  $searchRequest.innerHTML = '';
  $searchRequest.innerHTML = `Searching for "${value}"...`;
  $searchBar.appendChild($searchRequest);

  getData(value);
  $searchValue.value = '';
}
