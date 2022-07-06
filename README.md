# **Monolight**

A lightweight react UI library for monolithic platforms

- Architect mode for quick visualization of layout errors
- Minimal but essential settings for component personalization

<p>&nbsp;</p>

# Components

## Monolight

Monolight is a Mandatory component that handle architectMode and all of the context Parameter. 

> Wrap your main App with Monolight.Provider, you can also wrap any single Component to give it a custom environment.

> Wrapping main App is Mandatory!

```javascript
import { Monolight } from "@react-layout/monolight";

return <Monolight.Provider value={{
      column: 12,
      architectMode: {
        show: true,
        color: '#5c95ff'
      },
      breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1500
      }
  }}>
    // Your App here
</Monolight.Provider>
```

| Parameter | Values | Default | Mandatory |
|-----------|--------|:----:| :----: |
| column    | number | 12   |    ❌     
| architectMode | Object | 0|    ❌
| breakpoints   | Object |{}|    ❌

<p>&nbsp;</p>
<p>&nbsp;</p>

## Container

Container is a component that helps you to contains your content. You can spread your content using **fluid** Parameter.

```javascript
import { Container } from "@react-layout/monolight";

return <Container fluid={false}>
    // Your content here
</Container>
```

| Parameter | Values | Default | Mandatory |
|-----------|--------|:----:| :----: |
| fluid     | bool   | false   |    ❌     
| padding   | number | 0       |    ❌
| style     | Object | {}      |    ❌
| className | String | ""      |    ❌

<p>&nbsp;</p>
<p>&nbsp;</p>

## Row

Row is a component that helps you to organize your content horizontally.

```javascript
import { Container, Row } from "@react-layout/monolight";

return <Container>
    <Row fluid={false}>
        // Your content here
    </Row>
</Container>
```

| Parameter | Values | Default | Mandatory |
|-----------|--------|:----:| :----: |
| gutter    | **string** or **number** | 'none'   |    ❌     
| animate   | bool   | false   |    ❌
| column    | number | 12      |    ❌
| style     | Object | {}      |    ❌
| className | String | ""      |    ❌

<p>&nbsp;</p>
<p>&nbsp;</p>

## Col

Col is a component that helps you to organize your content vertically.

```javascript
import { Container, Row, Col } from "@react-layout/monolight";

return <Container>
    <Row fluid={false}>
        <Col>
            // Your content here
        </Col>
    </Row>
</Container>
```

| Parameter | Values | Default | Mandatory |
|-----------|--------|:----:| :----: |
| gutter    | **string** or **number** | 'none'   |    ❌     
| animate   | bool   | false   |    ❌
| column    | number | 12      |    ❌
| span      | number[] | [12, 12, 12, 12, 12]      |    ❌
| offset   | number[] | [0, 0, 0, 0, 0]      |    ❌
| style     | Object | {}      |    ❌
| className | String | ""      |    ❌

<p>&nbsp;</p>
<p>&nbsp;</p>

## MediaSwitch

MediaSwitch is a component that helps you to manage showing and hiding your components quickly based on screen width. With this component you can easily switch through multiples components and multiples breakpoints. 

If you have to change Layout of any Page, Form, CustomComponent based on screen width to make it "Layout Reponsive", use this super-light component 

> MediaSwitch breakpoints is indipendent by context breakpoints

> Components and Breakpoints lengths must be the same

```javascript
import { MediaSwitch } from "@react-layout/monolight";

return <MediaSwitch childrens={[
                          <div>This will be shown on Mobile</div>,
                          <div>This will be shown on Ipad</div>,
                          <div>This will be shown on Desktop</div>
                        ]}
                        breakpoints={[
                          500, 800, 9999
                        ]}/>
```

> TODO: last child should be displayed forever

| Parameter | Values | Default | Mandatory |
|-----------|--------|:----:| :----: |
| childrens  | React.ReactNode | [] | ✅
| breakpoints | number[] | [] | ✅