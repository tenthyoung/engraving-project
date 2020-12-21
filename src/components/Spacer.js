import React from "react"
import { Box } from "theme-ui"

const Spacer = ({ space = "t.xs", direction = "vertical", sx }) => {
  return (
    <Box
      mt={direction === "vertical" ? space : 0}
      mr={direction === "horizontal" ? space : 0}
      sx={sx}
    />
  )
}

export default Spacer
