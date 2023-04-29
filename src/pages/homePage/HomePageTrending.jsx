const HomePageTrending = () => {
  return(
    <div>
      <section className="trendingServices my-20">
          <div className="wrapper">
            <div className="topPartTrending">
              <h2 className="text-darkGreen text-5xl">Trending Services</h2>
              <div className="trendingButtons">
                <button className="leftButton"></button>
                <button className="rightButton"></button>
              </div>
            </div>
            <div className="servicePictures">
              <ul>
                {/* Hard coding for now, but eventually will be data from firebase that  */}
                <li>
                  <p>WordPress Development</p>
                </li>
                <li>
                  <p>Audio & Video Editing.</p>
                </li>
                <li>
                  <p>Product & Branding Design</p>
                </li>
                <li>
                  <p>Admin & Customer Support</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageTrending;