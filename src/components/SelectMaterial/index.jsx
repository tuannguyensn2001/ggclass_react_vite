import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function SelectMaterial({ label, options, value }) {
  return (
    <FormControl size={"small"} fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        value={value}
      >
        {Boolean(options) &&
          options?.map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.text}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectMaterial;
