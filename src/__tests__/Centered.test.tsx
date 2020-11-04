import React from "react"
import Centered from "../Centered"
import renderer from "react-test-renderer"
import { Button, Divider, Typography } from "@material-ui/core"

describe("Centered component", () => {
    it("can render the component with empty children", () => {
        const tree = renderer
            .create(
                <Centered>
                    <div />
                </Centered>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("can render the component with advanced children", () => {
        const tree = renderer
            .create(
                <Centered>
                    <div>
                        <Typography variant="h1">Hello!</Typography>
                        <Divider />
                        <Button variant="contained">Press Me</Button>
                    </div>
                </Centered>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
