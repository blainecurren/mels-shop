/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders/[id]",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/Order.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/Order.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Order_container__MlAs7 {\\n  padding: 50px;\\n  display: flex;\\n}\\n\\n.Order_left__T7fnj {\\n  flex: 2 1;\\n}\\n\\n.Order_table___IhSD {\\n  width: 100%;\\n  text-align: left;\\n  margin-bottom: 50px;\\n}\\n\\n.Order_row__icbZr:last-child {\\n  width: 80%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.Order_done__Zw6JT {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.Order_inProgress__AzXXJ {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: inherit;\\n  -webkit-animation: Order_inProgress__AzXXJ 1s ease infinite alternate;\\n          animation: Order_inProgress__AzXXJ 1s ease infinite alternate;\\n}\\n\\n@-webkit-keyframes Order_inProgress__AzXXJ {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes Order_inProgress__AzXXJ {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n.Order_undone__qmHnC {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  opacity: 0.3;\\n}\\n\\n.Order_undone__qmHnC .Order_checkedIcon__JDEAS,\\n.Order_inProgress__AzXXJ .Order_checkedIcon__JDEAS {\\n  display: none;\\n}\\n\\n.Order_right__f0LLE {\\n  flex: 1 1;\\n}\\n\\n.Order_wrapper__h4Unr {\\n  width: 90%;\\n  max-height: 300px;\\n  background-color: #333;\\n  color: white;\\n  padding: 10px 50px 50px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Order.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,qEAAgD;UAAhD,6DAAgD;AAClD;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,SAAO;AACT;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC\",\"sourcesContent\":[\".container {\\n  padding: 50px;\\n  display: flex;\\n}\\n\\n.left {\\n  flex: 2;\\n}\\n\\n.table {\\n  width: 100%;\\n  text-align: left;\\n  margin-bottom: 50px;\\n}\\n\\n.row:last-child {\\n  width: 80%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.done {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.inProgress {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: inherit;\\n  animation: inProgress 1s ease infinite alternate;\\n}\\n\\n@keyframes inProgress {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n.undone {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  opacity: 0.3;\\n}\\n\\n.undone .checkedIcon,\\n.inProgress .checkedIcon {\\n  display: none;\\n}\\n\\n.right {\\n  flex: 1;\\n}\\n\\n.wrapper {\\n  width: 90%;\\n  max-height: 300px;\\n  background-color: #333;\\n  color: white;\\n  padding: 10px 50px 50px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"Order_container__MlAs7\",\n\t\"left\": \"Order_left__T7fnj\",\n\t\"table\": \"Order_table___IhSD\",\n\t\"row\": \"Order_row__icbZr\",\n\t\"done\": \"Order_done__Zw6JT\",\n\t\"inProgress\": \"Order_inProgress__AzXXJ\",\n\t\"undone\": \"Order_undone__qmHnC\",\n\t\"checkedIcon\": \"Order_checkedIcon__JDEAS\",\n\t\"right\": \"Order_right__f0LLE\",\n\t\"wrapper\": \"Order_wrapper__h4Unr\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL09yZGVyLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLG1FQUFtRSxrQkFBa0Isa0JBQWtCLEdBQUcsd0JBQXdCLGNBQWMsR0FBRyx5QkFBeUIsZ0JBQWdCLHFCQUFxQix3QkFBd0IsR0FBRyxrQ0FBa0MsZUFBZSxrQkFBa0IsbUNBQW1DLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsMkJBQTJCLDBFQUEwRSwwRUFBMEUsR0FBRyxnREFBZ0QsVUFBVSxpQkFBaUIsS0FBSyxRQUFRLGlCQUFpQixLQUFLLEdBQUcsd0NBQXdDLFVBQVUsaUJBQWlCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLHdCQUF3QixpQkFBaUIsR0FBRyx5R0FBeUcsa0JBQWtCLEdBQUcseUJBQXlCLGNBQWMsR0FBRywyQkFBMkIsZUFBZSxzQkFBc0IsMkJBQTJCLGlCQUFpQiw0QkFBNEIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxTQUFTLHdGQUF3RixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsc0NBQXNDLGtCQUFrQixrQkFBa0IsR0FBRyxXQUFXLFlBQVksR0FBRyxZQUFZLGdCQUFnQixxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLGVBQWUsa0JBQWtCLG1DQUFtQyxHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQiwyQkFBMkIscURBQXFELEdBQUcsMkJBQTJCLFVBQVUsaUJBQWlCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLEdBQUcscURBQXFELGtCQUFrQixHQUFHLFlBQVksWUFBWSxHQUFHLGNBQWMsZUFBZSxzQkFBc0IsMkJBQTJCLGlCQUFpQiw0QkFBNEIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxxQkFBcUI7QUFDL2dHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL09yZGVyLm1vZHVsZS5jc3M/YTQzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk9yZGVyX2NvbnRhaW5lcl9fTWxBczcge1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5PcmRlcl9sZWZ0X19UN2ZuaiB7XFxuICBmbGV4OiAyIDE7XFxufVxcblxcbi5PcmRlcl90YWJsZV9fX0loU0Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLk9yZGVyX3Jvd19faWNiWnI6bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLk9yZGVyX2RvbmVfX1p3NkpUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLk9yZGVyX2luUHJvZ3Jlc3NfX0F6WFhKIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogaW5oZXJpdDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBPcmRlcl9pblByb2dyZXNzX19BelhYSiAxcyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBPcmRlcl9pblByb2dyZXNzX19BelhYSiAxcyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIE9yZGVyX2luUHJvZ3Jlc3NfX0F6WFhKIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIE9yZGVyX2luUHJvZ3Jlc3NfX0F6WFhKIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uT3JkZXJfdW5kb25lX19xbUhuQyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5PcmRlcl91bmRvbmVfX3FtSG5DIC5PcmRlcl9jaGVja2VkSWNvbl9fSkRFQVMsXFxuLk9yZGVyX2luUHJvZ3Jlc3NfX0F6WFhKIC5PcmRlcl9jaGVja2VkSWNvbl9fSkRFQVMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLk9yZGVyX3JpZ2h0X19mMExMRSB7XFxuICBmbGV4OiAxIDE7XFxufVxcblxcbi5PcmRlcl93cmFwcGVyX19oNFVuciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCA1MHB4IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9PcmRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHFFQUFnRDtVQUFoRCw2REFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGVmdCB7XFxuICBmbGV4OiAyO1xcbn1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnJvdzpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZG9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pblByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogaW5oZXJpdDtcXG4gIGFuaW1hdGlvbjogaW5Qcm9ncmVzcyAxcyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBpblByb2dyZXNzIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4udW5kb25lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLnVuZG9uZSAuY2hlY2tlZEljb24sXFxuLmluUHJvZ3Jlc3MgLmNoZWNrZWRJY29uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCA1MHB4IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiT3JkZXJfY29udGFpbmVyX19NbEFzN1wiLFxuXHRcImxlZnRcIjogXCJPcmRlcl9sZWZ0X19UN2ZualwiLFxuXHRcInRhYmxlXCI6IFwiT3JkZXJfdGFibGVfX19JaFNEXCIsXG5cdFwicm93XCI6IFwiT3JkZXJfcm93X19pY2JaclwiLFxuXHRcImRvbmVcIjogXCJPcmRlcl9kb25lX19adzZKVFwiLFxuXHRcImluUHJvZ3Jlc3NcIjogXCJPcmRlcl9pblByb2dyZXNzX19BelhYSlwiLFxuXHRcInVuZG9uZVwiOiBcIk9yZGVyX3VuZG9uZV9fcW1IbkNcIixcblx0XCJjaGVja2VkSWNvblwiOiBcIk9yZGVyX2NoZWNrZWRJY29uX19KREVBU1wiLFxuXHRcInJpZ2h0XCI6IFwiT3JkZXJfcmlnaHRfX2YwTExFXCIsXG5cdFwid3JhcHBlclwiOiBcIk9yZGVyX3dyYXBwZXJfX2g0VW5yXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/Order.module.css\n");

/***/ })

});