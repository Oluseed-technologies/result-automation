import { useState } from "react";
import { FileInputComponent } from "../component/InputType.component";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import ButtonComponent from "../component/Button.component";
const UploadTemplate = ({ open, setOpen, values }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const TemplateType = [
    {
      id: 1,
      title: "Generate Control CSV Template",
    },
    {
      id: 2,
      title: "Mid-Term Scoresheet CSV Template",
    },
    {
      id: 3,
      title: "How to use the Templates",
    },
  ];

  const SelectedTemplate = () => {
    setOpenDialog(false);
  };
  const SimpleDialog = ({ open }) => {
    return (
      <Dialog open={open}>
        <div className="p-3 cursor-pointer  ">
          {TemplateType.map((data, index) => (
            <li
              onClick={SelectedTemplate}
              key={index}
              className="p-3  hover:bg-blue-300 hover:text-white border-l-2 my-4 rounded-md list-none "
            >
              {data.title}
            </li>
          ))}
        </div>
      </Dialog>
    );
  };
  return (
    <>
      {open && (
        <main className="flex max-w-xl text-center items-center my-4 justify-center flex-col">
          <h2 className="font-nunito text-xl font-medium my-3">
            Upload The subject Score Sheets{" "}
          </h2>
          <tt className="text-black font-black ">
            (note : Ensure the Score Sheets of Each Subjects Are All Saved And
            Uploaded in CSV Formats)
          </tt>
          <p className="text-normal my-3">
            Click the button below to copy the score sheets template
          </p>

          <div className="my-2">
            <ButtonComponent
              ClickHandler={() => setOpenDialog(true)}
              title="Template & Guide"
            />
          </div>
          <SimpleDialog open={openDialog} setOpenDialog={setOpenDialog} />
          <FileInputComponent values={values} />
          <ButtonComponent
            title="upload"
            hover="hover:bg-red-700"
            bgcolor="bg-red-500"
          />
        </main>
      )}
    </>
  );
};
export default UploadTemplate;
