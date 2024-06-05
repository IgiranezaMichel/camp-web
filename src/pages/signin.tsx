import { LockPerson, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Chip, IconButton, Paper, TextField, Typography } from "@mui/material";
import { FormEvent, useContext, useState } from "react"
import { useLocation } from "react-router-dom";
import { LoginContext } from "../contexts/loginContext";
import { ToastContainer, toast } from "react-toastify";
type User = {
    username: string,
    password: string
}
export const SignIn = () => {
    const [logInForm, setLogInForm] = useState<User>({
        password: '',
        username: ''
    });
    const login = useContext(LoginContext);
    const location = useLocation();
    const [loginResult, setLoginResult] = useState(location.state);
    const handleClose = () => {
        setLoginResult(null);
    }
    const successLogin=async()=>{
        await fetch("http://localhost:8080/success-login", {
            method:'POST',
            credentials:'include',
        }).then(data=>{(data.json().
            then(datas=>login?.updateState(datas)).catch(err=>'login error'+err)
        );})
        .catch(err=>console.log(err));
    }
    const handleFetch=async()=>{
        await fetch("http://localhost:8080/success-login", {
            method:'POST',
            credentials:'include',
        }).then(data=>console.log(data.json()))
        .catch(err=>console.log(err));
    }
    const loginHandler = (event: FormEvent<EventTarget | HTMLFormElement>) => {
        event.preventDefault();
        if (logInForm.username.length == 0) {
            toast.error('Please provide username')
        } else if (logInForm.password.length == 0) {
            toast.error('Please provide password')
        } else {
            
            const formData = new FormData();
            formData.append('username',logInForm.username);
            formData.append('password',logInForm.password);
            console.log(JSON.stringify(formData))
            fetch("http://localhost:8080/login", {
                method:'POST',
                body: formData,
                credentials:'include'
            }).then(data=>{
                console.log(data.json());
                data.url.indexOf('success')!=-1?successLogin():setLoginResult({err:'Bad Credential try again'});
            })
            .catch(err=>console.log(err));
        }

    }
    console.log('==================login data ==================')
    console.log(login?.currentState);
    return (<div style={{ backgroundImage: 'url(download.jpg)', backgroundPosition: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        
        <Paper sx={{ height: '100vh', bgcolor: 'rgb(255 255 255 / 30%);', backdropFilter: 'blur(10px)' }} className="m-auto d-flex justify-content-center align-items-center" >
            <Paper className="col-md-6 " sx={{ bgcolor: 'rgb(255 255 255 / 20%);', backdropFilter: 'blur(1px)' }} >
                <form  onSubmit={loginHandler}>
                    <Box sx={{ p: 2 }}>
                        <Typography className="fw-bold mb-4" component={'h4'}>Login form</Typography>
                        <TextField value={logInForm.username} onChange={(e) => setLogInForm({ ...logInForm, username: e.target.value })} fullWidth placeholder="username" className="mb-3"
                            required={true}
                            InputProps={{
                                endAdornment: (<IconButton><LockPerson /></IconButton>)
                            }} />

                        <TextField type="password" value={logInForm.password} onChange={(e) => setLogInForm({ ...logInForm, password: e.target.value })}
                            fullWidth placeholder="Password" className="mb-3"
                            InputProps={{
                                endAdornment: (<IconButton><VisibilityOff /></IconButton>)
                            }} />
                        <div className="text-center">
                            {loginResult != null && <Chip onDelete={handleClose} variant="filled" label={loginResult.err ? loginResult.err : loginResult.logout} color={loginResult.err ? "error" : "success"} />}
                        </div>
                        <div className="modal-footer">
                            <Button type="submit">Login</Button>
                        </div>
                        <Button onClick={()=>handleFetch()}>F|etch</Button>
                    </Box>
                </form>
            </Paper>
            <ToastContainer />
        </Paper>

    </div>)
}