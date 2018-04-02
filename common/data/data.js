const data = require('./db.json');
const fs = require('fs');

let newdb = data.artists.map((item)=>{
    return Object.assign({},item,{id:Math.round(Math.random()*100), image: item.image[2].text});
});

fs.writeFile('./db2.json', JSON.stringify({artists:newdb}));

