import { ButtonHTMLAttributes, FunctionComponent } from "react"
import React from "react"
import { css } from "@emotion/core"

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
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
  &.btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
  }
  &.btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }
  &.btn-dark:disabled {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }
  &.btn:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`
export const Button: FunctionComponent<ButtonHTMLAttributes<any>> = ({ children, className = "", ...props }) => {
  return (
    <button type="button" className={`btn btn-dark ${className}`} css={style} {...props}>
      {children}
    </button>
  )
}
