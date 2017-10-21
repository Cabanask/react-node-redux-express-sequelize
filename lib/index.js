import {BDD_PORT} from'./configServer';
// server/index.js
'use strict';

const app = require('./app');

const PORT = process.env.PORT || BDD_PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

