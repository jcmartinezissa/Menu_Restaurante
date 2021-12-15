import React, { useState } from "react";
// import axios from "axios";

const autenticate = async () => {
    return {
        success: true,
        token: '123',
    };
};

const validate = (username, pwd) => {
    const validationMessage = (username && pwd) ?
        false : 'Usuario y contrasenia son campos obligatorios';

    return validationMessage;
};

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState(null);
    const [pwd, setPwd] = useState(null);
    const [validationError, setValidationError] = useState(false);

    const sendLogin = async () => {
        const validationMessage = validate(username, pwd);
        setValidationError(validationMessage);
        if (!validationMessage) {
            setLoading(true);
            try {
                const loginResult = await autenticate();
                if (loginResult && loginResult.success) {
                    alert('Autenticacion exitosa');
                    // deberia re-enrutar
                } else {
                    alert('Usuario inexistente o credenciales incorrectas');
                }
            } catch (e) {
                console.log('error durante autentication:', e);
                alert('error durante autentication:');
            } finally {
                setLoading(false);
            }
        }
    };

    const onChangeUser = (e) => {
        setUsername(e.target.value);
    };

    const onChangePwd = (e) => {
        setPwd(e.target.value);
    };

    const submitButtonText = loading ? 'autenticando...' : 'enviar';

    return <div className="login">
        <div className="login-user-wrapper">
            <input
                type="text"
                className="login-user"
                placeholder="Usuario"
                onChange={onChangeUser} />
        </div>
        <div className="login-pwd-wrapper">
            <input
                type="password"
                className="login-pwd"
                placeholder="Contrasenia"
                onChange={onChangePwd} />
        </div>
        <button
            className="login-submit"
            onClick={sendLogin}>
            {submitButtonText}
        </button>
        {
            validationError &&
            <div className="error-message">
                {validationError}
            </div>
        }
    </div>;
};

export default Login;
