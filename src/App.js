import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import { arenas } from './arenas.json';
import { tropas } from './tropas.json';

import FormAdd from './component/FormAdd';
import FormAddTropa from './component/FormAddTropa';
import FormAddArena from './component/FormAddArena';

class App extends Component {
  constructor(){
    super(); //Hereda todas las funcionalidad de REACT
    this.state = {
      todos,
      tropas,
      arenas
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleAddTropa = this.handleAddTropa.bind(this);
    this.handleAddArena = this.handleAddArena.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleAddTropa(tropa) {
    this.setState({
      tropas: [...this.state.tropas, tropa]
    })
  }

  handleAddArena(arena) {
    this.setState({
      arenas: [...this.state.arenas, arena]
    })
  }

  removeTodo(index){
    if (window.confirm('Está seguro que desea eliminarlo?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  removeTropa(index){
    if (window.confirm('Está seguro que desea eliminar la tropa seleccionada?')){
      this.setState({
        tropas: this.state.tropas.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  removeArena(index){
    if (window.confirm('Está seguro que desea eliminar la arena seleccionada?')){
      this.setState({
        arenas: this.state.arenas.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
     const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="col-mt-4">
            <div className="card-header">
              <a href=""><h3>{ todo.title }</h3></a>
              <p>{ todo.arena }</p>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todo.description }</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
              <button className="btn btn-success" onClick={this.removeTodo.bind(this, i)}>
                Editar mazo
              </button>
            </div>
          </div>
        </div>
      )
    })

    const tropas = this.state.tropas.map((tropa, j ) => {
      return (
        <div className="col-md-4" key={j}>
          <div className="col-mt-4">
            <div className="card-header">
              <h3>{ tropa.tropa }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { tropa.costo }
              </span>
            </div>
            <div className="card-body">
              <p>Clash Royale League</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTropa.bind(this, j)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })

    const arenas = this.state.arenas.map((arena, j ) => {
      return (
        <div className="col-md-4" key={j}>
          <div className="col-mt-4">
            <div className="card-header">
              <h3>{ arena.arena }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { arena.descripcion }
              </span>
            </div>
            <div className="card-body">
              <p>Arenas de Clash Royale</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeArena.bind(this, j)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
              Mazos disponibles
              <span className="badge badge-pill badge-light ml-2">
                { this.state.todos.length }
              </span>
          </a>  
        </nav>

        <div className="container">
          <div className="row mt-4">
            { todos }
          </div>
        </div>
        
        <nav className="navbar navbar-dark bg-primary">
          <h3 className="text-white">
              Tropas
          </h3>  
        </nav>
        <div className="container">
          <div className="row mt-4">
            { tropas }
          </div>
        </div>

        <nav className="navbar navbar-dark bg-primary">
          <h3 className="text-white">
              Arenas
          </h3>  
        </nav>
        <div className="container">
          <div className="row mt-4">
            { arenas }
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        
        <nav className="navbar navbar-dark bg-primary">
          <a href="" className="text-white">
              Añadir un nuevo ejercito
          </a>  
        </nav>
        < FormAdd onAddTodo={this.handleAddTodo} />

        <nav className="navbar navbar-dark bg-primary">
          <a href="" className="text-white">
              Añadir una nueva tropa
          </a>  
        </nav>
        < FormAddTropa onAddTropa={this.handleAddTropa } />

        <nav className="navbar navbar-dark bg-primary">
          <a href="" className="text-white">
              Añadir una nueva arena
          </a>  
        </nav>
        < FormAddArena onAddArena={this.handleAddArena} />

      </div>
    );
  }
}

export default App;
