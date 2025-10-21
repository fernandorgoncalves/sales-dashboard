import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'
import { BannerImage } from '@/components'

const LoginArea = styled.div`
  background: #666;
`

const LoginImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid size={{xs:12, sm:6}}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <h1>Login</h1>
            </Container>
          </Grid>
          <Grid size={{sm:6}}
            sx={{ display: {xs: 'none', sm:'block'} }}
          >
              <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
