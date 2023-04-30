const HomePageSolution = () => {
  return(
    <div>
      <section className="businessSection">
          <div className="wrapper flex">
            <div className="businessLeft bg-brown w-3/5 p-12">
              <p className="text-limeGreen text-xl">Business Solution</p>
              <h2 className="text-6xl text-white w-4/5">Get quick solution for your business.</h2>
              <p className="text-white my-8 pb-12 border-white border-b ">A full suite of hybrid workforce management tools are yours to use, as well as access to our top 1% of talent.</p>
              <div className="businessStats">
                <ul className="flex justify-start mb-20 text-white text-3xl">
                  <li className="mr-14">
                    <h3 className="">30k+</h3>
                    <p className="text-lg">Worldwide Client</p>
                  </li>
                  <li className="mr-14">
                    <h3>3%</h3>
                    <p className="text-lg">Top talents</p>
                  </li>
                  <li className="mr-14">
                    <h3>7mil</h3>
                    <p className="text-lg">Dollar Payout</p>
                  </li>
                </ul>
                <a href="" className="btn">Explore Jobi business</a>
              </div>
            </div>
            <div className="businessRight">
              <div>
                <img src="https://placehold.jp/594x720.png" alt="" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageSolution;