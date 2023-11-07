import "./SignupPageStyles.css";

function SignupPage() {
  return (
    <div className="form-container">
      <h1>Start your journey with us now !</h1>
      <br></br>
      <h3>Registration Form</h3>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Contact Number" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Register</button>
      </form>
    </div>
  );
}
export default SignupPage;
