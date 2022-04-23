import React from "react";
import PropTypes from "prop-types";


const ProfileComponent = props => {
    console.log(props)
    const styleImage= {textTransform:"uppercase"}
    return <div>
              <h1 style={styleImage}> {props.title} </h1>
        <div>{props.children}</div>
        <p>Name: {props.info.name}</p>
        <p>Bio: {props.info.bio} </p>
        <p>Job: {props.info.job}</p>
        <br/>
        <a href="/" onClick={props.handleClick} style={{color:"white",padding:10 ,background: "tomato", textDecoration:"unset"}}>Your name?</a>

    </div>
};
ProfileComponent.defaultProps = {
    title: "About me"
};
   ProfileComponent.propTypes = {
    name: PropTypes.string
  };
export default ProfileComponent;