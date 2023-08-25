import Colors from './Colors';
import Fonts from './Fonts';

export const BPT = {
  xs: '(max-width: 412px)',
  sm: '(max-width: 576px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 992px)',
  xl: '(max-width: 1200px)',
  xxl: '(max-width: 1400px)'
};

export * from './Colors';
export * from './Fonts';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <>
    <Fonts/>
    <Colors/>
  </>
);
