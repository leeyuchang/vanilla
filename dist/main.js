/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import blog from './main.js';
// const myblog = new blog();



document.addEventListener('DOMContentLoaded', () => _controller_MainController_js__WEBPACK_IMPORTED_MODULE_0__["default"].init())

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _views_BlogListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _views_LikeListView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _model_ListModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);






const tag = '[MainController]'

/* harmony default export */ __webpack_exports__["default"] = ({

  init() {

    _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__["default"]
      .setup(document.querySelector('.start'))
      .on('@click', e => this.fetchData())
    
    _views_BlogListView_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      .setup(document.querySelector('.blogList'))
      .on('@add', e => this.onAdd(e.detail))
      .on('@del', e => this.onDel(e.detail))    

    _views_LikeListView_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      .setup(document.querySelector('.like-list>ul'))
  },

  fetchData() {
    _model_ListModel_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      .getData("/data/data.json")
      .then(data => _views_BlogListView_js__WEBPACK_IMPORTED_MODULE_1__["default"].render(data))
  },

  onAdd(title) {
    _views_LikeListView_js__WEBPACK_IMPORTED_MODULE_2__["default"].add(title)
  },

  onDel(title) {
    _views_LikeListView_js__WEBPACK_IMPORTED_MODULE_2__["default"].del(title)
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const tag = '[FormView]'

const FormView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"])

FormView.setup = function (el) {
  this.init(el)
  this.eventBind()
  return this
}

FormView.eventBind = function () {
  this.el.addEventListener('click',() => this.emit('@click'))
}

/* harmony default export */ __webpack_exports__["default"] = (FormView);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },
  show() {
    this.el.style.display = ''
    return this
  },
  hide() {
    this.el.style.display = 'none'
    return this
  },
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const tag = '[BlogListView]'

const BlogListView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"])

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

/* harmony default export */ __webpack_exports__["default"] = (BlogListView);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const tag = "[LikeListView]";

const LikeListView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/* harmony default export */ __webpack_exports__["default"] = (LikeListView);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  async getData(dataURL) {
    const res = await fetch(dataURL);
    const { body } = await res.json();
    return body;
  },
});


/***/ })
/******/ ]);