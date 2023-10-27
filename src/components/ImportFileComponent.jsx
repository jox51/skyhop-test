import { useState } from "react"

import { useDropzone } from "react-dropzone"

import { AiFillFileText } from "react-icons/ai"
import { BsFileEarmarkImage } from "react-icons/bs"
import ToggleButton from "./ToggleButton"
import ClockIcon from "./ClockIcon"

const ImportFileComponent = () => {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [fileSize, setFileSize] = useState("")

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0])
      setFileSize(formatBytes(acceptedFiles[0].size))
      simulateUpload(acceptedFiles[0])
    },
    noClick: true
  })

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const simulateUpload = () => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setProgress(progress)
      if (progress === 100) clearInterval(interval)
    }, 500)
  }

  return (
    <>
      <div className="border border-gray-400 p-4 rounded-md">
        <div
          {...getRootProps()}
          className=" border-dotted border-2 border-gray-300   p-6 rounded-md cursor-pointer flex flex-col items-center justify-center"
          style={{ borderStyle: "dashed" }} // Adjust the borderWidth here
        >
          <input {...getInputProps()} />
          <AiFillFileText size={24} className="mb-4 text-yellow-500" />
          <p className=" text-blue-900 text-xs">
            Drag & Drop Here or <span className="font-semibold">Browse</span>
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={open}
            className=" w-[15vw] my-2 text-sm bg-blue-900 text-white p-2 rounded-md"
          >
            Upload Manifest
          </button>
        </div>
      </div>
      {/* Display file upload progress */}
      {file && (
        <div className="mt-4">
          <div className="my-3 h-[1px] bg-gray-400"></div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs pl-6">{file.name}</span>
            <span className="text-xs ">{fileSize}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BsFileEarmarkImage className="text-yellow-500" />
            <div className="flex-grow w-full h-2 bg-gray-300 rounded">
              <div
                className="h-2 bg-yellow-500 rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="my-3 h-[1px] bg-gray-400"></div>
        </div>
      )}
      {/* Elapsed Data Checking */}
      <h2 className="text-blue-900 text-sm my-4 font-semibold">
        Elapsed Data Checking:
      </h2>
      <div className="text-green-500 text-sm">No Elapsed Dates!</div>
      <div className="my-3 h-[1px] bg-gray-400"></div>
      {/* Toggle Window */}
      <h2 className="text-blue-900 text-sm mb-4 font-semibold">
        Toggle Window:
      </h2>
      <div className="flex items-center">
        {" "}
        {/* Added flex container */}
        <ToggleButton />
        {/* Vertical line */}
        <span className="border-l border-black h-4 mx-2"></span>
        <ClockIcon />
        <span className="pl-2 text-sm">Select Tolerance Level</span>
      </div>
    </>
  )
}

export default ImportFileComponent
