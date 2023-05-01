const HomePageGetStarted = () => {
  return(
    <div>
      <section className="getStartedSection my-10">
          <div className="wrapper bg-grey">
            <div className="getStartedTop flex">
              <div className="getStartedLeft bg-grey w-3/4">
              </div>
              <div className="getStartedRight mt-14">
                <img src="assets\videoPlayButton.png" alt="" />
                <h2 className="text-6xl text-white w-4/5 my-3">Let's get started It's simple.</h2>
                <p className="text-white">Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
              </div>
            </div>
            <div className="getStartedBottom mt-14 bg-black bg-opacity-50">
              <ul className="flex justify-center p-12">
                <li className="flex text-white mr-3">
                  <div>
                    <h4 className="bg-limeGreen py-1 px-3 rounded-full mr-3">1</h4>
                  </div>
                  <div>
                    <h4 className="text-xl">It's take 2 minutes to open an account</h4>
                    <p className="text-sm text-limeGreen">Open Account</p>
                  </div>
                </li>
                <li className="flex text-white mr-3">
                  <div>
                    <h4 className="bg-limeGreen py-1 px-3 rounded-full mr-3">2</h4>
                  </div>
                  <div>
                    <h4 className="text-xl">Find talents or search your desire work.</h4>
                    <p className="text-sm text-limeGreen">apply job or hire</p>
                  </div> 
                </li>
                <li className="flex text-white">
                  <div>
                    <h4 className="bg-limeGreen py-1 px-3 rounded-full mr-3">3</h4>
                  </div>
                  <div>
                    <h4 className="text-xl">Get work done quickly with jobi gateway</h4>
                    <p className="text-sm text-limeGreen">payment method</p>
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