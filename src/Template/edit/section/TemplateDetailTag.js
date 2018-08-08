/**
 * @format
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import MultiColumnList from '@folio/stripes-components/lib/MultiColumnList';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import { connect } from '@folio/stripes-connect';
import * as C from '../../../Utils';
import { remapTemplateView } from '../../../Utils/Mapper';

class TemplateDetailTag extends React.Component {
  static propTypes = {
    resources: PropTypes.object,
    // selectedTemplate: PropTypes.object
  };


  static manifest = Object.freeze({
    details: {
      type: C.RESOURCE_TYPE,
      root: C.ENDPOINT.BASE_URL,
      path: `record-template/%{query}?type=B&lang=${C.ENDPOINT.DEFAULT_LANG}`,
      headers: C.ENDPOINT.HEADERS,
    },
  });

  render() {
    const formatMsg = this.props.stripes.intl.formatMessage;
    const {
      resources: { details },
    } = this.props; // eslint-disable-line react/prop-types

    if (!details || !details.hasLoaded) return <div />;
    const fields = details.records[0];
    const resultTemplateView = remapTemplateView(fields);
    const columnMapping = {
      code: formatMsg({ id: 'ui-marccat.template.list.code' }),
      description: formatMsg({ id: 'ui-marccat.template.list.description' }),
      displayValue: formatMsg({ id: 'ui-marccat.template.list.displayValue' }),
    };
    return (
      <Row>
        <Col xs={12}>
          <MultiColumnList
            contentData={resultTemplateView}
            onRowClick={() => { }}
            visibleColumns={[
              'code',
              'description',
              'displayValue',
            ]}
            columnMapping={columnMapping}
            columnWidths={{ code: '30%', description: '35%', displayValue: '35%' }}
          />
        </Col>
      </Row>
    );
  }
}

TemplateDetailTag.propTypes = {
  stripes: PropTypes.shape({
    intl: PropTypes.object.isRequired,
  }).isRequired,
};

export default connect(
  TemplateDetailTag,
  C.META.MODULE_NAME,
);
