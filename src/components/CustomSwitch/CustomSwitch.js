import './CustomSwitch.css'
import { useEffect } from 'react';

function CustomSwitch({ handleSwitch, switchStatus }) {
  
  useEffect(() => {
    const customSwitch = document.querySelector('#shorts').checked;
    console.log(switchStatus, customSwitch)
    // customSwitch.checked = switchStatus
  }, [switchStatus])

  function onSwitchChange(){
    const customSwitch = document.querySelector('#shorts').checked;
    handleSwitch(customSwitch)
  }

  return (
    <label className="switch">
      <input onChange={onSwitchChange} id='shorts' name='shorts' type="checkbox" checked={switchStatus}/>
      <span className="slider round"></span>
    </label>
  )
}

export default CustomSwitch