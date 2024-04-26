import { Container, Box, Avatar, Grid, Typography } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from 'react';
// import { useQuery } from "@apollo/client";
// import ProfileNoteCard from "../components/ProfileNoteCard";
// import { QUERY_POST } from "../utils/queries";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/profile'); // Assuming this endpoint returns user data
      const json = await response.json();

      if (response.ok) {
        setUserData(json);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const prof_theme = useTheme();

  return (
    <ThemeProvider theme={prof_theme} sx={{ marginTop: '40px' }}>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Grid container>
            <Grid item xs={12} md={3}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  marginTop: 1,
                  marginBottom: 1,
                  marginLeft: 10,
                  fontSize: 40,
                  backgroundColor: "profile_avatar.main",
                }}
              >
                {/* Display user avatar here */}
              </Avatar>
            </Grid>

            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  borderRadius: 20,
                  padding: 3,
                  marginRight: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "space-around",
                }}
                id="bio-content"
              >
                <Typography variant='h4'>{userData.username}</Typography> {/* Display username */}
                <Typography variant='h6'>{userData.bio}</Typography> {/* Display bio */}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
