import React, { Component, useState, setState } from "react";
import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:4000/video/",
});

class UploadVideo extends React.Component {
  state = {
    title: "",
    description: "",
    file: "",
    imageURL: "",
    response: "",
    uploading: false,
  };

  config = {
    withCredentials: true,
  };

  changeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  clickHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", this.state.title);
    data.append("description", this.state.description);
    data.append("upload_preset", "Klopix");
    data.append("cloud_name", "dchsonpt8");
    data.append("file", this.state.file);

    const uploadVideo = async () => {
      await fetch("	https://api.cloudinary.com/v1_1/dchsonpt8/video/upload", {
        method: "post",
        body: data,
      })
        .then((response) => response.json())
        .then((videoData) => {
          console.log(videoData);
          this.setState({ imageURL: videoData.url });
        })
        .catch((error) => {
          console.log(error);
        });

      data.append("videoURL", this.state.imageURL);

      if (this.state.imageURL.length !== 0) {
        await base
          .post("/uploadVideo", data, this.config)
          .then((resp) => {
            this.setState({ uploading: false });
            this.setState({ response: resp });
          })
          .catch((err) => {
            this.setState({ uploading: false });
            this.setState({ response: err });
          });
      }
    };

    uploadVideo();
  };

  render() {
    return (
      <div>
        <div>
          <h2>Upload Video</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Video Title"
            name="video_title"
            value={this.state.title}
            onChange={(e) => this.handleInputChange(e, "title")}
          ></input>
          <input
            type="text"
            placeholder="Video Description"
            name="video_description"
            value={this.state.description}
            onChange={(e) => this.handleInputChange(e, "description")}
          ></input>
          <input
            type="file"
            name="file"
            id="video"
            accept="video/mp4"
            onChange={this.changeHandler}
          ></input>
          <button type="submit" onClick={this.clickHandler}>
            Upload
          </button>

          {this.state.uploading ? "Uploading" : "Uploaded"}
          {this.state.imageURL}
        </div>
      </div>
    );
  }
}

export default UploadVideo;
