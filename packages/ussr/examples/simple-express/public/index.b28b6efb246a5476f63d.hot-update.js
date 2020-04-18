/*!
 * banner:
 * example-react-app: 1.0.0
 */
webpackHotUpdate("index",{

/***/ "../../src/hooks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUssrEffect", function() { return useUssrEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../../node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../../node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../../node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../src/utils.ts");
/* harmony import */ var _Ussr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../src/Ussr.tsx");






const useUssrEffect = (path, defaultValue) => {
  const initHook = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    initState,
    addEffect,
    skipEffectsOnClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Ussr__WEBPACK_IMPORTED_MODULE_5__["UssrContext"]);
  const isClient = !Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isBackend"])();
  const immediatelyRunOnTheClient = skipEffectsOnClient;
  const setOnTheClientAfterBackendRender = isClient && !skipEffectsOnClient && initHook.current;

  if (setOnTheClientAfterBackendRender) {
    if (lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(initState, path)) {
      console.warn(`${path} is already exist in InitialState`);
    }
  }

  const _state = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(initState, path, defaultValue);

  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_state);

  const _setState = (s, skip) => {
    lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(initState, path, s);

    if (!skip) {
      setState(s);
    }
  };

  return [state, _setState, cb => {
    initHook.current = false;

    if (immediatelyRunOnTheClient) {
      return false;
    }

    if (isClient && initHook.current && typeof cb === 'function') {
      cb();
    }

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isBackend"])() && typeof cb === 'function') {
      const effect = cb();
      const isEffect = typeof effect.then === 'function';

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isBackend"])() && isEffect) {
        addEffect(effect);
      }
    }
  }];
};

/***/ }),

/***/ "../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ussr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../src/Ussr.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../src/hooks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUssrEffect", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__["useUssrEffect"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Ussr__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

})
//# sourceMappingURL=index.b28b6efb246a5476f63d.hot-update.js.map