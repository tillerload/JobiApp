const HomePage = () => {
  return(
    <div>

      <main className="">

        {/* Header Section */}

        <section className="indexHeader">
          <div className="wrapper">
            <div className="flex">
              <div className="indexHeaderLeft">
                <h5>#1 Online Marketplace</h5>
                <h1>Find the talents for any job.</h1>
                <p>Unlock your potential with quiality job and earn from world leading brands & co.</p>
                <a href="">Post a job</a>
                <div className="trustedBrands">
                  <p>Trusted by:</p>
                  <img src="" alt="payoneer's logo" />
                  <img src="" alt="google's logo" />
                  <img src="" alt="adobe's logo" />
                </div>
              </div>
              <div className="indexHeaderRight">
                <img src="" alt="drawing of a lady of her laptop" />
              </div>
            </div>
          </div>
        </section>

        {/* Trending Services Section */}

        <section className="trendingServices">
          <div className="wrapper">
            <div className="topPartTrending">
              <h2>Trending Services</h2>
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

        {/* Explore Marketplace Section */}

        <section className="marketplaceSection">
          <div className="wrapper">
            <div className="topPartMarketplace">
              <h3>Explore the marketplace.</h3>
              <a href="">Explore all fields</a>
            </div>
            <ul>
              <li>
                <img src="" alt="pencil icon" />
                <h5>UI/UX Design</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="" alt="bracket icon" />
                <h5>Development</h5>
                <p>8k+ Jobs</p>
              </li>
              <li>
                <img src="" alt="briefcase icon" />
                <h5>Marketing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="" alt="telephone icon" />
                <h5>Telemarketing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="" alt="editing icon" />
                <h5>Editing</h5>
                <p>12k+ Jobs</p>
              </li>
              <li>
                <img src="" alt="bank icon" />
                <h5>Accounting</h5>
                <p>12k+ Jobs</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Talent Search Section */}

        <section className="talentSearchSection">
          <div className="wrapper">
            <div className="talentLeft">
              {/* brother idk yet, probably a form that can search keywords from firebase */}
            </div>
            <div className="talentRight">
              <p>Why choose us?</p>
              <h2>World of talent at your fingertips</h2>
              <h4>Seamless Search</h4>
              <h4>Hire top talents</h4>
              <h4>Protected payments, every time</h4>
              <a href="">Learn More</a>
            </div>
          </div>
        </section>

        {/* Business Solution Section */}

        <section className="businessSection">
          <div className="wrapper">
            <div className="businessLeft">
              <p>Business Solution</p>
              <h2>Get quick solution for your business.</h2>
              <p>A full suite of hybrid workforce management tools are yours to use, as well as access to our top 1% of talent.</p>
              <div className="businessStats">
                <ul>
                  <li>
                    <h3>30k+</h3>
                    <p>Worldwide Client</p>
                  </li>
                  <li>
                    <h3>3%</h3>
                    <p>Top talents</p>
                  </li>
                  <li>
                    <h3>7mil</h3>
                    <p>Dollar Payout</p>
                  </li>
                </ul>
                <a href="">Explore Jobi business</a>
              </div>
            </div>
            <div className="businessRight">
            </div>
          </div>
        </section>

        {/* Get started Section  */}

        <section className="getStartedSection">
          <div className="wrapper">
            <div className="getStartedLeft">
              {/* needs to be blank and but take of 50% of the width */}
            </div>
            <div className="getStartedRight">
              <img src="" alt="" />
              <h2>Let's get started It's simple.</h2>
              <p>Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
            </div>
            <div className="getStartedBottom">
              <ul>
                <li>
                  <div>

                  </div>
                  <div>
                    <h4>It's take 2 minutes to open an account</h4>
                    <p>Open Account</p>
                  </div>
                </li>
                <li>
                  <div>

                  </div>
                  <div>
                    <h4>Find talents or search your desire work.</h4>
                    <p>apply job or hire</p>
                  </div> 
                </li>
                <li>
                  <div>

                  </div>
                  <div>
                    <h4>Get work done quickly with jobi gateway</h4>
                    <p>payment method</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client quotes Section */}

        <section className="quoteSection">
          <div className="wrapper">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <a href="">Left</a>
              <div>
                <p></p>
                <p></p>
              </div>
              <a href="">Right</a>
            </div>
            <ul>
              <li>
                <img src="" alt="person 1" />
              </li>
              <li>
                <img src="" alt="person 2" />
              </li>
              <li>
                <img src="" alt="person 3" />
              </li>
              <li>
                <img src="" alt="person 4" />
              </li>
              <li>
                <img src="" alt="person 5" />
              </li>
            </ul>
          </div>
        </section>

        {/* Collab Section */}

        <section className="colabSection">
          <div className="wrapper">
            <div className="flex">
              <div className="colabLeft">
                <h2>Collaboration with leading Brands.</h2>
                <p>We collaborate with a number of top tier companies on imagining the future of work, have a look.</p>
                <a href="">Learn More</a>
              </div>
              <div className="colabRight">
                <img src="" alt="something" />
              </div>
            </div>
          </div>
        </section>

        {/* List Section */}

        <section className="listSection">
          <div className="wrapper">
            <ul>
              <li>
                <h4>Trending Skills</h4>
                <ul>
                  <li>Blockchain</li>
                  <li>Node.js</li>
                  <li>HR Consulting</li>
                  <li>Vue.js</li>
                  <li>Microsoft Power Bl</li>
                  <li>React.js</li>
                  <li>Videographers</li>
                </ul>
              </li>
              <li>
                <h4>Top Skills</h4>
                <ul>
                  <li>Full Consultation</li>
                  <li>Code Review</li>
                  <li>Staff Augmentation</li>
                  <li>Support</li>
                  <li>Video Editors</li>
                  <li>Data Entry Specialists</li>
                  <li>Data Analyst</li>
                </ul>
              </li>
              <li>
                <h4>Top in USA</h4>
                <ul>
                  <li>Technical Support</li>
                  <li>Accountants</li>
                  <li>Web Designers in US</li>
                  <li>Customer identity</li>
                  <li>Data entry</li>
                </ul>
              </li>
              <li>
                <h4>Project Catalog</h4>
                <ul>
                  <li>Microsites</li>
                  <li>Marketing Automation</li>
                  <li>SEO & SMM</li>
                  <li>Lead Generation</li>
                  <li>Article Writing Services</li>
                  <li>SEO Services</li>
                  <li>Translation Services</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

      </main>

    </div>
  )
}

export default HomePage;