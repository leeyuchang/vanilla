import View from './View.js'

const tag = '[BlogListView]'

const BlogListView = Object.create(View)

BlogListView.MSG = {
  NO_ITEM: 'There is no item.',
}

BlogListView.setup = function (el) {
  console.log(tag)
  this.init(el)
  this.eventBinding()
  return this
}

BlogListView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getListHtml(data) : this.MSG.NO_ITEM
}

BlogListView.getListHtml = function (data) {
  return data
    .map(v => `<li data-title=${encodeURIComponent(v.title)}>
                <a href=${v.link}> ${v.title}</a>
                <div class="like">찜하기</div>
               </li>`)
    .reduce((html, a) => `${html}${a}`, '<ul>')
    .concat('</ul>')
}

BlogListView.eventBinding = function () {
  this.el.addEventListener('click', e => {
    const className = e.target.className
    if (className !== 'like' && className !== 'unlike') return
    const title = e.target.parentNode.dataset.title
    if (className === 'like') {
      e.target.className = 'unlike'
      e.target.innerText = '찜취소'
      this.emit('@add', decodeURIComponent(title))
    } else {
      e.target.className = 'like'
      e.target.innerText = '찜하기'
      this.emit('@del', decodeURIComponent(title))
    }
  })
}

export default BlogListView