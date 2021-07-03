const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('siro is Here')
})
function keepAlive(){
  server.listen(3000, ()=>{
      console.log(`
_______________________________

[✅]===> HOST IS READY  
_______________________________    
      `.yellow)
  });
}
module.exports = keepAlive;
