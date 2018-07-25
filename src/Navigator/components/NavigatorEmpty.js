import React from 'react';
import IconButton from '@folio/stripes-components/lib/IconButton';
import Paneset from '@folio/stripes-components/lib/Paneset';
import Pane from '@folio/stripes-components/lib/Pane';
import PaneMenu from '@folio/stripes-components/lib/PaneMenu';
import Icon from '@folio/stripes-components/lib/Icon';
import { connect } from '@folio/stripes-connect';
import * as C from '../../Utils';

import styles from '../style/NavStyles.css';

type NavigatorEmptyProps = {
  stripes: Object;
};

class NavigatorEmpty extends React.Component<NavigatorEmptyProps, {}> {
  render() {
    const searchMenu = (
      <PaneMenu>
        <IconButton key="icon-search" icon="search" />
      </PaneMenu>
    );

    const lastMenu = (
      <PaneMenu>
        <IconButton key="icon-add" icon="comment" />
      </PaneMenu>
    );
    const formatMsg = this.props.stripes.intl.formatMessage;

    return (
      <Paneset static className={styles.container}>
        <Pane
          className={styles.container}
          firstMenu={searchMenu}
          lastMenu={lastMenu}
          defaultWidth="fill"
          paneTitle={formatMsg({
            id: 'ui-marccat.templates.title',
          })}
          paneSub="0 result found"
          onClose={() => {}}
          appIcon={{ app: C.META.ICON_TITLE }}
        />
        <Icon icon="spinner-ellipsis" />
      </Paneset>
    );
  }
}

export default connect(
  NavigatorEmpty,
  C.META.MODULE_NAME,
);