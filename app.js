// create a variable to receive the value input by user
let inputValue = ""
const ol = document.getElementById('todoOl')
const button = document.getElementsByTagName('span')
let vListArray = [];
let vLS = localStorage;

fGetOldList();

function fGetOldList() {
	getLS();
	for (let i=0; i < vListArray.length; i++) {
	        let vFindOl = document.querySelector('ol');
	        let vNewLi = document.createElement('li');
	        vNewLi.innerHTML = vListArray[i]+' <span id="'+i+'">Delete</span>';
	        // vNewLi.textContent=vListArray[i]+'   [Delete]';
	        vFindOl.appendChild(vNewLi);
	        vNewLi.setAttribute("id", i);
	    }
}


// when user clicks on the add button, it will get the value input by user and assign to variable
document.getElementById('btnTodo').addEventListener('click', (e) => {
	e.preventDefault()
	getLS();
	inputValue = document.getElementById('inputItem').value
	vListArray.push(inputValue);
	console.log(vListArray);

	fSaveToLS();
	createLi()
	eraseInput()
})

//create a li tag and put inputValue as a new item of the ol
function createLi() {
	let vFindOl = document.querySelector('ol');
	let newLi = document.createElement("li")
	let newNode = document.createTextNode(inputValue)
	let newId = vLS.length
	newLi.innerHTML = inputValue+' <span id="'+newId+'">Delete</span>';
	vFindOl.appendChild(newLi)
	newLi.setAttribute("id", newId)
}

// remove value from input field
function eraseInput() {
	document.getElementById("inputItem").value = ""
}

//create a variable varId to add an id to the new li tag and increment
// let varId = 0
function addId () {
	//varId += 1
	let newId = vLS.length
	return newId

	
}

//when user click on one item of the list it will change color to red and create a line through
ol.addEventListener('click', (e) => {
	let clikedID = e.target
	clikedID.classList.toggle("completed");
})

//send list to localStorage
function fSaveToLS() {
	vLS.setItem('mytodolist', JSON.stringify(vListArray));
}



//get list from localStorage
function getLS() {
	vListArray = JSON.parse(vLS.getItem('mytodolist'));
}

// remove from todo list
function fDelete() {
	getLS();

	button.addEventListener('click', (e) => {
		let vGetId = e.target;
		console.log(vListArray);
		vListArray.splice(vGetId,1);
		console.log(vListArray);
		fSaveToLS();
	})
}