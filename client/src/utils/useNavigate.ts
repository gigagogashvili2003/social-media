import { NavigateOptions, useNavigate as uNavigate } from 'react-router-dom';

export const useNavigate = (path: string, options?: NavigateOptions) => {
    const navigate = uNavigate();
    return navigate(path, options);
};
