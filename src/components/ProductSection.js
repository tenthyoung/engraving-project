import React, { useState } from "react"

import { Box, Button, Divider, Flex, Input, Link, Image, Text } from "theme-ui"
import Spacer from "./Spacer"
import { SvgIcon } from "./SvgIcon"

const ProductSection = () => {
  const [isEngraving, setIsEngraving] = useState(false)
  const [isBlade, setIsBlade] = useState(true)
  const [characterCount, setCharacterCount] = useState(25)
  const [engraving, setEngraving] = useState("")

  const handleEngravingInput = event => {
    setEngraving(event.target.value)
    setCharacterCount(25 - engraving.length)
  }

  return (
    <Box sx={{ display: ["block", null, "flex"] }}>
      <Box className="ProductCarousal" sx={{ width: ["full", null, "1/2"] }}>
        <Box sx={{ position: "relative" }}>
          <Image
            src="chef-knife.jpg"
            alt="8 inch chef knife"
            sx={{ width: "full" }}
          />

          <Text
            as="span"
            sx={{
              fontSize: "xs",
              textAlign: "right",
              width: "sm",
              position: "absolute",
              top: "60%",
              right: "34%",
              transform: "skew(12deg) rotateZ(338deg)",
            }}
          >
            {engraving}
          </Text>
        </Box>
      </Box>

      <Box px="t.sm" py="t.xs" sx={{ width: ["full", null, "1/2"] }}>
        <Flex color="lightGray1" sx={{ fontSize: "sm", alignItems: "center" }}>
          <Link
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              ":hover": { textDecoration: "underline", color: "inherit" },
            }}
          >
            Home
          </Link>
          <SvgIcon iconPath="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          <Link
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              ":hover": { textDecoration: "underline", color: "inherit" },
            }}
          >
            Knives
          </Link>
          <SvgIcon iconPath="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          <Text color="darkGray2">8 Inch Chef Knife</Text>
        </Flex>

        <Text
          as="h1"
          mt="t.xs"
          sx={{
            fontFamily: "heading",
            fontSize: "2xl",
            letterSpacing: "tight",
          }}
        >
          8 Inch Chef Knife
        </Text>
        <Text
          as="p"
          color="gray"
          sx={{
            fontFamily: "heading",
            fontSize: "xs",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Best Seller
        </Text>

        <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
          <Image src="stars.png" alt="rating stars" mr={2} />

          <Text sx={{ fontSize: "xs" }}>1156 Reviews</Text>
        </Box>

        <Spacer />

        <Link
          sx={{
            fontFamily: "heading",
            fontSize: "sm",
            fontWeight: "bold",
            textDecoration: "none",
            borderBottom: "1px solid black",
            cursor: "pointer",
            ":hover": { color: "inherit" },
          }}
        >
          Made In Promise
        </Link>

        <Spacer space="t.sm" />

        <Divider
          mx="auto"
          sx={{ width: "full", borderColor: "lightGray1", borderWidth: 1 }}
        />

        <Spacer space="t.xs" />

        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text sx={{ fontFamily: "heading", fontWeight: "bold" }}>
            Color: Pomme Red
          </Text>

          <Image src="color-options.png" alt="color options" />
        </Flex>

        <Divider
          mx="auto"
          sx={{ width: "full", borderColor: "lightGray1", borderWidth: 1 }}
        />

        <Spacer space="t.xs" />

        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text sx={{ fontFamily: "heading", fontWeight: "bold" }}>Size</Text>

          <Text px={4} py={1} sx={{ border: "1px solid black" }}>
            8"
          </Text>
        </Flex>

        <Divider
          mx="auto"
          sx={{ width: "full", borderColor: "lightGray1", borderWidth: 1 }}
        />

        <Spacer space="t.xs" />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "t.xl",
          }}
        >
          <Button
            variant="link"
            onClick={() => setIsEngraving(!isEngraving)}
            color="black"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "1/2",
              fontFamily: "heading",
              fontSize: "md",
              fontWeight: "bold",
              outline: "none !important",
            }}
          >
            <Box
              bg={isEngraving ? "primary" : "none"}
              mr={2}
              sx={{
                display: "inline-block",
                width: "t.xs",
                height: "t.xs",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "gray",
              }}
            />
            Personalize It
          </Button>

          <Image
            src="blade-zoom.png"
            alt="blade zoom"
            sx={{ display: isEngraving ? "none" : "block" }}
          />
        </Box>

        <Box
          className="EngraveSection"
          bg="lightGray2"
          px="t.sm"
          py="t.xs"
          mt="t.xs"
          sx={{ display: isEngraving ? "block" : "none" }}
        >
          <Text
            as="h3"
            sx={{ fontFamily: "heading", fontSize: "xs", fontWeight: "bold" }}
          >
            Where would you like your engraving?
          </Text>

          <Spacer space={4} />

          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Box
              mr={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button
                variant="ghost"
                onClick={() => setIsBlade(true)}
                px={0}
                sx={{
                  borderStyle: "solid",
                  borderWidth: isBlade ? "2px" : 0,
                  borderColor: "primary",
                  ":focus": { outlineColor: "primary" },
                }}
              >
                <Image
                  src="blade-zoom.png"
                  alt="blade zoom"
                  sx={{ width: "full" }}
                />
              </Button>

              <Text
                as="span"
                sx={{
                  fontFamily: "heading",
                  fontSize: "xs",
                  fontWeight: "bold",
                }}
              >
                Blade: +$20
              </Text>
            </Box>

            <Box
              ml={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "full",
              }}
            >
              <Button
                variant="ghost"
                onClick={() => setIsBlade(false)}
                px={0}
                sx={{
                  borderStyle: "solid",
                  borderWidth: isBlade ? 0 : "2px",
                  borderColor: "primary",
                  ":focus": { outlineColor: "primary" },
                }}
              >
                <Image
                  src="handle-zoom.png"
                  alt="handle zoom"
                  sx={{
                    display: isEngraving ? "block" : "none",
                    width: "full",
                  }}
                />
              </Button>

              <Text
                as="span"
                sx={{
                  fontFamily: "heading",
                  fontSize: "xs",
                  fontWeight: "bold",
                }}
              >
                Handle: +$20
              </Text>
            </Box>
          </Flex>

          <Spacer space={4} />

          <Text
            as="h3"
            sx={{ fontFamily: "heading", fontSize: "xs", fontWeight: "bold" }}
          >
            Where would you like your engraving?
          </Text>

          <Spacer space={3} />

          <Box as="form" sx={{ position: "relative" }}>
            <Input
              onChange={handleEngravingInput}
              type="text"
              placeholder="Enter Engraving"
              bg="white"
              sx={{ ":focus": { outline: "none" } }}
            />

            <Box
              as="span"
              sx={{
                fontFamily: "heading",
                fontSize: "xs",
                fontWeight: "bold",
                position: "absolute",
                top: "0.85rem",
                right: "1rem",
              }}
            >
              {characterCount}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductSection
