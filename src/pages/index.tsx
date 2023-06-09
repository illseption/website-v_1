import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import "../styles/index.scss";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="home">
        <p>Hi, I'm Aman Pait.</p>
        <p>I'm a software engineer based in Mumbai, India.</p>
        <p>For my job, I work at <a className="link" href="https://www.issgovernance.com/market-intelligence" target="_blank">ISS</a>, building financial analysis tools that
          make decision making easier for companies and asset managers.
        </p>
        <p>On nights and weekends, I <Link className="link" to="/readingList">read</Link>, take <a className="link" href="https://instagram.com/illseption" target="_blank">photos</a>, and fuel my <a className="link" href="https://letterboxd.com/illseption/films/diary/" target="_blank">cinephilia</a>.</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Aman Pait</title>
