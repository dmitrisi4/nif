const app = require('./app');
const {keys} = require('./env');
const PORT = keys.port;
const logger = require('./utils/loggerService');

app.listen(PORT, () => logger.info(`Server has been started on ${PORT}`));