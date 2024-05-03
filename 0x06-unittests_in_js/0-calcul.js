// Create a function named calculateNumber.
// It should accepts two arguments (number) a and b
// The function should round a and b and return the sum of it
function calculateNumber(a, b) {
  const an = Math.round(a);
  const bn = Math.round(b);
  const c = an + bn;
  return c;
}

module.exports = calculateNumber;
