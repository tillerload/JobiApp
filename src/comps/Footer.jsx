const Footer = () => {
  return(
    <footer className="bg-lightGrey font-gordita">
      <div className="wrapper">
        <div className="footerTop flex justify-between pt-20">
          <div className="footerLeft">
            <h2 className="text-6xl">Most complete job portal.</h2>
            <p className="text-1xl">Signup and start finding your job or talents.</p>
          </div>
          <div className="footerRight mt-7">
            <a href="" className="text-limeGreen m-3 border-limeGreen border p-4  text-2xl rounded">Looking for a job?</a>
            <button className="bg-limeGreen m-3 p-4 px-10 text-2xl rounded">Post a job</button>
          </div>
        </div>
        <div className="footerMiddle">
          <ul className="flex mt-20">
            <li>
              <img src="assets\logoJobi.png" alt="Jobi Logo" className=""/>
            </li>
            <li>
              <h4>Products</h4>
              <li>Take the tour</li>
              <li>Live chat</li>
              <li>Self service</li>
              <li>Mobile</li>
              <li>Collaboration</li>
              <li>Reviews</li>
            </li>
            <li>
              <h4>Links</h4>
              <li>Pricing</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
            </li>
            <li>
              <h4>Legal</h4>
              <li>Terms of use</li>
              <li>Terms & conditions</li>
              <li>Privacy</li>
              <li>Cookie policy</li>
            </li>
            <li>
              <h4>Newsletter</h4>
              <p>Join & get important new regularly</p>
              <form action="">
                <input type="text" placeholder="Enter your email" />
                <button>Send</button>
              </form>
              <p>We only send interesting and relevant emails</p>
            </li>
          </ul>
        </div>
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <p>Privacy & Terms.</p>
            <p>Contact Us</p>
          </div>
          <div className="footerBottomMiddle">
            <p>Created with love by Tyler George 2023</p>
          </div>
          <div className="footerBottomRight">
            <ul>
              <li>F</li>
              <li>I</li>
              <li>P</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;