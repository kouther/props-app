import React from "react";
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';


function App() {

  const info = {
    name: 'jlassi kawther',
    bio: 'bio',
    job: 'developper'
  }
  console.log(info.name)

  const handleClick =() => {
    const fullname=info.name;
    alert('Your name is:'+ fullname);
};
  return (
    <div className="App">
      <ProfileComponent info={info} handleClick={handleClick}>
        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Avatar" style={{ borderRadius: "50%", width: "25%" }} />
      </ProfileComponent>
    </div>
  );
}

export default App;
