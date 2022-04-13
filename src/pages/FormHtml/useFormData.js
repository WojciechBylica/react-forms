import { useRef, useState } from 'react'
import useInput from './useInput'

const useFormData = () => {
  const [name, handleNameChange, , handleTrimNameAndRemoveDot] = useInput('')
  const [nameAlert, setNameAlert] = useState(true)
  const nameRef = useRef()

  const [mail, handleMailChange, , handleTrimMailAndRemoveDot] = useInput('')
  const [mailAlert, setMailAlert] = useState(true)
  const mailRef = useRef()

  const [description, handleDescriptionChange, handleTrimDescription] =
    useInput('')

  const [descriptionAlert, setDescriptionAlert] = useState(true)
  const descriptionRef = useRef()

  const [gender, handleGenderSelect] = useInput('')
  const [genderAlert, setGenderAlert] = useState(true)
  const genderRef = useRef()

  const [statutAproval, setStatutAproval] = useState(false)
  const [statutAprovalAlert, setStatutAprovalAlert] = useState(true)
  const statutAprovalRef = useRef()

  const formArray = [
    {
      input: name,
      handleInputChange: handleNameChange,
      handleTrimInput: handleTrimNameAndRemoveDot,
      inputAlert: nameAlert,
      inputRef: nameRef,
      setInputAlert: setNameAlert,
    },
    {
      input: mail,
      handleInputChange: handleMailChange,
      handleTrimInput: handleTrimMailAndRemoveDot,
      inputAlert: mailAlert,
      inputRef: mailRef,
      setInputAlert: setMailAlert,
    },
    {
      input: description,
      handleInputChange: handleDescriptionChange,
      handleTrimInput: handleTrimDescription,
      inputAlert: descriptionAlert,
      inputRef: descriptionRef,
      setInputAlert: setDescriptionAlert,
    },
    {
      input: gender,
      handleInputSelect: handleGenderSelect,
      inputAlert: genderAlert,
      inputRef: genderRef,
      setInputAlert: setGenderAlert,
    },
    {
      input: statutAproval,
      setStatutAproval,
      inputAlert: statutAprovalAlert,
      inputRef: statutAprovalRef,
      setInputAlert: setStatutAprovalAlert,
    },
  ]

  return formArray
}

export default useFormData
