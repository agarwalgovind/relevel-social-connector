import React from "react";
import "../styles/Home.css"
import Sidebar from './Sidebar';

const Home = () => {

    return (
        <div className="Home">
            <div className="lander" id="page-wrap">
                <h1>Relevel Social Connector</h1>
                <p className="text-muted">A place for connecting people</p>
            </div>
        </div>
    );
}

export default Home;