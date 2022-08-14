import { FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { SelectInputProps } from '@mui/material/Select/SelectInput';

interface Option {
    text: string;
    value: string;
}

interface Prop {
    label?: string;
    value?: any;
    options: Option[];
    onChange?: SelectInputProps['onChange'];
    size?: string;
}

function SelectMaterial({ label, options, value, onChange, size = 'medium' }: Prop) {
    return (
        <FormControl size={size} fullWidth>
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
