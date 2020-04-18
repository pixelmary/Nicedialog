let modalButton = document.querySelector('.nice-button');

const showDialog = () => {
	let myDialog = new Dialog();
	myDialog.showModal('.nice-wrapper');
}

modalButton.addEventListener('click',showDialog);





