import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes, Router } from "react-router-dom";
import Generic from "../generic/index";

const Root = () => {
	return (
		// <Router>
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Generic />}>
					{" "}
				</Route>
				<Route path="/home" element={<Generic />}></Route>
				<Route path="/properties" element={<Generic />}></Route>
				<Route path="/contacts" element={<Generic />}></Route>
				<Route path="/login" element={<Generic />}></Route>
			</Routes>
		</div>
		// </Router>
	);
};

export default Root;
