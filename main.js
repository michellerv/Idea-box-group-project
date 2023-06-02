//Query Selectors
var saveButton = document.querySelector('#saved');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');


var cardContainer = document.querySelector('.card-container')


//Global variables
var savedIdeas = [];
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
    <p class="card-title">${savedIdeas[i].title}</p>
    <p class="card-body">${savedIdeas[i].body}</p>`
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

