import {
  clsx_default
} from "./chunk-CCRBYHLB.js";
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
  __commonJS,
  __toESM
} from "./chunk-BYPFWIQ6.js";

// node_modules/lodash.memoize/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.memoize/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function getValue3(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var splice = arrayProto.splice;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue3(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function memoize2(func, resolver2) {
      if (typeof func != "function" || resolver2 && typeof resolver2 != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver2 ? resolver2.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize2.Cache || MapCache)();
      return memoized;
    }
    memoize2.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    module.exports = memoize2;
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning3 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning3 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning3;
  }
});

// node_modules/react-date-picker/dist/esm/DatePicker.js
var import_react30 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// node_modules/make-event-props/dist/esm/index.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var clipboardEvents = ["onCopy", "onCut", "onPaste"];
var compositionEvents = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
];
var focusEvents = ["onFocus", "onBlur"];
var formEvents = ["onInput", "onInvalid", "onReset", "onSubmit"];
var imageEvents = ["onLoad", "onError"];
var keyboardEvents = ["onKeyDown", "onKeyPress", "onKeyUp"];
var mediaEvents = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
];
var mouseEvents = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
];
var dragEvents = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
];
var selectionEvents = ["onSelect"];
var touchEvents = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"];
var pointerEvents = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
];
var uiEvents = ["onScroll"];
var wheelEvents = ["onWheel"];
var animationEvents = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
];
var transitionEvents = ["onTransitionEnd"];
var otherEvents = ["onToggle"];
var changeEvents = ["onChange"];
var allEvents = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], clipboardEvents, true), compositionEvents, true), focusEvents, true), formEvents, true), imageEvents, true), keyboardEvents, true), mediaEvents, true), mouseEvents, true), dragEvents, true), selectionEvents, true), touchEvents, true), pointerEvents, true), uiEvents, true), wheelEvents, true), animationEvents, true), transitionEvents, true), changeEvents, true), otherEvents, true);
function makeEventProps(props, getArgs) {
  var eventProps = {};
  allEvents.forEach(function(eventName) {
    var eventHandler = props[eventName];
    if (!eventHandler) {
      return;
    }
    if (getArgs) {
      eventProps[eventName] = function(event) {
        return eventHandler(event, getArgs(eventName));
      };
    } else {
      eventProps[eventName] = eventHandler;
    }
  });
  return eventProps;
}

// node_modules/react-calendar/dist/esm/Calendar.js
var import_react20 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/Calendar/Navigation.js
var import_react = __toESM(require_react(), 1);

// node_modules/get-user-locale/dist/esm/index.js
var import_lodash = __toESM(require_lodash());
function resolver(options) {
  return JSON.stringify(options);
}
function isString(el) {
  return typeof el === "string";
}
function isUnique(el, index, arr) {
  return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function fixCommas(el) {
  return el.indexOf(",") === -1 ? el : el.split(",");
}
function normalizeLocale(locale) {
  if (!locale) {
    return locale;
  }
  if (locale === "C" || locale === "posix" || locale === "POSIX") {
    return "en-US";
  }
  if (locale.indexOf(".") !== -1) {
    var _a3 = locale.split(".")[0], actualLocale = _a3 === void 0 ? "" : _a3;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("@") !== -1) {
    var _b = locale.split("@")[0], actualLocale = _b === void 0 ? "" : _b;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("-") === -1 || !isAllLowerCase(locale)) {
    return locale;
  }
  var _c = locale.split("-"), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? "" : _d;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a3) {
  var _b = _a3 === void 0 ? {} : _a3, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? "en-US" : _d;
  var languageList = [];
  if (typeof navigator !== "undefined") {
    var rawLanguages = navigator.languages || [];
    var languages = [];
    for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
      var rawLanguagesItem = rawLanguages_1[_i];
      languages = languages.concat(fixCommas(rawLanguagesItem));
    }
    var rawLanguage = navigator.language;
    var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
    languageList = languageList.concat(languages, language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, import_lodash.default)(getUserLocalesInternal, resolver);
function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, import_lodash.default)(getUserLocaleInternal, resolver);
var esm_default = getUserLocale;

// node_modules/@wojtekmaj/date-utils/dist/esm/index.js
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd3) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd3(date)];
  };
}
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === "number") {
    return date;
  }
  var year = parseInt(date, 10);
  if (typeof date === "string" && !isNaN(year)) {
    return year;
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(date, "."));
}
function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }
  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = /* @__PURE__ */ new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = /* @__PURE__ */ new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = /* @__PURE__ */ new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = /* @__PURE__ */ new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = /* @__PURE__ */ new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}
function padStart(num, val) {
  if (val === void 0) {
    val = 2;
  }
  var numStr = "".concat(num);
  if (numStr.length >= val) {
    return num;
  }
  return "0000".concat(numStr).slice(-val);
}
function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}

// node_modules/react-calendar/dist/esm/shared/const.js
var _a;
var CALENDAR_TYPES = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
};
var DEPRECATED_CALENDAR_TYPES = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
};
var CALENDAR_TYPE_LOCALES = (_a = {}, _a[CALENDAR_TYPES.GREGORY] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], _a[CALENDAR_TYPES.HEBREW] = ["he", "he-IL"], _a[CALENDAR_TYPES.ISLAMIC] = [
  // ar-LB, ar-MA intentionally missing
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], _a);
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

// node_modules/react-calendar/dist/esm/shared/dateFormatter.js
var formatterCache = /* @__PURE__ */ new Map();
function getFormatter(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || esm_default();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || void 0, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
  return function(locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}
var formatDateOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric"
};
var formatDayOptions = { day: "numeric" };
var formatLongDateOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
var formatMonthOptions = { month: "long" };
var formatMonthYearOptions = {
  month: "long",
  year: "numeric"
};
var formatShortWeekdayOptions = { weekday: "short" };
var formatWeekdayOptions = { weekday: "long" };
var formatYearOptions = { year: "numeric" };
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

// node_modules/react-calendar/dist/esm/shared/dates.js
var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ISLAMIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.GREGORY:
      return weekday;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.GREGORY ? CALENDAR_TYPES.GREGORY : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (864e5 * 7)) + 1;
}
function getBegin(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyStart(date);
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyStart(date);
    case "decade":
      return getPreviousDecadeStart(date);
    case "year":
      return getPreviousYearStart(date);
    case "month":
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getNextCenturyStart(date);
    case "decade":
      return getNextDecadeStart(date);
    case "year":
      return getNextYearStart(date);
    case "month":
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeStart(date, -100);
    case "year":
      return getPreviousYearStart(date, -10);
    case "month":
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getNextDecadeStart(date, 100);
    case "year":
      return getNextYearStart(date, 10);
    case "month":
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyEnd(date);
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyEnd(date);
    case "decade":
      return getPreviousDecadeEnd(date);
    case "year":
      return getPreviousYearEnd(date);
    case "month":
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeEnd(date, -100);
    case "year":
      return getPreviousYearEnd(date, -10);
    case "month":
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getRange(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyRange(date);
    case "decade":
      return getDecadeRange(date);
    case "year":
      return getYearRange(date);
    case "month":
      return getMonthRange(date);
    case "day":
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function(a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear2, dates) {
  if (formatYear2 === void 0) {
    formatYear2 = formatYear;
  }
  return dates.map(function(date) {
    return formatYear2(locale, date);
  }).join(" – ");
}
function getCenturyLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getCenturyRange(date));
}
function getDecadeLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getDecadeRange(date));
}
function isCurrentDayOfWeek(date) {
  return date.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISLAMIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.GREGORY:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error("Unsupported calendar type.");
  }
}

// node_modules/react-calendar/dist/esm/Calendar/Navigation.js
var className = "react-calendar__navigation";
function Navigation(_a3) {
  var activeStartDate = _a3.activeStartDate, drillUp = _a3.drillUp, _b = _a3.formatMonthYear, formatMonthYear2 = _b === void 0 ? formatMonthYear : _b, _c = _a3.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, locale = _a3.locale, maxDate = _a3.maxDate, minDate = _a3.minDate, _d = _a3.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? "" : _d, navigationAriaLive = _a3.navigationAriaLive, navigationLabel = _a3.navigationLabel, _e = _a3.next2AriaLabel, next2AriaLabel = _e === void 0 ? "" : _e, _f = _a3.next2Label, next2Label = _f === void 0 ? "»" : _f, _g = _a3.nextAriaLabel, nextAriaLabel = _g === void 0 ? "" : _g, _h = _a3.nextLabel, nextLabel = _h === void 0 ? "›" : _h, _j = _a3.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? "" : _j, _k = _a3.prev2Label, prev2Label = _k === void 0 ? "«" : _k, _l = _a3.prevAriaLabel, prevAriaLabel = _l === void 0 ? "" : _l, _m = _a3.prevLabel, prevLabel = _m === void 0 ? "‹" : _m, setActiveStartDate = _a3.setActiveStartDate, showDoubleView = _a3.showDoubleView, view = _a3.view, views = _a3.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== "century";
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : void 0;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : void 0;
  var prevButtonDisabled = function() {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, "prev");
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, "prev2");
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, "next");
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, "next2");
  }
  function renderLabel(date) {
    var label = function() {
      switch (view) {
        case "century":
          return getCenturyLabel(locale, formatYear2, date);
        case "decade":
          return getDecadeLabel(locale, formatYear2, date);
        case "year":
          return formatYear2(locale, date);
        case "month":
          return formatMonthYear2(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date,
      label,
      locale: locale || getUserLocale() || void 0,
      view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className, "__label");
    return import_react.default.createElement(
      "button",
      { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button" },
      import_react.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from") }, renderLabel(activeStartDate)),
      showDoubleView ? import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement("span", { className: "".concat(labelClassName, "__divider") }, " – "),
        import_react.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to") }, renderLabel(nextActiveStartDate))
      ) : null
    );
  }
  return import_react.default.createElement(
    "div",
    { className },
    prev2Label !== null && shouldShowPrevNext2Buttons ? import_react.default.createElement("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button" }, prev2Label) : null,
    prevLabel !== null && import_react.default.createElement("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button" }, prevLabel),
    renderButton(),
    nextLabel !== null && import_react.default.createElement("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button" }, nextLabel),
    next2Label !== null && shouldShowPrevNext2Buttons ? import_react.default.createElement("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button" }, next2Label) : null
  );
}

