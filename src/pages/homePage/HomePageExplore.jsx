const HomePageExplore = () => {
  return(
    <div>
      <section className="marketplaceSection">
          <div className="wrapper">
            <div className="topPartMarketplace flex justify-between">
              <h3 className="text-darkGreen text-3xl">Explore the marketplace.</h3>
              <a href="">Explore all fields</a>
            </div>
            <ul className="flex my-12 justify-evenly">
              <li className="flex flex-col my-12">
                <div>
                  <img src="assets\iconDesign.png" alt="pencil icon" />
                </div>
                <h5>UI/UX Design</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <div>
                  <img src="assets\iconTags.png" alt="bracket icon" />
                </div>
                <h5>Development</h5>
                <p>8k+ Jobs</p>
              </li>
              <li>
                <div>
                  <img src="assets\iconBriefcase.png" alt="briefcase icon" />
                </div>
                <h5>Marketing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <div>
                  <img src="assets\iconPhone.png" alt="telephone icon" />
                </div>
                <h5>Telemarketing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <div>
                  <img src="assets\iconEditing.png" alt="editing icon" />
                </div>
                <h5>Editing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <div>
                  <img src="assets\iconBank.png" alt="bank icon" />
                </div>
                <h5>Accounting</h5>
                <p>12k+ Jobs</p>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default HomePageExplore;