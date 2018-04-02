
const api_url = 'http://localhost:3000/artists';

function getArtist() {
    return fetch(api_url)
        .then( res => res.json() );
}

function getArtistById(id){
    return fetch(`${api_url}/${id}`)
        .then( res => res.json() );
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

function updateArtist(id,artist){

    return fetch(`${api_url}/${id}`,{
        method:'PUT',
        body:JSON.stringify(artist),
        headers: {
            'content-type': 'application/json'
        }
    }).then( res => res.json() );
}

function deleteArtist(id){
   artists = artists.filter(artist =>  !artistById(artist,id));
}

const artistById = (artist,id) => artist.id === id;


