import React from 'react';
import FilterGroups, { initialFilterState } from '@folio/stripes-components/lib/FilterGroups';
import { ActionTypes } from '../../../redux/actions';
import { Props } from '../../../core';

import styles from './FiltersContainer.css';

type P = Props & {}
export default class FiltersContainer extends React.Component<P, {}> {
  constructor(props) {
    super(props);
    this.config = [
      {
        label: 'Record Type',
        name: 'record',
        cql: 'record.name',
        values: ['Bibliographic records', 'Authority records'],
      },
      {
        label: 'Suppressed',
        name: 'suppressed',
        cql: 'suppressed.name',
        values: [{ name: 'Yes', cql: '0' }, 'No'],
      },
      {
        label: 'Language of text',
        name: 'lang',
        cql: 'language.name',
        values: ['English', 'Italian', 'Spanish', 'French', 'Hungarian', 'Chinese, simplified', 'Arabic'],
      },
      {
        label: 'Format type',
        name: 'format',
        cql: 'format.name',
        values: ['Audio recording', 'Book', 'Map', 'Monograph', 'Serial', 'Video'],
      },
    ];

    this.state = {
      filters: initialFilterState(this.config, null),
    };
  }

  onChangeFilter = (e) => {
    const { name, checked } = e.target;
    const { store } = this.props;
    this.setState(prevState => {
      const filters = Object.assign({}, prevState.filters);
      filters[name] = checked;
      const filterType = name.split('.')[0];
      store.dispatch({ type: ActionTypes.FILTER, filterType });
      return { filters };
    });
  }

  onClearFilter = () => {
    this.setState(() => {
      const filters = {};
      return { filters };
    });
  }

  render() {
    return (
      <div className={styles['search-filters']}>
        <FilterGroups
          style={{ marginTop: '1rem' }}
          config={this.config}
          filters={this.state.filters}
          onChangeFilter={this.onChangeFilter}
          onClearFilter={this.onClearFilter}
        />
      </div>
    );
  }
}
