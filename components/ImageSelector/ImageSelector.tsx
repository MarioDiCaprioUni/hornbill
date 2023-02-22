import React, {useState} from "react";
import {FormControl, MenuItem, SelectChangeEvent} from "@mui/material";
import {FieldWrapper, Image, SelectorInput} from "./ImageSelector.styles";


interface ImageSelectorProps {
    name: string;
    values: string[];
}


const ImageSelector: React.FC<ImageSelectorProps> = ({ name, values }) => {
    const [value, setValue] = useState<string>(name);

    function handleChange(event: SelectChangeEvent<unknown>) {
        let newValue = event.target.value;
        if (typeof newValue === 'string') {
            setValue(newValue);
        } else {
            setValue(name);
        }
    }

    return (
        <FieldWrapper>

            <Image />

            <FormControl sx={{ width: '100%' }}>

                <SelectorInput variant="outlined" value={value} onChange={handleChange}>

                    <MenuItem disabled value={name}>
                        { name }
                    </MenuItem>

                    <MenuItem value="j">
                        Hello
                    </MenuItem>

                </SelectorInput>

            </FormControl>

        </FieldWrapper>
    );
}


export default ImageSelector;
