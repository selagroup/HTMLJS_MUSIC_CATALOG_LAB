function validateForm(form){

    const CLASS_INVALID = 'invalid';
    const CLASS_VALID = 'valid';

    const URL_REGEXP = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

    function validateUrl(url){
        return url.length === 0 || URL_REGEXP.test(url);
    }

    function validateUrlInput(input){

            if(input.classList.contains(CLASS_INVALID))
                return false;

            let valid = validateUrl(input.value);

            if(valid){

                removeError(input);
            }
            else{
                showError(input,'please enter a valid url');
            }


            return valid;
    }

    function validateRequiredInput(input){
            let valid = input.value.length>0;

            if(valid){
                removeError(input);
            }
            else{
                showError(input,'this field is required');
            }


            return valid;

    }


    function showError(input,error){
        input.classList.add('invalid');
        let parent = input.parentElement;

        let errorElem = parent.querySelector('div.error');
        if(!errorElem){
            errorElem = createErrorElement(error);
            parent.appendChild(errorElem);
        }
        errorElem.innerHTML = error;



    }

    function removeError(input,error){
        input.classList.remove('invalid');
        let parent = input.parentElement;
        let errorElem = parent.querySelector('div.error');
        if(errorElem){
            parent.removeChild(errorElem);
        }
    }

    function createErrorElement(){

        let div = document.createElement('div');
        div.classList.add('error');

        return div;
    }

    const inputs = form.querySelectorAll('input');

    for(let i=0; i<inputs.length; i++){

        let input = inputs[i];
        if(input.hasAttribute('required')){
            input.addEventListener('change',(event)=>{
                validateRequiredInput(event.target);
            });
        }
        if(input.type && input.type === 'url'){
            input.addEventListener('change',(event)=>{
                validateUrlInput(event.target);
            });
        }

    }

    const formInstance ={
        isValid: function(){

            let valid = true;
            for(let i=0; i<inputs.length; i++){

                let input = inputs[i];
                if(input.hasAttribute('required')){
                    valid = validateRequiredInput(input) && valid;
                }
                if(input.type && input.type === 'url'){
                    valid = validateUrlInput(input) && valid;
                }

            }

            return valid;
        }
    }

    return formInstance;


}
