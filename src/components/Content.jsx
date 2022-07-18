import React from "react";
import Card from "./Card";

const Content = () => {
	return (
		<div className="content">
         <h1 className="title">Content</h1>
         <Card name='Iphone 12 pro' price="70000"/>
         <Card name='Iphone 13 pro' price="100000" />
         <Card name='Iphone 14 pro' price="140000" />
		</div>
	);
};

export default Content;
