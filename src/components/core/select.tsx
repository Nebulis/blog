import React from "react"
import { primaryColor, primaryDarkColor } from "./variables"
import { css } from "@emotion/react"
import ReactSelect, { OptionTypeBase } from "react-select"
import { useCustomTranslation } from "../../i18n-hook"

export const Select: React.FunctionComponent<{
  options: OptionTypeBase[]
  onChange: (value: string | undefined) => void
  placeholder: string
}> = ({ options, onChange, placeholder }) => {
  return (
    <ReactSelect
      css={css`
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        .react-select__control:hover {
          border-color: ${primaryDarkColor};
          box-shadow: 0 0 0 1px ${primaryDarkColor};
        }
      `}
      isSearchable={false}
      styles={{
        clearIndicator: (provided) => ({
          ...provided,
          cursor: "pointer",
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          cursor: "pointer",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? primaryColor : provided.backgroundColor,
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: "white",
          marginTop: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          zIndex: 10, // no idea why but it fixes opacity issue ..
        }),
        control: (provided, state) => {
          return {
            ...provided,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: state.isFocused ? `0 0 0 1px ${primaryDarkColor}` : provided.boxShadow,
            borderColor: state.isFocused ? primaryDarkColor : provided.boxShadow,
          }
        },
      }}
      className="react-select-container mb3"
      classNamePrefix="react-select"
      isClearable
      placeholder={placeholder}
      onChange={(element) => (element ? onChange(element.value) : onChange(undefined))}
      options={options}
    />
  )
}

export const SelectByContinent: React.FunctionComponent<{
  continents: string[]
  onChange: (value: string | undefined) => void
}> = ({ continents, onChange }) => {
  const { i18n, t } = useCustomTranslation("common")
  return (
    <Select
      options={continents.map((continent) => ({ value: continent, label: t(`common:continent.${continent}`) }))}
      onChange={onChange}
      placeholder={i18n.languageCode === "fr" ? "Sélectionner un continent" : "Select a continent"}
    />
  )
}
