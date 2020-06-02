import FormView from '../views/FormView.js'
import BlogListView from '../views/BlogListView.js'
import LikeListView from '../views/LikeListView.js'

import ListModel from '../model/ListModel.js'

const tag = '[MainController]'

export default {

  init() {

    FormView
      .setup(document.querySelector('.start'))
      .on('@click', e => this.fetchData())
    
    BlogListView
      .setup(document.querySelector('.blogList'))
      .on('@add', e => this.onAdd(e.detail))
      .on('@del', e => this.onDel(e.detail))    

    LikeListView
      .setup(document.querySelector('.like-list>ul'))
  },

  fetchData() {
    ListModel
      .getData("/data/data.json")
      .then(data => BlogListView.render(data))
  },

  onAdd(title) {
    LikeListView.add(title)
  },

  onDel(title) {
    LikeListView.del(title)
  }
}