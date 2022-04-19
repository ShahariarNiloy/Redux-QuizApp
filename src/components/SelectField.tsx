import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/actions";

function SelectField(props: any) {
  const dispatch = useDispatch();
  const { label, options } = props;
  const [value, setValue] = useState("");
  console.log(options);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;
    }
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }: any) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectField;
