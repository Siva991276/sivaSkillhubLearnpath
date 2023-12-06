import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";



const QbSubject = () => {
    useEffect(() => {
        fetchblogs1()

    }, [])

    const [Open, setOpen] = useState(true)

    // const [name, setname] = useState([]);
    // const [Description, setDescription] = useState([]);
    // const [subjecttag, setsubjecttag] = useState([]);

    const [blogslist, setBlogslist] = useState([]);


    let navigate = useNavigate('');

    const fetchblogs1 = async () => {
        const api = "http://localhost:3051/allsubjectData";
        try {
            const response = await axios.get(api, {

            });
            const data = response.data
            setBlogslist(response.data)
        }

        catch (error) {
            console.error("Error fetch blogs:", error);
        };
    }
    // const [name, setname] = useState("");
    // const [Description, setDescription] = useState("");
    // const [subjecttag, setsubjecttag] = useState("");

    // const [data1, setdata1] = useState([]);

    // const AddSubject = {
    //     name: name,
    //     Description: Description,
    //     subjecttag: subjecttag

    // };
    // console.log(AddSubject);



    // const onSubmitForm = (e) => {
    //     e.preventDefault();

    //     if (name && Description && subjecttag !== "") {

    //         const AddSubject = {
    //             name: name,
    //             Description: Description,
    //             subjecttag: subjecttag

    //         };

    //         axios
    //             .post(" http://localhost:3051/subjectData", AddSubject)
    //             .then((response) => {
    //                 setdata1(response.data);
    //                 console.log(response.data);
    //                 if (response.status === 200) {
    //                     toast.success("Subject created Successful", {
    //                         position: "top-right",
    //                         autoClose: 1000,
    //                         hideProgressBar: false,
    //                         closeOnClick: true,
    //                         pauseOnHover: true,
    //                         draggable: true,
    //                         progress: undefined,
    //                         theme: "colored",
    //                     });

    //                     setTimeout(function () {

    //                     }, 3000);
    //                 }
    //             })
    //             .catch((error) => {
    //                 if (error.response && error.response.status === 400) {
    //                     toast.error("subject created not sucessfully", {
    //                         position: "top-right",
    //                         autoClose: 1000,
    //                         hideProgressBar: false,
    //                         closeOnClick: true,
    //                         pauseOnHover: true,
    //                         draggable: true,
    //                         progress: undefined,
    //                         theme: "colored",
    //                     });
    //                 }
    //                 console.log(error);
    //             });
    //     } else {
    //         toast.warning("Enter the Required Details");

    //     }
    // };

    const [name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [subjecttag, setSubjectTag] = useState('');
    const [data1, setData1] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (name && Description && subjecttag !== "") {
            try {
                const AddSubject = {
                    name: name,
                    Description: Description,
                    subjecttag: subjecttag
                };

                const response = await axios.post("http://localhost:3051/subjectData", AddSubject);

                setData1(response.data);
                console.log(response.data);
                if (response.status === 200) {
                    window.alert("Success");
                    fetchblogs1()
                }
            } catch (error) {
                // Handle error and display appropriate notifications
                console.log(error);
            }
        } else {
            window.alert("Error: Please fill in all fields");
        }
    };
    console.log("data1");

    const [Error, setError] = useState("")
    const handleDelete = async (id) => {
        try {
            if (!id) {
                setError("Invalid ID provided for delete");
                return;
            }
            console.log("Deleting subject with ID", id);
            const response = await axios.delete(
                `http://localhost:3051/deleteInstitute/${id}`
                

            );
            if (response.status === 200) {
                window.alert("Subject deleted Successful", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                fetchblogs1();
            } else {
                alert("Error:" + response.data);
                setError("An error occured while deleting subject.");
            }
        } catch (error) {
            setError("An error occured while deleting the subject.");
        }




        const created = () => {
            setOpen(!Open)
        }
    }
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
    return (
        <div>
            <div className="container">
                <div className="row">
                {isOpen && (
              <div className=" col-12 col-md-2 sectioncard121">
              <Sidebar/>
              </div>
					  )}						
            <div className={`my-3 col-12 col-md-${isOpen ? 10: 12} col-lg-${isOpen ? 10 : 12}`}>
                <div className="ml-5 d-lg-block d-none">
                <i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
                <div class="mx-5 row mt-5">
                    <div className="col-md-3">
                    <h6 className="">Subjects</h6>
                    </div> 
                    <div className="col-md-3 float-right">
                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal234565" className="float-right" style={{ backgroundColor: "blue", color: "white" }} >+ Create Subject</button>
                    </div>                       
                    
                    <div class="modal" id="myModal234565">
                        <div class="modal-dialog" >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Create Subject</h4>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal">
                                    </button>
                                </div>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                                <div class="modal-body" >                                            
                                    <form onSubmit={onSubmitForm}>
                                    <div className="row">
										<div className="col-lg-6 col-md-6">
										<div className="mb-1">
											<label>Name<sup className="star">*</sup></label>
											<input
											type="text"
											className="form-control"
											placeholder="...name..."
											value={name}
											onChange={(e) => setName(e.target.value)}
											/>
										</div>
										</div>
										<div className="col-lg-6 col-md-6">
										</div>
										<div className="col-lg-6 col-md-6">
										<div className="mb-1">
											<label>Description<sup className="star">*</sup></label>
											<input
											type="text"
											className="form-control"
											placeholder="...Description..."
											value={Description}
											onChange={(e) => setDescription(e.target.value)}
											/>
										</div>
										</div>
                                        <label className="my-3 ">Subject *</label>
                                        <select
                                            value={subjecttag}
                                            style={{ width: "190px" }}
											className="form-control"
                                            onChange={(e) => setSubjectTag(e.target.value)}
                                        >
                                            <option value="">--select subjects--</option>
                                            <option value="algorithms">Algorithms</option>
                                            {/* <option value="algorithms">algorithms</option> */}
                                            <option value="Botany">Botany</option>
                                            <option value="C-programming">C-programming</option>
                                            <option value="Chemistry">Chemistry</option>
                                            <option value="Communication">Communication</option>
                                            <option value="Data-reasoning">Data-reasoning</option>
                                            <option value="Data-structres">Data-structres</option>
                                            <option value="Dbms">Dbms</option>
                                            <option value="Java-programming">Java-programming</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Others">Others</option>
                                            <option value="Physics">Physics</option>
                                            <option value="Programming">Programming</option>
                                            <option value="Programming Skills">Programming Skills</option>
                                            <option value="Quntative apptitude">Quntative apptitude</option>
                                        </select>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Submit</button>
                                        </div>
									</div>

                                    </form>


                                </div>





                            </div>


                        </div>
                    </div>
                </div>




                            {/* pen */}

                            <div class="modal" id="myModal23456">
                                <div class="modal-dialog" >
                                    <div class="modal-content">


                                        <div class="modal-header">
                                            <h4 class="modal-title">Cerate Subject</h4>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal">

                                            </button>
                                        </div>


                                        <div class="modal-body">

                                            <p>Name *</p>
                                            <input type="text" placeholder="...name..." style={{}} />
                                            <p>Description *</p>
                                            <input type="text" placeholder="...description..." style={{}} /><br></br>
                                            <label className="mt-3 ">Subject *</label><br></br>
                                            <select type="text" placeholder="...subject tag..." style={{ width: "190px" }}>
                                                <option>algorithms</option>
                                                <option>Botany</option>
                                                <option>C-programming</option>
                                                <option>Chemistry</option>
                                                <option>Communication</option>
                                                <option>Data-reasoning</option>
                                                <option>Data-structres</option>
                                                <option>Dbms</option>
                                                <option>java-programming</option>
                                                <option>Mathematics</option>
                                                <option>others</option>
                                                <option>physics</option>
                                                <option>programming</option>
                                                <option>programming Skills</option>
                                                <option>Quntative apptitude</option>
                                            </select>
                                            <p></p>
                                        </div>


                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Submitt</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Delete */}

                            <div class="modal" id="myModal234567">
                                <div class="modal-dialog" >
                                    <div class="modal-content">


                                        <div class="modal-header">
                                            <h4 class="modal-title">Delete Subject</h4>
                                            <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal">

                                            </button>
                                        </div>


                                        <div class="modal-body">

                                            Are Sure Delete this subject


                                        </div>


                                        <div class="modal-footer">
                                            <p>No</p>
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  >Yes</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <div>

                                    <label>Show</label>
                                </div>
                                <select>
                                    <option className="w-15">10</option>
                                </select>
                            </div>
                            <div className="col-8"></div>

                            <div>

                                <label>Search: </label><input type="text" />
                            </div>
                        </div>
                        <p>entires</p>
                        <div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: "14px", marginLeft: "-200px" }} className="text-center">SNO</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">NAME</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">TAG</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">CHAPTERS</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">TOTAL QUESTION</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogslist.map((blog1, index) => (
                                        <tr key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{blog1.name}</td>
                                            <td className="text-center">{blog1.subjecttag}</td>
                                            <td className="text-center">{blog1.chapters}</td>
                                            <td className="text-center">{blog1.totalQuestions}</td>
                                            <td className="text-center">
                                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#myModal${index + 1}`}>
                                                    <i className="fa-sharp fa-solid fa-pen mx-1" style={{ color: "skyblue" }}></i>
                                                </button>
                                                <button type="button" className="btn"   onClick={() => handleDelete(blog1._id)}>
                                                    <i className="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex flex-row">

                            <div>
                                <p>Showing 1 to 2 of entries</p>
                            </div>
                            <div className="col-8"></div>
                            <div>
                                <p>Previous</p>


                            </div>


                        </div>




                    </div>
                </div>
            </div>
        </div >

    )
}
export default QbSubject;