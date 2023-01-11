import logo from "../assets/E_Skool.png";
import ButtonComponent from "../component/Button.component";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Homepage = ({ resultType, setResultType }) => {
  const navigate = useNavigate();
  const CheckResult = (e) => {
    setResultType(e.target.name);
    navigate(`/${e.target.name}`);
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img className="w-96 mx-auto" src={logo} alt="eskool-logo" />
        <p className="font-medium text-center md:text-3xl text-normal">
          Select the type of result you want to generate
        </p>
        <div className="flex md:w-auto w-96 mx-auto items-center justify-center my-4">
          <ButtonComponent
            name="Mid-Term"
            ClickHandler={CheckResult}
            bgcolor="bg-red-800"
            title="Mid-Term"
          />
          <ButtonComponent
            name="Termly"
            ClickHandler={CheckResult}
            bgcolor="bg-red-600"
            title="Termly"
          />
          <ButtonComponent
            name="Annual"
            ClickHandler={CheckResult}
            bgcolor=" bg-red-700"
            title="Annual"
          />
        </div>
      </div>
    </motion.main>
  );
};
export default Homepage;
