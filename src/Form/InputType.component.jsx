export const SelectComponent = ({
  title,
  values,
  name,
  setValues,
  options,
  Error,
}) => {
  const renderOptions = options.map((data, index) => {
    return (
      <option required key={index} value={data.value}>
        {data.value}
      </option>
    );
  });
  return (
    <div className="flex flex-col   w-full my-2  ">
      <label className="mb-3 text-xl">{title}</label>
      {/* <tt className="text-red-400 font-black">{Error[name]}</tt> */}
      <select
        required
        name={name}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        value={values[name]}
        className="w-full border-2 border-blue-500 rounded-md p-2"
      >
        <option className="hidden" value="">
          select an option
        </option>
        {renderOptions}
      </select>
    </div>
  );
};

export const InputComponent = ({
  title,
  type,
  values,
  setValues,
  name,
  placeholder,
  Error,
}) => {
  return (
    <div className="flex  flex-col w-full my-2">
      <label className="mb-3 text-xl">{title}</label>
      <tt className="text-red-400 font-black">{Error[name]}</tt>
      <input
        name={name}
        required
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        placeholder={placeholder}
        className="w-full hover:border-blue-900 border-2 border-blue-500 rounded-md p-2"
        type={type}
      />
    </div>
  );
};

export const RadioInputComponent = ({
  title,
  name,
  values,
  setValues,
  type,
}) => {
  return (
    <div className="flex mr-2 items-center">
      <label className="mr-1">{title}</label>
      <input
        name={name}
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        required
        type="radio"
      />
    </div>
  );
};
