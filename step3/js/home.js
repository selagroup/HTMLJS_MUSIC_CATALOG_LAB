document.addEventListener('DOMContentLoaded',()=>{
    const HOVER_CLASS = 'hover';
    const SELECTED_CLASS = 'selected';

    const artists_elems = document.querySelectorAll('.artslist li');

    for(let i=0; i<artists_elems.length; i++){
        let item = artists_elems[i];
        bindHover(item);
        bindClick(item);

    }

    function item_mouseover(item){
        if(!item.classList.contains(HOVER_CLASS)){
            item.classList.add(HOVER_CLASS);
        }
    }

    function item_mouseout(item){
        if(item.classList.contains(HOVER_CLASS)){
            item.classList.remove(HOVER_CLASS);
        }
    }
    function item_click(event){
        let item = event.target;
        item.classList.toggle(SELECTED_CLASS);
        if(item.classList.contains(SELECTED_CLASS)){
            unbindHover(item);
        } else {
            bindHover(item);
        }

    }

    function bindHover(item){
        item.addEventListener('mouseover',(event) => item_mouseover(item));
        item.addEventListener('mouseout',(event) => item_mouseout(item));
    }
    function unbindHover(item){
        item.removeEventListener('mouseover',item_mouseover);
        item.removeEventListener('mouseout',item_mouseover);
    }

    function bindClick(item){
        item.addEventListener('click',item_click);
    }

});
