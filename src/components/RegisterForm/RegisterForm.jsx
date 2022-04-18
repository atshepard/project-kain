import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [imageLink, setImageLink] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        displayName: displayName,
        imageLink: imageLink
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="display">
          Display Name:
          <input
            type="text"
            name="display"
            value={displayName}
            required
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </label>
      </div>


      <div>
        <label htmlFor="link">
          Profile Image:
          <input
            type="text"
            name="link"
            value={imageLink}
            required
            onChange={(event) => setImageLink(event.target.value)}
          />
        </label>
      </div>

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>

    </form>
  );
}

export default RegisterForm;
