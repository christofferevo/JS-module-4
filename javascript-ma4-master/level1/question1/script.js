var buttonEvent = document.getElementById('secretButton')

buttonEvent.addEventListener('click', function(e){

	 	alert('The button was pressed without errors');
   		e.stopPropagation();
	})

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(result => result.json())
  .then((res) => {
    createCards(res);
  })
.catch(err => console.log(err))


function createCards(result){
    var cardsInfo = document.getElementById('toDoCards');
  cardsInfo.innerHTML += "<span>userId: " + result.userId + "</span>";
  cardsInfo.innerHTML += "<span>id:   " + result.id + "</span>";
  cardsInfo.innerHTML += "<span>title: " + result.title + "</span>";
  cardsInfo.innerHTML += "<span>completed:   " + result.completed+ "</span>";
}
