import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



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
    return (



        // main content

        <div>

            <div className="container">
                <div className="row">

                    <div className="col-md-2 card" style={{ backgroundColor: "black", color: "white" }}>
                        <div className="d-flex flex-row justify-content-between ">
                            <div>
                                <h5>Instacks</h5>
                            </div>
                            <div>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <div className="mx-2">
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>HomePage</p>
                            </div>
                        </div>


                        <h5>INSTITUTIONS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Institutions</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>

                            </div>
                            <div className="mx-2">
                                <p>Batch Years</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Batches</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Users</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-brands fa-algolia"></i>
                            </div>
                            <div className="mx-2">
                                <p>Search user</p>
                            </div>
                        </div>

                        <h5>QUESTION BANK</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <div className="mx-2 ">
                                <p className="dropdown-toggle">Self Created QB</p>
                                {Open && (
                                    <ul>

                                        <li><a class="dropdown-item" href="/" style={{ color: "white" }}>Subject</a></li>
                                        <li><a class="dropdown-item" href="/chapter1" style={{ color: "white" }}>Chapters</a></li>
                                    </ul>
                                )
                                }

                                <p className="dropdown-toggle">MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/parag" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/view" style={{ color: "white" }}>View</a></li>
                                    <li><a class="dropdown-item" href="" style={{ color: "white" }}>Upload</a></li>
                                </ul>
                                <p className="dropdown-toggle">Parag MCQ Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/mcq" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/paragview" style={{ color: "white" }}>View</a></li>

                                </ul>

                                <p className="dropdown-toggle">Coding Question</p>
                                <ul>
                                    <li><a class="dropdown-item" href="/coding" style={{ color: "white" }}>Create</a></li>
                                    <li><a class="dropdown-item" href="/codingview" style={{ color: "white" }}>View</a></li>

                                </ul>

                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-row">

                                <i class="fa-brands fa-algolia"></i>

                                <div className="mx-2">
                                    <p>Assigned QB</p>
                                </div>
                            </div>
                        </div>

                        <h5>ASSESSMENTS</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Reports</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned Assessments</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                            </div>
                            <div className="mx-2">
                                <p>Compare</p>
                            </div>
                        </div>

                        <h5>LEARNING PATH</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Learning Path</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">
                                <p>Access</p>
                            </div>
                        </div>

                        <h5>PRACTICE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className="mx-2">
                                <p>pratice</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                            <div className="mx-2">
                                <p>Participation Report</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="mx-2">
                                <p>Assigned</p>
                            </div>
                        </div>


                        <h5>Blogs</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-display"></i>
                            </div>
                            <div className="mx-2">
                                <p>Blogs</p>
                            </div>
                        </div>

                        <h5>PROCTORING</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-circle-dot"></i>
                            </div>
                            <div className="mx-2">
                                <p>proctoring</p>
                            </div>
                        </div>

                        <h5>PROFILE</h5>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className="mx-2">
                                <p>billing</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-folder"></i>
                            </div>
                            <div className="mx-2">
                                <p>Invoices</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>

                                <i class="fa-solid fa-key"></i>
                            </div>
                            <div className="mx-2">
                                <p>Change Password</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <div className="mx-2">

                                <p>Compiler Test</p>
                            </div>
                        </div>

                        <hr style={{ backgroundColor: "white" }} />
                        <div className="text-center" >
                            <button style={{ backgroundColor: "blue", color: "white" }}>Logout</button>
                        </div>
                        <div className="text-center">
                            <i class="fa-regular fa-message"></i>
                        </div>
                    </div>
                    <div className="col-1"></div>

                    <div className="col-md-8 my-5 card">
                        <div className="d-flex flex-row">

                            <div>
                                <h6 className="my-5">Subjects</h6>
                            </div>
                            <div className="col-8"></div>

                            <div className="my-5">


                                <div class="modal" id="myModal234565">
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
                                                {/* <form action="" onSubmit={onSubmitForm}>



                                                    <p>Name *</p>
                                                    <input
                                                        type="text"
                                                        placeholder="...name..."
                                                        onChange={(e) => setname(e.target.value)}
                                                        value={name}
                                                    />


                                                    <p>Description *</p>
                                                    <input
                                                        type="text"
                                                        placeholder="...description..."
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        value={Description}
                                                    /><br></br>
                                                    <label className="my-3 ">Subject *</label><br></br>
                                                    <select
                                                        type="text"
                                                        placeholder="...subject tag..."
                                                        style={{ width: "190px" }}
                                                        onChange={(e) => setsubjecttag(e.target.value)}
                                                        value={subjecttag}
                                                    >
                                                        <option>--select subjects--</option>
                                                        <option value="algorithms" onChange={(e) => setsubjecttag(e.target.value)} >algorithms</option>
                                                        <option value="Botany" onChange={(e) => setsubjecttag(e.target.value)}>Botany</option>
                                                        <option value="C-programming" onChange={(e) => setsubjecttag(e.target.value)}>C-programming</option>
                                                        <option value="Chemistry" onChange={(e) => setsubjecttag(e.target.value)}>Chemistry</option>
                                                        <option value="Communication">Communication</option>
                                                        <option value="Data-reasoning">Data-reasoning</option>
                                                        <option value="Data-structres">Data-structres</option>
                                                        <option value=">Dbms">Dbms</option>
                                                        <option value="java-programming">java-programming</option>
                                                        <option value="Mathematics">Mathematics</option>
                                                        <option value="others">others</option>
                                                        <option value="programming">programming</option>
                                                        <option value="Botaprogramming Skillsny">programming Skills</option>
                                                        <option value="Quntative apptitude">Quntative apptitude</option>
                                                    </select>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Submitt</button>

                                                    </div>
                                                </form> */}

                                                <form onSubmit={onSubmitForm}>
                                                    <p>Name *</p>
                                                    <input
                                                        type="text"
                                                        placeholder="...name..."
                                                        onChange={(e) => setName(e.target.value)}
                                                        value={name}
                                                    />

                                                    <p>Description *</p>
                                                    <input
                                                        type="text"
                                                        placeholder="...description..."
                                                        onChange={(e) => setDescription(e.target.value)}
                                                        value={Description}
                                                    /><br></br>

                                                    <label className="my-3 ">Subject *</label><br></br>
                                                    <select
                                                        value={subjecttag}
                                                        style={{ width: "190px" }}
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
                                                        {/* Add other options similarly */}


                                                    </select>

                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Submit</button>
                                                    </div>
                                                </form>


                                            </div>





                                        </div>


                                    </div>
                                </div>


                                <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal234565" className="" style={{ backgroundColor: "blue", color: "white" }} >+ Create Subject</button>

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

                            {/* <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: "14px", marginLeft: "-200px" }} className="text-center">SNO</th>
                                        <th style={{ fontSize: "14px", }} className="text-center">NAME</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">TAG</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">CHAPTERS</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">TOTAL QUESTION</th>
                                        <th style={{ fontSize: "14px" }} className="text-center">ACTION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        {blogslist.map((blog1) => (
                                            <div>
                                                <tr>
                                                    <th className="text-center  mx-3">1</th>
                                                </tr>
                                                <tr>

                                                    <th className="text-center  mx-3">{blog1.name}</th>
                                                </tr>
                                                <tr>
                                                    <td className="text-center mx-3" >{blog1.Description}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center  mx-3">{blog1.subjecttag}</td>
                                                </tr>




                                                <td>
                                                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal23456">
                                                        <i class="fa-sharp fa-solid fa-pen mx-1" style={{ color: "skyblue" }}></i>
                                                    </button>
                                                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#myModal234567">

                                                        <i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i>
                                                    </button>
                                                </td>
                                                <td><i class="fa-sharp fa-solid fa-pen mx-4" style={{ color: "skyblue" }}></i><i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i></td>
                                            </div>
                                        ))}
                                    </tr>




                                   


                                </tbody>

                            </table> */}
                            {/* <tr>
                                        <td className="text-center">2</td>
                                        <td className="text-center">javaprogramm</td>
                                        <td className="text-center">java-programming</td>
                                        <td className="text-center">1</td>
                                        <td></td>
                                        <td><i class="fa-sharp fa-solid fa-pen mx-4" style={{ color: "skyblue" }}></i><i class="fa-solid fa-trash-can mx-2" style={{ color: "red" }}></i></td>

                                    </tr> */}

                            {/* {blogslist.map((blog) => (
                                        <tr key={blog.id}>
                                            <td>{blog.name}</td>
                                            <td>{blog.Description}</td>
                                            <td>{blog.subjecttag}</td>
                                        </tr>
                                    ))} */}

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