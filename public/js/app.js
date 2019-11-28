(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryAddOrEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CategoryAddOrEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])("required", _objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"]));
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      category: {
        name: ""
      }
    };
  },
  props: {
    itemId: {
      type: Number,
      "default": null
    },
    csrf: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "add"
    },
    parent: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    if (this.mode == "edit") {
      this.loadData();
    }
  },
  methods: {
    loadData: function loadData() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/categories/".concat(this.itemId)));

            case 2:
              response = _context.sent;
              this.category = response.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    add: function add() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function add$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "post",
                data: this.category,
                url: "ajax/categories/add",
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 2:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification('Added Successfully.');

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    update: function update() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "put",
                data: this.category,
                url: "ajax/categories/".concat(this.itemId, "/update"),
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 2:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification('Updated Successfully.');

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    showNotification: function showNotification() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        position: 'top-end',
        text: text,
        icon: icon,
        showConfirmButton: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CategoryView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CategoryAddOrEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryAddOrEdit */ "./resources/js/components/CategoryAddOrEdit.vue");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mixins/SearchableMixin */ "./resources/js/Mixins/SearchableMixin.js");
/* harmony import */ var _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mixins/CrudMixin */ "./resources/js/Mixins/CrudMixin.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__["default"], _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    CategoryAddOrEdit: _CategoryAddOrEdit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      categories: {
        data: [],
        total: 0,
        per_page: 25
      }
    };
  },
  computed: {
    count: function count() {
      return Math.ceil(this.categories.total / this.categories.per_page);
    }
  },
  props: {
    csrf: {
      type: String,
      "default": null
    }
  },
  methods: {
    showDeleteConfirmationNotification: function showDeleteConfirmationNotification(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showDeleteConfirmationNotification$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Are you sure?',
                showCancelButton: true
              }));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.value);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    "delete": function _delete(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: 'delete',
                url: "ajax/categories/".concat(id, "/delete"),
                headers: {
                  'X-CSRF-Token': this.csrf
                }
              }));

            case 2:
              this.search();
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                text: 'Deleted sucessfully',
                icon: 'success',
                showConfirmButton: false
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    loadData: function loadData() {
      var keyword, page, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              keyword = this.keyword, page = this.page;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/categories?" + query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
                keyword: keyword,
                page: page
              })));

            case 3:
              response = _context3.sent;
              this.categories = response.data;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerAddOrEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomerAddOrEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var rules = {
  required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"],
  regex: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["regex"]
}; //registering all rules

var rulesNames = Object.keys(rules);

for (var _i = 0, _rulesNames = rulesNames; _i < _rulesNames.length; _i++) {
  var ruleName = _rulesNames[_i];
  Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])(ruleName, _objectSpread({}, rules[ruleName]));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {
        name: "",
        last_name: "",
        phone_number: "",
        address: ""
      },
      regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    };
  },
  props: {
    itemId: {
      type: Number,
      "default": null
    },
    csrf: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "add"
    },
    parent: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    if (this.mode == "edit") {
      this.loadData();
    }
  },
  methods: {
    loadData: function loadData() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/customers/".concat(this.itemId)));

            case 2:
              response = _context.sent;
              this.customer = response.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    add: function add() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function add$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "post",
                data: this.customer,
                url: "ajax/customers/add",
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 2:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification('Added Successfully.');

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    update: function update() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "put",
                data: this.customer,
                url: "ajax/customers/".concat(this.itemId, "/update"),
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 2:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification('Updated Successfully.');

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    showNotification: function showNotification() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        position: 'top-end',
        text: text,
        icon: icon,
        showConfirmButton: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomerView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomerAddOrEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddOrEdit */ "./resources/js/components/CustomerAddOrEdit.vue");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mixins/SearchableMixin */ "./resources/js/Mixins/SearchableMixin.js");
/* harmony import */ var _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mixins/CrudMixin */ "./resources/js/Mixins/CrudMixin.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__["default"], _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    CustomerAddOrEdit: _CustomerAddOrEdit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      customers: {
        data: [],
        total: 0,
        per_page: 25
      }
    };
  },
  computed: {
    count: function count() {
      return Math.ceil(this.customers.total / this.customers.per_page);
    }
  },
  props: {
    csrf: {
      type: String,
      "default": null
    }
  },
  methods: {
    showDeleteConfirmationNotification: function showDeleteConfirmationNotification(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showDeleteConfirmationNotification$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Are you sure?',
                showCancelButton: true
              }));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.value);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    "delete": function _delete(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: 'delete',
                url: "ajax/customers/".concat(id, "/delete"),
                headers: {
                  'X-CSRF-Token': this.csrf
                }
              }));

            case 2:
              this.search();
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                text: 'Deleted sucessfully',
                icon: 'success',
                showConfirmButton: false
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    loadData: function loadData() {
      var keyword, page, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              keyword = this.keyword, page = this.page;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/customers?" + query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
                keyword: keyword,
                page: page
              })));

            case 3:
              response = _context3.sent;
              this.customers = response.data;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductAddOrEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductAddOrEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var rules = {
  required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"],
  email: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["email"],
  regex: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["regex"]
}; //registering all rules

