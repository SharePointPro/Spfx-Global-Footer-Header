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
import * as React from 'react';
import styles from './GlobalFooter.module.scss';
import { CommandBar, ContextualMenuItemType } from 'office-ui-fabric-react';
var GlobalFooter = (function (_super) {
    __extends(GlobalFooter, _super);
    function GlobalFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalFooter.prototype.render = function () {
        var _a = this.props, label = _a.label, links = _a.links;
        var menuItems = links.map(function (l) {
            return {
                key: l.title.replace(/\s/g, ''),
                name: l.title,
                iconProps: {
                    iconName: l.icon
                },
                href: l.url
            };
        });
        if (label) {
            menuItems.push({
                key: "label",
                name: label,
                itemType: ContextualMenuItemType.Header,
                disabled: true,
                className: styles.label
            });
        }
        return (React.createElement("div", { className: styles.globalFooter },
            React.createElement(CommandBar, { className: styles.commandBar, items: menuItems })));
    };
    return GlobalFooter;
}(React.Component));
export { GlobalFooter };
//# sourceMappingURL=GlobalFooter.js.map