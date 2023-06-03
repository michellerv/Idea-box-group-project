//Query Selectors
var saveButton = document.querySelector('#saved');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');
var cardContainer = document.querySelector('.card-container');

//Global variables
var savedIdeas = [];
var favoritedIdeas = [];
var currentIdea;

//Event Listeners
saveButton.addEventListener('click', function(event){
  event.preventDefault();
  createIdea();
  saveIdea();
  clearForm();
});

title.addEventListener('keyup', checkInput);
body.addEventListener('keyup', checkInput);

cardContainer.addEventListener('click', function(event) {
  if (event.target.className === 'star-button star-img-white') {
    favoriteIdea(event);
  } else if (event.target.className === 'star-button star-img-red') {
    unfavorite(event);
  } else if (event.target.className.includes('delete-button')) {
      deleteCard(event);
    }
  })

//Functions
function createIdea(title, body) {
  return {
    id: Date.now(),
    title: title,
    body: body,
    isFavorite: false,
    class: 'star-img-white'
  }
}
  
function saveIdea() {
  currentIdea = createIdea(title.value, body.value);
    savedIdeas.push(currentIdea);
    displayCard(currentIdea);
}

function displayCard() {
  cardContainer.innerHTML = ''
  for (var i = 0; i < savedIdeas.length; i++) {
    cardContainer.innerHTML +=
    `<article class="card" id= "${savedIdeas[i].id}">
      <nav class="card-nav">
        <button type="button" class="delete-button">
        </button>  
        <button type="button" class="star-button ${savedIdeas[i].class}">  
        </button>
      </nav>
      <p class="card-title">${savedIdeas[i].title}</p>
      <p class="card-body">${savedIdeas[i].body}</p>
    </article>`
  }
  saveButton.setAttribute('disabled', '');
}

function clearForm() {
  title.value = '';
  body.value = '';
}

function checkInput() {
  if (title.value === '') {
    saveButton.setAttribute('disabled', '');
  } else if (body.value === '') {
    saveButton.setAttribute('disabled', '');
  } else {
    saveButton.removeAttribute('disabled');
  }
}

function deleteCard(event) {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (parseInt(event.target.closest('article').id) === savedIdeas[i].id) {
      savedIdeas.splice(i, 1);
    }
    displayCard();
  }
}

function favoriteIdea(event) {
  for (var i=0; i < savedIdeas.length; i++) {
    if (parseInt(event.target.closest('article').id) === savedIdeas[i].id) {
      savedIdeas[i].isFavorite = true
      savedIdeas[i].class = 'star-img-red'
    } 
  }
  displayCard();
}

function unfavorite(event) {
  for (var i=0; i < savedIdeas.length; i++) {
    if (parseInt(event.target.closest('article').id) === savedIdeas[i].id) {
      savedIdeas[i].isFavorite = false
      savedIdeas[i].class = 'star-img-white'
    }
  }
  displayCard();
}