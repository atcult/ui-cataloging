import React from 'react';
import { AccordionSet, ExpandAllButton } from '@folio/stripes-components/lib/Accordion';
import NavList from '@folio/stripes-components/lib/NavList';
import { Row } from '@folio/stripes-components/lib/LayoutGrid';
import { connect } from '@folio/stripes-connect';
import { AdvanceSearchForm } from '../../Search/';
import NavItem from './NavItem';
import * as C from '../../Utils';
import css from '../style/NavStyles.css';
import { Diacritic } from '../../Indexes';

type NavMenuProps = {
  stripes: Object;
  resources: Object;
  match: Object;
  history: Object;
  open: bool;
};
type NavMenuSatate = {
  section: Object;
  open: bool;
};


class NavMenu extends React.Component<NavMenuProps, NavMenuSatate> {
  constructor(props) {
    super(props);
    this.state = {
      section: {
        expandeCollapseAction: false
      }
    };
    this.handleExpandAll = this.handleExpandAll.bind(this);
  }

  handleExpandAll(section) {
    this.setState({ section });
  }


  render() {
    const { formatMessage } = this.props.stripes.intl;
    const rootPath = this.props.match.path;
    return (
      <div>
        <Row className={css.expandAll}>
          <ExpandAllButton accordionStatus={this.state.section} onToggle={this.handleExpandAll} />
        </Row>
        <AccordionSet>
          <NavList className={css.navList} {...this.props}>
            <NavItem
              {...this.props}
              accordionId="expandeCollapseAction"
              label={formatMessage({ id: 'ui-marccat.navigator.simpleSearch' })}
              activeLink={`${rootPath}`}
              open={this.state.section.expandeCollapseAction}
              itemLabel={formatMessage({ id: 'ui-marccat.navigator.simpleSearch' })}
              path={`${rootPath}/externalSearch`}
            />
            <NavItem
              accordionId="advancedSearchSection"
              withChildren
              open={this.state.section.expandeCollapseAction}
              label={formatMessage({ id: 'ui-marccat.navigator.advancedSearch' })}
              path={`${rootPath}/advancedSearch`}
            ><AdvanceSearchForm {...this.props} />
            </NavItem>
            <NavItem
              accordionId="externalSearchSection"
              label={formatMessage({ id: 'ui-marccat.navigator.externalSearch' })}
              open={this.state.section.expandeCollapseAction}
              itemLabel={formatMessage({ id: 'ui-marccat.navigator.externalSearch' })}
              activeLink={`${rootPath}/`}
              path={`${rootPath}/externalSearch`}
            />
            <NavItem
              accordionId="indexesSection"
              label={formatMessage({ id: 'ui-marccat.navigator.indexes' })}
              itemLabel={formatMessage({ id: 'ui-marccat.navigator.indexes' })}
              open={this.state.section.expandeCollapseAction}
              activeLink={`${rootPath}/`}
              path={`${rootPath}/indexList`}
            />
            <NavItem
              accordionId="diacriticSection"
              label={formatMessage({ id: 'ui-marccat.navigator.diacritic' })}
              itemLabel={formatMessage({ id: 'ui-marccat.navigator.diacriticList' })}
              open={this.state.section.expandeCollapseAction}
              activeLink={`${rootPath}/`}
              path={`${rootPath}/diacritic`}
              withChildren
            ><Diacritic {...this.props} />
            </NavItem>
            <NavItem
              accordionId="reportSection"
              label={formatMessage({ id: 'ui-marccat.navigator.report' })}
              itemLabel={formatMessage({ id: 'ui-marccat.navigator.report' })}
              open={this.state.section.expandeCollapseAction}
              activeLink={`${rootPath}/`}
              path={`${rootPath}/report`}
            />
            <NavItem
              accordionId="templateSection"
              label={formatMessage({ id: 'ui-marccat.navigator.template' })}
              open={this.state.section.expandeCollapseAction}
              activeLink={`${rootPath}/`}
              itemLabel={formatMessage({ id: 'ui-marccat.navigator.templateList' })}
              path={`${rootPath}/templateList`}
            />
          </NavList>
        </AccordionSet>
      </div>
    );
  }
}

export default connect(
  NavMenu,
  C.META.MODULE_NAME,
);
