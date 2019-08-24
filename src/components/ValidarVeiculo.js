import React, { Component } from 'react'
import Webcam from "react-webcam"
import Axios from 'axios'

import '../styles/cam.scss'

export default class SolicitarVaga extends Component {

  setRef = webcam => {
    this.webcam = webcam
  }

  checkin = () => {
    const imageSrc = this.webcam.getScreenshot()
    console.log(imageSrc)
    const host = "http://192.168.37.13"
    const port = 8080
    const route = 'recuperarPlaca'
    const getBoard = `${host}:${port}/${route}`

    Axios.post(getBoard, {
      imagem: imageSrc
    })
      .then(function (response) {
        console.log(response.body);
        const board = response.body.data;
        const hostCheckin = "http://192.168.37.13";
        const port = 3001;
        const route = '/checkin';
        const checkin = `${host}:${port}/${route}/${board}`;
        Axios.get(checkin)
            .then(function (response) {
              alert("Sucesso");
            })
            .catch(function (error) {
              alert("Placa nao autorizada");
            })

      })
      .catch(function (error) {
        console.log(error)
      })
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="container">
        <div className="row">
          <div className="box-cam col-sm-6 col-xs-12 align-items-center bg-light">
            <h3>
              Checkin veículo
              <small class="text-muted">Valide já seu veículo</small>
            </h3>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />
            <button onClick={this.checkin} className="btn btn-primary">Capture photo</button>
          </div>
        </div>
      </div>
    )
  }
}


