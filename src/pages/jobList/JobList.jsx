const JobList = () => {
  return(
    <div>

      <header>
        <h1>Job Listing</h1>
        <p>We delivered blazing fast & striking work solution</p>
        <div>
          <form action="">
            <input type="text" />
          </form>
          <form action="/action_page.php">
            <label for="catergory">Category</label>
            <select name="category">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <input type="submit" />
          </form>
        </div>
      </header>

      <main>
        <div className="wrapper">

          <section>
            <h3>Filter By</h3>
            <ul>
              <li>
                <h4>Location</h4>
              </li>
              <li>
                <h4>Job Type</h4>
              </li>
              <li>
                <h4>Experience</h4>
              </li>
              <li>
                <h4>Salary</h4>
              </li>
              <li>
                <h4>Category</h4>
              </li>
              <li>
                <h4>Tags</h4>
              </li>
            </ul>
          </section>

          <section>

            <div>
              {/* going to need to insert number of jobs found by searches */}
              <p>All jobs found</p>
              <div>
                <p>sort:</p>
                <form action="">
                  <select name="" id=""></select>
                    <option value="">latest</option>
                    <option value="">oldest</option>
                    {/* etc etc */}
                </form>
              </div>
            </div>

            <ul>
              <li>
                <div>
                  <div>
                    <img src="" alt="logo" />
                  </div>
                  <div>
                    <p>Full/Part Time</p>
                    <h3>Job title</h3>
                  </div>
                </div>
                <div>
                  <p>location</p>
                  <p>Salary / Hourly Rate</p>
                </div>
                <div>
                  <button>Save</button>
                  <button>Apply</button>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            {/* Next Page button, with list of page numbers including which page youre currently on */}

          </section>
          
        </div>
      </main>

    </div>
  )
}

export default JobList;