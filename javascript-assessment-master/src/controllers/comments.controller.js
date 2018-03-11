class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    $(".add-comment").each(function() {
        $(this).on("submit", function(e){
            e.preventDefault();
            console.log('test');
            var imageId = $(this).closest(".image").find("ul").attr("id")
            var commentContents = $(this).find('input[name="comment-description"]').val();
        })
    })
  }

  addCommentFormListener() {
    // create comment form listener code here
  }
}


// $( ".selected" ).each(function(index) {
//     $(this).on("click", function(){
//         // For the boolean value
//         var boolKey = $(this).data('selected');
//         // For the mammal value
//         var mammalKey = $(this).attr('id'); 
//     });
// });.find('input[name="FirstName"]').val();