import React from "react"
import "./page.css"
import Page from "../Page"
import { makeStyles } from "@material-ui/core/styles"
import {
    AppBar,
    Divider,
    Toolbar,
    Typography,
    Table,
    TableContainer,
    Paper,
    TableCell,
    TableRow,
    TableHead,
} from "@material-ui/core"

export const StoryPageMain = () => (
    <Page title={"Storybook Example Content Page"}>
        <h2>Pages in Storybook</h2>
        <p>This is a page. It is essentially a wrapper for your content.</p>
        <p>Just put whatever you want in here.</p>
    </Page>
)

const useStructuredPageStyles = makeStyles(() => ({
    flex: {
        flexGrow: 1,
    },
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        margin: 0,
    },
}))

export const StructuredMuiPage = () => {
    const classes = useStructuredPageStyles()

    return (
        <Page
            title={"Timmmy's Animal Rescue"}
            header={
                <AppBar>
                    <Toolbar className={classes.flex}>
                        <Typography variant="h6">
                            Timmy's Animal Rescue
                        </Typography>
                    </Toolbar>
                </AppBar>
            }
            footer={
                <TableContainer component={Paper} className={classes.footer}>
                    <Table aria-label="footer">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Contact Us</TableCell>
                                <TableCell align="center">
                                    Adopt Today
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            }
        >
            {/*
                The header is flex, so the first p tag won't be visible, the header will be over it.
                This is just a small workaround:
            */}
            <br />
            <br />
            <p>
                This page demonstrates what a real page can actually look like
                with a header and footer.
            </p>
            <div>
                <Typography variant="h3">Timmy's Animal Rescue</Typography>
                <Typography variant="subtitle1">
                    Providing dogs and cats with new homes since last week.
                </Typography>
            </div>
            <Divider />
            <div>
                <Typography variant="h4">Adopt Now</Typography>
                We have dogs and cats in need of your help, so call us whenever
                at +1-800-001-0001!
            </div>
        </Page>
    )
}
