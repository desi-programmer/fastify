// router 

const updatePost = require('../controllers/update-post');

// Schema Validation
const getAllPosts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        views : { type : 'integer' },
                        slug : { type : 'string' },
                        title : { type : 'string' },
                        content : { type : 'string' },
                    }
                }
            }
        }
    },
    handler: require('../controllers/read-posts').getAllPosts,
}


const CreatePost = {
    schema: {
        body: {
            type: 'object',
            // array of required fiels
            required: ['slug', 'title', 'content',],
            properties: {
                // slug : { type : 'string' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        },
    },
    handler: require('../controllers/create-post'),
}

const DeletePost = {
    schema: {
        body: {
            type: 'object',
            // array of required fiels
            required: ['slug'],
           
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        },
    },
    handler: require('../controllers/delete-post'),
}

const UpdatePost = {
    schema: {
        body: {
            type: 'object',
            // array of required fiels
            required: ['slug', 'title', 'content'],
           
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    msg: { type: 'string' }
                }
            }
        },
    },
    handler: require('../controllers/update-post'),
}

function Router(app, options, done) {

    // @Routes
    app.get('/', getAllPosts);
    app.post('/create', CreatePost);
    app.delete('/delete', DeletePost);
    app.put('/update', UpdatePost);
    app.get('/:slug', require('../controllers/read-posts').getPostBySlug);

    // @Not-Found Route
    app.all('*', (req, reply) => reply.code(404).send("ERR ! Not Found !"));

    done();
};

module.exports = Router;