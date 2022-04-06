## Validation

Fastify uses a schema-based approach to validate the body, parameter and queryString and serialize your outputs.
alidation will only be attempted if the content type is `application-json`.
Although it is not mandatory, it's recommended to use json schema.

## Query String Validation

Let's talk about simple query string validation.

We create another file in controllers named `query_validation.js` and add this simple validation schema.
It's pretty complicated if you have no previous understanding of body validation so consider watching this youtube video or reading the docs from fastify.

Anyways as you can see we have a simple data here, called validationSchema.
schema here can be used to validate body,parameters and query strings.

We have type to define the expected type of data (object, array), properties that define each property and required that is an array of all required values.

```js
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
```

Let's make request and see what happends.

Without query
```
localhost:5000/query
```

```json
{
	"statusCode": 400,
	"error": "Bad Request",
	"message": "querystring should have required property 'id'"
}
```

With query
```
localhost:5000/query?id=121212
```

```json
{
	"msg": {
		"id": "121212"
	}
}
```

## Parameters Validation

Validating parameters is also almost the same.
Let's take a look at the example below.

A file for parameter validation, I named it parameters.js
```js
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
```

and let's call it in our router.

```js
app.get('/params/:id', require('./parameter'));
```

This will make sure that an id is passed which is an integer.

Request Without Id
```
localhost:5000/params/
```

Response
```json
{
	"statusCode": 400,
	"error": "Bad Request",
	"message": "params.id should be number"
}
```

Request With Non integer Id
```
localhost:5000/params/as
```

Response
```json
{
	"statusCode": 400,
	"error": "Bad Request",
	"message": "params.id should be number"
}
```

Request With Valid data
```
localhost:5000/params/12
```

Response
```json
{
	"msg": {
		"id": 12
	}
}
```

## Body data Validation

Validating Body data is also the same. 
Let's take a look at the example below.

```js
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
```
```js
// in router.js
app.post('/body', require('./bodyValidation')); 
```

We use body to validate body data, and here it will ask for name, username and password.
try making requests without data or with invalid data and you will see the different kinds of responses.


Invalid Request

```
localhost:5000/body
```

```json
{
	"statusCode": 400,
	"error": "Bad Request",
	"message": "body should be object"
}
```

Valid Request
```
localhost:5000/body
```
Body
```json
{
	"name" : "Prince",
	"username" : "prince",
	"password" : "12121212"
}
```

Response
```json
{
	"msg": {
		"name": "Prince",
		"username": "prince",
		"password": "12121212"
	}
}
```


## Serialization

*It will increase your throughput by 100-400% depending on your payload and will prevent accidental disclosure of sensitive information.*

In simple terms , it will make sure that any data , other than that which you have mentioned in schema, will not be sent, even if you are sending it in response.

Let's take a quick example.

We add response schema and now you will see that we can only send valid objects and only data with the key of `msg` will be sent

```js
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
```

```js
app.get('/res', require('./response'));
```

Request

```
localhost:5000/res
```

Response

```
{
	"msg": "This is allowed"
}
```

A lot more can happen with this, you can watch the video below or read the documentation, and don't worry, I ain't trying to promote myself, it's just that I am not very good with typing blogs.