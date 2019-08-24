import React, { Component } from 'react'
import { quickStart } from '../Utils/VisionClient'

export default class Consulta extends Component {

 componentDidMount() {
   quickStart();
 }

  render() {
    return (
      <div className="container">
            <div className="row col-md-12 text-center">
                <div className="alert alert-primary col-md-4 center-block" role="alert">
                    Valide se o carro possui permissão
                </div>
            </div>
        </div>
    )
  }
}
