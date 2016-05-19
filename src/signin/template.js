let yo = require('yo-yo');

let landing = require('../landing');

let signinForm = yo`<div class="col s12 m7">
                <div class="row">
                  <div class="signup-box">
                    <h1 class="instagram-clone">Instagram Clone</h1>
                    <form class="signup-form">
                      <div class="section">
                        <a class="btn btn-fb hide-on-small-only">Log-in with Facebook</a>
                        <a class="btn btn-fb hide-on-med-and-up">Log-in</a>
                      </div>
                      <div class="divider"></div>
                      <div class="section">
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button class="btn waves-effect waves-light btn-signup" type="submit">Log-in</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row">
                  <div class="row">
                    <div class="login-box">
                      Don't have an Account? <a href="/signup">Register!</a>
                    </div>
                  </div>
                </div>
              </div>`;

module.exports = landing(signinForm);
