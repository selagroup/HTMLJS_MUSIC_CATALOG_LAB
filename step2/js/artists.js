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
        image:'https://pbs.twimg.com/profile_images/576158330306965504/ixJXzE_3_400x400.png'
    },
    {
        id:5,
        name:'Red Hot Chili Peppers',
        Url:'http://redhotchilipeppers.com',
        image:'https://consequenceofsound.files.wordpress.com/2016/05/red-hot-chili-peppers-dark-necessities-single-new-mp3.png'
    },
];

function getArtist() {
    return artists;
}

function getArtistById(id){
    return artists.find(artist => artistById(artist,id));
}

function addArtist(artist){
    artist.id =Math.round(Math.random()*100);
    artists.push(artist);
    return artist;
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


