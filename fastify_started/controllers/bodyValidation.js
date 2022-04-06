const ValidationSchema = {
    schema: {
        body: {
            type: 'object',
            // array of required fiels
            required: ['name', 'username', 'password',],
        },
    },
    handler: (req, res) => {
        res.send({ "msg": req.body });
    },
}

module.exports = ValidationSchema;