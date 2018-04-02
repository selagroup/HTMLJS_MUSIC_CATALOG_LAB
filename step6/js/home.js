document.addEventListener('DOMContentLoaded',async ()=>{
    const HOVER_CLASS = 'hover';
    const SELECTED_CLASS = 'selected';

    const container = document.querySelector('.main_container');

    const artists = await getArtist();

    if(artists && artists.length > 0){
        const ul = createElement('ul');
        ul.classList.add('artslist');
        artists.forEach((artist)=> {
            ul.appendChild(createListItemElement(artist));
        });
        container.appendChild(ul);
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

    function createListItemElement(artist){
        const li = createElement('li');
        li.classList.add('clearfix');
        const div = createElement('div');
        const anchor = createElement('a');
        anchor.href = artist.url;
        anchor.setAttribute('target','_blank');
        anchor.innerHTML = artist.name;
        div.appendChild(anchor);
        const img = createElement('img');
        img.src = artist.image;
        li.appendChild(div);
        li.appendChild(img);

        bindHover(li);
        bindClick(li);

        return li;
    }

    function createElement(type){
        return document.createElement(type);
    }


});
