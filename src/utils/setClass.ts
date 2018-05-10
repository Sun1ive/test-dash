export default (val: number, percent: number) => {
  if (val >= 100) {
    return 'blue';
  } else if (val >= percent) {
    return 'green';
  }
  return 'red';
};
