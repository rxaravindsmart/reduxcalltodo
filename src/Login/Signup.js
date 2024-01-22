import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SingupData } from "../Redux/Actions/Action";
import * as Yup from "yup";
import { useNavigate } from "react-router";
const SignUp = () => {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.CallState.LoginData);
  const dispatch = useDispatch();
  const handleSubmit = (values, isSubmitting) => {
    const emailItem = Data.some((obj) => obj.email === values.email);
    const userItem = Data.some((obj) => obj.username === values.username);
    if (emailItem) {
      alert("Email Already exist");
    } else if (userItem) {
      alert("User Name Already exist");
    } else {
      if (values.password === values.cpassword) {
        dispatch(SingupData(values));
        navigate("/");
      } else {
        alert("Password mismatch");
      }
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter a Valid email Id").required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Password is required"),
    cpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords Mismatch"
    ),
  });
  return (
    <>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            username: "",
            cpassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box className="input-contents">
                <Field name="email">
                  {({ field, form: { touched, errors } }) => (
                    <FormControl fullWidth className="form-control-wrap">
                      <OutlinedInput
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        className="input-field"
                        placeholder="Email"
                        startAdornment={
                          <InputAdornment position="start">
                            <MailOutlineIcon />
                          </InputAdornment>
                        }
                        {...field}
                      />
                      <FormHelperText className="error-wrap">
                        {touched.email && errors.email}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field name="username">
                  {({ field, form: { touched, errors } }) => (
                    <FormControl
                      fullWidth
                      className="form-control-wrap"
                      sx={{ mt: 3 }}
                    >
                      <OutlinedInput
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        className="input-field"
                        placeholder="User Name"
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircleOutlinedIcon />
                          </InputAdornment>
                        }
                        {...field}
                      />
                      <FormHelperText className="error-wrap">
                        {touched.username && errors.username}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form: { touched, errors } }) => (
                    <FormControl
                      fullWidth
                      sx={{ mt: 3 }}
                      className="form-control-wrap"
                    >
                      <OutlinedInput
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        className="input-field"
                        placeholder="Password"
                        startAdornment={
                          <InputAdornment position="start">
                            <KeyboardOutlinedIcon />
                          </InputAdornment>
                        }
                        {...field}
                      />
                      <FormHelperText className="error-wrap">
                        {touched.password && errors.password}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field name="cpassword">
                  {({ field, form: { touched, errors } }) => (
                    <FormControl
                      fullWidth
                      sx={{ mt: 3 }}
                      className="form-control-wrap"
                    >
                      <OutlinedInput
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        className="input-field"
                        placeholder="Password"
                        startAdornment={
                          <InputAdornment position="start">
                            <CheckBoxOutlinedIcon />
                          </InputAdornment>
                        }
                        {...field}
                      />
                      <FormHelperText className="error-wrap">
                        {touched.cpassword && errors.cpassword}
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <FormGroup sx={{ mb: 2 }}>
                  <FormControlLabel
                    sx={{ mt: 3 }}
                    control={<Checkbox defaultChecked />}
                    label="Accept terms & condition"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  variant="contained"
                  className="sing-btn"
                  startIcon={<DriveFileMoveIcon />}
                >
                  Sign Up
                </Button>
                <br />
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default SignUp;
