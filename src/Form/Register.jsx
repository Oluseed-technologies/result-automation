import { useState, useEffect } from "react";
import {
  InputComponent,
  SelectComponent,
  RadioInputComponent,
} from "./InputType.component";
import {
  AcademicTerms,
  AcademicSessions,
  GradingSystems,
} from "./OptionValues.data";
import { InputValues } from "./InputValues.data.jsx";
import { ErrorValues } from "./ErrorValues.jsx";
import ButtonComponent from "./Button.component";
import ErrorHandler from "./Error.utils";

const Register = () => {
  const presentYear = new Date(Date.now()).getFullYear();
  const [values, setValues] = useState(InputValues);
  const [Error, setError] = useState(ErrorValues);

  const years = new Array(15).fill("").map((data, index) => {
    return { id: index + 1, value: presentYear - index };
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    ErrorHandler(Error, values, setError, ErrorValues);
  };
  const HandleToHome = (e) => {
    e.preventDefault();

    // window.scrollTop();
  };

  return (
    <main className="flex items-center md:w-7/12 w-full px-4  mx-auto flex-col justify-center">
      <h1 className="text-4xl my-2">Termly Result</h1>
      <h4 className="text-semibold font-sans text-center">
        Accurately Provide The Following Information <br /> For Your School And
        Particular Class.
      </h4>
      <form className="font-mono">
        <SelectComponent
          name="grade"
          options={GradingSystems}
          title="Choose a Grading Model/System"
          values={values}
          Error={Error}
          setValues={setValues}
        />
        <SelectComponent
          name="session"
          options={years}
          title="Academic Session"
          values={values}
          Error={Error}
          setValues={setValues}
        />
        <InputComponent
          values={values}
          setValues={setValues}
          Error={Error}
          name="class_name"
          placeholder="Enter the class name"
          type="text"
          title="Name of Class"
        />
        <InputComponent
          values={values}
          setValues={setValues}
          Error={Error}
          name="studentsNo"
          placeholder="Enter the number of students"
          type="number"
          title="Total Number Of Student"
        />
        <InputComponent
          values={values}
          setValues={setValues}
          Error={Error}
          name="subjectsNum"
          placeholder="Enter the number of subjects"
          type="number"
          title="Number of Subjects"
        />
        <InputComponent
          Error={Error}
          values={values}
          setValues={setValues}
          name="adminEmail"
          placeholder="Enter the email of the admin"
          type="email"
          title="Email of Admin"
        />
        <InputComponent
          Error={Error}
          values={values}
          setValues={setValues}
          name="teacherName"
          placeholder="Enter the name of the class teacher"
          type="text"
          title="Name of Class Teacher"
        />
        <InputComponent
          Error={Error}
          values={values}
          setValues={setValues}
          name="headName"
          placeholder="Enter the name of head teacher"
          type="text"
          title="Name of Head Teacher"
        />
        <SelectComponent
          values={values}
          setValues={setValues}
          name="term"
          options={AcademicTerms}
          title="Term"
        />
        <InputComponent
          Error={Error}
          values={values}
          setValues={setValues}
          name="resumptionDate"
          placeholder="Enter the next resumption date"
          type="date"
          title="Next Term Resumption Date"
        />
        <InputComponent
          Error={Error}
          values={values}
          setValues={setValues}
          name="institutionCode"
          placeholder="Enter your access code"
          type="number"
          title="Institution Code"
        />
        <section className="flex items-center">
          <RadioInputComponent name="test mode" type="text" title="Live" />
          <RadioInputComponent name="test mode" type="text" title="Test" />
        </section>
        <section className="flex items-center my-3 justify-center">
          <ButtonComponent
            bgcolor="bg-red-500"
            hover="hover:bg-red-800"
            ClickHandler={HandleToHome}
            title="Back to Home"
          />
          <ButtonComponent ClickHandler={HandleSubmit} title="Submit" />
        </section>
      </form>
    </main>
  );
};
export default Register;
