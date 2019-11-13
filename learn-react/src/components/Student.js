import React from 'react';

export default function Student (props) {
  console.log(props);
  const {address, name, birth, email} = props;
  return (
  <li>address:{address}name:{name}birth:{birth}email:{email}</li>
    )

}





