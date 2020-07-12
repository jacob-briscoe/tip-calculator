import * as R from 'ramda';

const toDecimal = R.divide(R.__, 100);

export const calculateTip = (tipPct) => R.multiply(toDecimal(tipPct));

export const calculateTotal = (tipTotal) => R.add(tipTotal);

const round = (places) =>
  R.pipe(
    num => num * Math.pow(10, places),
    Math.round,
    num => num * Math.pow(10, -1 * places),
  );

export const formatMoney = R.curry(
  (symbol, places, number) => {
    return R.pipe(
      R.defaultTo(0),
      round(places),
      num => num.toFixed(places),
      R.concat(symbol),
    )(number);
  }
);