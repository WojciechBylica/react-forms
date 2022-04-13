import { useEffect, useState } from 'react'
import { Error } from '../../components'
import useFormData from './useFormData'
import './style.css'

const FormHtml = () => {
  const formArray = useFormData()
  const statutAproval = formArray[4].input
  const setStatutAproval = formArray[4].setStatutAproval
  const statutAprovalRef = formArray[4].inputRef

  const inputs = Object.keys(formArray).map((number) => formArray[number].input)

  const handleStatutAproval = ({ target }) => setStatutAproval(target.checked)

  const setAllertOff = (inputRef, setInputAlertOff) => {
    inputRef.current.style.border = '1px solid black'
    setInputAlertOff(true)
  }

  const setAllertOn = (inputRef, setInputAlertOff) => {
    if (inputRef !== statutAprovalRef) {
      inputRef.current.style.borderBottom = '2px solid red'
    }
    setInputAlertOff(false)
  }

  const handleAlertOff = (inputName, inputAlert, inputRef, setInputAlert) => {
    if (
      ((inputName === statutAproval && !!inputName) || inputName?.length > 0) &&
      !inputAlert
    ) {
      setAllertOff(inputRef, setInputAlert)
    }
  }

  useEffect(() => {
    formArray.map(({ input, inputAlert, inputRef, setInputAlert }) => {
      handleAlertOff(input, inputAlert, inputRef, setInputAlert)
    })
  }, inputs)

  const handleSubmit = (event) => {
    event.preventDefault()
    formArray.map((field) => {
      if (!field.input) {
        setAllertOn(field.inputRef, field.setInputAlert)
      } else {
        setAllertOff(field.inputRef, field.setInputAlert)
      }
    })

    if (
      !formArray[0].input ||
      !formArray[1].input ||
      !formArray[2].input ||
      !formArray[3].input ||
      !formArray[4].input
    ) {
      return false
    }

    event.target.submit()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>wypełnij ponisze dane</h2>
      <label className="form__label">
        <input
          name="name"
          type="text"
          placeholder="imię"
          value={formArray[0].input}
          onChange={formArray[0].handleInputChange}
          onBlur={formArray[0].handleTrimInput}
          ref={formArray[0].inputRef}
          className="form__input"
        />
        <Error isHidden={formArray[0].inputAlert} />
      </label>
      <label className="form__label">
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formArray[1].input}
          onChange={formArray[1].handleInputChange}
          onBlur={formArray[1].handleTrimInput}
          ref={formArray[1].inputRef}
          className="form__input"
        />
        <Error isHidden={formArray[1].inputAlert} />
      </label>
      <label className="form__label form__label--textArea">
        <textarea
          name="description"
          placeholder="biografia"
          value={formArray[2].input}
          onChange={formArray[2].handleInputChange}
          onBlur={formArray[2].handleTrimInput}
          ref={formArray[2].inputRef}
          className="form__textArea"
        />
        <Error isHidden={formArray[2].inputAlert} />
      </label>
      <label className="form__label">
        <select
          name="gender"
          value={formArray[3].input}
          onChange={formArray[3].handleInputSelect}
          ref={formArray[3].inputRef}
          className="form__select"
        >
          <option></option>
          <option>M</option>
          <option>K</option>
        </select>
        płeć
        <Error isHidden={formArray[3].inputAlert} />
      </label>
      <label className="form__label">
        <input
          name="accept"
          type="checkbox"
          checked={statutAproval}
          onChange={handleStatutAproval}
          ref={statutAprovalRef}
          className="form__checkbox"
        />
        akceptuję regulamin
        <Error isHidden={formArray[4].inputAlert} />
      </label>
      <button className="form__button">wyślij</button>
    </form>
  )
}

export default FormHtml
