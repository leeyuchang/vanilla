import View from "./View.js";

const tag = "[LikeListView]";

const LikeListView = Object.create(View);

LikeListView.setup = function (el) {
  this.init(el);
  this.likedSet = new Set();
  return this;
};

LikeListView.add = function (title) {
  this.likedSet.add(title);
  this.render();
};

LikeListView.del = function (title) {
  this.likedSet.delete(title);
  this.render();
};

LikeListView.render = function () {
  this.el.innerHTML = Array.from(this.likedSet)
    .map((item) => `<li>${item}</li>`)
    .reduce((html, item) => `${html}${item}`, '');
};

export default LikeListView;
