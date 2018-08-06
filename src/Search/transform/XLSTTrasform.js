import React from 'react';
import { connect } from '@folio/stripes-connect';
import { xmlParse } from 'xslt-processor';
import Paneset from '@folio/stripes-components/lib/Paneset';
import Pane from '@folio/stripes-components/lib/Pane';
import * as C from '../../Utils';

type Props = {
    stripes: Object;
    xmlData: Object;
};

type State = {};

class XLSTTrasform extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleXml = this.handleXml.bind(this);
  }

  handleXml = () => {};

  render() {
    const formatMsg = this.props.stripes.intl.formatMessage;
    const xml = xmlParse(this.props.xmlData);
    return (
      <Paneset static>
        <Pane
          paneTitle={formatMsg({ id: 'ui-marccat.' })}
          paneSub={formatMsg({ id: 'ui-marccat.' })}
          appIcon={{ app: C.META.ICON_TITLE }}
        >
          <div>
            {alert(xml)}
          </div>
        </Pane>
      </Paneset>
    );
  }
}

export default connect(XLSTTrasform, C.META.MODULE_NAME);
