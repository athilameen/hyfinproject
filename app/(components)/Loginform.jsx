"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({});
  const [showPassword, setShowpassword] = useState('password');

  function inputChangeHandler(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function showPasswordHandler(e){
    if(showPassword === "password"){
        setShowpassword('text');
    } else {
        setShowpassword('password');
    }
  }

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form
      className="user-registration-form user-registration-form-login login"
      onSubmit={submitFormHandler}
    >
      <div className="ur-form-row">
        <div className="ur-form-grid">
          <p className="user-registration-form-row user-registration-form-row--wide form-row form-row-wide frm_form_field form-field frm_top_container">
            <label htmlFor="email" className="frm_primary_label">
              Email
              <span className="required">*</span>
            </label>
            <span className="input-wrapper">
              <input
                type="email"
                className="user-registration-Input user-registration-Input--text input-text"
                name="email"
                id="email"
                required="required"
                onChange={inputChangeHandler}
              />
            </span>
          </p>
          <p className="user-registration-form-row user-registration-form-row--wide form-row form-row-wide hide_show_password frm_form_field form-field frm_top_container">
            <label htmlFor="password" className="frm_primary_label">
              Password <span className="required">*</span>
            </label>
            <span className="input-wrapper">
              <span className="password-input-group">
                <input
                  className="user-registration-Input user-registration-Input--text input-text"
                  type={showPassword}
                  name="password"
                  id="password"
                  required="required"
                  onChange={inputChangeHandler}
                />
                <span
                  className="password_preview dashicons dashicons-hidden"
                  title="Show password"
                  onClick={showPasswordHandler}
                ></span>
              </span>
            </span>
          </p>
          <div>
            <input
              type="submit"
              className="user-registration-Button button "
              name="login"
              value="Login"
            />
          </div>
          <p className="user-registration-LostPassword lost_password">
            <Link href="/">Forgot password?</Link>
          </p>
          <p className="user-registration-register register">
            <Link href="/">Not a member yet? Register now.</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
