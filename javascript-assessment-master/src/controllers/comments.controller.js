class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
      // add comment form listener to every comment form element
      this.$addCommentForm.each((index, element) => {
        element.addEventListener("submit", this.addCommentFormListener);
    })
  }
}

CommentsController.prototype.addCommentFormListener = function(e){
    e.preventDefault();  // don't submit form and reload page
    var image = $(this).closest(".image");
    var imageId = Number(image.find("ul").attr("data-id"));
    var commentForm = $(this).find('input[name="comment-description"]')
    var commentContents = commentForm.val();
    if (commentContents.length) {  // don't create comment if nothing was entered
       var newComment = new Comment(imageId, commentContents);
       CommentsController.render(newComment);
       commentForm.val("");  // reset comment form
    }
}

CommentsController.render = function(newComment){
    // adds comment to Image object and displays it in comment list
    var imageId = newComment.imageId;
    var image = Image.all.find(image => image.id === imageId);
    image.comments.push(newComment);
    var commentList = $(`#comments-${imageId}`);
    var commentEl = newComment.buildCommentEl();
    commentList.prepend(commentEl);  // newest comments on top
}