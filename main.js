const characters = document.querySelector('ul')
const char= document.createElement('li')

	const grego = fetch('http://swapi.co/api/people/').then(response => response.json()).then(grego =>{
  for (var i=0; i <grego.results.length; i++){

  let char= document.createElement('li')
  char.innerHTML += grego.results[i].name
  characters.appendChild(char)
  }})
