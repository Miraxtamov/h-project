import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes, Router } from "react-router-dom";
import Generic from "../generic/index";
import Properties from "../components/Properties";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Register from "../components/Register";

const Root = () => {
	return (
		// <Router>
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Generic />}></Route>
				<Route path="/home" element={<Generic />}></Route>
				<Route path="/properties" element={<Properties />}></Route>
				<Route path="/contacts" element={<Generic />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/login/register" element={<Register />}></Route>
				<Route path="*" element={"404 not found"}></Route>
			</Routes>
			<Footer />
		</div>
		// </Router>
	);
};

export default Root;
