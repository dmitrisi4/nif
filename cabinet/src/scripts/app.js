import {LOGIN_URL, ORDERS_URL, CONTACTS_URL, REGISTER_URL} from './api';
import {choiseByValue, COUNTRIES} from './select';
import {formatToCommonDate} from './utilits';


if (document) {

    document.addEventListener('DOMContentLoaded', function () {
        const loginSection = document.getElementById('login-section');
        const registerSection = document.getElementById('register-section');
        const pageSection = document.getElementById('page-section');
        const btnExitWrapper = document.getElementById('btn-exit-wrapper');
        const btnExit = document.getElementById('btn-exit');
        // reg form
        const registrationForm = document.getElementById('form-registration');
        const registrationEmail = document.getElementById('registration-email');
        const registrationPassword = document.getElementById('registration-password');
        const regEmailErrorMessage = document.getElementById('email-message-error');
        const btnReturnLogin = document.getElementById('btn-return-login');
        const btnRegShowPass = document.getElementById('btn-show-reg-pass');
        // login form
        const loginForm = document.getElementById('form-login');
        const loginEmail = document.getElementById('login-email');
        const loginPassword = document.getElementById('login-password');
        const btnReturnReg = document.getElementById('btn-return-reg');
        const btnLoginShowPass = document.getElementById('btn-show-login-pass');
        const loginError = document.getElementById('login-error-msg');

        const btnOrdersPage = document.getElementById('btn-orders-page');
        const btnContactsPage = document.getElementById('btn-contacts-page');

        const orderPage = document.getElementById('order-page');
        const contactPage = document.getElementById('contact-page');


        // contact form
        const modalEditContact = document.getElementById('modal-edit-contacts');
        const btnCloseEditContact = document.getElementById('close-contact-edit');
        const contactChangeForm = document.getElementById('form-edit-contacts');
        const formContactName = document.getElementById('contact-form-name');
        const formContactEmail = document.getElementById('contact-form-email');
        const formContactComment = document.getElementById('contact-form-comment');


        // order form
        const modalEditOrder = document.getElementById('modal-edit-order');
        const btnCloseEditOrder = document.getElementById('close-order-edit');
        const orderChangeForm = document.getElementById('form-edit-order');
        const formFirstName = document.getElementById('reg-form-name');
        const formLastName = document.getElementById('reg-form-lastname');
        const formSocial = document.getElementById('reg-form-social');
        const formEmail = document.getElementById('reg-form-email');
        const formTel = document.getElementById('reg-form-tel');
        const selectCountries = document.getElementById('js-choice');
        const oneDayDate = document.getElementById('oneDayDate');
        const sixDayDate = document.getElementById('sixDayDate');
        const elevenDayDate = document.getElementById('elevenDayDate');


        let ordersData;
        let contactsData;
        let createdTableOrder = false;
        let createdTableContacts = false;

        const svgEdit = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.52 4l-1 1H2V4zM2 8v1h11.52l1-1zm4.52 8H2v1h3.655a1.477 1.477 0 0 1 .282-.417zM2 12v1h7.52l1-1zm20.95-6.066a.965.965 0 0 1 .03 1.385L9.825 20.471 5.73 22.227a.371.371 0 0 1-.488-.487l1.756-4.097L20.15 4.491a.965.965 0 0 1 1.385.03zM9.02 19.728l-1.28-1.28-.96 2.24zM20.093 8.79L18.68 7.376 8.382 17.674l1.413 1.414zm1.865-2.445l-.804-.838a.42.42 0 0 0-.6-.007l-1.167 1.17L20.8 8.083l1.152-1.151a.42.42 0 0 0 .006-.587z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`;
        const svgHiddenPassword = `<svg width="25px" height="25px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye_close_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="System" transform="translate(-384.000000, 0.000000)" fill-rule="nonzero"> <g id="eye_close_line" transform="translate(384.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3.04923,9.31077 C3.01728,9.21295 3,9.10849 3,9 C3,8.44772 3.44772,8 4,8 C4.4597,8 4.84695,8.31019 4.96387,8.73268 C7.04968,15.7186 16.9456,15.7202 19.0348,8.73735 C19.1502,8.31248 19.5386,8 20,8 C20.5523,8 21,8.44772 21,9 C21,9.10681 20.9833,9.2097 20.9522,9.30621 C20.5515,10.6482 19.9241,11.7876 19.1387,12.7244 L20.4143,14 C20.8048,14.3905 20.8048,15.0237 20.4143,15.4142 C20.0238,15.8047 19.3906,15.8047 19.0001,15.4142 L17.6887,14.1028 C16.9745,14.6426 16.1912,15.0655 15.3686,15.3716 L15.7264,16.7071 C15.8694,17.2406 15.5528,17.7889 15.0193,17.9318 C14.4858,18.0748 13.9375,17.7582 13.7946,17.2247 L13.4311,15.8682 C12.4836,16.0084 11.5164,16.0084 10.5689,15.8682 L10.2054,17.2247 C10.0625,17.7582 9.51416,18.0748 8.9807,17.9318 C8.44723,17.7889 8.13065,17.2406 8.27359,16.7071 L8.63144,15.3716 C7.80891,15.0655 7.0256,14.6426 6.31146,14.1029 L5.00017,15.4142 C4.60964,15.8047 3.97648,15.8047 3.58596,15.4142 C3.19543,15.0237 3.19543,14.3905 3.58596,14 L4.86147,12.7245 C4.07689,11.7887 3.45009,10.6508 3.04923,9.31077 Z" id="路径" fill="#09244B"> </path> </g> </g> </g> </g></svg>`;
        const svgShownPassword = `<svg width="25px" height="25px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye_2_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Part" transform="translate(-144.000000, 0.000000)"> <g id="eye_2_line" transform="translate(144.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M4.00052,12.0012 L4.00032,12 L4.00052,11.9988 C4.00297,11.9832 4.01691,11.895 4.09488,11.7217 C4.18067,11.5309 4.31982,11.2905 4.51892,11.0138 C4.91667,10.4611 5.5116,9.82208 6.26352,9.21614 C7.77713,7.99636 9.81228,7 12,7 C14.1877,7 16.2229,7.99636 17.7365,9.21614 C18.4884,9.82208 19.0833,10.4611 19.4811,11.0138 C19.6802,11.2905 19.8193,11.5309 19.9051,11.7217 C19.9831,11.895 19.997,11.9832 19.9995,11.9988 L19.9997,12 L19.9995,12.0012 C19.997,12.0168 19.9831,12.105 19.9051,12.2783 C19.8193,12.4691 19.6802,12.7095 19.4811,12.9862 C19.0833,13.5389 18.4884,14.1779 17.7365,14.7839 C16.2229,16.0036 14.1877,17 12,17 C9.81228,17 7.77713,16.0036 6.26352,14.7839 C5.5116,14.1779 4.91667,13.5389 4.51892,12.9862 C4.31982,12.7095 4.18067,12.4691 4.09488,12.2783 C4.01691,12.105 4.00297,12.0168 4.00052,12.0012 Z M12,5 C9.21715,5 6.7523,6.25364 5.00856,7.65886 C4.13179,8.36542 3.40871,9.1326 2.89561,9.84555 C2.63928,10.2017 2.4248,10.559 2.27082,10.9014 C2.12348,11.229 2,11.6119 2,12 C2,12.3881 2.12348,12.771 2.27082,13.0986 C2.4248,13.441 2.63928,13.7983 2.89561,14.1544 C3.40871,14.8674 4.13179,15.6346 5.00856,16.3411 C6.7523,17.7464 9.21715,19 12,19 C14.7828,19 17.2477,17.7464 18.9914,16.3411 C19.8682,15.6346 20.5913,14.8674 21.1044,14.1544 C21.3607,13.7983 21.5752,13.441 21.7292,13.0986 C21.8765,12.771 22,12.3881 22,12 C22,11.6119 21.8765,11.229 21.7292,10.9014 C21.5752,10.559 21.3607,10.2017 21.1044,9.84555 C20.5913,9.1326 19.8682,8.36542 18.9914,7.65886 C17.2477,6.25364 14.7828,5 12,5 Z M11,12 C11,11.4477 11.4477,11 12,11 C12.5523,11 13,11.4477 13,12 C13,12.5523 12.5523,13 12,13 C11.4477,13 11,12.5523 11,12 Z M12,9 C10.3431,9 9,10.3431 9,12 C9,13.6569 10.3431,15 12,15 C13.6569,15 15,13.6569 15,12 C15,10.3431 13.6569,9 12,9 Z" id="形状" fill="#09244B"> </path> </g> </g> </g> </g></svg>`;
        // Init
        Authorization();

        // login listener
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login(LOGIN_URL, {email: loginEmail.value, password: loginPassword.value})
        });

        // exit
        btnExit.addEventListener('click', () => {
            eraseCookie('tokenAuth');
            window.location.pathname = '/';
        });

        btnContactsPage.addEventListener('click', () => {
            getContacts();
        });

        btnOrdersPage.addEventListener('click', () => {
            showOrderPage();
        });


        // date in modal
        const bodyDateString = (day) => `${String(day.getDate()).padStart(2, '0')}.${String(day.getMonth() + 1).padStart(2, '0')}.${day.getFullYear()}`;
        const oneDay = new Date();
        oneDay.setDate(oneDay.getDate() + 1);
        oneDayDate.innerHTML = bodyDateString(oneDay);
        const sixDay = new Date();
        sixDay.setDate(sixDay.getDate() + 6);
        sixDayDate.innerHTML = bodyDateString(sixDay);
        const elevenDay = new Date();
        elevenDay.setDate(elevenDay.getDate() + 11);
        elevenDayDate.innerHTML = bodyDateString(elevenDay);

        //

        async function login(url, data) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.status === 200) {
                    const result = await response.json();
                    setCookie('tokenAuth', result.token, 60);
                    location.reload();
                } else {
                    throw await response.json();
                }
            } catch (error) {
                console.error("Error:", error.message);
                if (error.message === 'INCORRECT_USER_DATA') {
                    loginError.style.transform = 'translateY(0)';
                    loginError.style.opacity = '1';

                }
            }
        };

        function registrationWrapper(e) {
            e.preventDefault();
            const url = REGISTER_URL;
            const data = {
                email: registrationEmail.value,
                password: registrationPassword.value
            }
            registration(url, data);
        }

        async function registration(url, data) {
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.status === 201) {
                    const result = await response.json();
                    setCookie('tokenAuth', result.token, 60);
                    login(LOGIN_URL, data);
                } else {
                    throw await response.json();
                }
            } catch (error) {
                regEmailErrorMessage.style.transform = 'translateY(0)';
                regEmailErrorMessage.style.opacity = '1';
                regEmailErrorMessage.innerHTML = error.message ? error.message : error;
                console.error("Error:", error);
            }
        }

        // cookie
        function setCookie(name, value, minutesToExpire) {
            let expires = "";
            if (minutesToExpire) {
                const date = new Date();
                date.setTime(date.getTime() + (minutesToExpire * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        };

        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        function eraseCookie(name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        };

        async function getOrders() {
            const tokenAuth = getCookie('tokenAuth');
            const response = await fetch(ORDERS_URL, {
                headers: {
                    "Authorization": tokenAuth,
                },
            });

            if (response.status === 200) {
                ordersData = await response.json();
                authShowPageContent(ordersData);
            } else {
                throw await response.text();
            }
        }

        async function Authorization() {
            const tokenAuth = getCookie('tokenAuth');
            if (tokenAuth) {
                try {
                    await getOrders();
                } catch (error) {
                    console.error("Error:", error.message ? error.message : error);
                    showLoginOrReg();
                }
            } else {
                showLoginOrReg();
            }
        };

        function showLoginOrReg() {
            if (window.location.pathname.slice(1) === 'register') {
                showRegister();
            } else {
                btnReturnReg.addEventListener('click', returnRegPage);
                btnLoginShowPass.addEventListener('click', showHidePassword.bind({btn: btnLoginShowPass, input: loginPassword}));
            }
        }

        function showRegister() {
            loginSection.style.display = 'none';
            registerSection.style.display = 'block';
            registrationForm.addEventListener('submit', registrationWrapper);
            btnReturnLogin.addEventListener('click', returnLoginPage);
            btnRegShowPass.addEventListener('click', showHidePassword.bind({btn: btnRegShowPass, input: registrationPassword}));
        }

        function showHidePassword() {
            const nodeEl = this.input;
            const nodeBtn = this.btn;
            const type = nodeEl.getAttribute('type') === 'password' ? 'text': 'password';
            nodeEl.setAttribute('type', type);
            nodeBtn.innerHTML = type === 'password' ? svgHiddenPassword : svgShownPassword;

        }

        function returnRegPage(e) {
            e.preventDefault();
            window.location.pathname = '/register';
        }
        function returnLoginPage(e) {
            e.preventDefault();
            window.location.pathname = '/';
        }

        async function removeOrder(id) {
            const tokenAuth = getCookie('tokenAuth');
            if (tokenAuth) {
                try {
                    const response = await fetch(`${ORDERS_URL}${id}`, {
                        method: 'DELETE',
                        headers: {
                            "Authorization": tokenAuth,
                        },
                    });
                    ordersData = await response.json();

                    if (response.status === 200) {
                        createdTableOrder = false;
                        removeTable('order-table');
                        getOrders();
                    }

                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };

        // order edit patch method
        async function editOrderSend(e) {
            const id = Number(this.id);
            e.preventDefault();
            if (!id) return;
            const body = {
                name: formFirstName.value,
                last_name: formLastName.value,
                email: formEmail.value,
                phone_number: formTel.value,
                social_network: formSocial.value,
                country: COUNTRIES.find(val => val.value === selectCountries.value).label,
                plan: document.querySelector("input[name=plan]:checked").value
            };

            const tokenAuth = getCookie('tokenAuth');
            if (tokenAuth) {
                try {
                    const response = await fetch(`${ORDERS_URL}${id}`, {
                        method: 'PATCH',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": tokenAuth,
                        },
                        body: JSON.stringify(body)
                    });
                    ordersData = await response.json();

                    if (response.status === 200) {
                        createdTableOrder = false;
                        removeTable('order-table');
                        getOrders();
                    }

                } catch (error) {
                    console.error("Error:", error);
                }
            }
        }

        // edit order methods
        function modalEditOrderShow() {
            const body = this.body;
            if (!body) return;
            modalEditOrder.style.transform = 'scale(1)';
            formFirstName.value = body.name;
            formLastName.value = body.last_name;
            formSocial.value = body.social_network;
            formEmail.value = body.email;
            formTel.value = body.phone_number;
            const findValueCountry = COUNTRIES.find(val => val.label === body.country);
            choiseByValue(findValueCountry ? findValueCountry.value : COUNTRIES[0].value);
            const checkRadioButtons = Object.values(document.querySelectorAll("input[name=plan]")).find(el => el.value === body.plan);
            checkRadioButtons.checked = true;

            // patch edit event
            orderChangeForm.addEventListener('submit', editOrderSend.bind({id: body.id}));
            // close modal edit order
            btnCloseEditOrder.addEventListener('click', closeOrderEditor);
            document.addEventListener('click', clickOutsideEditor);
        }

        function clickOutsideEditor(e) {
            if (e.target === modalEditOrder) closeOrderEditor();
        }

        function closeOrderEditor() {
            modalEditOrder.style.transform = 'scale(0)';
            btnCloseEditOrder.removeEventListener('click', closeOrderEditor);
            document.removeEventListener('click', clickOutsideEditor);
        }


        //edit contacts modalEditContact
        function clickOutsideContactEditor(e) {
            if (e.target === modalEditContact) closeContactEditor();
        }

        function closeContactEditor() {
            modalEditContact.style.transform = 'scale(0)';
            btnCloseEditContact.removeEventListener('click', closeContactEditor);
            document.removeEventListener('click', clickOutsideContactEditor);
        }


        async function editContactSend(e) {
            const id = Number(this.id);
            if (!id) return;
            e.preventDefault();
            const body = {
                name: formContactName.value,
                email: formContactEmail.value,
                comment: formContactComment.value,
            };

            const tokenAuth = getCookie('tokenAuth');
            if (tokenAuth) {
                try {
                    const response = await fetch(`${CONTACTS_URL}${id}`, {
                        method: 'PATCH',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": tokenAuth,
                        },
                        body: JSON.stringify(body)
                    });
                    contactsData = await response.json();

                    if (response.status === 200) {
                        createdTableContacts = false;
                        removeTable('contact-table');
                        getContacts();
                    }

                } catch (error) {
                    console.error("Error:", error);
                }
            }
        }

        function modalEditContactShow() {
            const body = this.body;
            if (!body) return;
            modalEditContact.style.transform = 'scale(1)';
            formContactName.value = body.name;
            formContactEmail.value = body.email;
            formContactComment.value = body.comment;

            // patch edit event
            contactChangeForm.addEventListener('submit', editContactSend.bind({id: body.id}));
            // close modal edit order
            btnCloseEditContact.addEventListener('click', closeContactEditor);
            document.addEventListener('click', clickOutsideContactEditor);
        }

        // getContacts
        async function getContacts() {
            const tokenAuth = getCookie('tokenAuth');
            if (tokenAuth) {
                try {
                    const response = await fetch(CONTACTS_URL, {
                        headers: {
                            "Authorization": tokenAuth,
                        },
                    });
                    contactsData = await response.json();

                    if (response.status === 200) {
                        showContactPage();
                    }

                } catch (error) {
                    console.error("Error:", error);
                }
            }
        }

        // removeContacts
        async function removeContacts(id) {
            const tokenAuth = getCookie('tokenAuth');
            if (tokenAuth) {
                try {
                    const response = await fetch(`${CONTACTS_URL}${id}`, {
                        method: 'DELETE',
                        headers: {
                            "Authorization": tokenAuth,
                        },
                    });
                    ordersData = await response.json();

                    if (response.status === 200) {
                        createdTableContacts = false;
                        removeTable('contact-table');
                        getContacts();
                    }

                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };

        // set query params
        function addQueryParams(queryParams) {
            // Get the current URL
            const currentUrl = window.location.href;

            // Create a new URL object
            const newUrl = new URL(currentUrl);

            // Add the query parameters to the new URL object
            for (const key in queryParams) {
                newUrl.searchParams.set(key, queryParams[key]);
            }

            // Set the new URL as the current URL without reloading the page
            window.history.pushState(null, null, newUrl.href);
        }

        function getQueryParams(name) {
            const query = window.location.search.slice(1);
            const params = new URLSearchParams(query);

            return params.get(name);
        }

        // content show section
        function authShowPageContent() {
            loginSection.style.display = 'none';
            pageSection.style.display = 'flex';
            btnExitWrapper.style.display = 'flex';

            if (!getQueryParams('page') || getQueryParams('page') !== 'contacts') {
                showOrderPage();
            }

            if (getQueryParams('page') === 'contacts') {
                getContacts();
            }

        };

        function showContactPage() {
            orderPage.style.display = 'none';
            contactPage.style.display = 'block';
            if (!createdTableContacts) createTableContacts(contactsData);
            addQueryParams({page: 'contacts'});
            btnOrdersPage.style.borderColor = 'transparent';
            btnContactsPage.style.borderColor = 'black';
        }

        function showOrderPage() {
            orderPage.style.display = 'block';
            contactPage.style.display = 'none';
            if (!createdTableOrder) createTable(ordersData);
            addQueryParams({page: 'orders'});
            btnOrdersPage.style.borderColor = 'black';
            btnContactsPage.style.borderColor = 'transparent';
        }

        // create element function
        function dom(tag, className, ...nodes) {
            const node = document.createElement(tag);
            if (className.length > 0) node.classList.add(className);
            node.append(...nodes);
            return node;
        }

        // create btn
        function domBtn(id, text, event) {
            const node = document.createElement('button');
            node.classList.add('btn-table');
            node.addEventListener('click', () => {
                event(id);
            });
            node.innerHTML = text;
            return node;
        }

        // create table
        function createTable(ordersData) {
            // title table header
            const tableHeaders = ['ID', 'Name', 'Last name', 'Email', 'Phone number', 'WhatsApp/ Telegramm', 'Country', 'Plan', 'created', 'updated'];

            const headerRowArr = tableHeaders.map(colTitle => {
                return dom('div', '', colTitle);
            });
            const bodyRowArr = ordersData.map(rowData => {
                const colData = Object.values(rowData).map(data => {
                    const dataFormated = (rowData.createdAt === data || rowData.updatedAt === data) ? formatToCommonDate(data) : data;
                    return dom('div', '', dataFormated);
                });
                colData.push(dom('div', 'table-btns-wrap', ...[domBtn(rowData.id, svgEdit, modalEditOrderShow.bind({body: rowData})), domBtn(rowData.id, 'X', removeOrder)]));
                return dom('div', 'table-row-wrapper', ...colData);
            });

            const rows = [
                dom('div', 'table-row-header', ...headerRowArr),
                dom('div', '', ...bodyRowArr)
            ];

            // get table container
            const tableContainer = document.getElementById("table-container");
            // add table
            tableContainer.append(dom('div', '', ...rows));
            createdTableOrder = true;
        };

        // removeTable
        function removeTable(name) {
            const tableContainer = document.getElementById("table-container");
            const tableContactContainer = document.getElementById("table-contacts-container");
            if (name === 'order-table') tableContainer.innerHTML = '';
            if (name === 'contact-table') tableContactContainer.innerHTML = '';
        };

        // create table
        function createTableContacts(contactsData) {
            // title table header
            const tableHeaders = ['ID', 'Name', 'Email', 'Comment', 'created', 'updated'];

            const headerRowArr = tableHeaders.map(colTitle => {
                return dom('div', '', colTitle);
            });

            const bodyRowArr = contactsData.map(rowData => {
                const colData = Object.values(rowData).map(data => {
                    const dataFormated = (rowData.createdAt === data || rowData.updatedAt === data) ? formatToCommonDate(data) : data;
                    return dom('div', '', dataFormated);
                });
                colData.push(dom('div', 'table-btns-wrap', ...[domBtn(rowData.id, svgEdit, modalEditContactShow.bind({body: rowData})), domBtn(rowData.id, 'X', removeContacts)]));
                return dom('div', 'contacts-row-wrapper', ...colData);
            });

            const rows = [
                dom('div', 'contacts-row-header', ...headerRowArr),
                dom('div', '', ...bodyRowArr)
            ];

            // get table container
            const tableContainer = document.getElementById("table-contacts-container");
            // add table
            tableContainer.append(dom('div', '', ...rows));
            createdTableContacts = true;
        }

    }, false);
}
;