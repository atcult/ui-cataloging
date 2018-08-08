/**
 * @format
 * @flow
 */
import React from 'react';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import EditTemplateInfo from './section/EditTemplateInfo';
import * as C from '../../Utils';
import TemplateDetailTag from './section/TemplateDetailTag';
import Paneset from '../../../node_modules/@folio/stripes-components/lib/Paneset';
import Pane from '../../../node_modules/@folio/stripes-components/lib/Pane';
import TemplateView from '../view/TemplateView';
import PaneMenu from '../../../node_modules/@folio/stripes-components/lib/PaneMenu';
import IconButton from '../../../node_modules/@folio/stripes-components/lib/IconButton';

class EditTemplate extends React.Component {
  static propTypes = {
    selectedTemplate: PropTypes.object.isRequired,
    mutator: PropTypes.object,
    history: PropTypes.object
  };

  static manifest = Object.freeze({
    query: { initialValue: {} },
    resultCount: { initialValue: C.INITIAL_RESULT_COUNT },
    records: {
      type: C.RESOURCE_TYPE,
      root: C.ENDPOINT.BASE_URL,
      path: C.ENDPOINT.TEMPLATE_MANDATORY,
      headers: C.ENDPOINT.HEADERS,
      records: 'fields',
      GET: {
        params: { lang: C.ENDPOINT.DEFAULT_LANG },
      },
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      showEditTemplate: false,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState(curState => {
      const newState = _.cloneDeep(curState);
      newState.showEditTemplate = !this.state.showEditTemplate;
      return newState;
    });
    this.props.history.push(C.INTERNAL_URL.VIEW_TEMPLATE);
  }

  handleButtonClick = () => { };

  handleEditTemplate = () => {
    const settings = {
      id: 288,
      name: '',
    };
    this.props.mutator.recordsTemplates.POST(settings);
  };

  render() {
    const saveIcon = (
      <PaneMenu>
        <IconButton key="icon-save" icon="save" />
      </PaneMenu>
    );
    if (this.state.showEditTemplate) {
      return <TemplateView {...this.props} />;
    } else {
      return (
        <Paneset static>
          <Pane
            fullWidth
            paneTitle={this.props.selectedTemplate.name}
            paneSub={`Id ${this.props.selectedTemplate.id}`}
            appIcon={{ app: C.META.ICON_TITLE }}
            dismissible
            onClose={this.handleClose}
            lastMenu={saveIcon}
          >
            <form id="editTemplateForm" name="editTemplateForm">
              <EditTemplateInfo
                {...this.props}
                selectedTemplate={this.props.selectedTemplate}
              />
              <TemplateDetailTag
                {...this.props}
                selectedTemplate={this.props.selectedTemplate}
              />
            </form>
          </Pane>
        </Paneset>
      );
    }
  }
}

export default reduxForm({
  form: 'editTemplateForm',
})(EditTemplate);
