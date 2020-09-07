import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"

import Layout from "../components/Layout"
import layoutStyles from "./404.module.scss"

function NotFound() {
  return (
    <Layout>
      <Head title="404" />
      <div className={layoutStyles.notFound}>
        <h1>Page Not Found</h1>
        <p>
          <Link to="/">Head Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
