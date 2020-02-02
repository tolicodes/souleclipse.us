import * as React from "react"
import { Formik, FormikActions, FormikProps, Form } from "formik"
import * as Yup from "yup"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from "./style"

interface MyFormValues {
  firstName: string
  email: string
  message: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  message: Yup.string().required("Required"),
})

const Contact: React.SFC<{}> = () => {
  return (
    <ContactWrapper>
      <ContactPageTitle>
        <h2>Contact</h2>
        <p>If you want to contact us email us at toli@tolicodes.com</p>
      </ContactPageTitle>
    </ContactWrapper>
  )
}

export default Contact
