exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 255:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 7793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wq": () => (/* binding */ saveStateToLocalStorage),
/* harmony export */   "dJ": () => (/* binding */ loadStateFromLocalStorage),
/* harmony export */   "pK": () => (/* binding */ getHasUsedAppBefore)
/* harmony export */ });
// Reference: https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67
const LOCAL_STORAGE_KEY = "open-resume-state";
const loadStateFromLocalStorage = ()=>{
    try {
        const stringifiedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!stringifiedState) return undefined;
        return JSON.parse(stringifiedState);
    } catch (e) {
        return undefined;
    }
};
const saveStateToLocalStorage = (state)=>{
    try {
        const stringifiedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_KEY, stringifiedState);
    } catch (e) {
    // Ignore
    }
};
const getHasUsedAppBefore = ()=>Boolean(loadStateFromLocalStorage());


/***/ })

};
;