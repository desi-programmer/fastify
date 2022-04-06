const fastify = require('fastify');
const app = fastify();

app.get('/', (req, res) => {
    res.send("Hello World !");
});

app.post('/', (req, res) => {
    res.send("Hello POST !");
});

app.delete('/', (req, res) => {
    res.send("Hello DELETE !");
});

app.put('/', (req, res) => {
    res.send("Hello PUT !");
});

app.all('/user', (req, res) => {
    res.send("Hello All !");
});

// register the router from controller to handle routes
app.register(require('./controllers/router'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server Started !")
});