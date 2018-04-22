import React from "react"
import {
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap"

class LoginForm extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Email" />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>

            <FormGroup>
              <Button>Submit</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default LoginForm