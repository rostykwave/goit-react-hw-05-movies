import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { FormError } from './FormError';

export const MoviesForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
  };
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      validationSchema={yup.object().shape({
        query: yup.string().min(1).max(13).required(),
      })}
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
