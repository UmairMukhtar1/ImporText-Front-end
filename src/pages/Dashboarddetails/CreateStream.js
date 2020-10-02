// import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// class CreateStream extends Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//         }}
//       >
//         <div
//           style={{
//             width: "30%",
//             height: 500,
//             backgroundColor: "#D6EAF8",
//             borderRadius: 20,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src='https://www.logolynx.com/images/logolynx/a6/a63611513c59a6b9f507615e28fcc3e1.jpeg'
//             style={{
//               width: "100%",
//               height: "100%",
//             }}
//             alt='sdf'
//           />
//         </div>
//         <div
//           style={{
//             width: "70%",
//             height: 500,
//             backgroundColor: "#E6EAF8",
//             borderRadius: 10,
//             paddingLeft: 150,
//           }}
//         >
//           <TextField
//             style={{
//               marginTop: "5%",
//               width: "70%",
//               borderRadius: 70,
//             }}
//             id='outlined-basic'
//             label='Stream Name'
//             variant='outlined'
//           />

//           <TextField
//             style={{
//               marginTop: "5%",
//               width: "70%",
//               borderRadius: 70,
//             }}
//             id='outlined-basic'
//             label='Stream Description'
//             variant='outlined'
//           />

//           <TextField
//             style={{
//               marginTop: "5%",
//               width: "70%",
//               borderRadius: 70,
//             }}
//             id='outlined-basic'
//             // label='Stream Topic'
//             value=''
//             variant='outlined'
//             type='file'
//           />

//           <Button
//             variant='contained'
//             color='primary'
//             style={{
//               marginTop: "5%",
//               width: "70%",

//               borderRadius: 70,
//             }}
//           >
//             CHANGE PASSWORD
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }
// export default CreateStream;

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const API = "http://localhost:3000/users/signup";

class CreateStream extends Component {
  constructor(props) {
    super();

    this.state = {
      description: "",
      name: "",
      photo: "",
      authour: "aaa",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadimage = this.uploadimage.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  uploadimage(e) {
    console.log(e.target.files[0]);
    this.setState({ photo: e.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("photo", this.state.photo);
    formData.append("authour", this.state.authour);

    // console.log(this.state.photo);

    axios
      .post("http://localhost:3000/users/signup", formData, {})
      .then((res) => {
        console.log(res);

        this.setState({
          signedup: true,
        });
      });
  }

  render() {
    //  signed up  so redirect to login page with the return url
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "40%",
            height: 500,
            backgroundColor: "#D6EAF8",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src='https://pbs.twimg.com/profile_images/905929328843669504/H0D9gBNQ.jpg'
            style={{
              width: "100%",
              height: "100%",
            }}
            alt='sdf'
          />
        </div>

        <div
          className='FormCenter'
          style={{
            width: "70%",
            height: 500,
            backgroundColor: "#E6EAF8",
            borderRadius: 10,
            paddingLeft: 150,
          }}
        >
          <form onSubmit={this.handleSubmit} className='FormFields'>
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='name'>
                Stream Name{" "}
              </label>

              <TextField
                style={{
                  marginTop: "5%",
                  width: "70%",
                  borderRadius: 70,
                }}
                label='Stream Name'
                variant='outlined'
                required='true'
                type='text'
                id='name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />

              {/* <input
                required='true'
                type='text'
                id='name'
                className='FormField__Input'
                placeholder='Enter your full name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              /> */}
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='description'>
                STREAM DESCRIPTION :
              </label>

              <TextField
                style={{
                  marginTop: "5%",
                  width: "70%",
                  borderRadius: 70,
                }}
                label='Stream Name'
                variant='outlined'
                required='true'
                type='text'
                id='description'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
              />

              {/* <input
                required='true'
                type='description'
                id='description'
                className='FormField__Input'
                placeholder='Enter your description'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
              /> */}
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='photo'>
                Thumbnail Photo{" "}
              </label>

              {/* <TextField
                style={{
                  marginTop: "5%",
                  width: "70%",
                  borderRadius: 70,
                }}
                type='file'
                variant='outlined'
                required='true'
                accept='image/*'
                onChange={this.uploadimage}
              /> */}

              <input
                required='true'
                type='file'
                accept='image/*'
                className='FormField__Input'
                onChange={this.uploadimage}
              />
            </div>

            <div className='FormField'>
              <button className='FormField__Button mr-80'>Create Stream</button>{" "}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateStream;
