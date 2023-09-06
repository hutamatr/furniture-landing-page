import { useState } from 'react';

interface IUseInputStateProps<T> {
  inputState: T;
}

const useInputState = <T>({ inputState }: IUseInputStateProps<T>) => {
  const [input, setInput] = useState(inputState);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    input,
    onChangeInputHandler,
  };
};

export default useInputState;
