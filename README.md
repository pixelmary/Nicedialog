# Nicedialog.js
## A modal window plugin
Nicedialog is a small plugin written in Vanilla JS for the use of modal windows use in your web pages.

You can transform any div with the `showModal ()` method into a popup.

Example of use:

```
let myDialog = new Dialog();
let modalButton = document.querySelector('.nice-button');

document.addEventListener('click',function(){
	if(event.target.classList.contains('nice-button')) {
		myDialog.showModal('.nice-wrapper')
	} 
	return;
})
```
