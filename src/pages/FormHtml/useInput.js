import { useState } from 'react'

const useInput = (initialState = '') => {
  const [formData, setFormData] = useState(initialState)

  const handleDataChange = ({ target }) => setFormData(target.value)

  const handleTrimData = () => {
    const trimmedData = formData.trim()

    setFormData(trimmedData)
  }

  const handleTrimDataAndRemoveDot = () => {
    const trimmedData = formData.trim()
    let validatedData
    if (trimmedData.charAt(trimmedData.length - 1) === '.') {
      validatedData = trimmedData.replace(
        trimmedData.charAt(trimmedData.length - 1),
        ''
      )
    } else {
      validatedData = trimmedData
    }
    setFormData(validatedData)
  }

  return [
    formData,
    handleDataChange,
    handleTrimData,
    handleTrimDataAndRemoveDot,
  ]
}

export default useInput
