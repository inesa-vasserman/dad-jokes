const LIMIT = 5;
export const $jokesHolder = document.getElementById('jokes-holder');


export function getData(term='') {
    
    let page = Math.floor(Math.random() * 15) + 1;
    if(term !== '') {
        page = ''
    }
  fetch(`https://icanhazdadjoke.com/search?limit=${LIMIT}&page=${page}&term=${term}`, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      $jokesHolder.innerHTML = '';
      
      data.results.forEach(joke => {
        const p = document.createElement('p');
        p.innerHTML = `<br>${joke.joke} Joke id is:${joke.id}`;
        $jokesHolder.appendChild(p);

      });
    })
    .catch(error => console.error('Error:', error));
}

getData();

console.log("I am working");
