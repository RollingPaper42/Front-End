import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useInput = <T = any>(
  initialData: T,
): [T, Dispatch<SetStateAction<T>>, (e: any) => void] => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, handler];
};

export default useInput;
