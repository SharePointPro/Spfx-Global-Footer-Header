import * as React from 'react';
import styles from './GlobalHeader.module.scss';
import { GlobalHeaderProps } from '.';
import { CommandBar, ContextualMenuItemType, IContextualMenuItem } from 'office-ui-fabric-react';

export class GlobalHeader extends React.Component<GlobalHeaderProps, {}> {

  public render(): React.ReactElement<GlobalHeaderProps> {
    const { label, links } = this.props;
    const menuItems: IContextualMenuItem[] = links.map(l => {
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
    return (
      <div className={styles.globalHeader}>
        <CommandBar
          className={styles.commandBar}
          items={menuItems}
        />
      </div>
    );
  }
}