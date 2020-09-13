import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { signup } from "../../functions/axios";

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

import { TextFieldWrapper, PasswordCheckLabel } from "./styles";
import Logo from "./logo.svg";

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
    backgroundColor: "#e8222e",
    textTransform: "none",
    color: "black",
    marginTop: "0.5rem",
    "&:hover, &:focus": { backgroundColor: "red" },
  },
}));

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [form, handleFormChange] = useForm({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const passwordValidator = () => {
    return form.password === passwordCheck;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (form.password === passwordCheck) {
      const response = await signup(form);
      if (response.token) {
        localStorage.setItem("labepics", JSON.stringify(response));
        history.push(`/${form.nickname}`);
      } else {
        window.alert(response.message);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPasswordCheck = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img src={Logo} alt="iFuture logo" />
        <Typography component="h1" style={{ marginTop: "2rem" }}>
          Cadastrar
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <TextFieldWrapper
            style={{ marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.name}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Full Name"
            name="name"
            type="text"
          />
          <TextFieldWrapper
            style={{ marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.nickname}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nickname"
            name="nickname"
            type="text"
          />
          <TextFieldWrapper
            style={{ marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
          />

          <FormControl
            variant="outlined"
            required
            fullWidth
            style={{ marginTop: "0.5rem" }}
          >
            <InputLabel htmlFor="login-password1">Senha</InputLabel>
            <OutlinedInput
              style={{ borderRadius: "4px" }}
              id="login-password1"
              labelWidth={60}
              onChange={handleFormChange}
              value={form.password}
              required
              name="password"
              placeholder="Mínimo 6 caracteres"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <Visibility style={{ color: "black" }} />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="outlined"
            required
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            <PasswordCheckLabel
              htmlFor="login-password2"
              error={!passwordValidator()}
            >
              Confirmar
            </PasswordCheckLabel>
            <OutlinedInput
              error={!passwordValidator()}
              style={{
                borderRadius: "4px",
              }}
              id="login-password2"
              labelWidth={90}
              onChange={(e) => setPasswordCheck(e.target.value)}
              value={passwordCheck}
              required
              name="password"
              placeholder="Confirme a senha anterior"
              type={showPasswordCheck ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordCheck}
                    edge="end"
                  >
                    {showPasswordCheck ? (
                      <Visibility style={{ color: "black" }} />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography
            variant="caption"
            style={{
              marginBottom: "0rem",
              color: `${!passwordValidator() ? "#e02020" : "#fafafa"}`,
              marginLeft: "0.5rem",
            }}
          >
            Deve ser a mesma que a anterior.
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Signup
          </Button>
        </form>
        <Typography
          onClick={() => history.push("/accounts/login")}
          variant="body2"
          style={{ cursor: "pointer", marginTop: "1rem" }}
        >
          LOGIN
        </Typography>
      </div>
    </Container>
  );
};

export default SignupPage;
