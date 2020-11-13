import React from "react"
import "./page.css"
import Page from "../Page"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

export const StoryPageMain = () => (
    <Page title={"Storybook Example Content Page"}>
        <h2>Pages in Storybook</h2>
        <p>
            This is a page. It is essentially a wrapper for your content.
        </p>
        <p>
            Just put whatever you want in here.
        </p>
    </Page>
)

const useStructuredPageStyles = makeStyles(() => ({
    flex: {
        flexGrow: 1,
    },
}))

export const StructuredMuiPage = () => {
    const styles = useStructuredPageStyles()

    return (
        <Page
            title={"Timmmy's Animal Rescue"}
            header={
                <AppBar>
                    <Toolbar className={styles.flex}>
                        <Typography variant="h6">Timmy's Animal Rescue</Typography>
                    </Toolbar>
                </AppBar>
            }
        >
            <p>
                This page uses a header and footer, built off Material-UI!
            </p>
        </Page>
    )
}
