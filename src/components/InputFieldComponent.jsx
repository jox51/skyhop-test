import { BsChevronDown } from "react-icons/bs"
import { useState } from "react"

const SelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <div className="flex flex-col relative py-4 max-w-md mx-auto">
      <select
        id="countries"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className={`appearance-none bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          selectedValue ? "text-gray-900" : "text-blue-900 font-semibold"
        }`}
      >
        <option value="">Select Import Name:</option>
        <option value="US">Pilots</option>
        <option value="CA">Stewardists</option>
        <option value="FR">Passengers</option>
        <option value="DE">All Hands</option>
      </select>

      <div className="mt-3 w-1/2 h-[1px] bg-gray-400"></div>

      <div className="absolute inset-y-0 right-0 flex items-center mx-6 mb-2 pointer-events-none">
        <BsChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  )
}

export default SelectComponent
