import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWeapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Md.Rakib</h3>
          <span className="loginSesc">
            Connect with friends and the world around you on Md.Rakib
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
