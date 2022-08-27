const express = require('express')
const ah = require('./hook');
const app = express()
const cors = require('cors')

const testRoute = require('./controllers/testRoute');

app.use((request, response, next) => {
    const data = { headers: request.headers };
    let r = (Math.random() + 1).toString(36).substring(7);
    ah.createRequestContext(data, r);
    next();
});

const port = 3000
app.use(cors())
app.use(express.json());

app.set('trsut proxy', 1)

app.use('/testRoute', testRoute)

app.listen(port, () => {
    console.log('Server running at port ' + port)
})