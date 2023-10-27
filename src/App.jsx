import { FaWindowClose } from "react-icons/fa"
import FormElementsComponent from "./components/FormElementsComponent"

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md w-[80vw] p-6 mx-auto  ">
        <nav className="w-lg h-20 px-6 py-2">
          <FaWindowClose className="text-blue-900 w-8 h-8 filter" />
        </nav>
        <section className="flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold text-blue-900 mb-2.5 border-b border-gray-400 pb-2">
              Document Upload
            </h1>
          </div>
        </section>
        <section className="flex justify-center gap-5  ">
          <div className="w-full max-w-2xl">
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
            <button className="bg-blue-900 w-48 text-white px-4 py-2 rounded-md">
              Continue Import
            </button>
            <button className="border-2 w-48 border-yellow-500 text-yellow-500 px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
