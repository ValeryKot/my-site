import {useEffect} from 'react';

export default function useFonts(title) {
  useEffect(() => {
    const prev = document.querySelector('head').innerHTML;
    document.querySelector('head').insertAdjacentHTML('beforeend', title);
    return () => {
      if (document.querySelector('head').innerHTML === title) {
        document.querySelector('head').innerHTML = prev;
      }
    };
  }, [title]);
}
