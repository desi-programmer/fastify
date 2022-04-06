const ValidationSchema = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        },
    },
    handler: (req, res) => {
        res.send({ "msg": "This is allowed", "msg2": "This is some sensitive information !" });
    },
}

module.exports = ValidationSchema;