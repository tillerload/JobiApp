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
              <ul className="flex my-6">
                <li className="bg-grey p-4 pt-56 mr-6 w-56">
                  <a href="" className="pr-10">WordPress Development</a>
                </li>
                <li className="bg-grey p-4 pt-56 mx-6 w-56">
                  <a href="" className="pr-10">Audio & Video Editing</a>
                </li>
                <li className="bg-grey p-4 pt-56 mx-6 w-56">
                  <a href="">Product & Branding Design</a>
                </li>
                <li className="bg-grey p-4 pt-56 mx-6 w-56">
                  <a href="">Admin & Customer Support</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageTrending;