import Carousole from "../../Componentes/Navbar/Carousole";
import Banner from "./Banner/Banner";
import Contact from "./Contuct/Contuct";
import OurrecentText from "./OurrecentText/OurrecentText";
import QueriesSction from "./QueriesSction/QueriesSction";
import RecentQuries from "./RecentQuries/RecentQuries";

const Home = () => {
    return (
        <div >
            <Carousole></Carousole>
            <QueriesSction></QueriesSction>
            <Banner></Banner>
            <OurrecentText></OurrecentText>
            <RecentQuries></RecentQuries>
            <Contact></Contact>
        </div>
    );
};

export default Home;