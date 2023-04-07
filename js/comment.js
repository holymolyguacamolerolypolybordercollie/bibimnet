//코멘트 추천,비추천 기능

const $comment_ddabong_area = document.querySelector(".comment-ddabong");
const $comment_ddabong_count = document.querySelector(".comment-ddabong span:last-child");

const $comment_unddabong_area = document.querySelector(`.comment-unddabong`);
const $comment_unddabong_count = document.querySelector(".comment-unddabong span:last-child");

let isCommentDdabonged = false
let isCommentUnddabonged = false


$comment_ddabong_area.addEventListener("click", countCommentDdabongs);
$comment_unddabong_area.addEventListener("click", countCommentUnDdabongs);


function countCommentDdabongs(){
    let comment_ddabong_number = parseInt($comment_ddabong_count.textContent);
    
    if (isCommentDdabonged===false){
        if(isCommentUnddabonged === false){
           
            comment_ddabong_number++;
            $comment_ddabong_count.textContent = comment_ddabong_number;
        

            isCommentUnddabonged = true;
        }
        else if(isCommentUnddabonged === true){
            comment_ddabong_number--;
            $comment_ddabong_count.textContent = comment_ddabong_number;
    
            isCommentUnddabonged = false;
        }
    }
    else{
        return;
    }
}

function countCommentUnDdabongs(){
    let comment_unddabong_number = parseInt($comment_unddabong_count.textContent);
    
    if(isCommentUnddabonged===false){
        if(isCommentDdabonged === false){
            comment_unddabong_number--;
            $comment_unddabong_count.textContent = comment_unddabong_number;

            isCommentDdabonged=true;

        }
        else if(isCommentDdabonged === true){
            comment_unddabong_number++
            $comment_unddabong_count.textContent = comment_unddabong_number;

            isCommentDdabonged = false;
        }
    }
    else{
        return;
    }

}

//댓글 작성 기능


