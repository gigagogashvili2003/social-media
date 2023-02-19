import { FC } from '@/types';
import { useForm, FormProvider, FieldValues, DeepPartial, Mode } from 'react-hook-form';

interface IProps {
    defaultValues?: DeepPartial<FieldValues>;
    mode?: Mode;
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    criteriaMode?: 'firstError' | 'all';
}

const CustomFormProvider: FC<IProps> = props => {
    const { defaultValues, mode = 'onChange', shouldFocusError = true, criteriaMode, shouldUnregister = false, children } = props;

    const methods = useForm({ defaultValues, mode, shouldFocusError, shouldUnregister, criteriaMode });

    return (
        <FormProvider {...methods}>
            <form>{children}</form>
        </FormProvider>
    );
};

export default CustomFormProvider;
