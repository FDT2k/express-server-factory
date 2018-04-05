
# express-server-factory

Smally factory to instanciate an express server






**usage**

    const server = require('express-server-factory');


    server.start(serverSettings,mediator,middlewares,routes,[options]);


**serverSettings**

    const serverSettings = {
	    port: 3000
	}

**mediator**
Mediator is based on an EventEmitter object.  You can pass any object that support an emit(event) function

    const {EventEmitter} = require('events')
    const mediator = new EventEmitter()

Once server has started up it will emit a "server.ready" event.

**middlewares**
Array of express middlewares. Note that body-parser is enabled by default

**routes**
Array of routes direclty passed to express

**options**

    const options = {
	    postLimit:'50mb',
	    routePrefix:'/',
	    morgan:'dev'
	}
