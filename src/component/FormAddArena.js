import React, { Component } from 'react';

class FormAddArena extends Component {
    constructor () {
        super();
        this.state = {
          arena: '',
          descripcion: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault(); //para que no se recargue la pantalla
        this.props.onAddArena(this.state);
        this.setState({
            arena: '',
            descripcion: ''
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
                  name="arena"
                  className="form-control"
                  value={this.state.arena}
                  onChange={this.handleInputChange}
                  placeholder="Nombre de la arena"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="descripcion"
                  className="form-control"
                  value={this.state.descripcion}
                  onChange={this.handleInputChange}
                  placeholder="Descripcion"
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

export default FormAddArena;