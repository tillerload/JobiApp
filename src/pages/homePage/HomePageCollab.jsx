const HomePageCollab = () => {
  return(
    <div>
      <section className="colabSection my-10">
          <div className="wrapper bg-collabGreen p-12">
            <div className="flex">
              <div className="colabLeft">
                <h2 className="text-6xl text-white w-4/5">Collaboration with leading Brands.</h2>
                <p className="text-white my-10 w-3/5">We collaborate with a number of top tier companies on imagining the future of work, have a look.</p>
                <a href="" className="btn">Learn More</a>
              </div>
              <div className="colabRight">
                <img src="assets\collabRight.png" alt="something" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageCollab;