import {
  require_classnames
} from "./chunk-OHPPD2GF.js";
import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addQuarters,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarYears,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getDate,
  getDay,
  getHours,
  getISOWeek,
  getMinutes,
  getMonth,
  getQuarter,
  getSeconds,
  getTime,
  getYear,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isSameDay,
  isSameMonth,
  isSameQuarter,
  isSameYear,
  isValid,
  isWithinInterval,
  longFormatters,
  max,
  min,
  parse,
  parseISO,
  set,
  setHours,
  setMinutes,
  setMonth,
  setQuarter,
  setSeconds,
  setYear,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subQuarters,
  subWeeks,
  subYears,
  toDate
} from "./chunk-VQC3723P.js";
import {
  require_prop_types
} from "./chunk-MTRWRJFG.js";
import {
  require_react_dom
} from "./chunk-HXWQDWNK.js";
import "./chunk-5OHMTM4B.js";
import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __toESM
} from "./chunk-BYPFWIQ6.js";

// node_modules/react-datepicker/dist/es/index.js
var import_react4 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_classnames = __toESM(require_classnames());

// node_modules/react-onclickoutside/dist/react-onclickoutside.es.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  }
  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }
  return current.classList.contains(ignoreClass);
}
function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  }
  while (current.parentNode || current.host) {
    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }
    current = current.parentNode || current.host;
  }
  return current;
}
function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}
var testPassiveEventSupport = function testPassiveEventSupport2() {
  if (typeof window === "undefined" || typeof window.addEventListener !== "function") {
    return;
  }
  var passive = false;
  var options = Object.defineProperty({}, "passive", {
    get: function get() {
      passive = true;
    }
  });
  var noop = function noop2() {
  };
  window.addEventListener("testPassiveEventSupport", noop, options);
  window.removeEventListener("testPassiveEventSupport", noop, options);
  return passive;
};
function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }
  return function() {
    return ++seed;
  };
}
var uid = autoInc();
var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ["touchstart", "touchmove"];
var IGNORE_CLASS_NAME = "ignore-react-onclickoutside";
function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = {};
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;
  if (isTouchEvent && passiveEventSupport) {
    handlerOptions.passive = !instance.props.preventDefault;
  }
  return handlerOptions;
}
function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;
  var componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  return _temp = _class = function(_Component) {
    _inheritsLoose(onClickOutside, _Component);
    function onClickOutside(props) {
      var _this;
      _this = _Component.call(this, props) || this;
      _this.__outsideClickHandler = function(event) {
        if (typeof _this.__clickOutsideHandlerProp === "function") {
          _this.__clickOutsideHandlerProp(event);
          return;
        }
        var instance = _this.getInstance();
        if (typeof instance.props.handleClickOutside === "function") {
          instance.props.handleClickOutside(event);
          return;
        }
        if (typeof instance.handleClickOutside === "function") {
          instance.handleClickOutside(event);
          return;
        }
        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };
      _this.__getComponentNode = function() {
        var instance = _this.getInstance();
        if (config && typeof config.setClickOutsideRef === "function") {
          return config.setClickOutsideRef()(instance);
        }
        if (typeof instance.setClickOutsideRef === "function") {
          return instance.setClickOutsideRef();
        }
        return (0, import_react_dom.findDOMNode)(instance);
      };
      _this.enableOnClickOutside = function() {
        if (typeof document === "undefined" || enabledInstances[_this._uid]) {
          return;
        }
        if (typeof passiveEventSupport === "undefined") {
          passiveEventSupport = testPassiveEventSupport();
        }
        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;
        if (!events.forEach) {
          events = [events];
        }
        handlersMap[_this._uid] = function(event) {
          if (_this.componentNode === null)
            return;
          if (_this.props.preventDefault) {
            event.preventDefault();
          }
          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }
          if (_this.props.excludeScrollbar && clickedScrollbar(event))
            return;
          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;
          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }
          _this.__outsideClickHandler(event);
        };
        events.forEach(function(eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
        });
      };
      _this.disableOnClickOutside = function() {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];
        if (fn && typeof document !== "undefined") {
          var events = _this.props.eventTypes;
          if (!events.forEach) {
            events = [events];
          }
          events.forEach(function(eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
          });
          delete handlersMap[_this._uid];
        }
      };
      _this.getRef = function(ref) {
        return _this.instanceRef = ref;
      };
      _this._uid = uid();
      return _this;
    }
    var _proto = onClickOutside.prototype;
    _proto.getInstance = function getInstance() {
      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
        return this;
      }
      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };
    _proto.componentDidMount = function componentDidMount() {
      if (typeof document === "undefined" || !document.createElement) {
        return;
      }
      var instance = this.getInstance();
      if (config && typeof config.handleClickOutside === "function") {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
        if (typeof this.__clickOutsideHandlerProp !== "function") {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }
      this.componentNode = this.__getComponentNode();
      if (this.props.disableOnClickOutside)
        return;
      this.enableOnClickOutside();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    _proto.render = function render() {
      var _this$props = this.props;
      _this$props.excludeScrollbar;
      var props = _objectWithoutPropertiesLoose(_this$props, ["excludeScrollbar"]);
      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }
      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return (0, import_react.createElement)(WrappedComponent, props);
    };
    return onClickOutside;
  }(import_react.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ["mousedown", "touchstart"],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function() {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}
var react_onclickoutside_es_default = onClickOutsideHOC;

// node_modules/react-datepicker/dist/es/index.js
var import_react_dom5 = __toESM(require_react_dom());

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max2(start, min2(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min2(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min2(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max3);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max3 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

// node_modules/@floating-ui/react-dom/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e2) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var flip2 = flip;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var arrow3 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var import_react_dom4 = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React2.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var useInsertionEffect = React2["useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React2.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React2.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  const isDisabledIndex = disabledIndices ? (index4) => disabledIndices.includes(index4) : (index4) => {
    const element = list[index4];
    return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
  };
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabledIndex(index3));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset2 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset2 : offset2 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices,
          decrement: true
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1)
    return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      return firstCellIndex + sizes[index3].width - 1;
    case "bl":
      return firstCellIndex + (sizes[index3].height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;
function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React2.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(_ref) {
  let {
    children,
    elementsRef,
    labelsRef
  } = _ref;
  const [map, setMap] = React2.useState(() => /* @__PURE__ */ new Map());
  const register = React2.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React2.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React2.createElement(FloatingListContext.Provider, {
    value: React2.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(_temp) {
  let {
    label
  } = _temp === void 0 ? {} : _temp;
  const [index$1, setIndex] = React2.useState(null);
  const componentRef = React2.useRef(null);
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React2.useContext(FloatingListContext);
  const ref = React2.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React2.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React2.cloneElement(render, computedProps);
  }
  return React2.createElement("div", computedProps);
}
var CompositeContext = React2.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React2.forwardRef(function Composite2(_ref, forwardedRef) {
  let {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices = [],
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...props
  } = _ref;
  const [internalActiveIndex, internalSetActiveIndex] = React2.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React2.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React2.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key))
      return;
    let nextIndex = activeIndex;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !disabledIndices.includes(index3));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !(disabledIndices != null && disabledIndices.includes(index3)) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices, void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...props,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e2) {
      props.onKeyDown == null || props.onKeyDown(e2);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e2);
      handleKeyDown(e2);
    }
  };
  return React2.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React2.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React2.forwardRef(function CompositeItem2(_ref2, forwardedRef) {
  let {
    render,
    ...props
  } = _ref2;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React2.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...props,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e2) {
      props.onFocus == null || props.onFocus(e2);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e2);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React2.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React2.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React2["useId".toString()];
var useId = useReactId || useFloatingId;
var FloatingArrow = React2.forwardRef(function FloatingArrow2(_ref, ref) {
  let {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = _ref;
  if (true) {
    if (!ref) {
      console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component.");
    }
  }
  const clipPathId = useId();
  if (!floating) {
    return null;
  }
  strokeWidth *= 2;
  const halfStrokeWidth = strokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isRTL2 = platform.isRTL(floating);
  const isCustomShape = !!d;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? staticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? staticOffset || arrow4.y : "";
  const dValue = d || // biome-ignore lint/style/useTemplate: readability
  "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React2.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + strokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + strokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), strokeWidth > 0 && React2.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: strokeWidth + (d ? 0 : 1),
    d: dValue
  }), React2.createElement("path", {
    stroke: strokeWidth && !d ? rest.fill : "none",
    d: dValue
  }), React2.createElement("clipPath", {
    id: clipPathId
  }, React2.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + strokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React2.createContext(null);
var FloatingTreeContext = React2.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React2.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React2.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var FloatingDelayGroupContext = React2.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React2.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React2.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React2.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React2.createContext(null);
var attr = createAttribute("portal");
var VisuallyHiddenDismiss = React2.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React2.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React2.forwardRef(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  const lockId = useId();
  index2(() => {
    if (!lockScroll)
      return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React2.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function useFloating2(options) {
  var _options$elements2;
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  if (true) {
    var _options$elements;
    const err = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((_options$elements = options.elements) != null && _options$elements.reference && !isElement(options.elements.reference)) {
      var _devMessageSet;
      if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(err))) {
        var _devMessageSet2;
        (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(err);
        console.error(err);
      }
    }
  }
  const [_domReference, setDomReference] = React2.useState(null);
  const domReference = ((_options$elements2 = options.elements) == null ? void 0 : _options$elements2.reference) || _domReference;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    if (open2) {
      dataRef.current.openEvent = event;
    }
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    unstable_onOpenChange == null || unstable_onOpenChange(open2, event, reason);
  });
  const domReferenceRef = React2.useRef(null);
  const dataRef = React2.useRef({});
  const events = React2.useState(() => createPubSub())[0];
  const floatingId = useId();
  const setPositionReference = React2.useCallback((node) => {
    const positionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React2.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React2.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React2.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React2.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React2.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

// node_modules/react-datepicker/dist/es/index.js
function fe(e2, t2, r2) {
  return t2 = Ee(t2), function(e3, t3) {
    if (t3 && ("object" == typeof t3 || "function" == typeof t3))
      return t3;
    if (void 0 !== t3)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Ne(e3);
  }(e2, ve() ? Reflect.construct(t2, r2 || [], Ee(e2).constructor) : t2.apply(e2, r2));
}
function ve() {
  try {
    var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e3) {
  }
  return (ve = function() {
    return !!e2;
  })();
}
function ye(e2, t2) {
  var r2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t2 && (n = n.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), r2.push.apply(r2, n);
  }
  return r2;
}
function De(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var r2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? ye(Object(r2), true).forEach(function(t3) {
      Ce(e2, t3, r2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : ye(Object(r2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
    });
  }
  return e2;
}
function ge(e2) {
  var t2 = function(e3, t3) {
    if ("object" != typeof e3 || !e3)
      return e3;
    var r2 = e3[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var n = r2.call(e3, t3 || "default");
      if ("object" != typeof n)
        return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t3 ? String : Number)(e3);
  }(e2, "string");
  return "symbol" == typeof t2 ? t2 : String(t2);
}
function ke(e2) {
  return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, ke(e2);
}
function we(e2, t2) {
  if (!(e2 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function be(e2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var n = t2[r2];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e2, ge(n.key), n);
  }
}
function Se(e2, t2, r2) {
  return t2 && be(e2.prototype, t2), r2 && be(e2, r2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
function Ce(e2, t2, r2) {
  return (t2 = ge(t2)) in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
}
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n in r2)
        Object.prototype.hasOwnProperty.call(r2, n) && (e2[n] = r2[n]);
    }
    return e2;
  }, _e.apply(this, arguments);
}
function Me(e2, t2) {
  if ("function" != typeof t2 && null !== t2)
    throw new TypeError("Super expression must either be null or a function");
  e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && Pe(e2, t2);
}
function Ee(e2) {
  return Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, Ee(e2);
}
function Pe(e2, t2) {
  return Pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, Pe(e2, t2);
}
function Ne(e2) {
  if (void 0 === e2)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function xe(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return Ye(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Ye(e3, t2);
    var r2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === r2 && e3.constructor && (r2 = e3.constructor.name);
    if ("Map" === r2 || "Set" === r2)
      return Array.from(e3);
    if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
      return Ye(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Ye(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var r2 = 0, n = new Array(t2); r2 < t2; r2++)
    n[r2] = e2[r2];
  return n;
}
var Te = 12;
var Oe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function Ie(e2) {
  var t2 = e2 ? "string" == typeof e2 || e2 instanceof String ? parseISO(e2) : toDate(e2) : /* @__PURE__ */ new Date();
  return Re(t2) ? t2 : null;
}
function Re(e2, t2) {
  return t2 = t2 || /* @__PURE__ */ new Date("1/1/1000"), isValid(e2) && !isBefore(e2, t2);
}
function Le(e2, t2, r2) {
  if ("en" === r2)
    return format(e2, t2, { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true });
  var n = Ze(r2);
  return r2 && !n && console.warn('A locale object was not found for the provided string ["'.concat(r2, '"].')), !n && Xe() && Ze(Xe()) && (n = Ze(Xe())), format(e2, t2, { locale: n || null, useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true });
}
function Fe(e2, t2) {
  var r2 = t2.dateFormat, n = t2.locale;
  return e2 && Le(e2, Array.isArray(r2) ? r2[0] : r2, n) || "";
}
function Ae(e2, t2) {
  var r2 = t2.hour, n = void 0 === r2 ? 0 : r2, o = t2.minute, a = void 0 === o ? 0 : o, s = t2.second;
  return setHours(setMinutes(setSeconds(e2, void 0 === s ? 0 : s), a), n);
}
function We(e2, t2, r2) {
  var n = Ze(t2 || Xe());
  return startOfWeek(e2, { locale: n, weekStartsOn: r2 });
}
function Ke(e2) {
  return startOfMonth(e2);
}
function Be(e2) {
  return startOfYear(e2);
}
function Qe(e2) {
  return startOfQuarter(e2);
}
function He() {
  return startOfDay(Ie());
}
function je(e2, t2) {
  return e2 && t2 ? isSameYear(e2, t2) : !e2 && !t2;
}
function Ve(e2, t2) {
  return e2 && t2 ? isSameMonth(e2, t2) : !e2 && !t2;
}
function qe(e2, t2) {
  return e2 && t2 ? isSameQuarter(e2, t2) : !e2 && !t2;
}
function Ue(e2, t2) {
  return e2 && t2 ? isSameDay(e2, t2) : !e2 && !t2;
}
function ze(e2, t2) {
  return e2 && t2 ? isEqual(e2, t2) : !e2 && !t2;
}
function $e(e2, t2, r2) {
  var n, o = startOfDay(t2), a = endOfDay(r2);
  try {
    n = isWithinInterval(e2, { start: o, end: a });
  } catch (e3) {
    n = false;
  }
  return n;
}
function Ge(e2, t2) {
  var r2 = "undefined" != typeof window ? window : globalThis;
  r2.__localeData__ || (r2.__localeData__ = {}), r2.__localeData__[e2] = t2;
}
function Je(e2) {
  ("undefined" != typeof window ? window : globalThis).__localeId__ = e2;
}
function Xe() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function Ze(e2) {
  if ("string" == typeof e2) {
    var t2 = "undefined" != typeof window ? window : globalThis;
    return t2.__localeData__ ? t2.__localeData__[e2] : null;
  }
  return e2;
}
function et(e2, t2) {
  return Le(setMonth(Ie(), e2), "LLLL", t2);
}
function tt(e2, t2) {
  return Le(setMonth(Ie(), e2), "LLL", t2);
}
function rt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.excludeDateIntervals, s = t2.includeDates, i = t2.includeDateIntervals, p = t2.filterDate;
  return lt(e2, { minDate: r2, maxDate: n }) || o && o.some(function(t3) {
    return Ue(e2, t3.date ? t3.date : t3);
  }) || a && a.some(function(t3) {
    var r3 = t3.start, n2 = t3.end;
    return isWithinInterval(e2, { start: r3, end: n2 });
  }) || s && !s.some(function(t3) {
    return Ue(e2, t3);
  }) || i && !i.some(function(t3) {
    var r3 = t3.start, n2 = t3.end;
    return isWithinInterval(e2, { start: r3, end: n2 });
  }) || p && !p(Ie(e2)) || false;
}
function nt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.excludeDates, n = t2.excludeDateIntervals;
  return n && n.length > 0 ? n.some(function(t3) {
    var r3 = t3.start, n2 = t3.end;
    return isWithinInterval(e2, { start: r3, end: n2 });
  }) : r2 && r2.some(function(t3) {
    return Ue(e2, t3.date ? t3.date : t3);
  }) || false;
}
function ot(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.includeDates, s = t2.filterDate;
  return lt(e2, { minDate: startOfMonth(r2), maxDate: endOfMonth(n) }) || o && o.some(function(t3) {
    return Ve(e2, t3);
  }) || a && !a.some(function(t3) {
    return Ve(e2, t3);
  }) || s && !s(Ie(e2)) || false;
}
function at(e2, t2, r2, n) {
  var o = getYear(e2), a = getMonth(e2), s = getYear(t2), i = getMonth(t2), p = getYear(n);
  return o === s && o === p ? a <= r2 && r2 <= i : o < s ? p === o && a <= r2 || p === s && i >= r2 || p < s && p > o : void 0;
}
function st(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.includeDates, s = t2.filterDate;
  return lt(e2, { minDate: r2, maxDate: n }) || o && o.some(function(t3) {
    return qe(e2, t3);
  }) || a && !a.some(function(t3) {
    return qe(e2, t3);
  }) || s && !s(Ie(e2)) || false;
}
function it(e2, t2, r2) {
  if (!isValid(t2) || !isValid(r2))
    return false;
  var n = getYear(t2), a = getYear(r2);
  return n <= e2 && a >= e2;
}
function pt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate, o = t2.excludeDates, a = t2.includeDates, s = t2.filterDate, i = new Date(e2, 0, 1);
  return lt(i, { minDate: startOfYear(r2), maxDate: endOfYear(n) }) || o && o.some(function(e3) {
    return je(i, e3);
  }) || a && !a.some(function(e3) {
    return je(i, e3);
  }) || s && !s(Ie(i)) || false;
}
function ct(e2, t2, r2, n) {
  var o = getYear(e2), a = getQuarter(e2), s = getYear(t2), i = getQuarter(t2), p = getYear(n);
  return o === s && o === p ? a <= r2 && r2 <= i : o < s ? p === o && a <= r2 || p === s && i >= r2 || p < s && p > o : void 0;
}
function lt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.maxDate;
  return r2 && differenceInCalendarDays(e2, r2) < 0 || n && differenceInCalendarDays(e2, n) > 0;
}
function dt(e2, t2) {
  return t2.some(function(t3) {
    return getHours(t3) === getHours(e2) && getMinutes(t3) === getMinutes(e2);
  });
}
function ut(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.excludeTimes, n = t2.includeTimes, o = t2.filterTime;
  return r2 && dt(e2, r2) || n && !dt(e2, n) || o && !o(e2) || false;
}
function ht(e2, t2) {
  var r2 = t2.minTime, n = t2.maxTime;
  if (!r2 || !n)
    throw new Error("Both minTime and maxTime props required");
  var o, a = Ie(), s = setHours(setMinutes(a, getMinutes(e2)), getHours(e2)), i = setHours(setMinutes(a, getMinutes(r2)), getHours(r2)), p = setHours(setMinutes(a, getMinutes(n)), getHours(n));
  try {
    o = !isWithinInterval(s, { start: i, end: p });
  } catch (e3) {
    o = false;
  }
  return o;
}
function mt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.includeDates, o = subMonths(e2, 1);
  return r2 && differenceInCalendarMonths(r2, o) > 0 || n && n.every(function(e3) {
    return differenceInCalendarMonths(e3, o) > 0;
  }) || false;
}
function ft(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.maxDate, n = t2.includeDates, o = addMonths(e2, 1);
  return r2 && differenceInCalendarMonths(o, r2) > 0 || n && n.every(function(e3) {
    return differenceInCalendarMonths(o, e3) > 0;
  }) || false;
}
function vt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.minDate, n = t2.includeDates, o = subYears(e2, 1);
  return r2 && differenceInCalendarYears(r2, o) > 0 || n && n.every(function(e3) {
    return differenceInCalendarYears(e3, o) > 0;
  }) || false;
}
function yt(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.maxDate, n = t2.includeDates, o = addYears(e2, 1);
  return r2 && differenceInCalendarYears(o, r2) > 0 || n && n.every(function(e3) {
    return differenceInCalendarYears(o, e3) > 0;
  }) || false;
}
function Dt(e2) {
  var t2 = e2.minDate, r2 = e2.includeDates;
  if (r2 && t2) {
    var n = r2.filter(function(e3) {
      return differenceInCalendarDays(e3, t2) >= 0;
    });
    return min(n);
  }
  return r2 ? min(r2) : t2;
}
function gt(e2) {
  var t2 = e2.maxDate, r2 = e2.includeDates;
  if (r2 && t2) {
    var n = r2.filter(function(e3) {
      return differenceInCalendarDays(e3, t2) <= 0;
    });
    return max(n);
  }
  return r2 ? max(r2) : t2;
}
function kt() {
  for (var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "react-datepicker__day--highlighted", r2 = /* @__PURE__ */ new Map(), o = 0, a = e2.length; o < a; o++) {
    var s = e2[o];
    if (isDate(s)) {
      var i = Le(s, "MM.dd.yyyy"), p = r2.get(i) || [];
      p.includes(t2) || (p.push(t2), r2.set(i, p));
    } else if ("object" === ke(s)) {
      var c = Object.keys(s), l = c[0], d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = Le(d[u], "MM.dd.yyyy"), f = r2.get(m) || [];
          f.includes(l) || (f.push(l), r2.set(m, f));
        }
    }
  }
  return r2;
}
function wt() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "react-datepicker__day--holidays", r2 = /* @__PURE__ */ new Map();
  return e2.forEach(function(e3) {
    var o = e3.date, a = e3.holidayName;
    if (isDate(o)) {
      var s = Le(o, "MM.dd.yyyy"), i = r2.get(s) || {};
      if (!("className" in i) || i.className !== t2 || (p = i.holidayNames, c = [a], p.length !== c.length || !p.every(function(e4, t3) {
        return e4 === c[t3];
      }))) {
        var p, c;
        i.className = t2;
        var l = i.holidayNames;
        i.holidayNames = l ? [].concat(xe(l), [a]) : [a], r2.set(s, i);
      }
    }
  }), r2;
}
function bt(e2, t2, r2, n, o) {
  for (var a = o.length, s = [], c = 0; c < a; c++) {
    var l = addMinutes(addHours(e2, getHours(o[c])), getMinutes(o[c])), d = addMinutes(e2, (r2 + 1) * n);
    isAfter(l, t2) && isBefore(l, d) && s.push(o[c]);
  }
  return s;
}
function St(e2) {
  return e2 < 10 ? "0".concat(e2) : "".concat(e2);
}
function Ct(e2) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te, r2 = Math.ceil(getYear(e2) / t2) * t2;
  return { startPeriod: r2 - (t2 - 1), endPeriod: r2 };
}
function _t(e2) {
  var t2 = e2.getSeconds(), r2 = e2.getMilliseconds();
  return toDate(e2.getTime() - 1e3 * t2 - r2);
}
function Mt(e2) {
  if (!isDate(e2))
    throw new Error("Invalid date");
  var t2 = new Date(e2);
  return t2.setHours(0, 0, 0, 0), t2;
}
function Et(e2, t2) {
  if (!isDate(e2) || !isDate(t2))
    throw new Error("Invalid date received");
  var r2 = Mt(e2), o = Mt(t2);
  return isBefore(r2, o);
}
function Pt(e2) {
  return " " === e2.key;
}
function Nt(e2, t2, r2, n) {
  for (var o = [], a = 0; a < 2 * t2 + 1; a++) {
    var s = e2 + t2 - a, i = true;
    r2 && (i = getYear(r2) <= s), n && i && (i = getYear(n) >= s), i && o.push(s);
  }
  return o;
}
var xt = react_onclickoutside_es_default(function(n) {
  function o(r2) {
    var n2;
    we(this, o), Ce(Ne(n2 = fe(this, o, [r2])), "renderOptions", function() {
      var t2 = n2.props.year, r3 = n2.state.yearsList.map(function(r4) {
        return import_react4.default.createElement("div", { className: t2 === r4 ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: r4, onClick: n2.onChange.bind(Ne(n2), r4), "aria-selected": t2 === r4 ? "true" : void 0 }, t2 === r4 ? import_react4.default.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "", r4);
      }), o2 = n2.props.minDate ? getYear(n2.props.minDate) : null, a2 = n2.props.maxDate ? getYear(n2.props.maxDate) : null;
      return a2 && n2.state.yearsList.find(function(e2) {
        return e2 === a2;
      }) || r3.unshift(import_react4.default.createElement("div", { className: "react-datepicker__year-option", key: "upcoming", onClick: n2.incrementYears }, import_react4.default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" }))), o2 && n2.state.yearsList.find(function(e2) {
        return e2 === o2;
      }) || r3.push(import_react4.default.createElement("div", { className: "react-datepicker__year-option", key: "previous", onClick: n2.decrementYears }, import_react4.default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" }))), r3;
    }), Ce(Ne(n2), "onChange", function(e2) {
      n2.props.onChange(e2);
    }), Ce(Ne(n2), "handleClickOutside", function() {
      n2.props.onCancel();
    }), Ce(Ne(n2), "shiftYears", function(e2) {
      var t2 = n2.state.yearsList.map(function(t3) {
        return t3 + e2;
      });
      n2.setState({ yearsList: t2 });
    }), Ce(Ne(n2), "incrementYears", function() {
      return n2.shiftYears(1);
    }), Ce(Ne(n2), "decrementYears", function() {
      return n2.shiftYears(-1);
    });
    var a = r2.yearDropdownItemNumber, s = r2.scrollableYearDropdown, i = a || (s ? 10 : 5);
    return n2.state = { yearsList: Nt(n2.props.year, i, n2.props.minDate, n2.props.maxDate) }, n2.dropdownRef = (0, import_react4.createRef)(), n2;
  }
  return Me(o, import_react4.default.Component), Se(o, [{ key: "componentDidMount", value: function() {
    var e2 = this.dropdownRef.current;
    if (e2) {
      var t2 = e2.children ? Array.from(e2.children) : null, r2 = t2 ? t2.find(function(e3) {
        return e3.ariaSelected;
      }) : null;
      e2.scrollTop = r2 ? r2.offsetTop + (r2.clientHeight - e2.clientHeight) / 2 : (e2.scrollHeight - e2.clientHeight) / 2;
    }
  } }, { key: "render", value: function() {
    var t2 = (0, import_classnames.default)({ "react-datepicker__year-dropdown": true, "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown });
    return import_react4.default.createElement("div", { className: t2, ref: this.dropdownRef }, this.renderOptions());
  } }]), o;
}());
var Yt = function(t2) {
  function r2() {
    var t3;
    we(this, r2);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, r2, [].concat(o))), "state", { dropdownVisible: false }), Ce(Ne(t3), "renderSelectOptions", function() {
      for (var r3 = t3.props.minDate ? getYear(t3.props.minDate) : 1900, n2 = t3.props.maxDate ? getYear(t3.props.maxDate) : 2100, o2 = [], a2 = r3; a2 <= n2; a2++)
        o2.push(import_react4.default.createElement("option", { key: a2, value: a2 }, a2));
      return o2;
    }), Ce(Ne(t3), "onSelectChange", function(e2) {
      t3.onChange(e2.target.value);
    }), Ce(Ne(t3), "renderSelectMode", function() {
      return import_react4.default.createElement("select", { value: t3.props.year, className: "react-datepicker__year-select", onChange: t3.onSelectChange }, t3.renderSelectOptions());
    }), Ce(Ne(t3), "renderReadView", function(r3) {
      return import_react4.default.createElement("div", { key: "read", style: { visibility: r3 ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(e2) {
        return t3.toggleDropdown(e2);
      } }, import_react4.default.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }), import_react4.default.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t3.props.year));
    }), Ce(Ne(t3), "renderDropdown", function() {
      return import_react4.default.createElement(xt, { key: "dropdown", year: t3.props.year, onChange: t3.onChange, onCancel: t3.toggleDropdown, minDate: t3.props.minDate, maxDate: t3.props.maxDate, scrollableYearDropdown: t3.props.scrollableYearDropdown, yearDropdownItemNumber: t3.props.yearDropdownItemNumber });
    }), Ce(Ne(t3), "renderScrollMode", function() {
      var e2 = t3.state.dropdownVisible, r3 = [t3.renderReadView(!e2)];
      return e2 && r3.unshift(t3.renderDropdown()), r3;
    }), Ce(Ne(t3), "onChange", function(e2) {
      t3.toggleDropdown(), e2 !== t3.props.year && t3.props.onChange(e2);
    }), Ce(Ne(t3), "toggleDropdown", function(e2) {
      t3.setState({ dropdownVisible: !t3.state.dropdownVisible }, function() {
        t3.props.adjustDateOnChange && t3.handleYearChange(t3.props.date, e2);
      });
    }), Ce(Ne(t3), "handleYearChange", function(e2, r3) {
      t3.onSelect(e2, r3), t3.setOpen();
    }), Ce(Ne(t3), "onSelect", function(e2, r3) {
      t3.props.onSelect && t3.props.onSelect(e2, r3);
    }), Ce(Ne(t3), "setOpen", function() {
      t3.props.setOpen && t3.props.setOpen(true);
    }), t3;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "render", value: function() {
    var t3;
    switch (this.props.dropdownMode) {
      case "scroll":
        t3 = this.renderScrollMode();
        break;
      case "select":
        t3 = this.renderSelectMode();
    }
    return import_react4.default.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t3);
  } }]), r2;
}();
var Tt = react_onclickoutside_es_default(function(t2) {
  function r2() {
    var t3;
    we(this, r2);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, r2, [].concat(o))), "isSelectedMonth", function(e2) {
      return t3.props.month === e2;
    }), Ce(Ne(t3), "renderOptions", function() {
      return t3.props.monthNames.map(function(r3, n2) {
        return import_react4.default.createElement("div", { className: t3.isSelectedMonth(n2) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: r3, onClick: t3.onChange.bind(Ne(t3), n2), "aria-selected": t3.isSelectedMonth(n2) ? "true" : void 0 }, t3.isSelectedMonth(n2) ? import_react4.default.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "", r3);
      });
    }), Ce(Ne(t3), "onChange", function(e2) {
      return t3.props.onChange(e2);
    }), Ce(Ne(t3), "handleClickOutside", function() {
      return t3.props.onCancel();
    }), t3;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "render", value: function() {
    return import_react4.default.createElement("div", { className: "react-datepicker__month-dropdown" }, this.renderOptions());
  } }]), r2;
}());
var Ot = function(t2) {
  function r2() {
    var t3;
    we(this, r2);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, r2, [].concat(o))), "state", { dropdownVisible: false }), Ce(Ne(t3), "renderSelectOptions", function(t4) {
      return t4.map(function(t5, r3) {
        return import_react4.default.createElement("option", { key: r3, value: r3 }, t5);
      });
    }), Ce(Ne(t3), "renderSelectMode", function(r3) {
      return import_react4.default.createElement("select", { value: t3.props.month, className: "react-datepicker__month-select", onChange: function(e2) {
        return t3.onChange(e2.target.value);
      } }, t3.renderSelectOptions(r3));
    }), Ce(Ne(t3), "renderReadView", function(r3, n2) {
      return import_react4.default.createElement("div", { key: "read", style: { visibility: r3 ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t3.toggleDropdown }, import_react4.default.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }), import_react4.default.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, n2[t3.props.month]));
    }), Ce(Ne(t3), "renderDropdown", function(r3) {
      return import_react4.default.createElement(Tt, { key: "dropdown", month: t3.props.month, monthNames: r3, onChange: t3.onChange, onCancel: t3.toggleDropdown });
    }), Ce(Ne(t3), "renderScrollMode", function(e2) {
      var r3 = t3.state.dropdownVisible, n2 = [t3.renderReadView(!r3, e2)];
      return r3 && n2.unshift(t3.renderDropdown(e2)), n2;
    }), Ce(Ne(t3), "onChange", function(e2) {
      t3.toggleDropdown(), e2 !== t3.props.month && t3.props.onChange(e2);
    }), Ce(Ne(t3), "toggleDropdown", function() {
      return t3.setState({ dropdownVisible: !t3.state.dropdownVisible });
    }), t3;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "render", value: function() {
    var t3, r3 = this, n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(e2) {
      return tt(e2, r3.props.locale);
    } : function(e2) {
      return et(e2, r3.props.locale);
    });
    switch (this.props.dropdownMode) {
      case "scroll":
        t3 = this.renderScrollMode(n);
        break;
      case "select":
        t3 = this.renderSelectMode(n);
    }
    return import_react4.default.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, t3);
  } }]), r2;
}();
function It(e2, t2) {
  for (var r2 = [], n = Ke(e2), o = Ke(t2); !isAfter(n, o); )
    r2.push(Ie(n)), n = addMonths(n, 1);
  return r2;
}
var Rt = react_onclickoutside_es_default(function(t2) {
  function n(t3) {
    var r2;
    return we(this, n), Ce(Ne(r2 = fe(this, n, [t3])), "renderOptions", function() {
      return r2.state.monthYearsList.map(function(t4) {
        var n2 = getTime(t4), o = je(r2.props.date, t4) && Ve(r2.props.date, t4);
        return import_react4.default.createElement("div", { className: o ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: n2, onClick: r2.onChange.bind(Ne(r2), n2), "aria-selected": o ? "true" : void 0 }, o ? import_react4.default.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "", Le(t4, r2.props.dateFormat, r2.props.locale));
      });
    }), Ce(Ne(r2), "onChange", function(e2) {
      return r2.props.onChange(e2);
    }), Ce(Ne(r2), "handleClickOutside", function() {
      r2.props.onCancel();
    }), r2.state = { monthYearsList: It(r2.props.minDate, r2.props.maxDate) }, r2;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "render", value: function() {
    var t3 = (0, import_classnames.default)({ "react-datepicker__month-year-dropdown": true, "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown });
    return import_react4.default.createElement("div", { className: t3 }, this.renderOptions());
  } }]), n;
}());
var Lt = function(t2) {
  function r2() {
    var t3;
    we(this, r2);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, r2, [].concat(o))), "state", { dropdownVisible: false }), Ce(Ne(t3), "renderSelectOptions", function() {
      for (var r3 = Ke(t3.props.minDate), n2 = Ke(t3.props.maxDate), o2 = []; !isAfter(r3, n2); ) {
        var a2 = getTime(r3);
        o2.push(import_react4.default.createElement("option", { key: a2, value: a2 }, Le(r3, t3.props.dateFormat, t3.props.locale))), r3 = addMonths(r3, 1);
      }
      return o2;
    }), Ce(Ne(t3), "onSelectChange", function(e2) {
      t3.onChange(e2.target.value);
    }), Ce(Ne(t3), "renderSelectMode", function() {
      return import_react4.default.createElement("select", { value: getTime(Ke(t3.props.date)), className: "react-datepicker__month-year-select", onChange: t3.onSelectChange }, t3.renderSelectOptions());
    }), Ce(Ne(t3), "renderReadView", function(r3) {
      var n2 = Le(t3.props.date, t3.props.dateFormat, t3.props.locale);
      return import_react4.default.createElement("div", { key: "read", style: { visibility: r3 ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: function(e2) {
        return t3.toggleDropdown(e2);
      } }, import_react4.default.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }), import_react4.default.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, n2));
    }), Ce(Ne(t3), "renderDropdown", function() {
      return import_react4.default.createElement(Rt, { key: "dropdown", date: t3.props.date, dateFormat: t3.props.dateFormat, onChange: t3.onChange, onCancel: t3.toggleDropdown, minDate: t3.props.minDate, maxDate: t3.props.maxDate, scrollableMonthYearDropdown: t3.props.scrollableMonthYearDropdown, locale: t3.props.locale });
    }), Ce(Ne(t3), "renderScrollMode", function() {
      var e2 = t3.state.dropdownVisible, r3 = [t3.renderReadView(!e2)];
      return e2 && r3.unshift(t3.renderDropdown()), r3;
    }), Ce(Ne(t3), "onChange", function(e2) {
      t3.toggleDropdown();
      var r3 = Ie(parseInt(e2));
      je(t3.props.date, r3) && Ve(t3.props.date, r3) || t3.props.onChange(r3);
    }), Ce(Ne(t3), "toggleDropdown", function() {
      return t3.setState({ dropdownVisible: !t3.state.dropdownVisible });
    }), t3;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "render", value: function() {
    var t3;
    switch (this.props.dropdownMode) {
      case "scroll":
        t3 = this.renderScrollMode();
        break;
      case "select":
        t3 = this.renderSelectMode();
    }
    return import_react4.default.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t3);
  } }]), r2;
}();
var Ft = function(t2) {
  function n() {
    var t3;
    we(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return Ce(Ne(t3 = fe(this, n, [].concat(a))), "dayEl", import_react4.default.createRef()), Ce(Ne(t3), "handleClick", function(e2) {
      !t3.isDisabled() && t3.props.onClick && t3.props.onClick(e2);
    }), Ce(Ne(t3), "handleMouseEnter", function(e2) {
      !t3.isDisabled() && t3.props.onMouseEnter && t3.props.onMouseEnter(e2);
    }), Ce(Ne(t3), "handleOnKeyDown", function(e2) {
      " " === e2.key && (e2.preventDefault(), e2.key = "Enter"), t3.props.handleOnKeyDown(e2);
    }), Ce(Ne(t3), "isSameDay", function(e2) {
      return Ue(t3.props.day, e2);
    }), Ce(Ne(t3), "isKeyboardSelected", function() {
      var e2;
      return !t3.props.disabledKeyboardNavigation && (!(t3.props.selectsMultiple ? null === (e2 = t3.props.selectedDates) || void 0 === e2 ? void 0 : e2.some(function(e3) {
        return t3.isSameDayOrWeek(e3);
      }) : t3.isSameDayOrWeek(t3.props.selected)) && t3.isSameDayOrWeek(t3.props.preSelection));
    }), Ce(Ne(t3), "isDisabled", function() {
      return rt(t3.props.day, t3.props);
    }), Ce(Ne(t3), "isExcluded", function() {
      return nt(t3.props.day, t3.props);
    }), Ce(Ne(t3), "isStartOfWeek", function() {
      return Ue(t3.props.day, We(t3.props.day, t3.props.locale, t3.props.calendarStartDay));
    }), Ce(Ne(t3), "isSameWeek", function(e2) {
      return t3.props.showWeekPicker && Ue(e2, We(t3.props.day, t3.props.locale, t3.props.calendarStartDay));
    }), Ce(Ne(t3), "isSameDayOrWeek", function(e2) {
      return t3.isSameDay(e2) || t3.isSameWeek(e2);
    }), Ce(Ne(t3), "getHighLightedClass", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.highlightDates;
      if (!n2)
        return false;
      var o2 = Le(r2, "MM.dd.yyyy");
      return n2.get(o2);
    }), Ce(Ne(t3), "getHolidaysClass", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.holidays;
      if (!n2)
        return false;
      var o2 = Le(r2, "MM.dd.yyyy");
      return n2.has(o2) ? [n2.get(o2).className] : void 0;
    }), Ce(Ne(t3), "isInRange", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.startDate, o2 = e2.endDate;
      return !(!n2 || !o2) && $e(r2, n2, o2);
    }), Ce(Ne(t3), "isInSelectingRange", function() {
      var e2, r2 = t3.props, n2 = r2.day, o2 = r2.selectsStart, a2 = r2.selectsEnd, s2 = r2.selectsRange, i = r2.selectsDisabledDaysInRange, p = r2.startDate, c = r2.endDate, l = null !== (e2 = t3.props.selectingDate) && void 0 !== e2 ? e2 : t3.props.preSelection;
      return !(!(o2 || a2 || s2) || !l || !i && t3.isDisabled()) && (o2 && c && (isBefore(l, c) || ze(l, c)) ? $e(n2, l, c) : (a2 && p && (isAfter(l, p) || ze(l, p)) || !(!s2 || !p || c || !isAfter(l, p) && !ze(l, p))) && $e(n2, p, l));
    }), Ce(Ne(t3), "isSelectingRangeStart", function() {
      var e2;
      if (!t3.isInSelectingRange())
        return false;
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.selectsStart, s2 = null !== (e2 = t3.props.selectingDate) && void 0 !== e2 ? e2 : t3.props.preSelection;
      return Ue(n2, a2 ? s2 : o2);
    }), Ce(Ne(t3), "isSelectingRangeEnd", function() {
      var e2;
      if (!t3.isInSelectingRange())
        return false;
      var r2 = t3.props, n2 = r2.day, o2 = r2.endDate, a2 = r2.selectsEnd, s2 = r2.selectsRange, i = null !== (e2 = t3.props.selectingDate) && void 0 !== e2 ? e2 : t3.props.preSelection;
      return Ue(n2, a2 || s2 ? i : o2);
    }), Ce(Ne(t3), "isRangeStart", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.startDate, o2 = e2.endDate;
      return !(!n2 || !o2) && Ue(n2, r2);
    }), Ce(Ne(t3), "isRangeEnd", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.startDate, o2 = e2.endDate;
      return !(!n2 || !o2) && Ue(o2, r2);
    }), Ce(Ne(t3), "isWeekend", function() {
      var e2 = getDay(t3.props.day);
      return 0 === e2 || 6 === e2;
    }), Ce(Ne(t3), "isAfterMonth", function() {
      return void 0 !== t3.props.month && (t3.props.month + 1) % 12 === getMonth(t3.props.day);
    }), Ce(Ne(t3), "isBeforeMonth", function() {
      return void 0 !== t3.props.month && (getMonth(t3.props.day) + 1) % 12 === t3.props.month;
    }), Ce(Ne(t3), "isCurrentDay", function() {
      return t3.isSameDay(Ie());
    }), Ce(Ne(t3), "isSelected", function() {
      var e2;
      return t3.props.selectsMultiple ? null === (e2 = t3.props.selectedDates) || void 0 === e2 ? void 0 : e2.some(function(e3) {
        return t3.isSameDayOrWeek(e3);
      }) : t3.isSameDayOrWeek(t3.props.selected);
    }), Ce(Ne(t3), "getClassNames", function(e2) {
      var n2, o2 = t3.props.dayClassName ? t3.props.dayClassName(e2) : void 0;
      return (0, import_classnames.default)("react-datepicker__day", o2, "react-datepicker__day--" + Le(t3.props.day, "ddd", n2), { "react-datepicker__day--disabled": t3.isDisabled(), "react-datepicker__day--excluded": t3.isExcluded(), "react-datepicker__day--selected": t3.isSelected(), "react-datepicker__day--keyboard-selected": t3.isKeyboardSelected(), "react-datepicker__day--range-start": t3.isRangeStart(), "react-datepicker__day--range-end": t3.isRangeEnd(), "react-datepicker__day--in-range": t3.isInRange(), "react-datepicker__day--in-selecting-range": t3.isInSelectingRange(), "react-datepicker__day--selecting-range-start": t3.isSelectingRangeStart(), "react-datepicker__day--selecting-range-end": t3.isSelectingRangeEnd(), "react-datepicker__day--today": t3.isCurrentDay(), "react-datepicker__day--weekend": t3.isWeekend(), "react-datepicker__day--outside-month": t3.isAfterMonth() || t3.isBeforeMonth() }, t3.getHighLightedClass("react-datepicker__day--highlighted"), t3.getHolidaysClass());
    }), Ce(Ne(t3), "getAriaLabel", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.ariaLabelPrefixWhenEnabled, o2 = void 0 === n2 ? "Choose" : n2, a2 = e2.ariaLabelPrefixWhenDisabled, s2 = void 0 === a2 ? "Not available" : a2, i = t3.isDisabled() || t3.isExcluded() ? s2 : o2;
      return "".concat(i, " ").concat(Le(r2, "PPPP", t3.props.locale));
    }), Ce(Ne(t3), "getTitle", function() {
      var e2 = t3.props, r2 = e2.day, n2 = e2.holidays, o2 = void 0 === n2 ? /* @__PURE__ */ new Map() : n2, a2 = e2.excludeDates, s2 = Le(r2, "MM.dd.yyyy"), i = [];
      return o2.has(s2) && i.push.apply(i, xe(o2.get(s2).holidayNames)), t3.isExcluded() && i.push(null == a2 ? void 0 : a2.filter(function(e3) {
        return Ue(e3.date ? e3.date : e3, r2);
      }).map(function(e3) {
        return e3.message;
      })), i.join(", ");
    }), Ce(Ne(t3), "getTabIndex", function(e2, r2) {
      var n2 = e2 || t3.props.selected, o2 = r2 || t3.props.preSelection;
      return (!t3.props.showWeekPicker || !t3.props.showWeekNumber && t3.isStartOfWeek()) && (t3.isKeyboardSelected() || t3.isSameDay(n2) && Ue(o2, n2)) ? 0 : -1;
    }), Ce(Ne(t3), "handleFocusDay", function() {
      var e2, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = false;
      0 === t3.getTabIndex() && !r2.isInputFocused && t3.isSameDay(t3.props.preSelection) && (document.activeElement && document.activeElement !== document.body || (n2 = true), t3.props.inline && !t3.props.shouldFocusDayInline && (n2 = false), t3.props.containerRef && t3.props.containerRef.current && t3.props.containerRef.current.contains(document.activeElement) && document.activeElement.classList.contains("react-datepicker__day") && (n2 = true), t3.props.monthShowsDuplicateDaysEnd && t3.isAfterMonth() && (n2 = false), t3.props.monthShowsDuplicateDaysStart && t3.isBeforeMonth() && (n2 = false)), n2 && (null === (e2 = t3.dayEl.current) || void 0 === e2 || e2.focus({ preventScroll: true }));
    }), Ce(Ne(t3), "renderDayContents", function() {
      return t3.props.monthShowsDuplicateDaysEnd && t3.isAfterMonth() || t3.props.monthShowsDuplicateDaysStart && t3.isBeforeMonth() ? null : t3.props.renderDayContents ? t3.props.renderDayContents(getDate(t3.props.day), t3.props.day) : getDate(t3.props.day);
    }), Ce(Ne(t3), "render", function() {
      return import_react4.default.createElement("div", { ref: t3.dayEl, className: t3.getClassNames(t3.props.day), onKeyDown: t3.handleOnKeyDown, onClick: t3.handleClick, onMouseEnter: t3.props.usePointerEvent ? void 0 : t3.handleMouseEnter, onPointerEnter: t3.props.usePointerEvent ? t3.handleMouseEnter : void 0, tabIndex: t3.getTabIndex(), "aria-label": t3.getAriaLabel(), role: "option", title: t3.getTitle(), "aria-disabled": t3.isDisabled(), "aria-current": t3.isCurrentDay() ? "date" : void 0, "aria-selected": t3.isSelected() || t3.isInRange() }, t3.renderDayContents(), "" !== t3.getTitle() && import_react4.default.createElement("span", { className: "overlay" }, t3.getTitle()));
    }), t3;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "componentDidMount", value: function() {
    this.handleFocusDay();
  } }, { key: "componentDidUpdate", value: function(e2) {
    this.handleFocusDay(e2);
  } }]), n;
}();
var At = function(t2) {
  function n() {
    var t3;
    we(this, n);
    for (var r2 = arguments.length, o = new Array(r2), a = 0; a < r2; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, n, [].concat(o))), "weekNumberEl", import_react4.default.createRef()), Ce(Ne(t3), "handleClick", function(e2) {
      t3.props.onClick && t3.props.onClick(e2);
    }), Ce(Ne(t3), "handleOnKeyDown", function(e2) {
      " " === e2.key && (e2.preventDefault(), e2.key = "Enter"), t3.props.handleOnKeyDown(e2);
    }), Ce(Ne(t3), "isKeyboardSelected", function() {
      return !t3.props.disabledKeyboardNavigation && !Ue(t3.props.date, t3.props.selected) && Ue(t3.props.date, t3.props.preSelection);
    }), Ce(Ne(t3), "getTabIndex", function() {
      return t3.props.showWeekPicker && t3.props.showWeekNumber && (t3.isKeyboardSelected() || Ue(t3.props.date, t3.props.selected) && Ue(t3.props.preSelection, t3.props.selected)) ? 0 : -1;
    }), Ce(Ne(t3), "handleFocusWeekNumber", function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r3 = false;
      0 === t3.getTabIndex() && !e2.isInputFocused && Ue(t3.props.date, t3.props.preSelection) && (document.activeElement && document.activeElement !== document.body || (r3 = true), t3.props.inline && !t3.props.shouldFocusDayInline && (r3 = false), t3.props.containerRef && t3.props.containerRef.current && t3.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (r3 = true)), r3 && t3.weekNumberEl.current && t3.weekNumberEl.current.focus({ preventScroll: true });
    }), t3;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "componentDidMount", value: function() {
    this.handleFocusWeekNumber();
  } }, { key: "componentDidUpdate", value: function(e2) {
    this.handleFocusWeekNumber(e2);
  } }, { key: "render", value: function() {
    var t3 = this.props, n2 = t3.weekNumber, o = t3.ariaLabelPrefix, a = void 0 === o ? "week " : o, s = { "react-datepicker__week-number": true, "react-datepicker__week-number--clickable": !!t3.onClick, "react-datepicker__week-number--selected": Ue(this.props.date, this.props.selected), "react-datepicker__week-number--keyboard-selected": this.isKeyboardSelected() };
    return import_react4.default.createElement("div", { ref: this.weekNumberEl, className: (0, import_classnames.default)(s), "aria-label": "".concat(a, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, n2);
  } }], [{ key: "defaultProps", get: function() {
    return { ariaLabelPrefix: "week " };
  } }]), n;
}();
var Wt = function(t2) {
  function n() {
    var t3;
    we(this, n);
    for (var r2 = arguments.length, o = new Array(r2), a = 0; a < r2; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, n, [].concat(o))), "handleDayClick", function(e2, r3) {
      t3.props.onDayClick && t3.props.onDayClick(e2, r3);
    }), Ce(Ne(t3), "handleDayMouseEnter", function(e2) {
      t3.props.onDayMouseEnter && t3.props.onDayMouseEnter(e2);
    }), Ce(Ne(t3), "handleWeekClick", function(e2, r3, n2) {
      "function" == typeof t3.props.onWeekSelect && t3.props.onWeekSelect(e2, r3, n2), t3.props.showWeekPicker && t3.handleDayClick(e2, n2), t3.props.shouldCloseOnSelect && t3.props.setOpen(false);
    }), Ce(Ne(t3), "formatWeekNumber", function(e2) {
      return t3.props.formatWeekNumber ? t3.props.formatWeekNumber(e2) : function(e3, t4) {
        var r3 = t4 && Ze(t4) || Xe() && Ze(Xe());
        return getISOWeek(e3, r3 ? { locale: r3 } : null);
      }(e2);
    }), Ce(Ne(t3), "renderDays", function() {
      var r3 = t3.startOfWeek(), n2 = [], o2 = t3.formatWeekNumber(r3);
      if (t3.props.showWeekNumber) {
        var a2 = t3.props.onWeekSelect || t3.props.showWeekPicker ? t3.handleWeekClick.bind(Ne(t3), r3, o2) : void 0;
        n2.push(import_react4.default.createElement(At, { key: "W", weekNumber: o2, date: r3, onClick: a2, selected: t3.props.selected, preSelection: t3.props.preSelection, ariaLabelPrefix: t3.props.ariaLabelPrefix, showWeekPicker: t3.props.showWeekPicker, showWeekNumber: t3.props.showWeekNumber, disabledKeyboardNavigation: t3.props.disabledKeyboardNavigation, handleOnKeyDown: t3.props.handleOnKeyDown, isInputFocused: t3.props.isInputFocused, containerRef: t3.props.containerRef }));
      }
      return n2.concat([0, 1, 2, 3, 4, 5, 6].map(function(n3) {
        var o3 = addDays(r3, n3);
        return import_react4.default.createElement(Ft, { ariaLabelPrefixWhenEnabled: t3.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t3.props.disabledDayAriaLabelPrefix, key: o3.valueOf(), day: o3, month: t3.props.month, onClick: t3.handleDayClick.bind(Ne(t3), o3), usePointerEvent: t3.props.usePointerEvent, onMouseEnter: t3.handleDayMouseEnter.bind(Ne(t3), o3), minDate: t3.props.minDate, maxDate: t3.props.maxDate, excludeDates: t3.props.excludeDates, excludeDateIntervals: t3.props.excludeDateIntervals, includeDates: t3.props.includeDates, includeDateIntervals: t3.props.includeDateIntervals, highlightDates: t3.props.highlightDates, holidays: t3.props.holidays, selectingDate: t3.props.selectingDate, filterDate: t3.props.filterDate, preSelection: t3.props.preSelection, selected: t3.props.selected, selectsStart: t3.props.selectsStart, selectsEnd: t3.props.selectsEnd, selectsRange: t3.props.selectsRange, showWeekPicker: t3.props.showWeekPicker, showWeekNumber: t3.props.showWeekNumber, selectsDisabledDaysInRange: t3.props.selectsDisabledDaysInRange, selectsMultiple: t3.props.selectsMultiple, selectedDates: t3.props.selectedDates, startDate: t3.props.startDate, endDate: t3.props.endDate, dayClassName: t3.props.dayClassName, renderDayContents: t3.props.renderDayContents, disabledKeyboardNavigation: t3.props.disabledKeyboardNavigation, handleOnKeyDown: t3.props.handleOnKeyDown, isInputFocused: t3.props.isInputFocused, containerRef: t3.props.containerRef, inline: t3.props.inline, shouldFocusDayInline: t3.props.shouldFocusDayInline, monthShowsDuplicateDaysEnd: t3.props.monthShowsDuplicateDaysEnd, monthShowsDuplicateDaysStart: t3.props.monthShowsDuplicateDaysStart, locale: t3.props.locale });
      }));
    }), Ce(Ne(t3), "startOfWeek", function() {
      return We(t3.props.day, t3.props.locale, t3.props.calendarStartDay);
    }), Ce(Ne(t3), "isKeyboardSelected", function() {
      return !t3.props.disabledKeyboardNavigation && !Ue(t3.startOfWeek(), t3.props.selected) && Ue(t3.startOfWeek(), t3.props.preSelection);
    }), t3;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "render", value: function() {
    var t3 = { "react-datepicker__week": true, "react-datepicker__week--selected": Ue(this.startOfWeek(), this.props.selected), "react-datepicker__week--keyboard-selected": this.isKeyboardSelected() };
    return import_react4.default.createElement("div", { className: (0, import_classnames.default)(t3) }, this.renderDays());
  } }], [{ key: "defaultProps", get: function() {
    return { shouldCloseOnSelect: true };
  } }]), n;
}();
var Kt = "two_columns";
var Bt = "three_columns";
var Qt = "four_columns";
var Ht = Ce(Ce(Ce({}, Kt, { grid: [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]], verticalNavigationOffset: 2 }), Bt, { grid: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]], verticalNavigationOffset: 3 }), Qt, { grid: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]], verticalNavigationOffset: 4 });
function jt(e2, t2) {
  return e2 ? Qt : t2 ? Kt : Bt;
}
var Vt = function(t2) {
  function n() {
    var t3;
    we(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return Ce(Ne(t3 = fe(this, n, [].concat(a))), "MONTH_REFS", xe(Array(12)).map(function() {
      return import_react4.default.createRef();
    })), Ce(Ne(t3), "QUARTER_REFS", xe(Array(4)).map(function() {
      return import_react4.default.createRef();
    })), Ce(Ne(t3), "isDisabled", function(e2) {
      return rt(e2, t3.props);
    }), Ce(Ne(t3), "isExcluded", function(e2) {
      return nt(e2, t3.props);
    }), Ce(Ne(t3), "handleDayClick", function(e2, r2) {
      t3.props.onDayClick && t3.props.onDayClick(e2, r2, t3.props.orderInDisplay);
    }), Ce(Ne(t3), "handleDayMouseEnter", function(e2) {
      t3.props.onDayMouseEnter && t3.props.onDayMouseEnter(e2);
    }), Ce(Ne(t3), "handleMouseLeave", function() {
      t3.props.onMouseLeave && t3.props.onMouseLeave();
    }), Ce(Ne(t3), "isRangeStartMonth", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && Ve(setMonth(n2, e2), o2);
    }), Ce(Ne(t3), "isRangeStartQuarter", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && qe(setQuarter(n2, e2), o2);
    }), Ce(Ne(t3), "isRangeEndMonth", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && Ve(setMonth(n2, e2), a2);
    }), Ce(Ne(t3), "isRangeEndQuarter", function(e2) {
      var r2 = t3.props, n2 = r2.day, o2 = r2.startDate, a2 = r2.endDate;
      return !(!o2 || !a2) && qe(setQuarter(n2, e2), a2);
    }), Ce(Ne(t3), "isInSelectingRangeMonth", function(e2) {
      var r2, n2 = t3.props, o2 = n2.day, a2 = n2.selectsStart, s2 = n2.selectsEnd, i = n2.selectsRange, p = n2.startDate, c = n2.endDate, l = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return !(!(a2 || s2 || i) || !l) && (a2 && c ? at(l, c, e2, o2) : (s2 && p || !(!i || !p || c)) && at(p, l, e2, o2));
    }), Ce(Ne(t3), "isSelectingMonthRangeStart", function(e2) {
      var r2;
      if (!t3.isInSelectingRangeMonth(e2))
        return false;
      var n2 = t3.props, o2 = n2.day, a2 = n2.startDate, s2 = n2.selectsStart, i = setMonth(o2, e2), p = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return Ve(i, s2 ? p : a2);
    }), Ce(Ne(t3), "isSelectingMonthRangeEnd", function(e2) {
      var r2;
      if (!t3.isInSelectingRangeMonth(e2))
        return false;
      var n2 = t3.props, o2 = n2.day, a2 = n2.endDate, s2 = n2.selectsEnd, i = n2.selectsRange, p = setMonth(o2, e2), c = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return Ve(p, s2 || i ? c : a2);
    }), Ce(Ne(t3), "isInSelectingRangeQuarter", function(e2) {
      var r2, n2 = t3.props, o2 = n2.day, a2 = n2.selectsStart, s2 = n2.selectsEnd, i = n2.selectsRange, p = n2.startDate, c = n2.endDate, l = null !== (r2 = t3.props.selectingDate) && void 0 !== r2 ? r2 : t3.props.preSelection;
      return !(!(a2 || s2 || i) || !l) && (a2 && c ? ct(l, c, e2, o2) : (s2 && p || !(!i || !p || c)) && ct(p, l, e2, o2));
    }), Ce(Ne(t3), "isWeekInMonth", function(e2) {
      var r2 = t3.props.day, n2 = addDays(e2, 6);
      return Ve(e2, r2) || Ve(n2, r2);
    }), Ce(Ne(t3), "isCurrentMonth", function(e2, t4) {
      return getYear(e2) === getYear(Ie()) && t4 === getMonth(Ie());
    }), Ce(Ne(t3), "isCurrentQuarter", function(e2, t4) {
      return getYear(e2) === getYear(Ie()) && t4 === getQuarter(Ie());
    }), Ce(Ne(t3), "isSelectedMonth", function(e2, t4, r2) {
      return getMonth(r2) === t4 && getYear(e2) === getYear(r2);
    }), Ce(Ne(t3), "isSelectedQuarter", function(e2, t4, r2) {
      return getQuarter(e2) === t4 && getYear(e2) === getYear(r2);
    }), Ce(Ne(t3), "renderWeeks", function() {
      for (var r2 = [], n2 = t3.props.fixedHeight, o2 = 0, a2 = false, s2 = We(Ke(t3.props.day), t3.props.locale, t3.props.calendarStartDay), i = t3.props.showWeekPicker ? We(t3.props.selected, t3.props.locale, t3.props.calendarStartDay) : t3.props.selected, p = t3.props.showWeekPicker ? We(t3.props.preSelection, t3.props.locale, t3.props.calendarStartDay) : t3.props.preSelection; r2.push(import_react4.default.createElement(Wt, { ariaLabelPrefix: t3.props.weekAriaLabelPrefix, chooseDayAriaLabelPrefix: t3.props.chooseDayAriaLabelPrefix, disabledDayAriaLabelPrefix: t3.props.disabledDayAriaLabelPrefix, key: o2, day: s2, month: getMonth(t3.props.day), onDayClick: t3.handleDayClick, usePointerEvent: t3.props.usePointerEvent, onDayMouseEnter: t3.handleDayMouseEnter, onWeekSelect: t3.props.onWeekSelect, formatWeekNumber: t3.props.formatWeekNumber, locale: t3.props.locale, minDate: t3.props.minDate, maxDate: t3.props.maxDate, excludeDates: t3.props.excludeDates, excludeDateIntervals: t3.props.excludeDateIntervals, includeDates: t3.props.includeDates, includeDateIntervals: t3.props.includeDateIntervals, inline: t3.props.inline, shouldFocusDayInline: t3.props.shouldFocusDayInline, highlightDates: t3.props.highlightDates, holidays: t3.props.holidays, selectingDate: t3.props.selectingDate, filterDate: t3.props.filterDate, preSelection: p, selected: i, selectsStart: t3.props.selectsStart, selectsEnd: t3.props.selectsEnd, selectsRange: t3.props.selectsRange, selectsDisabledDaysInRange: t3.props.selectsDisabledDaysInRange, selectsMultiple: t3.props.selectsMultiple, selectedDates: t3.props.selectedDates, showWeekNumber: t3.props.showWeekNumbers, showWeekPicker: t3.props.showWeekPicker, startDate: t3.props.startDate, endDate: t3.props.endDate, dayClassName: t3.props.dayClassName, setOpen: t3.props.setOpen, shouldCloseOnSelect: t3.props.shouldCloseOnSelect, disabledKeyboardNavigation: t3.props.disabledKeyboardNavigation, renderDayContents: t3.props.renderDayContents, handleOnKeyDown: t3.props.handleOnKeyDown, isInputFocused: t3.props.isInputFocused, containerRef: t3.props.containerRef, calendarStartDay: t3.props.calendarStartDay, monthShowsDuplicateDaysEnd: t3.props.monthShowsDuplicateDaysEnd, monthShowsDuplicateDaysStart: t3.props.monthShowsDuplicateDaysStart })), !a2; ) {
        o2++, s2 = addWeeks(s2, 1);
        var c = n2 && o2 >= 6, d = !n2 && !t3.isWeekInMonth(s2);
        if (c || d) {
          if (!t3.props.peekNextMonth)
            break;
          a2 = true;
        }
      }
      return r2;
    }), Ce(Ne(t3), "onMonthClick", function(e2, r2) {
      t3.handleDayClick(Ke(setMonth(t3.props.day, r2)), e2);
    }), Ce(Ne(t3), "onMonthMouseEnter", function(e2) {
      t3.handleDayMouseEnter(Ke(setMonth(t3.props.day, e2)));
    }), Ce(Ne(t3), "handleMonthNavigation", function(e2, r2) {
      t3.isDisabled(r2) || t3.isExcluded(r2) || (t3.props.setPreSelection(r2), t3.MONTH_REFS[e2].current && t3.MONTH_REFS[e2].current.focus());
    }), Ce(Ne(t3), "onMonthKeyDown", function(e2, r2) {
      var n2 = t3.props, o2 = n2.selected, a2 = n2.preSelection, s2 = n2.disabledKeyboardNavigation, i = n2.showTwoColumnMonthYearPicker, p = n2.showFourColumnMonthYearPicker, c = n2.setPreSelection, l = n2.handleOnMonthKeyDown, u = e2.key;
      if ("Tab" !== u && e2.preventDefault(), !s2) {
        var h = jt(p, i), m = Ht[h].verticalNavigationOffset, f = Ht[h].grid;
        switch (u) {
          case "Enter":
            t3.onMonthClick(e2, r2), c(o2);
            break;
          case "ArrowRight":
            t3.handleMonthNavigation(11 === r2 ? 0 : r2 + 1, addMonths(a2, 1));
            break;
          case "ArrowLeft":
            t3.handleMonthNavigation(0 === r2 ? 11 : r2 - 1, subMonths(a2, 1));
            break;
          case "ArrowUp":
            t3.handleMonthNavigation(f[0].includes(r2) ? r2 + 12 - m : r2 - m, subMonths(a2, m));
            break;
          case "ArrowDown":
            t3.handleMonthNavigation(f[f.length - 1].includes(r2) ? r2 - 12 + m : r2 + m, addMonths(a2, m));
        }
      }
      l && l(e2);
    }), Ce(Ne(t3), "onQuarterClick", function(e2, r2) {
      t3.handleDayClick(Qe(setQuarter(t3.props.day, r2)), e2);
    }), Ce(Ne(t3), "onQuarterMouseEnter", function(e2) {
      t3.handleDayMouseEnter(Qe(setQuarter(t3.props.day, e2)));
    }), Ce(Ne(t3), "handleQuarterNavigation", function(e2, r2) {
      t3.isDisabled(r2) || t3.isExcluded(r2) || (t3.props.setPreSelection(r2), t3.QUARTER_REFS[e2 - 1].current && t3.QUARTER_REFS[e2 - 1].current.focus());
    }), Ce(Ne(t3), "onQuarterKeyDown", function(e2, r2) {
      var n2 = e2.key;
      if (!t3.props.disabledKeyboardNavigation)
        switch (n2) {
          case "Enter":
            t3.onQuarterClick(e2, r2), t3.props.setPreSelection(t3.props.selected);
            break;
          case "ArrowRight":
            t3.handleQuarterNavigation(4 === r2 ? 1 : r2 + 1, addQuarters(t3.props.preSelection, 1));
            break;
          case "ArrowLeft":
            t3.handleQuarterNavigation(1 === r2 ? 4 : r2 - 1, subQuarters(t3.props.preSelection, 1));
        }
    }), Ce(Ne(t3), "getMonthClassNames", function(e2) {
      var n2 = t3.props, o2 = n2.day, a2 = n2.startDate, s2 = n2.endDate, i = n2.selected, p = n2.minDate, c = n2.maxDate, l = n2.preSelection, d = n2.monthClassName, u = n2.excludeDates, h = n2.includeDates, m = d ? d(setMonth(o2, e2)) : void 0, f = setMonth(o2, e2);
      return (0, import_classnames.default)("react-datepicker__month-text", "react-datepicker__month-".concat(e2), m, { "react-datepicker__month-text--disabled": (p || c || u || h) && ot(f, t3.props), "react-datepicker__month-text--selected": t3.isSelectedMonth(o2, e2, i), "react-datepicker__month-text--keyboard-selected": !t3.props.disabledKeyboardNavigation && t3.isSelectedMonth(o2, e2, l), "react-datepicker__month-text--in-selecting-range": t3.isInSelectingRangeMonth(e2), "react-datepicker__month-text--in-range": at(a2, s2, e2, o2), "react-datepicker__month-text--range-start": t3.isRangeStartMonth(e2), "react-datepicker__month-text--range-end": t3.isRangeEndMonth(e2), "react-datepicker__month-text--selecting-range-start": t3.isSelectingMonthRangeStart(e2), "react-datepicker__month-text--selecting-range-end": t3.isSelectingMonthRangeEnd(e2), "react-datepicker__month-text--today": t3.isCurrentMonth(o2, e2) });
    }), Ce(Ne(t3), "getTabIndex", function(e2) {
      var r2 = getMonth(t3.props.preSelection);
      return t3.props.disabledKeyboardNavigation || e2 !== r2 ? "-1" : "0";
    }), Ce(Ne(t3), "getQuarterTabIndex", function(e2) {
      var r2 = getQuarter(t3.props.preSelection);
      return t3.props.disabledKeyboardNavigation || e2 !== r2 ? "-1" : "0";
    }), Ce(Ne(t3), "getAriaLabel", function(e2) {
      var r2 = t3.props, n2 = r2.chooseDayAriaLabelPrefix, o2 = void 0 === n2 ? "Choose" : n2, a2 = r2.disabledDayAriaLabelPrefix, s2 = void 0 === a2 ? "Not available" : a2, i = r2.day, p = setMonth(i, e2), c = t3.isDisabled(p) || t3.isExcluded(p) ? s2 : o2;
      return "".concat(c, " ").concat(Le(p, "MMMM yyyy"));
    }), Ce(Ne(t3), "getQuarterClassNames", function(e2) {
      var n2 = t3.props, o2 = n2.day, a2 = n2.startDate, s2 = n2.endDate, i = n2.selected, p = n2.minDate, c = n2.maxDate, l = n2.preSelection, d = n2.disabledKeyboardNavigation;
      return (0, import_classnames.default)("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e2), { "react-datepicker__quarter-text--disabled": (p || c) && st(setQuarter(o2, e2), t3.props), "react-datepicker__quarter-text--selected": t3.isSelectedQuarter(o2, e2, i), "react-datepicker__quarter-text--keyboard-selected": !d && t3.isSelectedQuarter(o2, e2, l), "react-datepicker__quarter-text--in-selecting-range": t3.isInSelectingRangeQuarter(e2), "react-datepicker__quarter-text--in-range": ct(a2, s2, e2, o2), "react-datepicker__quarter-text--range-start": t3.isRangeStartQuarter(e2), "react-datepicker__quarter-text--range-end": t3.isRangeEndQuarter(e2) });
    }), Ce(Ne(t3), "getMonthContent", function(e2) {
      var r2 = t3.props, n2 = r2.showFullMonthYearPicker, o2 = r2.renderMonthContent, a2 = r2.locale, s2 = r2.day, i = tt(e2, a2), p = et(e2, a2);
      return o2 ? o2(e2, i, p, s2) : n2 ? p : i;
    }), Ce(Ne(t3), "getQuarterContent", function(e2) {
      var r2 = t3.props, n2 = r2.renderQuarterContent, o2 = function(e3, t4) {
        return Le(setQuarter(Ie(), e3), "QQQ", t4);
      }(e2, r2.locale);
      return n2 ? n2(e2, o2) : o2;
    }), Ce(Ne(t3), "renderMonths", function() {
      var r2 = t3.props, n2 = r2.showTwoColumnMonthYearPicker, o2 = r2.showFourColumnMonthYearPicker, a2 = r2.day, s2 = r2.selected;
      return Ht[jt(o2, n2)].grid.map(function(r3, n3) {
        return import_react4.default.createElement("div", { className: "react-datepicker__month-wrapper", key: n3 }, r3.map(function(r4, n4) {
          return import_react4.default.createElement("div", { ref: t3.MONTH_REFS[r4], key: n4, onClick: function(e2) {
            t3.onMonthClick(e2, r4);
          }, onKeyDown: function(e2) {
            Pt(e2) && (e2.preventDefault(), e2.key = "Enter"), t3.onMonthKeyDown(e2, r4);
          }, onMouseEnter: t3.props.usePointerEvent ? void 0 : function() {
            return t3.onMonthMouseEnter(r4);
          }, onPointerEnter: t3.props.usePointerEvent ? function() {
            return t3.onMonthMouseEnter(r4);
          } : void 0, tabIndex: t3.getTabIndex(r4), className: t3.getMonthClassNames(r4), role: "option", "aria-label": t3.getAriaLabel(r4), "aria-current": t3.isCurrentMonth(a2, r4) ? "date" : void 0, "aria-selected": t3.isSelectedMonth(a2, r4, s2) }, t3.getMonthContent(r4));
        }));
      });
    }), Ce(Ne(t3), "renderQuarters", function() {
      var r2 = t3.props, n2 = r2.day, o2 = r2.selected;
      return import_react4.default.createElement("div", { className: "react-datepicker__quarter-wrapper" }, [1, 2, 3, 4].map(function(r3, a2) {
        return import_react4.default.createElement("div", { key: a2, ref: t3.QUARTER_REFS[a2], role: "option", onClick: function(e2) {
          t3.onQuarterClick(e2, r3);
        }, onKeyDown: function(e2) {
          t3.onQuarterKeyDown(e2, r3);
        }, onMouseEnter: t3.props.usePointerEvent ? void 0 : function() {
          return t3.onQuarterMouseEnter(r3);
        }, onPointerEnter: t3.props.usePointerEvent ? function() {
          return t3.onQuarterMouseEnter(r3);
        } : void 0, className: t3.getQuarterClassNames(r3), "aria-selected": t3.isSelectedQuarter(n2, r3, o2), tabIndex: t3.getQuarterTabIndex(r3), "aria-current": t3.isCurrentQuarter(n2, r3) ? "date" : void 0 }, t3.getQuarterContent(r3));
      }));
    }), Ce(Ne(t3), "getClassNames", function() {
      var e2 = t3.props, n2 = e2.selectingDate, o2 = e2.selectsStart, a2 = e2.selectsEnd, s2 = e2.showMonthYearPicker, i = e2.showQuarterYearPicker, p = e2.showWeekPicker;
      return (0, import_classnames.default)("react-datepicker__month", { "react-datepicker__month--selecting-range": n2 && (o2 || a2) }, { "react-datepicker__monthPicker": s2 }, { "react-datepicker__quarterPicker": i }, { "react-datepicker__weekPicker": p });
    }), t3;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "render", value: function() {
    var t3 = this.props, r2 = t3.showMonthYearPicker, n2 = t3.showQuarterYearPicker, o = t3.day, a = t3.ariaLabelPrefix, s = void 0 === a ? "Month " : a, i = s ? s.trim() + " " : "";
    return import_react4.default.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(i).concat(Le(o, "MMMM, yyyy")), role: "listbox" }, r2 ? this.renderMonths() : n2 ? this.renderQuarters() : this.renderWeeks());
  } }]), n;
}();
var qt = function(t2) {
  function r2() {
    var t3;
    we(this, r2);
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    return Ce(Ne(t3 = fe(this, r2, [].concat(o))), "state", { height: null }), Ce(Ne(t3), "scrollToTheSelectedTime", function() {
      requestAnimationFrame(function() {
        t3.list && (t3.list.scrollTop = t3.centerLi && r2.calcCenterPosition(t3.props.monthRef ? t3.props.monthRef.clientHeight - t3.header.clientHeight : t3.list.clientHeight, t3.centerLi));
      });
    }), Ce(Ne(t3), "handleClick", function(e2) {
      (t3.props.minTime || t3.props.maxTime) && ht(e2, t3.props) || (t3.props.excludeTimes || t3.props.includeTimes || t3.props.filterTime) && ut(e2, t3.props) || t3.props.onChange(e2);
    }), Ce(Ne(t3), "isSelectedTime", function(e2) {
      return t3.props.selected && (r3 = t3.props.selected, n2 = e2, _t(r3).getTime() === _t(n2).getTime());
      var r3, n2;
    }), Ce(Ne(t3), "isDisabledTime", function(e2) {
      return (t3.props.minTime || t3.props.maxTime) && ht(e2, t3.props) || (t3.props.excludeTimes || t3.props.includeTimes || t3.props.filterTime) && ut(e2, t3.props);
    }), Ce(Ne(t3), "liClasses", function(e2) {
      var r3 = ["react-datepicker__time-list-item", t3.props.timeClassName ? t3.props.timeClassName(e2) : void 0];
      return t3.isSelectedTime(e2) && r3.push("react-datepicker__time-list-item--selected"), t3.isDisabledTime(e2) && r3.push("react-datepicker__time-list-item--disabled"), t3.props.injectTimes && (60 * getHours(e2) + getMinutes(e2)) % t3.props.intervals != 0 && r3.push("react-datepicker__time-list-item--injected"), r3.join(" ");
    }), Ce(Ne(t3), "handleOnKeyDown", function(e2, r3) {
      " " === e2.key && (e2.preventDefault(), e2.key = "Enter"), "ArrowUp" !== e2.key && "ArrowLeft" !== e2.key || !e2.target.previousSibling || (e2.preventDefault(), e2.target.previousSibling.focus()), "ArrowDown" !== e2.key && "ArrowRight" !== e2.key || !e2.target.nextSibling || (e2.preventDefault(), e2.target.nextSibling.focus()), "Enter" === e2.key && t3.handleClick(r3), t3.props.handleOnKeyDown(e2);
    }), Ce(Ne(t3), "renderTimes", function() {
      for (var r3 = [], n2 = t3.props.format ? t3.props.format : "p", o2 = t3.props.intervals, a2 = t3.props.selected || t3.props.openToDate || Ie(), s = startOfDay(a2), p = t3.props.injectTimes && t3.props.injectTimes.sort(function(e2, t4) {
        return e2 - t4;
      }), c = 60 * function(e2) {
        var t4 = new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()), r4 = new Date(e2.getFullYear(), e2.getMonth(), e2.getDate(), 24);
        return Math.round((+r4 - +t4) / 36e5);
      }(a2), l = c / o2, d = 0; d < l; d++) {
        var u = addMinutes(s, d * o2);
        if (r3.push(u), p) {
          var h = bt(s, u, d, o2, p);
          r3 = r3.concat(h);
        }
      }
      var m = r3.reduce(function(e2, t4) {
        return t4.getTime() <= a2.getTime() ? t4 : e2;
      }, r3[0]);
      return r3.map(function(r4, o3) {
        return import_react4.default.createElement("li", { key: o3, onClick: t3.handleClick.bind(Ne(t3), r4), className: t3.liClasses(r4), ref: function(e2) {
          r4 === m && (t3.centerLi = e2);
        }, onKeyDown: function(e2) {
          t3.handleOnKeyDown(e2, r4);
        }, tabIndex: r4 === m ? 0 : -1, role: "option", "aria-selected": t3.isSelectedTime(r4) ? "true" : void 0, "aria-disabled": t3.isDisabledTime(r4) ? "true" : void 0 }, Le(r4, n2, t3.props.locale));
      });
    }), t3;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "componentDidMount", value: function() {
    this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({ height: this.props.monthRef.clientHeight - this.header.clientHeight });
  } }, { key: "render", value: function() {
    var t3 = this, r3 = this.state.height;
    return import_react4.default.createElement("div", { className: "react-datepicker__time-container ".concat(this.props.todayButton ? "react-datepicker__time-container--with-today-button" : "") }, import_react4.default.createElement("div", { className: "react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e2) {
      t3.header = e2;
    } }, import_react4.default.createElement("div", { className: "react-datepicker-time__header" }, this.props.timeCaption)), import_react4.default.createElement("div", { className: "react-datepicker__time" }, import_react4.default.createElement("div", { className: "react-datepicker__time-box" }, import_react4.default.createElement("ul", { className: "react-datepicker__time-list", ref: function(e2) {
      t3.list = e2;
    }, style: r3 ? { height: r3 } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes()))));
  } }], [{ key: "defaultProps", get: function() {
    return { intervals: 30, onTimeChange: function() {
    }, todayButton: null, timeCaption: "Time" };
  } }]), r2;
}();
Ce(qt, "calcCenterPosition", function(e2, t2) {
  return t2.offsetTop - (e2 / 2 - t2.clientHeight / 2);
});
var Ut = function(t2) {
  function n(t3) {
    var o;
    return we(this, n), Ce(Ne(o = fe(this, n, [t3])), "YEAR_REFS", xe(Array(o.props.yearItemNumber)).map(function() {
      return import_react4.default.createRef();
    })), Ce(Ne(o), "isDisabled", function(e2) {
      return rt(e2, o.props);
    }), Ce(Ne(o), "isExcluded", function(e2) {
      return nt(e2, o.props);
    }), Ce(Ne(o), "selectingDate", function() {
      var e2;
      return null !== (e2 = o.props.selectingDate) && void 0 !== e2 ? e2 : o.props.preSelection;
    }), Ce(Ne(o), "updateFocusOnPaginate", function(e2) {
      var t4 = (function() {
        this.YEAR_REFS[e2].current.focus();
      }).bind(Ne(o));
      window.requestAnimationFrame(t4);
    }), Ce(Ne(o), "handleYearClick", function(e2, t4) {
      o.props.onDayClick && o.props.onDayClick(e2, t4);
    }), Ce(Ne(o), "handleYearNavigation", function(e2, t4) {
      var r2 = o.props, n2 = r2.date, a = r2.yearItemNumber, s = Ct(n2, a).startPeriod;
      o.isDisabled(t4) || o.isExcluded(t4) || (o.props.setPreSelection(t4), e2 - s == -1 ? o.updateFocusOnPaginate(a - 1) : e2 - s === a ? o.updateFocusOnPaginate(0) : o.YEAR_REFS[e2 - s].current.focus());
    }), Ce(Ne(o), "isSameDay", function(e2, t4) {
      return Ue(e2, t4);
    }), Ce(Ne(o), "isCurrentYear", function(e2) {
      return e2 === getYear(Ie());
    }), Ce(Ne(o), "isRangeStart", function(e2) {
      return o.props.startDate && o.props.endDate && je(setYear(Ie(), e2), o.props.startDate);
    }), Ce(Ne(o), "isRangeEnd", function(e2) {
      return o.props.startDate && o.props.endDate && je(setYear(Ie(), e2), o.props.endDate);
    }), Ce(Ne(o), "isInRange", function(e2) {
      return it(e2, o.props.startDate, o.props.endDate);
    }), Ce(Ne(o), "isInSelectingRange", function(e2) {
      var t4 = o.props, r2 = t4.selectsStart, n2 = t4.selectsEnd, a = t4.selectsRange, s = t4.startDate, i = t4.endDate;
      return !(!(r2 || n2 || a) || !o.selectingDate()) && (r2 && i ? it(e2, o.selectingDate(), i) : (n2 && s || !(!a || !s || i)) && it(e2, s, o.selectingDate()));
    }), Ce(Ne(o), "isSelectingRangeStart", function(e2) {
      if (!o.isInSelectingRange(e2))
        return false;
      var t4 = o.props, r2 = t4.startDate, n2 = t4.selectsStart, a = setYear(Ie(), e2);
      return je(a, n2 ? o.selectingDate() : r2);
    }), Ce(Ne(o), "isSelectingRangeEnd", function(e2) {
      if (!o.isInSelectingRange(e2))
        return false;
      var t4 = o.props, r2 = t4.endDate, n2 = t4.selectsEnd, a = t4.selectsRange, s = setYear(Ie(), e2);
      return je(s, n2 || a ? o.selectingDate() : r2);
    }), Ce(Ne(o), "isKeyboardSelected", function(e2) {
      var t4 = Be(setYear(o.props.date, e2));
      return !o.props.disabledKeyboardNavigation && !o.props.inline && !Ue(t4, Be(o.props.selected)) && Ue(t4, Be(o.props.preSelection));
    }), Ce(Ne(o), "onYearClick", function(e2, t4) {
      var r2 = o.props.date;
      o.handleYearClick(Be(setYear(r2, t4)), e2);
    }), Ce(Ne(o), "onYearKeyDown", function(e2, t4) {
      var r2 = e2.key, n2 = o.props.handleOnKeyDown;
      if (!o.props.disabledKeyboardNavigation)
        switch (r2) {
          case "Enter":
            o.onYearClick(e2, t4), o.props.setPreSelection(o.props.selected);
            break;
          case "ArrowRight":
            o.handleYearNavigation(t4 + 1, addYears(o.props.preSelection, 1));
            break;
          case "ArrowLeft":
            o.handleYearNavigation(t4 - 1, subYears(o.props.preSelection, 1));
        }
      n2 && n2(e2);
    }), Ce(Ne(o), "getYearClassNames", function(e2) {
      var t4 = o.props, n2 = t4.minDate, a = t4.maxDate, s = t4.selected, i = t4.excludeDates, p = t4.includeDates, c = t4.filterDate;
      return (0, import_classnames.default)("react-datepicker__year-text", { "react-datepicker__year-text--selected": e2 === getYear(s), "react-datepicker__year-text--disabled": (n2 || a || i || p || c) && pt(e2, o.props), "react-datepicker__year-text--keyboard-selected": o.isKeyboardSelected(e2), "react-datepicker__year-text--range-start": o.isRangeStart(e2), "react-datepicker__year-text--range-end": o.isRangeEnd(e2), "react-datepicker__year-text--in-range": o.isInRange(e2), "react-datepicker__year-text--in-selecting-range": o.isInSelectingRange(e2), "react-datepicker__year-text--selecting-range-start": o.isSelectingRangeStart(e2), "react-datepicker__year-text--selecting-range-end": o.isSelectingRangeEnd(e2), "react-datepicker__year-text--today": o.isCurrentYear(e2) });
    }), Ce(Ne(o), "getYearTabIndex", function(e2) {
      return o.props.disabledKeyboardNavigation ? "-1" : e2 === getYear(o.props.preSelection) ? "0" : "-1";
    }), Ce(Ne(o), "getYearContainerClassNames", function() {
      var e2 = o.props, t4 = e2.selectingDate, n2 = e2.selectsStart, a = e2.selectsEnd, s = e2.selectsRange;
      return (0, import_classnames.default)("react-datepicker__year", { "react-datepicker__year--selecting-range": t4 && (n2 || a || s) });
    }), Ce(Ne(o), "getYearContent", function(e2) {
      return o.props.renderYearContent ? o.props.renderYearContent(e2) : e2;
    }), o;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "render", value: function() {
    for (var t3 = this, r2 = [], n2 = this.props, o = n2.date, a = n2.yearItemNumber, s = n2.onYearMouseEnter, i = n2.onYearMouseLeave, p = Ct(o, a), c = p.startPeriod, l = p.endPeriod, d = function(n3) {
      r2.push(import_react4.default.createElement("div", { ref: t3.YEAR_REFS[n3 - c], onClick: function(e2) {
        t3.onYearClick(e2, n3);
      }, onKeyDown: function(e2) {
        Pt(e2) && (e2.preventDefault(), e2.key = "Enter"), t3.onYearKeyDown(e2, n3);
      }, tabIndex: t3.getYearTabIndex(n3), className: t3.getYearClassNames(n3), onMouseEnter: t3.props.usePointerEvent ? void 0 : function(e2) {
        return s(e2, n3);
      }, onPointerEnter: t3.props.usePointerEvent ? function(e2) {
        return s(e2, n3);
      } : void 0, onMouseLeave: t3.props.usePointerEvent ? void 0 : function(e2) {
        return i(e2, n3);
      }, onPointerLeave: t3.props.usePointerEvent ? function(e2) {
        return i(e2, n3);
      } : void 0, key: n3, "aria-current": t3.isCurrentYear(n3) ? "date" : void 0 }, t3.getYearContent(n3)));
    }, u = c; u <= l; u++)
      d(u);
    return import_react4.default.createElement("div", { className: this.getYearContainerClassNames() }, import_react4.default.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, r2));
  } }]), n;
}();
var zt = function(t2) {
  function r2(t3) {
    var n;
    return we(this, r2), Ce(Ne(n = fe(this, r2, [t3])), "onTimeChange", function(e2) {
      n.setState({ time: e2 });
      var t4 = n.props.date, r3 = t4 instanceof Date && !isNaN(t4) ? t4 : /* @__PURE__ */ new Date();
      r3.setHours(e2.split(":")[0]), r3.setMinutes(e2.split(":")[1]), n.props.onChange(r3);
    }), Ce(Ne(n), "renderTimeInput", function() {
      var t4 = n.state.time, r3 = n.props, o = r3.date, a = r3.timeString, s = r3.customTimeInput;
      return s ? import_react4.default.cloneElement(s, { date: o, value: t4, onChange: n.onTimeChange }) : import_react4.default.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", required: true, value: t4, onChange: function(e2) {
        n.onTimeChange(e2.target.value || a);
      } });
    }), n.state = { time: n.props.timeString }, n;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "render", value: function() {
    return import_react4.default.createElement("div", { className: "react-datepicker__input-time-container" }, import_react4.default.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel), import_react4.default.createElement("div", { className: "react-datepicker-time__input-container" }, import_react4.default.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())));
  } }], [{ key: "getDerivedStateFromProps", value: function(e2, t3) {
    return e2.timeString !== t3.time ? { time: e2.timeString } : null;
  } }]), r2;
}();
function $t(t2) {
  var r2 = t2.className, n = t2.children;
  return import_react4.default.createElement("div", { className: r2, role: "dialog", "aria-label": "Choose Date", "aria-modal": "true" }, n);
}
var Gt = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"];
var Jt = function(t2) {
  function n(t3) {
    var o;
    return we(this, n), Ce(Ne(o = fe(this, n, [t3])), "handleClickOutside", function(e2) {
      o.props.onClickOutside(e2);
    }), Ce(Ne(o), "setClickOutsideRef", function() {
      return o.containerRef.current;
    }), Ce(Ne(o), "handleDropdownFocus", function(e2) {
      (function() {
        var e3 = ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).className || "").split(/\s+/);
        return Gt.some(function(t4) {
          return e3.indexOf(t4) >= 0;
        });
      })(e2.target) && o.props.onDropdownFocus();
    }), Ce(Ne(o), "getDateInView", function() {
      var e2 = o.props, t4 = e2.preSelection, r2 = e2.selected, n2 = e2.openToDate, a = Dt(o.props), s = gt(o.props), i = Ie(), p = n2 || r2 || t4;
      return p || (a && isBefore(i, a) ? a : s && isAfter(i, s) ? s : i);
    }), Ce(Ne(o), "increaseMonth", function() {
      o.setState(function(e2) {
        var t4 = e2.date;
        return { date: addMonths(t4, 1) };
      }, function() {
        return o.handleMonthChange(o.state.date);
      });
    }), Ce(Ne(o), "decreaseMonth", function() {
      o.setState(function(e2) {
        var t4 = e2.date;
        return { date: subMonths(t4, 1) };
      }, function() {
        return o.handleMonthChange(o.state.date);
      });
    }), Ce(Ne(o), "handleDayClick", function(e2, t4, r2) {
      o.props.onSelect(e2, t4, r2), o.props.setPreSelection && o.props.setPreSelection(e2);
    }), Ce(Ne(o), "handleDayMouseEnter", function(e2) {
      o.setState({ selectingDate: e2 }), o.props.onDayMouseEnter && o.props.onDayMouseEnter(e2);
    }), Ce(Ne(o), "handleMonthMouseLeave", function() {
      o.setState({ selectingDate: null }), o.props.onMonthMouseLeave && o.props.onMonthMouseLeave();
    }), Ce(Ne(o), "handleYearMouseEnter", function(e2, t4) {
      o.setState({ selectingDate: setYear(Ie(), t4) }), o.props.onYearMouseEnter && o.props.onYearMouseEnter(e2, t4);
    }), Ce(Ne(o), "handleYearMouseLeave", function(e2, t4) {
      o.props.onYearMouseLeave && o.props.onYearMouseLeave(e2, t4);
    }), Ce(Ne(o), "handleYearChange", function(e2) {
      o.props.onYearChange && (o.props.onYearChange(e2), o.setState({ isRenderAriaLiveMessage: true })), o.props.adjustDateOnChange && (o.props.onSelect && o.props.onSelect(e2), o.props.setOpen && o.props.setOpen(true)), o.props.setPreSelection && o.props.setPreSelection(e2);
    }), Ce(Ne(o), "handleMonthChange", function(e2) {
      o.handleCustomMonthChange(e2), o.props.adjustDateOnChange && (o.props.onSelect && o.props.onSelect(e2), o.props.setOpen && o.props.setOpen(true)), o.props.setPreSelection && o.props.setPreSelection(e2);
    }), Ce(Ne(o), "handleCustomMonthChange", function(e2) {
      o.props.onMonthChange && (o.props.onMonthChange(e2), o.setState({ isRenderAriaLiveMessage: true }));
    }), Ce(Ne(o), "handleMonthYearChange", function(e2) {
      o.handleYearChange(e2), o.handleMonthChange(e2);
    }), Ce(Ne(o), "changeYear", function(e2) {
      o.setState(function(t4) {
        var r2 = t4.date;
        return { date: setYear(r2, e2) };
      }, function() {
        return o.handleYearChange(o.state.date);
      });
    }), Ce(Ne(o), "changeMonth", function(e2) {
      o.setState(function(t4) {
        var r2 = t4.date;
        return { date: setMonth(r2, e2) };
      }, function() {
        return o.handleMonthChange(o.state.date);
      });
    }), Ce(Ne(o), "changeMonthYear", function(e2) {
      o.setState(function(t4) {
        var r2 = t4.date;
        return { date: setYear(setMonth(r2, getMonth(e2)), getYear(e2)) };
      }, function() {
        return o.handleMonthYearChange(o.state.date);
      });
    }), Ce(Ne(o), "header", function() {
      var t4 = We(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.state.date, o.props.locale, o.props.calendarStartDay), n2 = [];
      return o.props.showWeekNumbers && n2.push(import_react4.default.createElement("div", { key: "W", className: "react-datepicker__day-name" }, o.props.weekLabel || "#")), n2.concat([0, 1, 2, 3, 4, 5, 6].map(function(n3) {
        var a = addDays(t4, n3), s = o.formatWeekday(a, o.props.locale), i = o.props.weekDayClassName ? o.props.weekDayClassName(a) : void 0;
        return import_react4.default.createElement("div", { key: n3, className: (0, import_classnames.default)("react-datepicker__day-name", i) }, s);
      }));
    }), Ce(Ne(o), "formatWeekday", function(e2, t4) {
      return o.props.formatWeekDay ? function(e3, t5, r2) {
        return t5(Le(e3, "EEEE", r2));
      }(e2, o.props.formatWeekDay, t4) : o.props.useWeekdaysShort ? function(e3, t5) {
        return Le(e3, "EEE", t5);
      }(e2, t4) : function(e3, t5) {
        return Le(e3, "EEEEEE", t5);
      }(e2, t4);
    }), Ce(Ne(o), "decreaseYear", function() {
      o.setState(function(e2) {
        var t4 = e2.date;
        return { date: subYears(t4, o.props.showYearPicker ? o.props.yearItemNumber : 1) };
      }, function() {
        return o.handleYearChange(o.state.date);
      });
    }), Ce(Ne(o), "clearSelectingDate", function() {
      o.setState({ selectingDate: null });
    }), Ce(Ne(o), "renderPreviousButton", function() {
      if (!o.props.renderCustomHeader) {
        var t4;
        switch (true) {
          case o.props.showMonthYearPicker:
            t4 = vt(o.state.date, o.props);
            break;
          case o.props.showYearPicker:
            t4 = function(e2) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r3 = t5.minDate, n3 = t5.yearItemNumber, o2 = void 0 === n3 ? Te : n3, a2 = Ct(Be(subYears(e2, o2)), o2).endPeriod, s2 = r3 && getYear(r3);
              return s2 && s2 > a2 || false;
            }(o.state.date, o.props);
            break;
          default:
            t4 = mt(o.state.date, o.props);
        }
        if ((o.props.forceShowMonthNavigation || o.props.showDisabledMonthNavigation || !t4) && !o.props.showTimeSelectOnly) {
          var r2 = ["react-datepicker__navigation", "react-datepicker__navigation--previous"], n2 = o.decreaseMonth;
          (o.props.showMonthYearPicker || o.props.showQuarterYearPicker || o.props.showYearPicker) && (n2 = o.decreaseYear), t4 && o.props.showDisabledMonthNavigation && (r2.push("react-datepicker__navigation--previous--disabled"), n2 = null);
          var a = o.props.showMonthYearPicker || o.props.showQuarterYearPicker || o.props.showYearPicker, s = o.props, i = s.previousMonthButtonLabel, p = s.previousYearButtonLabel, c = o.props, l = c.previousMonthAriaLabel, d = void 0 === l ? "string" == typeof i ? i : "Previous Month" : l, u = c.previousYearAriaLabel, h = void 0 === u ? "string" == typeof p ? p : "Previous Year" : u;
          return import_react4.default.createElement("button", { type: "button", className: r2.join(" "), onClick: n2, onKeyDown: o.props.handleOnKeyDown, "aria-label": a ? h : d }, import_react4.default.createElement("span", { className: ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--previous"].join(" ") }, a ? o.props.previousYearButtonLabel : o.props.previousMonthButtonLabel));
        }
      }
    }), Ce(Ne(o), "increaseYear", function() {
      o.setState(function(e2) {
        var t4 = e2.date;
        return { date: addYears(t4, o.props.showYearPicker ? o.props.yearItemNumber : 1) };
      }, function() {
        return o.handleYearChange(o.state.date);
      });
    }), Ce(Ne(o), "renderNextButton", function() {
      if (!o.props.renderCustomHeader) {
        var t4;
        switch (true) {
          case o.props.showMonthYearPicker:
            t4 = yt(o.state.date, o.props);
            break;
          case o.props.showYearPicker:
            t4 = function(e2) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r3 = t5.maxDate, n3 = t5.yearItemNumber, o2 = void 0 === n3 ? Te : n3, a2 = Ct(addYears(e2, o2), o2).startPeriod, s2 = r3 && getYear(r3);
              return s2 && s2 < a2 || false;
            }(o.state.date, o.props);
            break;
          default:
            t4 = ft(o.state.date, o.props);
        }
        if ((o.props.forceShowMonthNavigation || o.props.showDisabledMonthNavigation || !t4) && !o.props.showTimeSelectOnly) {
          var r2 = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
          o.props.showTimeSelect && r2.push("react-datepicker__navigation--next--with-time"), o.props.todayButton && r2.push("react-datepicker__navigation--next--with-today-button");
          var n2 = o.increaseMonth;
          (o.props.showMonthYearPicker || o.props.showQuarterYearPicker || o.props.showYearPicker) && (n2 = o.increaseYear), t4 && o.props.showDisabledMonthNavigation && (r2.push("react-datepicker__navigation--next--disabled"), n2 = null);
          var a = o.props.showMonthYearPicker || o.props.showQuarterYearPicker || o.props.showYearPicker, s = o.props, i = s.nextMonthButtonLabel, p = s.nextYearButtonLabel, c = o.props, l = c.nextMonthAriaLabel, d = void 0 === l ? "string" == typeof i ? i : "Next Month" : l, u = c.nextYearAriaLabel, m = void 0 === u ? "string" == typeof p ? p : "Next Year" : u;
          return import_react4.default.createElement("button", { type: "button", className: r2.join(" "), onClick: n2, onKeyDown: o.props.handleOnKeyDown, "aria-label": a ? m : d }, import_react4.default.createElement("span", { className: ["react-datepicker__navigation-icon", "react-datepicker__navigation-icon--next"].join(" ") }, a ? o.props.nextYearButtonLabel : o.props.nextMonthButtonLabel));
        }
      }
    }), Ce(Ne(o), "renderCurrentMonth", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.state.date, r2 = ["react-datepicker__current-month"];
      return o.props.showYearDropdown && r2.push("react-datepicker__current-month--hasYearDropdown"), o.props.showMonthDropdown && r2.push("react-datepicker__current-month--hasMonthDropdown"), o.props.showMonthYearDropdown && r2.push("react-datepicker__current-month--hasMonthYearDropdown"), import_react4.default.createElement("div", { className: r2.join(" ") }, Le(t4, o.props.dateFormat, o.props.locale));
    }), Ce(Ne(o), "renderYearDropdown", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (o.props.showYearDropdown && !t4)
        return import_react4.default.createElement(Yt, { adjustDateOnChange: o.props.adjustDateOnChange, date: o.state.date, onSelect: o.props.onSelect, setOpen: o.props.setOpen, dropdownMode: o.props.dropdownMode, onChange: o.changeYear, minDate: o.props.minDate, maxDate: o.props.maxDate, year: getYear(o.state.date), scrollableYearDropdown: o.props.scrollableYearDropdown, yearDropdownItemNumber: o.props.yearDropdownItemNumber });
    }), Ce(Ne(o), "renderMonthDropdown", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (o.props.showMonthDropdown && !t4)
        return import_react4.default.createElement(Ot, { dropdownMode: o.props.dropdownMode, locale: o.props.locale, onChange: o.changeMonth, month: getMonth(o.state.date), useShortMonthInDropdown: o.props.useShortMonthInDropdown });
    }), Ce(Ne(o), "renderMonthYearDropdown", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (o.props.showMonthYearDropdown && !t4)
        return import_react4.default.createElement(Lt, { dropdownMode: o.props.dropdownMode, locale: o.props.locale, dateFormat: o.props.dateFormat, onChange: o.changeMonthYear, minDate: o.props.minDate, maxDate: o.props.maxDate, date: o.state.date, scrollableMonthYearDropdown: o.props.scrollableMonthYearDropdown });
    }), Ce(Ne(o), "handleTodayButtonClick", function(e2) {
      o.props.onSelect(He(), e2), o.props.setPreSelection && o.props.setPreSelection(He());
    }), Ce(Ne(o), "renderTodayButton", function() {
      if (o.props.todayButton && !o.props.showTimeSelectOnly)
        return import_react4.default.createElement("div", { className: "react-datepicker__today-button", onClick: function(e2) {
          return o.handleTodayButtonClick(e2);
        } }, o.props.todayButton);
    }), Ce(Ne(o), "renderDefaultHeader", function(t4) {
      var r2 = t4.monthDate, n2 = t4.i;
      return import_react4.default.createElement("div", { className: "react-datepicker__header ".concat(o.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") }, o.renderCurrentMonth(r2), import_react4.default.createElement("div", { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(o.props.dropdownMode), onFocus: o.handleDropdownFocus }, o.renderMonthDropdown(0 !== n2), o.renderMonthYearDropdown(0 !== n2), o.renderYearDropdown(0 !== n2)), import_react4.default.createElement("div", { className: "react-datepicker__day-names" }, o.header(r2)));
    }), Ce(Ne(o), "renderCustomHeader", function() {
      var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = t4.monthDate, n2 = t4.i;
      if (o.props.showTimeSelect && !o.state.monthContainer || o.props.showTimeSelectOnly)
        return null;
      var a = mt(o.state.date, o.props), s = ft(o.state.date, o.props), i = vt(o.state.date, o.props), p = yt(o.state.date, o.props), c = !o.props.showMonthYearPicker && !o.props.showQuarterYearPicker && !o.props.showYearPicker;
      return import_react4.default.createElement("div", { className: "react-datepicker__header react-datepicker__header--custom", onFocus: o.props.onDropdownFocus }, o.props.renderCustomHeader(De(De({}, o.state), {}, { customHeaderCount: n2, monthDate: r2, changeMonth: o.changeMonth, changeYear: o.changeYear, decreaseMonth: o.decreaseMonth, increaseMonth: o.increaseMonth, decreaseYear: o.decreaseYear, increaseYear: o.increaseYear, prevMonthButtonDisabled: a, nextMonthButtonDisabled: s, prevYearButtonDisabled: i, nextYearButtonDisabled: p })), c && import_react4.default.createElement("div", { className: "react-datepicker__day-names" }, o.header(r2)));
    }), Ce(Ne(o), "renderYearHeader", function(t4) {
      var r2 = t4.monthDate, n2 = o.props, a = n2.showYearPicker, s = Ct(r2, n2.yearItemNumber), i = s.startPeriod, p = s.endPeriod;
      return import_react4.default.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, a ? "".concat(i, " - ").concat(p) : getYear(r2));
    }), Ce(Ne(o), "renderHeader", function(e2) {
      switch (true) {
        case void 0 !== o.props.renderCustomHeader:
          return o.renderCustomHeader(e2);
        case (o.props.showMonthYearPicker || o.props.showQuarterYearPicker || o.props.showYearPicker):
          return o.renderYearHeader(e2);
        default:
          return o.renderDefaultHeader(e2);
      }
    }), Ce(Ne(o), "renderMonths", function() {
      var t4;
      if (!o.props.showTimeSelectOnly && !o.props.showYearPicker) {
        for (var r2 = [], n2 = o.props.showPreviousMonths ? o.props.monthsShown - 1 : 0, a = o.props.showMonthYearPicker || o.props.showQuarterYearPicker ? addYears(o.state.date, n2) : subMonths(o.state.date, n2), s = null !== (t4 = o.props.monthSelectedIn) && void 0 !== t4 ? t4 : n2, i = 0; i < o.props.monthsShown; ++i) {
          var p = i - s + n2, c = o.props.showMonthYearPicker || o.props.showQuarterYearPicker ? addYears(a, p) : addMonths(a, p), l = "month-".concat(i), u = i < o.props.monthsShown - 1, m = i > 0;
          r2.push(import_react4.default.createElement("div", { key: l, ref: function(e2) {
            o.monthContainer = e2;
          }, className: "react-datepicker__month-container" }, o.renderHeader({ monthDate: c, i }), import_react4.default.createElement(Vt, { chooseDayAriaLabelPrefix: o.props.chooseDayAriaLabelPrefix, disabledDayAriaLabelPrefix: o.props.disabledDayAriaLabelPrefix, weekAriaLabelPrefix: o.props.weekAriaLabelPrefix, ariaLabelPrefix: o.props.monthAriaLabelPrefix, onChange: o.changeMonthYear, day: c, dayClassName: o.props.dayClassName, calendarStartDay: o.props.calendarStartDay, monthClassName: o.props.monthClassName, onDayClick: o.handleDayClick, handleOnKeyDown: o.props.handleOnDayKeyDown, handleOnMonthKeyDown: o.props.handleOnKeyDown, usePointerEvent: o.props.usePointerEvent, onDayMouseEnter: o.handleDayMouseEnter, onMouseLeave: o.handleMonthMouseLeave, onWeekSelect: o.props.onWeekSelect, orderInDisplay: i, formatWeekNumber: o.props.formatWeekNumber, locale: o.props.locale, minDate: o.props.minDate, maxDate: o.props.maxDate, excludeDates: o.props.excludeDates, excludeDateIntervals: o.props.excludeDateIntervals, highlightDates: o.props.highlightDates, holidays: o.props.holidays, selectingDate: o.state.selectingDate, includeDates: o.props.includeDates, includeDateIntervals: o.props.includeDateIntervals, inline: o.props.inline, shouldFocusDayInline: o.props.shouldFocusDayInline, fixedHeight: o.props.fixedHeight, filterDate: o.props.filterDate, preSelection: o.props.preSelection, setPreSelection: o.props.setPreSelection, selected: o.props.selected, selectsStart: o.props.selectsStart, selectsEnd: o.props.selectsEnd, selectsRange: o.props.selectsRange, selectsDisabledDaysInRange: o.props.selectsDisabledDaysInRange, selectsMultiple: o.props.selectsMultiple, selectedDates: o.props.selectedDates, showWeekNumbers: o.props.showWeekNumbers, startDate: o.props.startDate, endDate: o.props.endDate, peekNextMonth: o.props.peekNextMonth, setOpen: o.props.setOpen, shouldCloseOnSelect: o.props.shouldCloseOnSelect, renderDayContents: o.props.renderDayContents, renderMonthContent: o.props.renderMonthContent, renderQuarterContent: o.props.renderQuarterContent, renderYearContent: o.props.renderYearContent, disabledKeyboardNavigation: o.props.disabledKeyboardNavigation, showMonthYearPicker: o.props.showMonthYearPicker, showFullMonthYearPicker: o.props.showFullMonthYearPicker, showTwoColumnMonthYearPicker: o.props.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker: o.props.showFourColumnMonthYearPicker, showYearPicker: o.props.showYearPicker, showQuarterYearPicker: o.props.showQuarterYearPicker, showWeekPicker: o.props.showWeekPicker, isInputFocused: o.props.isInputFocused, containerRef: o.containerRef, monthShowsDuplicateDaysEnd: u, monthShowsDuplicateDaysStart: m })));
        }
        return r2;
      }
    }), Ce(Ne(o), "renderYears", function() {
      if (!o.props.showTimeSelectOnly)
        return o.props.showYearPicker ? import_react4.default.createElement("div", { className: "react-datepicker__year--container" }, o.renderHeader({ monthDate: o.state.date }), import_react4.default.createElement(Ut, _e({ onDayClick: o.handleDayClick, selectingDate: o.state.selectingDate, clearSelectingDate: o.clearSelectingDate, date: o.state.date }, o.props, { onYearMouseEnter: o.handleYearMouseEnter, onYearMouseLeave: o.handleYearMouseLeave }))) : void 0;
    }), Ce(Ne(o), "renderTimeSection", function() {
      if (o.props.showTimeSelect && (o.state.monthContainer || o.props.showTimeSelectOnly))
        return import_react4.default.createElement(qt, { selected: o.props.selected, openToDate: o.props.openToDate, onChange: o.props.onTimeChange, timeClassName: o.props.timeClassName, format: o.props.timeFormat, includeTimes: o.props.includeTimes, intervals: o.props.timeIntervals, minTime: o.props.minTime, maxTime: o.props.maxTime, excludeTimes: o.props.excludeTimes, filterTime: o.props.filterTime, timeCaption: o.props.timeCaption, todayButton: o.props.todayButton, showMonthDropdown: o.props.showMonthDropdown, showMonthYearDropdown: o.props.showMonthYearDropdown, showYearDropdown: o.props.showYearDropdown, withPortal: o.props.withPortal, monthRef: o.state.monthContainer, injectTimes: o.props.injectTimes, locale: o.props.locale, handleOnKeyDown: o.props.handleOnKeyDown, showTimeSelectOnly: o.props.showTimeSelectOnly });
    }), Ce(Ne(o), "renderInputTimeSection", function() {
      var t4 = new Date(o.props.selected), r2 = Re(t4) && Boolean(o.props.selected) ? "".concat(St(t4.getHours()), ":").concat(St(t4.getMinutes())) : "";
      if (o.props.showTimeInput)
        return import_react4.default.createElement(zt, { date: t4, timeString: r2, timeInputLabel: o.props.timeInputLabel, onChange: o.props.onTimeChange, customTimeInput: o.props.customTimeInput });
    }), Ce(Ne(o), "renderAriaLiveRegion", function() {
      var t4, r2 = Ct(o.state.date, o.props.yearItemNumber), n2 = r2.startPeriod, a = r2.endPeriod;
      return t4 = o.props.showYearPicker ? "".concat(n2, " - ").concat(a) : o.props.showMonthYearPicker || o.props.showQuarterYearPicker ? getYear(o.state.date) : "".concat(et(getMonth(o.state.date), o.props.locale), " ").concat(getYear(o.state.date)), import_react4.default.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, o.state.isRenderAriaLiveMessage && t4);
    }), Ce(Ne(o), "renderChildren", function() {
      if (o.props.children)
        return import_react4.default.createElement("div", { className: "react-datepicker__children-container" }, o.props.children);
    }), o.containerRef = import_react4.default.createRef(), o.state = { date: o.getDateInView(), selectingDate: null, monthContainer: null, isRenderAriaLiveMessage: false }, o;
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "componentDidMount", value: function() {
    var e2 = this;
    this.props.showTimeSelect && (this.assignMonthContainer = void e2.setState({ monthContainer: e2.monthContainer }));
  } }, { key: "componentDidUpdate", value: function(e2) {
    var t3 = this;
    if (!this.props.preSelection || Ue(this.props.preSelection, e2.preSelection) && this.props.monthSelectedIn === e2.monthSelectedIn)
      this.props.openToDate && !Ue(this.props.openToDate, e2.openToDate) && this.setState({ date: this.props.openToDate });
    else {
      var r2 = !Ve(this.state.date, this.props.preSelection);
      this.setState({ date: this.props.preSelection }, function() {
        return r2 && t3.handleCustomMonthChange(t3.state.date);
      });
    }
  } }, { key: "render", value: function() {
    var t3 = this.props.container || $t;
    return import_react4.default.createElement("div", { style: { display: "contents" }, ref: this.containerRef }, import_react4.default.createElement(t3, { className: (0, import_classnames.default)("react-datepicker", this.props.className, { "react-datepicker--time-only": this.props.showTimeSelectOnly }) }, this.renderAriaLiveRegion(), this.renderPreviousButton(), this.renderNextButton(), this.renderMonths(), this.renderYears(), this.renderTodayButton(), this.renderTimeSection(), this.renderInputTimeSection(), this.renderChildren()));
  } }], [{ key: "defaultProps", get: function() {
    return { onDropdownFocus: function() {
    }, monthsShown: 1, forceShowMonthNavigation: false, timeCaption: "Time", previousYearButtonLabel: "Previous Year", nextYearButtonLabel: "Next Year", previousMonthButtonLabel: "Previous Month", nextMonthButtonLabel: "Next Month", customTimeInput: null, yearItemNumber: Te };
  } }]), n;
}();
var Xt = function(t2) {
  var r2 = t2.icon, n = t2.className, o = void 0 === n ? "" : n, a = t2.onClick, s = "react-datepicker__calendar-icon";
  return import_react4.default.isValidElement(r2) ? import_react4.default.cloneElement(r2, { className: "".concat(r2.props.className || "", " ").concat(s, " ").concat(o), onClick: function(e2) {
    "function" == typeof r2.props.onClick && r2.props.onClick(e2), "function" == typeof a && a(e2);
  } }) : "string" == typeof r2 ? import_react4.default.createElement("i", { className: "".concat(s, " ").concat(r2, " ").concat(o), "aria-hidden": "true", onClick: a }) : import_react4.default.createElement("svg", { className: "".concat(s, " ").concat(o), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: a }, import_react4.default.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" }));
};
var Zt = function(t2) {
  function r2(e2) {
    var t3;
    return we(this, r2), (t3 = fe(this, r2, [e2])).el = document.createElement("div"), t3;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "componentDidMount", value: function() {
    this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
  } }, { key: "componentWillUnmount", value: function() {
    this.portalRoot.removeChild(this.el);
  } }, { key: "render", value: function() {
    return import_react_dom5.default.createPortal(this.props.children, this.el);
  } }]), r2;
}();
var er = function(e2) {
  return !e2.disabled && -1 !== e2.tabIndex;
};
var tr = function(t2) {
  function r2(t3) {
    var n;
    return we(this, r2), Ce(Ne(n = fe(this, r2, [t3])), "getTabChildren", function() {
      return Array.prototype.slice.call(n.tabLoopRef.current.querySelectorAll("[tabindex], a, button, input, select, textarea"), 1, -1).filter(er);
    }), Ce(Ne(n), "handleFocusStart", function() {
      var e2 = n.getTabChildren();
      e2 && e2.length > 1 && e2[e2.length - 1].focus();
    }), Ce(Ne(n), "handleFocusEnd", function() {
      var e2 = n.getTabChildren();
      e2 && e2.length > 1 && e2[0].focus();
    }), n.tabLoopRef = import_react4.default.createRef(), n;
  }
  return Me(r2, import_react4.default.Component), Se(r2, [{ key: "render", value: function() {
    return this.props.enableTabLoop ? import_react4.default.createElement("div", { className: "react-datepicker__tab-loop", ref: this.tabLoopRef }, import_react4.default.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: "0", onFocus: this.handleFocusStart }), this.props.children, import_react4.default.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: "0", onFocus: this.handleFocusEnd })) : this.props.children;
  } }], [{ key: "defaultProps", get: function() {
    return { enableTabLoop: true };
  } }]), r2;
}();
var rr;
var nr = (rr = function(t2) {
  function n() {
    return we(this, n), fe(this, n, arguments);
  }
  return Me(n, import_react4.default.Component), Se(n, [{ key: "render", value: function() {
    var t3, n2 = this.props, o = n2.className, a = n2.wrapperClassName, s = n2.hidePopper, i = n2.popperComponent, p = n2.targetComponent, c = n2.enableTabLoop, l = n2.popperOnKeyDown, d = n2.portalId, u = n2.portalHost, h = n2.popperProps, m = n2.showArrow;
    if (!s) {
      var f = (0, import_classnames.default)("react-datepicker-popper", o);
      t3 = import_react4.default.createElement(tr, { enableTabLoop: c }, import_react4.default.createElement("div", { ref: h.refs.setFloating, style: h.floatingStyles, className: f, "data-placement": h.placement, onKeyDown: l }, i, m && import_react4.default.createElement(FloatingArrow, { ref: h.arrowRef, context: h.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })));
    }
    this.props.popperContainer && (t3 = import_react4.default.createElement(this.props.popperContainer, {}, t3)), d && !s && (t3 = import_react4.default.createElement(Zt, { portalId: d, portalHost: u }, t3));
    var v = (0, import_classnames.default)("react-datepicker-wrapper", a);
    return import_react4.default.createElement(import_react4.default.Fragment, null, import_react4.default.createElement("div", { ref: h.refs.setReference, className: v }, p), t3);
  } }], [{ key: "defaultProps", get: function() {
    return { hidePopper: true };
  } }]), n;
}(), function(t2) {
  var r2 = De(De({}, t2), {}, { popperModifiers: t2.popperModifiers || [], popperProps: t2.popperProps || {}, hidePopper: "boolean" != typeof t2.hidePopper || t2.hidePopper }), n = import_react4.default.useRef(), o = useFloating2(De({ open: !r2.hidePopper, whileElementsMounted: autoUpdate, placement: r2.popperPlacement, middleware: [flip2({ padding: 15 }), offset(10), arrow3({ element: n })].concat(xe(r2.popperModifiers)) }, r2.popperProps));
  return import_react4.default.createElement(rr, _e({}, r2, { popperProps: De(De({}, o), {}, { arrowRef: n }) }));
});
var or = "react-datepicker-ignore-onclickoutside";
var ar = react_onclickoutside_es_default(Jt);
var sr = "Date input not valid.";
var ir = function(t2) {
  function s(t3) {
    var i;
    return we(this, s), Ce(Ne(i = fe(this, s, [t3])), "getPreSelection", function() {
      return i.props.openToDate ? i.props.openToDate : i.props.selectsEnd && i.props.startDate ? i.props.startDate : i.props.selectsStart && i.props.endDate ? i.props.endDate : Ie();
    }), Ce(Ne(i), "modifyHolidays", function() {
      var e2;
      return null === (e2 = i.props.holidays) || void 0 === e2 ? void 0 : e2.reduce(function(e3, t4) {
        var r2 = new Date(t4.date);
        return isValid(r2) ? [].concat(xe(e3), [De(De({}, t4), {}, { date: r2 })]) : e3;
      }, []);
    }), Ce(Ne(i), "calcInitialState", function() {
      var e2, t4 = i.getPreSelection(), r2 = Dt(i.props), n = gt(i.props), o = r2 && isBefore(t4, startOfDay(r2)) ? r2 : n && isAfter(t4, endOfDay(n)) ? n : t4;
      return { open: i.props.startOpen || false, preventFocus: false, preSelection: null !== (e2 = i.props.selectsRange ? i.props.startDate : i.props.selected) && void 0 !== e2 ? e2 : o, highlightDates: kt(i.props.highlightDates), focused: false, shouldFocusDayInline: false, isRenderAriaLiveMessage: false };
    }), Ce(Ne(i), "clearPreventFocusTimeout", function() {
      i.preventFocusTimeout && clearTimeout(i.preventFocusTimeout);
    }), Ce(Ne(i), "setFocus", function() {
      i.input && i.input.focus && i.input.focus({ preventScroll: true });
    }), Ce(Ne(i), "setBlur", function() {
      i.input && i.input.blur && i.input.blur(), i.cancelFocusInput();
    }), Ce(Ne(i), "setOpen", function(e2) {
      var t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      i.setState({ open: e2, preSelection: e2 && i.state.open ? i.state.preSelection : i.calcInitialState().preSelection, lastPreSelectChange: cr }, function() {
        e2 || i.setState(function(e3) {
          return { focused: !!t4 && e3.focused };
        }, function() {
          !t4 && i.setBlur(), i.setState({ inputValue: null });
        });
      });
    }), Ce(Ne(i), "inputOk", function() {
      return isDate(i.state.preSelection);
    }), Ce(Ne(i), "isCalendarOpen", function() {
      return void 0 === i.props.open ? i.state.open && !i.props.disabled && !i.props.readOnly : i.props.open;
    }), Ce(Ne(i), "handleFocus", function(e2) {
      i.state.preventFocus || (i.props.onFocus(e2), i.props.preventOpenOnFocus || i.props.readOnly || i.setOpen(true)), i.setState({ focused: true });
    }), Ce(Ne(i), "sendFocusBackToInput", function() {
      i.preventFocusTimeout && i.clearPreventFocusTimeout(), i.setState({ preventFocus: true }, function() {
        i.preventFocusTimeout = setTimeout(function() {
          i.setFocus(), i.setState({ preventFocus: false });
        });
      });
    }), Ce(Ne(i), "cancelFocusInput", function() {
      clearTimeout(i.inputFocusTimeout), i.inputFocusTimeout = null;
    }), Ce(Ne(i), "deferFocusInput", function() {
      i.cancelFocusInput(), i.inputFocusTimeout = setTimeout(function() {
        return i.setFocus();
      }, 1);
    }), Ce(Ne(i), "handleDropdownFocus", function() {
      i.cancelFocusInput();
    }), Ce(Ne(i), "handleBlur", function(e2) {
      (!i.state.open || i.props.withPortal || i.props.showTimeInput) && i.props.onBlur(e2), i.setState({ focused: false });
    }), Ce(Ne(i), "handleCalendarClickOutside", function(e2) {
      i.props.inline || i.setOpen(false), i.props.onClickOutside(e2), i.props.withPortal && e2.preventDefault();
    }), Ce(Ne(i), "handleChange", function() {
      for (var e2 = arguments.length, t4 = new Array(e2), r2 = 0; r2 < e2; r2++)
        t4[r2] = arguments[r2];
      var n = t4[0];
      if (!i.props.onChangeRaw || (i.props.onChangeRaw.apply(Ne(i), t4), "function" == typeof n.isDefaultPrevented && !n.isDefaultPrevented())) {
        i.setState({ inputValue: n.target.value, lastPreSelectChange: pr });
        var o, s2, p, c, l, d, u, h, m = (o = n.target.value, s2 = i.props.dateFormat, p = i.props.locale, c = i.props.strictParsing, l = i.props.minDate, d = null, u = Ze(p) || Ze(Xe()), h = true, Array.isArray(s2) ? (s2.forEach(function(e3) {
          var t5 = parse(o, e3, /* @__PURE__ */ new Date(), { locale: u, useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true });
          c && (h = Re(t5, l) && o === Le(t5, e3, p)), Re(t5, l) && h && (d = t5);
        }), d) : (d = parse(o, s2, /* @__PURE__ */ new Date(), { locale: u, useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true }), c ? h = Re(d) && o === Le(d, s2, p) : Re(d) || (s2 = s2.match(Oe).map(function(e3) {
          var t5 = e3[0];
          if ("p" === t5 || "P" === t5) {
            var r3 = longFormatters[t5];
            return u ? r3(e3, u.formatLong) : t5;
          }
          return e3;
        }).join(""), o.length > 0 && (d = parse(o, s2.slice(0, o.length), /* @__PURE__ */ new Date(), { useAdditionalWeekYearTokens: true, useAdditionalDayOfYearTokens: true })), Re(d) || (d = new Date(o))), Re(d) && h ? d : null));
        i.props.showTimeSelectOnly && i.props.selected && m && !Ue(m, i.props.selected) && (m = set(i.props.selected, { hours: getHours(m), minutes: getMinutes(m), seconds: getSeconds(m) })), !m && n.target.value || i.setSelected(m, n, true);
      }
    }), Ce(Ne(i), "handleSelect", function(e2, t4, r2) {
      if (i.props.shouldCloseOnSelect && !i.props.showTimeSelect && i.sendFocusBackToInput(), i.props.onChangeRaw && i.props.onChangeRaw(t4), i.setSelected(e2, t4, false, r2), i.props.showDateSelect && i.setState({ isRenderAriaLiveMessage: true }), !i.props.shouldCloseOnSelect || i.props.showTimeSelect)
        i.setPreSelection(e2);
      else if (!i.props.inline) {
        i.props.selectsRange || i.setOpen(false);
        var n = i.props, o = n.startDate, a = n.endDate;
        !o || a || Et(e2, o) || i.setOpen(false);
      }
    }), Ce(Ne(i), "setSelected", function(e2, t4, r2, n) {
      var o = e2;
      if (i.props.showYearPicker) {
        if (null !== o && pt(getYear(o), i.props))
          return;
      } else if (i.props.showMonthYearPicker) {
        if (null !== o && ot(o, i.props))
          return;
      } else if (null !== o && rt(o, i.props))
        return;
      var a = i.props, s2 = a.onChange, p = a.selectsRange, c = a.startDate, l = a.endDate, d = a.selectsMultiple, u = a.selectedDates, h = a.minTime;
      if (!ze(i.props.selected, o) || i.props.allowSameDay || p || d)
        if (null !== o && (!i.props.selected || r2 && (i.props.showTimeSelect || i.props.showTimeSelectOnly || i.props.showTimeInput) || (o = Ae(o, { hour: getHours(i.props.selected), minute: getMinutes(i.props.selected), second: getSeconds(i.props.selected) })), (i.props.showTimeSelect || i.props.showTimeSelectOnly) && h && (o = Ae(o, { hour: h.getHours(), minute: h.getMinutes(), second: h.getSeconds() })), i.props.inline || i.setState({ preSelection: o }), i.props.focusSelectedMonth || i.setState({ monthSelectedIn: n })), p) {
          var m = c && !l, f = c && l;
          !c && !l ? s2([o, null], t4) : m && (null === o ? s2([null, null], t4) : Et(o, c) ? s2([o, null], t4) : s2([c, o], t4)), f && s2([o, null], t4);
        } else if (d) {
          if (null != u && u.length)
            if (u.some(function(e3) {
              return Ue(e3, o);
            }))
              s2(u.filter(function(e3) {
                return !Ue(e3, o);
              }), t4);
            else
              s2([].concat(xe(u), [o]), t4);
          else
            s2([o], t4);
        } else
          s2(o, t4);
      r2 || (i.props.onSelect(o, t4), i.setState({ inputValue: null }));
    }), Ce(Ne(i), "setPreSelection", function(e2) {
      var t4 = void 0 !== i.props.minDate, r2 = void 0 !== i.props.maxDate, n = true;
      if (e2) {
        var o = startOfDay(e2);
        if (t4 && r2)
          n = $e(e2, i.props.minDate, i.props.maxDate);
        else if (t4) {
          var a = startOfDay(i.props.minDate);
          n = isAfter(e2, a) || ze(o, a);
        } else if (r2) {
          var s2 = endOfDay(i.props.maxDate);
          n = isBefore(e2, s2) || ze(o, s2);
        }
      }
      n && i.setState({ preSelection: e2 });
    }), Ce(Ne(i), "toggleCalendar", function() {
      i.setOpen(!i.state.open);
    }), Ce(Ne(i), "handleTimeChange", function(e2) {
      var t4 = i.props.selected ? i.props.selected : i.getPreSelection(), r2 = i.props.selected ? e2 : Ae(t4, { hour: getHours(e2), minute: getMinutes(e2) });
      i.setState({ preSelection: r2 }), i.props.onChange(r2), i.props.shouldCloseOnSelect && (i.sendFocusBackToInput(), i.setOpen(false)), i.props.showTimeInput && i.setOpen(true), (i.props.showTimeSelectOnly || i.props.showTimeSelect) && i.setState({ isRenderAriaLiveMessage: true }), i.setState({ inputValue: null });
    }), Ce(Ne(i), "onInputClick", function() {
      i.props.disabled || i.props.readOnly || i.setOpen(true), i.props.onInputClick();
    }), Ce(Ne(i), "onInputKeyDown", function(e2) {
      i.props.onKeyDown(e2);
      var t4 = e2.key;
      if (i.state.open || i.props.inline || i.props.preventOpenOnFocus) {
        if (i.state.open) {
          if ("ArrowDown" === t4 || "ArrowUp" === t4) {
            e2.preventDefault();
            var r2 = i.props.showWeekPicker && i.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', n = i.calendar.componentNode && i.calendar.componentNode.querySelector(r2);
            return void (n && n.focus({ preventScroll: true }));
          }
          var o = Ie(i.state.preSelection);
          "Enter" === t4 ? (e2.preventDefault(), i.inputOk() && i.state.lastPreSelectChange === cr ? (i.handleSelect(o, e2), !i.props.shouldCloseOnSelect && i.setPreSelection(o)) : i.setOpen(false)) : "Escape" === t4 ? (e2.preventDefault(), i.sendFocusBackToInput(), i.setOpen(false)) : "Tab" === t4 && i.setOpen(false), i.inputOk() || i.props.onInputError({ code: 1, msg: sr });
        }
      } else
        "ArrowDown" !== t4 && "ArrowUp" !== t4 && "Enter" !== t4 || i.onInputClick();
    }), Ce(Ne(i), "onPortalKeyDown", function(e2) {
      "Escape" === e2.key && (e2.preventDefault(), i.setState({ preventFocus: true }, function() {
        i.setOpen(false), setTimeout(function() {
          i.setFocus(), i.setState({ preventFocus: false });
        });
      }));
    }), Ce(Ne(i), "onDayKeyDown", function(e2) {
      i.props.onKeyDown(e2);
      var t4 = e2.key, r2 = e2.shiftKey, n = Ie(i.state.preSelection);
      if ("Enter" === t4)
        e2.preventDefault(), i.handleSelect(n, e2), !i.props.shouldCloseOnSelect && i.setPreSelection(n);
      else if ("Escape" === t4)
        e2.preventDefault(), i.setOpen(false), i.inputOk() || i.props.onInputError({ code: 1, msg: sr });
      else if (!i.props.disabledKeyboardNavigation) {
        var o;
        switch (t4) {
          case "ArrowLeft":
            o = i.props.showWeekPicker ? subWeeks(n, 1) : subDays(n, 1);
            break;
          case "ArrowRight":
            o = i.props.showWeekPicker ? addWeeks(n, 1) : addDays(n, 1);
            break;
          case "ArrowUp":
            o = subWeeks(n, 1);
            break;
          case "ArrowDown":
            o = addWeeks(n, 1);
            break;
          case "PageUp":
            o = r2 ? subYears(n, 1) : subMonths(n, 1);
            break;
          case "PageDown":
            o = r2 ? addYears(n, 1) : addMonths(n, 1);
            break;
          case "Home":
            o = We(n, i.props.locale, i.props.calendarStartDay);
            break;
          case "End":
            o = endOfWeek(n);
            break;
          default:
            o = null;
        }
        if (!o)
          return void (i.props.onInputError && i.props.onInputError({ code: 1, msg: sr }));
        if (e2.preventDefault(), i.setState({ lastPreSelectChange: cr }), i.props.adjustDateOnChange && i.setSelected(o), i.setPreSelection(o), i.props.inline) {
          var a = getMonth(n), s2 = getMonth(o), p = getYear(n), u = getYear(o);
          a !== s2 || p !== u ? i.setState({ shouldFocusDayInline: true }) : i.setState({ shouldFocusDayInline: false });
        }
      }
    }), Ce(Ne(i), "onPopperKeyDown", function(e2) {
      "Escape" === e2.key && (e2.preventDefault(), i.sendFocusBackToInput());
    }), Ce(Ne(i), "onClearClick", function(e2) {
      e2 && e2.preventDefault && e2.preventDefault(), i.sendFocusBackToInput(), i.props.selectsRange ? i.props.onChange([null, null], e2) : i.props.onChange(null, e2), i.setState({ inputValue: null });
    }), Ce(Ne(i), "clear", function() {
      i.onClearClick();
    }), Ce(Ne(i), "onScroll", function(e2) {
      "boolean" == typeof i.props.closeOnScroll && i.props.closeOnScroll ? e2.target !== document && e2.target !== document.documentElement && e2.target !== document.body || i.setOpen(false) : "function" == typeof i.props.closeOnScroll && i.props.closeOnScroll(e2) && i.setOpen(false);
    }), Ce(Ne(i), "renderCalendar", function() {
      return i.props.inline || i.isCalendarOpen() ? import_react4.default.createElement(ar, { ref: function(e2) {
        i.calendar = e2;
      }, locale: i.props.locale, calendarStartDay: i.props.calendarStartDay, chooseDayAriaLabelPrefix: i.props.chooseDayAriaLabelPrefix, disabledDayAriaLabelPrefix: i.props.disabledDayAriaLabelPrefix, weekAriaLabelPrefix: i.props.weekAriaLabelPrefix, monthAriaLabelPrefix: i.props.monthAriaLabelPrefix, adjustDateOnChange: i.props.adjustDateOnChange, setOpen: i.setOpen, shouldCloseOnSelect: i.props.shouldCloseOnSelect, dateFormat: i.props.dateFormatCalendar, useWeekdaysShort: i.props.useWeekdaysShort, formatWeekDay: i.props.formatWeekDay, dropdownMode: i.props.dropdownMode, selected: i.props.selected, preSelection: i.state.preSelection, onSelect: i.handleSelect, onWeekSelect: i.props.onWeekSelect, openToDate: i.props.openToDate, minDate: i.props.minDate, maxDate: i.props.maxDate, selectsStart: i.props.selectsStart, selectsEnd: i.props.selectsEnd, selectsRange: i.props.selectsRange, selectsMultiple: i.props.selectsMultiple, selectedDates: i.props.selectedDates, startDate: i.props.startDate, endDate: i.props.endDate, excludeDates: i.props.excludeDates, excludeDateIntervals: i.props.excludeDateIntervals, filterDate: i.props.filterDate, onClickOutside: i.handleCalendarClickOutside, formatWeekNumber: i.props.formatWeekNumber, highlightDates: i.state.highlightDates, holidays: wt(i.modifyHolidays()), includeDates: i.props.includeDates, includeDateIntervals: i.props.includeDateIntervals, includeTimes: i.props.includeTimes, injectTimes: i.props.injectTimes, inline: i.props.inline, shouldFocusDayInline: i.state.shouldFocusDayInline, peekNextMonth: i.props.peekNextMonth, showMonthDropdown: i.props.showMonthDropdown, showPreviousMonths: i.props.showPreviousMonths, useShortMonthInDropdown: i.props.useShortMonthInDropdown, showMonthYearDropdown: i.props.showMonthYearDropdown, showWeekNumbers: i.props.showWeekNumbers, showYearDropdown: i.props.showYearDropdown, withPortal: i.props.withPortal, forceShowMonthNavigation: i.props.forceShowMonthNavigation, showDisabledMonthNavigation: i.props.showDisabledMonthNavigation, scrollableYearDropdown: i.props.scrollableYearDropdown, scrollableMonthYearDropdown: i.props.scrollableMonthYearDropdown, todayButton: i.props.todayButton, weekLabel: i.props.weekLabel, outsideClickIgnoreClass: or, fixedHeight: i.props.fixedHeight, monthsShown: i.props.monthsShown, monthSelectedIn: i.state.monthSelectedIn, onDropdownFocus: i.handleDropdownFocus, onMonthChange: i.props.onMonthChange, onYearChange: i.props.onYearChange, dayClassName: i.props.dayClassName, weekDayClassName: i.props.weekDayClassName, monthClassName: i.props.monthClassName, timeClassName: i.props.timeClassName, showDateSelect: i.props.showDateSelect, showTimeSelect: i.props.showTimeSelect, showTimeSelectOnly: i.props.showTimeSelectOnly, onTimeChange: i.handleTimeChange, timeFormat: i.props.timeFormat, timeIntervals: i.props.timeIntervals, minTime: i.props.minTime, maxTime: i.props.maxTime, excludeTimes: i.props.excludeTimes, filterTime: i.props.filterTime, timeCaption: i.props.timeCaption, className: i.props.calendarClassName, container: i.props.calendarContainer, yearItemNumber: i.props.yearItemNumber, yearDropdownItemNumber: i.props.yearDropdownItemNumber, previousMonthAriaLabel: i.props.previousMonthAriaLabel, previousMonthButtonLabel: i.props.previousMonthButtonLabel, nextMonthAriaLabel: i.props.nextMonthAriaLabel, nextMonthButtonLabel: i.props.nextMonthButtonLabel, previousYearAriaLabel: i.props.previousYearAriaLabel, previousYearButtonLabel: i.props.previousYearButtonLabel, nextYearAriaLabel: i.props.nextYearAriaLabel, nextYearButtonLabel: i.props.nextYearButtonLabel, timeInputLabel: i.props.timeInputLabel, disabledKeyboardNavigation: i.props.disabledKeyboardNavigation, renderCustomHeader: i.props.renderCustomHeader, popperProps: i.props.popperProps, renderDayContents: i.props.renderDayContents, renderMonthContent: i.props.renderMonthContent, renderQuarterContent: i.props.renderQuarterContent, renderYearContent: i.props.renderYearContent, onDayMouseEnter: i.props.onDayMouseEnter, onMonthMouseLeave: i.props.onMonthMouseLeave, onYearMouseEnter: i.props.onYearMouseEnter, onYearMouseLeave: i.props.onYearMouseLeave, selectsDisabledDaysInRange: i.props.selectsDisabledDaysInRange, showTimeInput: i.props.showTimeInput, showMonthYearPicker: i.props.showMonthYearPicker, showFullMonthYearPicker: i.props.showFullMonthYearPicker, showTwoColumnMonthYearPicker: i.props.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker: i.props.showFourColumnMonthYearPicker, showYearPicker: i.props.showYearPicker, showQuarterYearPicker: i.props.showQuarterYearPicker, showWeekPicker: i.props.showWeekPicker, excludeScrollbar: i.props.excludeScrollbar, handleOnKeyDown: i.props.onKeyDown, handleOnDayKeyDown: i.onDayKeyDown, isInputFocused: i.state.focused, customTimeInput: i.props.customTimeInput, setPreSelection: i.setPreSelection, usePointerEvent: i.props.usePointerEvent }, i.props.children) : null;
    }), Ce(Ne(i), "renderAriaLiveRegion", function() {
      var t4, r2 = i.props, n = r2.dateFormat, o = r2.locale, a = i.props.showTimeInput || i.props.showTimeSelect ? "PPPPp" : "PPPP";
      return t4 = i.props.selectsRange ? "Selected start date: ".concat(Fe(i.props.startDate, { dateFormat: a, locale: o }), ". ").concat(i.props.endDate ? "End date: " + Fe(i.props.endDate, { dateFormat: a, locale: o }) : "") : i.props.showTimeSelectOnly ? "Selected time: ".concat(Fe(i.props.selected, { dateFormat: n, locale: o })) : i.props.showYearPicker ? "Selected year: ".concat(Fe(i.props.selected, { dateFormat: "yyyy", locale: o })) : i.props.showMonthYearPicker ? "Selected month: ".concat(Fe(i.props.selected, { dateFormat: "MMMM yyyy", locale: o })) : i.props.showQuarterYearPicker ? "Selected quarter: ".concat(Fe(i.props.selected, { dateFormat: "yyyy, QQQ", locale: o })) : "Selected date: ".concat(Fe(i.props.selected, { dateFormat: a, locale: o })), import_react4.default.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, t4);
    }), Ce(Ne(i), "renderDateInput", function() {
      var t4, n = (0, import_classnames.default)(i.props.className, Ce({}, or, i.state.open)), o = i.props.customInput || import_react4.default.createElement("input", { type: "text" }), a = i.props.customInputRef || "ref", s2 = "string" == typeof i.props.value ? i.props.value : "string" == typeof i.state.inputValue ? i.state.inputValue : i.props.selectsRange ? function(e2, t5, r2) {
        if (!e2)
          return "";
        var n2 = Fe(e2, r2), o2 = t5 ? Fe(t5, r2) : "";
        return "".concat(n2, " - ").concat(o2);
      }(i.props.startDate, i.props.endDate, i.props) : i.props.selectsMultiple ? function(e2, t5) {
        if (null == e2 || !e2.length)
          return "";
        var r2 = Fe(e2[0], t5);
        if (1 === e2.length)
          return r2;
        if (2 === e2.length) {
          var n2 = Fe(e2[1], t5);
          return "".concat(r2, ", ").concat(n2);
        }
        var o2 = e2.length - 1;
        return "".concat(r2, " (+").concat(o2, ")");
      }(i.props.selectedDates, i.props) : Fe(i.props.selected, i.props);
      return import_react4.default.cloneElement(o, (Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(t4 = {}, a, function(e2) {
        i.input = e2;
      }), "value", s2), "onBlur", i.handleBlur), "onChange", i.handleChange), "onClick", i.onInputClick), "onFocus", i.handleFocus), "onKeyDown", i.onInputKeyDown), "id", i.props.id), "name", i.props.name), "form", i.props.form), Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(t4, "autoFocus", i.props.autoFocus), "placeholder", i.props.placeholderText), "disabled", i.props.disabled), "autoComplete", i.props.autoComplete), "className", (0, import_classnames.default)(o.props.className, n)), "title", i.props.title), "readOnly", i.props.readOnly), "required", i.props.required), "tabIndex", i.props.tabIndex), "aria-describedby", i.props.ariaDescribedBy), Ce(Ce(Ce(t4, "aria-invalid", i.props.ariaInvalid), "aria-labelledby", i.props.ariaLabelledBy), "aria-required", i.props.ariaRequired)));
    }), Ce(Ne(i), "renderClearButton", function() {
      var t4 = i.props, n = t4.isClearable, o = t4.disabled, a = t4.selected, s2 = t4.startDate, p = t4.endDate, c = t4.clearButtonTitle, l = t4.clearButtonClassName, d = void 0 === l ? "" : l, u = t4.ariaLabelClose, h = void 0 === u ? "Close" : u, m = t4.selectedDates;
      return n && (null != a || null != s2 || null != p || null != m && m.length) ? import_react4.default.createElement("button", { type: "button", className: (0, import_classnames.default)("react-datepicker__close-icon", d, { "react-datepicker__close-icon--disabled": o }), disabled: o, "aria-label": h, onClick: i.onClearClick, title: c, tabIndex: -1 }) : null;
    }), i.state = i.calcInitialState(), i.preventFocusTimeout = null, i;
  }
  return Me(s, import_react4.default.Component), Se(s, [{ key: "componentDidMount", value: function() {
    window.addEventListener("scroll", this.onScroll, true);
  } }, { key: "componentDidUpdate", value: function(e2, t3) {
    var r2, n;
    e2.inline && (r2 = e2.selected, n = this.props.selected, r2 && n ? getMonth(r2) !== getMonth(n) || getYear(r2) !== getYear(n) : r2 !== n) && this.setPreSelection(this.props.selected), void 0 !== this.state.monthSelectedIn && e2.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), e2.highlightDates !== this.props.highlightDates && this.setState({ highlightDates: kt(this.props.highlightDates) }), t3.focused || ze(e2.selected, this.props.selected) || this.setState({ inputValue: null }), t3.open !== this.state.open && (false === t3.open && true === this.state.open && this.props.onCalendarOpen(), true === t3.open && false === this.state.open && this.props.onCalendarClose());
  } }, { key: "componentWillUnmount", value: function() {
    this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, true);
  } }, { key: "renderInputContainer", value: function() {
    var t3 = this.props, r2 = t3.showIcon, n = t3.icon, o = t3.calendarIconClassname, a = t3.toggleCalendarOnIconClick, s2 = this.state.open;
    return import_react4.default.createElement("div", { className: "react-datepicker__input-container".concat(r2 ? " react-datepicker__view-calendar-icon" : "") }, r2 && import_react4.default.createElement(Xt, _e({ icon: n, className: "".concat(o, " ").concat(s2 && "react-datepicker-ignore-onclickoutside") }, a ? { onClick: this.toggleCalendar } : null)), this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(), this.renderDateInput(), this.renderClearButton());
  } }, { key: "render", value: function() {
    var t3 = this.renderCalendar();
    if (this.props.inline)
      return t3;
    if (this.props.withPortal) {
      var r2 = this.state.open ? import_react4.default.createElement(tr, { enableTabLoop: this.props.enableTabLoop }, import_react4.default.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t3)) : null;
      return this.state.open && this.props.portalId && (r2 = import_react4.default.createElement(Zt, { portalId: this.props.portalId, portalHost: this.props.portalHost }, r2)), import_react4.default.createElement("div", null, this.renderInputContainer(), r2);
    }
    return import_react4.default.createElement(nr, { className: this.props.popperClassName, wrapperClassName: this.props.wrapperClassName, hidePopper: !this.isCalendarOpen(), portalId: this.props.portalId, portalHost: this.props.portalHost, popperModifiers: this.props.popperModifiers, targetComponent: this.renderInputContainer(), popperContainer: this.props.popperContainer, popperComponent: t3, popperPlacement: this.props.popperPlacement, popperProps: this.props.popperProps, popperOnKeyDown: this.onPopperKeyDown, enableTabLoop: this.props.enableTabLoop, showArrow: this.props.showPopperArrow });
  } }], [{ key: "defaultProps", get: function() {
    return { allowSameDay: false, dateFormat: "MM/dd/yyyy", dateFormatCalendar: "LLLL yyyy", onChange: function() {
    }, disabled: false, disabledKeyboardNavigation: false, dropdownMode: "scroll", onFocus: function() {
    }, onBlur: function() {
    }, onKeyDown: function() {
    }, onInputClick: function() {
    }, onSelect: function() {
    }, onClickOutside: function() {
    }, onMonthChange: function() {
    }, onCalendarOpen: function() {
    }, onCalendarClose: function() {
    }, preventOpenOnFocus: false, onYearChange: function() {
    }, onInputError: function() {
    }, monthsShown: 1, readOnly: false, withPortal: false, selectsDisabledDaysInRange: false, shouldCloseOnSelect: true, showTimeSelect: false, showTimeInput: false, showPreviousMonths: false, showMonthYearPicker: false, showFullMonthYearPicker: false, showTwoColumnMonthYearPicker: false, showFourColumnMonthYearPicker: false, showYearPicker: false, showQuarterYearPicker: false, showWeekPicker: false, strictParsing: false, timeIntervals: 30, timeCaption: "Time", previousMonthAriaLabel: "Previous Month", previousMonthButtonLabel: "Previous Month", nextMonthAriaLabel: "Next Month", nextMonthButtonLabel: "Next Month", previousYearAriaLabel: "Previous Year", previousYearButtonLabel: "Previous Year", nextYearAriaLabel: "Next Year", nextYearButtonLabel: "Next Year", timeInputLabel: "Time", enableTabLoop: true, yearItemNumber: Te, focusSelectedMonth: false, showPopperArrow: true, excludeScrollbar: true, customTimeInput: null, calendarStartDay: void 0, toggleCalendarOnIconClick: false, usePointerEvent: false };
  } }]), s;
}();
var pr = "input";
var cr = "navigate";
export {
  $t as CalendarContainer,
  ir as default,
  Xe as getDefaultLocale,
  Ge as registerLocale,
  Je as setDefaultLocale
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=react-datepicker.js.map
