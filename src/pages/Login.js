import React, {useRef} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";

const Component=observer(()=>{
  const {AuthStore}=useStores();
  const refInput=useRef()
  const bind=()=>{
    console.log(refInput.current.value);
    AuthStore.setUsername(refInput.current.value)
  }
  return (
    <>
      <h1>Login:{AuthStore.values.username}</h1>
      <input type="text" onChange={bind} ref={refInput}/>
    </>
  )
})
export default Component