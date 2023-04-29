const HomePageHeader = () => {
  return(
    <div>
      <section className="indexHeader my-20">
          <div className="wrapper">
            <div className="flex">
              <div className="indexHeaderLeft mr-6">
                <h5 className="text-limeGreen">#1 Online Marketplace</h5>
                <h1 className="text-darkGreen text-7xl my-3">Find the talents for any job.</h1>
                <p className="my-7 text-xl">Unlock your potential with quiality job and earn from world leading brands & co.</p>
                <a href="" className="btn">Post a job</a>
                  <ul className="flex items-center mt-5">
                    <li>
                      <p className="text-greyGreen text-lg">Trusted by:</p>
                    </li>
                    <li className="mx-2">
                      <div>
                        <img src="assets\logoPayoneer.png" alt="payoneer's logo" />
                      </div>
                    </li>
                    <li className="mx-2">
                      <div>
                        <img src="assets\logoGoogle.png" alt="google's logo" />
                      </div>
                    </li>
                    <li className="mx-2">
                      <div>
                        <img src="assets\logoAdobe.png" alt="adobe's logo" /> 
                      </div>
                    </li>
                  </ul>
              </div>
              <div className="indexHeaderRight ml-6">
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