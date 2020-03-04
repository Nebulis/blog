import React, { FunctionComponent, InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react"
import { css } from "@emotion/core"
import { IconType } from "react-icons"
import { backgroundPrimaryColor, primaryColor } from "./variables"

const style = css`
  text-align: left;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  .form-control {
    overflow: visible;
    display: block;
    width: 100%;
    padding: 2px 13.5px;
    line-height: 1.5;
    color: #495057;
    background-color: ${backgroundPrimaryColor};
    background-clip: padding-box;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: ${primaryColor};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(212, 234, 220, 0.25);
  }
  label {
    margin: 0;
    font-size: 0.7rem;
    color: #495057;
    font-weight: bold;
  }
`

const iconStyle = css`
  &.active svg {
    color: ${primaryColor};
  }
  svg {
    color: #aeabae;
    position: absolute;
    top: 7px;
    left: 10px;
    width: 15px;
  }
  .form-control {
    padding-left: 30px;
  }
`
export const Input: FunctionComponent<InputHTMLAttributes<any> & {
  Icon?: IconType
  label?: string
  inputClassName?: string
}> = ({ Icon, ...props }) => {
  if (!props.id) {
    console.warn("Please add an id into this component")
  }
  const [state, setState] = useState("")

  return (
    <div className={`form-group ${state === "in" ? "active" : ""} ${props.className}`} css={[style, Icon && iconStyle]}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="relative">
        {Icon && <Icon />}

        <input
          {...props}
          className={`form-control ${props.inputClassName}`}
          onFocus={() => setState("in")}
          onBlur={() => setState("out")}
        />
      </div>
    </div>
  )
}

export const Textarea: FunctionComponent<TextareaHTMLAttributes<any> & {
  Icon?: IconType
  label?: string
}> = ({ Icon, ...props }) => {
  if (!props.id) {
    console.warn("Please add an id into this component")
  }
  const [state, setState] = useState("")
  return (
    <div className={`form-group ${state === "in" ? "active" : ""}`} css={[style, Icon && iconStyle]}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="relative">
        {Icon && <Icon />}
        <textarea
          rows={3}
          {...props}
          className={`form-control ${props.className}`}
          onFocus={() => setState("in")}
          onBlur={() => setState("out")}
        />
      </div>
    </div>
  )
}

const checkboxStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;

  input {
    box-sizing: border-box;
    padding: 0;
  }
  .form-check-input,
  .form-check-label {
    cursor: pointer;
  }
  .form-check-input {
    margin-right: 5px;
  }
`
export const Checkbox: FunctionComponent<InputHTMLAttributes<any> & { label: string }> = ({ label, ...props }) => {
  return (
    <div css={checkboxStyle}>
      <input className="form-check-input" type="checkbox" {...props} />
      <label className="form-check-label" htmlFor={props.id}>
        {label}
      </label>
    </div>
  )
}
