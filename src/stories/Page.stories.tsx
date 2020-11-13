import React from "react"
import { Story, Meta } from "@storybook/react"

import { StoryPageMain } from "./Page"

export default {
    title: "Example/Page Component",
    component: StoryPageMain,
} as Meta

export const SimplePage = ((() => <StoryPageMain />) as Story).bind({})