var rulesNames = Object.keys(rules);

for (var _i = 0, _rulesNames = rulesNames; _i < _rulesNames.length; _i++) {
  var ruleName = _rulesNames[_i];
  Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])(ruleName, _objectSpread({}, rules[ruleName]));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: {
        code: "",
        name: "",
        price: 0,
        stock: 0,
        min_stock: 0,
        provider_id: null,
        image: null
      },
      providers: [],
      imagePreview: null,
      imageFile: null
    };
  },
  props: {
    itemId: {
      type: Number,
      "default": null
    },
    csrf: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "add"
    },
    parent: {
      type: Object,
      "default": null
    }
  },
  computed: {
    imagePath: function imagePath() {
      return "storage/".concat(this.product.image);
    }
  },
  mounted: function mounted() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function mounted$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(this.mode == "edit")) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.loadData());

          case 3:
            this.imagePreview = this.imagePath;

          case 4:
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.loadProviders());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  methods: {
    loadData: function loadData() {
      var responseProduct;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/products/".concat(this.itemId)));

            case 2:
              responseProduct = _context2.sent;
              this.product = responseProduct.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    loadProviders: function loadProviders() {
      var responseProviders;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadProviders$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/providers/raw"));

            case 2:
              responseProviders = _context3.sent;
              this.providers = responseProviders.data;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    generatePreview: function generatePreview($event) {
      if ($event.target.files[0]) {
        this.imagePreview = window.URL.createObjectURL($event.target.files[0]);
      } else {
        //Restore original image on no file on edit mode
        if (this.mode === "edit") {
          this.imagePreview = this.imagePath;
        } else {
          this.imagePreview = null;
        }
      }
    },
    assignFile: function assignFile($event) {
      if ($event.target.files[0]) {
        this.imageFile = $event.target.files[0];
      } else {
        this.imageFile = null;
      }
    },
    add: function add() {
      var image;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function add$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.UploadImage());

            case 2:
              image = _context4.sent;
              this.product.image = image;
              _context4.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "post",
                data: this.product,
                url: "ajax/products/add",
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 6:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification("Added Successfully.");

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    update: function update() {
      var image;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function update$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(this.imageFile !== null)) {
                _context5.next = 5;
                break;
              }

              _context5.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.UploadImage());

            case 3:
              image = _context5.sent;
              this.product.image = image;

            case 5:
              _context5.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "put",
                data: this.product,
                url: "ajax/products/".concat(this.itemId, "/update"),
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 7:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification("Updated Successfully.");

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    },
    UploadImage: function UploadImage() {
      var image, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function UploadImage$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              image = new FormData();
              image.append("image", this.imageFile);
              _context6.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "post",
                data: image,
                url: "ajax/products/image/add",
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 4:
              response = _context6.sent;
              return _context6.abrupt("return", response.data);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    },
    showNotification: function showNotification() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        position: "top-end",
        text: text,
        icon: icon,
        showConfirmButton: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductAddOrEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAddOrEdit */ "./resources/js/components/ProductAddOrEdit.vue");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mixins/SearchableMixin */ "./resources/js/Mixins/SearchableMixin.js");
/* harmony import */ var _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mixins/CrudMixin */ "./resources/js/Mixins/CrudMixin.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__["default"], _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    ProductAddOrEdit: _ProductAddOrEdit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      products: {
        data: [],
        total: 0,
        per_page: 25
      },
      providers: []
    };
  },
  computed: {
    count: function count() {
      return Math.ceil(this.products.total / this.products.per_page);
    }
  },
  props: {
    csrf: {
      type: String,
      "default": null
    }
  },
  methods: {
    showDeleteConfirmationNotification: function showDeleteConfirmationNotification(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showDeleteConfirmationNotification$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Are you sure?',
                showCancelButton: true
              }));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.value);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    "delete": function _delete(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: 'delete',
                url: "ajax/products/".concat(id, "/delete"),
                headers: {
                  'X-CSRF-Token': this.csrf
                }
              }));

            case 2:
              this.search();
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                text: 'Deleted sucessfully',
                icon: 'success',
                showConfirmButton: false
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    getProvider: function getProvider(id) {
      return this.providers.filter(function (provider) {
        return provider.id === id;
      })[0];
    },
    loadData: function loadData() {
      var keyword, page, responseProducts, responseProviders;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              keyword = this.keyword, page = this.page;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/products?" + query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
                keyword: keyword,
                page: page
              })));

            case 3:
              responseProducts = _context3.sent;
              _context3.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/providers/raw"));

            case 6:
              responseProviders = _context3.sent;
              this.products = responseProducts.data;
              this.providers = responseProviders.data;

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderAddOrEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProviderAddOrEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var rules = {
  required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"],
  email: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["email"],
  regex: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["regex"]
}; //registering all rules

