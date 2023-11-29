import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.ts';
import { connect } from './configs/database-connection.ts';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express());
app.use(json());
app.use(routes);

app.get('/health', (_req, res) => res.send('OK!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  connect();
  console.log(`Servidor iniciado na porta: ${port}`);
});
