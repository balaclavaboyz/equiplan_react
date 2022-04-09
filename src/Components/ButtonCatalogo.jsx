import React from "react";
import Button from "react-bootstrap/Button";

const ButtonCatalogo = (props) => {
  return (
    <>
    <Button size="lg"  variant="outline-secondary" ><a style={{textDecoration:"none",color:"black"}} href={props.link}>Confira</a></Button>{' '}
    </>
  );
};

export default ButtonCatalogo;
