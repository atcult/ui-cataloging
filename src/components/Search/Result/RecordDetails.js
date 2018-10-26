import React from 'react';
import { connect } from 'react-redux';
import KeyValue from '@folio/stripes-components/lib/KeyValue';
import { AccordionSet, Accordion } from '@folio/stripes-components';
import { Row, Col } from 'react-flexbox-grid';
import InventoryPluggableBtn from '../Plugin/Inventory';
import type { Props } from '../../../core';
import style from '../Style/Search.css';
import { getTag245, getTitle245 } from '../../../utils/Mapper';
import AssociatedBib from './AssociatedBib';

type P = Props & {
  items: Array<any>,
}

function RecordDetails({ translate, ...props }: P) {
  const recordDetails = props.items.replace('LEADER', '');
  const recordDetailsArray = recordDetails.split('\n');
  return (
    <AccordionSet>
      <Accordion
        separator={false}
        label={props.checkDetailsInRow !== props.checkDetailsBibRec ? translate({ id: 'ui-marccat.search.details.bibliographic' }) : translate({ id: 'ui-marccat.search.details.authority' })}
      >
        <div className={style.withSpace}>
          <KeyValue
            label={getTag245(recordDetailsArray)}
          >
            <h2>{getTitle245(recordDetailsArray)}</h2>
          </KeyValue>
          {recordDetailsArray.map(item =>
            <Row>
              <Col xs={1} style={{ paddingBottom: '8px' }}>
                {item.substring(0, 4)}
              </Col>
              <Col xs={1} style={{ paddingBottom: '8px' }}>
                {item.substring(6).startsWith('$') ? item.substring(4, 6) : ''}
              </Col>
              <Col xs={10} style={{ paddingBottom: '8px' }}>
                {!item.substring(6).startsWith('$') ? item.substring(4) : item.substring(6)}
              </Col>
            </Row>)}

          <InventoryPluggableBtn {...props} buttonLabel={translate({ id: 'ui-marccat.search.goto.inventory' })} />
        </div>
      </Accordion>
      {props.checkDetailsBibRec === props.checkDetailsInRow &&
      <AssociatedBib {...props} />}
    </AccordionSet>
  );
}

export default (connect(
  ({ marccat: { details, scan, associatedRecords } }) => ({
    items: details.records,
    headings: scan.records,
    checkDetailsInRow: details.recordType,
    checkDetailsBibRec: associatedRecords.recordType
  })
)(RecordDetails));
