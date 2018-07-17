import React, { Component } from 'react';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import PaneMenu from '@folio/stripes-components/lib/PaneMenu';
import Paneset from '@folio/stripes-components/lib/Paneset';
import IconButton from '@folio/stripes-components/lib/IconButton';
import Pane from '@folio/stripes-components/lib/Pane';
import Button from '@folio/stripes-components/lib/Button';
import { Field, reduxForm } from 'redux-form';
import { SearchButton } from './';
import * as C from '../Utils';

type DiacriticProps = {
  stripes:Object;
};
type DiacriticState = {
  value: string;
  charCopied: string;
};

class Diacritic extends Component<DiacriticProps, DiacriticState> {
  constructor(props: DiacriticProps) {
    super(props);
    this.state = {
      value: '',
      charCopied: ''
    };
    /** bind habdler **/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {

  };

  render() {
    const formatMsg = this.props.stripes.intl.formatMessage;
    const { pristine, reset, submitting } = this.props;
    const lastMenu = (
      <PaneMenu {...this.props}>
        <IconButton key="icon-gear" icon="gear" />
      </PaneMenu>
    );

    const actionMenuItems = [
      {
        label: formatMsg({
          id: 'ui-marccat.template.create',
        }),
        onClick: () => {
          this.props.history.push(C.INTERNAL_URL.ADD_TEMPLATE);
        },
      },
    ];

    return (
      <Paneset static>
        <Pane
          actionMenuItems={actionMenuItems}
          lastMenu={lastMenu}
          paneTitle={formatMsg({
            id: 'ui-marccat.diacritic.title',
          })}
          paneSub={formatMsg({
            id: 'ui-marccat.diacritic.subTitle',
          })}
          appIcon={{ app: C.META.ICON_TITLE }}
        >
          <form name="diacriticForm" id="diacriticForm" onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={12}>
                <Field style={{ width: '100%' }} rows="8" name="search_textarea_diacritic" id="search_textarea_diacritic" component="textarea" />
              </Col>
              <Col xs={12} style={{ paddingTop: '30px' }}>
                <SearchButton {...this.props} />
                <Button
                  type="button"
                  disabled={submitting || pristine}
                  onClick={reset}
                  buttonStyle="primary"
                  style={{ minHeight: '36px' }}
                >{formatMsg({
                    id: 'ui-marccat.search.clear',
                  })}
                </Button>
              </Col>
            </Row>
          </form>
          <Row>
            <Col xs={12} sm={6} md={4} style={{ paddingTop: '30px' }}>
              <h5 style={{ display: 'inline', paddingRight: '10px' }}>{formatMsg({
                id: 'ui-marccat.diacritic.char.copied',
              })}
              </h5>
              <Field
                id="charCopied"
                label="Char Copied"
                name="charCopied"
                component="input"
                type="text"
                placeholder="select a char...."
              />
            </Col>
          </Row>
        </Pane>
      </Paneset>
    );
  }
}

export default reduxForm({
  form: 'diacriticForm', // a unique identifier for this form
  initialValues: {},
})(Diacritic);
