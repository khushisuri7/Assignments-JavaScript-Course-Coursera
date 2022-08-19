(function(){

const detailsForm=document.querySelector('#destination_details_forms');
detailsForm.addEventListener('submit',handleFormSubmit);
function handleFormSubmit(event){
    event.preventDefault();
    const destName=event.target.elements['name'].value;
    const destLocation=event.target.elements['location'].value;
    const destPhoto=event.target.elements['photo'].value;
    const destDesc=event.target.elements['description'].value;

    for(let i=0;i<detailsForm.length;i++){
        detailsForm.elements[i].value="";
    }

    const destCard=creareDestinationCard(destName,destLocation,destPhoto,destDesc);
    const wishListContainer=document.getElementById('#destinations_container');
    if(wishListContainer.children.length===0){
        document.getElementById('#title').innerHtml="My wish list";
    }
    document.querySelector('#destinations_container').appendChild(destCard);
}
function creareDestinationCard(name,location,photoURL,description){
    const card=document.createElement("div");
    card.className='card';
    const img=document.createElement('img');
    img.setAttribute('alt',name);

    const constantPhotoURL="images/signpost.jpg";
    if(photoURL.length===0){
        img.setAttribute('src',constantPhotoURL);
    }
    else{
        img.setAttribute('src',PhotoURL);
    }

    const cardBody=document.createElement("div");
    cardBody.className='card-body';
    const cardTitle=document.createElement("h3");
    cardTitle.innerText=name;
    cardody.appendChild='cardTitle';
    const cardSubtitle=document.createElement("h4");
    cardSubtitle.innerText=location;
    cardody.appendChild='cardSubtitle';

    if(description.length!==0){
        const cardText=document.createElement("p");
        cardText.className="card-text";
        cardText.innerText=description;
        cardBody.appendChild(cardText);
    }

    const cardDelBtn=document.createElement("button");
    cardDelBtn.innerText="Remove";
    cardDelBtn.addEventListener('click',removeDestination);
    cardBody.appendChild(cardDelBtn);

    card.append(cardBody);
    return card;

}
function removeDestination(event){
    const card=event.target.parentElement.parentElement;
    card.remove();
}
})();