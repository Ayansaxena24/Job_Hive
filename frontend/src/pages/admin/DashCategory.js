import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { jobTypeLoadAction } from '../../Redux/actions/jobTypeAction';

import moment from 'moment'

const DashCategory = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    },[]);

    const { jobType, loading } = useSelector(state => state.jobTypeAll);
    let data = [];
    data = (jobType !== undefined && jobType.length > 0) ? jobType : []

    //delete by job id
    const deleteJobCategoryById = (e, _id) => {
        console.log(_id)
    }

    const columns = [

        {
            field: 'jobTypeName',
            headerName: 'Job Title',
            width: 150,
            editable: true,
        },
        {
            field: '_id',
            headerName: 'Category_ID',
            width: 150,
            editable: true,
        },
        {
            field: 'Actions',
            width: 200,
            renderCell: (values) => (
                <Box className = "flex justify-space-between">
                    <button variant='contained'><Link className='text-white px-4 py-1 mr-1 hover:text-purple-500 hover:scale-110 duration-300 ease-in-out rounded-xl border-1 bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700' to={`/type/update/${values.row._id}`}>Edit</Link></button>
                    <button className=" hover:text-purple-500 px-4 py-1 rounded-xl hover:scale-110 duration-300 ease-in-out border-1 bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700 ml-1" onClick={(e) => deleteJobCategoryById(e, values.row.id)} variant='contained' color='error'><Link to={`/type/delete/${values.row._id}`}>Delete</Link></button>
                </Box>
            )
        },
    ];

    return (
        <Box className="pl-6 pt-6 pr-4">
            <div className='text-white pb-3 text-2xl'>Jobs Category</div>
            <div className='pb-2 flex justify-end'>
                <Button variant='contained' color='success' startIcon={<AddIcon />}><Link className='text-white' to='admin/category/create'>Create Category</Link></Button>
            </div>
            <div className='bg-none'>
                <Box className='h-400 w-[100%]'>
                <DataGrid
                        getRowId={(row) => row._id}
                        sx={{

                            '& .MuiTablePagination-displayedRows': {
                                color: 'white',
                            },
                            color: 'white',
                            [`& .${gridClasses.row}`]: {
                                // bgcolor: (theme) =>
                                    // theme.palette.mode === 'light' ? grey[200] : grey[900],
                                    // theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }

                        }}
                        rows={data}
                        columns={columns}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                    // components={{ Toolbar: GridToolbarExport }}
                    />
                </Box>
            </div>
        </Box>
    )
}

export default DashCategory

