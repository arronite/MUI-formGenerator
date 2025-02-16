import { Switch, TextField } from "@mui/material";
import { configFormType, formType } from "../types/FormConfigType";
import { useState } from "react";

export const config = (): configFormType => {
  const [displayTest, setDisplayTest] = useState<boolean>();

  const form: formType<any>[] = [
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
        setDisplayTest(e.target.value);
      },
      props: {},
    },
    ...(displayTest
      ? [
          {
            id: 2,
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
        ]
      : []),
  ];

  return {
    rtl: true,
    gap: 2,
    submitHandler: (values) => {
      console.log(values);
    },
    buttonConfig: {},
    form,
  };
};
