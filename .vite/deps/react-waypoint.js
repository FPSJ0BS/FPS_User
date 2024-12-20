import {
  _inheritsLoose
} from "./chunk-GKZHCD46.js";
import {
  require_prop_types
} from "./chunk-MTRWRJFG.js";
import "./chunk-5OHMTM4B.js";
import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __commonJS,
  __toESM
} from "./chunk-BYPFWIQ6.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef2(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef2;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/consolidated-events/lib/index.esm.js
var CAN_USE_DOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }
  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }
  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      // eslint-disable-next-line getter-return
      get: /* @__PURE__ */ function() {
        function get() {
          supportsPassiveOption = true;
        }
        return get;
      }()
    });
    var noop = function noop2() {
    };
    window.addEventListener("testPassiveEventSupport", noop, opts);
    window.removeEventListener("testPassiveEventSupport", noop, opts);
  } catch (e) {
  }
  return supportsPassiveOption;
}
var memoized = void 0;
function canUsePassiveEventListeners() {
  if (memoized === void 0) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}
function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return void 0;
  }
  if (!canUsePassiveEventListeners()) {
    return !!eventOptions.capture;
  }
  return eventOptions;
}
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }
  if (normalizedEventOptions === true) {
    return 100;
  }
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}
function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}
function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}
TargetEventHandlers.prototype.getEventHandlers = /* @__PURE__ */ function() {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + " " + String(eventOptionsKey(options));
    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: void 0
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }
    return this.events[key];
  }
  return getEventHandlers;
}();
TargetEventHandlers.prototype.handleEvent = /* @__PURE__ */ function() {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function(handler) {
      if (handler) {
        handler(event);
      }
    });
  }
  return handleEvent;
}();
TargetEventHandlers.prototype.add = /* @__PURE__ */ function() {
  function add(eventName, listener, options) {
    var _this = this;
    var eventHandlers = this.getEventHandlers(eventName, options);
    ensureCanMutateNextEventHandlers(eventHandlers);
    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);
      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }
    eventHandlers.nextHandlers.push(listener);
    var isSubscribed = true;
    var unsubscribe = /* @__PURE__ */ function() {
      function unsubscribe2() {
        if (!isSubscribed) {
          return;
        }
        isSubscribed = false;
        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);
        if (eventHandlers.nextHandlers.length === 0) {
          if (_this.target) {
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }
          eventHandlers.handleEvent = void 0;
        }
      }
      return unsubscribe2;
    }();
    return unsubscribe;
  }
  return add;
}();
var EVENT_HANDLERS_KEY = "__consolidated_events_handlers__";
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}

