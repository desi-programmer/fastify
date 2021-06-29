
# `Fastify Crash Course`

Fastify basics on How to get started, routing, schemas and GET,POST,DELETE,UPDATE and PUT request Handling.

# `Using`

```bash
    git clone https://github.com/desi-programmer/fastify.git
    cd fastify-mongoose-api
    npm install
    # <Replace Your Mongo URI>
    npm start
```

# `Router`

```javascript
function Router(app, options, done) {

    // @Routes
    app.get('/', getAllPosts);
    app.post('/create', CreatePost);
    app.delete('/delete', DeletePost);
    app.put('/update', UpdatePost);
    app.get('/:slug', require('../controllers/read-posts').getPostBySlug);
    
    done();
};
```

# `Schema Validation Example`

```javascript
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
```
