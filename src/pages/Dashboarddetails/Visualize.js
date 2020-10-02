import React, { Component } from "react";
import $ from "jquery";
import io from "socket.io-client";

class Visualize extends Component {
  componentDidMount() {
    this.VisualizeFunc();
  }
  VisualizeFunc = () => {
    var socket = io.connect("http://localhost:4001");
    socket.on("stream", function (image) {
      $("#play").attr("src", image);
      $("#logger").text(image);
    });
  };
  render() {
    return (
      <React.Fragment style={{ textAlign: "center" }}>
        <h1>THIS IS THE VIEWER SIDE</h1>

        <div style={{ textAlign: "center", display: "flex" }}>
          <img
            style={{
              width: "50%",
              height: 400,
              // backgroundColor: "#D6EAF8",
              borderRadius: 20,
              borderWidth: 20,
              paddingRight: 20,
              justifyContent: "center",
              overflowY: "hidden",
              overflowY: "scroll",
            }}
            id='play'
          />

          <div
            style={{
              width: "50%",
              height: 400,
              backgroundColor: "#D6EAF8",
              borderRadius: 20,
              borderWidth: 20,
              justifyContent: "center",
              overflowY: "hidden",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                width: "100%",

                borderRadius: 20,
                borderWidth: 20,
              }}
            >
              <h1> Any query ? Type and send ! </h1>
            </div>

            <div style={{ paddingTop: 30 }}>
              <textarea
                style={{
                  width: "60%",
                  height: 200,
                  borderRadius: 20,
                }}
              ></textarea>
              <br></br>
              <button
                style={{
                  marginTop: 30,
                  width: "20%",
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#1296ba",
                }}
              >
                {" "}
                submit !
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Visualize;
