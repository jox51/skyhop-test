import { useState } from "react"

import { useDropzone } from "react-dropzone"

import { AiFillFileText } from "react-icons/ai"
import { BsFileEarmarkImage } from "react-icons/bs"

const ImportFileComponent = () => {
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0])
      simulateUpload(acceptedFiles[0])
    },
    noClick: true
  })

  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const simulateUpload = (file) => {
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
          className="border-dotted border-2 border-gray-500 p-6 rounded-md cursor-pointer flex flex-col items-center justify-center"
          style={{ borderStyle: "dashed" }}
        >
          <input {...getInputProps()} />
          <AiFillFileText size={24} className="mb-4 text-yellow-500" />
          <p className="mb-4 text-blue-900 text-xs">
            Drag & Drop Here or <span className="font-semibold">Browse</span>
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={open}
            className="w-lg my-2 bg-blue-900 text-white p-2 rounded-md"
          >
            Upload Manifest
          </button>
        </div>
      </div>
      {/* Display file upload progress */}
      {file && (
        <div className="mt-4">
          <div className="my-3 h-[1px] bg-gray-400"></div>
          <div className="flex items-center mb-2">
            <BsFileEarmarkImage className="mr-2 text-yellow-500" />
            <span className="text-xs">{file.name}</span>
          </div>
          <progress
            value={progress}
            max="100"
            className="w-full h-2 bg-yellow-500"
          ></progress>
          <div className="my-3 h-[1px] bg-gray-400"></div>
        </div>
      )}
    </>
  )
}

export default ImportFileComponent
