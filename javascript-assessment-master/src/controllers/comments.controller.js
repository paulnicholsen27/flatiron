class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    $(".add-comment").each((index, element) => {
        element.addEventListener("submit", this.addCommentFormListener);
    })
  }
}

CommentsController.prototype.addCommentFormListener = function(e){
    e.preventDefault();
    var image = $(this).closest(".image");
    var imageId = Number(image.find("ul").attr("data-id"));
    var commentForm = $(this).find('input[name="comment-description"]')
    var commentContents = commentForm.val();
    if (commentContents.length) {
       var newComment = new Comment(imageId, commentContents);
       CommentsController.render(newComment);
       commentForm.val("");
    }
}



CommentsController.render = function(newComment){
    var imageId = newComment.imageId;
    var image = Image.all.find(image => image.id === Number(imageId));
    image.comments.push(newComment);
    var commentList = $(`#comments-${imageId}`);
    var commentEl = newComment.buildCommentEl();
    commentList.append(commentEl);
}