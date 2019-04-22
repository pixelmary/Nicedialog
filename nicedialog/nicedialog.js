let myDialog = new Dialog();
let modalButton = document.querySelector('.nice-button');

/** Asign the event to the button */
document.addEventListener('click',function(){
	if(event.target.classList.contains('nice-button')) {
		myDialog.showModal('.nice-wrapper')
	} 
	return;
})



