import { pgConnection } from './database/pgConnection';
import express from 'express';
import router from './routes/indexRouter';
pgConnection()

const app = express();


app.use(express.json());
app.use('/', router);
app.listen(8080, () => {
  console.log('Now running on port 8080');
});
