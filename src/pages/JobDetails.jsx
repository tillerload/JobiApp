const JobDetails = () => {
  return(
    <div>

      <header>
        <div className="wrapper">
          <p>18 July 2022 by Adobe</p>
          <h1>Senior Product & Brand Design</h1>
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Copy</a></li>
          </ul>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <ul>
          {/* This list is currently hardcoded, but it will be displaying data from the job that the user clicked on */}
            <li>
              <div>
                <img src="assets\iconDollarSign.png" alt="" />
              </div>
              <p></p>
              <h5></h5>
            </li>
            <li>
              <div>
                <img src="assets\iconCheckmark.png" alt="" />
              </div>
              <p></p>
              <h5></h5>
            </li>
            <li>
              <div>
                <img src="assets\iconWaypoint.png" alt="" />
              </div>
              <p></p>
              <h5></h5>
            </li>
            <li>
              <div>
                <img src="assets\iconBriefcase.png" alt="" />
              </div>
              <p></p>
              <h5></h5>
            </li>
            <li>
              <div>
                <img src="assets\iconClock.png" alt="" />
              </div>
              <p></p>
              <h5></h5>
            </li>
          </ul>
          
          <div>
            <h3>Overview</h3>
            {/* More data i dont have yet lol */}
          </div>

          <div>
            <h3>Job Description</h3>
          </div>

          <div>
            <h3>Responsiblities</h3>
          </div>

          <div>
            <h3>Required Skills:</h3>
          </div>

          <div>
            <h3>Benefits:</h3>
          </div>

          <button>Apply for this position</button>

        </div>
      </main>
    </div>
  )
}

export default JobDetails;