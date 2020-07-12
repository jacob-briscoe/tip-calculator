import { calculateTip, calculateTotal, formatMoney } from './math';

describe('math', () => {

  it('calculating tip', () => {
    expect(calculateTip(10)(10)).toBe(1);
    expect(calculateTip(20)(200)).toBe(40);
    expect(calculateTip(99)(1)).toBe(.99);
    expect(calculateTip(1)(1)).toBe(.01);
  });

  it('calculating total', () => {
    expect(calculateTotal(1)(1)).toBe(2);
    expect(calculateTotal(30.00)(1)).toBe(31.00);
    expect(calculateTotal(51.67)(1)).toBe(52.67);
  });

  it('format money', () => {
    const dollar = formatMoney('$', 2);
    expect(dollar(3.47)).toBe('$3.47');
    expect(dollar(1000.99)).toBe('$1000.99');
  });

});