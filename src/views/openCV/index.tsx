import React, { useEffect } from "react"

function ImageProcessingComponent() {
  useEffect(() => {
    const imgElement = document.getElementById("imageSrc") as HTMLImageElement
    const inputElement = document.getElementById(
      "fileInput"
    ) as HTMLInputElement

    inputElement.addEventListener(
      "change",
      (e) => {
        imgElement.src = URL.createObjectURL(
          (e.target as HTMLInputElement).files[0]
        )
      },
      false
    )

    imgElement.onload = function () {
      const src = cv.imread(imgElement)
      const dst = new cv.Mat()
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY)
      cv.imshow("canvasOutput", dst)
      src.delete()
      dst.delete()
    }
  }, [])

  return (
    <div>
      <h2>OpenCV.js Image Processing</h2>
      <input type="file" id="fileInput" name="file" />
      <img id="imageSrc" alt="No Image" />
      <canvas id="canvasOutput"></canvas>
    </div>
  )
}

export default ImageProcessingComponent
