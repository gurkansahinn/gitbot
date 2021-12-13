import express from 'express';

const api = express();
const port = 3000;

api.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})