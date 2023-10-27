import { useState } from "react"

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <>
      <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          name="autoSaver"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-2 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-blue-900" : "bg-gray-200"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-5" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black">
          Toggle <span className="pl-1"> {isChecked ? "ON" : "OFF"} </span>
        </span>
      </label>
    </>
  )
}

export default ToggleButton
