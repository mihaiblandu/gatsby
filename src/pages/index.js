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
    styleClass="default-background"
  />
  <Info title="Our story"/>
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default IndexPage
