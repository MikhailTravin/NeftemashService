/* Маски для полей*/

const tel = document.querySelectorAll('.tel');
if (tel) {
	Inputmask({ "mask": "+7(999)999-99-99" }).mask(tel);
}

const dataCard = document.querySelectorAll('.date-card');
if (dataCard) {
	Inputmask({ "mask": "99/99" }).mask(dataCard);
}

const codeCard = document.querySelectorAll('.code-card');
if (codeCard) {
	Inputmask({ "mask": "999" }).mask(codeCard);
}

const numCard = document.querySelectorAll('.num-card');
if (numCard) {
	Inputmask({ "mask": "9999 9999 9999 9999" }).mask(numCard);
}