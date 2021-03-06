import React, { Component } from 'react'
import coverTest from '../assets/images/cover_test.jpg'
import playbtn from '../assets/images/play_btn.png'
import stopbtn from "../assets/images/stop_btn.png";

import "./Styles/Playbar.css";
export class Playbar extends Component {
  state = {
    volumeLevel: 50,
  };
  handleMouseDown = (e) => {
    console.log(e.target.value);
    window.getSelection().removeAllRanges();
    console.log(e.target.value);
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      volumeLevel: e.target.value,
    });
  };

  handleClick = (e) => {
    let icon = document.querySelector(".Playbar-icon");
    console.log(this.props.streamSrc);
    
    let stream = document.querySelector("#stream");
    if (icon.src == playbtn) {
      icon.src = stopbtn;
      stream.play();
    } else {
      icon.src = playbtn;
      stream.pause();
    }
    console.log(icon.src);
  };

  render() {
    return (
      <div className="container-fluid Playbar">
        <audio
          style={{
            display: "none",
          }}
          id="stream"
          src={`${"https://tupanel.info:8746/stream"}`}
          controls
        ></audio>
        <div className="Playbar_info">
          <div className="Playbar_info-image">
            <img src={coverTest} alt="" />
          </div>
          <div className="Playbar_info-songname">
            <h6>Nombre de cancion</h6>
            <span>Nombre de artista</span>
          </div>
        </div>
        <div className="Playbar_controls">
          <div className="Playbar_controls-playbtn">
            <img
              className="Playbar-icon"
              src={playbtn}
              alt="icono de play"
              onClick={this.props.handleChangeRadio}
            />
          </div>
          <div className="Playbar_controls-volume">
            <input
              autoComplete="off"
              onMouseDown={this.handleMouseDown}
              onChange={this.handleChange}
              type="range"
              min="0"
              max="100"
            />
            <div id="etiqueta">{this.state.volumeLevel}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Playbar