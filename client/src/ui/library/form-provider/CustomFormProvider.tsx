import { FC } from '@/types';
import { useForm, FormProvider, FieldValues, DeepPartial, UseFormReturn, Mode } from 'react-hook-form';

interface IProps {
    defaultValues?: DeepPartial<FieldValues>;
    mode?: Mode;
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    criteriaMode?: 'firstError' | 'all';
    formWith?: string;
}

const CustomFormProvider: FC<IProps> = props => {
    const { defaultValues, mode = 'onChange', formWith = '100%', shouldFocusError = true, criteriaMode, shouldUnregister = false, children } = props;

    const methods = useForm({ defaultValues, mode, shouldFocusError, shouldUnregister, criteriaMode });

    return (
        <FormProvider {...methods}>
            <form style={{ width: formWith }}>{typeof children === 'function' ? children({ methods }) : children || null}</form>
        </FormProvider>
    );
};

export default CustomFormProvider;
