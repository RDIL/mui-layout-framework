import React from "react"
import { Story, Meta } from "@storybook/react"

import { StoryPageMain, StructuredMuiPage } from "./Page"

export default {
    title: "Examples/Page Component",
    component: StoryPageMain,
} as Meta

export const SimplePage = ((() => <StoryPageMain />) as Story).bind({})
export const StructuredMUIPage = ((() => <StructuredMuiPage />) as Story).bind(
    {}
)
