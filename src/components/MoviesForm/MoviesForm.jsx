import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, Field } from 'formik';

import * as yup from 'yup';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

const schema = yup.object().shape({
  query: yup.string().min(1).max(13).required(),
});

const initialValues = {
  query: '',
};

export const MoviesForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    // resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          <Field
            type="text"
            name="query"
            title="Query may contain only letters, apostrophe, dash and spaces"
          />
          <FormError name="query" />
        </label>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

MoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
