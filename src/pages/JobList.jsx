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
          <div>
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
          </div>
        </div>
      </main>

    </div>
  )
}

export default JobList;