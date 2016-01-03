/**
 * Created by liyang on 16/1/3.
 */
const IO = require( 'koa-socket' );
const socket = new IO();
socket.attach( app );
var socketMap = new Map();
app.use(route.get('/io',function *(){
    yield  this.render('./views/io')
}))


/**
 * Socket handlers
 */
    var currentSocket = '';
    socket.on( 'connection', ctx => {
        console.log( 'Join event', ctx.socket.id )
        ctx.socket.emit('connections', {
             data: '你已经登陆成功'
        });
        socketMap.set(ctx.socket.id,ctx.socket);
        if (socketMap.has(currentSocket)) {
         var lastpeoPle =  socketMap.get(currentSocket);
            lastpeoPle.emit( 'connections', {
                numConnections: socket.connections.size
            });

        }
        currentSocket = ctx.socket.id
     })

    socket.on( 'disconnect', ctx => {
         console.log( 'leave event', ctx.socket.id )
         socketMap.delete(ctx.socket.id);
         socket.broadcast( 'connections', {
          numConnections: socket.connections.size
         })
    })

    socket.on( 'data', ( ctx, data ) => {
         console.log( 'data event', data )
        console.log( 'ctx:', ctx.event, ctx.data, ctx.socket.id )
        console.log( 'ctx.teststring:', ctx.teststring )
        ctx.socket.emit( 'response', {
        message: 'response from server'
    })
    })
    socket.on( 'numConnections', packet => {
     console.log('Number of connections: ${ socket.connections.size }')
    })