import { mediumEnd, primaryColor, primaryColorWithOpacity, primaryDarkColor } from "../core/variables"
import { vietnamPrimaryColor, vietnamPrimaryColorDarker } from "../core/asia/vietnam/vietnam.colors"
import styled from "@emotion/styled"

export const MapAndTableContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  & > * {
    width: 50%;
  }

  @media (max-width: ${mediumEnd}) {
    flex-direction: column;
    & > svg,
    & > img {
      margin-bottom: calc(1.45rem / 2);
    }
    & > * {
      width: 100%;
    }
  }
`

export const MapAndTableTableContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  .menu-entry-opened .menu-label {
    background-color: #e5e7eb;
  }
  .menu-label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    height: 30px;
    background-color: #f7fafc;
    border-left: 3px solid ${primaryDarkColor};
    // border-left: 3px solid ${vietnamPrimaryColorDarker};
    border-bottom: 1px solid #e5e7eb;
    .menu-label-chevron {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
    }
  }
  .menu-content-container {
    margin-left: 0;
    padding-left: 0;
  }
  .schedules {
    // border-left: 3px solid ${vietnamPrimaryColor};
    border-left: 3px solid ${primaryColor};
    font-size: 0.8rem;
  }

  .schedule-entry:nth-of-type(even) {
    background-color: ${primaryColorWithOpacity(0.2)};
  }
  .schedule-entry:hover {
    background-color: ${primaryColorWithOpacity(0.3)};
  }
  .schedule-entry {
    height: 25px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
