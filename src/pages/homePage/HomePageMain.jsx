import HomePageCollab from "./HomePageCollab";
import HomePageExplore from "./HomePageExplore";
import HomePageGetStarted from "./HomePageGetStarted";
import HomePageHeader from "./HomePageHeader";
import HomePageList from "./HomePageList";
import HomePageQuotes from "./HomePageQuotes";
import HomePageSolution from "./HomePageSolution";
import HomePageTalent from "./HomePageTalent";
import HomePageTrending from "./HomePageTrending";

const HomePage = () => {
  return(
    <div>

      <main className="">

        {/* Header Section */}

        <HomePageHeader />

        {/* Trending Services Section */}

        <HomePageTrending />

        {/* Explore Marketplace Section */}

        <HomePageExplore />

        {/* Talent Search Section */}

        <HomePageTalent />

        {/* Business Solution Section */}

        <HomePageSolution />

        {/* Get started Section  */}

        <HomePageGetStarted />

        {/* Client quotes Section */}

        <HomePageQuotes />

        {/* Collab Section */}

        <HomePageCollab />

        {/* List Section */}

        <HomePageList />

      </main>

    </div>
  )
}

export default HomePage;