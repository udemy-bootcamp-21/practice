import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";
import Spinner from "./Spinner";
import useFetchMovies from "../hooks/useFetchMovies";

export default function MovieList() {
  const { movies, isLoading, requestMovie } = useFetchMovies();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    requestMovie("list", searchParams.get("query"));
  }, [searchParams]);

  return (
    <main>
      <Search />
      {isLoading ? (
        <Spinner />
      ) : (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {movies ? (
              movies.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        display: "flex",
                        pt: "100%",
                        width: "100%",
                        height: "262.66px",
                        backgroundSize: "contain",
                      }}
                      image={movie.medium_cover_image}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ height: "96.047px" }}
                      >
                        {movie.title}
                      </Typography>
                      <Typography>
                        {movie.summary
                          ? `${movie.summary.slice(0, 50)}...`
                          : "영화 상세 정보가 없습니다."}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/${movie.id}`}>
                        <Button size="small">상세페이지</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h5" sx={{ margin: "0 auto" }}>
                검색 결과가 없습니다.
              </Typography>
            )}
          </Grid>
        </Container>
      )}
    </main>
  );
}
