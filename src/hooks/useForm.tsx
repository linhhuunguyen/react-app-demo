import { useState, ChangeEvent } from "react";

type FormValues = {
  [key: string]: string;
};

type ValidationRules = {
  [key: string]: (value: string) => string | null;
};

export type ValidationErrors = {
  [key: string]: string | null;
};

type useFormReturn = [
  FormValues,
  ValidationErrors,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => boolean,
  React.Dispatch<React.SetStateAction<ValidationErrors>>,
  (name: string, value: string) => void
];

const useForm = (
  initialValues: FormValues,
  validationRules: ValidationRules
): useFormReturn => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Run validation when the value changes
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    if (validationRules[name]) {
      const errorMessage = validationRules[name](value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    }
  };

  const isFormValid = (): boolean => {
    const hasError = Object.values(errors).some((error) => error !== null);
    return !hasError;
  };

  return [values, errors, handleChange, isFormValid, setErrors,validateField];
};

export default useForm;
