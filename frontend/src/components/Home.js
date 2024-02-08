import React, { useContext } from 'react'
import contextAPI from '../context/ContextAPI';

const Home = () => {
  const contextProps = useContext(contextAPI);
  // console.log(contextProps);
  const {name} = contextProps;

  return (
    <div>
      This is home.
      {name}
    </div>
  )
}

export default Home
