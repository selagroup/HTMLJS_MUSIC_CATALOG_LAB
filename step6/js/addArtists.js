document.addEventListener('DOMContentLoaded',async ()=>{

    const  form = document.querySelector('form');

    const fromInst =validateForm(form);

    form.addEventListener('submit',(event)=>{

        try {
            if(fromInst.isValid()){
                let formData = serializeForm(form);
                let result =  addArtist(formData)
                    .then((data)=>{
                        event.preventDefault();
                        document.location.href = '/';
                    });
            }
        } catch (error) {
            event.preventDefault();
            console.error(error);
        }

        event.preventDefault();

    })

    function serializeForm(form){

        let dataObj = {};
        const inputs = form.querySelectorAll('input[name]');

        for(i=0; i<inputs.length; i++){
            let input = inputs[i];
            dataObj[input.name] = input.value;
        }

        return dataObj;
    }

})
