import React, {useState} from "react";
import {FormControl, SelectChangeEvent} from "@mui/material";
import {FieldWrapper, Image, SelectorInput, SelectorItem, Title} from "./ImageSelector.styles";


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

            <Title>{ name }</Title>

            <Image />

            <FormControl sx={{ width: '100%' }}>

                <SelectorInput variant="outlined" value={value} onChange={handleChange}>

                    <SelectorItem disabled value={name}>
                        { name }
                    </SelectorItem>

                    <SelectorItem value="j">
                        Hello
                    </SelectorItem>

                </SelectorInput>

            </FormControl>

        </FieldWrapper>
    );
}


export default ImageSelector;
