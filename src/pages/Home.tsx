import { useState, FormEvent } from "react";
import useForm, { ValidationRules } from "../hooks/useForm";
import Input from "../components/Input";

const initialValues = {
  name: "",
  title: "",
};

const validationRules = {
  name: (value: string) =>
    value.trim() === "" ? "First name is required" : null,
  title: (value: string) =>
    value.trim() === "" ? "Last name is required" : null,
};

function Home() {
  const [tab, setTab] = useState<number>(0);
  const [values, handleChange, isFormValid, errors] = useForm(
    initialValues,
    validationRules
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (errors) {
      // Process the form data if it's valid
      console.log("Form data submitted:", values);
    } else {
      console.log("Form validation failed");
    }
  };
  return (
    <div>
      <div className="flex">
        <div onClick={() => setTab(0)} className="mr-4">
          0
        </div>
        <div onClick={() => setTab(1)}>1</div>
      </div>
      <form onSubmit={handleSubmit}>
        {tab === 0 ? (
          <div className="flex flex-col">
            <Input
              label="Name"
              type="text"
              name="name"
              value={values.name}
              required
              onChange={handleChange}
            />
            <Input
              label="Title"
              type="text"
              name="title"
              value={values.title}
              required
              onChange={handleChange}
            />
          </div>
        ) : (
          <div>link</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
