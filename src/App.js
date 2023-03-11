import React, { useState } from "react";
import './App.css';
 
function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      const alertBox = document.createElement("div");
      alertBox.classList.add("alert", "alert-success");
      alertBox.textContent = "Form submitted successfully!";
      document.body.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    } else {
      const alertBox = document.createElement("div");
      alertBox.classList.add("alert", "alert-danger");
      alertBox.textContent = "Can't submit the form";
      document.body.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    }
  };
  
 
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };
 
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
  };
 
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };
 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${
                  emailValid ? "is-valid" : "is-invalid"
                }`}
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {!emailValid && (
                <div className="invalid-feedback">Please enter a valid email.</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${
                  passwordValid ? "is-valid" : "is-invalid"
                }`}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {!passwordValid && (
                <div className="invalid-feedback">
                  Password must be at least 8 characters long.
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${
                  confirmPasswordValid ? "is-valid" : "is-invalid"
                }`}
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!confirmPasswordValid && (
                <div className="invalid-feedback">Passwords must match.</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default SignupForm;