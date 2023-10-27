import SelectComponent from "./InputFieldComponent"
import RightSideForm from "./RightSideForm"
import ImportFileComponent from "./ImportFileComponent"

const FormElementsComponent = () => {
  return (
    <div className="flex space-x-8  ">
      {/* Left Side: Select Component */}
      <div className="flex-grow ">
        {/* This is where your SelectComponent would be used */}
        <SelectComponent />
        {/* Import File Component */}
        <ImportFileComponent />
      </div>

      {/* Right Side: Option buttons and accompanying text */}
      <div className="flex space-x-4 max-w-full">
        {/* First option */}
        <RightSideForm />
      </div>
    </div>
  )
}

export default FormElementsComponent
