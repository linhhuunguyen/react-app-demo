import { useState } from "react";
import clsx from "clsx";
import useForm, { ValidationErrors } from "../hooks/useForm";
import Input from "../components/Input";
import Template from "../components/Template";

const initialValues = {
  name: "",
  title: "",
  email: "",
};

const validationRules = {
  name: (value: string) => (value.trim() === "" ? "Name is required" : null),
  title: (value: string) => (value.trim() === "" ? "Title is required" : null),
};

function Home() {
  const [tab, setTab] = useState<number>(1);
  const [views, setViews] = useState<string[]>(["View0"]);
  const [values, errors, handleChange, isFormValid, setErrors] = useForm(
    initialValues,
    validationRules
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const newErrors: ValidationErrors = {};
      Object.keys(validationRules).forEach((field) => {
        const fieldName = field;
        const errorMessage = validationRules[fieldName](values[fieldName]);
        if (errorMessage) {
          newErrors[fieldName] = errorMessage;
        }
      });
      setErrors(newErrors);
      alert("Vui lòng nhập đủ thông tin");
    } else if (!isFormValid()) {
      alert("Vui lòng nhập đủ thông tin");
    } else {
      alert("Thành công");
    }
  };

  const handleAddView = () => {
    const cloneView = [...views];
    const numberView = cloneView.length;
    cloneView.push(`View${numberView}`);
    setViews(cloneView);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex mb-8">
        <div
          onClick={() => setTab(0)}
          className={clsx(
            tab === 0 && "bg-red-300",
            "mr-4 border p-1 cursor-pointer"
          )}
        >
          0
        </div>
        <div
          onClick={() => setTab(1)}
          className={clsx(
            tab === 1 && "bg-red-300",
            "mr-4 border p-1 cursor-pointer"
          )}
        >
          1
        </div>
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
              error={errors.name && errors.name}
              classNameContainer="mb-9"
            />
            <Input
              label="Title"
              type="text"
              name="title"
              value={values.title}
              required
              onChange={handleChange}
              error={errors.title && errors.title}
              classNameContainer="mb-9"
            />
          </div>
        ) : (
          <div>
            <div className="flex mb-5">
              {views.map((item) => (
                <div className={clsx("mr-4 border p-1 cursor-pointer")}>
                  {item}
                  <Template
                    name={item}
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <button
                className={clsx("mr-4 border p-1 cursor-pointer")}
                onClick={handleAddView}
              >
                +
              </button>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
