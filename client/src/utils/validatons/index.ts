export const emailRegex = new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
);
export const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');

export const usernameRegex = new RegExp('^[a-zA-Z0-9](_(?!(.|_))|.(?!(_|.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$');

export const emailValidation = (email: string) => {
    const isEmailValid = emailRegex.test(email);

    return isEmailValid ? true : 'Invalid Email Address!';
};

export const passwordValidation = (password: string) => {
    const isPasswordValid = passwordRegex.test(password);

    return isPasswordValid ? true : 'Password is invalid!';
};

export const confirmPasswordValidation = (confirmPassword: string, values: Record<string, any>) => {
    const isConfirmPasswordValid = confirmPassword.trim() === values.password.trim();

    return isConfirmPasswordValid ? true : 'Passwords doesnt match!';
};

export const usernameValidation = (username: string) => {
    const isUsernameValid = usernameRegex.test(username);

    return isUsernameValid ? true : 'Invalid Username!';
};
