import * as React from "react"

export interface PageProps {
    title: string
    children: React.ReactElement | React.ReactElement[]
    header?: React.ReactElement
    footer?: React.ReactElement
    scripts?: string[]
}

/**
 * The component for a typical page.
 */
const Page = (props: PageProps) => {
    const { Helmet } = require("react-helmet")

    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                {props.scripts && props.scripts.length > 0
                    ? props.scripts.map((url) => (
                          <script defer src={url} key={url} />
                      ))
                    : null}
            </Helmet>
            <header>
                {props.header || null}
            </header>
            <main>{props.children}</main>
            <footer>
                {props.footer || null}
            </footer>
        </div>
    )
}

export default Page
