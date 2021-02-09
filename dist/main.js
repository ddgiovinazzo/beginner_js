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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/yoda-stitch.jpg":
/*!************************************!*\
  !*** ./src/images/yoda-stitch.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/yoda-stitch.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/DOMExample */ "./src/scripts/DOMExample.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
document.querySelector("#DOM-demo").addEventListener("click", startDOM);

function startDOM() {
  unregisterEventListeners();
  clearDemo();
  currentStateObj.currentExample = "DOMDEMO";
  Object(_scripts_DOMExample__WEBPACK_IMPORTED_MODULE_4__["DOMExample"])();
}

function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_2__["default"]();
  canvas.createCanvas();
  var squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords, canvas.fillColor)];
  var animating = true;

  var animation = function animation() {
    canvas.clearCanvas();
    if (animating) squares.forEach(function (sq) {
      return sq.updateSquare(canvas.fillColor);
    });
    squares.forEach(function (sq) {
      return sq.drawSquare();
    });
    window.requestAnimationFrame(animation);
    squares.forEach(function (sq) {
      if (sq.coords[0] + sq.coords[2] > window.innerWidth) sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push(["window", "keydown", handleKeyDown]);
  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push(["window", "mousedown", handleMouseDown]);

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach(function (sq) {
        return sq.reverseAnimation();
      });
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  }

  function handleMouseDown(event) {
    event.preventDefault();
    squares.push(new _scripts_square__WEBPACK_IMPORTED_MODULE_3__["default"](canvas.ctx, canvas.coords.map(function (co) {
      return co + 25;
    }), canvas.fillColor)); // animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    var _currentStateObj$curr = currentStateObj.currentEventListeners.pop(),
        _currentStateObj$curr2 = _slicedToArray(_currentStateObj$curr, 3),
        selector = _currentStateObj$curr2[0],
        event = _currentStateObj$curr2[1],
        handler = _currentStateObj$curr2[2];

    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO") document.body.removeChild(document.querySelector("canvas"));

  if (currentStateObj.currentExample === "DOMDEMO") {
    _toConsumableArray(document.querySelectorAll(".card")).forEach(function (elem) {
      return document.body.removeChild(elem);
    });
  }
}

/***/ }),

/***/ "./src/scripts/DOMExample.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMExample.js ***!
  \***********************************/
/*! exports provided: DOMExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMExample", function() { return DOMExample; });
/* harmony import */ var _images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/yoda-stitch.jpg */ "./src/images/yoda-stitch.jpg");

