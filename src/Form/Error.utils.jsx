const ErrorHandler = (Error, values, setError, ErrorValues) => {
  if (values.teacherName === "") {
    console.log(ErrorValues);
    setError({ teacherName: "Teacher name is sure required" });
  } else {
    setError(ErrorValues);
  }
};
export default ErrorHandler;
