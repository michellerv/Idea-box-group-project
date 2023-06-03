//Query Selectors
var saveButton = document.querySelector('#saved');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');
var cardContainer = document.querySelector('.card-container')

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

//Functions
function createIdea(title, body) {
  return {
    id: Date.now(),
    title: title,
    body: body
  }
}
  
function saveIdea() {
  var currentIdea = createIdea(title.value, body.value)
    savedIdeas.push(currentIdea)
    displayCard(currentIdea)
}

function displayCard() {
  cardContainer.innerHTML = ''

  for (var i = 0; i < savedIdeas.length; i++) {
    cardContainer.innerHTML +=
    `<article class="card" id= '${savedIdeas[i].id}'>
      <nav class="card-nav">
        <button  type="button" class="delete-button" id="delete" onClick="starButton()">

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
    saveButton.setAttribute('disabled', '')
  } else if (body.value === '') {
    saveButton.setAttribute('disabled', '')
  } else {
    saveButton.removeAttribute('disabled')
  }
}

function deleteCard() {
  for (var i = 0; i < savedIdeas.length; i++) {
    if (parseInt(event.target.closest('article').id) === savedIdeas[i].id) {
      savedIdeas.splice(i, 1)
    }
      displayCard()
    }
}
// deleteButton.addEventListener('click', starButton)
  // add onclick(starButton) to the star button
var deleteButton = document.getElementsByClassName('delete-button')

function toggleClass(element, className) {
  element.classList.toggle(className)
}

function starButton() {
  for (var i=0; i < savedIdeas.length; i++) {
  if (parseInt(event.target.closest('article').id) === savedIdeas[i].id) {
    favoritedIdeas.push(savedIdeas[i])
  } 
  toggleClass(deleteButton[i], 'star-img')
  }
}