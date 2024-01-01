import React, { useEffect } from "react";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { DataGrid, gridClasses, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  allUserAction,
  getApplicantAction,
} from "../../Redux/actions/userAction";
import { userDeleteAction } from "../../Redux/actions/userAction";
import ApplicantCard from "../../component/Card/ApplicantCard";

const CreatorDashApplicants = () => {
  const dispatch = useDispatch();

  const { applicantsData, loading } = useSelector((state) => state.getSingleApplicant);
    let data = [];
    data = applicantsData ? applicantsData?.allApplicants : []; 
    const { mode } = useSelector(state => state.mode);
    const creator = useSelector(state => state.userProfile);
    console.log("halwa -- > ", creator.userInfo?._id);
    // const creatorId = creator.userInfo._id;


  
    useEffect(() => {
        dispatch(getApplicantAction());
      }, []); // Empty dependency array means it will run only once when the component mounts
      
      useEffect(() => {
        console.log("data -->", applicantsData);
      }, [applicantsData]);

    // Define the delete function
    const deleteUserById = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(userDeleteAction(id)); // Dispatch the delete action with the user ID
    }
  };

  const columns = [
    {
      field: "firstName",
      headerName: "User First Name",
      width: 150,
      editable: true,
    },

    {
      field: "lastName",
      headerName: "User Last Name",
      width: 150,
      editable: true,
    },

    {
      field: "email",
      headerName: "E_mail",
      width: 150,
    },

    // {
    //     field: 'role',
    //     headerName: 'User status',
    //     width: 150,
    //     renderCell: (params) => (
    //         params.row.role === 1 ? "Admin" : params.row.role === 2 ? "Creator" : "Regular user"
    //     )
    // },

    {
      field: "Applied Date",
      headerName: "Applied date",
      width: 150,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "Resume Link",
      width: 200,
      renderCell: (values) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <button onClick={values.row.resumeLink ? window.open(values.row.resumeLink) : console.log("fine")} className="bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700 rounded-2xl px-6 py-1 duration-300 ease-in-out hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-700 hover:to-gray-900" variant="contained">Resume</ button>
          {/* <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link></ Button> */}
          {/* < Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">Delete</ Button> */}
        </Box>
      ),
    },

    {
        field: "Job Title",
        width: 200,
        renderCell: (values) => (
          <Box
          className = "flex flex-col h-10 overflow-y-scroll"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "170px",
              editable: true,
            }}
          >
            {values.row.jobHistory
              .filter((job) => job.user)
              .map((job, i) => (
                <div key={i}>{job.title}</div>
              ))}
          </Box>
        ),
      },

    {
    {
        field: "Application Status",
        field: "Application Status",
        width: 200,
        width: 200,
        renderCell: (values) => (
        renderCell: (values) => (
          <Box
          <Box
          className = "flex flex-col h-10 overflow-y-scroll"
          className = "flex flex-col h-10 overflow-y-scroll"
            sx={{
            sx={{
              display: "flex",
              display: "flex",
              justifyContent: "space-between",
              justifyContent: "space-between",
              width: "170px",
              width: "170px",
              editable: true,
              editable: true,
            }}
            }}
          >
          >
            {values.row.jobHistory
            {values.row.jobHistory
              .filter((job) => job.user)
              .filter((job) => job.user)
              .map((job, i) => (
              .map((job, i) => (
                <div key={i}>{job.applicationStatus}</div>
                <div key={i}>{job.applicationStatus}</div>
              ))}
              ))}
          </Box>
          </Box>
        ),
        ),
      },
      },

    {
        field: "Update Application Status",
        width: 200,
        renderCell: (values) => (
          <Box
          className = "flex flex-col h-10 "
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "170px",
              editable: true,
            }}
          >
            <button className="bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700 rounded-2xl px-6 py-1 mt-1 duration-300 ease-in-out hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-700 hover:to-gray-900">Update Status</button>
          </Box>
        ),
      },
      
  ];

  return (
    <>
      <Box className="pl-6 pt-6 pr-4 mr-4 overflow-hidden">

                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Applicants
                </Typography>
                <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                    <Button variant='contained' color="success" startIcon={<AddIcon />}><Link style={{ color: "white", textDecoration: "none" }} to="/job/create">Create Job</Link></Button>
                </Box>
                <Paper className={`relative flex justify-center p-[24px] bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700 border-1 w-[100%] rounded-lg'}`} 
                // sx={{ bgcolor: "secondary.midNightBlue" }} 
                >

                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            sx={{

                                '& .MuiTablePagination-displayedRows': {
                                    color: 'white',
                                },
                                color: 'white',
                                [`& .${gridClasses.row}`]: {
                                    bgcolor: (theme) =>
                                        // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                        // theme.palette.secondary.main
                                        mode === 'light' ? '#f5f5f5' : '#gray-900',
                                        ":hover": {
                                            backgroundColor: "#121212"
                                        }
                                },
                                button: {
                                    color: '#ffffff'
                                }

                            }}
                            getRowId={(row) => row._id}
                            rows={data}
                            columns={columns}
                            pageSize={3}
                            rowsPerPageOptions={[3]}
                            checkboxSelection
                            slots={{ toolbar: GridToolbar }}
                        />
                    </Box>
                </Paper>

            </Box>
      {/* {data &&
        data.length &&
        data.map((applicant) => (
          <ApplicantCard
            applicant={applicant}
          />
        ))} */}
    </>
  );
};

export default CreatorDashApplicants;
