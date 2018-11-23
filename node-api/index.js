import { createServer } from 'http';
import { urlencoded, json } from 'body-parser';
import express from 'express';
// const routes =require('./routes');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// routes(app);

const server = createServer(app);
const port = process.env.PORT || 3001;
server.listen(port);
console.log("Listening on port %s :", server.address().port);
