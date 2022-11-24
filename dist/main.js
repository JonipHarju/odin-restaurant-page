/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad */ \"./src/initialPageLoad.js\");\n/* harmony import */ var _modules_frontpage_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/frontpage/header */ \"./src/modules/frontpage/header.js\");\n\n// event listener that loads the foodmenu\n\n\n\n\naddEventListener(\"load\", (e) => {\n  (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\n  (0,_modules_frontpage_header__WEBPACK_IMPORTED_MODULE_1__.openMenu)();\n  (0,_modules_frontpage_header__WEBPACK_IMPORTED_MODULE_1__.openFrontPage)();\n  (0,_modules_frontpage_header__WEBPACK_IMPORTED_MODULE_1__.openContacts)();\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialPageLoad\": () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _modules_frontpage_midSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/frontpage/midSection */ \"./src/modules/frontpage/midSection.js\");\n/* harmony import */ var _modules_frontpage_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/frontpage/header */ \"./src/modules/frontpage/header.js\");\n\n\n\nfunction initialPageLoad() {\n  (0,_modules_frontpage_header__WEBPACK_IMPORTED_MODULE_1__.header)();\n  (0,_modules_frontpage_midSection__WEBPACK_IMPORTED_MODULE_0__.midSection)();\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/initialPageLoad.js?");

/***/ }),

/***/ "./src/modules/clear/clear.js":
/*!************************************!*\
  !*** ./src/modules/clear/clear.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\nfunction clear(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modules/clear/clear.js?");

/***/ }),

/***/ "./src/modules/contacts/contacts.js":
/*!******************************************!*\
  !*** ./src/modules/contacts/contacts.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contacts\": () => (/* binding */ contacts)\n/* harmony export */ });\nfunction contacts() {\n  const content = document.querySelector(\"#content\");\n\n  const midSection = document.createElement(\"div\");\n  midSection.setAttribute(\"id\", \"midSection\");\n  content.appendChild(midSection);\n\n  const infoContainer = document.createElement(\"div\");\n  infoContainer.setAttribute(\"id\", \"infoContainer\");\n  midSection.appendChild(infoContainer);\n\n  const infoSectionHeader = document.createElement(\"h2\");\n  infoSectionHeader.setAttribute(\"id\", \"infoSectionHeader\");\n  infoSectionHeader.innerHTML = \"Contact us if you are hungry!\";\n  infoContainer.appendChild(infoSectionHeader);\n\n  const infoSectionHeader2 = document.createElement(\"h3\");\n  infoSectionHeader2.setAttribute(\"id\", \"infoSectionHeader2\");\n  infoSectionHeader2.innerHTML = \"..Or in case of business inquiries....\";\n  infoContainer.appendChild(infoSectionHeader2);\n\n  const infoSectionHeader3 = document.createElement(\"h4\");\n  infoSectionHeader3.setAttribute(\"id\", \"infoSectionHeader3\");\n  infoSectionHeader3.innerHTML =\n    \"Orders Pho: 04040249134 <br> Business inquiries: gonutz@gmail.com\";\n  infoContainer.appendChild(infoSectionHeader3);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modules/contacts/contacts.js?");

/***/ }),

/***/ "./src/modules/frontpage/header.js":
/*!*****************************************!*\
  !*** ./src/modules/frontpage/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"openContacts\": () => (/* binding */ openContacts),\n/* harmony export */   \"openFrontPage\": () => (/* binding */ openFrontPage),\n/* harmony export */   \"openMenu\": () => (/* binding */ openMenu)\n/* harmony export */ });\n/* harmony import */ var _clear_clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clear/clear */ \"./src/modules/clear/clear.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu */ \"./src/modules/menu/menu.js\");\n/* harmony import */ var _contacts_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts/contacts */ \"./src/modules/contacts/contacts.js\");\n/* harmony import */ var _midSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./midSection */ \"./src/modules/frontpage/midSection.js\");\nconst content = document.querySelector(\"#content\");\n\nfunction header() {\n  // create the header wrapper :)\n  const header = document.createElement(\"div\");\n  header.setAttribute(\"id\", \"header\");\n  content.appendChild(header);\n\n  // create the navbar\n  const navbar = document.createElement(\"nav\");\n  navbar.setAttribute(\"id\", \"navbar\");\n  header.appendChild(navbar);\n\n  // create  the headline\n  const headline = document.createElement(\"h1\");\n  headline.setAttribute(\"id\", \"headline\");\n  headline.innerHTML = \"GONUTZ!\";\n  navbar.appendChild(headline);\n\n  // creates the list for the navbar\n  const navbarList = document.createElement(\"ul\");\n  navbarList.setAttribute(\"id\", \"navbarList\");\n  navbar.appendChild(navbarList);\n\n  // create array of the content we inside the menu list.  loop trough the array and input the array contents into the inner.html of the created element\n  const listItemArray = [\"MENU\", \"CATERING\", \"LOCATIONS\", \"JOBS\", \"CONTACT US\"];\n  for (let i = 0; i < listItemArray.length; i += 1) {\n    const listItem = document.createElement(\"li\");\n    listItem.className = \"listItem\";\n    listItem.id = listItemArray[i];\n    listItem.innerHTML = listItemArray[i];\n    navbarList.appendChild(listItem);\n  }\n}\n\n//navbar event listeners below\n\n\n// import menu dom changes from the menu.js\n\n// add eventListener to a navbar lists menu item to change the contents of the content div\n\n\n\nfunction openMenu() {\n  document.getElementById(\"MENU\").addEventListener(\"click\", () => {\n    (0,_clear_clear__WEBPACK_IMPORTED_MODULE_0__.clear)(content);\n    header();\n    (0,_menu_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n    openFrontPage();\n    openContacts();\n    console.log(\"kukkamies\");\n  });\n}\n\nfunction openFrontPage() {\n  document.getElementById(\"headline\").addEventListener(\"click\", (e) => {\n    console.log(\"kukkatäti\");\n    (0,_clear_clear__WEBPACK_IMPORTED_MODULE_0__.clear)(content);\n    header();\n    (0,_midSection__WEBPACK_IMPORTED_MODULE_3__.midSection)();\n    openMenu();\n    openContacts();\n  });\n}\n\nfunction openContacts() {\n  document.getElementById(\"CONTACT US\").addEventListener(\"click\", (e) => {\n    console.log(\"kukkapoika\");\n    (0,_clear_clear__WEBPACK_IMPORTED_MODULE_0__.clear)(content);\n    header();\n    (0,_contacts_contacts__WEBPACK_IMPORTED_MODULE_2__.contacts)();\n    openMenu();\n    openFrontPage();\n  });\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modules/frontpage/header.js?");

