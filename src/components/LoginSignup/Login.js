import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, Divider, Fab, FormControl, IconButton, InputAdornment, InputLabel, Modal, OutlinedInput, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignupModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const Login = () => {
    const [values, setValues] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        signingLoading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleClickShowPassword = () => {
        setValues(!values);
    };

    if (user) {
        setLoading(false);
        window.alert('Login SuccessFully');
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <Container>
            <Stack justifyContent='center' alignItems='center' spacing={5} direction={{ xs: 'column', sm: 'row' }} sx={{
                paddingX: { xs: 2, sm: 0 },
                paddingY: { xs: 2, sm: 0 },
                height: '536px',
            }}>
                <Box>
                    <Typography sx={{
                        textAlign: { xs: 'center', sm: 'left' }
                    }} variant='h3' fontWeight={700}>react-it</Typography>
                    <Typography sx={{
                        textAlign: { xs: 'center', sm: 'left' }
                    }} variant='h6' marginY={1}>React-it helps you connect and share with the people in your life.</Typography>
                </Box>
                <Paper sx={{
                    width: { xs: '100%', sm: '300px' },
                    padding: { xs: 2, sm: 4 },
                }} elevation={3}>
                    {/* <Typography variant='h5' fontWeight={500} textAlign='center'>Login</Typography> */}

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ marginY: 2 }}
                            required
                            id="outlined-required"
                            label="Email"
                            type='email'
                            fullWidth
                            name="email"
                        />
                        <FormControl sx={{ marginY: 2 }} fullWidth variant="outlined" required >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                name="password"
                                id="outlined-adornment-password"
                                type={values ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {values ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <LoadingButton
                            loading={loading}
                            loadingIndicator="Login…"
                            variant="contained"
                            fullWidth
                            size="large"
                            type='submit'
                            sx={{
                                paddingY: 1.7,
                                marginY: 2
                            }}
                        >
                            Login
                        </LoadingButton>
                    </form>
                    <Divider sx={{ marginY: 1 }} />
                    <Box onClick={() => setOpen(true)} sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Button sx={{ paddingY: 1.7, marginY: 1 }} variant="contained" color="success">
                            Creat New Account
                        </Button>
                    </Box>
                </Paper>
            </Stack>


            <SignupModal
                open={open}
                onClose={()=> setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    width: { xs: '100%', sm: '300px' },
                    padding: { xs: 2, sm: 4 },
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </SignupModal>
        </Container>
    );
};

export default Login;