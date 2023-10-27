import SelectComponent from "./InputFieldComponent"
import RightSideForm from "./RightSideForm"
import ImportFileComponent from "./ImportFileComponent"

const FormElementsComponent = () => {
  return (
    <div className="flex space-x-8  ">
      {/* Left Side: Select Component */}
      <div className="flex-grow ">
        {/* This is where your SelectComponent would be used */}
        <div className="flex-grow">
          {/* This is where your SelectComponent would be used */}
          <div className="-ml-20">
            <SelectComponent />
          </div>

          {/* Import File Component */}
          <div className="-ml-20">
            <ImportFileComponent />
          </div>
        </div>
      </div>

      {/* Right Side: Option buttons and accompanying text */}
      <div className="flex mt-3 space-x-4 max-w-full">
        {/* First option */}
        <RightSideForm />
      </div>
    </div>
  )
}

export default FormElementsComponent
