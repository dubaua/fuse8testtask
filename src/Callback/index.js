import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Wrapper, Unskew, Title, P } from "../CommonStyles";
import { Form, StyledText, StyledTextArea, StyledSelect } from "react-form";
import "./react-form.css";

const Button = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: rgb(3, 193, 222);
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 0.07em;
  cursor: pointer;
`;

const reasonOptions = [
  {
    label: "Reason 1",
    value: "reason-1"
  },
  {
    label: "Reason 2",
    value: "reason-2"
  },
  {
    label: "Reason 3",
    value: "reason-3"
  }
];

class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  errorValidator = values => {
    const validateFirstName = firstName => {
      return !firstName ? "First name is required." : null;
    };
    const validateLastName = lastName => {
      return !lastName ? "Last name is required." : null;
    };
    const validateEmail = email => {
      return !email ? "Email is required." : null;
    };
    const validatePhone = phone => {
      return !phone ? "Phone is required." : null;
    };
    const validateReason = reason => {
      return !reason ? "Reason is required." : null;
    };
    return {
      firstName: validateFirstName(values.firstName),
      lastName: validateLastName(values.lastName),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone),
      reason: validateReason(values.reason)
    };
  };

  warningValidator = values => {
    const validateFirstName = firstName => {
      return firstName && firstName.length < 2
        ? "First name must be longer than 2 characters."
        : null;
    };
    const validateLastName = lastName => {
      return lastName && lastName.length < 2
        ? "Last name must be longer than 2 characters."
        : null;
    };
    return {
      firstName: validateFirstName(values.firstName),
      lastName: validateLastName(values.lastName),
      email: null,
      phone: null,
      reason: null
    };
  };

  successValidator = (values, errors) => {
    const validateFirstName = () => {
      return !errors.firstName ? "Nice name!" : null;
    };
    const validateLastName = () => {
      return !errors.lastName ? "Your last name is sick!" : null;
    };
    const validateEmail = () => {
      return !errors.email ? "Your email is awesome!" : null;
    };
    const validatePhone = () => {
      return !errors.phone ? "Your last name is cool!" : null;
    };
    const validateReason = () => {
      return !errors.reason ? "Thanks for entering reason." : null;
    };
    return {
      firstName: validateFirstName(values.firstName),
      lastName: validateLastName(values.lastName),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone),
      reason: validateReason(values.reason)
    };
  };
  render() {
    return (
      <Wrapper>
        <Unskew>
          <Title>Request a Call back</Title>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet
            sit amet elit ac consequat. Aenean ornare rutrum.
          </P>
        </Unskew>

        <Form
          dontValidateOnMount
          validateError={this.errorValidator}
          validateWarning={this.warningValidator}
          validateSuccess={this.successValidator}
          onSubmit={submittedValues => this.setState({ submittedValues })}
        >
          {formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <Unskew>
                <Row>
                  <Col xs={6}>
                    <div className="react-form-field-wrapper">
                      <StyledText
                        field="firstName"
                        id="firstName"
                        placeholder="First name*"
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="react-form-field-wrapper">
                      <StyledText
                        field="lastName"
                        id="lastName"
                        placeholder="Last name*"
                      />
                    </div>
                  </Col>
                </Row>
              </Unskew>
              <Unskew>
                <Row>
                  <Col xs={6}>
                    <div className="react-form-field-wrapper">
                      <StyledText
                        field="phone"
                        id="phone"
                        placeholder="Telephone*"
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="react-form-field-wrapper">
                      <StyledText
                        field="email"
                        id="email"
                        placeholder="Email address*"
                      />
                    </div>
                  </Col>
                </Row>
              </Unskew>
              <Unskew>
                <div className="react-form-field-wrapper">
                  <StyledSelect
                    field="reason"
                    id="reason"
                    placeholder="Select a Reason"
                    options={reasonOptions}
                  />
                </div>
              </Unskew>
              <Unskew>
                <div className="react-form-field-wrapper">
                  <StyledTextArea
                    field="message"
                    id="message"
                    placeholder="Message"
                  />
                </div>
              </Unskew>
              <Unskew>
                <Button type="submit" className="mb-4 btn btn-primary">
                  Send Call Back
                </Button>
              </Unskew>
            </form>
          )}
        </Form>
      </Wrapper>
    );
  }
}

export default Callback;
