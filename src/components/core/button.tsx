import { ButtonHTMLAttributes, FunctionComponent } from "react"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { darkButtonColor, darkButtonHoverColor, primaryDarkColor } from "./variables"

const style = css`
  &.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
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

export const LolButton = styled(Button)`
  &.btn:hover {
    color: #fff;
    background-color: #296e59; // 15% darker than normal color
    border-color: #296e59; // 15% darker than normal color
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
