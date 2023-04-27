const HomePageHeader = () => {
  return(
    <div>
      <section className="indexHeader">
          <div className="wrapper">
            <div className="flex">
              <div className="indexHeaderLeft">
                <h5 className="">#1 Online Marketplace</h5>
                <h1>Find the talents for any job.</h1>
                <p>Unlock your potential with quiality job and earn from world leading brands & co.</p>
                <a href="">Post a job</a>
                <div className="trustedBrands flex">
                  <p>Trusted by:</p>
                  <div>
                    <img src="assets\logoPayoneer.png" alt="payoneer's logo" />
                  </div>
                  <div>
                    <img src="assets\logoGoogle.png" alt="google's logo" />
                  </div>
                  <div>
                    <img src="assets\logoAdobe.png" alt="adobe's logo" /> 
                  </div>
                </div>
              </div>
              <div className="indexHeaderRight">
                <div>
                  <img src="https://placehold.jp/836x570.png" alt="drawing of a lady of her laptop" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomePageHeader;