import React, { Component } from "react";
import friends from './assets/friends.jpg';
import './App.css';


class App extends Component {
  
  state = {

    dogs: [
      { name: "Túlio", breed: "Chiwawa", age: "5 years" }, 
      { name: "Pipoca", breed: "SRD", age: "9 years" },
      { name: "Spike", breed: "Pastor", age: "2 years" }
    ],
    cats: [
      { name: "Oliver", breed: "Angorá", age: "10 years" },
      { name: "Lola", breed: "Persa", age: "12 years" },
      { name: "Garfield", breed: "Malandro", age: "7 years" }
    ],
    list: []
  }
  
  dogList = () => {
    this.setState({
      list: this.state.dogs.map((item) => (
        <ul class="dogs">
          <li>Nome: {item.name}</li>
          <li>Raça: {item.breed}</li>
          <li>Idade: {item.age}</li>
        </ul>
      ))
    });
  };

  catList = () => {
    this.setState({
      list: this.state.cats.map((item) => (
        <ul class="cats">
          <li>Nome: {item.name}</li>
          <li>Raça: {item.breed}</li>
          <li>Idade: {item.age}</li>
        </ul>
      ))
    });
  };

  
  render(){
    return(

  <div>
    <img src={friends}/>
    <header>
      <h1>PetLove Adoption</h1>
      <nav>
        <ul class="nav">
          <li>Home</li>
          <li>Sobre</li>
          <li>Adote</li>
          <li>Seja Voluntário</li>
        </ul>
      </nav>
    </header>

      <main>
        <section class="aboutUs">
        <h2>Conheça a Petlove Adoption</h2>
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
         <button onClick={this.dogList}>Adote um cachorro</button>
         {this.state.list}
         <button onClick={this.catList}>Adote um gato</button>
        </section>
      </main>

      <footer>
        <div class="contato">
        <h3>amigão@email.com</h3>
        <h3>Rio de Janeiro - RJ</h3>
        <h3>Rua Rodrigues Alves, nº 5</h3>
        </div>
      <nav>
        <ul class="footerNav">
          <li>Início</li>
          <li>Seja Voluntário</li>
          <li>Contato</li>
        </ul>
      </nav>
      </footer> 

  </div>    
    )
  }
}

export default App;