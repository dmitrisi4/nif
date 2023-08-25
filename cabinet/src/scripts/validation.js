document.addEventListener('DOMContentLoaded', function () {
	const emailRegExp = /^[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+(\.[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+)*@(([-0-9a-zA-Z]+\.)+)([a-zA-Z0-9-]{2,4})$/;
	const nameMatch = (nameValue) =>  /^[a-zA-Z0-9](?:\s?[a-zA-Z0-9])*$/.test(nameValue) && nameValue.length <= 50;

	const registrationEmail = document.getElementById('registration-email');
	const registrationPassword = document.getElementById('registration-password');
	const registrationUserBtn = document.getElementById('registration-user-btn');
	const orderChangeForm = document.querySelector('#form-edit-order');
	const formFirstName = document.querySelector('#reg-form-name');
	const formLastName = document.querySelector('#reg-form-lastname');
	const formEmail = document.querySelector('#reg-form-email');
	const formTel = document.querySelector('#reg-form-tel');
	const regFormBtn = document.querySelector('#reg-form-btn');
	const contactInputName = document.querySelector('#contact-form-name');
	const contactInputEmail = document.querySelector('#contact-form-email');
	const contactInputComment = document.querySelector('#contact-form-comment');
	const contactBtn = document.querySelector('#contact-btn');

	//	init
	if (contactInputName.value.length === 0 || contactInputEmail.value.length === 0 || contactInputComment.value.length === 0) {
		contactBtn.disabled = true;
	}

	if (formFirstName.value.length === 0 || formLastName.value.length === 0 || formEmail.value.length === 0 || formTel.value.length === 0) {
		regFormBtn.disabled = true;
	}

	const radioBtnGroup = orderChangeForm.plan;
	let prev = null;
	for (let i = 0; i < radioBtnGroup.length; i++) {
		radioBtnGroup[i].addEventListener('change', function() {
			(prev) ? regFormBtn.disabled = false: null;
			if (this !== prev) {
				prev = this;
				regFormBtn.disabled = false
			}
		});
	}

		//email reg
		const setInvalidEmailStateFormRegUser = () => {
			registrationEmail.classList.add('invalid');
			registrationUserBtn.disabled = true;
		};
		const setValidEmailStateFormRegUser = () => {
			registrationEmail.classList.remove('invalid');
			registrationUserBtn.disabled = false;
		};
		// password reg

		const setInvalidPasswordStateFormRegUser = () => {
			registrationPassword.classList.add('invalid');
			registrationUserBtn.disabled = true;
		};
		const setValidPasswordStateFormRegUser = () => {
			registrationPassword.classList.remove('invalid');
			registrationUserBtn.disabled = false;
		};
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
	// contact comment
	const setInvalidContactCommentStateFormReg = () => {
		contactInputComment.classList.add('invalid');
		contactBtn.disabled = true;
	};
	const setValidContactCommentStateFormReg = () => {
		contactInputComment.classList.remove('invalid');
		contactBtn.disabled = false;
	};
	// 
	
	const validatorPhone = (phone) => {
		return phone.replace(/[^0-9+]/g, '');
	}

	registrationEmail.addEventListener('input', () => {
		const test = registrationEmail.value.length === 0 || emailRegExp.test(registrationEmail.value);
		if (test) {
			setValidEmailStateFormRegUser();
		} else {
			setInvalidEmailStateFormRegUser();
		}
	});

	registrationPassword.addEventListener('input', () => {
		if (registrationPassword.value.length < 6) {
			setInvalidPasswordStateFormRegUser();
		} else {
			setValidPasswordStateFormRegUser();
		}
	});


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

	contactInputComment.addEventListener('input', () => {
		const test = contactInputComment.value.length <=  200;
		if (test) {
			setValidContactCommentStateFormReg();
		} else {
			setInvalidContactCommentStateFormReg();
		}
	});
	
});