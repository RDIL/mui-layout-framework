# mui-layout-framework

> A framework for creating consistent and appealing pages with Material-UI.

[![NPM](https://img.shields.io/npm/v/mui-layout-framework.svg)](https://www.npmjs.com/package/mui-layout-framework)

## Install

```bash
npm install --save mui-layout-framework
```

## Usage

Here is a basic example using the `Page` component:

```tsx
import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Page } from "mui-layout-framework"

const MyPageComponent = (props) => {
    return (
        <Page
            title="Timmy's Animal Rescue"
            content={
                <div>
                    <Typography variant="body1">
                        Welcome to Timmy's Animal Rescue!
                    </Typography>
                    <Button variant="outlined">Adopt a Pet</Button>
                </div>
            }
        />
    )
}

export default MyPageComponent
```

From this, you can notice a few things:

1. The title of the page is automatically handled. React Helmet is set up for you to save the hassle.
1. You can use any Material-UI components within the `content` prop.

Also, behind the scenes, a few things are done for quality-of-life:

1. Page-structuring tags have been used to aid screen readers - no need to remember the `<main>` tag anymore!
1. If you add other supported props, the componenets will work nicely together.

## License

MIT © [RDIL](https://github.com/RDIL)
