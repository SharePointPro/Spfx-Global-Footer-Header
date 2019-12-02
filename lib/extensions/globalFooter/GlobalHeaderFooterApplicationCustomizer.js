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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import { GlobalFooter, GlobalHeader } from './components';
var GlobalHeaderFooterApplicationCustomizer = (function (_super) {
    __extends(GlobalHeaderFooterApplicationCustomizer, _super);
    function GlobalHeaderFooterApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalHeaderFooterApplicationCustomizer.prototype.onInit = function () {
        if (!this.properties.header && !this.properties.footer) {
            console.error("No links have been configured. Please configure links in the footer's properties and refresh the page");
            return Promise.resolve();
        }
        // Handling the top placeholder
        if (!this.topPlaceHolder) {
            this.topPlaceHolder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this.topPlaceHolder) {
                console.error("The expected placeholder (Top) was not found.");
                return Promise.resolve();
            }
            var element_1 = React.createElement(GlobalHeader, {
                label: this.properties.header.label,
                links: this.properties.header.links
            });
            ReactDom.render(element_1, this.topPlaceHolder.domElement);
        }
        //Footer Placeholder
        if (!this.footerPlaceholder) {
            this.footerPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });
        }
        if (!this.footerPlaceholder) {
            console.error('Placeholder bottom not found');
            return Promise.resolve();
        }
        var element = React.createElement(GlobalFooter, {
            label: this.properties.footer.label,
            links: this.properties.footer.links
        });
        ReactDom.render(element, this.footerPlaceholder.domElement);
        return Promise.resolve();
    };
    GlobalHeaderFooterApplicationCustomizer.prototype._onDispose = function () {
    };
    __decorate([
        override
    ], GlobalHeaderFooterApplicationCustomizer.prototype, "onInit", null);
    return GlobalHeaderFooterApplicationCustomizer;
}(BaseApplicationCustomizer));
export default GlobalHeaderFooterApplicationCustomizer;
//# sourceMappingURL=GlobalHeaderFooterApplicationCustomizer.js.map