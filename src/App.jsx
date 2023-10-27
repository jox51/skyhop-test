import { FaWindowClose } from "react-icons/fa"
import FormElementsComponent from "./components/FormElementsComponent"

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-md w-[70vw] p-6 mx-auto  ">
        <nav className="w-lg h-20 px-6 py-2">
          <FaWindowClose className="text-blue-900 w-8 h-8" />
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
      </div>
    </div>
  )
}

export default App
