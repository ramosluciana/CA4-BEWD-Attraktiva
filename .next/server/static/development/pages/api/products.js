module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);

 // package to be used to generate unique ID

const {
  String,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types; //Modelling product data

const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  //including multiple properties/conditions
  name: {
    type: String,
    required: true //Make sure product name is provided in order to add a new one

  },
  price: {
    type: Number,
    required: true //Make sure price is provided

  },
  sku: {
    type: String,
    unique: true,
    //Value has to be unique, no other produc can receive the same value
    default: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate() //Use to generate ID

  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
}); //check if models exists. If it exists then we will use it otherwise we want to create it

/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Product", ProductSchema));

/***/ }),

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Product */ "./models/Product.js");
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ "./utils/connectDb.js");
// import products from "../../static/products.json";


Object(_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__["default"])(); //Creating a route, passing request and response objects as parameters

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  //get product collections
  const products = await _models_Product__WEBPACK_IMPORTED_MODULE_0__["default"].find();
  res.status(200).json(products);
});

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

{
  /* Make a connection between the app and data*/
}
const connection = {}; //Check connection to database, if it is already connect or we need to connect for the first time.

async function connectDb() {
  //check if we are connected
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing connection");
    return;
  } // Use new database connection


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://ca4user1:1Re$u4ac@ca4-lyweg.mongodb.net/static?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

/* harmony default export */ __webpack_exports__["default"] = (connectDb);

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/api/products.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/CA4-BEWD-Attraktiva/pages/api/products.js */"./pages/api/products.js");


/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Nvbm5lY3REYi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJTdHJpbmciLCJOdW1iZXIiLCJtb25nb29zZSIsIlNjaGVtYSIsIlR5cGVzIiwiUHJvZHVjdFNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJwcmljZSIsInNrdSIsInVuaXF1ZSIsImRlZmF1bHQiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJkZXNjcmlwdGlvbiIsIm1lZGlhVXJsIiwibW9kZWxzIiwiUHJvZHVjdCIsIm1vZGVsIiwiY29ubmVjdERiIiwicmVxIiwicmVzIiwicHJvZHVjdHMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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L2FwaS9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7IC8vIHBhY2thZ2UgdG8gYmUgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURcblxuY29uc3QgeyBTdHJpbmcsIE51bWJlciB9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzO1xuXG4vL01vZGVsbGluZyBwcm9kdWN0IGRhdGFcbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgLy9pbmNsdWRpbmcgbXVsdGlwbGUgcHJvcGVydGllcy9jb25kaXRpb25zXG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUgLy9NYWtlIHN1cmUgcHJvZHVjdCBuYW1lIGlzIHByb3ZpZGVkIGluIG9yZGVyIHRvIGFkZCBhIG5ldyBvbmVcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUgLy9NYWtlIHN1cmUgcHJpY2UgaXMgcHJvdmlkZWRcbiAgfSxcbiAgc2t1OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHVuaXF1ZTogdHJ1ZSwgLy9WYWx1ZSBoYXMgdG8gYmUgdW5pcXVlLCBubyBvdGhlciBwcm9kdWMgY2FuIHJlY2VpdmUgdGhlIHNhbWUgdmFsdWVcbiAgICBkZWZhdWx0OiBzaG9ydGlkLmdlbmVyYXRlKCkgLy9Vc2UgdG8gZ2VuZXJhdGUgSURcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgbWVkaWFVcmw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfVxufSk7XG5cbi8vY2hlY2sgaWYgbW9kZWxzIGV4aXN0cy4gSWYgaXQgZXhpc3RzIHRoZW4gd2Ugd2lsbCB1c2UgaXQgb3RoZXJ3aXNlIHdlIHdhbnQgdG8gY3JlYXRlIGl0XG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fFxuICBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgUHJvZHVjdFNjaGVtYSk7XG4iLCIvLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL3N0YXRpYy9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RcIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uL3V0aWxzL2Nvbm5lY3REYlwiO1xuXG5jb25uZWN0RGIoKTtcblxuLy9DcmVhdGluZyBhIHJvdXRlLCBwYXNzaW5nIHJlcXVlc3QgYW5kIHJlc3BvbnNlIG9iamVjdHMgYXMgcGFyYW1ldGVyc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vZ2V0IHByb2R1Y3QgY29sbGVjdGlvbnNcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xufTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuey8qIE1ha2UgYSBjb25uZWN0aW9uIGJldHdlZW4gdGhlIGFwcCBhbmQgZGF0YSovfVxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xuXG4vL0NoZWNrIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2UsIGlmIGl0IGlzIGFscmVhZHkgY29ubmVjdCBvciB3ZSBuZWVkIHRvIGNvbm5lY3QgZm9yIHRoZSBmaXJzdCB0aW1lLlxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERiKCkge1xuICAvL2NoZWNrIGlmIHdlIGFyZSBjb25uZWN0ZWRcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICAvLyBVc2UgZXhpc3RpbmcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgY29ubmVjdGlvblwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIC8vIFVzZSBuZXcgZGF0YWJhc2UgY29ubmVjdGlvblxuICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fU1JWLCB7XG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICB9KTtcbiAgY29uc29sZS5sb2coXCJEQiBDb25uZWN0ZWRcIik7XG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=