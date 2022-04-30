(async () => {
  const database = require('../config/config');
  const User = require('./User');

  try {
      const resultado = await database.sync();
      console.log(resultado);
  } catch (error) {
      console.log(error);
  }
})();
