// Schema Validation
const validationSchema = {
    schema: {
        params: {
            type: 'object',
            required: ['id'],
            properties: {
                id: { type: 'number' },
            },
        }
    },
    handler: (req, res) => {
        res.send({ "msg": req.params });
    },
}

module.exports = validationSchema;