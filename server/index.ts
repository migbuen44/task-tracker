import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})