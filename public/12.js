webpackJsonp([12],{

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1296)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/views/bantenprov/rasio-guru-murid-smp-mts/DashboardRasioGMSmpMts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3d82726", Component.options)
  } else {
    hotAPI.reload("data-v-e3d82726", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6 mb-3" }, [
        _c(
          "div",
          {
            staticClass: "card h-100",
            staticStyle: { color: "#fff", "background-color": "#2196F3" }
          },
          [
            _c(
              "div",
              { staticClass: "card-body" },
              [_c("rasio-guru-murid-smp-mts-bar-03")],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 mb-3" }, [
        _c(
          "div",
          {
            staticClass: "card h-100",
            staticStyle: { color: "#fff", "background-color": "#4CAF50" }
          },
          [
            _c(
              "div",
              { staticClass: "card-body" },
              [_c("rasio-guru-murid-smp-mts-pie-03")],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8 mb-3" }, [
        _c(
          "div",
          {
            staticClass: "card h-100",
            staticStyle: { color: "#fff", "background-color": "#009688" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [_c("rasio-guru-murid-smp-mts-bar-01")],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 mb-3" }, [
        _c(
          "div",
          {
            staticClass: "card h-100",
            staticStyle: { color: "#fff", "background-color": "#FF9800" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [_c("rasio-guru-murid-smp-mts-pie-01")],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6 mb-3" }, [
        _c(
          "div",
          {
            staticClass: "card h-100",
            staticStyle: { color: "#fff", "background-color": "#F44336" }
          },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [_c("rasio-guru-murid-smp-mts-pie-02")],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 mb-3" }, [
        _c("div", { staticClass: "card text-white bg-dark h-100" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [_c("rasio-guru-murid-smp-mts-bar-02")],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", {
        staticClass: "fa fa-bar-chart",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v(
        "\n          Rasio Guru Murid SMP MTs Berdasarkan Wilayah\n        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", {
        staticClass: "fa fa-pie-chart",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v(
        "\n          Rasio Guru Murid SMP MTs Berdasarkan Wilayah\n        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", {
        staticClass: "fa fa-pie-chart",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v(
        "\n          Rasio Guru Murid SMP MTs Berdasarkan Kategori\n        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", {
        staticClass: "fa fa-bar-chart",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v(
        "\n          Rasio Guru Murid SMP MTs Berdasarkan Kategori\n        "
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e3d82726", module.exports)
  }
}

/***/ })

});