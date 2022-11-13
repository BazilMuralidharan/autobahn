import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'

const validatingFormSchema = Yup.object().shape({
    name:Yup.string().required,
    username:Yup.string().required,
    email:Yup.string().email('Invalid email').required,
    phone:Yup.number()
    
})

export default function FormUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      },
    },
    onSubmit: (value) =>
      console.log("formikSubmit", JSON.stringify(value, null, 2)),
    
    
  });
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "auto" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          name={"name"}
          onChange={formik.handleChange}  
          value={formik.values.name}
        />
        <TextField
          id="outlined-basic"
          label="userName"
          variant="outlined"
          name={"username"}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          name={"email"}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <TextField
          id="outlined-basic"
          label="phone"
          variant="outlined"
          name={"phone"}
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <TextField
          id="outlined-basic"
          label="website"
          variant="outlined"
          name={"website"}
          onChange={formik.handleChange}
          value={formik.values.website}
        />

        {/* <Typography component={"h4"} align={""}>
          ADDRESS
        </Typography> */}
        <TextField
          id="outlined-basic"
          label="street"
          variant="outlined"
          name={"address.street"}
          onChange={formik.handleChange}
          value={formik.values.address.street}
        />
        <TextField
          id="outlined-basic"
          label="suite"
          variant="outlined"
          name={"address.suite"}
          onChange={formik.handleChange}
          value={formik.values.address.suite}
        />
        <TextField
          id="outlined-basic"
          label="city"
          variant="outlined"
          name={"address.city"}
          onChange={formik.handleChange}
          value={formik.values.address.city}
        />
        <TextField
          id="outlined-basic"
          label="zipcode"
          variant="outlined"
          name={"address.zipcode"}
          onChange={formik.handleChange}
          value={formik.values.address.zipcode}
        />
        <Button variant="contained" onClick={formik.handleSubmit}>
          SUBMIT
        </Button>
      </Box>
    </div>
  );
}

///name email useNam,phone, website , address

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
