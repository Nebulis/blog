import styled from "@emotion/styled"

const Alert = styled.div`
  margin-top: 1rem;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`

export const SuccessAlert = styled(Alert)`
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
`
export const ErrorAlert = styled(Alert)`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`
