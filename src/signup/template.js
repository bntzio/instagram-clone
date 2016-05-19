let yo = require('yo-yo');

let landing = require('../landing');

let signupForm = yo`<div class="col s12 m7">
                <div class="row">
                  <div class="signup-box">
                    <h1 class="instagram-clone">Instagram Clone</h1>
                    <form class="signup-form">
                      <h2>Register now!</h2>
                      <div class="section">
                        <a class="btn btn-fb hide-on-small-only">Log-in with Facebook</a>
                        <a class="btn btn-fb hide-on-med-and-up"><i class='fa fa-facebook-official' aria-hidden='true'></i> Log-in</a>
                      </div>
                      <div class="divider"></div>
                      <div class="section">
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="text" name="name" placeholder="Full Name"/>
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button class="btn waves-effect waves-light btn-signup" type="submit">Create Account</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row">
                  <div class="row">
                    <div class="login-box">
                      Got an Account? <a href="/signin">Enter</a>
                    </div>
                  </div>
                </div>
              </div>`;

module.exports = landing(signupForm);
