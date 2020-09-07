import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./Footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Copyright 2020. All Right reserved. Created by{" "}
        {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
