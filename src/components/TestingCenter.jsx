import { useState } from "react"
import PropTypes from "prop-types"
import ClockIcon from "./ClockIcon"

import { BsChevronDown } from "react-icons/bs"
// // import { AiOutlineClockCircle } from "react-icons/ai"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faClock } from "@fortawesome/free-regular-svg-icons"

const TestingCenter = ({ title }) => {
  const [selectedValue, setSelectedValue] = useState("")

  return (
    <section className="flex items-center  ">
      <h4 className="text-sm mr-8 ">{title}</h4>
      <div className="flex flex-col relative p-4 max-w-md mx-auto">
        <select
          id="testingCenter1"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className={`appearance-none  bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            selectedValue ? "text-gray-900" : "text-blue-900 font-semibold"
          }`}
        >
          <option value="">Select Client</option>
          <option value="US">AA</option>
          <option value="CA">UA</option>
          <option value="FR">Jetblue</option>
          <option value="DE">Southwest</option>
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center mx-6  pointer-events-none">
          <BsChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <ClockIcon />
    </section>
  )
}
TestingCenter.propTypes = {
  title: PropTypes.string.isRequired
}
export default TestingCenter
