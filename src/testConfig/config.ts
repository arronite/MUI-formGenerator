import { Switch, TextField } from "@mui/material";
import CustomTextField from "../components/inputFields/CustomTextField";
import { configFormType } from "../types/FormConfigType";

export const config: configFormType = {
  rtl: true,
  gap: 1,
  submitHandler: (values) => {
    console.log(values);
  },
  buttonConfig: {},
  form: [
    {
      id: 1,
      name: "name",
      label: "test",
      value: "test",
      inputType: TextField,
      ClassNames: "",
      size: 12,
      sx: {},
      onChange: (e) => {
        console.log(e);
      },
      props: {},
    },
    {
      id: 1,
      name: "test",
      inputType: Switch,
      ClassNames: "",
      size: 1,
      sx: {},
      onChange: () => {
        console.log("asdfj");
      },
      props: {},
    },
  ],
};
