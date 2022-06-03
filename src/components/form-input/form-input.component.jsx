import { FormInputLabel, Input, Group } from './form-input.styles'

const FormInput = ({ label, groupMargin, ...otherProps }) => {
    return (
        <Group style={{margin: groupMargin}}>
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