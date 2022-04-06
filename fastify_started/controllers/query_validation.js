// Schema Validation
const validationSchema = {
    schema: {
        querystring: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
            },
            required: ['id']
        }
    },
    handler: (req, res) => {
        res.send({ "msg": req.query });
    },
}

module.exports = validationSchema;