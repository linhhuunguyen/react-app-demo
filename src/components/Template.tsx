import React, { useState } from "react";
import Input from "./Input";

interface TemplateProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  //   error: string;
}

function Template({ name, value, onChange }: TemplateProps) {
  const [selectedOption, setSelectedOption] = useState<string>("none");
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log("value", value);
    setSelectedOption(value);
  };

  //   console.log("selectedOption", selectedOption);

  return (
    <div>
      {/* <div className="flex">
        <label
          htmlFor="template"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option {name}
        </label>
        <select
          onChange={selectChange}
          id="template"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="none">none</option>
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
        </select>
      </div> */}
      {/* <div className="mt-8">
        {selectedOption === "none" && <div></div>}
        {selectedOption === "template1" && (
          <div>
            <Input
              label="Email"
              type="text"
              required
              classNameContainer="mb-9"
            />
            <Input label="Age" type="text" required classNameContainer="mb-9" />
            <Input label="Gender" type="text" classNameContainer="mb-9" />
          </div>
        )}
        {selectedOption === "template2" && (
          <div>
            <Input label="Id" type="text" required classNameContainer="mb-9" />
            <Input
              label="Username"
              type="text"
              required
              classNameContainer="mb-9"
            />
            <Input label="Password" type="text" classNameContainer="mb-9" />
          </div>
        )}
      </div> */}
      <Input
        label="Email"
        type="text"
        name="email"
        required
        classNameContainer="mb-9"
        value={value}
        onChange={onChange}
      />
      <Input label="Age" type="text" required classNameContainer="mb-9" />
      <Input label="Gender" type="text" classNameContainer="mb-9" />
    </div>
  );
}

export default React.memo(Template);
