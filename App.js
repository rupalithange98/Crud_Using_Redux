import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
// import store from './Redux/store'
import store from './Store'

import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';






function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h2>To-Do App</h2>

      <AddTodo/>
      <TodoList/>

    </div>
    </Provider>
  );
}

export default App;