// node_modules/react-calendar/dist/esm/CenturyView.js
var import_react7 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/CenturyView/Decades.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/TileGroup.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/Flex.js
var import_react2 = __toESM(require_react(), 1);
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a3) {
  var children = _a3.children, className8 = _a3.className, count = _a3.count, direction = _a3.direction, offset = _a3.offset, style = _a3.style, wrap = _a3.wrap, otherProps = __rest(_a3, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return import_react2.default.createElement("div", __assign({ className: className8, style: __assign({ display: "flex", flexDirection: direction, flexWrap: wrap ? "wrap" : "nowrap" }, style) }, otherProps), import_react2.default.Children.map(children, function(child, index) {
    var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
    return import_react2.default.cloneElement(child, __assign(__assign({}, child.props), { style: {
      flexBasis: toPercent(100 / count),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: marginInlineStart,
      marginInlineStart,
      marginInlineEnd: 0
    } }));
  }));
}

// node_modules/react-calendar/dist/esm/shared/utils.js
var import_warning = __toESM(require_warning(), 1);
var _a2;
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName3) {
  var isRange2 = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange2) {
    classes.push(baseClassName3);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName3, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName3, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName3, "BothEnds"));
    }
  }
  return classes;
}
function isCompleteValue(value) {
  if (Array.isArray(value)) {
    return value[0] !== null && value[1] !== null;
  }
  return value !== null;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error("args is required");
  }
  var value = args.value, date = args.date, hover = args.hover;
  var className8 = "react-calendar__tile";
  var classes = [className8];
  if (!date) {
    return classes;
  }
  var now = /* @__PURE__ */ new Date();
  var dateRange = function() {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error("dateType is required when date is not an array of two dates");
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className8, "--now"));
  }
  if (!value || !isCompleteValue(value)) {
    return classes;
  }
  var valueRange = function() {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error("valueType is required when value is not an array of two dates");
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className8, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className8, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className8, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className8, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}
var calendarTypeMap = (_a2 = {}, _a2[DEPRECATED_CALENDAR_TYPES.ARABIC] = CALENDAR_TYPES.ISLAMIC, _a2[DEPRECATED_CALENDAR_TYPES.HEBREW] = CALENDAR_TYPES.HEBREW, _a2[DEPRECATED_CALENDAR_TYPES.ISO_8601] = CALENDAR_TYPES.ISO_8601, _a2[DEPRECATED_CALENDAR_TYPES.US] = CALENDAR_TYPES.GREGORY, _a2);
function isDeprecatedCalendarType(calendarType) {
  return calendarType !== void 0 && calendarType in DEPRECATED_CALENDAR_TYPES;
}
var warned = false;
function mapCalendarType(calendarTypeOrDeprecatedCalendarType) {
  if (isDeprecatedCalendarType(calendarTypeOrDeprecatedCalendarType)) {
    var calendarType = calendarTypeMap[calendarTypeOrDeprecatedCalendarType];
    (0, import_warning.default)(warned, 'Specifying calendarType="'.concat(calendarTypeOrDeprecatedCalendarType, '" is deprecated. Use calendarType="').concat(calendarType, '" instead.'));
    warned = true;
    return calendarType;
  }
  return calendarTypeOrDeprecatedCalendarType;
}

// node_modules/react-calendar/dist/esm/TileGroup.js
function TileGroup(_a3) {
  var className8 = _a3.className, _b = _a3.count, count = _b === void 0 ? 3 : _b, dateTransform = _a3.dateTransform, dateType = _a3.dateType, end = _a3.end, hover = _a3.hover, offset = _a3.offset, renderTile = _a3.renderTile, start = _a3.start, _c = _a3.step, step = _c === void 0 ? 1 : _c, value = _a3.value, valueType = _a3.valueType;
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(renderTile({
      classes: getTileClasses({
        date,
        dateType,
        hover,
        value,
        valueType
      }),
      date
    }));
  }
  return import_react3.default.createElement(Flex, { className: className8, count, offset, wrap: true }, tiles);
}

// node_modules/react-calendar/dist/esm/CenturyView/Decade.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/Tile.js
var import_react4 = __toESM(require_react(), 1);
function Tile(props) {
  var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
  var tileClassName = (0, import_react4.useMemo)(function() {
    var args = { activeStartDate, date, view };
    return typeof tileClassNameProps === "function" ? tileClassNameProps(args) : tileClassNameProps;
  }, [activeStartDate, date, tileClassNameProps, view]);
  var tileContent = (0, import_react4.useMemo)(function() {
    var args = { activeStartDate, date, view };
    return typeof tileContentProps === "function" ? tileContentProps(args) : tileContentProps;
  }, [activeStartDate, date, tileContentProps, view]);
  return import_react4.default.createElement(
    "button",
    { className: clsx_default(classes, tileClassName), disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({ activeStartDate, date, view }), onClick: onClick ? function(event) {
      return onClick(date, event);
    } : void 0, onFocus: onMouseOver ? function() {
      return onMouseOver(date);
    } : void 0, onMouseOver: onMouseOver ? function() {
      return onMouseOver(date);
    } : void 0, style, type: "button" },
    formatAbbr ? import_react4.default.createElement("abbr", { "aria-label": formatAbbr(locale, date) }, children) : children,
    tileContent
  );
}

// node_modules/react-calendar/dist/esm/CenturyView/Decade.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className2 = "react-calendar__century-view__decades__decade";
function Decade(_a3) {
  var _b = _a3.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a3.currentCentury, _c = _a3.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, otherProps = __rest2(_a3, ["classes", "currentCentury", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className2) {
    classesProps.push(className2);
  }
  if (getCenturyStart(date).getFullYear() !== currentCentury) {
    classesProps.push("".concat(className2, "--neighboringCentury"));
  }
  return import_react5.default.createElement(Tile, __assign2({}, otherProps, { classes: classesProps, maxDateTransform: getDecadeEnd, minDateTransform: getDecadeStart, view: "century" }), getDecadeLabel(locale, formatYear2, date));
}

// node_modules/react-calendar/dist/esm/CenturyView/Decades.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Decades(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest3(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + (showNeighboringCentury ? 119 : 99);
  return import_react6.default.createElement(TileGroup, { className: "react-calendar__century-view__decades", dateTransform: getDecadeStart, dateType: "decade", end, hover, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest3(_a3, ["date"]);
    return import_react6.default.createElement(Decade, __assign3({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, currentCentury: start, date }));
  }, start, step: 10, value, valueType });
}

// node_modules/react-calendar/dist/esm/shared/propTypes.js
var import_prop_types = __toESM(require_prop_types(), 1);
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var calendarTypes = Object.values(CALENDAR_TYPES);
var deprecatedCalendarTypes = Object.values(DEPRECATED_CALENDAR_TYPES);
var allViews = ["century", "decade", "year", "month"];
var isCalendarType = import_prop_types.default.oneOf(__spreadArray2(__spreadArray2([], calendarTypes, true), deprecatedCalendarTypes, true));
var isClassName = import_prop_types.default.oneOfType([
  import_prop_types.default.string,
  import_prop_types.default.arrayOf(import_prop_types.default.string)
]);
var isMinDate = function isMinDate2(props, propName, componentName) {
  var _a3 = props, _b = propName, minDate = _a3[_b];
  if (!minDate) {
    return null;
  }
  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var maxDate = props.maxDate;
  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }
  return null;
};
var isMaxDate = function isMaxDate2(props, propName, componentName) {
  var _a3 = props, _b = propName, maxDate = _a3[_b];
  if (!maxDate) {
    return null;
  }
  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var minDate = props.minDate;
  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }
  return null;
};
var isRef = import_prop_types.default.oneOfType([
  import_prop_types.default.func,
  import_prop_types.default.exact({
    current: import_prop_types.default.any
  })
]);
var isRange = import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.instanceOf(Date), import_prop_types.default.oneOf([null])]).isRequired);
var isValue = import_prop_types.default.oneOfType([
  import_prop_types.default.instanceOf(Date),
  import_prop_types.default.oneOf([null]),
  isRange
]);
var isViews = import_prop_types.default.arrayOf(import_prop_types.default.oneOf(allViews));
var isView = function isView2(props, propName, componentName) {
  var _a3 = props, _b = propName, view = _a3[_b];
  if (view !== void 0 && (typeof view !== "string" || allViews.indexOf(view) === -1)) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allViews.map(function(a) {
      return '"'.concat(a, '"');
    }).join(", "), "]."));
  }
  return null;
};
isView.isRequired = function isViewIsRequired(props, propName, componentName, location, propFullName) {
  var _a3 = props, _b = propName, view = _a3[_b];
  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }
  return isView(props, propName, componentName, location, propFullName);
};
var rangeOf = function(type) {
  return import_prop_types.default.arrayOf(type);
};
var tileGroupProps = {
  activeStartDate: import_prop_types.default.instanceOf(Date).isRequired,
  hover: import_prop_types.default.instanceOf(Date),
  locale: import_prop_types.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: import_prop_types.default.func,
  onMouseOver: import_prop_types.default.func,
  tileClassName: import_prop_types.default.oneOfType([import_prop_types.default.func, isClassName]),
  tileContent: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  value: isValue,
  valueType: import_prop_types.default.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
var tileProps = {
  activeStartDate: import_prop_types.default.instanceOf(Date).isRequired,
  classes: import_prop_types.default.arrayOf(import_prop_types.default.string.isRequired).isRequired,
  date: import_prop_types.default.instanceOf(Date).isRequired,
  locale: import_prop_types.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: import_prop_types.default.func,
  onMouseOver: import_prop_types.default.func,
  style: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
  tileClassName: import_prop_types.default.oneOfType([import_prop_types.default.func, isClassName]),
  tileContent: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  tileDisabled: import_prop_types.default.func
};

// node_modules/react-calendar/dist/esm/CenturyView.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var CenturyView = function CenturyView2(props) {
  function renderDecades() {
    return import_react7.default.createElement(Decades, __assign4({}, props));
  }
  return import_react7.default.createElement("div", { className: "react-calendar__century-view" }, renderDecades());
};
CenturyView.propTypes = __assign4(__assign4({}, tileGroupProps), { showNeighboringCentury: import_prop_types2.default.bool });
var CenturyView_default = CenturyView;

// node_modules/react-calendar/dist/esm/DecadeView.js
var import_react10 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/DecadeView/Years.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/DecadeView/Year.js
var import_react8 = __toESM(require_react(), 1);
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className3 = "react-calendar__decade-view__years__year";
function Year(_a3) {
  var _b = _a3.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a3.currentDecade, _c = _a3.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, otherProps = __rest4(_a3, ["classes", "currentDecade", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className3) {
    classesProps.push(className3);
  }
  if (getDecadeStart(date).getFullYear() !== currentDecade) {
    classesProps.push("".concat(className3, "--neighboringDecade"));
  }
  return import_react8.default.createElement(Tile, __assign5({}, otherProps, { classes: classesProps, maxDateTransform: getYearEnd, minDateTransform: getYearStart, view: "decade" }), formatYear2(locale, date));
}

// node_modules/react-calendar/dist/esm/DecadeView/Years.js
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var __rest5 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Years(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest5(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]);
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + (showNeighboringDecade ? 11 : 9);
  return import_react9.default.createElement(TileGroup, { className: "react-calendar__decade-view__years", dateTransform: getYearStart, dateType: "year", end, hover, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest5(_a3, ["date"]);
    return import_react9.default.createElement(Year, __assign6({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, currentDecade: start, date }));
  }, start, value, valueType });
}

// node_modules/react-calendar/dist/esm/DecadeView.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var DecadeView = function DecadeView2(props) {
  function renderYears() {
    return import_react10.default.createElement(Years, __assign7({}, props));
  }
  return import_react10.default.createElement("div", { className: "react-calendar__decade-view" }, renderYears());
};
DecadeView.propTypes = __assign7(__assign7({}, tileGroupProps), { showNeighboringDecade: import_prop_types3.default.bool });
var DecadeView_default = DecadeView;

