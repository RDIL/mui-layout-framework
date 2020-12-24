import * as React from "react"

export interface CenteredProps {
    children: React.ReactElement
}

export const MuiV4Centered = (props: CenteredProps) => {
    const Grid = require("@material-ui/core/Grid")

    return (
        <Grid container justify="center">
            {props.children}
        </Grid>
    )
}

const Centered = (props: CenteredProps) => {
    const Grid = require("@material-ui/core/Grid")

    return (
        <Grid container justifyContent="center">
            {props.children}
        </Grid>
    )
}

export default Centered
