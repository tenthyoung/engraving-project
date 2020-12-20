import { Box, Text } from "theme-ui"
import React from "react"

const Header = () => (
  <header>
    <Box className="SuperBanner">
      <Text
        sx={{
          fontFamily: "Euclid Flex",
          fontSize: "0.8rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#F04F36",
        }}
      >
        Holiday Shipping: Order by Dec 23 and choose over night shipping for dec
        25 delivery!
      </Text>
    </Box>
  </header>
)

export default Header
