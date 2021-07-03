const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const fs = require("fs")
let table = new ascii("Events");
table.setHeading("Events", "Load status");
module.exports = (client) => {
    readdirSync("./events/").forEach(dir => {
      const events = readdirSync(`./events/${dir}/`).filter(file => file.endsWith(".js"));
        for (const file of events){
        const event = require(`../events/${dir}/${file}`)
        if(event.name){
        let eventName = file.split(".")[0];
        client.eventss.set(event.name, event);
        table.addRow(file, '✅');
        client.on(event.name, (...args) => event.execute(...args, client));
        }else{
          client.on(event.name, (...args) => event.execute(...args, client));
          table.addRow(file, `❌`);
          continue;
        }
      }
    });
    console.log(table.toString().brightMagenta);
}
