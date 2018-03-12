function Comment(imageId, text) {
    // create the next incremented id based on length of existing comments
    this.id = this.constructor.all.length;
    this.imageId = imageId;
    this.text = text;
    this.constructor.all.push(this);  // add new Comment to list of comments
}

Comment.all = [];

Comment.prototype.buildCommentEl = function() {
    return $(`<li id='comment-${this.id}'>${this.text}</li>`);
}
