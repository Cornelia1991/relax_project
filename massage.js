//variables for write a rating


//variables for write a review
const submitReviewBtn = document.getElementById('submitReviewBtn');
const nameReview = document.getElementById('name');
const titleReview  = document.getElementById('title');
const narrativeReview = document.getElementById('narrative');
const reviewResponse = document.getElementById('reviewResponse');

//average rating
//Goal highlight star rating with star button click and all stars less than star rating
let count;
function starmark(item)
{
    count=item.id[0];
    sessionStorage.starRating = count;
    let subid= item.id.substring(1);
    for(let i=0;i<5;i++){
        if(i<count){
        document.getElementById((i+1)+subid).style.backgroundColor="#ffd700";
        }else{
        document.getElementById((i+1)+subid).style.color="black";
        }
    }//end for loop
}//end star function
    
submitRating.addEventListener('click', event => {
    reviewResponse.innerHTML = '<p>Thank You For Submitting A Review</br> We Value Your Input</p>';
});



//check for the complettion of input fields
submitReviewBtn.addEventListener('click', event => {
    if(nameReview.value.length !== 0 && titleReview.value.length !== 0 && narrativeReview.value.length !==0){
        reviewResponse.innerHTML = '<p>Thank You For Submitting A Review</br> We Value Your Input</p>';
    }else{
        alert('Review not Complete \n Please Fill All Areas');
    }
  });