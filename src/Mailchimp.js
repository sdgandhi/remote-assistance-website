import React, { Component } from "react";
import "./Mailchimp.css";

class Mailchimp extends Component {
  render() {
    return (
      <div className="signup-wrapper">
        <div id="mc_embed_signup">
          <form
            action="https://moback.us4.list-manage.com/subscribe/post?u=f9cbaa4106322fe0aa08d292a&amp;id=249676a640"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h1>Subscribe to our mailing list</h1>
              <br />
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  What's your email? <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-REASON">
                  Why are you interested in Arra?{" "}
                  <span class="asterisk">*</span>
                </label>
                <input
                  type="text"
                  value=""
                  name="REASON"
                  class="required"
                  id="mce-REASON"
                />
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                />
                <div
                  class="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                />
              </div>
              <div
                style={{ position: "absolute", left: -5000 + "px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_f9cbaa4106322fe0aa08d292a_249676a640"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Mailchimp;