// node_modules/react-calendar/dist/esm/YearView.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/YearView/Months.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/YearView/Month.js
var import_react11 = __toESM(require_react(), 1);
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var __rest6 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className4 = "react-calendar__year-view__months__month";
function Month(_a3) {
  var _b = _a3.classes, classes = _b === void 0 ? [] : _b, _c = _a3.formatMonth, formatMonth3 = _c === void 0 ? formatMonth : _c, _d = _a3.formatMonthYear, formatMonthYear2 = _d === void 0 ? formatMonthYear : _d, otherProps = __rest6(_a3, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return import_react11.default.createElement(Tile, __assign8({}, otherProps, { classes: __spreadArray3(__spreadArray3([], classes, true), [className4], false), formatAbbr: formatMonthYear2, maxDateTransform: getMonthEnd, minDateTransform: getMonthStart, view: "year" }), formatMonth3(locale, date));
}

// node_modules/react-calendar/dist/esm/YearView/Months.js
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var __rest7 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Months(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest7(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return import_react12.default.createElement(TileGroup, { className: "react-calendar__year-view__months", dateTransform: function(monthIndex) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, 1);
    return getMonthStart(date);
  }, dateType: "month", end, hover, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest7(_a3, ["date"]);
    return import_react12.default.createElement(Month, __assign9({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, date }));
  }, start, value, valueType });
}

// node_modules/react-calendar/dist/esm/YearView.js
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var YearView = function YearView2(props) {
  function renderMonths() {
    return import_react13.default.createElement(Months, __assign10({}, props));
  }
  return import_react13.default.createElement("div", { className: "react-calendar__year-view" }, renderMonths());
};
YearView.propTypes = __assign10({}, tileGroupProps);
var YearView_default = YearView;

// node_modules/react-calendar/dist/esm/MonthView.js
var import_react19 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/MonthView/Days.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/MonthView/Day.js
var import_react14 = __toESM(require_react(), 1);
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var __rest8 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className5 = "react-calendar__month-view__days__day";
function Day(_a3) {
  var calendarTypeOrDeprecatedCalendarType = _a3.calendarType, _b = _a3.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a3.currentMonthIndex, _c = _a3.formatDay, formatDay2 = _c === void 0 ? formatDay : _c, _d = _a3.formatLongDate, formatLongDate2 = _d === void 0 ? formatLongDate : _d, otherProps = __rest8(_a3, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className5) {
    classesProps.push(className5);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className5, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className5, "--neighboringMonth"));
  }
  return import_react14.default.createElement(Tile, __assign11({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate2, maxDateTransform: getDayEnd, minDateTransform: getDayStart, view: "month" }), formatDay2(locale, date));
}

// node_modules/react-calendar/dist/esm/MonthView/Days.js
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var __rest9 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Days(props) {
  var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest9(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  var end = function() {
    if (showFixedNumberOfWeeks) {
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = /* @__PURE__ */ new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return import_react15.default.createElement(TileGroup, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(day) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, day);
    return getDayStart(date);
  }, dateType: "day", hover, end, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest9(_a3, ["date"]);
    return import_react15.default.createElement(Day, __assign12({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, calendarType: calendarTypeOrDeprecatedCalendarType, currentMonthIndex: monthIndex, date }));
  }, offset, start, value, valueType });
}

