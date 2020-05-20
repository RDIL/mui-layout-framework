import * as React from "react"
import { Helmet } from "react-helmet"

interface Props {
    title: string
    content: React.ReactElement
    header?: React.ReactElement
    footer?: React.ReactElement
    scripts?: string[]
}

const Page = (props: Props) => {
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                {props.scripts && props.scripts.length >= 1
                    ? props.scripts.map((url) => (
                          <script defer src={url} key={url} />
                      ))
                    : null}
            </Helmet>
            {props.header || null}
            <main>{props.content}</main>
            {props.footer || null}
        </div>
    )
}

export default Page
