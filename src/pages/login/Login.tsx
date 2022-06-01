// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Container, Grid, TextField } from '@mui/material';
// components
import Header from '../../components/Header/header';
// icons
import Logo from '../../ui-kit/logo/logo';
// styles
import { LoginWrapper } from './Login.styles';
import { Button, ButtonContainer } from '../../styles/globalStyle';

interface LoginProps { }

const validationSchema = yup.object({
	email: yup.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup.string()
		.min(6, 'Password should be of minimum 6 characters length')
		.required('Password is required'),
});

const Login = ({ }: LoginProps) => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, actions) => {
			doLogin(values, actions);
		},
	});

	function doLogin(values:any, actions:any) {
		// ADD services here
		if (values.email === 'foobar@gmail.com' && values.password === 'foobar') {
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

export default Login;
