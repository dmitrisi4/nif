document.addEventListener('DOMContentLoaded', function () {
	const emailRegExp = /^[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+(\.[=_0-9a-zA-Z+~'!\$&*^`|\\\#%/?{}-]+)*@(([-0-9a-zA-Z]+\.)+)([a-zA-Z0-9-]{2,4})$/;
	const nameMatch = (nameValue) =>  /^[a-zA-Z0-9](?:\s?[a-zA-Z0-9])*$/.test(nameValue) && nameValue.length <= 50;

	const formFirstName = document.querySelector('#reg-form-name');
	const formLastName = document.querySelector('#reg-form-lastname');
	const formEmail = document.querySelector('#reg-form-email');
	const formTel = document.querySelector('#reg-form-tel');
	const regFormBtn = document.querySelector('#reg-form-btn');

	const setInvalidEmailStateFormReg = () => {
		formEmail.classList.add('invalid');
		regFormBtn.disabled = true;
	};
	
	const setInvalidLastNameStateFormReg = () => {
		formLastName.classList.add('invalid');
		regFormBtn.disabled = true;
	};
	const setInvalidTelStateFormReg = () => {
		formTel.classList.add('invalid');
		regFormBtn.disabled = true;
	};

	[formFirstName].forEach(formBtn => {
		formBtn.addEventListener('input', () => {
			const test = nameMatch(formFirstName.value);
			if (test) {
				formFirstName.classList.remove('invalid');
				regFormBtn.disabled = false;
			} else {
				formFirstName.classList.add('invalid');

			}
		})
	});

	[formLastName].forEach(formBtn => {
		formBtn.addEventListener('input', () => {
			const test = nameMatch(formLastName.value);
			if (test) {
				formLastName.classList.add('invalid');
				regFormBtn.disabled = false;
			} else {
				formLastName.classList.add('invalid');
			}
		})
	});
	
});