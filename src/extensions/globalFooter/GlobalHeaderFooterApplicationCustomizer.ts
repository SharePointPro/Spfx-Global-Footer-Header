import * as React from 'react';
import * as ReactDom from 'react-dom';
import { override } from '@microsoft/decorators';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';
import { Link } from '.';
import { GlobalFooterProps, GlobalFooter, GlobalHeader, GlobalHeaderProps } from './components';

export interface IGlobalHeaderFooterApplicationCustomizerProperties {
  header: {
    links?: Link[];
    label: string;
  };
  footer: {
    links?: Link[];
    label: string;
  };
}

export default class GlobalHeaderFooterApplicationCustomizer
  extends BaseApplicationCustomizer<IGlobalHeaderFooterApplicationCustomizerProperties> {
  private footerPlaceholder: PlaceholderContent | undefined;
  private topPlaceHolder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    if (!this.properties.header && !this.properties.footer) {
      console.error(`No links have been configured. Please configure links in the footer's properties and refresh the page`);
      return Promise.resolve();
    }

    // Handling the top placeholder
    if (!this.topPlaceHolder) {
      this.topPlaceHolder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this.topPlaceHolder) {
        console.error("The expected placeholder (Top) was not found.");
        return Promise.resolve();
      }

      const element: React.ReactElement<GlobalHeaderProps> = React.createElement(
        GlobalHeader,
        {
          label: this.properties.header.label,
          links: this.properties.header.links
        }
      );
      ReactDom.render(element, this.topPlaceHolder.domElement);
    }


    //Footer Placeholder
    if (!this.footerPlaceholder) {
      this.footerPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });
    }

    if (!this.footerPlaceholder) {
      console.error('Placeholder bottom not found');
      return Promise.resolve();
    }

    const element: React.ReactElement<GlobalFooterProps> = React.createElement(
      GlobalFooter,
      {
        label: this.properties.footer.label,
        links: this.properties.footer.links
      }
    );

    ReactDom.render(element, this.footerPlaceholder.domElement);

    return Promise.resolve();
  }

  private _onDispose(): void {
  }
}
