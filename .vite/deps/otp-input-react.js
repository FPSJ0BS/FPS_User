import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __commonJS
} from "./chunk-BYPFWIQ6.js";

// node_modules/otp-input-react/build/index.js
var require_build = __commonJS({
  "node_modules/otp-input-react/build/index.js"(exports, module) {
    !function(e, t) {
      if ("object" === typeof exports && "object" === typeof module)
        module.exports = t(require_react());
      else if ("function" === typeof define && define.amd)
        define(["react"], t);
      else {
        var n = "object" === typeof exports ? t(require_react()) : t(e.react);
        for (var r in n)
          ("object" === typeof exports ? exports : e)[r] = n[r];
      }
    }(window, function(e) {
      return function(e2) {
        var t = {};
        function n(r) {
          if (t[r])
            return t[r].exports;
          var u = t[r] = { i: r, l: false, exports: {} };
          return e2[r].call(u.exports, u, u.exports, n), u.l = true, u.exports;
        }
        return n.m = e2, n.c = t, n.d = function(e3, t2, r) {
          n.o(e3, t2) || Object.defineProperty(e3, t2, { enumerable: true, get: r });
        }, n.r = function(e3) {
          "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, n.t = function(e3, t2) {
          if (1 & t2 && (e3 = n(e3)), 8 & t2)
            return e3;
          if (4 & t2 && "object" === typeof e3 && e3 && e3.__esModule)
            return e3;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e3 }), 2 & t2 && "string" != typeof e3)
            for (var u in e3)
              n.d(r, u, (function(t3) {
                return e3[t3];
              }).bind(null, u));
          return r;
        }, n.n = function(e3) {
          var t2 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e3, t2) {
          return Object.prototype.hasOwnProperty.call(e3, t2);
        }, n.p = "/otp-input-react/", n(n.s = 1);
      }([function(t, n) {
        t.exports = e;
      }, function(e2, t, n) {
        e2.exports = n(2);
      }, function(e2, t, n) {
        "use strict";
        function r(e3, t2, n2) {
          return t2 in e3 ? Object.defineProperty(e3, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t2] = n2, e3;
        }
        function u(e3) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = null != arguments[t2] ? arguments[t2] : {}, u2 = Object.keys(n2);
            "function" === typeof Object.getOwnPropertySymbols && (u2 = u2.concat(Object.getOwnPropertySymbols(n2).filter(function(e4) {
              return Object.getOwnPropertyDescriptor(n2, e4).enumerable;
            }))), u2.forEach(function(t3) {
              r(e3, t3, n2[t3]);
            });
          }
          return e3;
        }
        function o(e3, t2) {
          if (null == e3)
            return {};
          var n2, r2, u2 = function(e4, t3) {
            if (null == e4)
              return {};
            var n3, r3, u3 = {}, o3 = Object.keys(e4);
            for (r3 = 0; r3 < o3.length; r3++)
              n3 = o3[r3], t3.indexOf(n3) >= 0 || (u3[n3] = e4[n3]);
            return u3;
          }(e3, t2);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            for (r2 = 0; r2 < o2.length; r2++)
              n2 = o2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n2) && (u2[n2] = e3[n2]);
          }
          return u2;
        }
        n.r(t);
        var a = n(0), c = n.n(a);
        function i(e3, t2) {
          return function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(e3) || function(e4, t3) {
            var n2 = [], r2 = true, u2 = false, o2 = void 0;
            try {
              for (var a2, c2 = e4[Symbol.iterator](); !(r2 = (a2 = c2.next()).done) && (n2.push(a2.value), !t3 || n2.length !== t3); r2 = true)
                ;
            } catch (i2) {
              u2 = true, o2 = i2;
            } finally {
              try {
                r2 || null == c2.return || c2.return();
              } finally {
                if (u2)
                  throw o2;
              }
            }
            return n2;
          }(e3, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        var l = function(e3) {
          var t2 = e3.maxTime, n2 = e3.onTimerComplete, r2 = e3.timeInterval, u2 = e3.onResendClick, o2 = Object(a.useRef)(), c2 = i(Object(a.useState)(t2), 2), l2 = c2[0], s2 = c2[1];
          Object(a.useEffect)(function() {
            return o2.current && 0 === l2 ? (clearTimeout(o2.current), n2 && n2()) : o2.current = setTimeout(function() {
              s2(function(e4) {
                return e4 - 1;
              });
            }, r2), function() {
              clearTimeout(o2.current);
            };
          }, [n2, l2, r2]);
          return { handelResendClick: function() {
            u2 && u2(0 === l2), s2(t2);
          }, remainingTime: l2 };
        };
        function s(e3) {
          var t2 = e3.renderTime, n2 = e3.renderButton, r2 = e3.style, a2 = e3.className, i2 = o(e3, ["renderTime", "renderButton", "style", "className"]), s2 = l(i2), f2 = s2.remainingTime, p2 = s2.handelResendClick;
          return c.a.createElement("div", { className: a2 || "", "data-testid": "otp-resend-root", style: u({ display: "flex", justifyContent: "space-between" }, r2) }, t2 ? t2(f2) : c.a.createElement("span", null, f2, " sec"), n2 ? n2({ disabled: 0 !== f2, onClick: p2, remainingTime: f2 }) : c.a.createElement("button", { disabled: 0 !== f2, onClick: p2, type: "button" }, "Resend OTP"));
        }
        s.defaultProps = { maxTime: 60, timeInterval: 1e3, style: {} };
        var f = s, p = { width: 32, height: 32, textAlign: "center", marginRight: 20 }, d = c.a.memo(function(e3) {
          var t2 = e3.focus, n2 = e3.autoFocus, r2 = e3.disabled, i2 = e3.value, l2 = e3.onInputFocus, s2 = e3.index, f2 = e3.secure, d2 = e3.inputStyles, y2 = e3.otpType, v2 = o(e3, ["focus", "autoFocus", "disabled", "value", "onInputFocus", "index", "secure", "inputStyles", "otpType"]), b2 = Object(a.useRef)(null), m = Object(a.useRef)(false);
          Object(a.useEffect)(function() {
            n2 && t2 && b2.current.focus();
          }, []), Object(a.useEffect)(function() {
            m.current && t2 && b2.current.focus(), m.current = true;
          }, [t2]);
          var h = "text";
          return f2 ? h = "password" : "number" === y2 && (h = "tel"), c.a.createElement("input", Object.assign({ style: u({}, p, d2), type: h, maxLength: "1", ref: b2, disabled: r2, onFocus: function(e4) {
            return l2(s2, e4);
          }, value: i2 || "" }, v2));
        }), y = function(e3) {
          var t2 = e3.autoFocus, n2 = e3.value, r2 = e3.otpType, u2 = e3.onChange, o2 = e3.OTPLength, c2 = i(Object(a.useState)(t2 ? 0 : -1), 2), l2 = c2[0], s2 = c2[1], f2 = function() {
            return n2 ? n2.toString().split("") : [];
          }, p2 = function(e4) {
            var t3 = e4.join("");
            u2(t3);
          }, d2 = function() {
            !function(e4) {
              var t3 = Math.max(Math.min(o2 - 1, e4), 0);
              s2(t3);
            }("next" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "next") ? l2 + 1 : l2 - 1);
          }, y2 = function(e4) {
            var t3 = i(e4, 1)[0], n3 = f2();
            n3[l2] = t3, p2(n3);
          }, v2 = function(e4) {
            switch (r2) {
              case "number":
                return !(e4.charCodeAt(0) > 57 || e4.charCodeAt(0) < 48);
              case "alpha":
                return !(e4.charCodeAt(0) > 122 || e4.charCodeAt(0) < 65);
              case "alphanumeric":
                return !(e4.charCodeAt(0) > 122 || e4.charCodeAt(0) < 48);
              default:
                return true;
            }
          };
          return { activeInput: l2, getOtpValue: f2, handleOnChange: function(e4) {
            v2(e4.target.value) && (y2(e4.target.value), d2("next"));
          }, handleOnKeyDown: function(e4) {
            switch (e4.key) {
              case "Backspace":
                e4.preventDefault(), y2(""), d2("prev");
                break;
              case "Delete":
                e4.preventDefault(), y2("");
                break;
              case "ArrowLeft":
                e4.preventDefault(), d2("prev");
                break;
              case "ArrowRight":
                e4.preventDefault(), d2("next");
            }
          }, handelOnInput: function(e4) {
            e4.target.value.length > 1 && (e4.preventDefault(), d2("next"));
          }, handleOnPaste: function(e4, t3) {
            e4.preventDefault();
            for (var n3 = f2(), r3 = e4.clipboardData.getData("text/plain").slice(0, o2 - l2).split(""), u3 = 0; u3 < o2; ++u3)
              u3 >= l2 && r3.length > 0 && (n3[u3] = r3.shift());
            for (var a2 = [n3.length], c3 = 0, i2 = 0; i2 < n3.length; ++i2)
              v2(n3[i2]) && (a2[c3] = n3[i2], c3++);
            p2(a2);
          }, onInputFocus: function(e4, t3) {
            s2(e4), t3.target.select();
          } };
        }, v = function(e3) {
          var t2 = e3.OTPLength, n2 = e3.disabled, r2 = e3.autoFocus, o2 = e3.value, i2 = void 0 === o2 ? "" : o2, l2 = e3.onChange, s2 = e3.otpType, f2 = e3.secure, p2 = e3.className, v2 = e3.inputClassName, b2 = e3.inputStyles, m = e3.style, h = e3.placeholder, g = y({ autoFocus: r2, value: i2, otpType: s2, onChange: l2, OTPLength: t2 }), O = g.activeInput, j = g.getOtpValue, x = g.handleOnChange, T = g.handleOnKeyDown, w = g.handelOnInput, C = g.handleOnPaste, P = g.onInputFocus, S = Object(a.useMemo)(function() {
            for (var e4 = j(), u2 = [], o3 = 0; o3 < t2; o3++)
              u2.push(c.a.createElement(d, { className: v2, inputStyles: b2, key: o3, focus: O === o3, value: e4[o3], onChange: x, onKeyDown: T, onInput: w, onPaste: C, onInputFocus: P, index: o3, disabled: n2, autoFocus: r2, secure: f2, "data-testid": "input", otpType: s2, placeholder: h && h[o3] }));
            return u2;
          }, [j, t2, v2, b2, O, x, T, w, C, P, n2, r2, f2, s2, h]);
          return c.a.createElement("div", { style: u({ display: "flex" }, m), className: "".concat(p2), "data-testid": "otp-input-root" }, S);
        };
        v.defaultProps = { className: "", inputClassName: "", OTPLength: 4, onChange: function() {
        }, disabled: false, secure: false, autoFocus: false, value: "", otpType: "any", inputStyles: {}, style: {}, placeholder: void 0 };
        var b = v;
        n.d(t, "ResendOTP", function() {
          return f;
        }), n.d(t, "default", function() {
          return b;
        });
      }]);
    });
  }
});
export default require_build();
//# sourceMappingURL=otp-input-react.js.map
