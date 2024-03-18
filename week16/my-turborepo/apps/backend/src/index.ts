import express from 'express';
import { BACKEND_URL } from "@repo/common/config";
console.log(BACKEND_URL)

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello');
})

app.listen(3003, () => console.log("listing at 3003"));
