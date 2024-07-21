import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const TextFieldLargeWithIcon = ({ className = "" }) => {
  return (
    <FormControl
      className={`self-stretch h-[61px] font-manrope font-semibold text-lg text-dimgray-100 ${className}`}
      variant="filled"
      sx={{
        borderRadius: "0px 0px 0px 0px",
        width: "562px",
        height: "61px",
        m: 0,
        p: 0,
        "& .MuiInputBase-root": {
          m: 0,
          p: 0,
          minHeight: "61px",
          justifyContent: "center",
          display: "inline-flex",
        },
        "& .MuiInputLabel-root": {
          m: 0,
          p: 0,
          minHeight: "61px",
          display: "inline-flex",
        },
        "& .MuiMenuItem-root": {
          m: 0,
          p: 0,
          height: "61px",
          display: "inline-flex",
        },
        "& .MuiSelect-select": {
          m: 0,
          p: 0,
          height: "61px",
          alignItems: "center",
          display: "inline-flex",
        },
        "& .MuiInput-input": { m: 0, p: 0 },
        "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
      }}
    >
      <InputLabel color="primary" />
      <Select color="primary" disableUnderline displayEmpty />
      <FormHelperText />
    </FormControl>
  );
};

TextFieldLargeWithIcon.propTypes = {
  className: PropTypes.string,
};

export default TextFieldLargeWithIcon;
