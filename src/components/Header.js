import React from "react"
import { Link  ,graphql, useStaticQuery} from "gatsby"

import headerStyles from "./Header.module.scss"

function Header() {
  const { header, navItem, title, navList, activeNavItem } = headerStyles

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
    <header className={header}>
      <h1>
        <Link className={title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav className={navList}>
        <li>
          <Link className={navItem} activeClassName={activeNavItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={navItem} activeClassName={activeNavItem} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={navItem}
            activeClassName={activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </nav>
    </header>
  )
}

export default Header
