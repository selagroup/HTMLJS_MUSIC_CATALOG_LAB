var artists = [
    {
        id: 1,
        name:'Coldplay',
        Url:'http://coldplay.com',
        image:'https://www.nubimagazine.com/wp-content/uploads/2015/11/Coldplay-feat.jpg'
    },
    {
        id: 2,
        name:'U2',
        Url:'http://u2.com',
        image:'https://s-media-cache-ak0.pinimg.com/originals/7c/84/88/7c8488b80ea8b444fb28645fcc50f72f.jpg'
    },
    {
        id:3,
        name:'Kings of Leon',
        Url:'http://kingsofleon.com/',
        image:'http://img.wennermedia.com/article-leads-horizontal/rs-222528-KOL-Press-Shot.jpg'
    },
    {
        id:4,
        name:'Muse',
        Url:'https://muse.mu/',
        image:'http://i.imgur.com/aiqX3Cz.jpg'
    },
    {
        id:5,
        name:'Red Hot Chili Peppers',
        Url:'http://redhotchilipeppers.com',
        image:'https://consequenceofsound.files.wordpress.com/2016/05/red-hot-chili-peppers-dark-necessities-single-new-mp3.png'
    },
];
const api_url = 'http://localhost:3000/artists';

async function  getArtist() {
    return fetch(api_url)
        .then( res => res.json() );
}

function getArtistById(id){
    return artists.find(artist => artistById(artist,id));
}

function addArtist(artist){
   return fetch(api_url,{
    method:'POST',
    body:JSON.stringify(artist),
    headers: {
        'content-type': 'application/json'
    }
   }).then( res => res.json());

}

function updateArtist(artist){
    let inx = artists.findIndex(artist=> artistById(artist,id));
    if(artists[inx]){
        artists[inx] = artist;
        return true;
    }

    return false;


}

function deleteArtist(id){
   artists = artists.filter(artist =>  !artistById(artist,id));
}

const artistById = (artist,id) => artist.id === id;


