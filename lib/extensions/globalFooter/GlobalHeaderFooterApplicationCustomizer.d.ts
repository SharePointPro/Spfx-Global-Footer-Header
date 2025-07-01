import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { Link } from '.';
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
export default class GlobalHeaderFooterApplicationCustomizer extends BaseApplicationCustomizer<IGlobalHeaderFooterApplicationCustomizerProperties> {
    private footerPlaceholder;
    private topPlaceHolder;
    onInit(): Promise<void>;
    private _onDispose();
}