var DOMExample = function DOMExample() {
  var _testObj$key;

  var testObj = {
    key1: "hi",
    key2: {
      key3: "Hello"
    }
  };
  var greeting = (testObj === null || testObj === void 0 ? void 0 : (_testObj$key = testObj.key2) === null || _testObj$key === void 0 ? void 0 : _testObj$key.key3) || testObj.key1;
  document.body.classList.add("center");
  var card = document.createElement("div");
  card.classList.add("card", "center");
  card.innerHTML = "<h2>".concat(greeting, " World!</h2>");
  document.body.append(card);
  var imgCard = document.createElement("div");
  imgCard.classList.add("card", "center", "image-card");
  document.body.appendChild(imgCard);
  var imgElement = document.createElement("img");
  imgElement.src = buildAssetPath(_images_yoda_stitch_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  imgElement.classList.add("card", "center");
  imgElement.style.objectFit = "cover";
  imgElement.style.filter = "grayscale(80%)";
  document.body.appendChild(imgElement);
  var randomCard = document.createElement("div");
  randomCard.classList.add("card", "center", "rando");
  var winnerP = document.createElement("p");
  var randomButton = document.createElement("btn");
  randomButton.innerText = "Pick Me!";
  randomCard.append(randomButton, winnerP);
  document.body.append(randomCard);

  randomButton.onclick = function (e) {
    e.preventDefault();
    winnerP.innerHTML = randomJobSeeker();
  };
}; // to resolve path issues for images in JS

function buildAssetPath(imgSrc) {
  return "./dist/".concat(imgSrc);
} // function randomJobSeeker() {
// const jobSeekers = process.env.NODE_ENV === 'development' ? 
//   require('../../secret').JOBSEEKERS : 
//   [
//     "Arthur Dent",
//     "Ford Prefect",
//     "Zaphod Beeblebrox",
//     "Marvin the Paranoid Android",
//     "Trillian",
//     "Slartibartfast",
//   ];
//   const winner = jobSeekers[Math.floor(Math.random() * jobSeekers.length)];
//   return winner;
// }

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.coords = [10, 10, 150, 100];
    this.animationDir = 1;
    this.fillColor = "green";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width / 2;
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "updateSquare",
    value: function updateSquare(color) {
      var _this = this;

      this.color = color;
      this.coords = this.coords.map(function (coord) {
        return coord += 1 * _this.animationDir;
      });
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy95b2RhLXN0aXRjaC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0RPTUV4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJjdXJyZW50U3RhdGVPYmoiLCJjdXJyZW50RXhhbXBsZSIsImN1cnJlbnRFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydENhbnZhcyIsInN0YXJ0RE9NIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwiY2xlYXJEZW1vIiwiRE9NRXhhbXBsZSIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiYW5pbWF0aW5nIiwiYW5pbWF0aW9uIiwiY2xlYXJDYW52YXMiLCJmb3JFYWNoIiwic3EiLCJ1cGRhdGVTcXVhcmUiLCJkcmF3U3F1YXJlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5uZXJXaWR0aCIsInJldmVyc2VBbmltYXRpb24iLCJoYW5kbGVLZXlEb3duIiwicHVzaCIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJtYXAiLCJjbyIsImxlbmd0aCIsInBvcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJ0ZXN0T2JqIiwia2V5MSIsImtleTIiLCJrZXkzIiwiZ3JlZXRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsImltZ0NhcmQiLCJhcHBlbmRDaGlsZCIsImltZ0VsZW1lbnQiLCJzcmMiLCJidWlsZEFzc2V0UGF0aCIsInN0aXRjaEFuZFlvZGEiLCJzdHlsZSIsIm9iamVjdEZpdCIsImZpbHRlciIsInJhbmRvbUNhcmQiLCJ3aW5uZXJQIiwicmFuZG9tQnV0dG9uIiwiaW5uZXJUZXh0Iiwib25jbGljayIsImUiLCJyYW5kb21Kb2JTZWVrZXIiLCJpbWdTcmMiLCJwcm9wcyIsImFuaW1hdGlvbkRpciIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb29yZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsZ0JBQWMsRUFBRSxJQURNO0FBRXRCQyx1QkFBcUIsRUFBRTtBQUZELENBQXhCO0FBS0FDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0MsZ0JBQXZDLENBQXdELE9BQXhELEVBQWlFQyxXQUFqRTtBQUNBSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0NDLGdCQUFwQyxDQUFxRCxPQUFyRCxFQUE4REUsUUFBOUQ7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQkMsMEJBQXdCO0FBQ3hCQyxXQUFTO0FBQ1RULGlCQUFlLENBQUNDLGNBQWhCLEdBQWlDLFNBQWpDO0FBQ0FTLHdFQUFVO0FBQ1g7O0FBRUQsU0FBU0osV0FBVCxHQUF1QjtBQUNyQkcsV0FBUztBQUNURCwwQkFBd0I7QUFDeEJSLGlCQUFlLENBQUNDLGNBQWhCLEdBQWlDLFlBQWpDO0FBQ0EsTUFBTVUsTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQUQsUUFBTSxDQUFDRSxZQUFQO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUMsSUFBSUMsdURBQUosQ0FBV0osTUFBTSxDQUFDSyxHQUFsQixFQUF1QkwsTUFBTSxDQUFDTSxNQUE5QixFQUFzQ04sTUFBTSxDQUFDTyxTQUE3QyxDQUFELENBQWhCO0FBRUEsTUFBSUMsU0FBUyxHQUFHLElBQWhCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJULFVBQU0sQ0FBQ1UsV0FBUDtBQUNBLFFBQUlGLFNBQUosRUFBZUwsT0FBTyxDQUFDUSxPQUFSLENBQWdCLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNDLFlBQUgsQ0FBZ0JiLE1BQU0sQ0FBQ08sU0FBdkIsQ0FBUjtBQUFBLEtBQWhCO0FBQ2ZKLFdBQU8sQ0FBQ1EsT0FBUixDQUFnQixVQUFDQyxFQUFEO0FBQUEsYUFBUUEsRUFBRSxDQUFDRSxVQUFILEVBQVI7QUFBQSxLQUFoQjtBQUNBQyxVQUFNLENBQUNDLHFCQUFQLENBQTZCUCxTQUE3QjtBQUNBTixXQUFPLENBQUNRLE9BQVIsQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFRO0FBQ3RCLFVBQUlBLEVBQUUsQ0FBQ04sTUFBSCxDQUFVLENBQVYsSUFBZU0sRUFBRSxDQUFDTixNQUFILENBQVUsQ0FBVixDQUFmLEdBQThCUyxNQUFNLENBQUNFLFVBQXpDLEVBQ0VMLEVBQUUsQ0FBQ00sZ0JBQUg7QUFDRixVQUFJTixFQUFFLENBQUNOLE1BQUgsQ0FBVSxDQUFWLElBQWUsQ0FBbkIsRUFBc0JNLEVBQUUsQ0FBQ00sZ0JBQUg7QUFDdkIsS0FKRDtBQUtELEdBVkQ7O0FBWUFILFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJQLFNBQTdCO0FBRUFNLFFBQU0sQ0FBQ3JCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DeUIsYUFBbkM7QUFDQTlCLGlCQUFlLENBQUNFLHFCQUFoQixDQUFzQzZCLElBQXRDLENBQTJDLENBQ3pDLFFBRHlDLEVBRXpDLFNBRnlDLEVBR3pDRCxhQUh5QyxDQUEzQztBQU1BSixRQUFNLENBQUNyQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQzJCLGVBQXJDO0FBQ0FoQyxpQkFBZSxDQUFDRSxxQkFBaEIsQ0FBc0M2QixJQUF0QyxDQUEyQyxDQUN6QyxRQUR5QyxFQUV6QyxXQUZ5QyxFQUd6Q0MsZUFIeUMsQ0FBM0M7O0FBTUEsV0FBU0YsYUFBVCxDQUF1QkcsS0FBdkIsRUFBOEI7QUFDNUIsUUFBSUEsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3RCRCxXQUFLLENBQUNFLGNBQU47QUFDQXJCLGFBQU8sQ0FBQ1EsT0FBUixDQUFnQixVQUFDQyxFQUFEO0FBQUEsZUFBUUEsRUFBRSxDQUFDTSxnQkFBSCxFQUFSO0FBQUEsT0FBaEI7QUFDQWxCLFlBQU0sQ0FBQ3lCLFFBQVAsWUFBb0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsUUFBM0IsRUFBcUNDLFFBQXJDLENBQThDLEVBQTlDLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTUixlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QkEsU0FBSyxDQUFDRSxjQUFOO0FBQ0FyQixXQUFPLENBQUNpQixJQUFSLENBQ0UsSUFBSWhCLHVEQUFKLENBQ0VKLE1BQU0sQ0FBQ0ssR0FEVCxFQUVFTCxNQUFNLENBQUNNLE1BQVAsQ0FBY3dCLEdBQWQsQ0FBa0IsVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsR0FBRyxFQUFiO0FBQUEsS0FBbEIsQ0FGRixFQUdFL0IsTUFBTSxDQUFDTyxTQUhULENBREYsRUFGOEIsQ0FTOUI7QUFDRDtBQUNGOztBQUVELFNBQVNWLHdCQUFULEdBQW9DO0FBQ2xDLFNBQU9SLGVBQWUsQ0FBQ0UscUJBQWhCLENBQXNDeUMsTUFBN0MsRUFBcUQ7QUFBQSxnQ0FLL0MzQyxlQUFlLENBQUNFLHFCQUFoQixDQUFzQzBDLEdBQXRDLEVBTCtDO0FBQUE7QUFBQSxRQUVqREMsUUFGaUQ7QUFBQSxRQUdqRFosS0FIaUQ7QUFBQSxRQUlqRGEsT0FKaUQ7O0FBTW5ELFFBQUlELFFBQVEsS0FBSyxRQUFqQixFQUEyQjtBQUN6Qm5CLFlBQU0sQ0FBQ3FCLG1CQUFQLENBQTJCZCxLQUEzQixFQUFrQ2EsT0FBbEM7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFDRCxLQUhELE1BR087QUFDTDNDLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1QnlDLFFBQXZCLEVBQWlDRSxtQkFBakMsQ0FBcURkLEtBQXJELEVBQTREYSxPQUE1RDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTckMsU0FBVCxHQUFxQjtBQUNuQixNQUFJVCxlQUFlLENBQUNDLGNBQWhCLEtBQW1DLFlBQXZDLEVBQ0VFLFFBQVEsQ0FBQytDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmhELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUExQjs7QUFDRixNQUFJSixlQUFlLENBQUNDLGNBQWhCLEtBQW1DLFNBQXZDLEVBQWtEO0FBQ2hELHVCQUFJRSxRQUFRLENBQUNpRCxnQkFBVCxDQUEwQixPQUExQixDQUFKLEVBQXdDOUIsT0FBeEMsQ0FBZ0QsVUFBQytCLElBQUQ7QUFBQSxhQUM5Q2xELFFBQVEsQ0FBQytDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkUsSUFBMUIsQ0FEOEM7QUFBQSxLQUFoRDtBQUdEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDdkdEO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTTNDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDOUIsTUFBTTRDLE9BQU8sR0FBRztBQUNkQyxRQUFJLEVBQUUsSUFEUTtBQUVkQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFO0FBREY7QUFGUSxHQUFoQjtBQU9BLE1BQU1DLFFBQVEsR0FBRyxDQUFBSixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDRCQUFBQSxPQUFPLENBQUVFLElBQVQsOERBQWVDLElBQWYsS0FBdUJILE9BQU8sQ0FBQ0MsSUFBaEQ7QUFDQXBELFVBQVEsQ0FBQytDLElBQVQsQ0FBY1MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsUUFBNUI7QUFDQSxNQUFNQyxJQUFJLEdBQUcxRCxRQUFRLENBQUMyRCxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUQsTUFBSSxDQUFDRixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsTUFBbkIsRUFBMkIsUUFBM0I7QUFDQUMsTUFBSSxDQUFDRSxTQUFMLGlCQUF3QkwsUUFBeEI7QUFDQXZELFVBQVEsQ0FBQytDLElBQVQsQ0FBY2MsTUFBZCxDQUFxQkgsSUFBckI7QUFDQSxNQUFNSSxPQUFPLEdBQUc5RCxRQUFRLENBQUMyRCxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FHLFNBQU8sQ0FBQ04sU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEIsRUFBOEIsUUFBOUIsRUFBd0MsWUFBeEM7QUFDQXpELFVBQVEsQ0FBQytDLElBQVQsQ0FBY2dCLFdBQWQsQ0FBMEJELE9BQTFCO0FBQ0EsTUFBTUUsVUFBVSxHQUFHaEUsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBSyxZQUFVLENBQUNDLEdBQVgsR0FBaUJDLGNBQWMsQ0FBQ0MsK0RBQUQsQ0FBL0I7QUFDQUgsWUFBVSxDQUFDUixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixNQUF6QixFQUFpQyxRQUFqQztBQUNBTyxZQUFVLENBQUNJLEtBQVgsQ0FBaUJDLFNBQWpCLEdBQTZCLE9BQTdCO0FBQ0FMLFlBQVUsQ0FBQ0ksS0FBWCxDQUFpQkUsTUFBakIsR0FBMEIsZ0JBQTFCO0FBQ0F0RSxVQUFRLENBQUMrQyxJQUFULENBQWNnQixXQUFkLENBQTBCQyxVQUExQjtBQUNBLE1BQU1PLFVBQVUsR0FBR3ZFLFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQVksWUFBVSxDQUFDZixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixNQUF6QixFQUFpQyxRQUFqQyxFQUEyQyxPQUEzQztBQUNBLE1BQU1lLE9BQU8sR0FBR3hFLFFBQVEsQ0FBQzJELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBaEI7QUFDQSxNQUFNYyxZQUFZLEdBQUd6RSxRQUFRLENBQUMyRCxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FjLGNBQVksQ0FBQ0MsU0FBYixHQUF5QixVQUF6QjtBQUNBSCxZQUFVLENBQUNWLE1BQVgsQ0FBa0JZLFlBQWxCLEVBQWdDRCxPQUFoQztBQUNBeEUsVUFBUSxDQUFDK0MsSUFBVCxDQUFjYyxNQUFkLENBQXFCVSxVQUFyQjs7QUFDQUUsY0FBWSxDQUFDRSxPQUFiLEdBQXVCLFVBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDNUMsY0FBRjtBQUNBd0MsV0FBTyxDQUFDWixTQUFSLEdBQW9CaUIsZUFBZSxFQUFuQztBQUNELEdBSEQ7QUFJRCxDQWxDTSxDLENBb0NQOztBQUVBLFNBQVNYLGNBQVQsQ0FBd0JZLE1BQXhCLEVBQWdDO0FBQzlCLDBCQUFpQkEsTUFBakI7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMURNckUsYTtBQUNKLHlCQUFZc0UsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLakUsTUFBTCxHQUFjLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULEVBQWMsR0FBZCxDQUFkO0FBQ0EsU0FBS2tFLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLakUsU0FBTDtBQUNBLFNBQUtQLE1BQUwsR0FBY1IsUUFBUSxDQUFDMkQsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS25ELE1BQUwsQ0FBWXlFLEtBQVosR0FBb0IxRCxNQUFNLENBQUNFLFVBQVAsR0FBb0IsSUFBeEM7QUFDQSxTQUFLakIsTUFBTCxDQUFZMEUsTUFBWixHQUFxQixLQUFLMUUsTUFBTCxDQUFZeUUsS0FBWixHQUFvQixDQUF6QztBQUNBLFNBQUtwRSxHQUFMLEdBQVcsS0FBS0wsTUFBTCxDQUFZMkUsVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0Q7Ozs7bUNBQ2M7QUFDYm5GLGNBQVEsQ0FBQytDLElBQVQsQ0FBY2MsTUFBZCxDQUFxQixLQUFLckQsTUFBMUI7QUFDRCxLLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7a0NBQ2M7QUFDWixXQUFLSyxHQUFMLENBQVN1RSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUs1RSxNQUFMLENBQVl5RSxLQUFyQyxFQUE0QyxLQUFLekUsTUFBTCxDQUFZMEUsTUFBeEQ7QUFDRDs7OzZCQUNRRyxLLEVBQU87QUFDZCxXQUFLdEUsU0FBTCxHQUFpQnNFLEtBQWpCO0FBQ0FyRixjQUFRLENBQUMrQyxJQUFULENBQWNxQixLQUFkLENBQW9Ca0IsZUFBcEIsR0FBc0NELEtBQXRDO0FBQ0FyRixjQUFRLENBQUMrQyxJQUFULENBQWNxQixLQUFkLENBQW9CRSxNQUFwQjtBQUNEOzs7Ozs7QUFHWTdELDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Q01HLE07QUFDSixrQkFBWUMsR0FBWixFQUFpQkMsTUFBakIsRUFBMEM7QUFBQSxRQUFqQnVFLEtBQWlCLHVFQUFULE9BQVM7O0FBQUE7O0FBQ3hDLFNBQUt4RSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLdUUsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0wsWUFBTCxHQUFvQixDQUFwQjtBQUNEOzs7O2lDQUVZO0FBQUE7O0FBQ1gsV0FBS25FLEdBQUwsQ0FBUzBFLFNBQVQsR0FBcUIsS0FBS0YsS0FBMUI7O0FBQ0Esd0JBQUt4RSxHQUFMLEVBQVMyRSxRQUFULHFDQUFxQixLQUFLMUUsTUFBMUI7QUFDRDs7O2lDQUNZdUUsSyxFQUFPO0FBQUE7O0FBQ2xCLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUt2RSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZd0IsR0FBWixDQUFnQixVQUFDbUQsS0FBRDtBQUFBLGVBQVlBLEtBQUssSUFBSSxJQUFJLEtBQUksQ0FBQ1QsWUFBOUI7QUFBQSxPQUFoQixDQUFkO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS0EsWUFBTCxJQUFxQixDQUFDLENBQXRCO0FBQ0Q7Ozs7OztBQUdZcEUscUVBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy95b2RhLXN0aXRjaC5qcGdcIjtcclxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcclxuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xyXG5pbXBvcnQgeyBET01FeGFtcGxlIH0gZnJvbSBcIi4vc2NyaXB0cy9ET01FeGFtcGxlXCI7XHJcbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcclxuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcclxuICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxyXG59O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXMtZGVtb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRDYW52YXMpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0RPTS1kZW1vXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydERPTSk7XHJcblxyXG5mdW5jdGlvbiBzdGFydERPTSgpIHtcclxuICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICBjbGVhckRlbW8oKTtcclxuICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkRPTURFTU9cIjtcclxuICBET01FeGFtcGxlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xyXG4gIGNsZWFyRGVtbygpO1xyXG4gIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xyXG4gIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xyXG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XHJcbiAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xyXG4gIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XHJcblxyXG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcclxuICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XHJcbiAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xyXG4gICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXHJcbiAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xyXG4gICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcclxuICAgIFwid2luZG93XCIsXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGhhbmRsZUtleURvd24sXHJcbiAgXSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XHJcbiAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcclxuICAgIFwid2luZG93XCIsXHJcbiAgICBcIm1vdXNlZG93blwiLFxyXG4gICAgaGFuZGxlTW91c2VEb3duLFxyXG4gIF0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XHJcbiAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNxdWFyZXMucHVzaChcclxuICAgICAgbmV3IFNxdWFyZShcclxuICAgICAgICBjYW52YXMuY3R4LFxyXG4gICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXHJcbiAgICAgICAgY2FudmFzLmZpbGxDb2xvclxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcclxuICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcclxuICAgIGxldCBbXHJcbiAgICAgIHNlbGVjdG9yLFxyXG4gICAgICBldmVudCxcclxuICAgICAgaGFuZGxlcixcclxuICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xyXG4gICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcclxuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XHJcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcclxuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzdGl0Y2hBbmRZb2RhIGZyb20gXCIuLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NRXhhbXBsZSA9ICgpID0+IHtcclxuICBjb25zdCB0ZXN0T2JqID0ge1xyXG4gICAga2V5MTogXCJoaVwiLFxyXG4gICAga2V5Mjoge1xyXG4gICAgICBrZXkzOiBcIkhlbGxvXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdyZWV0aW5nID0gdGVzdE9iaj8ua2V5Mj8ua2V5MyB8fCB0ZXN0T2JqLmtleTE7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiY2VudGVyXCIpO1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIik7XHJcbiAgY2FyZC5pbm5lckhUTUwgPSBgPGgyPiR7Z3JlZXRpbmd9IFdvcmxkITwvaDI+YDtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjYXJkKTtcclxuICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbWdDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIsIFwiY2VudGVyXCIsIFwiaW1hZ2UtY2FyZFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0NhcmQpO1xyXG4gIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGltZ0VsZW1lbnQuc3JjID0gYnVpbGRBc3NldFBhdGgoc3RpdGNoQW5kWW9kYSk7XHJcbiAgaW1nRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNlbnRlclwiKTtcclxuICBpbWdFbGVtZW50LnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcclxuICBpbWdFbGVtZW50LnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDgwJSlcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpO1xyXG4gIGNvbnN0IHJhbmRvbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJhbmRvbUNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJjZW50ZXJcIiwgXCJyYW5kb1wiKTtcclxuICBjb25zdCB3aW5uZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgcmFuZG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ0blwiKTtcclxuICByYW5kb21CdXR0b24uaW5uZXJUZXh0ID0gXCJQaWNrIE1lIVwiO1xyXG4gIHJhbmRvbUNhcmQuYXBwZW5kKHJhbmRvbUJ1dHRvbiwgd2lubmVyUCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocmFuZG9tQ2FyZCk7XHJcbiAgcmFuZG9tQnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2lubmVyUC5pbm5lckhUTUwgPSByYW5kb21Kb2JTZWVrZXIoKTtcclxuICB9O1xyXG59O1xyXG5cclxuLy8gdG8gcmVzb2x2ZSBwYXRoIGlzc3VlcyBmb3IgaW1hZ2VzIGluIEpTXHJcblxyXG5mdW5jdGlvbiBidWlsZEFzc2V0UGF0aChpbWdTcmMpIHtcclxuICByZXR1cm4gYC4vZGlzdC8ke2ltZ1NyY31gO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiByYW5kb21Kb2JTZWVrZXIoKSB7XHJcbi8vIGNvbnN0IGpvYlNlZWtlcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFxyXG4vLyAgIHJlcXVpcmUoJy4uLy4uL3NlY3JldCcpLkpPQlNFRUtFUlMgOiBcclxuLy8gICBbXHJcbi8vICAgICBcIkFydGh1ciBEZW50XCIsXHJcbi8vICAgICBcIkZvcmQgUHJlZmVjdFwiLFxyXG4vLyAgICAgXCJaYXBob2QgQmVlYmxlYnJveFwiLFxyXG4vLyAgICAgXCJNYXJ2aW4gdGhlIFBhcmFub2lkIEFuZHJvaWRcIixcclxuLy8gICAgIFwiVHJpbGxpYW5cIixcclxuLy8gICAgIFwiU2xhcnRpYmFydGZhc3RcIixcclxuLy8gICBdO1xyXG5cclxuLy8gICBjb25zdCB3aW5uZXIgPSBqb2JTZWVrZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGpvYlNlZWtlcnMubGVuZ3RoKV07XHJcbi8vICAgcmV0dXJuIHdpbm5lcjtcclxuLy8gfVxyXG5cclxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMuY29vcmRzID0gWzEwLCAxMCwgMTUwLCAxMDBdO1xyXG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xyXG4gICAgdGhpcy5maWxsQ29sb3IgPSBgZ3JlZW5gO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNzU7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICB9XHJcbiAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xyXG4gIH1cclxuICAvLyBkcmF3U3F1YXJlKCkge1xyXG4gIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XHJcbiAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XHJcbiAgLy8gfVxyXG4gIC8vIHVwZGF0ZVNxdWFyZSgpIHtcclxuICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY2xlYXJTcXVhcmUoKSB7XHJcbiAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xyXG4gIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XHJcbiAgLy8gfVxyXG4gIGNsZWFyQ2FudmFzKCkge1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuICBzZXRDb2xvcihjb2xvcikge1xyXG4gICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7XHJcbiIsImNsYXNzIFNxdWFyZSB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xyXG4gIH1cclxuXHJcbiAgZHJhd1NxdWFyZSgpIHtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XHJcbiAgfVxyXG4gIHVwZGF0ZVNxdWFyZShjb2xvcikge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XHJcbiAgfVxyXG5cclxuICByZXZlcnNlQW5pbWF0aW9uKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=