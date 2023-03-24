const ErrorPage = () => {
  return(
    <div>
      <main className="font-garamond">
        <div className="wrapper">
          <div className="flex items-center">
            <div className="mx-6 my-20">
              <img src="https://placehold.co/592x592" alt="something cute" />
            </div>
            <div className="m-6">
              <h1 className="text-green text-9xl">404</h1>
              <h2 className="text-8xl">Page Not Found</h2>
              <p className="text-2xl my-3">Hey hire me please</p>
              <a href="" className="flex justify-between bg-yellowGreen py-3 px-4 rounded-3xl uppercase text-sm my-3 item-center">
                <p>go back</p>
                <div>
                  <img src="assets\iconArrow.png" alt="arrow" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ErrorPage;