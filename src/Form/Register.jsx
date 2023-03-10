import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  InputComponent,
  SelectComponent,
  RadioInputComponent,
} from "../component/InputType.component";
import {
  AcademicTerms,
  AcademicSessions,
  GradingSystems,
  Years,
} from "./OptionValues.data";
import { InputValues } from "./InputValues.data.jsx";
import ButtonComponent from "../component/Button.component";
import { motion } from "framer-motion";
import UploadTemplate from "./UploadTemplate";

const Register = ({ resultType }) => {
  const navigate = useNavigate();
  console.log(resultType);

  const [values, setValues] = useState(InputValues);
  const [open, setOpen] = useState(false);

  const HandleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center md:w-7/12 w-full px-4  mx-auto flex-col justify-center"
    >
      <h1 className="text-4xl font-nunito my-2">{resultType} Result</h1>
      <h4 className="text-semibold font-nunito text-center">
        Accurately Provide The Following Information <br /> For Your School And
        Particular Class.
      </h4>
      <form className="font-mono">
        <SelectComponent
          name="grade"
          options={GradingSystems}
          title="Choose a Grading Model/System"
          values={values}
          setValues={setValues}
        />
        <SelectComponent
          name="session"
          options={Years}
          title="Academic Session"
          values={values}
          setValues={setValues}
        />
        <InputComponent
          values={values}
          setValues={setValues}
          name="class_name"
          placeholder="Enter the class name"
          type="text"
          title="Name of Class"
        />
        <InputComponent
          values={values}
          setValues={setValues}
          name="studentsNo"
          placeholder="Enter the number of students"
          type="number"
          title="Total Number Of Student"
        />
        <InputComponent
          values={values}
          setValues={setValues}
          name="subjectsNum"
          placeholder="Enter the number of subjects"
          type="number"
          title="Number of Subjects"
        />
        <InputComponent
          values={values}
          setValues={setValues}
          name="adminEmail"
          placeholder="Enter the email of the admin"
          type="email"
          title="Email of Admin"
        />
        <InputComponent
          values={values}
          setValues={setValues}
          name="teacherName"
          placeholder="Enter the name of the class teacher"
          type="text"
          title="Name of Class Teacher"
        />
        <InputComponent
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
          values={values}
          setValues={setValues}
          name="resumptionDate"
          placeholder="Enter the next resumption date"
          type="date"
          title="Next Term Resumption Date"
        />
        <InputComponent
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
            ClickHandler={() => navigate("/")}
            title="Back to Home"
          />
          <ButtonComponent
            ClickHandler={HandleSubmit}
            title="Submit & continue"
          />
        </section>
      </form>
      <UploadTemplate values={values} open={open} setOpen={setOpen} />
    </motion.main>
  );
};
export default Register;
