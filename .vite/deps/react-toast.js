import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __toESM
} from "./chunk-BYPFWIQ6.js";

// node_modules/react-toast/dist/react-toast.esm.js
var import_react = __toESM(require_react());
var Success = function Success2() {
  return import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, import_react.default.createElement("g", {
    transform: "translate(.077 .077)"
  }, import_react.default.createElement("g", null, import_react.default.createElement("path", {
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M3.719 7.884L6.235 10.4l3.032-3.032 2.774-2.774"
  }))));
};
var Success$1 = import_react.default.memo(Success);
var Close = function Close2() {
  return import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, import_react.default.createElement("g", {
    transform: "translate(.077 .077)"
  }, import_react.default.createElement("g", null, import_react.default.createElement("path", {
    fill: "#fff",
    d: "M10.915 9.98l2.853-2.846a.666.666 0 00-.942-.942L9.979 9.044 7.133 6.191a.666.666 0 00-.942.942L9.044 9.98 6.19 12.826a.666.666 0 10.942.942l2.846-2.853 2.846 2.853a.666.666 0 10.942-.942z",
    transform: "translate(-2.017 -2.018)"
  }))));
};
var Close$1 = import_react.default.memo(Close);
var Info = function Info2() {
  return import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, import_react.default.createElement("g", {
    transform: "translate(-1533 -39)"
  }, import_react.default.createElement("g", {
    fill: "#fff",
    transform: "translate(-.358 -1.639)"
  }, import_react.default.createElement("circle", {
    cx: "1.134",
    cy: "1.134",
    r: "1.134",
    transform: "rotate(180 771.246 22.823)"
  }), import_react.default.createElement("path", {
    d: "M1 0a1 1 0 00-1 1v5a1 1 0 002 0V1a1 1 0 00-1-1z",
    transform: "rotate(180 771.17 26.882)"
  }))));
};
var Info$1 = import_react.default.memo(Info);
var Warning = function Warning2() {
  return import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, import_react.default.createElement("g", {
    transform: "rotate(180 774.5 27.5)"
  }, import_react.default.createElement("g", {
    fill: "#fff",
    transform: "translate(-.358 -1.639)"
  }, import_react.default.createElement("circle", {
    cx: "1.134",
    cy: "1.134",
    r: "1.134",
    transform: "rotate(180 771.246 22.823)"
  }), import_react.default.createElement("path", {
    d: "M1 0a1 1 0 00-1 1v5a1 1 0 002 0V1a1 1 0 00-1-1z",
    transform: "rotate(180 771.17 26.882)"
  }))));
};
var Warning$1 = import_react.default.memo(Warning);
var toastIcon = function toastIcon2(_ref) {
  var type = _ref.type;
  switch (type) {
    case "error":
      return import_react.default.createElement(Close$1, null);
    case "info":
      return import_react.default.createElement(Info$1, null);
    case "warning":
      return import_react.default.createElement(Warning$1, null);
    default:
      return import_react.default.createElement(Success$1, null);
  }
};
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = ":root {\n  --toast-default: #8b1dd0;\n  --toast-success: #27d0b2;\n  --toast-error: #c52965;\n  --toast-info: #004eff;\n  --toast-warning: #d0761d;\n  --toast-black: #221d26;\n  --toast-white: #ffffff;\n}\n\n.toast {\n  padding: 15px;\n  min-width: 300px;\n  max-width: 400px;\n  color: var(--toast-white);\n  display: flex;\n  align-items: flex-start;\n  line-height: 1.6;\n  font-size: 14px;\n  border-radius: 15px;\n}\n\n.toast.default {\n  background-color: var(--toast-default);\n}\n\n.toast.success {\n  background-color: var(--toast-success);\n}\n\n.toast.error {\n  background-color: var(--toast-error);\n}\n\n.toast.info {\n  background-color: var(--toast-info);\n}\n\n.toast.warning {\n  background-color: var(--toast-warning);\n}\n\n.toast .content {\n  flex: 1;\n}\n\n.toast .content p {\n  padding: 0;\n  margin: 0;\n}\n\n.toast .close {\n  margin-left: 10px;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0);\n  transition: all 100ms ease-in-out;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.toast .close:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.toast .icon {\n  margin-right: 10px;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n}\n";
styleInject(css_248z);
var Toast = function Toast2(_ref) {
  var id = _ref.id, content = _ref.content, type = _ref.type, _ref$config = _ref.config;
  _ref$config = _ref$config === void 0 ? {} : _ref$config;
  var backgroundColor = _ref$config.backgroundColor, color = _ref$config.color, onClose = _ref.onClose;
  return import_react.default.createElement("div", {
    className: "toast " + type,
    style: {
      backgroundColor
    }
  }, import_react.default.createElement("div", {
    className: "icon"
  }, toastIcon({
    type
  })), import_react.default.createElement("div", {
    className: "content"
  }, import_react.default.createElement("p", {
    style: {
      color
    }
  }, content)), import_react.default.createElement("div", {
    className: "close",
    onClick: function onClick() {
      return onClose(id);
    }
  }, import_react.default.createElement(Close$1, null)));
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var initialState = {
  toasts: []
};
var toastReducer = function toastReducer2(state, action) {
  switch (action.type) {
    case "ADD":
      return _extends({}, state, {
        toasts: [].concat(state.toasts, [action.toast])
      });
    case "REMOVE": {
      return _extends({}, state, {
        toasts: [].concat(state.toasts.filter(function(toast3) {
          return toast3.id !== action.id;
        }))
      });
    }
    case "REMOVE_ALL":
      return _extends({}, state, {
        toasts: []
      });
    default:
      throw new Error();
  }
};
var useToast = function useToast2() {
  var _useReducer = (0, import_react.useReducer)(toastReducer, initialState), state = _useReducer[0], dispatch = _useReducer[1];
  return _extends({}, state, {
    dispatch
  });
};
var emitter = /* @__PURE__ */ function() {
  var events = /* @__PURE__ */ new Map();
  return {
    /**
     * Register an event handler for the given event name.
     * @param {Events} event Type of event to listen for
     * @param {Handler} callback Handler to call in response to given event
     */
    on: function on(event, callback) {
      if (!events.has(event))
        events.set(event, []);
      events.get(event).push(callback);
    },
    /**
     * Invoke all handlers for the given event name.
     * @param {Events} event The event type to invoke
     * @param {Any} args Any value passed to each handler
     */
    emit: function emit(event, args) {
      if (!events.has(event))
        return;
      events.get(event).forEach(function(callback) {
        return callback(args);
      });
    },
    /** Remove all events. */
    off: function off() {
      events.clear();
    }
  };
}();
var toaster = function toaster2(_ref) {
  var content = _ref.content, type = _ref.type, config = _ref.config;
  return {
    id: Math.random().toString(36).substr(2, 10),
    content,
    type,
    config
  };
};
var Events;
(function(Events2) {
  Events2["SHOW"] = "show";
  Events2["HIDE"] = "hide";
  Events2["HIDE_ALL"] = "hideAll";
})(Events || (Events = {}));
var toastDispatcher = function toastDispatcher2(_ref) {
  var dispatch = _ref.dispatch, delay = _ref.delay;
  emitter.on(Events.SHOW, function(toast3) {
    dispatch({
      type: "ADD",
      toast: toast3
    });
    if (delay)
      setTimeout(function() {
        dispatch({
          type: "REMOVE",
          id: toast3.id
        });
      }, delay);
  });
  emitter.on(Events.HIDE, function(id) {
    return dispatch({
      type: "REMOVE",
      id
    });
  });
  emitter.on(Events.HIDE_ALL, function() {
    return dispatch({
      type: "REMOVE_ALL"
    });
  });
};
var css_248z$1 = ".toastContainer {\n  overflow: hidden;\n  overflow-x: auto;\n  display: grid;\n  grid-gap: 20px;\n  position: fixed;\n  user-select: none;\n}\n\n.top-left {\n  top: 20px;\n  left: 20px;\n}\n\n.top-center {\n  top: 20px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\n.top-right {\n  top: 20px;\n  right: 20px;\n}\n\n.bottom-left {\n  bottom: 20px;\n  left: 20px;\n}\n\n.bottom-center {\n  bottom: 20px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n\n.bottom-right {\n  bottom: 20px;\n  right: 20px;\n}\n";
styleInject(css_248z$1);
var ToastContainer = function ToastContainer2(_ref) {
  var _ref$position = _ref.position, position = _ref$position === void 0 ? "bottom-left" : _ref$position, delay = _ref.delay;
  var _useToast = useToast(), toasts = _useToast.toasts, dispatch = _useToast.dispatch;
  (0, import_react.useEffect)(function() {
    toastDispatcher({
      dispatch,
      delay
    });
    return function() {
      emitter.off();
    };
  }, [dispatch, delay]);
  var onClose = (0, import_react.useCallback)(function(id) {
    emitter.emit(Events.HIDE, id);
  }, []);
  return import_react.default.createElement("div", {
    className: "toastContainer " + position
  }, toasts.map(function(toast3) {
    return import_react.default.createElement(Toast, Object.assign({
      key: toast3.id
    }, toast3, {
      onClose
    }));
  }));
};
var applyToast = function applyToast2(_ref) {
  var toast3 = _extends({}, _ref);
  return emitter.emit(Events.SHOW, toaster(_extends({}, toast3)));
};
var toast = function toast2(content, config) {
  return applyToast({
    content,
    type: "default",
    config
  });
};
toast.success = function(content, config) {
  return applyToast({
    content,
    type: "success",
    config
  });
};
toast.error = function(content, config) {
  return applyToast({
    content,
    type: "error",
    config
  });
};
toast.info = function(content, config) {
  return applyToast({
    content,
    type: "info",
    config
  });
};
toast.warn = function(content, config) {
  return applyToast({
    content,
    type: "warning",
    config
  });
};
toast.hideAll = function() {
  return emitter.emit(Events.HIDE_ALL);
};
export {
  ToastContainer,
  toast
};
//# sourceMappingURL=react-toast.js.map
