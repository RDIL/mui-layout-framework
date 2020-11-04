import * as React from "react"
import Grid from "@material-ui/core/Grid"

export interface CenteredProps {
    children: React.ReactElement
}

const Centered = (props: CenteredProps) => {
    return (
        <Grid container justify="center">
            {props.children}
        </Grid>
    )
}

export default Centered
