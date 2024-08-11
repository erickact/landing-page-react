import React from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Cards from "./Cards";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<>
		  <NavBar/>
		  <Welcome/>
		  <Cards/>
		  <Footer/>
		</>
		
	);
};

export default Home;
