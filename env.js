module.exports.dbConfig = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "Gibon4ik#@",
  DB: "nif_db",
  dialect: "mysql",
};

module.exports.keys = {
	jwt: 'dev-jwt',
	cors: 'http://si4kard-nif-cabinet-front.s3-website.eu-north-1.amazonaws.com',
  cors2: 'http://si4kard-nif-font.s3-website.eu-north-1.amazonaws.com',
  port: process.env.PORT || 4000,
};

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
// https://ethereal.email/ - test mail