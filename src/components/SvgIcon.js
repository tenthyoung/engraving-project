import React from "react"
import { Box } from "theme-ui"

export const SvgIcon = ({ iconPath, sx = {} }) => {
  return (
    <Box
      as="svg"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentcolor"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      sx={sx}
    >
      <path d={iconPath} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Box>
  )
}
