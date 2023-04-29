const HomePageExplore = () => {
  return(
    <div>
      <section className="marketplaceSection">
          <div className="wrapper">
            <div className="topPartMarketplace flex justify-between">
              <h3 className="text-darkGreen text-3xl">Explore the marketplace.</h3>
              <a href="" className="text-limeGreen border-b">Explore all fields</a>
            </div>
            <ul className="flex my-12 justify-evenly">
              <li className="marketBtn">
                <div>
                  <img src="assets\iconDesign.png" alt="pencil icon" />
                </div>
                <h5 className="text-lg my-6 text-darkGreen">UI/UX Design</h5>
                <p className="text-sm text-greyGreen">12k+ Jobs</p>
              </li>
              <li className="marketBtn">
                <div>
                  <img src="assets\iconTags.png" alt="bracket icon" />
                </div>
                <h5 className="text-lg my-6 text-darkGreen">Development</h5>
                <p className="text-sm text-greyGreen">8k+ Jobs</p>
              </li>
              <li className="marketBtn">
                <div>
                  <img src="assets\iconBriefcase.png" alt="briefcase icon" />
                </div>
                <h5 className="text-lg my-6 text-darkGreen">Marketing</h5>
                <p className="text-sm text-greyGreen">12k+ Jobs</p>
              </li>
              <li className="marketBtn">
                <div>
                  <img src="assets\iconPhone.png" alt="telephone icon" />
                </div>
                <h5 className="text-lg my-6 text-darkGreen">Telemarketing</h5>
                <p className="text-sm text-greyGreen">12k+ Jobs</p>
              </li>
              <li className="marketBtn">
                <div>
                  <img src="assets\iconEditing.png" alt="editing icon" />
                </div>
                <h5 className="text-lg my-6 text-darkGreen">Editing</h5>
                <p className="text-sm text-greyGreen">12k+ Jobs</p>
              </li>
              <li className="marketBtn">
                <div>
                  <img src="assets\iconBank.png" alt="bank icon" />
                </div>
                <h5 className="text-lg my-6 text-darkGreen">Accounting</h5>
                <p className="text-sm text-greyGreen">12k+ Jobs</p>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default HomePageExplore;