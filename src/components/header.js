import React from "react"

import { Box, Container, Flex, Image, Link, Text } from "theme-ui"

const primaryNavLinks = [
  "Cookware & Bakeware",
  "Knives",
  "Tabletop",
  "Accessories",
  "Sets",
]
const secondaryNavLinks = ["Our Story", "Reviews", "Care", "Blog"]

const Header = () => (
  <Box
    as="header"
    sx={{
      fontFamily: "heading",
      width: "full",
      position: "fixed",
      top: 0,
      zIndex: 10,
    }}
  >
    <Box className="SuperBanner" bg="#efeae0" px="t.sm" py={2}>
      <Container>
        {" "}
        <Text
          color="primary"
          sx={{
            fontSize: ["0.5rem", "xs"],
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Holiday Shipping: Order by Dec 23 and choose over night shipping for
          dec 25 delivery!
        </Text>
      </Container>
    </Box>

    <Box className="SecondaryNav" bg="#151515" px="t.sm" py={1} color="white">
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        {secondaryNavLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href="#"
              pr={index !== secondaryNavLinks.length - 1 ? 2 : 0}
              sx={{
                fontWeight: "bold",
                fontSize: ["xs", null, "sm"],
                textDecoration: "none",
              }}
            >
              {link}
            </Link>
          )
        })}
      </Container>
    </Box>

    <Box
      as="nav"
      className="MainNav"
      bg="white"
      px="t.sm"
      py={4}
      color="black"
      sx={{ boxShadow: "0 0 0.625rem 0 rgba(0,0,0,.1)" }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Flex className="MainNav-left">
          <Link>
            <Image
              src="https://cdn.shopify.com/s/files/1/2131/5111/files/logo_5453b229-db7c-42fb-b335-b668dec658d9.png?v=1603216142"
              alt="made in logo"
              sx={{ width: "t.xl" }}
            />
          </Link>

          <Box
            ml="t.sm"
            sx={{
              display: ["none", null, null, "block"],
              position: "relative",
            }}
          >
            {primaryNavLinks.map((link, index) => (
              <Link
                key={index}
                mr="t.xs"
                sx={{
                  fontSize: "sm",
                  fontWeight: "bold",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Flex>

        <Box
          className="MainNav-right-items"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: ["t.xl", "t.2xl"],
          }}
        >
          <Link sx={{ display: ["none", "block"], cursor: "pointer" }}>
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
            >
              <path
                d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                fill="currentcolor"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </Box>
          </Link>

          <Link sx={{ cursor: "pointer" }}>
            <Image src="us-flag.jpg" alt="usa flag" />
          </Link>

          <Link
            sx={{
              display: ["none", "block"],
              cursor: "pointer",
              textDecoration: "none",
              fontSize: ["xs", null, "sm"],
              fontWeight: "bold",
              position: "relative",
              bottom: "0.25rem",
            }}
          >
            Sign In
          </Link>

          <Link sx={{ cursor: "pointer" }}>
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
            >
              <path
                d="M2.6,4.2h1.8l4.1,12.3c-1.2,0.4-1.8,1.7-1.4,2.8c0.4,1.2,1.7,1.8,2.8,1.4c0.9-0.3,1.5-1.2,1.5-2.1c0-0.4-0.1-0.8-0.3-1.1h5.6c-0.2,0.3-0.3,0.7-0.3,1.1c0,1.2,1,2.2,2.2,2.2c1.2,0,2.2-1,2.2-2.2c0-1.2-1-2.2-2.2-2.2h-9l-0.7-2.2h10.3c0.2,0,0.5-0.2,0.5-0.4L22,7.2c0.1-0.3-0.1-0.6-0.3-0.7c-0.1,0-0.1,0-0.2,0H6.3l-1-3C5.2,3.3,5,3.1,4.8,3.1H2.6C2.2,3.1,2,3.4,2,3.7C2,4,2.2,4.2,2.6,4.2z M18.7,17.5c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1C17.6,18,18.1,17.5,18.7,17.5z M9.2,17.5c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1l0,0C8.1,18,8.6,17.5,9.2,17.5z M20.7,7.6l-1.9,5.6H8.5L6.7,7.6H20.7z"
                fill="currentcolor"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </Box>
          </Link>

          <Link sx={{ cursor: "pointer" }}>
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
            >
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                fill="currentcolor"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  </Box>
)

export default Header
