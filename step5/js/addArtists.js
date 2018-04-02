document.addEventListener('DOMContentLoaded',()=>{

    const  form = document.querySelector('form');

    const fromInst =validateForm(form);

    form.addEventListener('submit',(event)=>{
        if(fromInst.isValid()){
            alert('Form submitted');
        }
        else{
            alert('Form is invalid, please fix errors and submit again');
        }

        event.preventDefault();
    });

})
