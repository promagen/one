// Start Express web app based on Express

// CONFIG
const PublicConfig = require('../config/projects');
var localConfig = new PublicConfig();

const web = require('./server/web');
return new web('PROMAGEN ONE ', 'localhost', localConfig.port, '../public');

// const web = require('./server/express');
// return new web('PROMAGEN ONE ', 'localhost', localConfig.port, '../public');
