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

      <section>
        <div className="wrapper">
          
        </div>
      </section>

    </div>
  )
}

export default JobList;