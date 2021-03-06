import React, { ButtonHTMLAttributes, FunctionComponent } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { darkButtonColor, darkButtonHoverColor, primaryDarkColor, primaryDarkColor15Darker } from "./variables"

const style = css`
  &.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &.btn {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 2px 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  &.btn:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
  &:focus {
    outline: 0;
  }
`
export const Button: FunctionComponent<ButtonHTMLAttributes<any>> = ({ children, className = "", ...props }) => {
  return (
    <button type="button" className={`btn ${className}`} css={style} {...props}>
      {children}
    </button>
  )
}

export const DarkButton = styled(Button)`
  &.btn:hover {
    color: #fff;
    background-color: ${darkButtonHoverColor};
    border-color: #1d2124;
  }
  &.btn,
  &.btn:disabled {
    color: #fff;
    background-color: ${darkButtonColor};
    border-color: ${darkButtonColor};
  }
  &.btn:disabled {
    opacity: 0.65;
  }
`

export const PrimaryDarkButton = styled(Button)`
  &.btn:hover {
    background-color: ${primaryDarkColor15Darker};
    border-color: ${primaryDarkColor15Darker};
  }
  &.btn,
  &.btn:disabled {
    color: #fff;
    background-color: ${primaryDarkColor};
    border-color: ${primaryDarkColor};
  }
  &.btn:disabled {
    opacity: 0.65;
  }
`
