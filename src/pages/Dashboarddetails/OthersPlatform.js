import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const API = "http://localhost:3000/othersPlatform";

// // code to get image and username from local storage ...
// if (localStorage.getItem("localstoragedata")) {
//   var user = JSON.parse(localStorage.getItem("localstoragedata"));
//   var image = user.User.profilephoto;
//   var username = user.User.username;
// }
class OthersPlatform extends Component {
  constructor() {
    super();

    this.state = {
        youtube:''
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = (e) =>{
      const {name,value} = e.target;
    this.setState({[name]:value});
    console.log(this.state.youtube);
  }

  onClick = async () =>{
    const {youtube} = this.state;
    fetch(API, {
        method: "POST",
        body: JSON.stringify({youtube}),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>{
        res.json()
        //   console.log(res.json());
      }).then((data)=>{console.log(data)});

  }

  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "30%",
            height: 500,
            backgroundColor: "#e6eaf8",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt='sdf'
          /> */}
        </div>
        <div
          style={{
            width: "70%",
            height: 500,
            backgroundColor: "#E6EAF8",
            borderRadius: 10,
            paddingLeft: 150,
          }}
        >
          {/* <div
            style={{
              marginTop: "10%",
              width: "70%",
              height: "10%",
              // backgroundColor: "#1296ba",
              borderRadius: 10,
            }}
          >
            <h1
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              Current User Name :
            </h1>
          </div> */}

          {/* <TextField
            style={{
              marginTop: "5%",
              width: "70%",
              borderRadius: 70,
            }}
            id='outlined-basic'
            label=''
            variant='outlined'
            value={username}
            disabled
          /> */}

          <div
            style={{
              marginTop: "10%",
              width: "70%",
              height: "10%",
              // backgroundColor: "#1296ba",
              borderRadius: 10,
              alignContent: "center",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontsize: "10%",
              }}
            >
              {" "}
              Others Platform URL :
            </h1>
          </div>

          <TextField
            style={{
              marginTop: "5%",
              width: "70%",
              borderRadius: 70,
            }}
            id='outlined-basic'
            label='lalala'
            variant='outlined'
            name='youtube'
            value={this.state.youtube}
            onChange={this.onChange}
            
          />

          <Button
          onClick={this.onClick}
            variant='contained'
            color='primary'
            style={{
              marginTop: "5%",
              width: "70%",

              borderRadius: 70,
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
export default OthersPlatform;
