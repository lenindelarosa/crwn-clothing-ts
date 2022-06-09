import { FormInputLabel, Input, Group } from './form-input.styles';
import { FC, InputHTMLAttributes } from 'react';

type FormInputProps = {
    label: string;
    groupStyle: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, groupStyle, ...otherProps }) => {
    return (
        <Group style={groupStyle}>
            <Input {...otherProps}/>
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group> 
    );
};

export default FormInput;