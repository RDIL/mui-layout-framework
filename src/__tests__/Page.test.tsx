import React from "react"
import ReactDOM from "react-dom/server"
import Page from "../Page"
import Centered from "../Centered"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

describe("Page component", () => {
    it("can render a basic page", () => {
        expect(
            ReactDOM.renderToString(
                <Page title="Tim's Animal Rescue">
                    <Centered>
                        <Typography variant="h2">
                            Tim's Animal Rescue
                        </Typography>
                    </Centered>
                </Page>
            )
        ).toMatchSnapshot()
    })

    it("can render a page with scripts", () => {
        // right now we can't check that its actually been applied, so lets just pray it works
        expect(
            ReactDOM.renderToString(
                <Page
                    title="Tim's Animal Rescue"
                    scripts={["https://example.com/example.js"]}
                >
                    <Centered>
                        <Typography variant="h2">
                            Tim's Animal Rescue
                        </Typography>
                    </Centered>
                </Page>
            )
        ).toMatchSnapshot()
    })

    it("can render a page a header and footer", () => {
        const Header = () => (
            <AppBar>
                <Toolbar>
                    <Typography variant="h2">My Navbar</Typography>
                </Toolbar>
            </AppBar>
        )

        const Footer = () => (
            <div>
                <Typography>some footer</Typography>
            </div>
        )

        expect(
            ReactDOM.renderToString(
                <Page
                    title="Tim's Animal Rescue"
                    header={<Header />}
                    footer={<Footer />}
                >
                    <Typography>My cool content</Typography>
                </Page>
            )
        ).toMatchSnapshot()
    })
})
