if (document) {

	let observerOptions = {
    rootMargin: '0px',
    threshold: 0.1
	}

	let observer = new IntersectionObserver(observerCallback, observerOptions);

	function observerCallback(entries, observer) {
			entries.forEach(entry => {
					if(entry && entry.isIntersecting) {
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
			}
	});

	document.addEventListener('DOMContentLoaded', function () {
			const burgerBtn = document.querySelector('.burger-btn');
			const mainMenu = document.querySelector('.main-menu');
			const langBtn = document.querySelector('.lang-btn');
			const langMenu = document.querySelector('.lang-menu');
			const langComp = document.querySelector('.lang-comp');
			const modalReg = document.querySelector('.modal-reg');
			const modaCloseBtnlReg = document.querySelector('.close-reg-form');
			const getNifBtn = document.querySelector('.btn-get-nif');
			const getStartedBtn = document.querySelector('.btn-get-started');
			const orderBtn = document.querySelectorAll('.order-btn');

			const closeRegModal = () => {
				if (modalReg.classList.contains('scale-1')) {
					modalReg.classList.remove('scale-1');
					modalReg.classList.add('scale-0');
				}
			};

			[orderBtn, getNifBtn, getStartedBtn].forEach(btn => {
				if (btn.length > 1) {
					btn.forEach(btnOrder => {
						btnOrder.addEventListener('click', function(){
							event.stopPropagation();
						if (modalReg.classList.contains('scale-0')) {
							modalReg.classList.remove('scale-0');
							modalReg.classList.add('scale-1');
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



			burgerBtn.addEventListener('click', function(event) {
				event.stopPropagation();
				if (mainMenu.classList.contains('opened-menu')) {
					mainMenu.classList.remove('opened-menu');
					burgerBtn.classList.remove('opened-burger');
					document.body.style.overflow = 'visible';
				} else {
					mainMenu.classList.add('opened-menu');
					burgerBtn.classList.add('opened-burger');
					document.body.style.overflow = 'hidden';
				}
			});

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
				closeRegModal();
			})

	}, false);
};