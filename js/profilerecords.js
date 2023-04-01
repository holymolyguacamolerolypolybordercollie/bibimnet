const $tabArray = document.querySelectorAll(".profile-records__tab");
let tabArray = Array.from($tabArray);


for(i=0;i<3;i++){

    $tabArray[i].addEventListener("click",onClickTabButton);
}

function onClickTabButton(event){


    const clickedTabs = event.target
    event.target.classList.remove("hidden");
    event.target.classList.add("active");
    
    const restOfTabs = tabArray.splice(clickedTabs);

    console.log(restOfTabs);

    for(i=0;i<2;i++){
        restOfTabs[i].classList.add("inactive");
        restOfTabs[i].classList.remove("active");

    }
    


}