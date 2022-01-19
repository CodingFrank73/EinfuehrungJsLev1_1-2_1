
let headline = document.getElementById("headline");
let likeList = document.getElementById("likeList");

headline.classList.add("headlineDecoration");
likeList.classList.add("likeListDecoration")



function changeHeadline() {
    headline.classList.add("newHeadlineDecoration");
}

function resetHeadline() {
    headline.classList.remove("newHeadlineDecoration");
}