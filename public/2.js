webpackJsonp([2],{

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	data: function data() {
		return {
			formstate: {},
			model: {
				id: '',
				provinsi_f_nama: '',
				provinsi_f_ket: ''
			}
		};
	},

	created: function created() {},
	mounted: function mounted() {
		var ref = this;
		if (typeof this.$route.params.id !== 'undefined') {
			console.log('Ada ID');
			ref.isiform(ref);
		} else {
			console.log('Gak Ada ID');
		}
	},
	methods: {
		onSubmit: function onSubmit() {
			if (this.formstate.$invalid) {
				return;
			} else {
				if (typeof this.$route.params.id !== 'undefined') {
					axios.post('/provinsi/update/' + this.$route.params.id, {
						id: this.model.id,
						provinsi_f_nama: this.model.provinsi_f_nama,
						provinsi_f_ket: this.model.provinsi_f_ket
					}).then(function (response) {
						if (response.data.message === 'Success') {
							window.location.href = "/#/provinsi/home";
						} else {
							alert('Gagal Proses');
						}
					}).catch(function (error) {
						console.log(error);
					});
				} else {
					axios.post('/provinsi/create', {
						id: this.model.id,
						provinsi_f_nama: this.model.provinsi_f_nama,
						provinsi_f_ket: this.model.provinsi_f_ket
					}).then(function (response) {
						if (response.data.message === 'Success') {
							window.location.href = "/#/provinsi/home";
						} else {
							alert('Gagal Proses');
						}
					}).catch(function (error) {
						console.log(error);
					});
				}
			}
		},
		isiform: function isiform(ref) {
			axios.get('/provinsi/read/' + ref.$route.params.id).then(function (response) {
				if (response.data !== 'undefined') {
					ref.model.id = response.data.id, ref.model.provinsi_f_nama = response.data.provinsi_f_nama, ref.model.provinsi_f_ket = response.data.provinsi_f_ket;
				}
			});
		}
	}
});

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("h1", [_vm._v("Formulir Provinsi")]),
      _vm._v(" "),
      _c(
        "vue-form",
        {
          staticClass: "mb-3",
          attrs: { state: _vm.formstate, load: _vm.isiform },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.onSubmit($event)
            }
          }
        },
        [
          _c("input", { attrs: { type: "hidden", name: "post" } }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model.id,
                expression: "model.id"
              }
            ],
            attrs: { type: "hidden", name: "id" },
            domProps: { value: _vm.model.id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.model, "id", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm mb-2" },
            [
              _c(
                "validate",
                { attrs: { tag: "div" } },
                [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Nama Provinsi")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.model.provinsi_f_nama,
                        expression: "model.provinsi_f_nama"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      required: "",
                      name: "provinsi_f_nama",
                      placeholder: "Nama Provinsi"
                    },
                    domProps: { value: _vm.model.provinsi_f_nama },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.model,
                          "provinsi_f_nama",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("field-messages", { attrs: { name: "provinsi_f_nama" } }, [
                    _c("small", { staticClass: "form-text text-success" }, [
                      _vm._v("Looks good!")
                    ]),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "form-text text-danger",
                        attrs: { slot: "required" },
                        slot: "required"
                      },
                      [_vm._v("Name is a required field")]
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm mb-2" },
            [
              _c(
                "validate",
                { attrs: { tag: "div" } },
                [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Keterangan")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.model.provinsi_f_ket,
                        expression: "model.provinsi_f_ket"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "provinsi_f_ket",
                      placeholder: "Keterangan"
                    },
                    domProps: { value: _vm.model.provinsi_f_ket },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.model,
                          "provinsi_f_ket",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("field-messages", { attrs: { name: "provinsi_f_ket" } }, [
                    _c("small", { staticClass: "form-text text-success" }, [
                      _vm._v("Looks good!")
                    ]),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "form-text text-danger",
                        attrs: { slot: "required" },
                        slot: "required"
                      },
                      [_vm._v("Name is a required field")]
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto mb-2" }, [
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("Submit")]
            )
          ])
        ]
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
    return _c("div", { attrs: { id: "" } }, [
      _c(
        "div",
        { staticClass: "alert alert-info mb-5", attrs: { role: "alert" } },
        [_vm._v("\n        Data Successfully Process\n  ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04a4f0a7", module.exports)
  }
}

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1235)
/* template */
var __vue_template__ = __webpack_require__(1236)
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
Component.options.__file = "resources/assets/js/components/views/provinsi/form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04a4f0a7", Component.options)
  } else {
    hotAPI.reload("data-v-04a4f0a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});