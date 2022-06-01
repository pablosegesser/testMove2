// libraries
import {useFormik} from "formik";
import * as yup from "yup";
import {Container, Grid, TextField} from "@mui/material";
// components
import Header from "../../components/Header/header";
// icons
import Logo from "../../ui-kit/logo/logo";
// styles
import {LoginWrapper} from "./Login.styles";
import {Button, ButtonContainer} from "../../styles/globalStyle";
import {useDispatch, useSelector} from "react-redux";
import {action_auth_login} from "../../Redux/actions/auth";
import {Navigate} from "react-router-dom";
import {RootState} from "../../Redux/store";

interface LoginProps {}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Login = ({}: LoginProps) => {
  // const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      doLogin(values, actions);
    },
  });
  const doLogin = (values: any, actions: any) => {
    // ADD services here
    //  dispatch(action_auth_login(values));
    return <Navigate to="/" replace />;
  };

  return (
    <>
      {!user ? (
        <>
          <Header className="withIcon" logo={<Logo />} />
          <LoginWrapper>
            <Container>
              <Grid container justifyContent={"center"}>
                <Grid item>
                  <form onSubmit={formik.handleSubmit}>
                    <TextField
                      fullWidth
                      variant="standard"
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      classes={{
                        root: "dark",
                      }}
                    />
                    <TextField
                      fullWidth
                      variant="standard"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <ButtonContainer className="centerContain">
                      <Button type="submit" className="secondary full-width">
                        Submit
                      </Button>
                    </ButtonContainer>
                  </form>
                </Grid>
              </Grid>
            </Container>
          </LoginWrapper>
        </>
      ) : (
        <Navigate to="/profile" replace={true} />
      )}
    </>
  );
};

export default Login;
