

//댓글 작성 기능


const $commentsForm = document.querySelector(".comments");
const $writtenComments = document.querySelector(".written_comments");


$commentsForm.addEventListener("submit",registerComment);

function registerComment(event){
    event.preventDefault();

    //value가져오기
    const newlyWrittenComment = document.querySelector(".comments input:first-child").value;
    console.log(newlyWrittenComment);
    
    //코멘트wrapper
    const $newWrittenComment = document.createElement("div");
    $newWrittenComment.classList.add("written_comment");

    //코멘트컨텐트
    const $newCommentContentDiv = document.createElement("div");
    $newCommentContentDiv.classList.add("comment_content");
    
    const $newCommentContentSpan = document.createElement("span");
    $newCommentContentSpan.textContent = newlyWrittenComment;

    $newCommentContentDiv.appendChild($newCommentContentSpan);
    $newWrittenComment.appendChild($newCommentContentDiv);

   
   


    // 스탯div
    const commentStatsDiv = document.createElement("div");
    commentStatsDiv.classList.add("comment-stats");
    const commentDdabongDiv = document.createElement("div");
    commentDdabongDiv.classList.add("comment-ddabong");
    const ddabongIconSpan = document.createElement("span");
    ddabongIconSpan.classList.add("material-symbols-rounded");
    ddabongIconSpan.innerText = "thumb_up";
    const ddabongCountSpan = document.createElement("span");
    ddabongCountSpan.innerText = "0";
    commentDdabongDiv.appendChild(ddabongIconSpan);
    commentDdabongDiv.appendChild(ddabongCountSpan);
    const commentUnddabongDiv = document.createElement("div");
    commentUnddabongDiv.classList.add("comment-unddabong");
    const unddabongIconSpan = document.createElement("span");
    unddabongIconSpan.classList.add("material-symbols-rounded");
    unddabongIconSpan.innerText = "thumb_down";
    const unddabongCountSpan = document.createElement("span");
    unddabongCountSpan.innerText = "0";
    commentUnddabongDiv.appendChild(unddabongIconSpan);
    commentUnddabongDiv.appendChild(unddabongCountSpan);
    const restOfBtnsDiv = document.createElement("div");
    restOfBtnsDiv.classList.add("restofbtns");
    const chatIconSpan = document.createElement("span");
    chatIconSpan.classList.add("material-symbols-rounded");
    chatIconSpan.innerText = "chat";
    const bookmarkIconSpan = document.createElement("span");
    bookmarkIconSpan.classList.add("material-symbols-rounded");
    bookmarkIconSpan.innerText = "bookmark";
    const sendIconSpan = document.createElement("span");
    sendIconSpan.classList.add("material-symbols-rounded");
    sendIconSpan.innerText = "send";
    restOfBtnsDiv.append(chatIconSpan,bookmarkIconSpan,sendIconSpan);

    commentStatsDiv.append(commentDdabongDiv,commentUnddabongDiv,restOfBtnsDiv);

    $newWrittenComment.appendChild(commentStatsDiv);
    $writtenComments.append($newWrittenComment);
   

}

//대댓글 작성 기능