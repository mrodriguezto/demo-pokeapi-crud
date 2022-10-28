import { useState } from "react";

const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const setValue = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const setFormValue = (form: T) => {
    setState(form);
  };

  return {
    ...state,
    form: state,
    setValue,
    setFormValue,
  };
};

export default useForm;
