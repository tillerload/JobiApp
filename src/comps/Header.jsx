const Header = () => {
  return(
    <div className="font-garamond text-white">
      <header className="bg-darkGreen text-lg py-2">
        <div className="wrapperTwo flex justify-between">
          <div className="headerLeft flex items-center">
            <div>
              <img src="assets\logoJobi2.png" alt="Jobi Logo" />
            </div>
            <div className="category flex mx-12 bg-white rounded-2xl px-3 bg-opacity-10">
              <div className="m-2">
                <img src="assets\iconCategory.png" alt="4 Squares" />
              </div>
              <a href="" className="text-yellowGreen">Category</a>
            </div>
            <ul className="flex">
              <a href="" className="mx-3">Home</a>
              <a href="" className="mx-3">Job</a>
              <a href="" className="mx-3">Explore</a>
              <a href="" className="mx-3">Contact</a>
              <a href="" className="mx-3">Pages</a>
            </ul>
          </div>
          <div className="headerMiddle">
            <img src="assets\shapeListHeader1.png" alt="" />
          </div>
          <div className="headerRight flex items-center">
              <a href="" className="mx-3">Post Job</a>
              <a href="" className="mx-3 text-yellowGreen">Login</a>
              <a href="" className="mx-3 bg-yellowGreen rounded-2xl py-1 px-4 text-black">Hire Top Talents</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;