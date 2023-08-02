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
  port: process.env.PORT || 4000
}