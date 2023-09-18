"use client";
import dynamic from "next/dynamic";
import { Grid, Typography, Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: { md: "center" },
          justifyContent: { xs: "center", md: "normal" },
          flexDirection: {
            md: "row",
            xs: "column",
          },
          marginTop: "0.4rem",
          paddingBottom: {
            md: "0px",
            xs: "20rem",
          },
        }}
      >
        <Grid item lg={7} md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: {
                md: "start",
                xs: "center",
              },
              justifyContent: {
                md: "center",
                xs: "center",
              },
              flexDirection: "column",
              bgcolor: "#f3f4f6",
              height: {
                md: "100vh",
                xs: "50vh",
              },
              borderRadius: {
                md: "0px 10px 0px 0px",
                xs: "0px 0px 40px 40px",
              },
            }}
          >
            <Typography
              variant="h1"
              align="center"
              fontFamily={"'Bebas Neue', sans-serif"}
              color={"#6b7280"}
              sx={{
                fontSize: {
                  lg: 100,
                  md: 80,
                  sm: 70,
                  xs: 60,
                },
                marginLeft: {
                  md: "2rem",
                  xs: "0rem",
                },
              }}
            >
              Pick Your Style
            </Typography>
            <Typography
              variant="h1"
              align="center"
              fontFamily={"'Bebas Neue', sans-serif"}
              color={"#fbbf24"}
              sx={{
                fontSize: {
                  lg: 100,
                  md: 80,
                  sm: 70,
                  xs: 60,
                },
                marginLeft: {
                  md: "2rem",
                  xs: "0rem",
                },
              }}
            >
              50% OFF
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={5}
          md={6}
          xs={12}
          sx={{
            paddingTop: {
              md: "0rem",
              xs: "4rem",
            },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontFamily={"'Ubuntu', sans-serif"}
            fontWeight={"bold"}
            sx={{
              fontSize: {
                sm: 40,
                xs: 45,
              },
              marginBottom: {
                sm: "0rem",
                xs: "2rem",
              },
            }}
          >
            Get Started
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                sm: "row",
                xs: "column",
              },
              justifyContent: "center",
              alignItems: "center",
              marginTop: "13px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => signIn()}
              sx={{
                marginRight: {
                  sm: "1rem",
                  xs: "0rem",
                },
                marginBottom: {
                  sm: "0rem",
                  xs: "1rem",
                },
                padding: "0.5rem 5rem",
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: "bold",
              }}
            >
              LOG IN
            </Button>
            <Link href={"signup"}>
              <Button
                variant="contained"
                sx={{
                  padding: "0.5rem 5rem",
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: "bold",
                }}
              >
                SIGN UP
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default dynamic(() => Promise.resolve(GetStarted), { ssr: false });
