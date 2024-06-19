import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ handleSetQuery }) => {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, options) => {
          handleSetQuery(values.query.trim());
          options.resetForm();
        }}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
};