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
	const menuItemFirst = document.querySelector('.menu-item-first');
	const menuItemSecond = document.querySelector('.menu-item-second');
	const menuItemThird = document.querySelector('.menu-item-third');

	function observerMenuCallback(entries, observer) {
		entries.forEach(entry => {
			if(entry && entry.isIntersecting) {
				if (entry.target.id === 'nifOnlineView') {
					menuItemFirst.classList.add('active');
					menuItemThird.classList.remove('active');
					menuItemSecond.classList.remove('active');
				} else if (entry.target.id === 'faqWrapper') {
					menuItemFirst.classList.remove('active');
					menuItemThird.classList.remove('active');
					menuItemSecond.classList.add('active');
				} else if (entry.target.id === 'contactForm') {
					menuItemThird.classList.add('active');
					menuItemFirst.classList.remove('active');
					menuItemSecond.classList.remove	('active');
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
			const modalWrapper = document.querySelector('.modal-wrapper');
			const modaCloseBtnlReg = document.querySelector('.close-reg-form');
			const getNifBtn = document.querySelectorAll('.btn-get-nif');
			const getStartedBtn = document.querySelector('.btn-get-started');
			const orderBtn = document.querySelectorAll('.order-btn');
			const oneDayRadio = document.querySelector('#oneDay');
			const sixDayRadio = document.querySelector('#sixDay');
			const elevenDayRadio = document.querySelector('#elevenDay');


			//open/close modal
			const closeRegModal = () => {
				if (modalReg.classList.contains('scale-1')) {
					modalReg.classList.remove('scale-1');
					modalReg.classList.add('scale-0');
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
								modalReg.classList.add('scale-1');
								document.body.style.overflow = 'hidden';
							}
						});
					});
				} else {
					btn.addEventListener('click', function(event) {
						event.stopPropagation();
						if (modalReg.classList.contains('scale-0')) {
							modalReg.classList.remove('scale-0');
							modalReg.classList.add('scale-1');
						}
					});
				}				
			})


			modaCloseBtnlReg.addEventListener('click', function(event) {
				event.stopPropagation();
				closeRegModal();
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

				if (!modalWrapper.contains(targetEl)) {
					closeRegModal();
				}
			});
	}, false);
};