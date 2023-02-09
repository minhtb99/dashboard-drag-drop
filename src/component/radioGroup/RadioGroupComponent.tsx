import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { IRadioOption } from "./interface"
import { radioGroupStyle } from "./RadioGroupStyleComponent"

interface Props {
    name?: string,
    value: string | number,
    options: IRadioOption[],
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioGroupComponent = ({ value, name, options, handleChange }: Props) => {

    return (
        <RadioGroup
            row
            name={name}
            value={value}
            onChange={handleChange}
            sx={radioGroupStyle}
        >
            {options.map((option: IRadioOption) => (
                <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.lable} />
            ))}
        </RadioGroup>
    )
}

export default RadioGroupComponent