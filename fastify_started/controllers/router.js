function Router(app, options, done) {
    // @Routes
    app.get('/', (req, res) => {
        res.code(200).send({ "data": "Response from router !" });
    });

    app.post('/', (req, res) => {
        res.code(200).send({ "name": req.body.name, "data": req.body });
    });

    app.post('/user', require('./adduser'));
    app.post('/body', require('./bodyValidation'));

    // query
    app.get('/user/:username?', (req, res) => {
        res.code(200).send({ "data": req.params.username, "d": "asdasd" });
    });

    app.get('/query', require('./query_validation'));

    app.get('/params/:id', require('./parameter'));

    app.get('/res', require('./response'));

    // @Not-Found Route
    app.all('*', (req, reply) => reply.code(404).send("ERR ! Not Found !"));

    done();
};

module.exports = Router;