import { keys } from "../../../env";
const API_URL = keys.api_url;
const LOGIN_URL = `${API_URL}api/auth/login`;
const REGISTER_URL = `${API_URL}api/auth/registration`;
const ORDERS_URL = `${API_URL}api/order/`;
const CONTACTS_URL = `${API_URL}api/contacts/`;

export {LOGIN_URL, ORDERS_URL, CONTACTS_URL, REGISTER_URL};