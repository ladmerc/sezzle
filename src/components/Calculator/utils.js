export const calculate = (LHS, operator, RHS) => {
  if (
    typeof LHS !== 'number' ||
    typeof RHS !== 'number'
  ) {
    throw new Error('one or both of the operands is not a number')
  }

  const operators = ['+', '-', '*', '/'];

  if (!operators.includes(operator)) {
    throw new Error(`Invalid operator! Valid options are: ${operators.join(',')}`)
  }

  switch (operator) {
    case '+':
      return LHS + RHS;
    case '-':
      return LHS - RHS;
    case '×':
      return LHS * RHS;
    case '÷':
      return LHS / RHS;
    default:
      return 0;
  }

}