// node_modules/react-calendar/dist/esm/MonthView/Weekdays.js
var import_react16 = __toESM(require_react(), 1);
var className6 = "react-calendar__month-view__weekdays";
var weekdayClassName = "".concat(className6, "__weekday");
function Weekdays(props) {
  var calendarTypeOrDeprecatedCalendarType = props.calendarType, _a3 = props.formatShortWeekday, formatShortWeekday2 = _a3 === void 0 ? formatShortWeekday : _a3, _b = props.formatWeekday, formatWeekday2 = _b === void 0 ? formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var anyDate = /* @__PURE__ */ new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday2(locale, weekdayDate);
    weekdays.push(import_react16.default.createElement(
      "div",
      { key: weekday, className: clsx_default(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")) },
      import_react16.default.createElement("abbr", { "aria-label": abbr, title: abbr }, formatShortWeekday2(locale, weekdayDate).replace(".", ""))
    ));
  }
  return import_react16.default.createElement(Flex, { className: className6, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave }, weekdays);
}

// node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js
var import_react17 = __toESM(require_react(), 1);
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var __rest10 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className7 = "react-calendar__tile";
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
  var children = import_react17.default.createElement("span", null, weekNumber);
  if (onClickWeekNumber) {
    var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest10(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return import_react17.default.createElement("button", __assign13({}, otherProps, { className: className7, onClick: function(event) {
      return onClickWeekNumber_1(weekNumber_1, date_1, event);
    }, type: "button" }), children);
  } else {
    var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest10(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return import_react17.default.createElement("div", __assign13({}, otherProps, { className: className7 }), children);
  }
}

// node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js
function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var numberOfWeeks = function() {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function() {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function(date) {
    return getWeekNumber(date, calendarType);
  });
  return import_react18.default.createElement(Flex, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, weekNumbers.map(function(weekNumber, weekIndex) {
    var date = dates[weekIndex];
    if (!date) {
      throw new Error("date is not defined");
    }
    return import_react18.default.createElement(WeekNumber, { key: weekNumber, date, onClickWeekNumber, weekNumber });
  }));
}

// node_modules/react-calendar/dist/esm/MonthView.js
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var __rest11 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function getCalendarTypeFromLocale(locale) {
  if (locale) {
    for (var _i = 0, _a3 = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a3.length; _i++) {
      var _b = _a3[_i], calendarType = _b[0], locales = _b[1];
      if (locales.includes(locale)) {
        return calendarType;
      }
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
var MonthView = function MonthView2(props) {
  var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a3 = props.calendarType, calendarType = _a3 === void 0 ? getCalendarTypeFromLocale(locale) : _a3, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest11(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return import_react19.default.createElement(Weekdays, { calendarType, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, locale, onMouseLeave });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return import_react19.default.createElement(WeekNumbers, { activeStartDate, calendarType, onClickWeekNumber, onMouseLeave, showFixedNumberOfWeeks });
  }
  function renderDays() {
    return import_react19.default.createElement(Days, __assign14({ calendarType }, childProps));
  }
  var className8 = "react-calendar__month-view";
  return import_react19.default.createElement(
    "div",
    { className: clsx_default(className8, showWeekNumbers ? "".concat(className8, "--weekNumbers") : "") },
    import_react19.default.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      renderWeekNumbers(),
      import_react19.default.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        renderWeekdays(),
        renderDays()
      )
    )
  );
};
MonthView.propTypes = __assign14(__assign14({}, tileGroupProps), { calendarType: isCalendarType, formatDay: import_prop_types4.default.func, formatLongDate: import_prop_types4.default.func, formatShortWeekday: import_prop_types4.default.func, formatWeekday: import_prop_types4.default.func, onClickWeekNumber: import_prop_types4.default.func, onMouseLeave: import_prop_types4.default.func, showFixedNumberOfWeeks: import_prop_types4.default.bool, showNeighboringMonth: import_prop_types4.default.bool, showWeekNumbers: import_prop_types4.default.bool });
var MonthView_default = MonthView;

// node_modules/react-calendar/dist/esm/Calendar.js
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var baseClassName = "react-calendar";
var allViews2 = ["century", "decade", "year", "month"];
var allValueTypes = ["decade", "year", "month", "day"];
var defaultMinDate = /* @__PURE__ */ new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = /* @__PURE__ */ new Date(864e13);
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getLimitedViews(minDetail, maxDetail) {
  return allViews2.slice(allViews2.indexOf(minDetail), allViews2.indexOf(maxDetail) + 1);
}
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
function getValueType(view) {
  var index = allViews2.indexOf(view);
  return allValueTypes[index];
}
function getValue(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a3, index) {
  var value = _a3.value, minDate = _a3.minDate, maxDate = _a3.maxDate, maxDetail = _a3.maxDetail;
  var valuePiece = getValue(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function() {
    switch (index) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
  return [getDetailValueFrom, getDetailValueTo].map(function(fn) {
    return fn(args);
  });
};
function getActiveStartDate(_a3) {
  var maxDate = _a3.maxDate, maxDetail = _a3.maxDetail, minDate = _a3.minDate, minDetail = _a3.minDetail, value = _a3.value, view = _a3.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value,
    minDate,
    maxDate,
    maxDetail
  }) || /* @__PURE__ */ new Date();
  return getBegin(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a3) {
  var activeStartDate = _a3.activeStartDate, defaultActiveStartDate = _a3.defaultActiveStartDate, defaultValue = _a3.defaultValue, defaultView = _a3.defaultView, maxDate = _a3.maxDate, maxDetail = _a3.maxDetail, minDate = _a3.minDate, minDetail = _a3.minDetail, value = _a3.value, view = _a3.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }
  return getActiveStartDate({
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: value || defaultValue,
    view: view || defaultView
  });
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
  return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, import_react20.forwardRef)(function Calendar2(props, ref) {
  var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className8 = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay2 = props.formatDay, formatLongDate2 = props.formatLongDate, formatMonth3 = props.formatMonth, formatMonthYear2 = props.formatMonthYear, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, formatYear2 = props.formatYear, _a3 = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a3 === void 0 ? true : _a3, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? "month" : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? "century" : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? "start" : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
  var _j = (0, import_react20.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
  var _k = (0, import_react20.useState)(null), hoverState = _k[0], setHoverState = _k[1];
  var _l = (0, import_react20.useState)(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
    return el !== null ? toDate(el) : null;
  }) : defaultValue !== null && defaultValue !== void 0 ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
  var _m = (0, import_react20.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
  var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
    activeStartDate: activeStartDateProps,
    defaultActiveStartDate,
    defaultValue,
    defaultView,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: valueProps,
    view: viewProps
  });
  var value = function() {
    var rawValue = function() {
      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }
      return valueProps !== void 0 ? valueProps : valueState;
    }();
    if (!rawValue) {
      return null;
    }
    return Array.isArray(rawValue) ? rawValue.map(function(el) {
      return el !== null ? toDate(el) : null;
    }) : rawValue !== null ? toDate(rawValue) : null;
  }();
  var valueType = getValueType(maxDetail);
  var view = getView(viewProps || viewState, minDetail, maxDetail);
  var views = getLimitedViews(minDetail, maxDetail);
  var hover = selectRange ? hoverState : null;
  var drillDownAvailable = views.indexOf(view) < views.length - 1;
  var drillUpAvailable = views.indexOf(view) > 0;
  var getProcessedValue = (0, import_react20.useCallback)(function(value2) {
    var processFunction = function() {
      switch (returnValue) {
        case "start":
          return getDetailValueFrom;
        case "end":
          return getDetailValueTo;
        case "range":
          return getDetailValueArray;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return processFunction({
      maxDate,
      maxDetail,
      minDate,
      value: value2
    });
  }, [maxDate, maxDetail, minDate, returnValue]);
  var setActiveStartDate = (0, import_react20.useCallback)(function(nextActiveStartDate, action) {
    setActiveStartDateState(nextActiveStartDate);
    var args = {
      action,
      activeStartDate: nextActiveStartDate,
      value,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
  }, [activeStartDate, onActiveStartDateChange, value, view]);
  var onClickTile = (0, import_react20.useCallback)(function(value2, event) {
    var callback = function() {
      switch (view) {
        case "century":
          return onClickDecade;
        case "decade":
          return onClickYear;
        case "year":
          return onClickMonth;
        case "month":
          return onClickDay;
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    if (callback)
      callback(value2, event);
  }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
  var drillDown = (0, import_react20.useCallback)(function(nextActiveStartDate, event) {
    if (!drillDownAvailable) {
      return;
    }
    onClickTile(nextActiveStartDate, event);
    var nextView = views[views.indexOf(view) + 1];
    if (!nextView) {
      throw new Error("Attempted to drill down from the lowest view.");
    }
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillDown",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillDown) {
      onDrillDown(args);
    }
  }, [
    activeStartDate,
    drillDownAvailable,
    onActiveStartDateChange,
    onClickTile,
    onDrillDown,
    onViewChange,
    value,
    view,
    views
  ]);
  var drillUp = (0, import_react20.useCallback)(function() {
    if (!drillUpAvailable) {
      return;
    }
    var nextView = views[views.indexOf(view) - 1];
    if (!nextView) {
      throw new Error("Attempted to drill up from the highest view.");
    }
    var nextActiveStartDate = getBegin(nextView, activeStartDate);
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillUp",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillUp) {
      onDrillUp(args);
    }
  }, [
    activeStartDate,
    drillUpAvailable,
    onActiveStartDateChange,
    onDrillUp,
    onViewChange,
    value,
    view,
    views
  ]);
  var onChange = (0, import_react20.useCallback)(function(rawNextValue, event) {
    var previousValue = value;
    onClickTile(rawNextValue, event);
    var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
    var nextValue;
    if (selectRange) {
      if (isFirstValueInRange) {
        nextValue = getBegin(valueType, rawNextValue);
      } else {
        if (!previousValue) {
          throw new Error("previousValue is required");
        }
        if (Array.isArray(previousValue)) {
          throw new Error("previousValue must not be an array");
        }
        nextValue = getValueRange(valueType, previousValue, rawNextValue);
      }
    } else {
      nextValue = getProcessedValue(rawNextValue);
    }
    var nextActiveStartDate = (
      // Range selection turned off
      !selectRange || // Range selection turned on, first value
      isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      goToRangeStartOnSelect ? getActiveStartDate({
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        value: nextValue,
        view
      }) : null
    );
    event.persist();
    setActiveStartDateState(nextActiveStartDate);
    setValueState(nextValue);
    var args = {
      action: "onChange",
      activeStartDate: nextActiveStartDate,
      value: nextValue,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onChangeProps) {
      if (selectRange) {
        var isSingleValue = getIsSingleValue(nextValue);
        if (!isSingleValue) {
          onChangeProps(nextValue || null, event);
        } else if (allowPartialRange) {
          if (Array.isArray(nextValue)) {
            throw new Error("value must not be an array");
          }
          onChangeProps([nextValue || null, null], event);
        }
      } else {
        onChangeProps(nextValue || null, event);
      }
    }
  }, [
    activeStartDate,
    allowPartialRange,
    getProcessedValue,
    goToRangeStartOnSelect,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    onActiveStartDateChange,
    onChangeProps,
    onClickTile,
    selectRange,
    value,
    valueType,
    view
  ]);
  function onMouseOver(nextHover) {
    setHoverState(nextHover);
  }
  function onMouseLeave() {
    setHoverState(null);
  }
  (0, import_react20.useImperativeHandle)(ref, function() {
    return {
      activeStartDate,
      drillDown,
      drillUp,
      onChange,
      setActiveStartDate,
      value,
      view
    };
  }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
  function renderContent(next) {
    var currentActiveStartDate = next ? getBeginNext(view, activeStartDate) : getBegin(view, activeStartDate);
    var onClick = drillDownAvailable ? drillDown : onChange;
    var commonProps = {
      activeStartDate: currentActiveStartDate,
      hover,
      locale,
      maxDate,
      minDate,
      onClick,
      onMouseOver: selectRange ? onMouseOver : void 0,
      tileClassName,
      tileContent,
      tileDisabled,
      value,
      valueType
    };
    switch (view) {
      case "century": {
        return import_react20.default.createElement(CenturyView_default, __assign15({ formatYear: formatYear2, showNeighboringCentury }, commonProps));
      }
      case "decade": {
        return import_react20.default.createElement(DecadeView_default, __assign15({ formatYear: formatYear2, showNeighboringDecade }, commonProps));
      }
      case "year": {
        return import_react20.default.createElement(YearView_default, __assign15({ formatMonth: formatMonth3, formatMonthYear: formatMonthYear2 }, commonProps));
      }
      case "month": {
        return import_react20.default.createElement(MonthView_default, __assign15({ calendarType, formatDay: formatDay2, formatLongDate: formatLongDate2, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : void 0, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== "undefined" ? showFixedNumberOfWeeks : showDoubleView, showNeighboringMonth, showWeekNumbers }, commonProps));
      }
      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }
  function renderNavigation() {
    if (!showNavigation) {
      return null;
    }
    return import_react20.default.createElement(Navigation, { activeStartDate, drillUp, formatMonthYear: formatMonthYear2, formatYear: formatYear2, locale, maxDate, minDate, navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, setActiveStartDate, showDoubleView, view, views });
  }
  var valueArray = Array.isArray(value) ? value : [value];
  return import_react20.default.createElement(
    "div",
    { className: clsx_default(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className8), ref: inputRef },
    renderNavigation(),
    import_react20.default.createElement(
      "div",
      { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : void 0, onMouseLeave: selectRange ? onMouseLeave : void 0 },
      renderContent(),
      showDoubleView ? renderContent(true) : null
    )
  );
});
var isActiveStartDate = import_prop_types5.default.instanceOf(Date);
var isValue2 = import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.instanceOf(Date)]);
var isValueOrValueArray = import_prop_types5.default.oneOfType([isValue2, rangeOf(isValue2)]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: import_prop_types5.default.bool,
  calendarType: isCalendarType,
  className: isClassName,
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isValueOrValueArray,
  defaultView: isView,
  formatDay: import_prop_types5.default.func,
  formatLongDate: import_prop_types5.default.func,
  formatMonth: import_prop_types5.default.func,
  formatMonthYear: import_prop_types5.default.func,
  formatShortWeekday: import_prop_types5.default.func,
  formatWeekday: import_prop_types5.default.func,
  formatYear: import_prop_types5.default.func,
  goToRangeStartOnSelect: import_prop_types5.default.bool,
  inputRef: isRef,
  locale: import_prop_types5.default.string,
  maxDate: isMaxDate,
  maxDetail: import_prop_types5.default.oneOf(allViews2),
  minDate: isMinDate,
  minDetail: import_prop_types5.default.oneOf(allViews2),
  navigationAriaLabel: import_prop_types5.default.string,
  navigationAriaLive: import_prop_types5.default.oneOf(["off", "polite", "assertive"]),
  navigationLabel: import_prop_types5.default.func,
  next2AriaLabel: import_prop_types5.default.string,
  next2Label: import_prop_types5.default.node,
  nextAriaLabel: import_prop_types5.default.string,
  nextLabel: import_prop_types5.default.node,
  onActiveStartDateChange: import_prop_types5.default.func,
  onChange: import_prop_types5.default.func,
  onClickDay: import_prop_types5.default.func,
  onClickDecade: import_prop_types5.default.func,
  onClickMonth: import_prop_types5.default.func,
  onClickWeekNumber: import_prop_types5.default.func,
  onClickYear: import_prop_types5.default.func,
  onDrillDown: import_prop_types5.default.func,
  onDrillUp: import_prop_types5.default.func,
  onViewChange: import_prop_types5.default.func,
  prev2AriaLabel: import_prop_types5.default.string,
  prev2Label: import_prop_types5.default.node,
  prevAriaLabel: import_prop_types5.default.string,
  prevLabel: import_prop_types5.default.node,
  returnValue: import_prop_types5.default.oneOf(["start", "end", "range"]),
  selectRange: import_prop_types5.default.bool,
  showDoubleView: import_prop_types5.default.bool,
  showFixedNumberOfWeeks: import_prop_types5.default.bool,
  showNavigation: import_prop_types5.default.bool,
  showNeighboringCentury: import_prop_types5.default.bool,
  showNeighboringDecade: import_prop_types5.default.bool,
  showNeighboringMonth: import_prop_types5.default.bool,
  showWeekNumbers: import_prop_types5.default.bool,
  tileClassName: import_prop_types5.default.oneOfType([import_prop_types5.default.func, isClassName]),
  tileContent: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.node]),
  tileDisabled: import_prop_types5.default.func,
  value: isValueOrValueArray,
  view: isView
};
var Calendar_default = Calendar;

// node_modules/react-calendar/dist/esm/index.js
var esm_default2 = Calendar_default;

// node_modules/react-fit/dist/esm/Fit.js
var import_react21 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);

// node_modules/detect-element-overflow/dist/esm/index.js
function getRect(element) {
  return element.getBoundingClientRect();
}
function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return getRect(element).top < getRect(container).top;
    },
    get collidedBottom() {
      return getRect(element).bottom > getRect(container).bottom;
    },
    get collidedLeft() {
      return getRect(element).left < getRect(container).left;
    },
    get collidedRight() {
      return getRect(element).right > getRect(container).right;
    },
    get overflowTop() {
      return getRect(container).top - getRect(element).top;
    },
    get overflowBottom() {
      return getRect(element).bottom - getRect(container).bottom;
    },
    get overflowLeft() {
      return getRect(container).left - getRect(element).left;
    },
    get overflowRight() {
      return getRect(element).right - getRect(container).right;
    }
  };
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning2(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning2;

// node_modules/react-fit/dist/esm/Fit.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign16 = function() {
  __assign16 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign16.apply(this, arguments);
};
var __rest12 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var isBrowser = typeof document !== "undefined";
var isDisplayContentsSupported = isBrowser && "CSS" in window && "supports" in window.CSS && CSS.supports("display", "contents");
var isMutationObserverSupported = isBrowser && "MutationObserver" in window;
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function findScrollContainer(element) {
  var parent = element.parentElement;
  while (parent) {
    var overflow = window.getComputedStyle(parent).overflow;
    if (overflow.split(" ").every(function(o) {
      return o === "auto" || o === "scroll";
    })) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document.documentElement;
}
function alignAxis(_a3) {
  var axis = _a3.axis, container = _a3.container, element = _a3.element, invertAxis = _a3.invertAxis, scrollContainer = _a3.scrollContainer, secondary = _a3.secondary, spacing = _a3.spacing;
  var style = window.getComputedStyle(element);
  var parent = container.parentElement;
  if (!parent) {
    return;
  }
  var scrollContainerCollisions = detectElementOverflow(parent, scrollContainer);
  var documentCollisions = detectElementOverflow(parent, document.documentElement);
  var isX = axis === "x";
  var startProperty = isX ? "left" : "top";
  var endProperty = isX ? "right" : "bottom";
  var sizeProperty = isX ? "width" : "height";
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var scrollProperty = "scroll".concat(capitalize(startProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var startSpacing = typeof spacing === "object" ? spacing[startProperty] : spacing;
  var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
  var endSpacing = typeof spacing === "object" ? spacing[endProperty] : spacing;
  var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;
  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }
  var offsetSize = element[offsetSizeProperty];
  function displayStart() {
    element.style[startProperty] = "auto";
    element.style[endProperty] = secondary ? "0" : "100%";
  }
  function displayEnd() {
    element.style[startProperty] = secondary ? "0" : "100%";
    element.style[endProperty] = "auto";
  }
  function displayIfFits(availableSpace, display) {
    var fits2 = offsetSize <= availableSpace;
    if (fits2) {
      display();
    }
    return fits2;
  }
  function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  }
  function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  }
  function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var rawMinSize = style.getPropertyValue(minSizeProperty);
    var minSize = rawMinSize ? parseInt(rawMinSize, 10) : null;
    function shrinkToSize(size) {
      tiny_warning_esm_default(!minSize || size >= minSize, "<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      var newSize = Math.max(size, minSize || 0);
      tiny_warning_esm_default(false, "<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    }
    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  }
  var fits;
  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }
  if (!fits) {
    displayWhereverShrinkedFits();
  }
}
function alignMainAxis(args) {
  alignAxis(args);
}
function alignSecondaryAxis(args) {
  alignAxis(__assign16(__assign16({}, args), { axis: args.axis === "x" ? "y" : "x", secondary: true }));
}
function alignBothAxis(args) {
  var invertAxis = args.invertAxis, invertSecondaryAxis = args.invertSecondaryAxis, commonArgs = __rest12(args, ["invertAxis", "invertSecondaryAxis"]);
  alignMainAxis(__assign16(__assign16({}, commonArgs), { invertAxis }));
  alignSecondaryAxis(__assign16(__assign16({}, commonArgs), { invertAxis: invertSecondaryAxis }));
}
var Fit = (
  /** @class */
  function(_super) {
    __extends(Fit2, _super);
    function Fit2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.fit = function() {
        var _a3 = _this, scrollContainer = _a3.scrollContainer, container = _a3.container, element = _a3.element;
        if (!scrollContainer || !container || !element) {
          return;
        }
        var elementWidth = element.clientWidth;
        var elementHeight = element.clientHeight;
        if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
          return;
        }
        _this.elementWidth = elementWidth;
        _this.elementHeight = elementHeight;
        var parent = container.parentElement;
        if (!parent) {
          return;
        }
        var style = window.getComputedStyle(element);
        var position = style.position;
        if (position !== "absolute") {
          element.style.position = "absolute";
        }
        var parentStyle = window.getComputedStyle(parent);
        var parentPosition = parentStyle.position;
        if (parentPosition !== "relative" && parentPosition !== "absolute") {
          parent.style.position = "relative";
        }
        var _b = _this.props, invertAxis = _b.invertAxis, invertSecondaryAxis = _b.invertSecondaryAxis, _c = _b.mainAxis, mainAxis = _c === void 0 ? "y" : _c, _d = _b.spacing, spacing = _d === void 0 ? 8 : _d;
        alignBothAxis({
          axis: mainAxis,
          container,
          element,
          invertAxis,
          invertSecondaryAxis,
          scrollContainer,
          spacing
        });
      };
      return _this;
    }
    Fit2.prototype.componentDidMount = function() {
      var _this = this;
      if (!isDisplayContentsSupported) {
        var element = (0, import_react_dom.findDOMNode)(this);
        if (!element || !(element instanceof HTMLElement)) {
          return;
        }
        this.container = element;
        this.element = element;
        this.scrollContainer = findScrollContainer(element);
      }
      this.fit();
      var onMutation = function() {
        _this.fit();
      };
      if (isMutationObserverSupported && this.element) {
        var mutationObserver = new MutationObserver(onMutation);
        mutationObserver.observe(this.element, {
          attributes: true,
          attributeFilter: ["class", "style"]
        });
      }
    };
    Fit2.prototype.render = function() {
      var _this = this;
      var children = this.props.children;
      var child = import_react21.default.Children.only(children);
      if (isDisplayContentsSupported) {
        return import_react21.default.createElement("span", { ref: function(container) {
          _this.container = container;
          var element = container && container.firstElementChild;
          if (!element || !(element instanceof HTMLElement)) {
            return;
          }
          _this.element = element;
          _this.scrollContainer = findScrollContainer(element);
        }, style: { display: "contents" } }, child);
      }
      return child;
    };
    Fit2.propTypes = {
      children: import_prop_types6.default.node.isRequired,
      invertAxis: import_prop_types6.default.bool,
      invertSecondaryAxis: import_prop_types6.default.bool,
      mainAxis: import_prop_types6.default.oneOf(["x", "y"]),
      spacing: import_prop_types6.default.oneOfType([
        import_prop_types6.default.number,
        import_prop_types6.default.shape({
          bottom: import_prop_types6.default.number.isRequired,
          left: import_prop_types6.default.number.isRequired,
          right: import_prop_types6.default.number.isRequired,
          top: import_prop_types6.default.number.isRequired
        })
      ])
    };
    return Fit2;
  }(import_react21.Component)
);
var Fit_default = Fit;

