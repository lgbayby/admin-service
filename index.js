const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from ADMIN SERVICE!" });
})

app.listen(5001, () => {
    console.log('Admin service is listening to port 5001');
})