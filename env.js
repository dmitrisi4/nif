module.exports.dbConfig = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "",
  DB: "nif_db",
  dialect: "mysql",
};

module.exports.keys = {
	jwt: 'dev-jwt',
	cors: 'http://si4kard-nif-cabinet-front.s3-website.eu-north-1.amazonaws.com/',
  cors2: 'http://si4kard-nif-font.s3-website.eu-north-1.amazonaws.com/',
  port: process.env.PORT || 4000,
  api_url: 'http://13.53.206.241:4000/'
};