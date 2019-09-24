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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/block/index.js":
/*!***********************************!*\
  !*** ./src/blocks/block/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$editor = wp.editor,
    PlainText = _wp$editor.PlainText,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var registerBlockType = wp.blocks.registerBlockType;
var PanelBody = wp.components.PanelBody; // Define custom U Group logo for icon usage

var uGroupIcon = function uGroupIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20px",
    height: "20px",
    viewBox: "0 0 143.7 143.7"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M0,0V143.7H143.7V0ZM71.8,108.3a34,34,0,0,1-34-34v-33H55.7v33a16,16,0,0,0,32,0v-33h17.9v33h.2A34,34,0,0,1,71.8,108.3Z"
  }));
};

registerBlockType('project-block/main', {
  title: 'Project',
  icon: uGroupIcon,
  category: 'common',
  attributes: {
    title: {
      source: 'text',
      selector: '.projectTitle'
    },
    projectBackgroundColor: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    function onChangeBackgroundColor(newBackground) {
      setAttributes({
        projectBackgroundColor: newBackground
      });
    } // Define custom colors. Great oppertunity for branding.


    var customColors = [{
      name: 'Green',
      slug: 'green',
      color: '#0dc966'
    }, {
      name: 'Dark',
      slug: 'dark',
      color: '#383838'
    }, {
      name: 'Gray',
      slug: 'gray',
      color: '#aaa'
    }, {
      name: 'Light Gray',
      slug: 'light-gray',
      color: '#cdcdcd'
    }, {
      name: 'White',
      slug: 'white',
      color: '#ffffff'
    }]; // Check if the background color is dark. If it is, we will assign a class to lighten the text

    var hasDarkBackground = attributes.projectBackgroundColor === '#383838' ? 'lightenText' : '';
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Settings',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: 'Block Background Color',
      colorValue: attributes.projectBackgroundColor,
      initialOpen: false,
      colorSettings: [{
        value: attributes.projectBackgroundColor,
        onChange: onChangeBackgroundColor,
        label: 'Choose a background color',
        colors: customColors
      }]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "projectWrap",
      style: {
        backgroundColor: attributes.projectBackgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          title: content
        });
      },
      value: attributes.title,
      placeholder: "Project title",
      className: "heading ".concat(hasDarkBackground),
      style: {
        backgroundColor: attributes.projectBackgroundColor
      }
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    // Check if the background color is dark. If it is, we will assign a class to lighten the text
    var hasDarkBackground = attributes.projectBackgroundColor === '#383838' ? 'lightenText' : '';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "projectItem ".concat(hasDarkBackground) // If the post does not have a dark background we will assign the color of the text to #383838.
      ,
      style: !hasDarkBackground ? {
        color: '#383838',
        backgroundColor: attributes.projectBackgroundColor
      } : {
        backgroundColor: attributes.projectBackgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "projectContent"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "projectTitle ".concat(hasDarkBackground)
    }, attributes.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "projectDescription"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Project Description will go here"))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/block */ "./src/blocks/block/index.js");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map