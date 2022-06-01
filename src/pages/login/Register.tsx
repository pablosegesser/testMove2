// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Grid, TextField } from '@mui/material';
// components
import Header from '../../components/Header/header';
// icons
import Logo from '../../ui-kit/logo/logo';
// styles
import { LoginWrapper } from './Login.styles';
import { Button, ButtonContainer } from '../../styles/globalStyle';

interface LoginProps { }

const validationSchema = Yup.object({
	email: Yup.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password should be of minimum 6 characters length')
		.required('Password is required'),
	confirmPassword: Yup.string()
		.when("password", {
			is: val => (val && val.length > 0 ? true : false),
			then: Yup.string()
				.oneOf(
					[Yup.ref("password")],
					"Both password need to be the same"
				)
		})
});

const Register = ({ }: LoginProps) => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, actions) => {
			doRegister(values, actions);
		},
	});

	function doRegister(values: any, actions: any) {
		// ADD services here
		if (values.email === 'foobar@gmail.com' && values.password === 'foobar' && values.confirmPassword === 'foobar') {
			window.location.href = "/consumer";

		} else {
			alert(JSON.stringify(values, null, 2));
		}
	}

	return (
		<>
			<Header
				className="withIcon"
				logo={<Logo />}
			/>
			<LoginWrapper>
				<Container>
					<Grid container justifyContent={'center'}>
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
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
									classes={{
										root: 'dark'
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
									error={formik.touched.password && Boolean(formik.errors.password)}
									helperText={formik.touched.password && formik.errors.password}
								/>
								<TextField
									fullWidth
									variant="standard"
									id="confirmPassword"
									name="confirmPassword"
									label="confirm Password"
									type="password"
									value={formik.values.confirmPassword}
									onChange={formik.handleChange}
									error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
									helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
	);
};

export default Register;
