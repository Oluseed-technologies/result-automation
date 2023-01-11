export const SelectComponent = ({
  title,
  values,
  name,
  setValues,
  options,
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
}) => {
  return (
    <div className="flex  flex-col w-full my-2">
      <label className="mb-3 text-xl">{title}</label>

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

export const FileInputComponent = ({ values }) => {
  const FILE_NUM = new Array(+values.subjectsNum).fill(0);
  const renderInput = FILE_NUM.map((data, index) => {
    return (
      <div key={index} className="my-3">
        <input multiple className=" p-2" type="file" />
      </div>
    );
  });
  return <div className="mb-4">{renderInput}</div>;
};
