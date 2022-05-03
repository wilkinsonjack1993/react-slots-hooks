"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.useSlots = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
function useSlots(children) {
    var childrenArray = react_2.Children.toArray(children);
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
exports.useSlots = useSlots;
var Template = function (props) {
    return react_1.default.createElement(react_1.default.Fragment, null, props.children);
};
exports.Template = Template;
