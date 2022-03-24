import "./App.css";
import { Component } from "react/cjs/react.development";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: "Monter1",
          id: "mon1",
        },
        {
          name: "Monter2",
          id: "mon1",
        },
        {
          name: "Monter3",
          id: "mon1",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
