import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { login } from "../../services/axios";
import { setDataToLocalStorage } from "../../services/localStorage";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { TextFieldWrapper } from "./styles";
import LogoLight from "../../media/burger.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    borderRadius: "0px",
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#e8222e",
    textTransform: "none",
    color: "black",
    "&:hover, &:focus": { backgroundColor: "red" },
  },
}));

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [form, handleFormChange] = useForm({
    emailOrNickname: "",
    password: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await login(form);
    if (response.sucess) {
      setDataToLocalStorage({
        nickname: response.nickname,
        token: response.token,
      });

      history.push(`/${response.nickname}`);
    } else {
      window.alert(response);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img
          src={LogoLight}
          alt="labepics logo by Freepik"
          style={{ height: "100px" }}
        />
        <Typography component="h1" style={{ marginTop: "2rem" }}>
          Entrar
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <TextFieldWrapper
            style={{ marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email or nickname"
            name="emailOrNickname"
            type="text"
            autoComplete="username"
          />
          <FormControl
            variant="outlined"
            required
            fullWidth
            style={{ marginTop: "0.5rem" }}
          >
            <InputLabel htmlFor="login-password">Password</InputLabel>
            <OutlinedInput
              style={{ borderRadius: "2px" }}
              id="login-password"
              labelWidth={80}
              onChange={handleFormChange}
              value={form.password}
              required
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ borderRadius: "2px" }}
          >
            Entrar
          </Button>
        </form>
        <Typography
          onClick={() => history.push("/accounts/signup")}
          variant="body2"
          style={{ cursor: "pointer" }}
        >
          Não possui cadastro? Clique aqui.
        </Typography>
      </div>
    </Container>
  );
};

export default LoginPage;
