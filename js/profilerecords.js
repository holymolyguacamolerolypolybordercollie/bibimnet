const $tabArray = document.querySelectorAll(".profile-records__tab");
const $contentArray=document.querySelectorAll(".profile-records__content");



for(i=0;i<$tabArray.length;i++){
    $tabArray[i].addEventListener("click",onclickTab);
}

function onclickTab(event){
      for(j = 0; j < $tabArray.length; j++){
        $tabArray[j].classList.remove('active');
        $contentArray[j].classList.remove(`active`);
        $contentArray[j].classList.remove(`inactive`);
    }
    event.target.classList.add('active');

    if(event.target.classList.contains(`article`)){
        $contentArray[0].classList.add(`active`);
        $contentArray[1].classList.add(`inactive`);
        $contentArray[2].classList.add(`inactive`);
    }
    else if(event.target.classList.contains(`comment`)){
        $contentArray[0].classList.add(`inactive`);
        $contentArray[1].classList.add(`active`);
        $contentArray[2].classList.add(`inactive`);
    }
    else if(event.target.classList.contains(`bookmark`)){
        $contentArray[0].classList.add(`inactive`);
        $contentArray[1].classList.add(`inactive`);
        $contentArray[2].classList.add(`active`);
    }
    
}
