//Query Selectors
var saveButton = document.querySelector('#saved');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');
var cardTitle = document.querySelector('.card-title');
var cardBody = document.querySelector('.card-body');
var card = document.querySelector('.card');


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
    // return savedIdeas
}

function displayCard(currentIdea) {
  cardTitle.classList.remove('hidden');
  cardBody.classList.remove('hidden');
  card.classList.remove('hidden')

  cardTitle.innerText = currentIdea.title;
  cardBody.innerText = currentIdea.body
}

function clearForm() {
  title.value = '';
  body.value = '';
}
