import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardMedia, Typography, Box, Chip } from "@mui/material";
import Spinner from "./Spinner";
import useFetchMovies from "../hooks/useFetchMovies";

const MovieDetail = () => {
  const params = useParams();
  const { movieDetail, isLoading, requestMovie } = useFetchMovies();

  useEffect(() => {
    requestMovie("detail", params.id);
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "cetner",
        padding: "80px 0",
        backgroundColor: "#e5e7eb",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <CardMedia
          component="img"
          image={movieDetail.large_cover_image}
          alt={movieDetail.title}
          sx={{
            display: "flex",
            objectFit: "contain",
            width: "fit-content",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "start",
          }}
        >
          <Typography variant="h5">{movieDetail.title}</Typography>
          <Box
            variant="div"
            sx={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            장르:
            {movieDetail.genres.map((genre) => (
              <Chip key={genre} label={genre} variant="outlined" />
            ))}
          </Box>
          <Typography variant="div">개봉년도: {movieDetail.year}</Typography>
          <Typography variant="div">
            내용: {movieDetail.description_full}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
  // title, description_full, background_image_original,genres[],year
};

export default MovieDetail;
// import React, { useEffect, useState } from "react";
// import { getMovieDetail } from "../api/axiosInstance";
// import { useParams } from "react-router-dom";
// import { CardMedia, Typography, Box, Chip } from "@mui/material";
// import Spinner from "./Spinner";

// const MovieDetail = () => {
//   const [movieDetail, setMovieDetail] = useState();
//   const params = useParams();

//   useEffect(() => {
//     getMovieDetail(params.id).then((res) => {
//       setMovieDetail(res.data.data.movie);
//     });
//   }, []);

//   if (!movieDetail) return <Spinner />;
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "cetner",
//         padding: "80px 0",
//         backgroundColor: "#e5e7eb",
//         textAlign: "center",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "32px",
//         }}
//       >
//         <CardMedia
//           component="img"
//           image={movieDetail.large_cover_image}
//           alt={movieDetail.title}
//           sx={{
//             display: "flex",
//             objectFit: "contain",
//             width: "fit-content",
//           }}
//         />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "16px",
//             textAlign: "start",
//           }}
//         >
//           <Typography variant="h5">{movieDetail.title}</Typography>
//           <Box
//             variant="div"
//             sx={{ display: "flex", gap: "8px", alignItems: "center" }}
//           >
//             장르:
//             {movieDetail.genres.map((genre) => (
//               <Chip key={genre} label={genre} variant="outlined" />
//             ))}
//           </Box>
//           <Typography variant="div">개봉년도: {movieDetail.year}</Typography>
//           <Typography variant="div">
//             내용: {movieDetail.description_full}
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
//   // title, description_full, background_image_original,genres[],year
// };

// export default MovieDetail;
