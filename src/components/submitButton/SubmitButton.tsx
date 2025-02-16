import { Button, CircularProgress, Typography } from "@mui/material";
import { SubmitButtonProps } from "../../types/componentsType/SubmitButton";

const SubmitButton = ({ buttonConfig, loading }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      variant={buttonConfig?.variant || "outlined"}
      sx={buttonConfig?.sx}
      color={buttonConfig?.muiColor || "primary"}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography> {buttonConfig?.text || "submit"}</Typography>
      )}
    </Button>
  );
};

export default SubmitButton;
