import React, { Fragment } from 'react';
import { formatMoney } from '../helpers/math';

const Bill = ({ tip, total }) => (
  <Fragment>
    <div className="row">
      <div className="col-2">Tip:</div>
      <div className="col-10">{toCurrency(tip)}</div>
    </div>
    <div className="row">
      <div className="col-2">Total:</div>
      <div className="col-10">{toCurrency(total)}</div>
    </div>
  </Fragment>
);

const toCurrency = formatMoney('$', 2);

export default Bill;