// node_modules/react-fit/dist/esm/index.js
var esm_default3 = Fit_default;

// node_modules/react-date-picker/dist/esm/DateInput.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/react-date-picker/dist/esm/Divider.js
var import_react22 = __toESM(require_react(), 1);
function Divider(_a3) {
  var children = _a3.children;
  return import_react22.default.createElement("span", { className: "react-date-picker__inputGroup__divider" }, children);
}

// node_modules/react-date-picker/dist/esm/DateInput/DayInput.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/react-date-picker/dist/esm/DateInput/Input.js
var import_react23 = __toESM(require_react(), 1);

// node_modules/update-input-width/dist/esm/index.js
var allowedVariants = ["normal", "small-caps"];
function getFontShorthand(element) {
  if (!element) {
    return "";
  }
  var style = window.getComputedStyle(element);
  if (style.font) {
    return style.font;
  }
  var isFontDefined = style.fontFamily !== "";
  if (!isFontDefined) {
    return "";
  }
  var fontVariant = allowedVariants.includes(style.fontVariant) ? style.fontVariant : "normal";
  return "".concat(style.fontStyle, " ").concat(fontVariant, " ").concat(style.fontWeight, " ").concat(style.fontSize, " / ").concat(style.lineHeight, " ").concat(style.fontFamily);
}
var cachedCanvas;
function measureText(text, font) {
  var canvas = cachedCanvas || (cachedCanvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  if (!context) {
    return null;
  }
  context.font = font;
  var width = context.measureText(text).width;
  return Math.ceil(width);
}
function updateInputWidth(element) {
  if (typeof document === "undefined" || !element) {
    return null;
  }
  var font = getFontShorthand(element);
  var text = element.value || element.placeholder;
  var width = measureText(text, font);
  if (width === null) {
    return null;
  }
  element.style.width = "".concat(width, "px");
  return width;
}
var esm_default4 = updateInputWidth;

// node_modules/react-date-picker/dist/esm/DateInput/Input.js
var isBrowser2 = typeof document !== "undefined";
var useIsomorphicLayoutEffect = isBrowser2 ? import_react23.useLayoutEffect : import_react23.useEffect;
var isIEOrEdgeLegacy = isBrowser2 && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
var isFirefox = isBrowser2 && /Firefox/.test(navigator.userAgent);
function onFocus(event) {
  var target = event.target;
  if (isIEOrEdgeLegacy) {
    requestAnimationFrame(function() {
      return target.select();
    });
  } else {
    target.select();
  }
}
function updateInputWidthOnLoad(element) {
  if (document.readyState === "complete") {
    return;
  }
  function onLoad() {
    esm_default4(element);
  }
  window.addEventListener("load", onLoad);
}
function updateInputWidthOnFontLoad(element) {
  if (!document.fonts) {
    return;
  }
  var font = getFontShorthand(element);
  if (!font) {
    return;
  }
  var isFontLoaded = document.fonts.check(font);
  if (isFontLoaded) {
    return;
  }
  function onLoadingDone() {
    esm_default4(element);
  }
  document.fonts.addEventListener("loadingdone", onLoadingDone);
}
function getSelectionString(input) {
  if (input && "selectionStart" in input && input.selectionStart !== null && "selectionEnd" in input && input.selectionEnd !== null) {
    return input.value.slice(input.selectionStart, input.selectionEnd);
  }
  if ("getSelection" in window) {
    var selection = window.getSelection();
    return selection && selection.toString();
  }
  return null;
}
function makeOnKeyPress(maxLength) {
  if (maxLength === null) {
    return void 0;
  }
  return function onKeyPress(event) {
    if (isFirefox) {
      return;
    }
    var key = event.key, input = event.target;
    var value = input.value;
    var isNumberKey = key.length === 1 && /\d/.test(key);
    var selection = getSelectionString(input);
    if (!isNumberKey || !(selection || value.length < maxLength)) {
      event.preventDefault();
    }
  };
}
function Input(_a3) {
  var ariaLabel = _a3.ariaLabel, autoFocus = _a3.autoFocus, className8 = _a3.className, disabled = _a3.disabled, inputRef = _a3.inputRef, max = _a3.max, min = _a3.min, name = _a3.name, nameForClass = _a3.nameForClass, onChange = _a3.onChange, onKeyDown = _a3.onKeyDown, onKeyUp = _a3.onKeyUp, _b = _a3.placeholder, placeholder = _b === void 0 ? "--" : _b, required = _a3.required, showLeadingZeros = _a3.showLeadingZeros, step = _a3.step, value = _a3.value;
  useIsomorphicLayoutEffect(function() {
    if (!inputRef || !inputRef.current) {
      return;
    }
    esm_default4(inputRef.current);
    updateInputWidthOnLoad(inputRef.current);
    updateInputWidthOnFontLoad(inputRef.current);
  }, [inputRef, value]);
  var hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === "0" || !value.toString().startsWith("0"));
  var maxLength = max ? max.toString().length : null;
  return import_react23.default.createElement(
    import_react23.default.Fragment,
    null,
    hasLeadingZero ? import_react23.default.createElement("span", { className: "".concat(className8, "__leadingZero") }, "0") : null,
    import_react23.default.createElement("input", { "aria-label": ariaLabel, autoComplete: "off", autoFocus, className: clsx_default("".concat(className8, "__input"), "".concat(className8, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className8, "__input--hasLeadingZero")), "data-input": "true", disabled, inputMode: "numeric", max, min, name, onChange, onFocus, onKeyDown, onKeyPress: makeOnKeyPress(maxLength), onKeyUp: function(event) {
      esm_default4(event.target);
      if (onKeyUp) {
        onKeyUp(event);
      }
    }, placeholder, ref: inputRef, required, step, type: "number", value: value !== null ? value : "" })
  );
}

// node_modules/react-date-picker/dist/esm/shared/utils.js
function between2(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValidNumber(num) {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Math.min.apply(Math, args.filter(isValidNumber));
}
function safeMax() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Math.max.apply(Math, args.filter(isValidNumber));
}

// node_modules/react-date-picker/dist/esm/DateInput/DayInput.js
var __assign17 = function() {
  __assign17 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign17.apply(this, arguments);
};
var __rest13 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function DayInput(_a3) {
  var maxDate = _a3.maxDate, minDate = _a3.minDate, month = _a3.month, year = _a3.year, otherProps = __rest13(_a3, ["maxDate", "minDate", "month", "year"]);
  var currentMonthMaxDays = function() {
    if (!month) {
      return 31;
    }
    return getDaysInMonth(new Date(Number(year), Number(month) - 1, 1));
  }();
  function isSameMonth(date) {
    return year === getYear(date).toString() && month === getMonthHuman(date).toString();
  }
  var maxDay = safeMin(currentMonthMaxDays, maxDate && isSameMonth(maxDate) && getDate(maxDate));
  var minDay = safeMax(1, minDate && isSameMonth(minDate) && getDate(minDate));
  return import_react24.default.createElement(Input, __assign17({ max: maxDay, min: minDay, name: "day" }, otherProps));
}

