import React from "react"
import { Link , graphql } from "gatsby"
import Info from "../components/Home/Info"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundHeader from "../components/Globals/BackgroundHeader";

const IndexPage = ({data}) => (
  
  <Layout>
  {
    console.log(data)
    
  }
    <SEO title="Home" />
    <BackgroundHeader
    img={data.img.childImageSharp.fluid}
    title="Regular Joe's "
    styleClass="about-background"
  />
  <Info title="About Us"/>
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default IndexPage
