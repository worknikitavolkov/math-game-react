export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateExpression(range) {
  const operations = ["+", "-"];
  const a = getRandomNumber(range.min, range.max);
  const b = getRandomNumber(range.min, range.max);
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const expression = a + " " + operation + " " + b;
  const result = eval(expression);
  return {expression, result};
}