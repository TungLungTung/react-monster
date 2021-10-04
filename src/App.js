import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  // Su dung classes
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }))
  }

  // Handle change fire khi ung dung dc call
  handleChange = (e) => {
    return this.setState({searchField : e.target.value});
  }

  render() {
    // Khai bao ke thua cai ben tran
    const { users, searchField } = this.state;
    // Code ben tren tuong tu
    // const users = this.state.users;
    // const searchField = this.state.searchField;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase()); // Search tieng gi cung dc  
    });

    return (
      <div className="App">
        <h1>Monster Rolorex</h1>
        <SearchBox
          placeholder = 'Search users'
          handleChange = {this.handleChange}
        />
        <CardList users={filteredUsers}>
        </CardList>
        {/* <header className="App-header">
        <p>{ this.state.name } is {this.state.age} years old</p>
        <button onClick={() => {return this.setState({ name: 'Huyen', age: 35})}}>Change info</button>
      </header> */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
