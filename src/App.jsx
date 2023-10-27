import FormElementsComponent from "./components/FormElementsComponent"

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-md w-[80vw] p-6 mx-auto  ">
        <nav className="w-lg h-20 px-6 py-2">
          {/* <FaWindowClose className="text-blue-900 w-8 h-8 filter" /> */}
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            {/* Blue Rounded Square */}
            <rect
              x="5"
              y="5"
              width="40"
              height="40"
              rx="10"
              ry="10"
              fill="rgb(30 58 138)"
            />

            {/* White "X" in the middle */}
            <line
              x1="18"
              y1="18"
              x2="32"
              y2="32"
              stroke="white"
              strokeWidth="1.5"
            />
            <line
              x1="32"
              y1="18"
              x2="18"
              y2="32"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </nav>
        <section className="flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold text-blue-900 mb-8 border-b border-gray-400 pb-2">
              Document Upload
            </h1>
          </div>
        </section>
        <section className="flex justify-center gap-5  ">
          <div className="w-full max-w-2xl ">
            <FormElementsComponent />
          </div>
        </section>
        {/* Lower Buttons */}
        <section className="mt-6 text-center">
          {" "}
          {/* This is the new section */}
          <p className="mb-4 text-gray-700 font-bold">
            Data in the import file is correct. Please press continue to import.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-900 text-sm w-48 text-white px-4 py-2 rounded-md">
              Continue Import
            </button>
            <button className="border-2 w-48 text-sm border-yellow-500 text-yellow-500 px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
