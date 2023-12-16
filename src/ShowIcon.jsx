import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import siva from "../src/All Images/Siva Image.jpeg";
import sideimage from "./All Images/Logo133.jpeg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const ShowData = () => {
	const token = localStorage.getItem("token");
	let navigate = useNavigate();
	const { id } = useParams();
	// const [individualInstitute, setIndividualInstitute] = useState([]);
	const [showInstitutionsOptions, setShowInstitutionsOptions] = useState(false);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	const [individualInstitute, setIndividualInstitute] = useState({
		Password: "",
	});

	const onChangeInstituteName = (e) => {
		const newValue = e.target.value;
		setIndividualInstitute((prevData) => ({
			...prevData,
			Password: newValue,
		}));
	};

	const onSubmitForm = (e) => {
		e.preventDefault();

		const UserData = {
			Password: individualInstitute.Password,
		};

		axios
			.put("http://localhost:4010/UpdateInstitute/" + id, UserData)
			.then((response) => {
				console.log(response.data);
				if (response.status === 200) {
					toast.success("Update Successful", {
						position: "top-right",
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
					setTimeout(function () {
						navigate("/AdminDashboard");
					}, 3000);
				}
			})
			.catch((error) => {
				console.error(error);
				setError("An error occurred while updating the institute.");
				console.log(error.message);
			});
	};
	useEffect(() => {
		const fetchData = async () => {
			console.log(id);
			try {
				const response = await axios.get(
					"http://localhost:4010/individualUser/" + id
				); // Replace with your API endpoint
				setIndividualInstitute(response.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
		if (token == undefined) {
			navigate("/");
		}
	}, [id]);

	const [isNavVisible, setIsNavVisible] = useState(false);

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		menuBtnChange();
	};

	const menuBtnChange = () => {
		const sidebar = document.querySelector(".sidebar");
		const closeBtn = document.querySelector("#btn");
		const searchBtn = document.querySelector(".bx-search");

		if (sidebar?.classList.contains("open")) {
			closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");
		} else {
			closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
		}
	};
	const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(true);

	const toggleInstitutions = () => {
		setIsInstitutionsOpen(!isInstitutionsOpen);
	};
	const [isInstitutionsOpen1, setIsInstitutionsOpen1] = useState(false);

	const toggleInstitutions1 = () => {
		setIsInstitutionsOpen1(!isInstitutionsOpen1);
	};
	const [isInstitutionsOpen2, setIsInstitutionsOpen2] = useState(true);

	const toggleInstitutions2 = () => {
		setIsInstitutionsOpen2(!isInstitutionsOpen2);
	};
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-lg-3 col-md-12 sectioncard121">
							<Sidebar />
							<ToastContainer />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
						style={{ height: "100vh", overflowY: "scroll" }}
					>
						<div className=" ">
							<i
								className="fa-solid fa-bars bars d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
						</div>
						{loading ? (
							<p>Loading...</p>
						) : individualInstitute ? (
							<div className="">
								<div className="row">
									<div className=" col-12 col-md-8 ">
										<div className="card mb-3  p-2 backgroundcolor">
											<div className="row ">
												<div className="col-md-6">
													<h4 className="mt-3">Demo User</h4>
													<div className="d-flex flex-row">
														<span class="material-symbols-outlined">mail</span>
														<p className="mx-2">
															{individualInstitute.userEmail}
														</p>
													</div>
													<button className="m-2  bg-secondary text-white" style={{border:"none", borderRadius:"7px", padding:"7px"}}>
														<i class="fa-solid fa-pencil"></i>Edit
													</button>
													<button className="m-2 bg-warning text-white"  style={{border:"none", borderRadius:"7px", padding:"7px"}}>
														Change Password
													</button>
													<br />
													<button className="m-2  bg-dark text-white"  style={{border:"none", borderRadius:"7px", padding:"7px"}}>
														Extend Access
													</button>
												</div>
												<div className="  p-3 col-md-6 ">
													<h6>
														Institution:
														<span className="mx-2  ">
															{individualInstitute.InstituteType}
														</span>
													</h6>
													<h6>
														Batch:
														<span className="mx-2  ">
															{individualInstitute.SelectBatch}
														</span>
													</h6>
													<h6>
														Hallticket No:
														<span className="mx-2  ">
															{individualInstitute.Regdid}
														</span>
													</h6>
													<h6>
														Status:
														<span className="mx-2 ">Active</span>
													</h6>
													<h6>
														Expiration Date:{" "}
														<span className="mx-2  ">
															{individualInstitute.ExpiryDate}
														</span>
													</h6>
												</div>
											</div>
										</div>
									</div>

									<div className="card col-12 col-md-3  p-3  secondcard text-white" style={{height:"215px"}}>
										<h6>Your Overall Accuracy</h6>

										<label for="customRange" class="form-label percentage12">
											50%
										</label>

										<input type="range" id="customRange"></input>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-md-3 mt-2">
										<div
											className="w-100 p-3 cardassessment"
											style={{
												border: "1px solid black",
												borderRadius: "10px",
											}}
										>
											<h6>Assessment Activity</h6>
											<h6>Completed: 0/14</h6>
											<h6>Yet to Start: 14/14</h6>
										</div>
									</div>
									<div className="col-12 col-md-4 mt-2">
										<div
											className="card p-3 cardassessment "
											style={{
												border: "1px solid black",
												borderRadius: "10px",
											}}
										>
											<h6>Course Activity</h6>
											<h6>InProgress: 2/6</h6>
											<h6>Yet to Start: 4/6</h6>
										</div>
									</div>
									<div className="col-12 col-md-4 mt-2">
										<div
											className="card p-3 cardassessment"
											style={{
												border: "1px solid black",
												borderRadius: "10px",
											}}
										>
											<h6>Practice Activity</h6>
											<h6>Completed: 1/44</h6>
											<h6>Yot to Start: 41/44</h6>
										</div>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-12 col-md-6">
										<div
											className=" cardassessment1   "
											style={{
												border: "1px solid black",
												// borderRadius: "2px",
											}}
										>
											<h6 className=" bg-white p-3" style={{borderRadius:"8px"}}>
												MCQ: Subject Level Accuracy
											</h6>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div
											className=" cardassessment12   "
											style={{
												border: "1px solid black",
												// borderRadius: "2px",
											}}
										>
											<h6 className=" bg-white p-3" style={{borderRadius:"8px"}}>
												Coding: Programming Wise Accuracy
											</h6>
										</div>
									</div>
								</div>
							</div>
						) : (
							<p>Data not found</p>
						)}
					</div>

					{/* {individualInstitute.map((code) => (
               
              ))} */}
				</div>
			</div>
		</div>
	);
};

export default ShowData;