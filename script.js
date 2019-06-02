var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
 
    /**
     * adds item to the document
     */
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 



    /**
     * mark an item as complete
     */
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);



	/**
     * adds an 'x' to each item to delete
     */
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);



	/**
     * deletes an item which activates (display: none)
     */
	function deleteListItem(){
		li.classList.add("delete")
	}

}

/**
 * makes sure that an empty string isnt added to the list
 */
function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

/**
 * press enter to execute
 */
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

