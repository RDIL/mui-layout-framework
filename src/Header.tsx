import * as React from "react"
import AppBar, { AppBarProps } from "@material-ui/core/AppBar"
import Toolbar, { ToolbarProps } from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

interface HeaderItem {
    component: React.ReactElement
    edge: "start" | "end"
}

interface Props {
    elements: HeaderItem[]
    appBarProps?: AppBarProps
    toolbarProps?: ToolbarProps
}

type ElementList = React.ReactElement[]

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    pushRight: {
        flexGrow: 1,
    },
}))

const Header = (props: Props) => {
    const classes = useStyles()

    let startItems: ElementList = []
    let endItems: ElementList = []

    props.elements.forEach((element) => {
        if (element.edge === "end") {
            endItems.push(element.component)
        } else {
            startItems.push(element.component)
        }
    })

    return (
        <header className={classes.root}>
            <AppBar {...props.appBarProps}>
                <Toolbar {...props.toolbarProps}>
                    <div className="start-items">
                        {startItems}
                        <div className={classes.pushRight} />
                    </div>
                    <div className="flex-end-items">{endItems}</div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
