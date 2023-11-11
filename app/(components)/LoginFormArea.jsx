import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginFormArea = () => {

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowpassword] = useState('password');
  const [errorMessage, setErrorMessage] = useState();

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

    setIsLoading(true);

    try {

      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res.error) {
        setErrorMessage("Invalid Credentials");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }

  }
    
  return (
    <div className="page-template-myaccount left">
      <div id="form">
        <div className="frm_forms frm_style_formidable-style frm_login_form">
          <div id="user-registration" className="user-registration">
            <div className="ur-frontend-form login" id="ur-frontend-form">
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

                      {isLoading && (
                        <div className="loading">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>

                    {errorMessage && (
                      <div
                        className="nodficationMsg m-0 mt-4 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        <span className="font-medium">Error:</span> {errorMessage}
                      </div>
                    )}
                    {/* <p className="user-registration-LostPassword lost_password">
                    <Link href="/">Forgot password?</Link>
                  </p> */}
                    <p className="user-registration-register register">
                      <br></br>
                      <Link href="/business-registration">
                        Not a member yet? Register now.
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormArea;