import React, {ReactNode, useState} from "react";
import {FormControl, SelectChangeEvent} from "@mui/material";
import {FieldWrapper, Image, SelectorInput, SelectorItem, Title} from "./ImageSelector.styles";


interface ImageSelectorProps {
    name: string;
    imgSrc?: string;
    onChange?: (value: string) => void;
    children?: ReactNode;
}


const ImageSelector: React.FC<ImageSelectorProps> = ({ name, imgSrc, onChange, children }) => {
    const [value, setValue] = useState<string>(name);

    function handleChange(event: SelectChangeEvent<unknown>) {
        let newValue = event.target.value;
        if (typeof newValue === 'string') {
            if (onChange) onChange(newValue);
            setValue(newValue);
        } else {
            setValue(name);
        }
    }

    return (
        <FieldWrapper>

            <Title>{ name }</Title>

            <Image src={imgSrc} sx={imgSrc? {background: 'transparent'} : undefined} />

            <FormControl sx={{ width: '100%' }}>

                <SelectorInput variant="outlined" value={value} onChange={handleChange}>

                    <SelectorItem disabled value={name}>
                        { name }
                    </SelectorItem>

                    { children }

                </SelectorInput>

            </FormControl>

        </FieldWrapper>
    );
}


export default ImageSelector;
