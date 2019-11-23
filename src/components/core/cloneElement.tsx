// https://github.com/emotion-js/emotion/issues/1404
import { jsx } from "@emotion/core"

export const cloneElement = (element: any, props: any, ...children: any) =>
  jsx(
    element.props["__EMOTION_TYPE_PLEASE_DO_NOT_USE__"]
      ? element.props["__EMOTION_TYPE_PLEASE_DO_NOT_USE__"]
      : element.type,
    {
      key: element.key !== null ? element.key : undefined,
      ref: element.ref,
      ...element.props,
      ...props,
    },
    ...children
  )
