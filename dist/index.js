'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MugiMenu = function (_Component) {
    _inherits(MugiMenu, _Component);

    function MugiMenu(props) {
        _classCallCheck(this, MugiMenu);

        var _this = _possibleConstructorReturn(this, (MugiMenu.__proto__ || Object.getPrototypeOf(MugiMenu)).call(this, props));

        _this.renderItem = _this.renderItem.bind(_this);
        return _this;
    }

    _createClass(MugiMenu, [{
        key: 'renderItem',
        value: function renderItem(item, i) {
            var _this2 = this;

            if (typeof item == 'string') {
                var onClick = function onClick(e) {
                    return _this2.props.onItemClick(item);
                };
                return _react2.default.createElement(
                    'li',
                    { key: i },
                    _react2.default.createElement(
                        'button',
                        { onClick: onClick },
                        item
                    )
                );
            } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') {
                var _onClick = function _onClick(e) {
                    return _this2.props.onItemClick(item.name);
                };
                var children = null;
                if (item.children) {
                    children = item.children.map(function (child, j) {
                        return _this2.renderItem(child, j);
                    });
                    children = _react2.default.createElement(
                        'ul',
                        { className: 'dropdown' },
                        children
                    );
                }

                if (item.icon) {
                    var icon = _react2.default.createElement('img', { src: item.icon });
                    var caption = _react2.default.createElement(
                        'span',
                        { className: 'caption' },
                        item.caption
                    );
                    var classNames_ = (0, _classnames2.default)({ 'with-icon': true, 'without-caption': item.caption == null });
                    return _react2.default.createElement(
                        'li',
                        { key: i },
                        _react2.default.createElement(
                            'button',
                            { className: classNames_, onClick: _onClick },
                            icon,
                            '\xA0',
                            caption
                        ),
                        children
                    );
                }

                var caption = _react2.default.createElement(
                    'span',
                    { className: 'caption' },
                    item.caption ? item.caption : item.name
                );
                return _react2.default.createElement(
                    'li',
                    { key: i },
                    _react2.default.createElement(
                        'button',
                        { onClick: _onClick },
                        ' ',
                        caption
                    ),
                    children
                );
            }
            console.log(item, i);
            return _react2.default.createElement(
                'span',
                null,
                'error'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var items = this.props.items;

            var children = items.map(function (item, i) {
                return _this3.renderItem(item, i);
            });
            return _react2.default.createElement(
                'div',
                { className: this.props.className },
                _react2.default.createElement(
                    'ul',
                    { className: 'mugi-menu' },
                    children
                ),
                _react2.default.createElement('div', { className: 'clear-both' })
            );
        }
    }]);

    return MugiMenu;
}(_react.Component);

exports.default = MugiMenu;