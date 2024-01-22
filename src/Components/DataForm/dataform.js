import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, EditItem, UpdateItem } from "../../Redux/Actions/Action";
const DataForm = (props) => {
  const { add, flagSet, flagSetTwo, val, isEdit, SetisEdit } = props;
  const Items = useSelector((state) => state.CallState.CallData);
  const dispatch = useDispatch();
  const EditedValues = useSelector((state) => [...state.CallState.CallData]);
  const Singledata = useSelector((state) => state.CallState.EditItem);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    Area: Yup.string().required("Required"),
    number: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Required"),
        number: Yup.string()
          .required("Number is required")
          .matches(phoneRegExp, "Phone number is not valid")
          .min(10, "Number is too short")
          .max(10, "Number is too long"),
      })
    ),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    if (isEdit) {
      const productIndex = EditedValues.findIndex(
        (item) => item?.id === Singledata.id
      );
      const item = { ...EditedValues[productIndex] };
      const valOne = values.number.map((data, index) => {
        return {
          title: data.title,
          number: data.number,
        };
      });
      item.fname = values.fname;
      item.lname = values.lname;
      item.path = values.path;
      item.number = valOne;
      item.Area = values.Area;
      item.id = values.id;
      EditedValues[productIndex] = item;
      const otherNumbers = Items.filter((item) => {
        return item.number.every((obj) => {
          return values.number.every((ob) => {
            return ob.number !== obj.number;
          });
        });
      });
      const duplicatesOne = values.number.some((obj, index) => {
        return (
          values.number.findIndex(
            (item, i) => i !== index && item.number === obj.number
          ) !== -1
        );
      });
      let valueExits = otherNumbers.some((obj) => {
        return values.number.every((item) => {
          return obj.number.some((ob) => item.number === ob.number);
        });
      });
      if (valueExits || duplicatesOne === true) {
        alert("The Mobile number already exist");
      } else {
        dispatch(UpdateItem(EditedValues));
        dispatch(EditItem(values.fname));
        flagSet(false);
      }
      SetisEdit(false);
    } else {
      const duplicatesExist = values.number.some(
        (obj, index) =>
          values.number.findIndex(
            (item, i) => i !== index && item.number === obj.number
          ) !== -1
      );
      let valueExists = Items.some((obj) => {
        return values.number.some((item) =>
          obj.number.some((ob) => item.number === ob.number)
        );
      });
      if (valueExists || duplicatesExist === true) {
        alert("The Mobile number already exist");
      } else {
        dispatch(AddItem(values));
        dispatch(EditItem(values.fname));
        flagSetTwo(true);
        flagSet(false);
      }
    }
    setSubmitting(false);
  };
  return (
    <>
      <Card variant="outlined" className="card scroll-wrapper">
        <Formik
          onSubmit={handleSubmit}
          enableReinitialize={true}
          initialValues={val}
          validationSchema={validationSchema}
          render={({ values, isValid, isSubmitting }) => (
            <Form>
              <Grid container spacing={2} className="Form-head-contents">
                <Grid item xs={6}>
                  {add !== true && (
                    <Typography align="left">
                      <CloseIcon></CloseIcon>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Box align="right">
                    <Button
                      variant="contained"
                      type="submit"
                      className="btn btn-primary mt-4 mx-3"
                      disabled={!isValid || isSubmitting}
                    >
                      {isEdit ? "Save" : "Add"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Field name="fname">
                {({ field, form: { touched, errors } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="standard"
                    label="First Name"
                    className="form-wrapper"
                    error={touched.fname && Boolean(errors.fname)}
                    helperText={touched.fname && errors.fname}
                  />
                )}
              </Field>
              <Field name="lname">
                {({ field, form: { touched, errors } }) => (
                  <TextField
                    {...field}
                    id="lname"
                    label="Last Name"
                    variant="standard"
                    className="form-wrapper"
                    error={touched.lname && Boolean(errors.lname)}
                    helperText={touched.lname && errors.lname}
                  />
                )}
              </Field>
              <FieldArray
                name="number"
                validateOnChange={false}
                render={(arraHelpers) => {
                  const items = values.number;
                  return (
                    <div>
                      {items &&
                        items.map((num, index) => (
                          <div key={index}>
                            <div>
                              <Grid container spacing={2}>
                                <Grid item xs={5}>
                                  <Field
                                    key={index}
                                    name={`number[${index}].title`}
                                    className="form-two-wrapper-two"
                                    render={({ field, form }) => {
                                      const hasError = Boolean(
                                        form.touched.number?.[index]?.title &&
                                          form.errors.number?.[index]?.title
                                      );

                                      return (
                                        <TextField
                                          {...field}
                                          variant="standard"
                                          label="Title"
                                          className="form-two-wrapper-adding"
                                          error={hasError}
                                          helperText={
                                            hasError
                                              ? form.errors.number?.[index]
                                                  ?.title
                                              : ""
                                          }
                                        />
                                      );
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={5}>
                                  <Field
                                    key={index}
                                    name={`number[${index}].number`}
                                    className="form-two-wrapper-two"
                                    render={({ field, form }) => {
                                      const hasError = Boolean(
                                        form.touched.number?.[index]?.number &&
                                          form.errors.number?.[index]?.number
                                      );

                                      return (
                                        <TextField
                                          {...field}
                                          variant="standard"
                                          label="Number"
                                          className="form-two-wrapper-adding"
                                          error={hasError}
                                          helperText={
                                            hasError
                                              ? form.errors.number?.[index]
                                                  ?.number
                                              : ""
                                          }
                                        />
                                      );
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  {items.length > 1 && (
                                    <ClearTwoToneIcon
                                      className="remove-icon"
                                      onClick={() => arraHelpers.remove(index)}
                                    />
                                  )}
                                </Grid>
                              </Grid>
                            </div>
                          </div>
                        ))}
                      <Button
                        className="add-btn"
                        variant="contained"
                        type="button"
                        onClick={() =>
                          arraHelpers.push({
                            title: "",
                            number: "",
                          })
                        }
                      >
                        Add
                      </Button>
                    </div>
                  );
                }}
              />
              <Field name="Area">
                {({ field, form: { touched, errors } }) => (
                  <TextField
                    {...field}
                    label="Home Town"
                    variant="standard"
                    className="form-wrapper"
                    error={touched.Area && Boolean(errors.Area)}
                    helperText={touched.Area && errors.Area}
                  />
                )}
              </Field>
              <Field name="path">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Profile Image"
                    variant="standard"
                    className="form-wrapper"
                  />
                )}
              </Field>
              <br />
            </Form>
          )}
        />
      </Card>
    </>
  );
};
export default DataForm;
