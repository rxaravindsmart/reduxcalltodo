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
  Typography,
} from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router";
const SignIn = () => {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.CallState.LoginData);
  const handleSubmit = (values) => {
    const CheckValue = Data.some(
      (obj) =>
        obj.username === values.username && obj.password === values.password
    );
    if (CheckValue) {
      navigate("/");
    } else {
      alert("Username or Password mismatch");
    }
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <>
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box className="input-contents">
                <Field name="username">
                  {({ field, form: { touched, errors } }) => (
                    <FormControl fullWidth className="form-control-wrap">
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
                <Typography
                  variant="subtitle2"
                  className="forger-text"
                  sx={{ mt: 5 }}
                >
                  Forget password?
                </Typography>
                <FormGroup>
                  <FormControlLabel
                    sx={{ mt: 3 }}
                    control={<Checkbox defaultChecked />}
                    label="Rememeber me"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  variant="contained"
                  className="sing-btn"
                  startIcon={<DriveFileMoveIcon />}
                >
                  Sign in
                </Button>
                <Box className="login-bot-wrap">
                  <Typography variant="subtitle2" className="bottom-text-wrap">
                    Don't have any account? Sign up
                  </Typography>
                </Box>
                <br />
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default SignIn;
