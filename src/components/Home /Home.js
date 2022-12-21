import { Box, Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useGetAllProductsQuery } from "../../apis/Product Api/productsApi";
import Navbar from "../Navbar/Navbar";
import SingleProduct from "../Single Product/SingleProduct";

const Home = () => {
  const [skip, setSkip] = useState(0);
  const {
    data: allProducts,
    isLoading,
    isFetching,
  } = useGetAllProductsQuery(skip);
  function handlePagination(e, pageNumber) {
    setSkip(pageNumber);
    window.scrollTo(0, 0);
    console.log(pageNumber);
  }
  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E0DFDF",
        }}
      >
        <Oval
          height={80}
          width={80}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#000"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Box>
    );
  }
  if (isFetching) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E0DFDF",
        }}
      >
        <Oval
          height={80}
          width={80}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#000"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Box>
    );
  }
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: "35px" }}>
          <Grid container spacing={2}>
            {allProducts.products &&
              allProducts.products.map((product) => {
                return (
                  <Grid item xs={12} sm={6} md={4} mb={2}>
                    <SingleProduct product={product} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
        <Box my={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            onChange={handlePagination}
            count={10}
            variant="outlined"
            color="primary"
            size="large"
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
