import FormView from '../views/FormView.js'
import BlogListView from '../views/BlogListView.js'
import LikeListView from '../views/LikeListView.js'
import LandingView from '../views/LandingView.js'

import ListModel from '../model/ListModel.js'
import MovieListModel from '../model/MovieListModel.js'

const TAG = '[MainController]'

export default {

  init() {
    FormView
      .setup(document.querySelector('.start'))
      // .on('@click', e => this.fetchData())
      .on('@click', e => this.fetchMovieData())
    
    BlogListView
      .setup(document.querySelector('.blogList'))
      .on('@add', e => this.onAdd(e.detail))
      .on('@del', e => this.onDel(e.detail))    

    LikeListView
      .setup(document.querySelector('.like-list>ul'))
    
    LandingView
      .setup(document.querySelector('.landing'))
      .on('@readmore', e => this.fetchMovieData())
      .on('@showMovieInfo', e => this.onShowMoiveInfo(e.detail))
  },

  fetchData() {
   ListModel
      .getData("/data/data.json")
      .then(data => BlogListView.render(data))
  },

  fetchMovieData() {
    MovieListModel
      .getData()
      .then(data => {
        console.log(TAG, data);
        LandingView.render(data)
      })
  },

  onAdd(title) {
    LikeListView.add(title)
  },

  onDel(title) {
    LikeListView.del(title)
  },

  onShowMoiveInfo(id) {
    MovieListModel.getMovieInfo(id).then(data => console.log('onShowMoiveInfo', data))
  }

}