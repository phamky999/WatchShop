import React from "react";

import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-page">
      <div className="container-xl">
        <div className="contact-header">
          <h3>How We Can Help You ?</h3>
          <p>
            Got a question? We had love to hear from you. Send us a message and
            we will respond as soon as possible.
          </p>
        </div>
        <div className="contact-body">
          <div className="detail">
            <h4>Get In Touch</h4>
            <ul>
              <li>
                <i class="bx bx-map"></i>
                <p>
                  <span>Calista Wise 7292 Str,</span>
                  <span>Sample State. Sample city</span>
                </p>
              </li>
              <li>
                <i class="bx bx-phone"></i>
                <p>
                  <span>Phone: +14 1800-000-000</span>
                  <span>Fax: +14 1800-000-000</span>
                </p>
              </li>
              <li>
                <i class="bx bx-mail-send"></i>
                <p>
                  <span>info@yourdomain.com</span>
                  <span>youdomain@gmai.com</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="form-box">
            <h4>Drop Us Message</h4>
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <textarea rows="4" type="text" placeholder="Your Message"></textarea>
                  </div>
                  
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                   <button>submit</button>
                  </div>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
