import * as React from "react";
import styles from "./GlobalHeader.module.scss";
import { GlobalHeaderProps } from ".";
import {
  CommandBar,
  ContextualMenuItemType,
  IContextualMenuItem
} from "office-ui-fabric-react";

export class GlobalHeader extends React.Component<GlobalHeaderProps, { googleInput, infiniteInput}> {
  constructor(props: GlobalHeaderProps) {
    super(props);
    this.state = {
      googleInput: "",
      infiniteInput: "",
    };
  }

  private onGoogleKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.open(`https://www.google.com.au/search?q=${this.state.googleInput}`);
      this.setState({googleInput: ""});
    }
  }

  private onGoogleChange = (event) => {
    this.setState({ googleInput: event.target.value });
  }

  private onInfiniteKeyPress = (event) => {
    if (event.key === 'Enter') {
      window.open(`https://iacadmin.sharepoint.com/search/Pages/results.aspx?k=${this.state.infiniteInput}`);
      this.setState({infiniteInput: ""});

    }
  }

  private onInfinteChange = (event) => {
    this.setState({ infiniteInput: event.target.value });
  }


  public render(): React.ReactElement<GlobalHeaderProps> {
    return (
      <div className={styles.globalHeader} style={{padding: "10px", position: "relative", height: "30px",}}>
        <div className={styles.inputWrapper} style={{ position: "absolute", right: "10px"}}>
        <div className={styles.infiniteWrapper} style={{display: "inline-block"}}>
            <img
              src="https://iacadmin.sharepoint.com/SiteAssets/logo_care.png"
              className={styles.logoImg}
              style={{ height: "30px", display: "inline-block"}}
            ></img>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search All Sites"
              onKeyPress={this.onInfiniteKeyPress}
              value={this.state.infiniteInput}
              onChange={this.onInfinteChange}
              style={{border: "1px solid #ced4da", padding: "5px 10px", width: "250px", maxWidth: "100%", display: "inline-block", verticalAlign: "top",  marginLeft: "10px"}}
            ></input>
          </div>
          {/* <div className={styles.googleWrapper}>
            <img
              src="https://www.google.com.au/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              className={styles.logoImg}
              style={{ height: "30px", display: "inline-block"}}
            ></img>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search Google"
              onKeyPress={this.onGoogleKeyPress}
              value={this.state.googleInput}
              onChange={this.onGoogleChange}
              style={{border: "1px solid #ced4da", padding: "5px 10px", width: "250px", maxWidth: "100%", display: "inline-block", verticalAlign: "top",  marginLeft: "10px"}}
            ></input>
          </div> */}
        </div>
      </div>
    );
  }
}