var rulesNames = Object.keys(rules);

for (var _i = 0, _rulesNames = rulesNames; _i < _rulesNames.length; _i++) {
  var ruleName = _rulesNames[_i];
  Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])(ruleName, _objectSpread({}, rules[ruleName]));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      provider: {
        name: "",
        email: "",
        phone_number: "",
        address: ""
      },
      regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    };
  },
  props: {
    itemId: {
      type: Number,
      "default": null
    },
    csrf: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "add"
    },
    parent: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    if (this.mode == "edit") {
      this.loadData();
    }
  },
  methods: {
    loadData: function loadData() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/providers/".concat(this.itemId)));

            case 2:
              response = _context.sent;
              this.provider = response.data;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    add: function add() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function add$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "post",
                data: this.provider,
                url: "ajax/providers/add",
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 2:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification('Added Successfully.');

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    update: function update() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: "put",
                data: this.provider,
                url: "ajax/providers/".concat(this.itemId, "/update"),
                headers: {
                  "X-CSRF-TOKEN": this.csrf
                }
              }));

            case 2:
              this.$emit("updatedata");
              this.parent.hide();
              this.showNotification('Updated Successfully.');

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    showNotification: function showNotification() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        position: 'top-end',
        text: text,
        icon: icon,
        showConfirmButton: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProviderView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProviderAddOrEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderAddOrEdit */ "./resources/js/components/ProviderAddOrEdit.vue");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mixins/SearchableMixin */ "./resources/js/Mixins/SearchableMixin.js");
