import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import screen from 'store/wallet/screen';

const ErrorDialog = ({ open, message, handleClose }) => {
  const actions = [
    <FlatButton
      key="closeButton"
      label="Close"
      primary={true}
      onTouchTap={handleClose}
    />,
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={handleClose}
    >
      <strong>ERROR:</strong> {message}
    </Dialog>
  );
};

export default connect(
  (state, ownProps) => ({
    open: state.wallet.screen.get('error') !== null,
    message: state.wallet.screen.get('error'),
  }),
  (dispatch, ownProps) => ({
    handleClose: () => {
      dispatch(screen.actions.closeError());
    },
  })
)(ErrorDialog);
