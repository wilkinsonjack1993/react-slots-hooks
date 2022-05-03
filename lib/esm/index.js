import React from "react";
import { Children } from "react";
export function useSlots(children) {
    var childrenArray = Children.toArray(children);
    var slots = {};
    var defaultChildren = childrenArray.filter(function (item) {
        var _a;
        var reactElement = item;
        var slot = (_a = reactElement === null || reactElement === void 0 ? void 0 : reactElement.props) === null || _a === void 0 ? void 0 : _a.slot;
        if (slot && slot !== "default") {
            slots[slot] = item;
            return false;
        }
        return true;
    });
    slots["default"] = defaultChildren;
    return { slots: slots };
}
export var Template = function (props) {
    return React.createElement(React.Fragment, null, props.children);
};
