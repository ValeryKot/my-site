import moment from 'moment';

export const fromDate = () => {
    return moment('01/08/2022', 'DD/MM/YYYY')
      .fromNow(true)
      .replace(' months', '');
  };