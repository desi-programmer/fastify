// Schema Validation
const validationSchema = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        views: { type: 'integer' },
                        slug: { type: 'string' },
                        title: { type: 'string' },
                        content: { type: 'string' },
                    }
                }
            }
        }
    },
    handler: (req, res) => {
        res.send("Data !");
    },
}

module.exports = validationSchema;