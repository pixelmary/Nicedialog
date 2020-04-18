/** 
 * Nice Dialog class v.2.0
 * @constructor This create the modal and the divs to append them in the showModal method 
 * @showModal Method Appends the close button and the overlay layer to the modal div
 */

class Dialog {
	constructor() {
		this.closeButton = document.createElement('span');
		this.overlay = document.createElement('div');
		this.niceModal = document.createElement('div');

		this.closeButton.classList.add('close-modal');
		this.overlay.classList.add('overlay');
		this.niceModal.classList.add('nice-modal');

		this.closeButton.addEventListener('click', this.closeModal.bind(this));
	}

	showModal(selector) {
		let niceWrapper = document.querySelector(selector);
		let body = document.querySelector('body');

		niceWrapper.appendChild(this.closeButton);
		this.niceModal.appendChild(this.overlay);
		this.overlay.appendChild(niceWrapper);
		this.overlay.classList.add('nice-modal-show');

		body.appendChild(this.niceModal);

		let niceWrapperWidth = niceWrapper.offsetWidth;
		let niceWrapperHeight = niceWrapper.offsetHeight;
		let overlayWidth = this.overlay.offsetWidth;
		let overlayHeight = this.overlay.offsetHeight;
		let niceWrapperPosX = (overlayWidth - niceWrapperWidth) / 2;
		let niceWrapperPosY = (overlayHeight - niceWrapperHeight) / 2;

		niceWrapper.style.right = niceWrapperPosX + 'px';
		niceWrapper.style.top = niceWrapperPosY + 'px';
	}

	closeModal() {
		this.overlay.classList.remove('nice-modal-show');
	}
}