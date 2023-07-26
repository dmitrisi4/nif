document.addEventListener('DOMContentLoaded', function () {
	const emailRegExp = /^[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+(\.[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+)*@(([-0-9a-zA-Z]+\.)+)([a-zA-Z0-9-]{2,4})$/;
	const nameMatch = (nameValue) =>  /^[a-zA-Z0-9](?:\s?[a-zA-Z0-9])*$/.test(nameValue) && nameValue.length <= 50;

	const formFirstName = document.querySelector('#reg-form-name');
	const formLastName = document.querySelector('#reg-form-lastname');
	const formEmail = document.querySelector('#reg-form-email');
	const formTel = document.querySelector('#reg-form-tel');
	const regFormBtn = document.querySelector('#reg-form-btn');
	const contactInputName = document.querySelector('#contact-form-name');
	const contactInputEmail = document.querySelector('#contact-form-email');
	const contactBtn = document.querySelector('#contact-btn');

	if (contactInputName.value.length === 0 || contactInputEmail.value.length === 0) {
		contactBtn.disabled = true;
	}

	if (formFirstName.value.length === 0 || formLastName.value.length === 0 || formEmail.value.length === 0 || formTel.value.length === 0) {
		regFormBtn.disabled = true;
	}

	//email
	const setInvalidEmailStateFormReg = () => {
		formEmail.classList.add('invalid');
		regFormBtn.disabled = true;
	};
	const setValidEmailStateFormReg = () => {
		formEmail.classList.remove('invalid');
		regFormBtn.disabled = false;
	};
	// first name
	const setInvalidFirstNameStateFormReg = () => {
		formFirstName.classList.add('invalid');
		regFormBtn.disabled = true;
	};
	const setValidFirstNameStateFormReg = () => {
		formFirstName.classList.remove('invalid');
		regFormBtn.disabled = false;
	};
	// last name
	const setInvalidLastNameStateFormReg = () => {
		formLastName.classList.add('invalid');
		regFormBtn.disabled = true;
	};
	const setValidLastNameStateFormReg = () => {
		formLastName.classList.remove('invalid');
		regFormBtn.disabled = false;
	};
	//
	// contact name
	const setInvalidContactNameStateFormReg = () => {
		contactInputName.classList.add('invalid');
		contactBtn.disabled = true;
	};
	const setValidContactNameStateFormReg = () => {
		contactInputName.classList.remove('invalid');
		contactBtn.disabled = false;
	};
	// contact email
	const setInvalidContactEmailStateFormReg = () => {
		contactInputEmail.classList.add('invalid');
		contactBtn.disabled = true;
	};
	const setValidContactEmailStateFormReg = () => {
		contactInputEmail.classList.remove('invalid');
		contactBtn.disabled = false;
	};
	// 
	
	const validatorPhone = (phone) => {
		return phone.replace(/[^0-9+]/g, '');
	}


	formFirstName.addEventListener('input', () => {
		const test = nameMatch(formFirstName.value);
		if (test) {
			setValidFirstNameStateFormReg();
		} else {
			setInvalidFirstNameStateFormReg();
		}
	});

	formLastName.addEventListener('input', () => {
		const test = nameMatch(formLastName.value);
		if (test) {
			setValidLastNameStateFormReg();
		} else {
			setInvalidLastNameStateFormReg();
		}
	});

	formEmail.addEventListener('input', () => {
		const test = formEmail.value.length === 0 || emailRegExp.test(formEmail.value);
		if (test) {
			setValidEmailStateFormReg();
		} else {
			setInvalidEmailStateFormReg();
		}
	});

	formTel.addEventListener('input', () => {
		formTel.value = validatorPhone(formTel.value);
	});

	contactInputName.addEventListener('input', () => {
		const test = nameMatch(contactInputName.value);
		if (test) {
			setValidContactNameStateFormReg();
		} else {
			setInvalidContactNameStateFormReg();
		}
	});

	contactInputEmail.addEventListener('input', () => {
		const test = contactInputEmail.value.length === 0 || emailRegExp.test(contactInputEmail.value);
		if (test) {
			setValidContactEmailStateFormReg();
		} else {
			setInvalidContactEmailStateFormReg();
		}
	});
	
});