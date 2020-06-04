import View from "./View.js";
import { IMAGE_BASE_URL } from '../Config.js'

const TAG = "[LandingView]";
const LandingView = Object.create(View);

LandingView.MSG = { NO_ITEM: "no items" };

LandingView.setup = function (el) {
  this.init(el)
  this.eventBinding()
  return this
};

LandingView.eventBinding = function () {
  this.on('click', ({ target }) => {
    const clzName = target.className;
    const movieId = target.parentNode.dataset.id;

    console.log('clzName', clzName , 'dataset', movieId)
    
    if (clzName === 'read-more') this.emit('@readmore')
    if (movieId) this.emit('@showMovieInfo', movieId)
  })
}

LandingView.render = function (data = {}) {
  this.el.innerHTML = data ? this.getLandingHtml(data) : this.MSG.NO_ITEM;
};

LandingView.getLandingHtml = function (data) {
  return data
    .map(item => `<li class="card-item" data-id="${item.id}">
                    <figure class="card-image" style="background-image: url(${IMAGE_BASE_URL}w500/${item.poster_path})">
                    </figure>
                    <div class="card-desc">
                      ${item.overview}
                    </div>
                  </li>`)
    .reduce((acc, a) => `${acc}${a}`, '<ul class="card-list">')
    .concat('</ul>')
    .concat('<button class="read-more" style="">(read more)</button>')
};

export default LandingView;
