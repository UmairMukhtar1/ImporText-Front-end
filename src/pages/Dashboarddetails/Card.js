import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      streams: [
        {
          _id: "5f0bb501f4ca524a44d6ec6d",
          name: "AR MEETING ",
          authour: "zeeshan yasin",
          description: "Lecture",
          photo:
            "http://localhost:3000/puzzled-young-man-information-overload-vector-21228260.jpg",
          Type: "public",
          createdAt: "2020-07-13T01:12:33.338Z",
          updatedAt: "2020-07-13T01:12:33.338Z",
          __v: 0,
        },
        {
          _id: "5f0bb565f4ca524a44d6ec6e",
          name: "UNITY MEETING ",
          authour: "Ali Shair",
          description: "sdsdfsdfsdfsdfdsdsdfsf",
          photo:
            "http://localhost:3000/document-funnel-or-filter-logo-vector-4877567.jpg",
          Type: "private",
          createdAt: "2020-07-13T01:14:13.826Z",
          updatedAt: "2020-07-13T01:14:13.826Z",
          __v: 0,
        },
        {
          _id: "5f0bb5def4ca524a44d6ec6f",
          name: "HCI CLASS ",
          authour: "MAM GULMINA ",
          description: "LOL HAHAHH ",
          photo:
            "http://localhost:3000/puzzled-young-man-information-overload-vector-21228260.jpg",
          Type: "private",
          createdAt: "2020-07-13T01:16:14.111Z",
          updatedAt: "2020-07-13T01:16:14.111Z",
          __v: 0,
        },
        {
          _id: "5f0bb501f4ca524a44d6ec6d",
          name: "AR MEETING ",
          authour: "zeeshan yasin",
          description: "Lecture",
          photo:
            "http://localhost:3000/puzzled-young-man-information-overload-vector-21228260.jpg",
          Type: "public",
          createdAt: "2020-07-13T01:12:33.338Z",
          updatedAt: "2020-07-13T01:12:33.338Z",
          __v: 0,
        },
      ],
    };
  }

  //   componentDidMount() {
  //     fetch("http://localhost:3000/dashboard")
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ streams: data }));

  //     console.log(this.state.streams);
  //   }

  render() {
    // const classes = useStyles();

    const renderstreams = (stream, index) => {
      return (
        <Card

        //   className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Contemplative Reptile'
              height='50'
              image={stream.photo}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {stream.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size='small' color='primary'>
              Share
            </Button> */}
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
    };

    return (
      <div style={{ display: "flex" }}>
        {this.state.streams.map(renderstreams)}
      </div>
    );
  }
}
export default Cards;
