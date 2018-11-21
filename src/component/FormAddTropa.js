import React, { Component } from 'react';

class FormAddTropa extends Component {
    constructor () {
        super();
        this.state = {
          tropa: '',
          costo: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault(); //para que no se recargue la pantalla
        this.props.onAddTropa(this.state);
        this.setState({
            tropa: '',
            costo: ''
        });
    }
    
    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }
    
    render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="tropa"
                  className="form-control"
                  value={this.state.tropa}
                  onChange={this.handleInputChange}
                  placeholder="Nombre de la tropa"
                  />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="costo"
                  className="form-control"
                  value={this.state.costo}
                  onChange={this.handleInputChange}
                  placeholder="Costo en elixir"
                  />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        )
    }
    
}

export default FormAddTropa;