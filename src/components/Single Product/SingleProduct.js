import { Favorite, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { currencyFormat } from "../../common/common functions";

const SingleProduct = ({ product }) => {
  return (
    <Box sx={{ width: "100%", padding: "10px" }}>
      <img
        style={{ width: "100%", objectFit: "cover", height: "350px" }}
        src={product.thumbnail}
        alt=""
      ></img>
      <Box mt={1}>
        <Typography variant="span" sx={{ fontWeight: "500", fontSize: "26px" }}>
          {product.title}
        </Typography>
      </Box>
      <Box
        my={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: "700", fontSize: "28px" }}>
            {currencyFormat(
              product.price - (product.discountPercentage * product.price) / 100
            )}
          </Typography>
          <Typography
            mx={1}
            sx={{
              textDecoration: "line-through",
              fontWeight: "500",
              fontSize: "20px",
              color: "grey",
            }}
          >
            {currencyFormat(product.price)}
          </Typography>
        </Box>
        <Favorite></Favorite>
      </Box>
      <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ flex: "2" }} variant="contained">
          Buy Now <ShoppingBag></ShoppingBag>
        </Button>
        <Button sx={{ flex: "1" }} variant="outlined">
          <ShoppingCart></ShoppingCart>
        </Button>
      </Box>
    </Box>
  );
};

export default SingleProduct;
