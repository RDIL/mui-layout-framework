import React from "react"
import "./page.css"
import Page from "../Page"
import { makeStyles } from "@material-ui/core/styles"

export const StoryPageMain = () => (
    <Page title={"My Page"}>
        <article>
            <section>
                <h2>Pages in Storybook</h2>
                <p>
                    We recommend building UIs with a{" "}
                    <a
                        href="https://componentdriven.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>component-driven</strong>
                    </a>{" "}
                    process starting with atomic components and ending with
                    pages.
                </p>
                <p>
                    Get a guided tutorial on component-driven development at{" "}
                    <a
                        href="https://www.learnstorybook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Storybook
                    </a>
                    . Read more in the{" "}
                    <a
                        href="https://storybook.js.org/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        docs
                    </a>
                    .
                </p>
            </section>
        </article>
    </Page>
)

const useStructuredPageStyles = makeStyles(() => ({
    flex: {
        flexGrow: 1
    }
}))

export const StructuredMuiPage = () => {
    const styles = useStructuredPageStyles()

    return (
        <Page title={"Timmmy's Animal Rescue"}>
            <section>

            </section>
        </Page>
    )
}
