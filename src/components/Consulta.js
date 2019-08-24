import React, { Component } from 'react'
import VisionClient from '../Utils/VisionClient'

export default class Consulta extends Component {

 componentDidMount() {
   VisionClient.quickStart()
 }

  render() {
    return (
      <div class="container">
            <div class="row col-md-12 text-center">
                <div class="alert alert-primary col-md-4 center-block" role="alert">
                    Valide se o carro possui permissão
                </div>
            </div>
            <div>
                <div style="background-color: #57636e; width: 300px; height: 300px; border-radius: 25px;">
                    <div style="padding-top: 40%; text-align: center; vertical-align: center; vertical-align: middle; color: white; font-size: 30px">TIRAR FOTO</div>
                </div>
            </div>
        </div>
    )
  }
}
