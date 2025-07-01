/// <reference types="react" />
import * as React from "react";
import { GlobalHeaderProps } from ".";
export declare class GlobalHeader extends React.Component<GlobalHeaderProps, {
    googleInput;
    infiniteInput;
}> {
    constructor(props: GlobalHeaderProps);
    private onGoogleKeyPress;
    private onGoogleChange;
    private onInfiniteKeyPress;
    private onInfinteChange;
    render(): React.ReactElement<GlobalHeaderProps>;
}
