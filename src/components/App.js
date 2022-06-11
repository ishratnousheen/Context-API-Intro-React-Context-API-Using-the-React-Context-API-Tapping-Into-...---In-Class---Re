import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';
const UserContext = React.createContext();

const App = () => {

  return (
    <div id="main">
      <UserContext.Provider value={{ name: "Newton", age: 3 }}>
    </UserContext.Provider>   
    <UserProfile />
      
    </div>
  )
}


export default App;
export {UserContext}
