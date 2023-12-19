import './CustomSwitch.css'

function CustomSwitch({ handleSwitch, switchStatus }) {

  function onSwitchChange(){
    const customSwitch = document.querySelector('.shorts').checked;
    handleSwitch(customSwitch)
    // console.log(customSwitch)
  }

  return (
    <label className="switch">
      <input onChange={onSwitchChange} className='shorts' id='shorts' name='shorts' type="checkbox" checked={switchStatus}/>
      <span className="slider round"></span>
    </label>
  )
}

export default CustomSwitch