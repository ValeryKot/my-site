import moment from 'moment';

export const fromDate = () => {
    return moment('01/08/2022', 'DD/MM/YYYY')
      .fromNow(true)
      .replace(' months', '');
  };

export const hex2rgba = (hex, alpha = 100) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const getStyle = (element) => {
  let variable = element.split(/[(,)]/).slice(1,2).toString();
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export const findKeys = (obj) => {
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (key > 0 && value.guid !== '') {
      return value.guid;
    }
  }
  return '';
};