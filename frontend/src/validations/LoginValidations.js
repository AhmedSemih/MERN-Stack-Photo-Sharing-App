import * as yup from 'yup';

const LoginValidations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(15).required(),
});

export default LoginValidations;