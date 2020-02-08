(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/fontdue_you_see_it.js":
/*!************************************!*\
  !*** ../pkg/fontdue_you_see_it.js ***!
  \************************************/
/*! exports provided: render, ByteStream, CharRender, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ByteStream\", function() { return ByteStream; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CharRender\", function() { return CharRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fontdue_you_see_it_bg.wasm */ \"../pkg/fontdue_you_see_it_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1);\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n/**\n* @param {number} size\n* @param {string} input\n* @returns {CharRender}\n*/\nfunction render(size, input) {\n    var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"render\"](size, input.codePointAt(0));\n    return CharRender.__wrap(ret);\n}\n\n/**\n*/\nclass ByteStream {\n\n    static __wrap(ptr) {\n        const obj = Object.create(ByteStream.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_bytestream_free\"](ptr);\n    }\n    /**\n    * @param {Uint8Array} bytes\n    * @returns {ByteStream}\n    */\n    static new(bytes) {\n        var ptr0 = passArray8ToWasm0(bytes, _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"bytestream_new\"](ptr0, len0);\n        return ByteStream.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    offset() {\n        var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"bytestream_offset\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    size() {\n        var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"bytestream_size\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass CharRender {\n\n    static __wrap(ptr) {\n        const obj = Object.create(CharRender.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_charrender_free\"](ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get height() {\n        var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_charrender_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set height(arg0) {\n        _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_charrender_height\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get width() {\n        var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_charrender_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set width(arg0) {\n        _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_charrender_width\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {ByteStream}\n    */\n    get bitmap() {\n        var ret = _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_charrender_bitmap\"](this.ptr);\n        return ByteStream.__wrap(ret);\n    }\n    /**\n    * @param {ByteStream} arg0\n    */\n    set bitmap(arg0) {\n        _assertClass(arg0, ByteStream);\n        var ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        _fontdue_you_see_it_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_charrender_bitmap\"](this.ptr, ptr0);\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/fontdue_you_see_it.js?");

/***/ }),

/***/ "../pkg/fontdue_you_see_it_bg.wasm":
/*!*****************************************!*\
  !*** ../pkg/fontdue_you_see_it_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_bytestream_free, bytestream_new, bytestream_offset, bytestream_size, __wbg_charrender_free, __wbg_get_charrender_height, __wbg_set_charrender_height, __wbg_get_charrender_width, __wbg_set_charrender_width, __wbg_get_charrender_bitmap, __wbg_set_charrender_bitmap, render, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./fontdue_you_see_it.js */ \"../pkg/fontdue_you_see_it.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/fontdue_you_see_it_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fontdue_you_see_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontdue-you-see-it */ \"../pkg/fontdue_you_see_it.js\");\n/* harmony import */ var fontdue_you_see_it_fontdue_you_see_it_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontdue-you-see-it/fontdue_you_see_it_bg */ \"../pkg/fontdue_you_see_it_bg.wasm\");\n// @ts-check\n\n\n\nfunction getCanvasA() {\n    const existing = document.getElementById(\"canvas-a\");\n    if (existing) {\n        return /** @type {HTMLCanvasElement} */(existing);\n    }\n    const elem = document.createElement(\"canvas\");\n    elem.id = \"canvas-a\";\n    document.getElementById(\"samples\").appendChild(elem);\n    return elem;\n}\n\nfunction getCanvasB() {\n    const existing = document.getElementById(\"canvas-b\");\n    if (existing) {\n        return /** @type {HTMLCanvasElement} */(existing);\n    }\n    const elem = document.createElement(\"canvas\");\n    elem.id = \"canvas-b\";\n    document.getElementById(\"samples\").appendChild(elem);\n    return elem;\n}\n\nfunction renderFontdueCharacter(char = \"¾\", size = 600) {\n    const rednerResult = fontdue_you_see_it__WEBPACK_IMPORTED_MODULE_0__[\"render\"](size, char);\n    const textureRaw = new Uint8ClampedArray(fontdue_you_see_it_fontdue_you_see_it_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, rednerResult.bitmap.offset(), rednerResult.bitmap.size());\n    const clampedFullColor = new Uint8ClampedArray(textureRaw.length * 4);\n    for (let i = 0; i < textureRaw.length; i++) {\n        clampedFullColor[i*4] = 255 - textureRaw[i];\n        clampedFullColor[i*4 + 1] = 255 - textureRaw[i];\n        clampedFullColor[i*4 + 2] = 255 - textureRaw[i];\n        clampedFullColor[i*4 + 3] = 255;\n    }\n    const image = new ImageData(clampedFullColor, rednerResult.width, rednerResult.height);\n    const elem = getCanvasA();\n    elem.height = rednerResult.height + 20;\n    elem.width = rednerResult.width + 20;\n    const ctx = elem.getContext(\"2d\");\n    ctx.putImageData(image, 10, 10);\n    return [elem.height, elem.width];\n}\n\nfunction renderBuiltinCharacter(char = \"¾\", height = 200, width = 200, size = 600) {\n    const elem = getCanvasB();\n    elem.height = height;\n    elem.width = width;\n    const ctx = elem.getContext(\"2d\");\n    ctx.font = `${size}px 'Roboto Mono'`;\n    ctx.fillText(char, 10, height - 10);\n}\n\nconst input = /** @type {HTMLInputElement} */(document.getElementById(\"input\"));\ninput.addEventListener(\"change\", function () {\n    const [height, width] = renderFontdueCharacter(this.value);\n    renderBuiltinCharacter(this.value, height, width);\n});\nconst [height, width] = renderFontdueCharacter();\nrenderBuiltinCharacter(undefined, height, width);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);