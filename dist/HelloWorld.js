import _classCallCheck from "C:\\Data\\Projects\\_Personal\\components\\material-ui-rules\\node_modules\\@babel\\runtime/helpers/esm/classCallCheck";
import _createClass from "C:\\Data\\Projects\\_Personal\\components\\material-ui-rules\\node_modules\\@babel\\runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "C:\\Data\\Projects\\_Personal\\components\\material-ui-rules\\node_modules\\@babel\\runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "C:\\Data\\Projects\\_Personal\\components\\material-ui-rules\\node_modules\\@babel\\runtime/helpers/esm/getPrototypeOf";
import _inherits from "C:\\Data\\Projects\\_Personal\\components\\material-ui-rules\\node_modules\\@babel\\runtime/helpers/esm/inherits";
import React, { Component } from "react";

var HelloWorld =
/*#__PURE__*/
function (_Component) {
  _inherits(HelloWorld, _Component);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelloWorld).apply(this, arguments));
  }

  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, "Hello world!!! ", this.props.name));
    }
  }]);

  return HelloWorld;
}(Component);

export { HelloWorld as default };