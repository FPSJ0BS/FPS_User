import {
  clsx_default
} from "./chunk-CCRBYHLB.js";
import {
  require_prop_types
} from "./chunk-MTRWRJFG.js";
import "./chunk-5OHMTM4B.js";
import {
  require_react
} from "./chunk-G6T5RA4E.js";
import {
  __toESM
} from "./chunk-BYPFWIQ6.js";

// node_modules/react-tabs/esm/components/Tabs.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react3 = __toESM(require_react());

// node_modules/react-tabs/esm/helpers/childrenDeepMap.js
var import_react = __toESM(require_react());

// node_modules/react-tabs/esm/helpers/elementTypes.js
function makeTypeChecker(tabsRole) {
  return (element) => !!element.type && element.type.tabsRole === tabsRole;
}
var isTab = makeTypeChecker("Tab");
var isTabList = makeTypeChecker("TabList");
var isTabPanel = makeTypeChecker("TabPanel");

// node_modules/react-tabs/esm/helpers/childrenDeepMap.js
function isTabChild(child) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}
function deepMap(children, callback) {
  return import_react.Children.map(children, (child) => {
    if (child === null)
      return null;
    if (isTabChild(child)) {
      return callback(child);
    }
    if (child.props && child.props.children && typeof child.props.children === "object") {
      return (0, import_react.cloneElement)(child, { ...child.props, children: deepMap(child.props.children, callback) });
    }
    return child;
  });
}
function deepForEach(children, callback) {
  return import_react.Children.forEach(children, (child) => {
    if (child === null)
      return;
    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === "object") {
      if (isTabList(child))
        callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

// node_modules/react-tabs/esm/helpers/propTypes.js
function childrenPropType(props, propName, componentName) {
  let error;
  let tabsCount = 0;
  let panelsCount = 0;
  let tabListFound = false;
  const listTabs = [];
  const children = props[propName];
  deepForEach(children, (child) => {
    if (isTabList(child)) {
      if (child.props && child.props.children && typeof child.props.children === "object") {
        deepForEach(child.props.children, (listChild) => listTabs.push(listChild));
      }
      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }
      tabListFound = true;
    }
    if (isTab(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.");
      }
      tabsCount++;
    } else if (isTabPanel(child)) {
      panelsCount++;
    }
  });
  if (!error && tabsCount !== panelsCount) {
    error = new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${componentName}\`. Received ${tabsCount} 'Tab' and ${panelsCount} 'TabPanel'.`);
  }
  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  const prop = props[propName];
  const name = propFullName || propName;
  let error = null;
  if (prop && typeof prop !== "function") {
    error = new Error(`Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied to \`${componentName}\`, expected \`function\`.`);
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error(`The ${location} \`${name}\` is marked as required in \`${componentName}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`);
  }
  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  const prop = props[propName];
  const name = propFullName || propName;
  let error = null;
  if (prop != null && typeof prop !== "number") {
    error = new Error(`Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied to \`${componentName}\`, expected \`number\`.`);
  } else if (props.defaultIndex != null && prop != null) {
    return new Error(`The ${location} \`${name}\` cannot be used together with \`defaultIndex\` in \`${componentName}\`.
Either remove \`${name}\` to let \`${componentName}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);
  }
  return error;
}

// node_modules/react-tabs/esm/components/UncontrolledTabs.js
var import_prop_types = __toESM(require_prop_types());
var import_react2 = __toESM(require_react());

// node_modules/react-tabs/esm/helpers/count.js
function getTabsCount(children) {
  let tabCount = 0;
  deepForEach(children, (child) => {
    if (isTab(child))
      tabCount++;
  });
  return tabCount;
}

// node_modules/react-tabs/esm/components/UncontrolledTabs.js
function isNode(node) {
  return node && "getAttribute" in node;
}
function isTabNode(node) {
  return isNode(node) && node.getAttribute("data-rttab");
}
function isTabDisabled(node) {
  return isNode(node) && node.getAttribute("aria-disabled") === "true";
}
var canUseActiveElement;
function determineCanUseActiveElement(environment) {
  const env = environment || (typeof window !== "undefined" ? window : void 0);
  try {
    canUseActiveElement = !!(typeof env !== "undefined" && env.document && env.document.activeElement);
  } catch (e) {
    canUseActiveElement = false;
  }
}
var defaultProps = { className: "react-tabs", focus: false };
var propTypes = true ? { children: childrenPropType, direction: import_prop_types.default.oneOf(["rtl", "ltr"]), className: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.array, import_prop_types.default.object]), disabledTabClassName: import_prop_types.default.string, disableUpDownKeys: import_prop_types.default.bool, disableLeftRightKeys: import_prop_types.default.bool, domRef: import_prop_types.default.func, focus: import_prop_types.default.bool, forceRenderTabPanel: import_prop_types.default.bool, onSelect: import_prop_types.default.func.isRequired, selectedIndex: import_prop_types.default.number.isRequired, selectedTabClassName: import_prop_types.default.string, selectedTabPanelClassName: import_prop_types.default.string, environment: import_prop_types.default.object } : {};
var UncontrolledTabs = (props) => {
  let tabNodes = (0, import_react2.useRef)([]);
  let tabIds = (0, import_react2.useRef)([]);
  const ref = (0, import_react2.useRef)();
  function setSelected(index, event) {
    if (index < 0 || index >= getTabsCount2())
      return;
    const { onSelect: onSelect2, selectedIndex: selectedIndex2 } = props;
    onSelect2(index, selectedIndex2, event);
  }
  function getNextTab(index) {
    const count = getTabsCount2();
    for (let i = index + 1; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    for (let i = 0; i < index; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getPrevTab(index) {
    let i = index;
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    i = getTabsCount2();
    while (i-- > index) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getFirstTab() {
    const count = getTabsCount2();
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getLastTab() {
    let i = getTabsCount2();
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getTabsCount2() {
    const { children: children2 } = props;
    return getTabsCount(children2);
  }
  function getTab(index) {
    return tabNodes.current[`tabs-${index}`];
  }
  function getChildren() {
    let index = 0;
    const { children: children2, disabledTabClassName: disabledTabClassName2, focus: focus2, forceRenderTabPanel: forceRenderTabPanel2, selectedIndex: selectedIndex2, selectedTabClassName: selectedTabClassName2, selectedTabPanelClassName: selectedTabPanelClassName2, environment: environment2 } = props;
    tabIds.current = tabIds.current || [];
    let diff = tabIds.current.length - getTabsCount2();
    const id = (0, import_react2.useId)();
    while (diff++ < 0) {
      tabIds.current.push(`${id}${tabIds.current.length}`);
    }
    return deepMap(children2, (child) => {
      let result = child;
      if (isTabList(child)) {
        let listIndex = 0;
        let wasTabFocused = false;
        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment2);
        }
        const env = environment2 || (typeof window !== "undefined" ? window : void 0);
        if (canUseActiveElement && env) {
          wasTabFocused = import_react2.default.Children.toArray(child.props.children).filter(isTab).some((tab, i) => env.document.activeElement === getTab(i));
        }
        result = (0, import_react2.cloneElement)(child, { children: deepMap(child.props.children, (tab) => {
          const key = `tabs-${listIndex}`;
          const selected = selectedIndex2 === listIndex;
          const props2 = { tabRef: (node) => {
            tabNodes.current[key] = node;
          }, id: tabIds.current[listIndex], selected, focus: selected && (focus2 || wasTabFocused) };
          if (selectedTabClassName2)
            props2.selectedClassName = selectedTabClassName2;
          if (disabledTabClassName2)
            props2.disabledClassName = disabledTabClassName2;
          listIndex++;
          return (0, import_react2.cloneElement)(tab, props2);
        }) });
      } else if (isTabPanel(child)) {
        const props2 = { id: tabIds.current[index], selected: selectedIndex2 === index };
        if (forceRenderTabPanel2)
          props2.forceRender = forceRenderTabPanel2;
        if (selectedTabPanelClassName2)
          props2.selectedClassName = selectedTabPanelClassName2;
        index++;
        result = (0, import_react2.cloneElement)(child, props2);
      }
      return result;
    });
  }
  function handleKeyDown(e) {
    const { direction, disableUpDownKeys: disableUpDownKeys2, disableLeftRightKeys: disableLeftRightKeys2 } = props;
    if (isTabFromContainer(e.target)) {
      let { selectedIndex: index } = props;
      let preventDefault = false;
      let useSelectedIndex = false;
      if (e.code === "Space" || e.keyCode === 32 || e.code === "Enter" || e.keyCode === 13) {
        preventDefault = true;
        useSelectedIndex = false;
        handleClick(e);
      }
      if (!disableLeftRightKeys2 && (e.keyCode === 37 || e.code === "ArrowLeft") || !disableUpDownKeys2 && (e.keyCode === 38 || e.code === "ArrowUp")) {
        if (direction === "rtl") {
          index = getNextTab(index);
        } else {
          index = getPrevTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (!disableLeftRightKeys2 && (e.keyCode === 39 || e.code === "ArrowRight") || !disableUpDownKeys2 && (e.keyCode === 40 || e.code === "ArrowDown")) {
        if (direction === "rtl") {
          index = getPrevTab(index);
        } else {
          index = getNextTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 35 || e.code === "End") {
        index = getLastTab();
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 36 || e.code === "Home") {
        index = getFirstTab();
        preventDefault = true;
        useSelectedIndex = true;
      }
      if (preventDefault) {
        e.preventDefault();
      }
      if (useSelectedIndex) {
        setSelected(index, e);
      }
    }
  }
  function handleClick(e) {
    let node = e.target;
    do {
      if (isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return;
        }
        const index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);
        setSelected(index, e);
        return;
      }
    } while ((node = node.parentNode) != null);
  }
  function isTabFromContainer(node) {
    if (!isTabNode(node)) {
      return false;
    }
    let nodeAncestor = node.parentElement;
    do {
      if (nodeAncestor === ref.current)
        return true;
      if (nodeAncestor.getAttribute("data-rttabs"))
        break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);
    return false;
  }
  const { children, className, disabledTabClassName, domRef, focus, forceRenderTabPanel, onSelect, selectedIndex, selectedTabClassName, selectedTabPanelClassName, environment, disableUpDownKeys, disableLeftRightKeys, ...attributes } = { ...defaultProps, ...props };
  return import_react2.default.createElement("div", Object.assign({}, attributes, { className: clsx_default(className), onClick: handleClick, onKeyDown: handleKeyDown, ref: (node) => {
    ref.current = node;
    if (domRef)
      domRef(node);
  }, "data-rttabs": true }), getChildren());
};
UncontrolledTabs.propTypes = true ? propTypes : {};
var UncontrolledTabs_default = UncontrolledTabs;

// node_modules/react-tabs/esm/components/Tabs.js
var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;
var propTypes2 = true ? { children: childrenPropType, className: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.array, import_prop_types2.default.object]), defaultFocus: import_prop_types2.default.bool, defaultIndex: import_prop_types2.default.number, direction: import_prop_types2.default.oneOf(["rtl", "ltr"]), disabledTabClassName: import_prop_types2.default.string, disableUpDownKeys: import_prop_types2.default.bool, disableLeftRightKeys: import_prop_types2.default.bool, domRef: import_prop_types2.default.func, environment: import_prop_types2.default.object, focusTabOnClick: import_prop_types2.default.bool, forceRenderTabPanel: import_prop_types2.default.bool, onSelect: onSelectPropType, selectedIndex: selectedIndexPropType, selectedTabClassName: import_prop_types2.default.string, selectedTabPanelClassName: import_prop_types2.default.string } : {};
var defaultProps2 = { defaultFocus: false, focusTabOnClick: true, forceRenderTabPanel: false, selectedIndex: null, defaultIndex: null, environment: null, disableUpDownKeys: false, disableLeftRightKeys: false };
var getModeFromProps = (props) => {
  return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};
var checkForIllegalModeChange = (props, mode) => {
  if (mode != void 0 && mode !== getModeFromProps(props)) {
    throw new Error(`Switching between controlled mode (by using \`selectedIndex\`) and uncontrolled mode is not supported in \`Tabs\`.
For more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.`);
  }
};
var Tabs = (props) => {
  const { children, defaultFocus, defaultIndex, focusTabOnClick, onSelect, ...attributes } = { ...defaultProps2, ...props };
  const [focus, setFocus] = (0, import_react3.useState)(defaultFocus);
  const [mode] = (0, import_react3.useState)(getModeFromProps(attributes));
  const [selectedIndex, setSelectedIndex] = (0, import_react3.useState)(mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null);
  (0, import_react3.useEffect)(() => {
    setFocus(false);
  }, []);
  if (mode === MODE_UNCONTROLLED) {
    const tabsCount = getTabsCount(children);
    (0, import_react3.useEffect)(() => {
      if (selectedIndex != null) {
        const maxTabIndex = Math.max(0, tabsCount - 1);
        setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
      }
    }, [tabsCount]);
  }
  checkForIllegalModeChange(attributes, mode);
  const handleSelected = (index, last, event) => {
    if (typeof onSelect === "function") {
      if (onSelect(index, last, event) === false)
        return;
    }
    if (focusTabOnClick) {
      setFocus(true);
    }
    if (mode === MODE_UNCONTROLLED) {
      setSelectedIndex(index);
    }
  };
  let subProps = { ...props, ...attributes };
  subProps.focus = focus;
  subProps.onSelect = handleSelected;
  if (selectedIndex != null) {
    subProps.selectedIndex = selectedIndex;
  }
  delete subProps.defaultFocus;
  delete subProps.defaultIndex;
  delete subProps.focusTabOnClick;
  return import_react3.default.createElement(UncontrolledTabs_default, subProps, children);
};
Tabs.propTypes = true ? propTypes2 : {};
Tabs.tabsRole = "Tabs";
var Tabs_default = Tabs;

// node_modules/react-tabs/esm/components/TabList.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react4 = __toESM(require_react());
var defaultProps3 = { className: "react-tabs__tab-list" };
var propTypes3 = true ? { children: import_prop_types3.default.oneOfType([import_prop_types3.default.object, import_prop_types3.default.array]), className: import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.array, import_prop_types3.default.object]) } : {};
var TabList = (props) => {
  const { children, className, ...attributes } = { ...defaultProps3, ...props };
  return import_react4.default.createElement("ul", Object.assign({}, attributes, { className: clsx_default(className), role: "tablist" }), children);
};
TabList.tabsRole = "TabList";
TabList.propTypes = true ? propTypes3 : {};
var TabList_default = TabList;

