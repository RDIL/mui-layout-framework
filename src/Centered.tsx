import * as React from "react"
import Grid from "@material-ui/core/Grid"

interface Props {
    children: React.ReactElement
}

const Centered = (props: Props) => {
    return (
        <Grid container justify="center">
            {props.children}
        </Grid>
    )
}

export default Centered
