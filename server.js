const fastify = require('fastify');
const mongoose = require('mongoose');

const app = fastify({ logger: false });
const PORT = 5000;

try {
  mongoose.connect('<YOUR URI>', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, });
} catch (e) {
  console.error(e);
}

app.register(require('./controllers/router'));

const start = async () => {
  try {
    await app.listen(PORT);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start()