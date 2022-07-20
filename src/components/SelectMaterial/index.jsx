import { FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

function SelectMaterial({ label, options, value, onChange }) {
    return (
        <FormControl size={'small'} fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                value={value}
                onChange={onChange}
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
