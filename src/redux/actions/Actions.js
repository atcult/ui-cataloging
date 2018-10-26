/* MARCCAT ACTIONS TYPES */

export const handler = {};

export const ActionTypes = {
  SEARCH: '@@ui-marccat/SEARCH',
  SEARCH_AUTH: '@@ui-marccat/SEARCH_AUTH',
  SCAN: '@@ui-marccat/SCAN',
  SCAN_SUCCESS: '@@ui-marccat/SCAN_SUCCESS',
  DETAILS: '@@ui-marccat/DETAILS',
  DETAILS_BY_TITLE: '@@ui-marccat/DETAILS_BY_TITLE',
  QUERY: '@@ui-marccat/QUERY',
  ASSOCIATED_BIB_REC: '@@ui-marccat/ASSOCIATED_BIBS_REC',
  FETCH_ASSOCIATED_BIB_REQUESTED: 'FETCH_ASSOCIATED_BIB_REQUESTED',
  ASSOCIATED_BIB_REC_SUCCESS: 'ASSOCIATED_BIB_REC_SUCCESS',
  FIND: '@@ui-marccat/FIND',
  SAVE: '@@ui-marccat/SAVE',
  CREATE: '@@ui-marccat/CREATE',
  DELETE: '@@ui-marccat/DELETE',
  UPDATE: '@@ui-marccat/UPDATE',
  REJECT: '@@ui-marccat/REJECT',
  SAVE_TAG: '@@ui-marccat/SAVE_TAG',
  // TYPE_FILTER: '@@ui-marccat/TYPE_FILTER',
  // SUPPRESSED_FILTER: '@@ui-marccat/SUPPRESSED_FILTER',
  // LANGUAGE_FILTER: '@@ui-marccat/LANGUAGE_FILTER',
  // FORMAT_FILTER: '@@ui-marccat/FORMAT_FILTER',
  FILTERS: '@@ui-marccat/FILTER',
  FETCH_LOGICAL_VIEWS: '@@ui-marccat/FETCH_LOGICAL_VIEWS',
  FETCH_LOGICAL_VIEWS_SUCCESS: '@@ui-marccat/FETCH_LOGICAL_VIEWS_SUCCESS',
  FETCH_LOGICAL_VIEWS_FAILURE: '@@ui-marccat/FETCH_LOGICAL_VIEWS_FAILURE',
  FETCH_REQUESTED: '@@ui-marccat/FETCH_REQUESTED',
  FETCH_DETAIL_REQUESTED: '@@ui-marccat/FETCH_DETAIL_REQUESTED',
  RECORD_REQUESTED: '@@ui-marccat/RECORD_REQUESTED',
  RECORD_SUCCESS: '@@ui-marccat/RECORD_SUCCESS',
  RECORD_AUTH_SUCCESS: '@@ui-marccat/RECORD_AUTH_SUCCESS',
  DIACRITIC_CHAR: '@@ui-marccat/DIACRITIC_CHAR',
  RECEIVED_SEARCH: '@@ui-marccat/RECEIVED_SEARCH',
  CLEAR_SEARCH_RESULTS: '@@ui-marccat/CLEAR_SEARCH_RESULTS',
  COUNT_DOC: '@@ui-marccat/COUNT_DOC',
  COUNT_DOC_SUCCESS: '@@ui-marccat/COUNT_DOC_SUCCESS',
  FETCH_COUNT_DOC: '@@ui-marccat/FETCH_COUNT_DOC',
};
