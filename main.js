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
title.addEventListener('change', checkInput);
body.addEventListener('change', checkInput);
// document.getElementById('saved').disabled = true;
// saveButton.setAttribute('disabled', '') 

// cardContainer.addEventListener('click', function(event) {
//   if(event.target.className === "delete-button") {
//     event.target.parentElement.remove()
//   }
// })

// cardContainer.addEventListener('click', function(event) {
//   if (event.target.classList.contains('delete-button')) {
//     console.log("Hello")
//   }
// })


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
        <button onclick="deleteCard()" type="button" class="delete-button">
          <img class="delete-img" src="assets/delete.svg">
        </button>
      </nav>
      <p class="card-title">${savedIdeas[i].title}</p>
      <p class="card-body">${savedIdeas[i].body}</p>
    </article>`
  }
  checkInput()
}

function clearForm() {
  title.value = '';
  body.value = '';
}

saveButton.disabled = true;
function checkInput() {
  if (title.value === '' || body.value === '') {
    saveButton.disabled = true
  } else {
    saveButton.disabled = false
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