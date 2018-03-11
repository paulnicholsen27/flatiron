// create Comment class here

function Comment(imageId, text) {
    this.id = this.constructor.all.length;
    this.imageId = imageId;
    this.text = text;
    this.constructor.all.push(this);
}

Comment.all = [];

Comment.prototype.buildCommentEl = function() {
    return $(`<li id='comment-${this.id}'>${this.text}</li>`);
}
