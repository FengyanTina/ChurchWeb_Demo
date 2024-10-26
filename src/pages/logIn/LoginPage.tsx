import {
    Avatar,
    Box,
    Container,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
    Checkbox,
    Button,
    Link,
  } from "@mui/material";
  import Grid from "@mui/material/Grid2";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import { Link as RouterLink } from "react-router-dom";
  import { useState } from "react";
  import { useAuth } from "../../context/AuthContext";
  
  interface LoginPageProp {
    onClose: () => void;
  }
  const LoginPage = ({ onClose }: LoginPageProp) => {
      const [username, setUsername] = useState<string>(""); 
      const [password, setPassword] = useState<string>(""); 
      const { login,error } = useAuth(); 
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          login(username, password);  
          if (!error) {
            onClose();
          }
        };
  

    return (
      <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          <Avatar
            sx={{
              mx: "auto",
              bgcolor: "secondary.main",
              textAlign: "center",
              mb: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          {error && <Typography color="error">{error}</Typography>}
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              placeholder="Enter username"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField
              placeholder="Enter password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
              Sign In
            </Button>
          </Box>
          <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
            <Grid>
              <Link component={RouterLink} to="/forgot">
                Forgot password?
              </Link>
            </Grid>
            <Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };
  
  export default LoginPage;
  