import React, { Component } from "react";
import $ from "jquery";
import io from "socket.io-client";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";

var queries = [
  "What is your name  and what is reg no sdsdfsdfsdfdsfdss sedfdsfs sdfdsf",
  "Explain the detils ",
  "What are you doing ?",
  "What is your name ",
  "Explain the detils ",
  "What are you doing ?",
  "What are you doing ?",
  "What is your name ",
  "Explain the detils ",
  "What are you doing ?",
  "What are you doing ?",
  "What is your name ",
  "Explain the detils ",
  "What are you doing ?",
];

class StartVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries,
    };
  }

  componentDidMount() {
    this.streamFunc();
  }
  setArray(key) {
    var newA = this.state.queries;
    delete newA[key];
    this.setState({ queries: newA });
    console.log(this.state.queries);
  }
  printQuestions() {
    return this.state.queries.map((data, key) => {
      return (
        <div>
          <div
            style={{
              display: "flex",
              marginLeft: "25%",
              width: "50%",
              backgroundColor: "orange",
              borderRadius: 10,
              padding: 10,
              marginBottom: 15,
            }}
          >
            <div style={{ width: "10%", textAlign: "center" }}>
              {" "}
              <p style={{ textAlign: "left" }}>
                <StarIcon style={{ color: "black" }}></StarIcon>
              </p>{" "}
            </div>

            <div style={{ width: "80%", marginLeft: 10, marginTop: 5 }}>
              <p style={{ textAlign: "left" }}>{data}</p>
            </div>
            <div style={{ width: "30%", textAlign: "center" }}>
              {" "}
              <p style={{ textAlign: "left" }}>
                <IconButton
                  onClick={() => {
                    this.setArray(key);
                  }}
                >
                  <DeleteForeverIcon
                    style={{ color: "red", height: "100%" }}
                  ></DeleteForeverIcon>
                </IconButton>
              </p>{" "}
            </div>
          </div>
        </div>
      );
    });
  }
  streamFunc = () => {
    const socket = io.connect("http://localhost:4001");
    var video = document.getElementById("video");
    var canvas = document.getElementById("preview");
    var context = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 700;

    context.width = canvas.width;
    context.height = canvas.height;

    // var socket = io();

    function message(msg) {
      $("#logger").text(msg);
    }

    function loadCamera(stream) {
      try {
        video.srcObject = stream;
      } catch (error) {
        video.srcObject = stream;
      }
      message("Camera connected");
    }

    function loadFail() {
      message("Camera not connected");
    }

    function viewVideo(video, context) {
      context.drawImage(video, 0, 0, context.width, context.height);
      socket.emit("stream", canvas.toDataURL("image/webp"));
    }

    $(function () {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msgGetUserMedia;

      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          { video: true, audio: true },
          loadCamera,
          loadFail
        );
      }

      setInterval(function () {
        viewVideo(video, context);
      }, 5);
    });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Your Stream has Started ! </h1>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div style={{ width: "50%", borderRadius: 20, paddingRight: 20 }}>
              <video
                src=''
                id='video'
                style={{ width: "100%", height: "100%" }}
                autoplay='false'
              ></video>
            </div>

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
                <h1> Most Important Queries ! </h1>
              </div>
              <div style={{}}>{this.printQuestions()}</div>
            </div>
          </div>
          <canvas style={{ display: "none" }} id='preview'></canvas>
          <div id='logger'> this is the div </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StartVideo;
