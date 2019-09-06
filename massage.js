//variables for write a rating
const starBtns = document.querySelectorAll('.starBtn');

//variables for write a review
const submitReviewBtn = document.getElementById('submitReviewBtn');
const nameReview = document.getElementById('name');
const titleReview  = document.getElementById('title');
const narrativeReview = document.getElementById('narrative');
const reviewResponse = document.getElementById('reviewResponse');

//average rating
//Goal highlight star rating with star button click and all stars less than star rating
starBtns.forEach(hightlightStars);
function hightlightStars() {
    for (i = 0; i < starBtns.length; ++i) {
        starBtns[i].style.backgroundColor = "#ffd700";
    }
}



//check for the complettion of input fields
submitReviewBtn.addEventListener('click', event => {
    if(nameReview.value.length !== 0 && titleReview.value.length !== 0 && narrativeReview.value.length !==0){
        reviewResponse.innerHTML = '<p>Thank You For Submitting A Review</br> We Value Your Input</p>';
    }else{
        alert('Review not Complete \n Please Fill All Areas');
    }
  });