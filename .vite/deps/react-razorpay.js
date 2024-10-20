import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __commonJS
} from "./chunk-BYPFWIQ6.js";

// node_modules/react-razorpay/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-razorpay/dist/index.js"(exports) {
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var Razorpay = class {
      constructor(options) {
        this.options = options;
        if (typeof window !== "undefined")
          this.rzrpayInstannce = new window.Razorpay(this.options);
      }
      on(event, callback) {
        this.rzrpayInstannce.on(event, callback);
      }
      open() {
        this.rzrpayInstannce.open();
      }
    };
    var useRazorpay = () => {
      const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";
      const isClient = (0, react_1.useMemo)(() => typeof window !== "undefined", []);
      const [isLoaded, setIsLoaded] = (0, react_1.useState)(false);
      const checkScriptLoaded = (0, react_1.useCallback)(() => {
        if (!isClient || !("Razorpay" in window))
          return false;
        return true;
      }, []);
      const loadScript = (0, react_1.useCallback)((scriptUrl) => {
        if (!isClient)
          return;
        return new Promise((resolve, reject) => {
          const scriptTag = document.createElement("script");
          scriptTag.src = scriptUrl;
          scriptTag.onload = (ev) => {
            setIsLoaded(true), resolve(ev);
          };
          scriptTag.onerror = (err) => reject(err);
          document.body.appendChild(scriptTag);
        });
      }, []);
      (0, react_1.useEffect)(() => {
        if (!checkScriptLoaded()) {
          (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
              yield loadScript(RAZORPAY_SCRIPT);
            } catch (error) {
              throw new Error(error);
            }
          }))();
        }
      }, []);
      return [Razorpay, isLoaded];
    };
    exports.default = useRazorpay;
  }
});
export default require_dist();
//# sourceMappingURL=react-razorpay.js.map
