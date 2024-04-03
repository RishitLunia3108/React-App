import React from 'react';
import HelloWorld from './HelloWorld';
import ChildCounter from './ChildCounter';
import Hooks from './reducer';
import MyApp from './context';

// function App() {
//   return (
//     <div className="App">
//       <HelloWorld />
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <ChildCounter />
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <Hooks />
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <MyApp />
    </div>
  );
}


// function Welcome(props) {
//   return <h1>Hello, {props.name} {props.surname}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" surname="Khan"/>
//       <Welcome name="Cahal" surname="Jewis"/>
//       <Welcome name="Edite" surname="Stark"/>
//     </div>
//   );
// }

export default App;
