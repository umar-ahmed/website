import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RenderList from "../components/RenderList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Daily Renders</h1>
    <p>
      I am trying to learn Blender one day at a time. In the past, I have
      learned and used Cinema 4D and did a project called{" "}
      <a href="http://trekkerdesigns.weebly.com/everydays">Everydays</a> with a
      friend of mine. Together, we did 161 days of daily renders. It was a lot
      of work, but also very rewarding to see how much we grew over the course
      of time.
    </p>
    <p>
      My goal is to do something similar with Blender and I will post my
      progress here:
    </p>
    <RenderList />
  </Layout>
)

export default IndexPage
