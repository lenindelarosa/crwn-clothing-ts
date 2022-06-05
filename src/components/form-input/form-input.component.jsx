import { FormInputLabel, Input, Group } from './form-input.styles'

const FormInput = ({ label, groupStyle, ...otherProps }) => {
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