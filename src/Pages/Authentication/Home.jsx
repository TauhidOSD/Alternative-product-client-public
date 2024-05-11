import Carousole from "../../Componentes/Navbar/Carousole";
import Banner from "./Banner/Banner";
import QueriesSction from "./QueriesSction/QueriesSction";
import RecentQuries from "./RecentQuries/RecentQuries";

const Home = () => {
    return (
        <div >
            <Carousole></Carousole>
            <QueriesSction></QueriesSction>
            <Banner></Banner>
            <RecentQuries></RecentQuries>
        </div>
    );
};

export default Home;