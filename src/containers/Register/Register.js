import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {createUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import UserForm from "../../components/UserForm/UserForm";


const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.registerError);

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        await dispatch(createUser({...state}));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch(e) {
            return undefined;
        }
    };

    return (
        <UserForm
            onSubmit={submitFormHandler}
            title="Sign Up"
        >
            <FormElement
                name="username"
                value={state.username}
                onChange={inputChangeHandler}
                error={getFieldError("username")}
                label="Username"
                type="text"
            />
            <FormElement
                name="password"
                value={state.password}
                onChange={inputChangeHandler}
                error={getFieldError("password")}
                label="Password"
                type="password"
            />
        </UserForm>
    );
};

export default Register;