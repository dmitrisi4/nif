module.exports.dbConfig = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "",
  DB: "nifdb_orders",
  dialect: "mysql",
};

module.exports.keys = {
	jwt: 'dev-jwt',
	cors: 'http://localhost:1234',
  port: '4000',
	api_url: 'http://127.0.0.1:4000/'
}

module.exports.mailServiceConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
      user: 'stefan30@ethereal.email',
      pass: 't1G8q2NaWt2SxhgQJA',
  },
  from: '"NIF Service" <nif@online.com>',
  to: 'stefan30@ethereal.email',
};

// host - адрес почтового сервера, который будет отправлять посылаемые e-mail;
// port - порт почтового сервера, по умолчанию может быть 25, 465 или 587;
// secure - булевое значение, задается true, если используется SSL, в таком случае значением port должно быть 465;
// auth - объект со свойствами user и pass, в которых указывается логин и пароль используемого почтового аккаунта соответственно.
// Адрес в поле from: '"NIF Service" <nif@online.com>' - <nif@online.com> долен быть в формате  строки email, но это может быть любой email.
// https://ethereal.email/ - test