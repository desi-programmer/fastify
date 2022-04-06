const fastify = require('fastify')();

fastify.register(require("point-of-view"), {
    engine: {
        ejs: require("ejs"),
    },
});

fastify.get('/', (req, res) => {
    return res.view("/templates/index.ejs", { name: "Prince" });
});

const PORT = 5000;
fastify.listen(PORT, () => {
    console.log("Server Started !")
});