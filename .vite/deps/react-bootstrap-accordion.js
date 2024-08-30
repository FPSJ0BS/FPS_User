import {
  require_jsx_runtime
} from "./chunk-5GL4TLVB.js";
import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __commonJS
} from "./chunk-BYPFWIQ6.js";

// node_modules/react-bootstrap-accordion/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-bootstrap-accordion/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var e = require_jsx_runtime();
    var i = require_react();
    var r = function() {
      return (r = Object.assign || function(e2) {
        for (var i2, r2 = 1, t2 = arguments.length; r2 < t2; r2++)
          for (var o in i2 = arguments[r2])
            Object.prototype.hasOwnProperty.call(i2, o) && (e2[o] = i2[o]);
        return e2;
      }).apply(this, arguments);
    };
    function t(e2, i2) {
      switch (i2.type) {
        case "collapse":
          return { collapse: !e2.collapse };
        case "show":
          return { collapse: true };
        default:
          return e2;
      }
    }
    exports.Accordion = function(o) {
      var n, a = o.title, s = void 0 === a ? "Accordion Title" : a, c = o.show, l = void 0 !== c && c, d = o.children, u = i.useRef(null), p = i.useReducer(t, { collapse: l }), h = p[0].collapse, v = p[1], m = i.useRef(window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36));
      return i.useEffect(function() {
        l && v({ type: "show" });
      }, [l]), e.jsxs("div", r({ className: "accordion-item" }, { children: [e.jsx("h2", r({ className: "accordion-header", id: "heading-" + m.current }, { children: e.jsx("button", r({ className: "accordion-button" + (h ? "" : " collapsed"), type: "button", "aria-expanded": h, "aria-controls": "collapse-" + m.current, onClick: function() {
        return v({ type: "collapse" });
      } }, { children: s }), void 0) }), void 0), e.jsx("div", r({ id: "collapse-" + m.current, "aria-labelledby": "heading-" + m.current, className: "accordion-collapse", style: h ? { height: null === (n = u.current) || void 0 === n ? void 0 : n.clientHeight, transition: "height 0.2s ease", overflow: "hidden" } : { height: 0, transition: "height 0.2s ease", overflow: "hidden" } }, { children: e.jsx("div", r({ className: "accordion-body", ref: u }, { children: d || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem illum odit similique quibusdam ea eaque pariatur laboriosam repellendus voluptas, aspernatur in id tenetur eligendi nobis quam saepe cumque enim esse." }), void 0) }), void 0)] }), void 0);
    };
  }
});
export default require_dist();
//# sourceMappingURL=react-bootstrap-accordion.js.map
