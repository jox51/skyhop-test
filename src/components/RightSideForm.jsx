import TestingCenter from "./TestingCenter"

const RightSideForm = () => {
  return (
    <div>
      <h2 className="text-blue-900 text-sm mb-4 font-semibold">
        Split schedule using social distancing?
      </h2>

      <div className="flex space-x-4">
        <div className="flex items-center space-x-2 ">
          <input type="radio" id="option1" name="option" className="h-4 w-4" />

          <label htmlFor="option1" className="text-gray-700 ">
            Yes
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input type="radio" id="option2" name="option" className="h-4 w-4 " />
          <label htmlFor="option2" className="text-gray-700">
            No
          </label>
        </div>
      </div>
      <div className="my-3 h-[1px] bg-gray-400"></div>
      <h2 className="text-blue-900 text-sm mb-4 font-semibold">
        Location Checking:
      </h2>
      <div className="text-green-500 text-sm">All Available!</div>
      <div className="my-3 h-[1px] bg-gray-400"></div>

      {/* Client Option Components */}
      <h2 className="text-blue-900 text-sm mb-4 font-semibold">Client:</h2>

      <div className="flex space-x-4 mb-6">
        <div className="flex items-center space-x-2 ">
          <input type="radio" id="client1" name="client1" className="h-4 w-4" />

          <label htmlFor="client1" className="text-gray-700 ">
            Single
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="client2"
            name="client1"
            className="h-4 w-4 "
          />
          <label htmlFor="client2" className="text-gray-700">
            Multiple
          </label>
        </div>
      </div>

      {/* Testing Center Select Components */}
      <TestingCenter title={"Testing Center 1"} />
      <TestingCenter title={"Testing Center 2"} />
      <TestingCenter title={"Testing Center 3"} />
      <TestingCenter title={"Testing Center 4"} />
    </div>
  )
}

export default RightSideForm
