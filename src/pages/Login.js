import React from "react";
import {observe} from "mobx-react";
import {useStores} from "../stores";

const Component=observe(()=>{
  const {AuthStore}=useStores();
  return (
    <>
      <h1>Login:{AuthStore}</h1>
    </>
  )
})
export default Component