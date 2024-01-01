import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { jobTypeLoadAction } from '../../Redux/actions/jobTypeAction';
import { registerAjobAction } from '../../Redux/actions/jobAction';


const validationSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('title is required'),
    description: yup
        .string('Enter a description')
        .min(6, 'Description should be of minimum 6 characters length')
        .required('Description is required'),
    salary: yup
        .number('Enter a salary')
        .required('Salary is required'),
    location: yup
        .string('Enter a location')
        .required('Location is required'),
    jobType: yup
        .string('Enter a Category')
        .required('Category is required'),
});


const CreatorDashCreateJob = () => {
    const dispatch = useDispatch();

    //job type
    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

    const { jobType } = useSelector(state => state.jobTypeAll);
    const {mode} = useSelector(state => state.mode);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            jobType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAjobAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });



    return (
        <>

            <Box 
            // sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }} 
            className="h-[100%] flex items-center justify-center pt-4"
            >


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' 
                className={`relative flex p-[24px]${mode==='dark' ? 'border-white ' : 'border-black bg-white'}`}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }} className={`${mode==='dark' ? 'text-white' : 'text-black'}`}>
                            Register a Job
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="title"
                            label="Title"
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="salary"
                            name="salary"
                            label="Salary"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Salary"
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="location"
                            name="location"
                            label="Location"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />

                        <TextField sx={{ mb: 3, text: "black" }}
                            fullWidth
                            className="px-2 my-2 text-black"
                            variant="outlined"
                            name="jobType"
                            id="jobType"
                            select
                            label="Category"
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                            helperText={formik.touched.jobType && formik.errors.jobType}
                        >
                            <MenuItem key={""} value={""}>

                            </MenuItem>

                            {jobType && jobType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.jobTypeName}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button fullWidth variant="contained" type='submit' >Create job</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default CreatorDashCreateJob