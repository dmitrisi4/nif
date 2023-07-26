if (document) {

	document.addEventListener('DOMContentLoaded', function () {
			const LOGIN_URL = 'http://localhost:4000/api/auth/login';
			const ORDERS_URL = 'http://localhost:4000/api/order/';
			const CONTACTS_URL = 'http://localhost:4000/api/contacts/';

			const loginSection = document.getElementById('login-section');
			const pageSection = document.getElementById('page-section');
			const btnExitWrapper = document.getElementById('btn-exit-wrapper');
			const btnExit = document.getElementById('btn-exit');
			const loginForm = document.getElementById('form-login');
			const loginEmail = document.getElementById('login-email');
			const loginPassword = document.getElementById('login-password');

			const btnOrdersPage = document.getElementById('btn-orders-page');
			const btnContactsPage = document.getElementById('btn-contacts-page');

			const orderPage = document.getElementById('order-page');
			const contactPage = document.getElementById('contact-page');

			let ordersData;
			let contactsData;
			let createdTableOrder = false;
			let createdTableContacts = false;

			const svgEdit = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.52 4l-1 1H2V4zM2 8v1h11.52l1-1zm4.52 8H2v1h3.655a1.477 1.477 0 0 1 .282-.417zM2 12v1h7.52l1-1zm20.95-6.066a.965.965 0 0 1 .03 1.385L9.825 20.471 5.73 22.227a.371.371 0 0 1-.488-.487l1.756-4.097L20.15 4.491a.965.965 0 0 1 1.385.03zM9.02 19.728l-1.28-1.28-.96 2.24zM20.093 8.79L18.68 7.376 8.382 17.674l1.413 1.414zm1.865-2.445l-.804-.838a.42.42 0 0 0-.6-.007l-1.167 1.17L20.8 8.083l1.152-1.151a.42.42 0 0 0 .006-.587z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`;
	

			Authorization();
	
			// login listener
			loginForm.addEventListener('submit', (e) => {
				e.preventDefault();
				login(LOGIN_URL, {email: loginEmail.value, password: loginPassword.value})
			});

			// exit
			btnExit.addEventListener('click', () => {
				eraseCookie('tokenAuth');
				location.reload();
			});

			btnContactsPage.addEventListener('click', () => {
				getContacts();
			});

			btnOrdersPage.addEventListener('click', () => {
				showOrderPage(); 
			});

			async function login(url, data) {
				try {
					const response = await fetch(url, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					});

					const result = await response.json();
					if(result) {
						setCookie('tokenAuth', result.token, 60);
						location.reload();
					} else {
						alert('There was a problem with the request')
					}
				} catch (error) {
					console.error("Error:", error);
				}
			}

			// cookie
			function setCookie(name,value,minutesToExpire) {
				let expires = "";
				if (minutesToExpire) {
						const date = new Date();
						date.setTime(date.getTime() + (minutesToExpire * 60 * 1000));
						expires = "; expires=" + date.toUTCString();
				}
				document.cookie = name + "=" + (value || "")  + expires + "; path=/";
			}

			function getCookie(name) {
				const nameEQ = name + "=";
				const ca = document.cookie.split(';');
				for(let i=0;i < ca.length;i++) {
						let c = ca[i];
						while (c.charAt(0)==' ') c = c.substring(1,c.length);
						if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
				}
				return null;
			}

			function eraseCookie(name) {   
				document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			}

			async function getOrders() {
				const tokenAuth = getCookie('tokenAuth');
				const response = await fetch(ORDERS_URL, {
					headers: {
						"Authorization": tokenAuth,
					},
				});
				ordersData = await response.json();

				if (response.status === 200) {
					authShowPageContent(ordersData);
				}
			}

			async function Authorization() {
				const tokenAuth = getCookie('tokenAuth');
				if(tokenAuth) {
					try {
						getOrders();					
					} catch (error) {
						console.error("Error:", error);
					}
				}
			};

			async function removeOrder(id) {
				const tokenAuth = getCookie('tokenAuth');
				if(tokenAuth) {
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

			async function getContacts() {
				const tokenAuth = getCookie('tokenAuth');
				if(tokenAuth) {
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

			async function removeContacts(id) {
				const tokenAuth = getCookie('tokenAuth');
				if(tokenAuth) {
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
				addQueryParams({ page: 'contacts' });
				btnContactsPage.style.borderColor = 'black';
			}

			function showOrderPage() {
				orderPage.style.display = 'block';
				contactPage.style.display = 'none';
				if (!createdTableOrder) createTable(ordersData);
				addQueryParams({ page: 'orders' });
				btnOrdersPage.style.borderColor = 'black';
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
					return dom('div', '', data);
				});
				colData.push(dom('div', 'table-btns-wrap', ...[ domBtn(rowData.id, svgEdit, ''), domBtn(rowData.id, 'X', removeOrder )]));
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
			if(name === 'order-table') tableContainer.innerHTML = '';
			if(name === 'contact-table') tableContactContainer.innerHTML = '';
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
					return dom('div', '', data);
				});
				colData.push(dom('div', 'table-btns-wrap', ...[ domBtn(rowData.id, svgEdit, ''), domBtn(rowData.id, 'X', removeContacts )]));
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
};