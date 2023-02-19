import { Controller, useFormContext, Validate, FieldValues, ValidationRule } from 'react-hook-form';
import { ErrorMessage, FormInputWrapper } from './FormInput.styles';
import { FC } from '@/types';
import { IProps } from '../input/Input';
import Input from '../input/Input';

interface IFormInputProps extends IProps {
    name: string;
    margin?: string;
    padding?: string;
    validate?: Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>>;
    validationPattern?: ValidationRule<RegExp>;
    minimumLength?: ValidationRule<number>;
    isRequired?: string | ValidationRule<boolean>;
}

const FormInput: FC<IFormInputProps> = props => {
    const { name, margin, padding = '0 0 25px', isRequired, minimumLength, clearIcon, validate, validationPattern, ...rest } = props;

    const { control, formState, setValue, resetField } = useFormContext();

    const error = formState.errors[name]?.message;
    const hasError = error ? true : false;

    const clearInput = () => {
        resetField(name);
    };

    return (
        <FormInputWrapper margin={margin} padding={padding}>
            <Controller
                name={name}
                control={control}
                rules={{ required: isRequired, validate, minLength: minimumLength, pattern: validationPattern }}
                render={({ field, formState: { dirtyFields } }) => {
                    return (
                        <Input {...field} {...rest} hasError={hasError} clearInput={clearInput} isSuccess={dirtyFields[name] && hasError === false} />
                    );
                }}
            />

            {error && <ErrorMessage>{error as string}</ErrorMessage>}
        </FormInputWrapper>
    );
};

export default FormInput;
