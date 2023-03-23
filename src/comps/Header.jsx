const Header = () => {
  return(
    <div>
      <header>
        <div className="wrapper">
          <div className="headerLeft">
            <img src="assets\logoJobi2.png" alt="Jobi Logo" />
            <div className="category">
              <img src="assets\iconCategory.png" alt="4 Squares" />
              <h5>Category</h5>
            </div>
            <ul>
              <li>Home</li>
              <li>Job</li>
              <li>Explore</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="headerRight">
            <img src="assets\shapeListHeader1.png" alt="" />
            <h5>Post Job</h5>
            <h5>Login</h5>
            <h5>Hire Top Talents</h5>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;