class Artist{

    constructor(id, name, url, image){
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image;
    }
}

const ArtistService = (function(){

    const api_url = 'http://localhost:3000/artists';

    const client = ApiClient.client(api_url);

    function getArtists() {
        return client.getAll();
    }

    function getArtistById(id){
        return client.getById(id);
    }

    function addArtist(artist){
      return client.create(artist);
    }

    function updateArtist(id,artist){

        return client.update(id,artist);
    }

    function deleteArtist(id){
       return client.delete(id);
    }

    return {
        getArtists
        ,getArtistById
        ,addArtist
        ,updateArtist
        ,deleteArtist
    }

}());
