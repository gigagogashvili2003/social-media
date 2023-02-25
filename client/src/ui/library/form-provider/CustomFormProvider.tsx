import { FC } from '@/types';
import { useForm, FormProvider, FieldValues, DeepPartial, UseFormReturn, Mode, FieldErrors, SubmitHandler } from 'react-hook-form';

interface IProps {
    defaultValues?: DeepPartial<FieldValues>;
    mode?: Mode;
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    criteriaMode?: 'firstError' | 'all';
    formWith?: string;
    onSubmit: SubmitHandler<{ [x: string]: any }>;
}

const CustomFormProvider: FC<IProps> = props => {
    const {
        defaultValues,
        mode = 'onChange',
        formWith = '100%',
        onSubmit,
        shouldFocusError = true,
        criteriaMode,
        shouldUnregister = false,
        children,
    } = props;

    const methods = useForm({ defaultValues, mode, shouldFocusError, shouldUnregister, criteriaMode });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} style={{ width: formWith }}>
                {typeof children === 'function' ? children({ methods }) : children || null}
            </form>
        </FormProvider>
    );
};

export default CustomFormProvider;