// node_modules/react-waypoint/es/index.js
var import_prop_types = __toESM(require_prop_types());
var import_react = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
function parseOffsetAsPercentage(str) {
  if (str.slice(-1) === "%") {
    return parseFloat(str.slice(0, -1)) / 100;
  }
  return void 0;
}
function parseOffsetAsPixels(str) {
  if (!isNaN(parseFloat(str)) && isFinite(str)) {
    return parseFloat(str);
  }
  if (str.slice(-2) === "px") {
    return parseFloat(str.slice(0, -2));
  }
  return void 0;
}
function computeOffsetPixels(offset, contextHeight) {
  var pixelOffset = parseOffsetAsPixels(offset);
  if (typeof pixelOffset === "number") {
    return pixelOffset;
  }
  var percentOffset = parseOffsetAsPercentage(offset);
  if (typeof percentOffset === "number") {
    return percentOffset * contextHeight;
  }
  return void 0;
}
var ABOVE = "above";
var INSIDE = "inside";
var BELOW = "below";
var INVISIBLE = "invisible";
function debugLog() {
  if (true) {
    var _console;
    (_console = console).log.apply(_console, arguments);
  }
}
function isDOMElement(Component) {
  return typeof Component.type === "string";
}
var errorMessage = "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.";
function ensureRefIsProvidedByChild(children, ref) {
  if (children && !isDOMElement(children) && !ref) {
    throw new Error(errorMessage);
  }
}
function getCurrentPosition(bounds) {
  if (bounds.viewportBottom - bounds.viewportTop === 0) {
    return INVISIBLE;
  }
  if (bounds.viewportTop <= bounds.waypointTop && bounds.waypointTop <= bounds.viewportBottom) {
    return INSIDE;
  }
  if (bounds.viewportTop <= bounds.waypointBottom && bounds.waypointBottom <= bounds.viewportBottom) {
    return INSIDE;
  }
  if (bounds.waypointTop <= bounds.viewportTop && bounds.viewportBottom <= bounds.waypointBottom) {
    return INSIDE;
  }
  if (bounds.viewportBottom < bounds.waypointTop) {
    return BELOW;
  }
  if (bounds.waypointTop < bounds.viewportTop) {
    return ABOVE;
  }
  return INVISIBLE;
}
var timeout;
var timeoutQueue = [];
function onNextTick(cb) {
  timeoutQueue.push(cb);
  if (!timeout) {
    timeout = setTimeout(function() {
      timeout = null;
      var item;
      while (item = timeoutQueue.shift()) {
        item();
      }
    }, 0);
  }
  var isSubscribed = true;
  return function unsubscribe() {
    if (!isSubscribed) {
      return;
    }
    isSubscribed = false;
    var index = timeoutQueue.indexOf(cb);
    if (index === -1) {
      return;
    }
    timeoutQueue.splice(index, 1);
    if (!timeoutQueue.length && timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
}
function resolveScrollableAncestorProp(scrollableAncestor) {
  if (scrollableAncestor === "window") {
    return global.window;
  }
  return scrollableAncestor;
}
var hasWindow = typeof window !== "undefined";
var defaultProps = {
  debug: false,
  scrollableAncestor: void 0,
  children: void 0,
  topOffset: "0px",
  bottomOffset: "0px",
  horizontal: false,
  onEnter: function onEnter() {
  },
  onLeave: function onLeave() {
  },
  onPositionChange: function onPositionChange() {
  },
  fireOnRapidScroll: true
};
var Waypoint = function(_React$PureComponent) {
  _inheritsLoose(Waypoint2, _React$PureComponent);
  function Waypoint2(props) {
    var _this;
    _this = _React$PureComponent.call(this, props) || this;
    _this.refElement = function(e) {
      _this._ref = e;
    };
    return _this;
  }
  var _proto = Waypoint2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    if (!hasWindow) {
      return;
    }
    this.cancelOnNextTick = onNextTick(function() {
      _this2.cancelOnNextTick = null;
      var _this2$props = _this2.props, children = _this2$props.children, debug = _this2$props.debug;
      ensureRefIsProvidedByChild(children, _this2._ref);
      _this2._handleScroll = _this2._handleScroll.bind(_this2);
      _this2.scrollableAncestor = _this2._findScrollableAncestor();
      if (debug) {
        debugLog("scrollableAncestor", _this2.scrollableAncestor);
      }
      _this2.scrollEventListenerUnsubscribe = addEventListener(_this2.scrollableAncestor, "scroll", _this2._handleScroll, {
        passive: true
      });
      _this2.resizeEventListenerUnsubscribe = addEventListener(window, "resize", _this2._handleScroll, {
        passive: true
      });
      _this2._handleScroll(null);
    });
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this3 = this;
    if (!hasWindow) {
      return;
    }
    if (!this.scrollableAncestor) {
      return;
    }
    if (this.cancelOnNextTick) {
      return;
    }
    this.cancelOnNextTick = onNextTick(function() {
      _this3.cancelOnNextTick = null;
      _this3._handleScroll(null);
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!hasWindow) {
      return;
    }
    if (this.scrollEventListenerUnsubscribe) {
      this.scrollEventListenerUnsubscribe();
    }
    if (this.resizeEventListenerUnsubscribe) {
      this.resizeEventListenerUnsubscribe();
    }
    if (this.cancelOnNextTick) {
      this.cancelOnNextTick();
    }
  };
  _proto._findScrollableAncestor = function _findScrollableAncestor() {
    var _this$props = this.props, horizontal = _this$props.horizontal, scrollableAncestor = _this$props.scrollableAncestor;
    if (scrollableAncestor) {
      return resolveScrollableAncestorProp(scrollableAncestor);
    }
    var node = this._ref;
    while (node.parentNode) {
      node = node.parentNode;
      if (node === document.body) {
        return window;
      }
      var style = window.getComputedStyle(node);
      var overflowDirec = horizontal ? style.getPropertyValue("overflow-x") : style.getPropertyValue("overflow-y");
      var overflow = overflowDirec || style.getPropertyValue("overflow");
      if (overflow === "auto" || overflow === "scroll" || overflow === "overlay") {
        return node;
      }
    }
    return window;
  };
  _proto._handleScroll = function _handleScroll(event) {
    if (!this._ref) {
      return;
    }
    var bounds = this._getBounds();
    var currentPosition = getCurrentPosition(bounds);
    var previousPosition = this._previousPosition;
    var _this$props2 = this.props, debug = _this$props2.debug, onPositionChange2 = _this$props2.onPositionChange, onEnter2 = _this$props2.onEnter, onLeave2 = _this$props2.onLeave, fireOnRapidScroll = _this$props2.fireOnRapidScroll;
    if (debug) {
      debugLog("currentPosition", currentPosition);
      debugLog("previousPosition", previousPosition);
    }
    this._previousPosition = currentPosition;
    if (previousPosition === currentPosition) {
      return;
    }
    var callbackArg = {
      currentPosition,
      previousPosition,
      event,
      waypointTop: bounds.waypointTop,
      waypointBottom: bounds.waypointBottom,
      viewportTop: bounds.viewportTop,
      viewportBottom: bounds.viewportBottom
    };
    onPositionChange2.call(this, callbackArg);
    if (currentPosition === INSIDE) {
      onEnter2.call(this, callbackArg);
    } else if (previousPosition === INSIDE) {
      onLeave2.call(this, callbackArg);
    }
    var isRapidScrollDown = previousPosition === BELOW && currentPosition === ABOVE;
    var isRapidScrollUp = previousPosition === ABOVE && currentPosition === BELOW;
    if (fireOnRapidScroll && (isRapidScrollDown || isRapidScrollUp)) {
      onEnter2.call(this, {
        currentPosition: INSIDE,
        previousPosition,
        event,
        waypointTop: bounds.waypointTop,
        waypointBottom: bounds.waypointBottom,
        viewportTop: bounds.viewportTop,
        viewportBottom: bounds.viewportBottom
      });
      onLeave2.call(this, {
        currentPosition,
        previousPosition: INSIDE,
        event,
        waypointTop: bounds.waypointTop,
        waypointBottom: bounds.waypointBottom,
        viewportTop: bounds.viewportTop,
        viewportBottom: bounds.viewportBottom
      });
    }
  };
  _proto._getBounds = function _getBounds() {
    var _this$props3 = this.props, horizontal = _this$props3.horizontal, debug = _this$props3.debug;
    var _this$_ref$getBoundin = this._ref.getBoundingClientRect(), left = _this$_ref$getBoundin.left, top = _this$_ref$getBoundin.top, right = _this$_ref$getBoundin.right, bottom = _this$_ref$getBoundin.bottom;
    var waypointTop = horizontal ? left : top;
    var waypointBottom = horizontal ? right : bottom;
    var contextHeight;
    var contextScrollTop;
    if (this.scrollableAncestor === window) {
      contextHeight = horizontal ? window.innerWidth : window.innerHeight;
      contextScrollTop = 0;
    } else {
      contextHeight = horizontal ? this.scrollableAncestor.offsetWidth : this.scrollableAncestor.offsetHeight;
      contextScrollTop = horizontal ? this.scrollableAncestor.getBoundingClientRect().left : this.scrollableAncestor.getBoundingClientRect().top;
    }
    if (debug) {
      debugLog("waypoint top", waypointTop);
      debugLog("waypoint bottom", waypointBottom);
      debugLog("scrollableAncestor height", contextHeight);
      debugLog("scrollableAncestor scrollTop", contextScrollTop);
    }
    var _this$props4 = this.props, bottomOffset = _this$props4.bottomOffset, topOffset = _this$props4.topOffset;
    var topOffsetPx = computeOffsetPixels(topOffset, contextHeight);
    var bottomOffsetPx = computeOffsetPixels(bottomOffset, contextHeight);
    var contextBottom = contextScrollTop + contextHeight;
    return {
      waypointTop,
      waypointBottom,
      viewportTop: contextScrollTop + topOffsetPx,
      viewportBottom: contextBottom - bottomOffsetPx
    };
  };
  _proto.render = function render() {
    var _this4 = this;
    var children = this.props.children;
    if (!children) {
      return import_react.default.createElement("span", {
        ref: this.refElement,
        style: {
          fontSize: 0
        }
      });
    }
    if (isDOMElement(children) || (0, import_react_is.isForwardRef)(children)) {
      var ref = function ref2(node) {
        _this4.refElement(node);
        if (children.ref) {
          if (typeof children.ref === "function") {
            children.ref(node);
          } else {
            children.ref.current = node;
          }
        }
      };
      return import_react.default.cloneElement(children, {
        ref
      });
    }
    return import_react.default.cloneElement(children, {
      innerRef: this.refElement
    });
  };
  return Waypoint2;
}(import_react.default.PureComponent);
if (true) {
  Waypoint.propTypes = {
    children: import_prop_types.default.element,
    debug: import_prop_types.default.bool,
    onEnter: import_prop_types.default.func,
    onLeave: import_prop_types.default.func,
    onPositionChange: import_prop_types.default.func,
    fireOnRapidScroll: import_prop_types.default.bool,
    // eslint-disable-next-line react/forbid-prop-types
    scrollableAncestor: import_prop_types.default.any,
    horizontal: import_prop_types.default.bool,
    // `topOffset` can either be a number, in which case its a distance from the
    // top of the container in pixels, or a string value. Valid string values are
    // of the form "20px", which is parsed as pixels, or "20%", which is parsed
    // as a percentage of the height of the containing element.
    // For instance, if you pass "-20%", and the containing element is 100px tall,
    // then the waypoint will be triggered when it has been scrolled 20px beyond
    // the top of the containing element.
    topOffset: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
    // `bottomOffset` can either be a number, in which case its a distance from the
    // bottom of the container in pixels, or a string value. Valid string values are
    // of the form "20px", which is parsed as pixels, or "20%", which is parsed
    // as a percentage of the height of the containing element.
    // For instance, if you pass "20%", and the containing element is 100px tall,
    // then the waypoint will be triggered when it has been scrolled 20px beyond
    // the bottom of the containing element.
    // Similar to `topOffset`, but for the bottom of the container.
    bottomOffset: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
  };
}
Waypoint.above = ABOVE;
Waypoint.below = BELOW;
Waypoint.inside = INSIDE;
Waypoint.invisible = INVISIBLE;
Waypoint.defaultProps = defaultProps;
Waypoint.displayName = "Waypoint";
export {
  Waypoint
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-waypoint.js.map
