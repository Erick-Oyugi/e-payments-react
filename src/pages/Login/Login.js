
import './Login.css'
import Logo from '../../logo-removebg-preview.png'

function Login() {
  return (
    <div id="loginContainer">
    <div class="login-form">
        <form action="" method="post">
            <div class="text-center padding-top-100px">
                <img class="mx-auto d-block margin-bottom-25px" width="200px" src={Logo} />
            </div>

         {/* <h1 class="text-center light-green-color margin-bottom-25px">NEAT</h1> */}
            <div class="form-group ">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" name="username" className="form-control" placeholder="username" required="required"/>
                </div>
            </div>

            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                    <input type="password" name="password" className="form-control" placeholder="*********" required="required"/>
                </div>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-success btn-block">
                    <a href="#" class="light-green-color">Sign In</a>
                </button>
            </div>

            <div class="clearfix">
                <label class="pull-left checkbox-inline white-color"><input type="checkbox"/> Remember me</label>
                <a href="#" class="pull-right text-success light-green-color">Forgot Password?</a>
            </div>
            
        </form>
        <div class="hint-text">Don't have an account? <a href="#" class="text-success light-green-color">Register Now!</a></div>
    </div>
    
</div>

  );
}

export default Login
