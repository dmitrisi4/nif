require('./firebase');
const app = require('./app');
const {keys} = require('./env');
const PORT = keys.port;

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));