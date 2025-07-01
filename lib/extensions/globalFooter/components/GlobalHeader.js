var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import styles from "./GlobalHeader.module.scss";
var GlobalHeader = (function (_super) {
    __extends(GlobalHeader, _super);
    function GlobalHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.onGoogleKeyPress = function (event) {
            if (event.key === 'Enter') {
                window.open("https://www.google.com.au/search?q=" + _this.state.googleInput);
                _this.setState({ googleInput: "" });
            }
        };
        _this.onGoogleChange = function (event) {
            _this.setState({ googleInput: event.target.value });
        };
        _this.onInfiniteKeyPress = function (event) {
            if (event.key === 'Enter') {
                window.open("https://iacadmin.sharepoint.com/search/Pages/results.aspx?k=" + _this.state.infiniteInput);
                _this.setState({ infiniteInput: "" });
            }
        };
        _this.onInfinteChange = function (event) {
            _this.setState({ infiniteInput: event.target.value });
        };
        _this.state = {
            googleInput: "",
            infiniteInput: "",
        };
        return _this;
    }
    GlobalHeader.prototype.render = function () {
        return (React.createElement("div", { className: styles.globalHeader, style: { padding: "10px", position: "relative", height: "30px", } },
            React.createElement("div", { className: styles.inputWrapper, style: { position: "absolute", right: "10px" } },
                React.createElement("div", { className: styles.infiniteWrapper, style: { display: "inline-block" } },
                    React.createElement("img", { src: "https://iacadmin.sharepoint.com/SiteAssets/logo_care.png", className: styles.logoImg, style: { height: "30px", display: "inline-block" } }),
                    React.createElement("input", { type: "text", className: styles.searchInput, placeholder: "Search All Sites", onKeyPress: this.onInfiniteKeyPress, value: this.state.infiniteInput, onChange: this.onInfinteChange, style: { border: "1px solid #ced4da", padding: "5px 10px", width: "250px", maxWidth: "100%", display: "inline-block", verticalAlign: "top", marginLeft: "10px" } })))));
    };
    return GlobalHeader;
}(React.Component));
export { GlobalHeader };
//# sourceMappingURL=GlobalHeader.js.map