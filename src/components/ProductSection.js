import React, { useState } from "react"

import { Box, Button, Divider, Flex, Input, Link, Image, Text } from "theme-ui"
import { Transition, animated } from "react-spring/renderprops"
import Spacer from "./Spacer"
import { SvgIcon } from "./SvgIcon"

const ProductSection = () => {
  const [isEngraving, setIsEngraving] = useState(false)
  const [isBlade, setIsBlade] = useState(true)
  const [engraving, setEngraving] = useState("")
  const [isDefaultEngraving, setIsDefaultEngraving] = useState(true)

  const handleEngravingInput = event => {
    setEngraving(event.target.value)
    setIsDefaultEngraving(false)
  }

  const handlePersonalizationClick = () => {
    if (isEngraving === false) {
      setIsEngraving(true)
      setEngraving("Clark Griswold")
    } else {
      setIsEngraving(false)
      setEngraving("")
      setIsDefaultEngraving(true)
    }
  }

  return (
    <Box sx={{ display: ["block", null, "flex"], position: "relative" }}>
      <Box
        className="ProductCarousal"
        sx={{
          width: ["full", null, "1/2"],
          maxWidth: ["none", null, 580],
          position: ["static", null, "fixed"],
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Image
            src="chef-knife.jpg"
            alt="8 inch chef knife"
            sx={{ width: "full" }}
          />

          <Text
            sx={{
              position: "absolute",
              height: "10%",
              width: "10%",
              top: "50%",
              left: "50%",
              transform: "skew(12deg) rotateZ(338deg)",
            }}
          >
            <Text
              as="span"
              sx={{
                fontFamily: "heading",
                fontSize: ["0.65rem", "sm", "0.6rem", "xs"],
                textAlign: "right",
                width: "xs",
                position: "absolute",
                top: ["-50%", null, "-30%"],
                right: "-48.9%",
              }}
            >
              {engraving}
            </Text>
          </Text>

          <Image
            src="dot-nav.png"
            alt="nav-carousal"
            sx={{ display: ["block", null, "none"], width: "full" }}
          />
        </Box>

        <Image
          mt={2}
          src="/carousal.png"
          alt="knife carousal"
          sx={{ display: ["none", null, "block"], width: "2/3" }}
        />
      </Box>

      <Box
        px="t.sm"
        py="t.xs"
        sx={{
          width: ["full", null, "1/2"],
          position: ["relative", null, "absolute"],
          top: 0,
          right: 0,
        }}
      >
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
          color="black"
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

        <Flex
          py={1}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text
            color="black"
            sx={{
              fontFamily: "heading",
              fontSize: "sm",
              fontWeight: "bold",
            }}
          >
            Color: Pomme Red
          </Text>

          <Image src="color-options.png" alt="color options" />
        </Flex>

        <Divider
          mx="auto"
          sx={{ width: "full", borderColor: "lightGray1", borderWidth: 1 }}
        />

        <Flex
          py={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Text
            color="black"
            sx={{
              fontFamily: "heading",
              fontSize: ["sm"],
              fontWeight: "bold",
            }}
          >
            Size
          </Text>

          <Text px={4} py={1} sx={{ border: "1px solid black" }}>
            8"
          </Text>
        </Flex>

        <Divider
          mx="auto"
          sx={{ width: "full", borderColor: "lightGray1", borderWidth: 1 }}
        />

        <Box
          py="t.xs"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: ["none", null, "t.xl"],
          }}
        >
          <Button
            variant="link"
            onClick={handlePersonalizationClick}
            color="black"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "1/2",
              fontFamily: "heading",
              fontSize: ["sm"],
              fontWeight: "bold",
              outline: "none !important",
              ":hover": { textDecoration: "none" },
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
            sx={{
              display: ["none", null, isEngraving ? "none" : "block"],
            }}
          />
        </Box>

        <Transition
          items={isEngraving}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: "auto" }}
          leave={{ opacity: 0, height: 0 }}
          config={{ mass: 10, tension: 280, friction: 100 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
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
                    sx={{
                      fontFamily: "heading",
                      fontSize: "xs",
                      fontWeight: "bold",
                    }}
                  >
                    Where would you like your engraving?
                  </Text>

                  <Spacer space={4} />

                  <Flex sx={{ justifyContent: "space-between" }}>
                    <Box
                      mr={1}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "10rem",
                        width: "full",
                      }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => setIsBlade(true)}
                        p={0}
                        sx={{
                          borderStyle: "solid",
                          borderWidth: "2px",
                          borderColor: isBlade ? "primary" : "transparent",
                          ":focus": { outlineColor: "primary" },
                        }}
                      >
                        <Image
                          src="blade-zoom.png"
                          alt="blade zoom"
                          sx={{
                            display: isEngraving ? "block" : "none",
                            height: "t.xl",
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

                    <Box
                      ml={1}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "10rem",
                        width: "full",
                      }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => setIsBlade(false)}
                        p={0}
                        sx={{
                          borderStyle: "solid",
                          borderWidth: "2px",
                          borderColor: isBlade ? "transparent" : "primary",
                          ":focus": { outlineColor: "primary" },
                        }}
                      >
                        <Image
                          src="handle-zoom.png"
                          alt="handle zoom"
                          sx={{
                            display: isEngraving ? "block" : "none",
                            height: "t.xl",
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
                    sx={{
                      fontFamily: "heading",
                      fontSize: "xs",
                      fontWeight: "bold",
                    }}
                  >
                    Where would you like your engraving?
                  </Text>

                  <Spacer space={3} />

                  <Box as="form" sx={{ position: "relative" }}>
                    <Input
                      onChange={handleEngravingInput}
                      type="text"
                      placeholder="Enter Engraving"
                      maxLength={25}
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
                      {isDefaultEngraving ? 25 : 25 - engraving.length}
                    </Box>
                  </Box>
                </Box>
              </animated.div>
            ))
          }
        </Transition>

        <Divider
          mt="t.xs"
          mx="auto"
          sx={{
            width: "full",
            borderColor: "lightGray1",
            borderWidth: 1,
          }}
        />

        <Text
          as="h3"
          mt="t.sm"
          sx={{ fontFamily: "heading", fontWeight: "bold", fontSize: "sm" }}
        >
          $109
        </Text>

        <Text as="p" mt="t.sm" sx={{ fontSize: "sm" }}>
          4 interest-free payments of $27.25.{" "}
          <Text as="span" sx={{ fontFamily: "heading", fontWeight: "bold" }}>
            Klarna.
          </Text>
          <Box as="br" />
          <Link href="#">Learn More</Link>
        </Text>

        <Flex
          my="t.sm"
          sx={{ alignItems: "center", height: "t.md", width: "full" }}
        >
          <Box
            mt="t.xs"
            sx={{ display: "flex", position: "relative", width: "3/12" }}
          >
            <Box
              as="select"
              variant="forms.inlineSelect"
              py="t.xs"
              sx={{
                display: "block",
                width: "100%",
                appearance: "none",
                fontSize: "inherit",
                lineHeight: "inherit",
                border: "1px solid",
                borderRight: "none",
                borderColor: "lightGray1",
                color: "inherit",
                bg: "transparent",
                cursor: "pointer",
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Box>

            <Flex
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                alignSelf: "center",
                pointerEvents: "none",
              }}
            >
              <svg
                width={"24"}
                height={"24"}
                viewBox="0 0 24 24"
                fill="currentcolor"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </Flex>
          </Box>

          <Button
            py={0}
            sx={{
              width: "full",
              height: "t.md",
              fontSize: "md",
              position: "relative",
              top: "0.4rem",
            }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProductSection
