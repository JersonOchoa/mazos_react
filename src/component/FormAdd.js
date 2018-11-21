import React, { Component } from 'react';
import { tropas } from '../tropas.json';
import Checkbox from './Checkbox';

class FormAdd extends Component {
    constructor () {
        super();
        this.state = {
          title: '',
          arena: '',
          description: '',
          priority: 'low',
          tropas:{
            tropa:'',
            costo:''
          }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault(); //para que no se recargue la pantalla
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            arena: '',
            description: '',
            priority: 'low',
            tropas:{
              tropa:'',
              costo:''
            }
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
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Titulo del mazo"
                  />
              </div>
              <div className="form-group">
                <select
                  name="arena"
                  className="form-control"
                  value={this.state.arena}
                  onChange={this.handleInputChange}
                  >
                  <option>Arena 1</option>
                  <option>Arena 2</option>
                  <option>Arena 3</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
    }
    
}

export default FormAdd;