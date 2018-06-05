import React from 'react';
import { Modal as OverlayModal } from 'react-overlays';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconButton } from '@folio/stripes-components';
import css from './Modal.css';

const propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  size: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  scope: PropTypes.oneOf([ // eslint-disable-line react/no-unused-prop-types
    'root',
    'module',
  ]),
  id: PropTypes.string,
  closeOnBackgroundClick: PropTypes.bool,
  label: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
  footer: PropTypes.node,
};

const defaultProps = {
  scope: 'module',
  onOpen: () => { },
  closeOnBackgroundClick: false,
  dismissible: false,
  open: false,
  showHeader: true,
  size: 'medium',
};

const Modal = (props) => {
  function getModalScope() {
    let container;
    switch (props.scope) {
      case 'module':
        container = document.getElementById('ModuleContainer');
        break;
      default:
        break;
    }
    return container;
  }

  function getModalClass() {
    return classNames(
      css.modal,
      { [`${css.small}`]: props.size === 'small' },
      { [`${css.large}`]: props.size === 'large' },
    );
  }

  return (
    <OverlayModal
      show={props.open}
      backdropClassName={css.backdrop}
      className={css.modalRoot}
      container={getModalScope()}
      onHide={props.onClose}
      onShow={props.onOpen}
      onBackdropClick={props.closeOnBackgroundClick ? props.onClose : () => { }}
    >
      <div
        className={getModalClass()}
        aria-label={props['aria-label'] || props.label} // eslint-disable-line react/prop-types
        id={props.id}
      >
        {props.showHeader &&
        <div className={css.modalHeader}>
          <div className={css.modalLabel}>
            {props.label}
          </div>
          <div className={css.modalControls}>
            {props.dismissible &&
            <IconButton
              className={css.closeModal}
              onClick={props.onClose}
              title="Dismiss modal"
              ariaLabel="Dismiss modal"
              icon="closeX"
            />
                            }
          </div>
        </div>
                }
        <div data-test-eholdings-modal-content className={css.modalContent}>
          {props.children}
        </div>
        {props.footer &&
        <div className={css.modalFooter}>
          {props.footer}
        </div>
                }
      </div>
    </OverlayModal>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
