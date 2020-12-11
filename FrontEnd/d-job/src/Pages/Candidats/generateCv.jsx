import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo/logo_D_job.png';
import '../../assets/css/black-dashboard-react.css'



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function GenerateCV() {
    const classes = useStyles();
    return (
        // <div>
        //     <select class="mdb-select md-form colorful-select dropdown-danger" multiple>
        //           <option value="" disabled selected>Choose your country</option>
        //           <option value="1">USA</option>
        //           <option value="2">Germany</option>
        //           <option value="3">France</option>
        //           <option value="3">Poland</option>
        //           <option value="3">Japan</option>
        //     </select>
        // <label class="mdb-main-label">Label example</label>
        //     <button class="btn-save btn btn-danger btn-sm">Save</button>
        // </div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <img src={Logo} width="150" alt="logo" />
          Generate your CV
          <Typography component="h1" variant="h5">
          </Typography>
          <form className={classes.form} noValidate={false}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone Number"
                  name="phone number"
                  autoComplete="phone"
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                //   required
                  fullWidth
                  name="experience"
                  label="Professional Experiences"
                  id="experience"
                  autoComplete="experience"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                //   required
                  fullWidth
                  name="diplomas"
                  label="Diplomas"
                  id="diplomas"
                  autoComplete="diplomas"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="competences"
                  label="Competences"
                  id="competences"
                  autoComplete="competences"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="virtues"
                  label="Virtues"
                  id="virtues"
                  autoComplete="virtues"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="center of interest"
                  label="Center Of Interest"
                  id="center of interest"
                  autoComplete="center of interest"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/dashboard';
                }}
            >
              Generate
            </Button>

          </form>
        </div>
      </Container>
    );
}