/***/ }),

/***/ "./src/modules/frontpage/midSection.js":
/*!*********************************************!*\
  !*** ./src/modules/frontpage/midSection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"midSection\": () => (/* binding */ midSection)\n/* harmony export */ });\nfunction midSection() {\n  const content = document.querySelector(\"#content\");\n\n  // created midsection div under the content div\n  const midSection = document.createElement(\"div\");\n  midSection.setAttribute(\"id\", \"midSection\");\n  content.appendChild(midSection);\n\n  //created infoContainer div inside midSection\n  const infoContainer = document.createElement(\"div\");\n  infoContainer.setAttribute(\"id\", \"infoContainer\");\n  midSection.appendChild(infoContainer);\n\n  // created infoSectionHeader inside infoContainer\n  const infoSectionHeader = document.createElement(\"h2\");\n  infoSectionHeader.setAttribute(\"id\", \"infoSectionHeader\");\n  infoSectionHeader.innerHTML =\n    \"Best damn GONUTZ in the Galaxy!!! <br> - Barack Obama...\";\n  infoContainer.appendChild(infoSectionHeader);\n\n  // created infoSectionHeader2 inside infoContainer\n  const infoSectionHeader2 = document.createElement(\"h3\");\n  infoSectionHeader2.setAttribute(\"id\", \"infoSectionHeader2\");\n  infoSectionHeader2.innerHTML = \"Probably..?\";\n  infoContainer.appendChild(infoSectionHeader2);\n\n  // created infoSectionHeader3 inside infoContainer\n  const infoSectionHeader3 = document.createElement(\"h4\");\n  infoSectionHeader3.setAttribute(\"id\", \"infoSectionHeader3\");\n  infoSectionHeader3.innerHTML = \"..If he tasted them... :(\";\n  infoContainer.appendChild(infoSectionHeader3);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modules/frontpage/midSection.js?");

/***/ }),

/***/ "./src/modules/menu/menu.js":
/*!**********************************!*\
  !*** ./src/modules/menu/menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  console.log(\"heihie\");\n  const content = document.querySelector(\"#content\");\n\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.setAttribute(\"id\", \"menuContainer\");\n  content.appendChild(menuContainer);\n\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"id\", \"foodMenu\");\n  menuContainer.appendChild(menu);\n\n  const menuItemArray = [\"menuItem1\", \"menuItem2\", \"menuItem3\"];\n  for (let i = 0; i < menuItemArray.length; i += 1) {\n    const listItem = document.createElement(\"div\");\n    listItem.className = \"menuItem\";\n    listItem.id = menuItemArray[i];\n\n    const listItemInfoContainer = document.createElement(\"div\");\n    listItemInfoContainer.className = \"listItemInfoContainer\";\n\n    if (i === 0) {\n      listItemInfoContainer.innerHTML = \"Blue BOOM!!!! <br>3€\";\n    }\n    if (i === 1) {\n      listItemInfoContainer.innerHTML = \"Wite Chocolate Gonut!! <br> 3€\";\n    }\n\n    if (i === 2) {\n      listItemInfoContainer.innerHTML = \"PPG!!! (Pink Power GOnut!)<br> 3€\";\n    }\n\n    menu.appendChild(listItem);\n    listItem.appendChild(listItemInfoContainer);\n  }\n  const menuSectionHeader = document.createElement(\"h2\");\n  menuSectionHeader.setAttribute(\"id\", \"menuSectionHeader\");\n  menuSectionHeader.innerHTML = \"'Epic Menu!!'<br> - Dalai Lama\";\n  menuContainer.appendChild(menuSectionHeader);\n}\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modules/menu/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;