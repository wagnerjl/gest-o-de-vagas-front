import React, { Component } from 'react'

export default class Consulta extends Component {

  componentDidMount() {
    console.log('**************** Start')
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input type="file" className="form-control-file" id="board" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
