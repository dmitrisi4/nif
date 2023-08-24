module.exports.dbConfig = {
  HOST: "ip-172-31-42-44",
  USER: "root",
  PASSWORD: "password",
  DB: "nif_db",
  dialect: "mysql",
};

module.exports.keys = {
	jwt: 'dev-jwt',
	cors: 'http://localhost:1234',
  cors2: 'http://localhost:60743',
  port: process.env.PORT || 4000,
  api_url: 'http://localhost:4000/'
};