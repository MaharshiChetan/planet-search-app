export const capitalize = (string) => {
  return string
    .split(' ')
    .map((value) => value[0].toUpperCase() + value.substr(1, value.length))
    .join(' ');
};
