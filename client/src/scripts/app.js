import {ORDERS_URL, CONTACTS_URL} from './api';

if (document) {

	const observerOptions = {
    rootMargin: '-50px 0px -55%',
    threshold: [0, 0.5, 1]
	};

	const observerAnimationOptions = {
		rootMargin: '50% 0px',
    threshold: [0, 0.5, 1]
	};

	const observer = new IntersectionObserver(observerCallback, observerAnimationOptions);
	const observerAnimations = new IntersectionObserver(observerMenuCallback, observerOptions);
	const menuItemFirst = document.querySelectorAll('.menu-item-first');
	const menuItemSecond = document.querySelectorAll('.menu-item-second');
	const menuItemThird = document.querySelectorAll('.menu-item-third');

	function observerMenuCallback(entries, observer) {
		entries.forEach(entry => {
			if(entry && entry.isIntersecting) {
				if (entry.target.id === 'nifOnlineView') {
					menuItemFirst.forEach((itemFirst) => {
						itemFirst.classList.add('active');
					});
					menuItemThird.forEach((itemThird) => {
						itemThird.classList.remove('active');
					});
					menuItemSecond.forEach((itemSecond) => {
						itemSecond.classList.remove('active');
					});
				} else if (entry.target.id === 'faqWrapper') {
					menuItemFirst.forEach((itemFirst) => {
						itemFirst.classList.remove('active');
					});
					menuItemThird.forEach((itemThird) => {
						itemThird.classList.remove('active');
					});
					menuItemSecond.forEach((itemSecond) => {
						itemSecond.classList.add('active');
					});
				} else if (entry.target.id === 'contactForm') {
					menuItemFirst.forEach((itemFirst) => {
						itemFirst.classList.remove('active');
					});
					menuItemThird.forEach((itemThird) => {
						itemThird.classList.add('active');
					});
					menuItemSecond.forEach((itemSecond) => {
						itemSecond.classList.remove('active');
					});
				}
			}
		});
	}

	function observerCallback(entries, observer) {
			entries.forEach(entry => {
				if(entry && entry.isIntersecting && entry.intersectionRatio  > 0.40) {
					entry.target.classList.add('active');
				} else {
					entry.target.classList.remove('active');
				}
			});
	};

	let target = '.targetSelector';
	document.querySelectorAll(target).forEach((i) => {
			if (i) {
				observer.observe(i);
				observerAnimations.observe(i);
			}
	});

	document.addEventListener('DOMContentLoaded', function () {
			const burgerBtn = document.querySelector('.burger-btn');
			const mainMenu = document.querySelector('.main-menu');
			const langBtn = document.querySelector('.lang-btn');
			const langMenu = document.querySelector('.lang-menu');
			const langComp = document.querySelector('.lang-comp');
			const modalReg = document.querySelector('.modal-reg');
			const detailsArr = document.querySelectorAll('.details');
			const modalWrapper = document.querySelector('.modal-wrapper');
			const modaCloseBtnlReg = document.querySelector('.close-reg-form');
			const getNifBtn = document.querySelectorAll('.btn-get-nif');
			const getStartedBtn = document.querySelector('.btn-get-started');
			const orderBtn = document.querySelectorAll('.order-btn');
			const oneDayRadio = document.querySelector('#oneDay');
			const sixDayRadio = document.querySelector('#sixDay');
			const elevenDayRadio = document.querySelector('#elevenDay');
			const modalSucces = document.querySelector('.modal-succes');
			const closeSaccessForm = document.querySelector('.close-saccess-form');
			const closeSaccessBtn = document.querySelector('.close-saccess-btn');
			const modalTerms = document.querySelector('.modal-terms');
			const showTermsModalBtns = document.querySelectorAll('.show-terms-modal');
			const closeTermsModalBtn = document.querySelector('.close-modal-terms');
			let searchParams;
			if (window && 'URLSearchParams' in window) {
				searchParams = new URLSearchParams(window.location.search);
			}

			const regForm = document.querySelector('#regForm');
			const formFirstName = document.querySelector('#reg-form-name');
			const formLastName = document.querySelector('#reg-form-lastname');
			const formSocial = document.querySelector('#reg-form-social');
			const formEmail = document.querySelector('#reg-form-email');
			const formTel = document.querySelector('#reg-form-tel');
			const selectCountries = document.querySelector('#js-choice');

			const contactForm = document.querySelector('#contactForm');
			const contactInputName = document.querySelector('#contact-form-name');
			const contactInputEmail = document.querySelector('#contact-form-email');
			const contactInputComment = document.querySelector('#contact-form-comment');

			const oneDayDate = document.querySelector('#oneDayDate');
			const sixDayDate = document.querySelector('#sixDayDate');
			const elevenDayDate = document.querySelector('#elevenDayDate');
			

			// contact form
			contactForm.addEventListener('submit', (e) => {
				e.preventDefault();
				
				const body = {
					name: contactInputName.value,
					email: contactInputEmail.value,
					comment: contactInputComment.value
				};
				sendContact(CONTACTS_URL, JSON.stringify(body));
			});

			async function sendContact(url, data) {
				try {
					const response = await fetch(url, {
						method: 'PUT',
						headers: {
							"Content-Type": "application/json",
						},
						body: data,
					});
					if (response.status === 200) {
						openSuccessModal();
					}
				} catch (error) {
					console.error("Error:", error);
				}
			}

			// reg form
			regForm.addEventListener('submit', (e) => {
				e.preventDefault();
				
				const body = {
					name: formFirstName.value,
					last_name: formLastName.value,
					email: formEmail.value,
					phone_number: formTel.value,
					social_network: formSocial.value,
					country: selectCountries.value,
					plan: document.querySelector("input[name=plan]:checked").value
				};
				sendOrder(ORDERS_URL, JSON.stringify(body))
			});

			async function sendOrder(url, data) {
				try {
					const response = await fetch(url, {
						method: 'PUT',
						headers: {
							"Content-Type": "application/json",
						},
						body: data,
					});
					if (response.status === 200) {
						closeRegModal();
						openSuccessModal();
					}
				} catch (error) {
					console.error("Error:", error);
				}
			}
			

			//open/close modal
			const changeUrlParams = () => {
				const newUrlWithOpenTerms = `${window.location.pathname}${searchParams.toString().length ? '?' + searchParams.toString(): ''}`;
				history.pushState(null, '', newUrlWithOpenTerms);
			};
			const openTermsModal = () => {
				if (modalTerms.classList.contains('scale-0')) {
					modalTerms.classList.remove('scale-0');
					modalTerms.classList.add('scale-100');
					document.body.style.overflow = 'hidden';
					searchParams.set('terms', 'open');
					changeUrlParams();
				}
			};

			const closeTermsModal = () => {
				if (modalTerms.classList.contains('scale-100')) {
					modalTerms.classList.remove('scale-100');
					modalTerms.classList.add('scale-0');
					document.body.style.overflow = 'visible';
					searchParams.delete('terms');
					changeUrlParams();
				}
			};

			showTermsModalBtns.forEach((btn) => {
				btn.addEventListener('click', openTermsModal);
			});

			closeTermsModalBtn.addEventListener('click', closeTermsModal);


			const closeRegModal = () => {
				if (modalReg.classList.contains('scale-100')) {
					modalReg.classList.remove('scale-100');
					modalReg.classList.add('scale-0');
					document.body.style.overflow = 'visible';
					searchParams.delete('reg');
					changeUrlParams();
				}
			};
			
			const openSuccessModal = () => {
				if (modalSucces.classList.contains('scale-0')) {
					modalSucces.classList.remove('scale-0');
					modalSucces.classList.add('scale-100');
					document.body.style.overflow = 'hidden';
				}
			};

			const closeSuccessModal = () => {
				if (modalSucces.classList.contains('scale-100')) {
					modalSucces.classList.remove('scale-100');
					modalSucces.classList.add('scale-0');
					document.body.style.overflow = 'visible';
				}
			};

			[orderBtn, getNifBtn, getStartedBtn].forEach(btn => {
				if (btn.length > 1) {
					btn.forEach(btnOrder => {
						btnOrder.addEventListener('click', function(){
							event.stopPropagation();
							if (btnOrder.classList.contains('order-btn-first')) {
								sixDayRadio.checked = false;
								elevenDayRadio.checked = false;
								oneDayRadio.checked = true;
							} else if (btnOrder.classList.contains('order-btn-six')) {
								elevenDayRadio.checked = false;
								oneDayRadio.checked = false;
								sixDayRadio.checked = true;
							} else if (btnOrder.classList.contains('order-btn-eleven')) {
								oneDayRadio.checked = false;
								sixDayRadio.checked = true;
								elevenDayRadio.checked = true;
							}
							if (modalReg.classList.contains('scale-0')) {
								modalReg.classList.remove('scale-0');
								modalReg.classList.add('scale-100');
								document.body.style.overflow = 'hidden';
								searchParams.set('reg', 'open');
								changeUrlParams();
							}
						});
					});
				} else {
					btn.addEventListener('click', function(event) {
						event.stopPropagation();
						if (modalReg.classList.contains('scale-0')) {
							modalReg.classList.remove('scale-0');
							modalReg.classList.add('scale-100');
						}
					});
				}				
			})


			modaCloseBtnlReg.addEventListener('click', function(event) {
				event.stopPropagation();
				closeRegModal();
			});
			
			[closeSaccessForm,closeSaccessBtn].forEach(btn => {
				btn.addEventListener('click', function(event) {
					event.stopPropagation();
					closeSuccessModal();
				});
			});
			

		//open/close mob menu
			const closeMobMenu = () => {
				mainMenu.classList.remove('opened-menu');
				burgerBtn.classList.remove('opened-burger');
				document.body.style.overflow = 'visible';
			};

			burgerBtn.addEventListener('click', function(event) {
				event.stopPropagation();
				if (mainMenu.classList.contains('opened-menu')) {
					closeMobMenu();
				} else {
					mainMenu.classList.add('opened-menu');
					burgerBtn.classList.add('opened-burger');
					document.body.style.overflow = 'hidden';
				}
			});

			//open/close lang menu
			langBtn.addEventListener('click', function(event) {
				event.stopPropagation();
				if (langMenu.classList.contains('open-lang')) {
					langMenu.classList.remove('open-lang');
					langBtn.classList.remove('opened-swither');
					langComp.classList.remove('opened-swither');
				} else {
					langMenu.classList.add('open-lang');
					langBtn.classList.add('opened-swither');
					langComp.classList.add('opened-swither');
				}
			});


			document.addEventListener('click', function(event) {
				if (langMenu.classList.contains('open-lang')) {
					langMenu.classList.remove('open-lang');
					langComp.classList.remove('opened-swither');
					langBtn.classList.remove('opened-swither');
				}
				if (mainMenu.classList.contains('opened-menu')) {
					closeMobMenu();
				}
				const targetEl = event.target;

				if (!modalWrapper.contains(targetEl) && !modalTerms.contains(targetEl)) {
					closeRegModal();
				}

				if (modalTerms.contains(targetEl)) {
					closeTermsModal();
				}
			});


			// date in modal
			const bodyDateString = (day) => `${String(day.getDate()).padStart(2,'0')}.${String(day.getMonth()+1).padStart(2,'0')}.${day.getFullYear()}`;
			const oneDay = new Date();
			oneDay.setDate(oneDay.getDate() + 1);
			oneDayDate.innerHTML = bodyDateString(oneDay);
			const sixDay = new Date();
			sixDay.setDate(sixDay.getDate() + 6);
			sixDayDate.innerHTML = bodyDateString(sixDay);
			const elevenDay = new Date();
			elevenDay.setDate(elevenDay.getDate() + 11);
			elevenDayDate.innerHTML = bodyDateString(elevenDay);


			// details animation

			const detailsAnimationStart = (el) => {
				el.addEventListener("click", (e) => {
					if (el.hasAttribute("open")) { // since it's not closed yet, it's open!
						e.preventDefault(); // stop the default behavior, meaning - the hiding
						el.classList.add("closing"); // add a class which applies the animation in CSS
					}
				});


				// when the "close" animation is over
				el.addEventListener("animationend", (e) => {
					if (e.animationName === "close") {
						el.removeAttribute("open"); // close the element
						el.classList.remove("closing"); // remove the animation
					}
				});
			};
			

			detailsArr.forEach(detailsEl => {
				detailsAnimationStart(detailsEl);
			})

			
	}, false);
};