import useToastStore, { toastSelectors } from '@/store/toast';
import Toast from '@/ui/components/toast/Toast';
import React from 'react';
import { MainPageWrapper } from './MainPage.styles';

const MainPage = () => {
    const showToast = useToastStore(state => state.showToast);
    const toastData = useToastStore(toastSelectors.toastData);

    return (
        <MainPageWrapper>
            <button onClick={() => showToast('info', 'hello', Math.random())}>show Toast</button>

            {toastData.map((item, i) => (
                <Toast index={i} type={item.type} text={item.text} key={item.id} id={item.id} />
            ))}
        </MainPageWrapper>
    );
};

export default MainPage;
