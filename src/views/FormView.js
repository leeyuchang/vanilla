import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.eventBind()
  return this
}

FormView.eventBind = function () {
  this.on('click', () => this.emit('@click'))
}

export default FormView