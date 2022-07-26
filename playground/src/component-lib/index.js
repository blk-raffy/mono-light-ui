/* eslint-disable */
import React, { createContext, useContext } from 'react';
import styled from 'styled-components';

var Monolight = createContext({
    children: null,
    column: 12,
    architectMode: {
        show: false,
        color: '#5c95ff'
    },
    breakpoints: {
        min: 0,
        xs: 500,
        sm: 800,
        md: 1000,
        lg: 1200,
        xl: 1500,
        max: 9999
    }
});
var useMonolight = function () { return useContext(Monolight); };
/**
 *
 * <Monolight.Provider value={{
 *      column, architectMode, breakpoints
 * }}>
 *     {children}
 * </Monolight.Provider>
 *
 */

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper$4 = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    position: relative;\n    width: auto;\n\n    ", "\n"], ["\n    position: relative;\n    width: auto;\n\n    ", "\n"])), function (props) { return props.architectMode && "\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            top: 0; right: 0; bottom: 0; left: 0;\n            outline: 1px solid ".concat(props.color, ";\n            opacity: .5;\n        }\n\n        &:hover {\n            &:before {\n                content: '';\n                display: block;\n                position: absolute;\n                top: 0; right: 0; bottom: 0; left: 0;\n                outline: 2px solid ").concat(props.color, ";\n                opacity: 1;\n            }\n        }\n        \n    "); });
var Box = function (_a) {
    var _b, _c;
    var children = _a.children, style = _a.style, className = _a.className;
    var box = useMonolight();
    return (React.createElement(Wrapper$4, { architectMode: (_b = box === null || box === void 0 ? void 0 : box.architectMode) === null || _b === void 0 ? void 0 : _b.show, color: (_c = box === null || box === void 0 ? void 0 : box.architectMode) === null || _c === void 0 ? void 0 : _c.color, className: className, style: style }, children));
};
var templateObject_1$4;

var Wrapper$3 = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    height: 100%;\n    ", "\n"], ["\n    height: 100%;\n    ", "\n"])), function (props) {
    if (props.fluid) {
        return "width: 100% !important;";
    }
    else {
        return Object.keys(props.breakpoints).map(function (key, index) {
            if (index === Object.keys(props.breakpoints).length - 1) {
                return "@media(min-width: ".concat(props.breakpoints[key], "px) {\n                            width: ").concat((props.breakpoints[key] < 501 ? '100%' : "".concat(props.breakpoints[key] - 200, "px")), " !important;\n                            min-width: 90%;\n                            margin: 0 auto;\n                            padding: ").concat(props.padding, "px;\n                        }");
            }
            else {
                return "@media(min-width: ".concat(props.breakpoints[key], "px) and\n                        (max-width: ").concat(props.breakpoints[Object.keys(props.breakpoints)[index + 1]] | 9999, "px) {\n                            width: ").concat((props.breakpoints[key] < 501 ? '100%' : "".concat(props.breakpoints[key] - 200, "px")), " !important;\n                            margin: 0 auto;\n                            min-width: 90%;\n                            padding: ").concat(props.padding, "px;\n                        }");
            }
        });
    }
});
var Container = function (_a) {
    var _b, _c;
    var children = _a.children, padding = _a.padding, fluid = _a.fluid, style = _a.style, className = _a.className;
    var context = useMonolight();
    return React.createElement(Wrapper$3, { breakpoints: context.breakpoints, padding: padding, fluid: fluid, style: style, className: className },
        React.createElement(Box, { architectMode: {
                show: (_b = context === null || context === void 0 ? void 0 : context.architectMode) === null || _b === void 0 ? void 0 : _b.show,
                color: ((_c = context === null || context === void 0 ? void 0 : context.architectMode) === null || _c === void 0 ? void 0 : _c.color) || '#5c95ff'
            }, style: {}, className: '' }, children));
};
var templateObject_1$3;

