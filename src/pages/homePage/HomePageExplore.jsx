const HomePageExplore = () => {
  return(
    <div>
      <section className="marketplaceSection">
          <div className="wrapper">
            <div className="topPartMarketplace flex justify-between">
              <h3>Explore the marketplace.</h3>
              <a href="">Explore all fields</a>
            </div>
            <ul>
              <li>
                <img src="assets\iconDesign.png" alt="pencil icon" />
                <h5>UI/UX Design</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="assets\iconTags.png" alt="bracket icon" />
                <h5>Development</h5>
                <p>8k+ Jobs</p>
              </li>
              <li>
                <img src="assets\iconBriefcase.png" alt="briefcase icon" />
                <h5>Marketing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="assets\iconPhone.png" alt="telephone icon" />
                <h5>Telemarketing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="assets\iconEditing.png" alt="editing icon" />
                <h5>Editing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="assets\iconBank.png" alt="bank icon" />
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