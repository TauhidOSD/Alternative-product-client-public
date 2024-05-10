import Carousole from "../../Componentes/Navbar/Carousole";
import Banner from "./Banner/Banner";
import QueriesSction from "./QueriesSction/QueriesSction";

const Home = () => {
    return (
        <div>
            <Carousole></Carousole>
            <QueriesSction></QueriesSction>
            <Banner></Banner>
        </div>
    );
};

export default Home;