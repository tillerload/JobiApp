const HomePageList = () => {
  return(
    <div>
      <section className="listSection my-10">
          <div className="wrapper">
            <ul className="flex justify-evenly">
              <li>
                <h4 className="text-2xl font-bold text-limeGreen">Trending Skills</h4>
                <ul>
                  <li className="my-2">Blockchain</li>
                  <li className="my-2">Node.js</li>
                  <li className="my-2">HR Consulting</li>
                  <li className="my-2">Vue.js</li>
                  <li className="my-2">Microsoft Power Bl</li>
                  <li className="my-2">React.js</li>
                  <li className="my-2">Videographers</li>
                </ul>
              </li>
              <li>
                <h4 className="text-2xl font-bold">Top Skills</h4>
                <ul>
                  <li className="my-2">Full Consultation</li>
                  <li className="my-2">Code Review</li>
                  <li className="my-2">Staff Augmentation</li>
                  <li className="my-2">Support</li>
                  <li className="my-2">Video Editors</li>
                  <li className="my-2">Data Entry Specialists</li>
                  <li className="my-2">Data Analyst</li>
                </ul>
              </li>
              <li>
                <h4 className="text-2xl font-bold">Top in USA</h4>
                <ul>
                  <li className="my-2">Technical Support</li>
                  <li className="my-2">Accountants</li>
                  <li className="my-2">Web Designers in US</li>
                  <li className="my-2">Customer identity</li>
                  <li className="my-2">Data entry</li>
                </ul>
              </li>
              <li>
                <h4 className="text-2xl font-bold">Project Catalog</h4>
                <ul>
                  <li className="my-2">Microsites</li>
                  <li className="my-2">Marketing Automation</li>
                  <li className="my-2">SEO & SMM</li>
                  <li className="my-2">Lead Generation</li>
                  <li className="my-2">Article Writing Services</li>
                  <li className="my-2">SEO Services</li>
                  <li className="my-2">Translation Services</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default HomePageList;