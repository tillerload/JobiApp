const Footer = () => {
  return(
    <div className="font-gordita">

      <main className="bg-lightGrey pb-20">
        <div className="wrapper">
          <div className="footerTop flex justify-between pt-20">
            <div className="footerLeft">
              <h2 className="text-6xl">Most complete job portal.</h2>
              <p className="text-xl">Signup and start finding your job or talents.</p>
            </div>
            <div className="footerRight mt-7">
              <a href="" className="text-limeGreen m-3 border-limeGreen border p-4  text-base rounded">Looking for a job?</a>
              <button className="bg-limeGreen m-3 p-4 px-10 text-base rounded">Post a job</button>
            </div>
          </div>
          <div className="footerMiddle">
            <ul className="flex mt-20">
              <li>
                <img src="assets\logoJobi.png" alt="Jobi Logo" className="mr-12"/>
              </li>
              <li className="text-lg mx-12">
                <h4 className="text-2xl mb-4">Products</h4>
                <ul>
                  <li className="mb-4">Take the tour</li>
                  <li className="mb-4">Live chat</li>
                  <li className="mb-4">Self service</li>
                  <li className="mb-4">Mobile</li>
                  <li className="mb-4">Collaboration</li>
                  <li className="mb-4">Reviews</li>
                </ul>
              </li>
              <li className="text-lg mx-12">
                <h4 className="text-2xl mb-4">Links</h4>
                <ul>
                  <li className="mb-4">Pricing</li>
                  <li className="mb-4">About us</li>
                  <li className="mb-4">Careers</li>
                  <li className="mb-4">Blog</li>
                </ul>
              </li>
              <li className="text-lg mx-12">
                <h4 className="text-2xl mb-4">Legal</h4>
                <ul>
                  <li className="mb-4">Terms of use</li>
                  <li className="mb-4">Terms & conditions</li>
                  <li className="mb-4">Privacy</li>
                  <li className="mb-4">Cookie policy</li>
                </ul>
              </li>
              <li className="text-lg mx-12">
                <h4 className="text-2xl mb-3">Newsletter</h4>
                <p className="mb-4">Join & get important new regularly</p>
                <form action="" className="mb-2">
                  <input type="text" placeholder="Enter your email" />
                  <button className="text-base bg-darkGreen px-3 rounded">Send</button>
                </form>
                <p className="text-sm">We only send interesting and relevant emails</p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="footerBottom my-5">
        <div className="wrapper flex justify-between">
          <div className="footerBottomLeft flex">
            <p>Privacy & Terms.</p>
            <p>Contact Us</p>
          </div>
          <div className="footerBottomMiddle">
            <p>Created with love by Tyler George 2023</p>
          </div>
          <div className="footerBottomRight">
            <ul className="flex">
              <li>F</li>
              <li>I</li>
              <li>P</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer;