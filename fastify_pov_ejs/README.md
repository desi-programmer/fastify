# Using Point Of View to Render EJS Templates

I do remember telling that fastify is very ideal for API development and that is true, but for this Blog let's talk about using any template engine to implement Server Side Rendering.

## Setup

Let's create a project and install everything we need.

```bash
mkdir fastify_pov_ejs
cd fastify_pov_ejs
npm init --yes
npm i fastify
```

We are going to use Point of view that will help us register express template engines like ejs, hbs and pug.

In production mode, point-of-view will heavily cache the templates file and functions, while in development will reload every time the template file and function.

I am also going to use ejs as the template library here, but feel free to choose anything else.
Just remember that some may have some specific requirements, so check out the documentation of Point of view once.

```sh
npm i ejs point-of-view
```

Let's just setup a basic server.

```js
const fastify = require('fastify')();

fastify.get('/', (req, res) => {
    res.send("Hello World !");
});

const PORT = 5000;
fastify.listen(PORT, () => {
    console.log("Server Started !")
});
```

Now we will register point-of-view and will use it to set template engine.

```js
fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
});
```

We will create a directory named templates and a ejs file named index.ejs.
As of now, Add some basic HTMl code in it.
You can refer to my github repo for the source code.

Now for a route, we can render this view, using the view method as shown below.

```js
return res.view("/templates/index.ejs");
```

Now our '/' route looks like like this.
```js
app.get('/', (req, res) => {
    return res.view("/templates/index.ejs");
});
```

Run this code and you will see 
Welcome from ejs 
in your browser, which is html.

Let's add an h1 that says welcome {name}, where name will be provided as a variable to our template.

So, the ejs looks like this

```html
<h1>Welcome <%= name %></h1>
```

and let's pass the variable while rendering our view, 

```js
return res.view("/templates/index.ejs", { name : "Prince" });
```

Let's run this and we will see
`Hello Prince`
in the browser.