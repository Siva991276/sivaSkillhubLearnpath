import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

function AssignQB() {
	const [isOpen, setIsOpen] = useState(true);
	const columns = [
		{ field: "id", headerName: "ID", width: 200 },
		{ field: "ModuleName", headerName: "Module Name", width: 200 },
		{ field: "Chapters", headerName: "Chapters", width: 200 },
		{ field: "Subject", headerName: "Subject", width: 200 },
		{
			field: "ACTIONS",
			headerName: "ACTIONS",
			width: 130,
			renderCell: (params) => (
				<div>
					<button type="button" className="btn_pencile">
						<i className="fa-sharp fa-solid fa-pen "></i>
					</button>
					<button type="button" className="btn_trash">
						<i className="fa-solid fa-trash-can "></i>
					</button>
				</div>
			),
		},
	];

	const rows = [
		{ id: 1, ModuleName: "Snow", Chapters: "Jon", Subject: "java" },
		{ id: 2, ModuleName: "Lannister", Chapters: "Cersei", Subject: "python" },
		{ id: 3, ModuleName: "Lannister", Chapters: "Jaime", Subject: "c" },
		{ id: 4, ModuleName: "Stark", Chapters: "Arya", Subject: "react" },
		{ id: 5, ModuleName: "Targaryen", Chapters: "Daenerys", Subject: "nodejs" },
		{ id: 6, ModuleName: "Melisandre", Chapters: null, Subject: "java" },
		{ id: 7, ModuleName: "Clifford", Chapters: "Ferrara", Subject: "python" },
		{ id: 8, ModuleName: "Frances", Chapters: "Rossini", Subject: "react" },
		{ id: 9, ModuleName: "Roxie", Chapters: "Harvey", Subject: "nodejs" },
	];

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
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-lg-3 col-md-12 sectioncard121">
							<Sidebar />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 12 : 9} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						<div>
							<i
								className="fa-solid fa-bars bars d-lg-block d-none"
								onClick={toggleSidebar}
							></i>
						</div>
						<div className="  p-3">
							<div className="row">
								<div className="col-12 ">
									<h4 className="assignedheading">Question Bank Access:</h4>
									<div className="tabledata shadow">
										<DataGrid
											rows={rows}
											columns={columns}
											initialState={{
												pagination: {
													paginationModel: { page: 0, pageSize: 5 },
												},
											}}
											pageSizeOptions={[5, 10]}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AssignQB;
