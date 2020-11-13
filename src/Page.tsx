import * as React from "react"
import { Helmet } from "react-helmet"

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
            {props.header || null}
            <main>{props.children}</main>
            {props.footer || null}
        </div>
    )
}

export default Page
