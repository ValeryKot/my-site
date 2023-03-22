import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInYears from 'date-fns/differenceInYears'

export const fromDate = () => {
    return differenceInMonths(new Date(), new Date('2022/08/1'))
      // .replace(' months ago', '');
  };
export const myAge = () => {
    return differenceInYears(new Date(), new Date('1977/09/03')).toString();
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

export const decodeHtmlCharCodes = str =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode)
  );
