"use client";

import { useRef, useState } from "react";

const ChangePasswordForm = () => {

    const oldInputPassword = useRef();
    const newInputPassword = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const [showPassword, setShowPassword] = useState('password');
    const [showNewPassword, setShowNewPassword] = useState('password');
    const [showConfirmNewPassword, setConfirmShowNewPassword] = useState('password');
    
    const [showPasswordHidden, setShowPasswordHidden] = useState('hidden');
    const [showNewPasswordHidden, setShowNewPasswordHidden] = useState('hidden');
    const [showConfirmNewPasswordHidden, setConfirmShowNewPasswordHidden] = useState('hidden');

    function showPasswordHandler(e){
        const { type, id } = e.target.previousElementSibling;
        const getStateName = id;
        if(type === "password"){
            if(getStateName == "setShowPassword"){
                setShowPassword('text');
                setShowPasswordHidden('visibility');
            } else if(getStateName == "setShowNewPassword"){
                setShowNewPassword('text');
                setShowNewPasswordHidden('visibility');
            } else if(getStateName == "setConfirmShowNewPassword"){
                setConfirmShowNewPassword('text');
                setConfirmShowNewPasswordHidden('visibility');
            }
        } else {
            if(getStateName == "setShowPassword"){
                setShowPassword('password');
                setShowPasswordHidden('hidden');
            } else if(getStateName == "setShowNewPassword"){
                setShowNewPassword('password');
                setShowNewPasswordHidden('hidden');
            } else if(getStateName == "setConfirmShowNewPassword"){
                setConfirmShowNewPassword('password');
                setConfirmShowNewPasswordHidden('hidden');
            }
        }
    }

    const changePasswordFormHandler = async (e) => {    
        e.preventDefault();

        setIsLoading(true);

        const oldEnteredPassword = oldInputPassword.current.value;
        const newEnteredPassword = newInputPassword.current.value;

        try{
            
            const res = await fetch("/api/users/change-password/", {
                method: "POST",
                body: JSON.stringify({ oldPassword: oldEnteredPassword, newPassword: newEnteredPassword}),
                headers: {
                    "Content-Type": "application/json",
                },
            });
      
            e.target.reset();

            if(res.ok){
                const data = await res.json();
                setErrorMessage('');
                setSuccessMessage(data.message);
            } else {
                setSuccessMessage('');
                setErrorMessage('Something Wrong!');
                const data = await res.json();
                if(data.message !== ""){
                    setErrorMessage(data.message);
                }
            }

            setIsLoading(false);

        } catch (error){    
            setSuccessMessage('');
            setErrorMessage("Error during password change");
        }

    }


  return (
    <div className="user-registration-MyAccount-content">
	    <div className="ur-frontend-form login" id="ur-frontend-form">

        
            {successMessage &&
                <div className="nodficationMsg m-10 mt-0 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
                    <span className="font-medium">Success:</span> {successMessage}
                </div>
            }

            {errorMessage && 
                <div className="nodficationMsg m-10 mt-0 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Error:</span> {errorMessage}
                </div>
            }

	        <form id="accountPasswordChange" className="user-registration-EditAccountForm edit-password" onSubmit={changePasswordFormHandler}>
		        <div className="ur-form-row">
			        <div className="ur-form-grid">

						<fieldset>
					        <legend>Change Password</legend>
							<p className="user-registration-form-row user-registration-form-row--wide form-row form-row-wide hide_show_password frm_form_field form-field frm_top_container">
						        <label htmlFor="password_current" className="frm_primary_label">Current password</label>
						        <span className="password-input-group">
						        <input ref={oldInputPassword} type={showPassword} className="user-registration-Input user-registration-Input--password input-text" name="setShowPassword" id="setShowPassword" />
						        <span className={`password_preview dashicons dashicons-${showPasswordHidden}`} title="Show Password" onClick={showPasswordHandler}></span></span>
					        </p>
							<p className="user-registration-form-row user-registration-form-row--wide form-row form-row-wide hide_show_password frm_form_field form-field frm_top_container">
                                <label htmlFor="password_1" className="frm_primary_label">New password</label>
                                <span className="password-input-group">
                                <input ref={newInputPassword} type={showNewPassword} className="user-registration-Input user-registration-Input--password input-text" name="setShowNewPassword" id="setShowNewPassword" />
                                <span className={`password_preview dashicons dashicons-${showNewPasswordHidden}`} title="Show Password" onClick={showPasswordHandler}></span></span>
                            </p>
                            <p className="user-registration-form-row user-registration-form-row--wide form-row form-row-wide hide_show_password frm_form_field form-field frm_top_container">
                                <label htmlFor="password_2" className="frm_primary_label">Confirm new password</label>
                                <span className="password-input-group">
                                <input type={showConfirmNewPassword} className="user-registration-Input user-registration-Input--password input-text" name="setConfirmShowNewPassword" id="setConfirmShowNewPassword" />
                                <span className={`password_preview dashicons dashicons-${showConfirmNewPasswordHidden}`} title="Show Password" onClick={showPasswordHandler}></span></span>
                            </p>
				        </fieldset>

                        <div className="clear"></div>
                        <p>
                            <input id="passwordChangeButton" type="submit" className="user-registration-Button button" name="save_change_password" value="Change Password" />
                            {isLoading &&
                            <div className="loading">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        </p>

					</div>
		        </div>
	        </form>
        </div>
    </div>
  )
}

export default ChangePasswordForm