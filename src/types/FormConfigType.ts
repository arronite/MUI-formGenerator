import {
  TextField,
  TextFieldProps,
  Checkbox,
  CheckboxProps,
  Select,
  SelectProps,
  Switch,
  SwitchProps,
  Radio,
  RadioProps,
  Slider,
  SliderProps,
  Autocomplete,
  AutocompleteProps,
  SxProps,
} from "@mui/material";

// Define a type mapping for MUI components
type MUIComponentProps<T> = T extends typeof TextField
  ? TextFieldProps
  : T extends typeof Checkbox
    ? CheckboxProps
    : T extends typeof Select
      ? SelectProps<any>
      : T extends typeof Switch
        ? SwitchProps
        : T extends typeof Radio
          ? RadioProps
          : T extends typeof Slider
            ? SliderProps
            : T extends typeof Autocomplete
              ? AutocompleteProps<any, any, any, any>
              : object; // Default fallback for unknown components

export type MUIButtonColor =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "info"
  | "warning";

export type formType<T extends React.ComponentType<any> = any> = {
  id: number;
  name: string;
  label?: string;
  value?: any;
  inputType: T; // The MUI component
  ClassNames?: string;
  size?: number;
  sx?: SxProps;
  onChange?: Function;
  props?: MUIComponentProps<T>; // Dynamically infer props based on the input component
  options?: string[]; // For components like Autocomplete or Select
};
export type configFormType = {
  rtl: boolean;
  gap: { row?: number; block?: number } | number;
  form: formType[];
  submitHandler: Function;
  buttonConfig: {
    text?: string;
    variant?: "contained" | "outlined" | "text";
    muiColor?: MUIButtonColor;
    sx?: object;
  };
};
