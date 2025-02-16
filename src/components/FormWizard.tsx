import { FormControl, FormLabel, Grid2, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { configFormType } from "../types/FormConfigType";
import SubmitButton from "./submitButton/SubmitButton";

const FormWizard = ({ config }: { config: configFormType }) => {
  const [loading, setLoading] = useState<boolean>(false);

  // Initialize state to store form values, using form default values from config
  const [formValues, setFormValues] = useState(
    config.form.reduce(
      (acc, { name, value }) => {
        console.log(value, name);
        if (name) acc[name] = value || ""; // Initialize each field with empty string or default value
        return acc;
      },
      {} as { [key: string]: any },
    ),
  );

  // Handle input field change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value, // Update specific field's value
    }));
  };

  let gridGap: any = {};
  if (typeof config.gap === "object") {
    if (config.gap.row) gridGap.rowSpacing = config.gap.row;
    if (config.gap.block) gridGap.columnSpacing = config.gap.block;
  } else if (typeof config.gap === "number") {
    gridGap.spacing = config.gap;
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          // Pass current form values to the submit handler
          await config.submitHandler(formValues);
        } catch (error) {
          console.error("Error submitting form", error);
        } finally {
          setLoading(false);
        }
      }}
    >
      <FormControl fullWidth>
        <Grid2 {...gridGap} container width={"100%"} height={"100%"}>
          {config.form.map((row, index) => (
            <Grid2 className="appear-animation" key={index} size={row.size}>
              <FormLabel>
                <Typography variant="h5">{row.label}</Typography>
              </FormLabel>
              <row.inputType
                sx={{ display: "flex", ...row?.sx }}
                value={formValues[row.name || ""]} // Bind the value from formValues
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleInputChange(e), row.onChange && row.onChange(e);
                }} // Handle field value change
                name={row.name || ""} // Ensure each input field has a unique name
                {...row.props} // Spread other props (such as ClassNames)
              />
            </Grid2>
          ))}
        </Grid2>
      </FormControl>
      <SubmitButton buttonConfig={config.buttonConfig} loading={loading} />
    </form>
  );
};

export default FormWizard;
