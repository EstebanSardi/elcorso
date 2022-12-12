import React from "react";
import Navbar from "../componentes/Navbar";
import { Link } from 'react-router-dom';
import Footer from "../componentes/Footer";

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>

            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Proyectos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/clientes"} className="small-box-footer">Ver Proyectos <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;