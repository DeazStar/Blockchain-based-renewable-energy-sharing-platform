const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

process.on('uncaughtException', (err) => {
  console.error(err);
  console.log('UNCAUGHT EXCEPTION * SHUTTING DOWN... ');
  process.exit(1);
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('UNHANDLED REJECTION * SHUTTING DOWN... ');
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
