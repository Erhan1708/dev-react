import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";
import ContentRight from "./components/Content-right";
import Content2 from './components/Content2';
import ContentRight2 from "./components/Content-right2";
import ContentRight3 from "./components/Content-right3";
import State from "./components/State";

const App = () => {
	return (
		<div>
			<div className="w3-content">
				<div className="w3-row">
               <Header />
               <Content />
               <ContentRight />
               <Content2 />
               <ContentRight2 />
               <ContentRight3 />
               <State/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
