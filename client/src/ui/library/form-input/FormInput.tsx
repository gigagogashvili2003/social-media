import { Controller, useFormContext, Validate, FieldValues, ValidationRule } from 'react-hook-form';
import { FormInputWrapper } from './FormInput.styles';
import { FC } from '@/types';
import { IProps } from '../input/Input';
import Input from '../input/Input';

interface IFormInputProps extends IProps {
    name: string;
    margin?: string;
    validate?: Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>;
    validationPattern?: ValidationRule<RegExp>;
}

const FormInput: FC<IFormInputProps> = props => {
    const { name, margin, validate, validationPattern, ...rest } = props;

    const { control, formState, setValue } = useFormContext();

    return (
        <FormInputWrapper margin={margin}>
            <Controller
                name={name}
                control={control}
                rules={{ validate, pattern: validationPattern }}
                render={({ field }) => {
                    return <Input {...field} {...rest} setValue={setValue} />;
                }}
            />
        </FormInputWrapper>
    );
};

export default FormInput;
