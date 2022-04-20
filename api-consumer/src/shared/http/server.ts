import app from './app/app';

const port = 3000;
const message = `init port: ${port}`;

app.listen(port, () => console.log(message));
