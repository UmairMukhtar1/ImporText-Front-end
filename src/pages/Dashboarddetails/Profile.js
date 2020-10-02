import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// code to get image and username from local storage ...
if (localStorage.getItem("localstoragedata")) {
  var user = JSON.parse(localStorage.getItem("localstoragedata"));
  var image = user.User.profilephoto;
  var username = user.User.username;
}
class Profile extends Component {
  constructor() {
    super();

    this.state = {};
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
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt='sdf'
          />
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
          <div
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
          </div>

          <TextField
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
          />

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
              Your Recovery Email :
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
            disabled
          />

          <Button
            variant='contained'
            color='primary'
            style={{
              marginTop: "5%",
              width: "70%",

              borderRadius: 70,
            }}
          >
            CHANGE PASSWORD
          </Button>
        </div>
      </div>
    );
  }
}
export default Profile;