// node_modules/react-tabs/esm/components/Tab.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());
var DEFAULT_CLASS = "react-tabs__tab";
var defaultProps4 = { className: DEFAULT_CLASS, disabledClassName: `${DEFAULT_CLASS}--disabled`, focus: false, id: null, selected: false, selectedClassName: `${DEFAULT_CLASS}--selected` };
var propTypes4 = true ? { children: import_prop_types4.default.oneOfType([import_prop_types4.default.array, import_prop_types4.default.object, import_prop_types4.default.string]), className: import_prop_types4.default.oneOfType([import_prop_types4.default.string, import_prop_types4.default.array, import_prop_types4.default.object]), disabled: import_prop_types4.default.bool, disabledClassName: import_prop_types4.default.string, focus: import_prop_types4.default.bool, id: import_prop_types4.default.string, selected: import_prop_types4.default.bool, selectedClassName: import_prop_types4.default.string, tabIndex: import_prop_types4.default.string, tabRef: import_prop_types4.default.func } : {};
var Tab = (props) => {
  let nodeRef = (0, import_react5.useRef)();
  const { children, className, disabled, disabledClassName, focus, id, selected, selectedClassName, tabIndex, tabRef, ...attributes } = { ...defaultProps4, ...props };
  (0, import_react5.useEffect)(() => {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);
  return import_react5.default.createElement("li", Object.assign({}, attributes, { className: clsx_default(className, { [selectedClassName]: selected, [disabledClassName]: disabled }), ref: (node) => {
    nodeRef.current = node;
    if (tabRef)
      tabRef(node);
  }, role: "tab", id: `tab${id}`, "aria-selected": selected ? "true" : "false", "aria-disabled": disabled ? "true" : "false", "aria-controls": `panel${id}`, tabIndex: tabIndex || (selected ? "0" : null), "data-rttab": true }), children);
};
Tab.propTypes = true ? propTypes4 : {};
Tab.tabsRole = "Tab";
var Tab_default = Tab;

// node_modules/react-tabs/esm/components/TabPanel.js
var import_prop_types5 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());
var DEFAULT_CLASS2 = "react-tabs__tab-panel";
var defaultProps5 = { className: DEFAULT_CLASS2, forceRender: false, selectedClassName: `${DEFAULT_CLASS2}--selected` };
var propTypes5 = true ? { children: import_prop_types5.default.node, className: import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.array, import_prop_types5.default.object]), forceRender: import_prop_types5.default.bool, id: import_prop_types5.default.string, selected: import_prop_types5.default.bool, selectedClassName: import_prop_types5.default.string } : {};
var TabPanel = (props) => {
  const { children, className, forceRender, id, selected, selectedClassName, ...attributes } = { ...defaultProps5, ...props };
  return import_react6.default.createElement("div", Object.assign({}, attributes, { className: clsx_default(className, { [selectedClassName]: selected }), role: "tabpanel", id: `panel${id}`, "aria-labelledby": `tab${id}` }), forceRender || selected ? children : null);
};
TabPanel.tabsRole = "TabPanel";
TabPanel.propTypes = true ? propTypes5 : {};
var TabPanel_default = TabPanel;
export {
  Tab_default as Tab,
  TabList_default as TabList,
  TabPanel_default as TabPanel,
  Tabs_default as Tabs
};
//# sourceMappingURL=react-tabs.js.map