/* harmony import */ var _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mixins/CrudMixin */ "./resources/js/Mixins/CrudMixin.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_Mixins_SearchableMixin__WEBPACK_IMPORTED_MODULE_4__["default"], _Mixins_CrudMixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    ProviderAddOrEdit: _ProviderAddOrEdit__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      providers: {
        data: [],
        total: 0,
        per_page: 25
      }
    };
  },
  computed: {
    count: function count() {
      return Math.ceil(this.providers.total / this.providers.per_page);
    }
  },
  props: {
    csrf: {
      type: String,
      "default": null
    }
  },
  methods: {
    showDeleteConfirmationNotification: function showDeleteConfirmationNotification(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showDeleteConfirmationNotification$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Are you sure?',
                showCancelButton: true
              }));

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.value);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    "delete": function _delete(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http({
                method: 'delete',
                url: "ajax/providers/".concat(id, "/delete"),
                headers: {
                  'X-CSRF-Token': this.csrf
                }
              }));

            case 2:
              this.search();
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                text: 'Deleted sucessfully',
                icon: 'success',
                showConfirmButton: false
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    loadData: function loadData() {
      var keyword, page, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              keyword = this.keyword, page = this.page;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.$http.get("ajax/providers?" + query_string__WEBPACK_IMPORTED_MODULE_2___default.a.stringify({
                keyword: keyword,
                page: page
              })));

            case 3:
              response = _context3.sent;
              this.providers = response.data;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryAddOrEdit.vue?vue&type=template&id=57487756&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CategoryAddOrEdit.vue?vue&type=template&id=57487756& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ValidationObserver", {
    attrs: { tag: "form" },
    on: {
      submit: function($event) {
        $event.preventDefault()
      }
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var invalid = ref.invalid
          return [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Name" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.category.name,
                                  expression: "category.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.category.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.category,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm.mode === "add"
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: invalid },
                      on: { click: _vm.add }
                    },
                    [_vm._v("Add New Category")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: invalid },
                      on: { click: _vm.update }
                    },
                    [_vm._v("Update category")]
                  )
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryView.vue?vue&type=template&id=174bd1a4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CategoryView.vue?vue&type=template&id=174bd1a4& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              staticClass: "btn btn-success",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showAddForm($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus" }),
              _vm._v(" Add category\n      ")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("form", { staticClass: "mb-3" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword,
                        expression: "keyword"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Start typing to search..."
                    },
                    domProps: { value: _vm.keyword },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.keyword = $event.target.value
                        },
                        _vm.search
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive bg-white" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c(
                    "thead",
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._l(_vm.categories.data, function(category) {
                        return _c("tr", { key: category.id }, [
                          _c("td", [_vm._v(_vm._s(category.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(category.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-circle",
                                attrs: { href: "#", title: "Edit" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showEditForm(category.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-edit" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-circle",
                                attrs: { href: "#", title: "Delete" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showDeleteConfirmation(
                                      category.id
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "nav",
                { attrs: { "aria-label": "Page navigation" } },
                [
                  _c("paginate", {
                    attrs: {
                      "click-handler": _vm.loadData,
                      "page-count": _vm.count,
                      "prev-text": "Previous",
                      "next-text": "Next",
                      "container-class": "pagination justify-content-center",
                      "page-class": "page-item",
                      "page-link-class": "page-link",
                      "prev-class": "page-item",
                      "next-class": "page-item",
                      "prev-link-class": "page-link",
                      "next-link-class": "page-link"
                    },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: { title: "BootstrapVue", "hide-footer": "" },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [_c("span")]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("CategoryAddOrEdit", {
            attrs: {
              csrf: this.csrf,
              mode: _vm.formMode,
              parent: _vm.$refs.modal,
              itemId: _vm.itemId
            },
            on: { updatedata: _vm.search }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h1", { staticClass: "h3 mb-4 text-gray-800" }, [_vm._v("Categories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h6", { staticClass: "m-0 font-weight-bold" }, [
        _vm._v("Categories list")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Actions")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ValidationObserver", {
    attrs: { tag: "form" },
    on: {
      submit: function($event) {
        $event.preventDefault()
      }
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var invalid = ref.invalid
          return [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Name" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.customer.name,
                                  expression: "customer.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.customer.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.customer,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Last Name" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Last Name")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.customer.last_name,
                                  expression: "customer.last_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.customer.last_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.customer,
                                    "last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Document Id" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Document Id")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.customer.doc_id,
                                  expression: "customer.doc_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.customer.doc_id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.customer,
                                    "doc_id",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: {
                    rules: { regex: _vm.regex, required: {} },
                    name: "Phone Number"
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Phone Number")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.customer.phone_number,
                                  expression: "customer.phone_number"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.customer.phone_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.customer,
                                    "phone_number",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Address" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Address")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.customer.address,
                                  expression: "customer.address"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.customer.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.customer,
                                    "address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm.mode === "add"
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: invalid },
                      on: { click: _vm.add }
                    },
                    [_vm._v("Add New Customer")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: invalid },
                      on: { click: _vm.update }
                    },
                    [_vm._v("Update Customer")]
                  )
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerView.vue?vue&type=template&id=a1100be4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomerView.vue?vue&type=template&id=a1100be4& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              staticClass: "btn btn-success",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showAddForm($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus" }),
              _vm._v(" Add Customer\n      ")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("form", { staticClass: "mb-3" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword,
                        expression: "keyword"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Start typing to search..."
                    },
                    domProps: { value: _vm.keyword },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.keyword = $event.target.value
                        },
                        _vm.search
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive bg-white" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c(
                    "thead",
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._l(_vm.customers.data, function(customer) {
                        return _c("tr", { key: customer.id }, [
                          _c("td", [_vm._v(_vm._s(customer.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.last_name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.doc_id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.phone_number))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.address))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-circle",
                                attrs: { href: "#", title: "Edit" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showEditForm(customer.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-edit" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-circle",
                                attrs: { href: "#", title: "Delete" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showDeleteConfirmation(
                                      customer.id
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "nav",
                { attrs: { "aria-label": "Page navigation" } },
                [
                  _c("paginate", {
                    attrs: {
                      "click-handler": _vm.loadData,
                      "page-count": _vm.count,
                      "prev-text": "Previous",
                      "next-text": "Next",
                      "container-class": "pagination justify-content-center",
                      "page-class": "page-item",
                      "page-link-class": "page-link",
                      "prev-class": "page-item",
                      "next-class": "page-item",
                      "prev-link-class": "page-link",
                      "next-link-class": "page-link"
                    },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: { title: "BootstrapVue", "hide-footer": "" },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [_c("span")]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("CustomerAddOrEdit", {
            attrs: {
              csrf: this.csrf,
              mode: _vm.formMode,
              parent: _vm.$refs.modal,
              itemId: _vm.itemId
            },
            on: { updatedata: _vm.search }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h1", { staticClass: "h3 mb-4 text-gray-800" }, [_vm._v("Customers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h6", { staticClass: "m-0 font-weight-bold" }, [
        _vm._v("Customers list")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Last Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Document Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Phone Number")]),
      _vm._v(" "),
      _c("th", [_vm._v("Address")]),
      _vm._v(" "),
      _c("th", [_vm._v("Actions")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ValidationObserver", {
    attrs: { tag: "form" },
    on: {
      submit: function($event) {
        $event.preventDefault()
      }
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var invalid = ref.invalid
          return [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Code" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Code")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.product.code,
                                      expression: "product.code"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.product.code },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.product,
                                        "code",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Name" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Name")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.product.name,
                                      expression: "product.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.product.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.product,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Price" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Price")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.product.price,
                                      expression: "product.price"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.product.price },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.product,
                                        "price",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Stock" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Stock")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.product.stock,
                                      expression: "product.stock"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.product.stock },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.product,
                                        "stock",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Min Stock" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Min. Stock")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.product.min_stock,
                                      expression: "product.min_stock"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text" },
                                  domProps: { value: _vm.product.min_stock },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.product,
                                        "min_stock",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Provider" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Provider")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.product.provider_id,
                                        expression: "product.provider_id"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.product,
                                          "provider_id",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { domProps: { value: null } },
                                      [_vm._v("Select the provider")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.providers, function(provider) {
                                      return _c(
                                        "option",
                                        {
                                          key: provider.id,
                                          domProps: { value: provider.id }
                                        },
                                        [_vm._v(_vm._s(provider.name))]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", [_vm._v("Barcode")]),
                    _vm._v(" "),
                    _c("barcode", { attrs: { value: _vm.product.code } }, [
                      _c("h6", { staticClass: "text-center" }, [
                        _vm._v("Here will appear the barcode.")
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("ValidationProvider", {
                      attrs: { rules: "required", name: "Image" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Image")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: { type: "file" },
                                  on: {
                                    change: function($event) {
                                      ;[
                                        _vm.assignFile($event),
                                        _vm.generatePreview($event)
                                      ]
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-danger mt-2" }, [
                                  _c("span", [_vm._v(_vm._s(errors[0]))])
                                ])
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.imagePreview
                  ? _c("div", { staticClass: "form-group" }, [
                      _c("img", {
                        attrs: { src: _vm.imagePreview, alt: "", width: "100%" }
                      })
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm.mode === "add"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { disabled: invalid },
                          on: { click: _vm.add }
                        },
                        [
                          _vm._v(
                            "\n                    Add New Product\n                "
                          )
                        ]
                      )
                    : _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { disabled: invalid },
                          on: { click: _vm.update }
                        },
                        [
                          _vm._v(
                            "\n                    Update Product\n                "
                          )
                        ]
                      )
                ])
              ])
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductView.vue?vue&type=template&id=3aa22d19&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductView.vue?vue&type=template&id=3aa22d19& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              staticClass: "btn btn-success",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showAddForm($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus" }),
              _vm._v(" Add Product\n      ")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("form", { staticClass: "mb-3" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword,
                        expression: "keyword"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Start typing to search..."
                    },
                    domProps: { value: _vm.keyword },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.keyword = $event.target.value
                        },
                        _vm.search
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive bg-white" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c(
                    "thead",
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._l(_vm.products.data, function(product) {
                        return _c("tr", { key: product.id }, [
                          _c("td", [_vm._v(_vm._s(product.id))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { attrs: { width: "20" } },
                            [
                              _c("barcode", {
                                attrs: {
                                  value: product.code,
                                  format: "CODE128",
                                  width: "1",
                                  height: 20,
                                  fontSize: 16
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("img", {
                              attrs: {
                                src: "storage/" + product.image,
                                width: "80",
                                height: "80"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(product.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(product.price))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(product.stock))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(product.min_stock))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.getProvider(product.provider_id).name)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-circle",
                                attrs: { href: "#", title: "Edit" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showEditForm(product.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-edit" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-circle",
                                attrs: { href: "#", title: "Delete" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showDeleteConfirmation(
                                      product.id
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "nav",
                { attrs: { "aria-label": "Page navigation" } },
                [
                  _c("paginate", {
                    attrs: {
                      "click-handler": _vm.loadData,
                      "page-count": _vm.count,
                      "prev-text": "Previous",
                      "next-text": "Next",
                      "container-class": "pagination justify-content-center",
                      "page-class": "page-item",
                      "page-link-class": "page-link",
                      "prev-class": "page-item",
                      "next-class": "page-item",
                      "prev-link-class": "page-link",
                      "next-link-class": "page-link"
                    },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: { title: "BootstrapVue", size: "lg", "hide-footer": "" },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [_c("span")]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("ProductAddOrEdit", {
            attrs: {
              csrf: this.csrf,
              mode: _vm.formMode,
              parent: _vm.$refs.modal,
              itemId: _vm.itemId
            },
            on: { updatedata: _vm.search }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h1", { staticClass: "h3 mb-4 text-gray-800" }, [_vm._v("Products")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h6", { staticClass: "m-0 font-weight-bold" }, [
        _vm._v("Products list")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Code")]),
      _vm._v(" "),
      _c("th", [_vm._v("Image")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Stock")]),
      _vm._v(" "),
      _c("th", [_vm._v("Stock Min")]),
      _vm._v(" "),
      _c("th", [_vm._v("Provider")]),
      _vm._v(" "),
      _c("th", [_vm._v("Actions")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderAddOrEdit.vue?vue&type=template&id=1615de42&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProviderAddOrEdit.vue?vue&type=template&id=1615de42& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ValidationObserver", {
    attrs: { tag: "form" },
    on: {
      submit: function($event) {
        $event.preventDefault()
      }
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var invalid = ref.invalid
          return [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Name" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.provider.name,
                                  expression: "provider.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.provider.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.provider,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required|email", name: "Email" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Email")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.provider.email,
                                  expression: "provider.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.provider.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.provider,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: {
                    rules: { regex: _vm.regex, required: {} },
                    name: "Phone Number"
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Phone Number")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.provider.phone_number,
                                  expression: "provider.phone_number"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.provider.phone_number },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.provider,
                                    "phone_number",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("ValidationProvider", {
                  attrs: { rules: "required", name: "Address" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var errors = ref.errors
                          return [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Address")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.provider.address,
                                  expression: "provider.address"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: _vm.provider.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.provider,
                                    "address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-danger mt-2" }, [
                              _c("span", [_vm._v(_vm._s(errors[0]))])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm.mode === "add"
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: invalid },
                      on: { click: _vm.add }
                    },
                    [_vm._v("Add New Provider")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: invalid },
                      on: { click: _vm.update }
                    },
                    [_vm._v("Update provider")]
                  )
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderView.vue?vue&type=template&id=01a8bd21&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProviderView.vue?vue&type=template&id=01a8bd21& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              staticClass: "btn btn-success",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showAddForm($event)
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus" }),
              _vm._v(" Add Provider\n      ")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("form", { staticClass: "mb-3" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.keyword,
                        expression: "keyword"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Start typing to search..."
                    },
                    domProps: { value: _vm.keyword },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.keyword = $event.target.value
                        },
                        _vm.search
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive bg-white" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c(
                    "thead",
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._l(_vm.providers.data, function(provider) {
                        return _c("tr", { key: provider.id }, [
                          _c("td", [_vm._v(_vm._s(provider.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(provider.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(provider.email))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(provider.phone_number))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(provider.address))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-circle",
                                attrs: { href: "#", title: "Edit" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showEditForm(provider.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-edit" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-danger btn-circle",
                                attrs: { href: "#", title: "Delete" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showDeleteConfirmation(
                                      provider.id
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "nav",
                { attrs: { "aria-label": "Page navigation" } },
                [
                  _c("paginate", {
                    attrs: {
                      "click-handler": _vm.loadData,
                      "page-count": _vm.count,
                      "prev-text": "Previous",
                      "next-text": "Next",
                      "container-class": "pagination justify-content-center",
                      "page-class": "page-item",
                      "page-link-class": "page-link",
                      "prev-class": "page-item",
                      "next-class": "page-item",
                      "prev-link-class": "page-link",
                      "next-link-class": "page-link"
                    },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: { title: "BootstrapVue", "hide-footer": "" },
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [_c("span")]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("ProviderAddOrEdit", {
            attrs: {
              csrf: this.csrf,
              mode: _vm.formMode,
              parent: _vm.$refs.modal,
              itemId: _vm.itemId
            },
            on: { updatedata: _vm.search }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h1", { staticClass: "h3 mb-4 text-gray-800" }, [_vm._v("Providers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h6", { staticClass: "m-0 font-weight-bold" }, [
        _vm._v("Providers list")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { staticClass: "fas fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", [_vm._v("Phone Number")]),
      _vm._v(" "),
      _c("th", [_vm._v("Address")]),
      _vm._v(" "),
      _c("th", [_vm._v("Actions")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Mixins/CrudMixin.js":
/*!******************************************!*\
  !*** ./resources/js/Mixins/CrudMixin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formMode: null,
      itemId: null
    };
  },
  methods: {
    //These methods assume you have a component reference by modal for adding or editing
    showAddForm: function showAddForm() {
      this.formMode = "add";
      this.$refs.modal.show();
    },
    showEditForm: function showEditForm(id) {
      this.itemId = id;
      this.formMode = "edit";
      this.$refs.modal.show();
    },
    showDeleteConfirmation: function showDeleteConfirmation(id) {
      var value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showDeleteConfirmation$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.showDeleteConfirmationNotification());

            case 2:
              value = _context.sent;

              if (value) {
                this["delete"](id);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    showDeleteConfirmationNotification: function showDeleteConfirmationNotification(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function showDeleteConfirmationNotification$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              throw new Exception('Method showDeleteConfirmationNotification not implemented');

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    "delete": function _delete(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Mixins/SearchableMixin.js":
/*!************************************************!*\
  !*** ./resources/js/Mixins/SearchableMixin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      keyword: null,
      page: 1
    };
  },
  mounted: function mounted() {
    this.search();
  },
  methods: {
    search: function search() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function search$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.page = 1;
              this.loadData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    loadData: function loadData() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

var ValidationProvider = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

var BootstrapVue = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var VueAxios = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");

var Paginate = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");

var VueBarcode = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(ValidationProvider);
Vue.component('ValidationProvider', ValidationProvider.ValidationProvider);
Vue.component('ValidationObserver', ValidationProvider.ValidationObserver);
Vue.component('paginate', Paginate);
Vue.component('barcode', VueBarcode);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('category-view', __webpack_require__(/*! ./components/CategoryView.vue */ "./resources/js/components/CategoryView.vue")["default"]);
Vue.component('provider-view', __webpack_require__(/*! ./components/ProviderView.vue */ "./resources/js/components/ProviderView.vue")["default"]);
Vue.component('product-view', __webpack_require__(/*! ./components/ProductView.vue */ "./resources/js/components/ProductView.vue")["default"]);
Vue.component('customer-view', __webpack_require__(/*! ./components/CustomerView.vue */ "./resources/js/components/CustomerView.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}

__webpack_require__(/*! ./dependencies/index.js */ "./resources/js/dependencies/index.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/CategoryAddOrEdit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CategoryAddOrEdit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryAddOrEdit_vue_vue_type_template_id_57487756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryAddOrEdit.vue?vue&type=template&id=57487756& */ "./resources/js/components/CategoryAddOrEdit.vue?vue&type=template&id=57487756&");
/* harmony import */ var _CategoryAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryAddOrEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/CategoryAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryAddOrEdit_vue_vue_type_template_id_57487756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryAddOrEdit_vue_vue_type_template_id_57487756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CategoryAddOrEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CategoryAddOrEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CategoryAddOrEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryAddOrEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CategoryAddOrEdit.vue?vue&type=template&id=57487756&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/CategoryAddOrEdit.vue?vue&type=template&id=57487756& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryAddOrEdit_vue_vue_type_template_id_57487756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryAddOrEdit.vue?vue&type=template&id=57487756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryAddOrEdit.vue?vue&type=template&id=57487756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryAddOrEdit_vue_vue_type_template_id_57487756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryAddOrEdit_vue_vue_type_template_id_57487756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CategoryView.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CategoryView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryView_vue_vue_type_template_id_174bd1a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryView.vue?vue&type=template&id=174bd1a4& */ "./resources/js/components/CategoryView.vue?vue&type=template&id=174bd1a4&");
/* harmony import */ var _CategoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryView.vue?vue&type=script&lang=js& */ "./resources/js/components/CategoryView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryView_vue_vue_type_template_id_174bd1a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryView_vue_vue_type_template_id_174bd1a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CategoryView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CategoryView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CategoryView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CategoryView.vue?vue&type=template&id=174bd1a4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/CategoryView.vue?vue&type=template&id=174bd1a4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_174bd1a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryView.vue?vue&type=template&id=174bd1a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CategoryView.vue?vue&type=template&id=174bd1a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_174bd1a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryView_vue_vue_type_template_id_174bd1a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CustomerAddOrEdit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CustomerAddOrEdit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerAddOrEdit_vue_vue_type_template_id_ae4ea516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516& */ "./resources/js/components/CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516&");
/* harmony import */ var _CustomerAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerAddOrEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomerAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerAddOrEdit_vue_vue_type_template_id_ae4ea516___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerAddOrEdit_vue_vue_type_template_id_ae4ea516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomerAddOrEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomerAddOrEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CustomerAddOrEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddOrEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddOrEdit_vue_vue_type_template_id_ae4ea516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerAddOrEdit.vue?vue&type=template&id=ae4ea516&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddOrEdit_vue_vue_type_template_id_ae4ea516___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerAddOrEdit_vue_vue_type_template_id_ae4ea516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CustomerView.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CustomerView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerView_vue_vue_type_template_id_a1100be4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerView.vue?vue&type=template&id=a1100be4& */ "./resources/js/components/CustomerView.vue?vue&type=template&id=a1100be4&");
/* harmony import */ var _CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerView.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomerView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerView_vue_vue_type_template_id_a1100be4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerView_vue_vue_type_template_id_a1100be4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomerView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomerView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CustomerView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomerView.vue?vue&type=template&id=a1100be4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/CustomerView.vue?vue&type=template&id=a1100be4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_template_id_a1100be4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerView.vue?vue&type=template&id=a1100be4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomerView.vue?vue&type=template&id=a1100be4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_template_id_a1100be4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerView_vue_vue_type_template_id_a1100be4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProductAddOrEdit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ProductAddOrEdit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAddOrEdit_vue_vue_type_template_id_bc48ad6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c& */ "./resources/js/components/ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c&");
/* harmony import */ var _ProductAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAddOrEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAddOrEdit_vue_vue_type_template_id_bc48ad6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductAddOrEdit_vue_vue_type_template_id_bc48ad6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductAddOrEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductAddOrEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ProductAddOrEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAddOrEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddOrEdit_vue_vue_type_template_id_bc48ad6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductAddOrEdit.vue?vue&type=template&id=bc48ad6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddOrEdit_vue_vue_type_template_id_bc48ad6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddOrEdit_vue_vue_type_template_id_bc48ad6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProductView.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProductView.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductView_vue_vue_type_template_id_3aa22d19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductView.vue?vue&type=template&id=3aa22d19& */ "./resources/js/components/ProductView.vue?vue&type=template&id=3aa22d19&");
/* harmony import */ var _ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductView.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductView_vue_vue_type_template_id_3aa22d19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductView_vue_vue_type_template_id_3aa22d19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductView.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProductView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductView.vue?vue&type=template&id=3aa22d19&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ProductView.vue?vue&type=template&id=3aa22d19& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_template_id_3aa22d19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductView.vue?vue&type=template&id=3aa22d19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductView.vue?vue&type=template&id=3aa22d19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_template_id_3aa22d19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductView_vue_vue_type_template_id_3aa22d19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProviderAddOrEdit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ProviderAddOrEdit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderAddOrEdit_vue_vue_type_template_id_1615de42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderAddOrEdit.vue?vue&type=template&id=1615de42& */ "./resources/js/components/ProviderAddOrEdit.vue?vue&type=template&id=1615de42&");
/* harmony import */ var _ProviderAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderAddOrEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/ProviderAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProviderAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProviderAddOrEdit_vue_vue_type_template_id_1615de42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProviderAddOrEdit_vue_vue_type_template_id_1615de42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProviderAddOrEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProviderAddOrEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ProviderAddOrEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProviderAddOrEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderAddOrEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderAddOrEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProviderAddOrEdit.vue?vue&type=template&id=1615de42&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ProviderAddOrEdit.vue?vue&type=template&id=1615de42& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderAddOrEdit_vue_vue_type_template_id_1615de42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProviderAddOrEdit.vue?vue&type=template&id=1615de42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderAddOrEdit.vue?vue&type=template&id=1615de42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderAddOrEdit_vue_vue_type_template_id_1615de42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderAddOrEdit_vue_vue_type_template_id_1615de42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProviderView.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ProviderView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProviderView_vue_vue_type_template_id_01a8bd21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderView.vue?vue&type=template&id=01a8bd21& */ "./resources/js/components/ProviderView.vue?vue&type=template&id=01a8bd21&");
/* harmony import */ var _ProviderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderView.vue?vue&type=script&lang=js& */ "./resources/js/components/ProviderView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProviderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProviderView_vue_vue_type_template_id_01a8bd21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProviderView_vue_vue_type_template_id_01a8bd21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProviderView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProviderView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ProviderView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProviderView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProviderView.vue?vue&type=template&id=01a8bd21&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ProviderView.vue?vue&type=template&id=01a8bd21& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderView_vue_vue_type_template_id_01a8bd21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProviderView.vue?vue&type=template&id=01a8bd21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProviderView.vue?vue&type=template&id=01a8bd21&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderView_vue_vue_type_template_id_01a8bd21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProviderView_vue_vue_type_template_id_01a8bd21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/dependencies/index.js":
/*!********************************************!*\
  !*** ./resources/js/dependencies/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jquery_dep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery-dep.js */ "./resources/js/dependencies/jquery-dep.js");
/* harmony import */ var _jquery_dep_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jquery_dep_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sb_admin_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sb-admin-2 */ "./resources/js/dependencies/sb-admin-2.js");
/* harmony import */ var _sb_admin_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sb_admin_2__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./resources/js/dependencies/jquery-dep.js":
/*!*************************************************!*\
  !*** ./resources/js/dependencies/jquery-dep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/dependencies/sb-admin-2.js":
/*!*************************************************!*\
  !*** ./resources/js/dependencies/sb-admin-2.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  "use strict"; // Start of use strict
  // Toggle the side navigation

  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");

    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    }

    ;
  }); // Close any open menu accordions when window is resized below 768px

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    }

    ;
  }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  }); // Scroll to top button appear

  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();

    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  }); // Smooth scrolling using jQuery easing

  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
})(jQuery); // End of use strict

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\inventory\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\inventory\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);