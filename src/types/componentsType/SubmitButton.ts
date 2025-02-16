import { MUIButtonColor } from "../FormConfigType";

export type SubmitButtonProps = {
  loading: boolean;
  buttonConfig?: {
    text?: string;
    variant?: "contained" | "outlined" | "text";
    muiColor?: MUIButtonColor;
    sx?: object;
  };
};
