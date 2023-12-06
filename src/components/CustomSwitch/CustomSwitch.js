import './CustomSwitch.css'

function CustomSwitch() {
  return (
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
    </label>
  )
}

export default CustomSwitch