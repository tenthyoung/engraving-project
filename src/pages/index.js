import React from "react"
import { Container } from "theme-ui"
import Layout from "../components/layout"
import ProductSection from "../components/ProductSection"
import SEO from "../components/seo"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <SEO title="8 Inch Chef Knife" />

          <ProductSection />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