var Wrapper$2 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    flex: 1 1 0;\n    width: 100%;\n    ", "\n    ", "\n"], ["\n    flex: 1 1 0;\n    width: 100%;\n    ", "\n    ", "\n"])), function (props) { return props.animate && "\n        transition: all 0.3s ease;\n        transition-property: width;\n    "; }, function (props) { return Object.keys(props.breakpoints).map(function (key, index) {
    if (index === Object.keys(props.breakpoints).length - 1) {
        return "@media(min-width: ".concat(props.breakpoints[key], "px) {\n                    width: ").concat(props.span[index] !== 'auto'
            ? "".concat(((props.span[index] || props.span[0] || props.column) / props.column) * 100, "%")
            : null, ";\n                    margin-left: ").concat(props.offset[index] !== 'auto'
            ? "".concat(((props.offset[index] || props.offset[0] || 0) / props.column) * 100, "%")
            : null, ";\n                    flex: ").concat((props.span[index] !== 'auto' ? 'none !important' : null), ";\n                    padding: ").concat(props.gutter != 'none' ? "".concat(props.gutter) : "0", "px;\n                }");
    }
    else {
        return "@media(min-width: ".concat(props.breakpoints[key], "px) and\n                    (max-width: ").concat(props.breakpoints[Object.keys(props.breakpoints)[index + 1]] || 0, "px) {\n                        width: ").concat(props.span[index] !== 'auto'
            ? "".concat(((props.span[index] || props.span[0] || props.column) / props.column) * 100, "%")
            : null, ";\n                        margin-left: ").concat(props.offset[index] !== 'auto'
            ? "".concat(((props.offset[index] || props.offset[0] || 0) / props.column) * 100, "%")
            : null, ";\n                        flex: ").concat((props.span[index] !== 'auto' ? 'none !important' : null), ";\n                        padding: ").concat(props.gutter != 'none' ? "".concat(props.gutter) : "0", "px;\n                    }");
    }
}); });
var Col = function (_a) {
    var _b, _c;
    var children = _a.children, _d = _a.span, span = _d === void 0 ? [12, 12, 12, 12, 12] : _d, _e = _a.offset, offset = _e === void 0 ? [0, 0, 0, 0, 0] : _e, _f = _a.gutter, gutter = _f === void 0 ? 'none' : _f, _g = _a.animate, animate = _g === void 0 ? false : _g, className = _a.className, style = _a.style, _h = _a.column, column = _h === void 0 ? 12 : _h;
    var context = useMonolight();
    //console.log(`span: ${span},\noffset: ${offset},\ngutter: ${gutter},\nanimate: ${animate},\ncolumn: ${column}`);
    return React.createElement(Wrapper$2, { breakpoints: context.breakpoints, span: span, offset: offset, gutter: gutter, animate: animate, column: column || (context === null || context === void 0 ? void 0 : context.column), style: style, className: className },
        React.createElement(Box, { architectMode: {
                show: (_b = context === null || context === void 0 ? void 0 : context.architectMode) === null || _b === void 0 ? void 0 : _b.show,
                color: ((_c = context === null || context === void 0 ? void 0 : context.architectMode) === null || _c === void 0 ? void 0 : _c.color) || '#5c95ff'
            }, style: {}, className: '' }, children));
};
var templateObject_1$2;

var Wrapper$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), function (props) { return Object.keys(props.breakpoints).map(function (key, index) {
    return "@media (min-width: ".concat(props.breakpoints[key], "px) {\n            display: flex;\n            justify-content: flex-start;\n            flex-wrap: wrap;\n            margin: 0;\n            width: 100%;\n        }");
}); });
var Row = function (_a) {
    var children = _a.children, _b = _a.gutter, gutter = _b === void 0 ? 'none' : _b, _c = _a.animate, animate = _c === void 0 ? false : _c, className = _a.className, style = _a.style, columns = _a.columns;
    var context = useMonolight();
    return React.createElement(Wrapper$1, { breakpoints: context.breakpoints }, React.Children.toArray(children).map(function (item, index) {
        //console.log(item.props.span);
        return (item && (React.createElement(Col, { span: item.props.span, offset: item.props.offset, key: index, gutter: gutter, column: columns || (context === null || context === void 0 ? void 0 : context.column), animate: animate, style: style, className: className }, item.props.children)));
    }));
};
var templateObject_1$1;

var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: none;\n    ", "\n"], ["\n    display: none;\n    ", "\n"])), function (props) { return props.currentIndex > 0 ? "\n        @media screen and (min-width: ".concat(props.breakpoints[props.currentIndex - 1], "px) and\n            (max-width: ").concat(props.breakpoints[props.currentIndex] || 0, "px) {\n                display: block;\n            }\n    ") : "\n            @media screen and (max-width: ".concat(props.breakpoints[props.currentIndex], "px) {\n                display: block;\n            }\n    "); });
var MediaSwitch = function (_a) {
    var _b, _c;
    var childrens = _a.childrens, breakpoints = _a.breakpoints;
    var context = useMonolight();
    if ((childrens == null || breakpoints == null) || childrens.length != breakpoints.length) {
        return React.createElement(React.Fragment, null);
    }
    else {
        return React.createElement(Box, { architectMode: {
                show: (_b = context === null || context === void 0 ? void 0 : context.architectMode) === null || _b === void 0 ? void 0 : _b.show,
                color: ((_c = context === null || context === void 0 ? void 0 : context.architectMode) === null || _c === void 0 ? void 0 : _c.color) || '#5c95ff'
            }, style: {}, className: '' }, childrens.map(function (item, index) {
            return React.createElement(Wrapper, { key: index, breakpoints: breakpoints, currentIndex: index }, childrens[index]);
        }));
    }
};
var templateObject_1;

export { Box, Col, Container, MediaSwitch, Monolight, Row, useMonolight };
