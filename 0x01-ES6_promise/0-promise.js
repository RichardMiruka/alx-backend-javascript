export default function iterateThroughObject(reportWithIterator) {
  if (reportWithIterator && Array.isArray(reportWithIterator)) {
    return reportWithIterator.join(' | ');
  }
  // Handle the case when reportWithIterator is not an array or is undefined
  console.error('Invalid input for iterateThroughObject:', reportWithIterator);
  // You may choose to return a default value or throw an error here
  // Example: return 'Default Value';
}
