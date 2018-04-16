import React from 'react'
import { Box, Field } from '@hackclub/design-system'
import { withFormik } from 'formik'
import Action from 'components/Action'
import yup from 'yup'
// import airtable from 'airtable'

const Form = Box.withComponent('form').extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);

    div:last-child {
      grid-column: span 2;
    }
  }

  label {
    margin-bottom: 0;
  }
`

const Submit = Action.withComponent('input').extend.attrs({
  type: 'submit'
})``

const statusMessage = status =>
  status
    ? {
        success: 'Success!',
        error: 'Something went wrong 🚨'
      }[status]
    : 'Sign up for Hack Happy Valley'
const statusColor = status =>
  status === 'success' || status === 'error' ? status.toString() : 'primary'
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  status
}) => {
  const field = name => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] && errors[name]
  })
  return (
    <Form data-netlify={true} method="POST" name="register">
      <Field label="Name" placeholder="Hack Hackett" {...field('name')} />
      <Field
        label="Email"
        type="email"
        placeholder="me@gmail.com"
        {...field('email')}
      />
      <Field
        label="Gender (optional)"
        placeholder="Female/male/non-binary/etc"
        {...field('gender')}
      />
      <Field label="Age" placeholder={17} type="number" {...field('age')} />
      <Field
        label="Grade"
        placeholder="State College Area High School"
        type="select"
        {...field('grade')}
      >
        <option value={null}>Select one…</option>
        <option value={8}>8th grade</option>
        <option value={9}>9th grade</option>
        <option value={10}>10th grade</option>
        <option value={11}>11th grade</option>
        <option value={12}>12th grade</option>
      </Field>
      <Field
        label="School"
        placeholder="State College Area High School"
        {...field('school')}
      />
      <Field
        label="Emergency phone number"
        type="tel"
        placeholder="(555) 555-5555"
        {...field('emergency')}
      />
      <Field
        label="T-shirt size"
        placeholder="XS/S/M/L/XL"
        type="select"
        {...field('shirtSize')}
      >
        <option value={null}>Select one…</option>
        {['XS', 'S', 'M', 'L', 'XL'].map(n => (
          <option key={n} value={n} children={n} />
        ))}
      </Field>
      <Box align="center" mt={3}>
        <Submit
          // disabled={isSubmitting}
          // onClick={handleSubmit}
          value={statusMessage(status)}
          bg={statusColor(status)}
          f={2}
        />
      </Box>
    </Form>
  )
}
const RegistrationForm = withFormik({
  mapPropsToValues: ({ params }) => ({ ...params }),
  validationSchema: yup.object().shape({
    name: yup.string().required('required'),
    email: yup
      .string()
      .email()
      .required('required'),
    school: yup.string().required('required'),
    grade: yup.string().required('required'),
    age: yup
      .number()
      .required('required')
      .min(14, 'must be 14+')
      .max(19, 'must be 19 or lower'),
    shirtSize: yup
      .string()
      .oneOf(['XS', 'S', 'M', 'L', 'XL'], 'must be XS, S, M, L, or XL'),
    emergency: yup.string().required('required')
  }),
  enableReinitialize: true,
  handleSubmit: (data, { setSubmitting, setStatus, resetForm }) => {
    console.log(data)
  },
  displayName: 'RegistrationForm'
})(InnerForm)
export default RegistrationForm