// node_modules/react-date-picker/dist/esm/DateInput/MonthInput.js
var import_react25 = __toESM(require_react(), 1);
var __assign18 = function() {
  __assign18 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign18.apply(this, arguments);
};
var __rest14 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function MonthInput(_a3) {
  var maxDate = _a3.maxDate, minDate = _a3.minDate, year = _a3.year, otherProps = __rest14(_a3, ["maxDate", "minDate", "year"]);
  function isSameYear(date) {
    return date && year === getYear(date).toString();
  }
  var maxMonth = safeMin(12, maxDate && isSameYear(maxDate) && getMonthHuman(maxDate));
  var minMonth = safeMax(1, minDate && isSameYear(minDate) && getMonthHuman(minDate));
  return import_react25.default.createElement(Input, __assign18({ max: maxMonth, min: minMonth, name: "month" }, otherProps));
}

// node_modules/react-date-picker/dist/esm/DateInput/MonthSelect.js
var import_react26 = __toESM(require_react(), 1);

// node_modules/react-date-picker/dist/esm/shared/dateFormatter.js
var formatterCache2 = /* @__PURE__ */ new Map();
function getFormatter2(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || esm_default();
    if (!formatterCache2.has(localeWithDefault)) {
      formatterCache2.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache2.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || void 0, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
function toSafeHour2(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter2(options) {
  return function(locale, date) {
    return getFormatter2(options)(locale, toSafeHour2(date));
  };
}
var formatMonthOptions2 = { month: "long" };
var formatShortMonthOptions = { month: "short" };
var formatMonth2 = getSafeFormatter2(formatMonthOptions2);
var formatShortMonth = getSafeFormatter2(formatShortMonthOptions);

// node_modules/react-date-picker/dist/esm/DateInput/MonthSelect.js
var __spreadArray4 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
function MonthSelect(_a3) {
  var ariaLabel = _a3.ariaLabel, autoFocus = _a3.autoFocus, className8 = _a3.className, disabled = _a3.disabled, inputRef = _a3.inputRef, locale = _a3.locale, maxDate = _a3.maxDate, minDate = _a3.minDate, onChange = _a3.onChange, onKeyDown = _a3.onKeyDown, _b = _a3.placeholder, placeholder = _b === void 0 ? "--" : _b, required = _a3.required, short = _a3.short, value = _a3.value, year = _a3.year;
  function isSameYear(date) {
    return date && year === getYear(date).toString();
  }
  var maxMonth = safeMin(12, maxDate && isSameYear(maxDate) && getMonthHuman(maxDate));
  var minMonth = safeMax(1, minDate && isSameYear(minDate) && getMonthHuman(minDate));
  var dates = __spreadArray4([], Array(12), true).map(function(el, index) {
    return new Date(2019, index, 1);
  });
  var name = "month";
  var formatter = short ? formatShortMonth : formatMonth2;
  return import_react26.default.createElement(
    "select",
    { "aria-label": ariaLabel, autoFocus, className: clsx_default("".concat(className8, "__input"), "".concat(className8, "__").concat(name)), "data-input": "true", "data-select": "true", disabled, name, onChange, onKeyDown, ref: inputRef, required, value: value !== null ? value : "" },
    !value && import_react26.default.createElement("option", { value: "" }, placeholder),
    dates.map(function(date) {
      var month = getMonthHuman(date);
      var disabled2 = month < minMonth || month > maxMonth;
      return import_react26.default.createElement("option", { key: month, disabled: disabled2, value: month }, formatter(locale, date));
    })
  );
}

// node_modules/react-date-picker/dist/esm/DateInput/YearInput.js
var import_react27 = __toESM(require_react(), 1);
var __assign19 = function() {
  __assign19 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign19.apply(this, arguments);
};
var __rest15 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function YearInput(_a3) {
  var maxDate = _a3.maxDate, minDate = _a3.minDate, _b = _a3.placeholder, placeholder = _b === void 0 ? "----" : _b, valueType = _a3.valueType, otherProps = __rest15(_a3, ["maxDate", "minDate", "placeholder", "valueType"]);
  var maxYear = safeMin(275760, maxDate && getYear(maxDate));
  var minYear = safeMax(1, minDate && getYear(minDate));
  var yearStep = function() {
    if (valueType === "century") {
      return 10;
    }
    return 1;
  }();
  return import_react27.default.createElement(Input, __assign19({ max: maxYear, min: minYear, name: "year", placeholder, step: yearStep }, otherProps));
}

// node_modules/react-date-picker/dist/esm/DateInput/NativeInput.js
var import_react28 = __toESM(require_react(), 1);
function NativeInput(_a3) {
  var ariaLabel = _a3.ariaLabel, disabled = _a3.disabled, maxDate = _a3.maxDate, minDate = _a3.minDate, name = _a3.name, onChange = _a3.onChange, required = _a3.required, value = _a3.value, valueType = _a3.valueType;
  var nativeInputType = function() {
    switch (valueType) {
      case "decade":
      case "year":
        return "number";
      case "month":
        return "month";
      case "day":
        return "date";
      default:
        throw new Error("Invalid valueType");
    }
  }();
  var nativeValueParser = function() {
    switch (valueType) {
      case "decade":
      case "year":
        return getYear;
      case "month":
        return getISOLocalMonth;
      case "day":
        return getISOLocalDate;
      default:
        throw new Error("Invalid valueType");
    }
  }();
  function stopPropagation(event) {
    event.stopPropagation();
  }
  return import_react28.default.createElement("input", { "aria-label": ariaLabel, disabled, hidden: true, max: maxDate ? nativeValueParser(maxDate) : void 0, min: minDate ? nativeValueParser(minDate) : void 0, name, onChange, onFocus: stopPropagation, required, style: {
    visibility: "hidden",
    position: "absolute",
    zIndex: "-999"
  }, type: nativeInputType, value: value ? nativeValueParser(value) : "" });
}

// node_modules/react-date-picker/dist/esm/shared/dates.js
function getBegin2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}

// node_modules/react-date-picker/dist/esm/DateInput.js
var __assign20 = function() {
  __assign20 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign20.apply(this, arguments);
};
var __spreadArray5 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var getFormatterOptionsCache = {};
var defaultMinDate2 = /* @__PURE__ */ new Date();
defaultMinDate2.setFullYear(1, 0, 1);
defaultMinDate2.setHours(0, 0, 0, 0);
var defaultMaxDate2 = /* @__PURE__ */ new Date(864e13);
var allViews3 = ["century", "decade", "year", "month"];
var allValueTypes2 = __spreadArray5(__spreadArray5([], allViews3.slice(1), true), ["day"], false);
function toDate2(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getValueType2(view) {
  var index = allViews3.indexOf(view);
  return allValueTypes2[index];
}
function getValue2(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate2(rawValue);
  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue2(_a3, index) {
  var value = _a3.value, minDate = _a3.minDate, maxDate = _a3.maxDate, maxDetail = _a3.maxDetail;
  var valuePiece = getValue2(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType2(maxDetail);
  var detailValueFrom = function() {
    switch (index) {
      case 0:
        return getBegin2(valueType, valuePiece);
      case 1:
        return getEnd2(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between2(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom2 = function(args) {
  return getDetailValue2(args, 0);
};
var getDetailValueTo2 = function(args) {
  return getDetailValue2(args, 1);
};
var getDetailValueArray2 = function(args) {
  return [getDetailValueFrom2, getDetailValueTo2].map(function(fn) {
    return fn(args);
  });
};
function isInternalInput(element) {
  return element.dataset.input === "true";
}
function findInput(element, property) {
  var nextElement = element;
  do {
    nextElement = nextElement[property];
  } while (nextElement && !isInternalInput(nextElement));
  return nextElement;
}
function focus(element) {
  if (element) {
    element.focus();
  }
}
function renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function(el) {
    return "".concat(el, "+");
  }).join("|"), "g");
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function(arr, element, index) {
    var divider = element && // eslint-disable-next-line react/no-array-index-key
    import_react29.default.createElement(Divider, { key: "separator_".concat(index) }, element);
    var res = __spreadArray5(__spreadArray5([], arr, true), [divider], false);
    var currentMatch = matches && matches[index];
    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function(elementFunction) {
        return currentMatch.match(elementFunction);
      })];
      if (!renderFunction) {
        return res;
      }
      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        res.push(currentMatch);
      } else {
        res.push(renderFunction(currentMatch, index));
        usedFunctions.push(renderFunction);
      }
    }
    return res;
  }, []);
}
function DateInput(_a3) {
  var autoFocus = _a3.autoFocus, className8 = _a3.className, dayAriaLabel = _a3.dayAriaLabel, dayPlaceholder = _a3.dayPlaceholder, disabled = _a3.disabled, format = _a3.format, _b = _a3.isCalendarOpen, isCalendarOpenProps = _b === void 0 ? null : _b, locale = _a3.locale, maxDate = _a3.maxDate, _c = _a3.maxDetail, maxDetail = _c === void 0 ? "month" : _c, minDate = _a3.minDate, monthAriaLabel = _a3.monthAriaLabel, monthPlaceholder = _a3.monthPlaceholder, _d = _a3.name, name = _d === void 0 ? "date" : _d, nativeInputAriaLabel = _a3.nativeInputAriaLabel, onChangeProps = _a3.onChange, onInvalidChange = _a3.onInvalidChange, required = _a3.required, _e = _a3.returnValue, returnValue = _e === void 0 ? "start" : _e, showLeadingZeros = _a3.showLeadingZeros, valueProps = _a3.value, yearAriaLabel = _a3.yearAriaLabel, yearPlaceholder = _a3.yearPlaceholder;
  var _f = (0, import_react29.useState)(null), year = _f[0], setYear = _f[1];
  var _g = (0, import_react29.useState)(null), month = _g[0], setMonth = _g[1];
  var _h = (0, import_react29.useState)(null), day = _h[0], setDay = _h[1];
  var _j = (0, import_react29.useState)(null), value = _j[0], setValue = _j[1];
  var yearInput = (0, import_react29.useRef)(null);
  var monthInput = (0, import_react29.useRef)(null);
  var monthSelect = (0, import_react29.useRef)(null);
  var dayInput = (0, import_react29.useRef)(null);
  var _k = (0, import_react29.useState)(isCalendarOpenProps), isCalendarOpen = _k[0], setIsCalendarOpen = _k[1];
  var lastPressedKey = (0, import_react29.useRef)();
  (0, import_react29.useEffect)(function() {
    setIsCalendarOpen(isCalendarOpenProps);
  }, [isCalendarOpenProps]);
  (0, import_react29.useEffect)(function() {
    var nextValue = getDetailValueFrom2({
      value: valueProps,
      minDate,
      maxDate,
      maxDetail
    });
    if (nextValue) {
      setYear(getYear(nextValue).toString());
      setMonth(getMonthHuman(nextValue).toString());
      setDay(getDate(nextValue).toString());
      setValue(nextValue);
    } else {
      setYear(null);
      setMonth(null);
      setDay(null);
      setValue(null);
    }
  }, [
    valueProps,
    minDate,
    maxDate,
    maxDetail,
    // Toggling calendar visibility resets values
    isCalendarOpen
  ]);
  var valueType = getValueType2(maxDetail);
  var formatDate2 = function() {
    var level = allViews3.indexOf(maxDetail);
    var formatterOptions = getFormatterOptionsCache[level] || function() {
      var options = { year: "numeric" };
      if (level >= 2) {
        options.month = "numeric";
      }
      if (level >= 3) {
        options.day = "numeric";
      }
      getFormatterOptionsCache[level] = options;
      return options;
    }();
    return getFormatter2(formatterOptions);
  }();
  function getProcessedValue(value2) {
    var processFunction = function() {
      switch (returnValue) {
        case "start":
          return getDetailValueFrom2;
        case "end":
          return getDetailValueTo2;
        case "range":
          return getDetailValueArray2;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return processFunction({
      value: value2,
      minDate,
      maxDate,
      maxDetail
    });
  }
  var placeholder = format || function() {
    var year2 = 2017;
    var monthIndex = 11;
    var day2 = 11;
    var date = new Date(year2, monthIndex, day2);
    var formattedDate = formatDate2(locale, date);
    var datePieces = ["year", "month", "day"];
    var datePieceReplacements = ["y", "M", "d"];
    function formatDatePiece(name2, dateToFormat) {
      var formatterOptions = getFormatterOptionsCache[name2] || function() {
        var _a4;
        var options = (_a4 = {}, _a4[name2] = "numeric", _a4);
        getFormatterOptionsCache[name2] = options;
        return options;
      }();
      return getFormatter2(formatterOptions)(locale, dateToFormat).match(/\d{1,}/);
    }
    var placeholder2 = formattedDate;
    datePieces.forEach(function(datePiece, index) {
      var match = formatDatePiece(datePiece, date);
      if (match) {
        var formattedDatePiece = match[0];
        var datePieceReplacement = datePieceReplacements[index];
        placeholder2 = placeholder2.replace(formattedDatePiece, datePieceReplacement);
      }
    });
    placeholder2 = placeholder2.replace("17", "y");
    return placeholder2;
  }();
  var divider = function() {
    var dividers = placeholder.match(/[^0-9a-z]/i);
    return dividers ? dividers[0] : null;
  }();
  function onClick(event) {
    if (event.target === event.currentTarget) {
      var firstInput = event.target.children[1];
      focus(firstInput);
    }
  }
  function onKeyDown(event) {
    lastPressedKey.current = event.key;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case divider: {
        event.preventDefault();
        var input = event.target;
        var property = event.key === "ArrowLeft" ? "previousElementSibling" : "nextElementSibling";
        var nextInput = findInput(input, property);
        focus(nextInput);
        break;
      }
      default:
    }
  }
  function onKeyUp(event) {
    var key = event.key, input = event.target;
    var isLastPressedKey = lastPressedKey.current === key;
    if (!isLastPressedKey) {
      return;
    }
    var isNumberKey = !isNaN(Number(key));
    if (!isNumberKey) {
      return;
    }
    var max = input.getAttribute("max");
    if (!max) {
      return;
    }
    var value2 = input.value;
    if (Number(value2) * 10 > Number(max) || value2.length >= max.length) {
      var property = "nextElementSibling";
      var nextInput = findInput(input, property);
      focus(nextInput);
    }
  }
  function onChangeExternal() {
    if (!onChangeProps) {
      return;
    }
    function filterBoolean(value2) {
      return Boolean(value2);
    }
    var formElements = [
      dayInput.current,
      monthInput.current,
      monthSelect.current,
      yearInput.current
    ].filter(filterBoolean);
    var values = {};
    formElements.forEach(function(formElement) {
      values[formElement.name] = "valueAsNumber" in formElement ? formElement.valueAsNumber : Number(formElement.value);
    });
    var isEveryValueEmpty = formElements.every(function(formElement) {
      return !formElement.value;
    });
    if (isEveryValueEmpty) {
      onChangeProps(null, false);
      return;
    }
    var isEveryValueFilled = formElements.every(function(formElement) {
      return formElement.value;
    });
    var isEveryValueValid = formElements.every(function(formElement) {
      return formElement.validity.valid;
    });
    if (isEveryValueFilled && isEveryValueValid) {
      var year_1 = Number(values.year || (/* @__PURE__ */ new Date()).getFullYear());
      var monthIndex = Number(values.month || 1) - 1;
      var day_1 = Number(values.day || 1);
      var proposedValue = /* @__PURE__ */ new Date();
      proposedValue.setFullYear(year_1, monthIndex, day_1);
      proposedValue.setHours(0, 0, 0, 0);
      var processedValue = getProcessedValue(proposedValue);
      onChangeProps(processedValue, false);
      return;
    }
    if (!onInvalidChange) {
      return;
    }
    onInvalidChange();
  }
  function onChange(event) {
    var _a4 = event.target, name2 = _a4.name, value2 = _a4.value;
    switch (name2) {
      case "year":
        setYear(value2);
        break;
      case "month":
        setMonth(value2);
        break;
      case "day":
        setDay(value2);
        break;
    }
    onChangeExternal();
  }
  function onChangeNative(event) {
    var value2 = event.target.value;
    if (!onChangeProps) {
      return;
    }
    var processedValue = function() {
      if (!value2) {
        return null;
      }
      var _a4 = value2.split("-"), yearString = _a4[0], monthString = _a4[1], dayString = _a4[2];
      var year2 = Number(yearString);
      var monthIndex = Number(monthString) - 1 || 0;
      var day2 = Number(dayString) || 1;
      var proposedValue = /* @__PURE__ */ new Date();
      proposedValue.setFullYear(year2, monthIndex, day2);
      proposedValue.setHours(0, 0, 0, 0);
      return proposedValue;
    }();
    onChangeProps(processedValue, false);
  }
  var commonInputProps = {
    className: className8,
    disabled,
    maxDate: maxDate || defaultMaxDate2,
    minDate: minDate || defaultMinDate2,
    onChange,
    onKeyDown,
    onKeyUp,
    // This is only for showing validity when editing
    required: Boolean(required || isCalendarOpen)
  };
  function renderDay(currentMatch, index) {
    if (currentMatch && currentMatch.length > 2) {
      throw new Error("Unsupported token: ".concat(currentMatch));
    }
    var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
    return import_react29.default.createElement(DayInput, __assign20({ key: "day" }, commonInputProps, {
      ariaLabel: dayAriaLabel,
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: index === 0 && autoFocus,
      inputRef: dayInput,
      month,
      placeholder: dayPlaceholder,
      showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
      value: day,
      year
    }));
  }
  function renderMonth(currentMatch, index) {
    if (currentMatch && currentMatch.length > 4) {
      throw new Error("Unsupported token: ".concat(currentMatch));
    }
    if (currentMatch.length > 2) {
      return import_react29.default.createElement(MonthSelect, __assign20({ key: "month" }, commonInputProps, {
        ariaLabel: monthAriaLabel,
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus: index === 0 && autoFocus,
        inputRef: monthSelect,
        locale,
        placeholder: monthPlaceholder,
        short: currentMatch.length === 3,
        value: month,
        year
      }));
    }
    var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
    return import_react29.default.createElement(MonthInput, __assign20({ key: "month" }, commonInputProps, {
      ariaLabel: monthAriaLabel,
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: index === 0 && autoFocus,
      inputRef: monthInput,
      placeholder: monthPlaceholder,
      showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
      value: month,
      year
    }));
  }
  function renderYear(currentMatch, index) {
    return import_react29.default.createElement(YearInput, __assign20({ key: "year" }, commonInputProps, {
      ariaLabel: yearAriaLabel,
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: index === 0 && autoFocus,
      inputRef: yearInput,
      placeholder: yearPlaceholder,
      value: year,
      valueType
    }));
  }
  function renderCustomInputsInternal() {
    var elementFunctions = {
      d: renderDay,
      M: renderMonth,
      y: renderYear
    };
    var allowMultipleInstances = typeof format !== "undefined";
    return renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
  }
  function renderNativeInput() {
    return import_react29.default.createElement(NativeInput, { key: "date", ariaLabel: nativeInputAriaLabel, disabled, maxDate: maxDate || defaultMaxDate2, minDate: minDate || defaultMinDate2, name, onChange: onChangeNative, required, value, valueType });
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    import_react29.default.createElement(
      "div",
      { className: className8, onClick },
      renderNativeInput(),
      renderCustomInputsInternal()
    )
  );
}

// node_modules/react-date-picker/dist/esm/shared/propTypes.js
var import_prop_types7 = __toESM(require_prop_types(), 1);
var __spreadArray6 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var allViews4 = ["century", "decade", "year", "month"];
var allValueTypes3 = __spreadArray6(__spreadArray6([], allViews4.slice(1), true), ["day"], false);
var isValueType = import_prop_types7.default.oneOf(allValueTypes3);
var isMinDate3 = function isMinDate4(props, propName, componentName) {
  var _a3 = props, _b = propName, minDate = _a3[_b];
  if (!minDate) {
    return null;
  }
  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var maxDate = props.maxDate;
  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }
  return null;
};
var isMaxDate3 = function isMaxDate4(props, propName, componentName) {
  var _a3 = props, _b = propName, maxDate = _a3[_b];
  if (!maxDate) {
    return null;
  }
  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var minDate = props.minDate;
  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }
  return null;
};
var isRef2 = import_prop_types7.default.oneOfType([
  import_prop_types7.default.func,
  import_prop_types7.default.exact({
    current: import_prop_types7.default.any
  })
]);
var rangeOf2 = function(type) {
  return import_prop_types7.default.arrayOf(type);
};

// node_modules/react-date-picker/dist/esm/DatePicker.js
var __assign21 = function() {
  __assign21 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign21.apply(this, arguments);
};
var __rest16 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var isBrowser3 = typeof document !== "undefined";
var baseClassName2 = "react-date-picker";
var outsideActionEvents = ["mousedown", "focusin", "touchstart"];
var allViews5 = ["century", "decade", "year", "month"];
var iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 19,
  height: 19,
  viewBox: "0 0 19 19",
  stroke: "black",
  strokeWidth: 2
};
var CalendarIcon = import_react30.default.createElement(
  "svg",
  __assign21({}, iconProps, { className: "".concat(baseClassName2, "__calendar-button__icon ").concat(baseClassName2, "__button__icon") }),
  import_react30.default.createElement("rect", { fill: "none", height: "15", width: "15", x: "2", y: "2" }),
  import_react30.default.createElement("line", { x1: "6", x2: "6", y1: "0", y2: "4" }),
  import_react30.default.createElement("line", { x1: "13", x2: "13", y1: "0", y2: "4" })
);
var ClearIcon = import_react30.default.createElement(
  "svg",
  __assign21({}, iconProps, { className: "".concat(baseClassName2, "__clear-button__icon ").concat(baseClassName2, "__button__icon") }),
  import_react30.default.createElement("line", { x1: "4", x2: "15", y1: "4", y2: "15" }),
  import_react30.default.createElement("line", { x1: "15", x2: "4", y1: "4", y2: "15" })
);
var DatePicker = function DatePicker2(props) {
  var autoFocus = props.autoFocus, calendarAriaLabel = props.calendarAriaLabel, _a3 = props.calendarIcon, calendarIcon = _a3 === void 0 ? CalendarIcon : _a3, className8 = props.className, clearAriaLabel = props.clearAriaLabel, _b = props.clearIcon, clearIcon = _b === void 0 ? ClearIcon : _b, _c = props.closeCalendar, shouldCloseCalendarOnSelect = _c === void 0 ? true : _c, dataTestid = props["data-testid"], dayAriaLabel = props.dayAriaLabel, dayPlaceholder = props.dayPlaceholder, disableCalendar = props.disableCalendar, disabled = props.disabled, format = props.format, id = props.id, _d = props.isOpen, isOpenProps = _d === void 0 ? null : _d, locale = props.locale, maxDate = props.maxDate, _e = props.maxDetail, maxDetail = _e === void 0 ? "month" : _e, minDate = props.minDate, monthAriaLabel = props.monthAriaLabel, monthPlaceholder = props.monthPlaceholder, _f = props.name, name = _f === void 0 ? "date" : _f, nativeInputAriaLabel = props.nativeInputAriaLabel, onCalendarClose = props.onCalendarClose, onCalendarOpen = props.onCalendarOpen, onChangeProps = props.onChange, onFocusProps = props.onFocus, onInvalidChange = props.onInvalidChange, _g = props.openCalendarOnFocus, openCalendarOnFocus = _g === void 0 ? true : _g, required = props.required, _h = props.returnValue, returnValue = _h === void 0 ? "start" : _h, shouldCloseCalendar = props.shouldCloseCalendar, shouldOpenCalendar = props.shouldOpenCalendar, showLeadingZeros = props.showLeadingZeros, value = props.value, yearAriaLabel = props.yearAriaLabel, yearPlaceholder = props.yearPlaceholder, otherProps = __rest16(props, ["autoFocus", "calendarAriaLabel", "calendarIcon", "className", "clearAriaLabel", "clearIcon", "closeCalendar", "data-testid", "dayAriaLabel", "dayPlaceholder", "disableCalendar", "disabled", "format", "id", "isOpen", "locale", "maxDate", "maxDetail", "minDate", "monthAriaLabel", "monthPlaceholder", "name", "nativeInputAriaLabel", "onCalendarClose", "onCalendarOpen", "onChange", "onFocus", "onInvalidChange", "openCalendarOnFocus", "required", "returnValue", "shouldCloseCalendar", "shouldOpenCalendar", "showLeadingZeros", "value", "yearAriaLabel", "yearPlaceholder"]);
  var _j = (0, import_react30.useState)(isOpenProps), isOpen = _j[0], setIsOpen = _j[1];
  var wrapper = (0, import_react30.useRef)(null);
  var calendarWrapper = (0, import_react30.useRef)(null);
  (0, import_react30.useEffect)(function() {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);
  function openCalendar(_a4) {
    var reason = _a4.reason;
    if (shouldOpenCalendar) {
      if (!shouldOpenCalendar({ reason })) {
        return;
      }
    }
    setIsOpen(true);
    if (onCalendarOpen) {
      onCalendarOpen();
    }
  }
  var closeCalendar = (0, import_react30.useCallback)(function(_a4) {
    var reason = _a4.reason;
    if (shouldCloseCalendar) {
      if (!shouldCloseCalendar({ reason })) {
        return;
      }
    }
    setIsOpen(false);
    if (onCalendarClose) {
      onCalendarClose();
    }
  }, [onCalendarClose, shouldCloseCalendar]);
  function toggleCalendar() {
    if (isOpen) {
      closeCalendar({ reason: "buttonClick" });
    } else {
      openCalendar({ reason: "buttonClick" });
    }
  }
  function onChange(value2, shouldCloseCalendar2) {
    if (shouldCloseCalendar2 === void 0) {
      shouldCloseCalendar2 = shouldCloseCalendarOnSelect;
    }
    if (shouldCloseCalendar2) {
      closeCalendar({ reason: "select" });
    }
    if (onChangeProps) {
      onChangeProps(value2);
    }
  }
  function onFocus2(event) {
    if (onFocusProps) {
      onFocusProps(event);
    }
    if (
      // Internet Explorer still fires onFocus on disabled elements
      disabled || isOpen || !openCalendarOnFocus || event.target.dataset.select === "true"
    ) {
      return;
    }
    openCalendar({ reason: "focus" });
  }
  var onKeyDown = (0, import_react30.useCallback)(function(event) {
    if (event.key === "Escape") {
      closeCalendar({ reason: "escape" });
    }
  }, [closeCalendar]);
  function clear() {
    onChange(null);
  }
  function stopPropagation(event) {
    event.stopPropagation();
  }
  var onOutsideAction = (0, import_react30.useCallback)(function(event) {
    var wrapperEl = wrapper.current;
    var calendarWrapperEl = calendarWrapper.current;
    var target = "composedPath" in event ? event.composedPath()[0] : event.target;
    if (target && wrapperEl && !wrapperEl.contains(target) && (!calendarWrapperEl || !calendarWrapperEl.contains(target))) {
      closeCalendar({ reason: "outsideAction" });
    }
  }, [calendarWrapper, closeCalendar, wrapper]);
  var handleOutsideActionListeners = (0, import_react30.useCallback)(function(shouldListen) {
    if (shouldListen === void 0) {
      shouldListen = isOpen;
    }
    outsideActionEvents.forEach(function(event) {
      if (shouldListen) {
        document.addEventListener(event, onOutsideAction);
      } else {
        document.removeEventListener(event, onOutsideAction);
      }
    });
    if (shouldListen) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
  }, [isOpen, onOutsideAction, onKeyDown]);
  (0, import_react30.useEffect)(function() {
    handleOutsideActionListeners();
    return function() {
      handleOutsideActionListeners(false);
    };
  }, [handleOutsideActionListeners]);
  function renderInputs() {
    var valueFrom = (Array.isArray(value) ? value : [value])[0];
    var ariaLabelProps = {
      dayAriaLabel,
      monthAriaLabel,
      nativeInputAriaLabel,
      yearAriaLabel
    };
    var placeholderProps = {
      dayPlaceholder,
      monthPlaceholder,
      yearPlaceholder
    };
    return import_react30.default.createElement(
      "div",
      { className: "".concat(baseClassName2, "__wrapper") },
      import_react30.default.createElement(DateInput, __assign21({}, ariaLabelProps, placeholderProps, {
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus,
        className: "".concat(baseClassName2, "__inputGroup"),
        disabled,
        format,
        isCalendarOpen: isOpen,
        locale,
        maxDate,
        maxDetail,
        minDate,
        name,
        onChange,
        onInvalidChange,
        required,
        returnValue,
        showLeadingZeros,
        value: valueFrom
      })),
      clearIcon !== null && import_react30.default.createElement("button", { "aria-label": clearAriaLabel, className: "".concat(baseClassName2, "__clear-button ").concat(baseClassName2, "__button"), disabled, onClick: clear, onFocus: stopPropagation, type: "button" }, typeof clearIcon === "function" ? import_react30.default.createElement(clearIcon) : clearIcon),
      calendarIcon !== null && !disableCalendar && import_react30.default.createElement("button", { "aria-label": calendarAriaLabel, className: "".concat(baseClassName2, "__calendar-button ").concat(baseClassName2, "__button"), disabled, onClick: toggleCalendar, onFocus: stopPropagation, type: "button" }, typeof calendarIcon === "function" ? import_react30.default.createElement(calendarIcon) : calendarIcon)
    );
  }
  function renderCalendar() {
    if (isOpen === null || disableCalendar) {
      return null;
    }
    var calendarClassName = props.calendarClassName, datePickerClassName = props.className, onChangeProps2 = props.onChange, portalContainer = props.portalContainer, value2 = props.value, calendarProps = __rest16(props, ["calendarClassName", "className", "onChange", "portalContainer", "value"]);
    var className9 = "".concat(baseClassName2, "__calendar");
    var classNames = clsx_default(className9, "".concat(className9, "--").concat(isOpen ? "open" : "closed"));
    var calendar = import_react30.default.createElement(esm_default2, __assign21({ className: calendarClassName, onChange: function(value3) {
      return onChange(value3);
    }, value: value2 }, calendarProps));
    return portalContainer ? (0, import_react_dom2.createPortal)(import_react30.default.createElement("div", { ref: calendarWrapper, className: classNames }, calendar), portalContainer) : import_react30.default.createElement(
      esm_default3,
      null,
      import_react30.default.createElement("div", { ref: function(ref) {
        if (ref && !isOpen) {
          ref.removeAttribute("style");
        }
      }, className: classNames }, calendar)
    );
  }
  var eventProps = (0, import_react30.useMemo)(function() {
    return makeEventProps(otherProps);
  }, [otherProps]);
  return import_react30.default.createElement(
    "div",
    __assign21({ className: clsx_default(baseClassName2, "".concat(baseClassName2, "--").concat(isOpen ? "open" : "closed"), "".concat(baseClassName2, "--").concat(disabled ? "disabled" : "enabled"), className8), "data-testid": dataTestid, id }, eventProps, { onFocus: onFocus2, ref: wrapper }),
    renderInputs(),
    renderCalendar()
  );
};
var isValue3 = import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.instanceOf(Date)]);
var isValueOrValueArray2 = import_prop_types8.default.oneOfType([isValue3, rangeOf2(isValue3)]);
DatePicker.propTypes = {
  autoFocus: import_prop_types8.default.bool,
  calendarAriaLabel: import_prop_types8.default.string,
  calendarClassName: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.arrayOf(import_prop_types8.default.string)]),
  calendarIcon: import_prop_types8.default.oneOfType([import_prop_types8.default.node, import_prop_types8.default.func]),
  className: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.arrayOf(import_prop_types8.default.string)]),
  clearAriaLabel: import_prop_types8.default.string,
  clearIcon: import_prop_types8.default.oneOfType([import_prop_types8.default.node, import_prop_types8.default.func]),
  closeCalendar: import_prop_types8.default.bool,
  "data-testid": import_prop_types8.default.string,
  dayAriaLabel: import_prop_types8.default.string,
  dayPlaceholder: import_prop_types8.default.string,
  disableCalendar: import_prop_types8.default.bool,
  disabled: import_prop_types8.default.bool,
  format: import_prop_types8.default.string,
  id: import_prop_types8.default.string,
  isOpen: import_prop_types8.default.bool,
  locale: import_prop_types8.default.string,
  maxDate: isMaxDate3,
  maxDetail: import_prop_types8.default.oneOf(allViews5),
  minDate: isMinDate3,
  monthAriaLabel: import_prop_types8.default.string,
  monthPlaceholder: import_prop_types8.default.string,
  name: import_prop_types8.default.string,
  nativeInputAriaLabel: import_prop_types8.default.string,
  onCalendarClose: import_prop_types8.default.func,
  onCalendarOpen: import_prop_types8.default.func,
  onChange: import_prop_types8.default.func,
  onFocus: import_prop_types8.default.func,
  openCalendarOnFocus: import_prop_types8.default.bool,
  required: import_prop_types8.default.bool,
  returnValue: import_prop_types8.default.oneOf(["start", "end", "range"]),
  showLeadingZeros: import_prop_types8.default.bool,
  value: isValueOrValueArray2,
  yearAriaLabel: import_prop_types8.default.string,
  yearPlaceholder: import_prop_types8.default.string
};
if (isBrowser3) {
  DatePicker.propTypes.portalContainer = import_prop_types8.default.instanceOf(HTMLElement);
}
var DatePicker_default = DatePicker;

// node_modules/react-date-picker/dist/esm/index.js
var esm_default5 = DatePicker_default;
export {
  DatePicker_default as DatePicker,
  esm_default5 as default
};
//# sourceMappingURL=react-date-picker.js.map
