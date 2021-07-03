const figlet = require('figlet');
module.exports = {
	name: 'ready',
async	execute(client) {
    figlet('KINGMAN', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.brightRed)
    });
    client.user.setPresence({
      status: 'online',
      activity:{
        name:'By : siro',
        type:'WATCHING'
      }
    })
	}
}
