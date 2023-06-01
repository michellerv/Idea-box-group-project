//Query Selectors
var saveButton = document.querySelector('#saved');
var title = document.querySelector('.title-input');
var body = document.querySelector('.body-input');


//Global variables
var savedIdeas = []

//Event Listeners
saveButton.addEventListener('click', function(event){
  event.preventDefault();
  createIdea();
  saveIdea()
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
    return savedIdeas
}