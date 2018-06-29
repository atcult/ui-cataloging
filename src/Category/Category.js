import PropTypes from 'prop-types';
import React from 'react';
import { connect } from '@folio/stripes-connect';
import SimpleSelect from '../Material/SimpleSelect';
import * as C from '../Utils';

class Category extends React.Component {
    static manifest = Object.freeze({
      categories: {
        type: C.RESOURCE_TYPE,
        root: C.ENDPOINT.BASE_URL,
        path: C.ENDPOINT.CATEGORY_URL,
        headers: { 'x-okapi-tenant': 'tnx' },
        records: C.API_RESULT_JSON_KEY.CATEGORIES,
        GET: {
          params: { lang: 'ita' },
        },
      },
      heading: {
        type: C.RESOURCE_TYPE,
        root: C.ENDPOINT.BASE_URL,
        path: C.ENDPOINT.HEADING_TYPES,
        headers: { 'x-okapi-tenant': 'tnx' },
        records: C.API_RESULT_JSON_KEY.HEADING_TYPES,
        GET: {
          params: { type: 'P', lang: 'ita', marcCategory: '1' },
        },
      }
    });

    render() {
      const emptySelect = <div>Vuoto</div>;
      const { resources: { categories } } = this.props;
      if (!categories || !categories.hasLoaded) return emptySelect;
      return (
        <SimpleSelect {...this.props} data={categories.records} title="Category" />
      );
    }
}

Category.propTypes = {
  resources: PropTypes.object.isRequired
};

export default connect(Category, C.META.MODULE_NAME);
