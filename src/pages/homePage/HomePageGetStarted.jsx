const HomePageGetStarted = () => {
  return(
    <div>
      <section className="getStartedSection my-10">
          <div className="wrapper bg-grey">
            <div className="getStartedTop flex">
              <div className="getStartedLeft bg-green w-2/4">
                <h2>ahhh</h2>
                {/* needs to be blank and but take of 50% of the width */}
              </div>
              <div className="getStartedRight">
                <img src="assets\videoPlayButton.png" alt="" />
                <h2 className="text-6xl text-white w-4/5">Let's get started It's simple.</h2>
                <p>Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
              </div>
            </div>
            <div className="getStartedBottom">
              <ul>
                <li>
                  <div>

                  </div>
                  <div>
                    <h4>It's take 2 minutes to open an account</h4>
                    <p>Open Account</p>
                  </div>
                </li>
                <li>
                  <div>

                  </div>
                  <div>
                    <h4>Find talents or search your desire work.</h4>
                    <p>apply job or hire</p>
                  </div> 
                </li>
                <li>
                  <div>

                  </div>
                  <div>
                    <h4>Get work done quickly with jobi gateway</h4>
                    <p>payment method</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageGetStarted;