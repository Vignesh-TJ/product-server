// dubby json server backendnp

// import library
const jsonServer =require('json-server')
// create server

const mediaPlayerServer=jsonServer.create()

// middleware to parse the json format
  const middleware=jsonServer.defaults()

// setup path to store data
const router=jsonServer.router('./db.json')

// usinggg...........
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


// set port for server
const PORT = 4000 || process.env.PORT

// TO LISTEN THE REQUEST FORM THE CLIENT FOR RESOLVING THAT REQUEST
mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running sucessfull at port number ${PORT}`);
    
})