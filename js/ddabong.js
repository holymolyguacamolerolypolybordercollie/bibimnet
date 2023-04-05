const $ddabong_area = document.querySelector(".ddabong");
const $ddabong_count = document.querySelector(".ddabong span:last-child");

const $unddabong_area = document.querySelector(`.unddabong`);
const $unddabong_count = document.querySelector(".unddabong span:last-child");

let isDdabonged = false
let isUnddabonged = false


$ddabong_area.addEventListener("click", countDdabongs);
$unddabong_area.addEventListener("click", countUnDdabongs);


function countDdabongs(){
    let ddabong_number = parseInt($ddabong_count.textContent);
    
    if (isUnddabonged===false){
        if(isDdabonged === false){
            ddabong_number++;
            $ddabong_count.textContent = ddabong_number;
        

            isDdabonged = true;
        }
        else if(isDdabonged === true){
            ddabong_number--;
            $ddabong_count.textContent = ddabong_number;
    
            isDdabonged = false;
        }
    }
    else{
        return;
    }
}

function countUnDdabongs(){
    let unddabong_number = parseInt($unddabong_count.textContent);
    
    if(isDdabonged===false){
        if(isUnddabonged === false){
            unddabong_number--;
            $unddabong_count.textContent = unddabong_number;

            isUnddabonged=true;

        }
        else if(isUnddabonged === true){
            unddabong_number++
            $unddabong_count.textContent = unddabong_number;

            isUnddabonged = false;
        }
    }
    else{
        return;
    }

}
