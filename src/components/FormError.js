import React from 'react';

class FormError extends React.Component {
  render(){
  const style = { color: 'red' }
  return (
    <p style={style}>Error: Please fill out all inputs before you test out your roll. </p>
  )
}
}

export default FormError;
