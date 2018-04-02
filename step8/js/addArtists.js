document.addEventListener('DOMContentLoaded',async ()=>{

    let curArtist;
    let isUpdate = false;
    const qs = parseQuerystring();
    const form = document.querySelector('form');

    if(qs && qs.id){
        isUpdate = true;
        curArtist = await ArtistService.getArtistById(qs.id);
        if(curArtist){
            fillForm(curArtist);
        }
    }

    const fromInst =validateForm(form);

    form.addEventListener('submit',(event)=>{

        try {
            if(fromInst.isValid()){
                let artist = serializeForm(form);
                if(isUpdate){
                    ArtistService.updateArtist(curArtist.id,Object.assign({},curArtist,artist))
                    .then((data)=>{
                        event.preventDefault();
                        document.location.href = '/';
                    });
                }
                else{
                    ArtistService.addArtist(artist)
                       .then((data)=>{
                           event.preventDefault();
                           document.location.href = '/';
                       });
                }
            }
        } catch (error) {
            event.preventDefault();
            console.error(error);
        }

        event.preventDefault();

    })

    function serializeForm(form){

        let artist = new Artist();
        const inputs = form.querySelectorAll('input[name]');

        for(i=0; i<inputs.length; i++){
            let input = inputs[i];
            artist[input.name] = input.value;
        }

        return artist;
    }

    function parseQuerystring(){
        let qs = document.location.search.substr(1);
        let queryObject;
        if(qs.length>0){

            const qsItems = qs.split('&');
            queryObject = qsItems.reduce((acc,item)=>{

                let kv = item.split('=');
                acc[kv[0]] = kv[1];
                return acc;
            },{});
        }

        return queryObject;


    }


    function fillForm(data){
        const inputs = form.querySelectorAll('input[name]');

        for(i=0; i<inputs.length; i++){
            let input = inputs[i];
             input.value = data[input.name];
        }
    }

})
