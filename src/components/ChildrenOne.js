import React from "react";
import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ChildrenOne = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: isSmallScreen ? "none" : isTabScreen ? 50 : 65,
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          gap: 1,
          width: isSmallScreen ? "100%" : "auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1f1f26",
            paddingRight: 2,
            display: "flex",
            flexDirection: "column",
            padding: 1,
            borderRadius: 2,
            position: "relative", 
          }}
        >
          <ShoppingCartOutlinedIcon />
          <Typography
            variant="body1"
            sx={{ color: "#ccc", fontSize: "12px", paddingTop: "5px" }}
          >
            Total Orders
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: "600", fontSize: "28px" }}
          >
            75
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute", 
              bottom: 15,
              right: 10,
            }}
          >
            <ArrowUpwardIcon sx={{ color: "green", fontSize: "16px" }} />
            <Typography
              variant="body2"
              sx={{ color: "green", fontSize: "12px", marginLeft: "2px" }}
            >
              3%
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1f1f26",
            paddingRight: 2,
            display: "flex",
            flexDirection: "column",
            padding: 1,
            borderRadius: 2,
            position: "relative",
          }}
        >
          <ShoppingCartCheckoutOutlinedIcon />
          <Typography
            variant="body1"
            sx={{ color: "#ccc", fontSize: "12px", paddingTop: "5px" }}
          >
            Total Delivered
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: "600", fontSize: "28px" }}
          >
            70
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute", 
              bottom: 15,
              right: 10,
            }}
          >
            <ArrowDownwardIcon sx={{ color: "red", fontSize: "16px" }} />
            <Typography
              variant="body2"
              sx={{ color: "red", fontSize: "12px", marginLeft: "2px" }}
            >
              3%
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1f1f26",
            paddingRight: 2,
            display: "flex",
            flexDirection: "column",
            padding: 1,
            borderRadius: 2,
            position: "relative", 
          }}
        >
          <RemoveShoppingCartOutlinedIcon />
          <Typography
            variant="body1"
            sx={{ color: "#ccc", fontSize: "12px", paddingTop: "5px" }}
          >
            Total Cancelled
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: "600", fontSize: "28px" }}
          >
            05
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute", 
              bottom: 15,
              right: 10,
            }}
          >
            <ArrowUpwardIcon sx={{ color: "green", fontSize: "16px" }} />
            <Typography
              variant="body2"
              sx={{ color: "green", fontSize: "12px", marginLeft: "2px" }}
            >
              3%
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1f1f26",
            paddingRight: 2,
            display: "flex",
            flexDirection: "column",
            padding: 1,
            borderRadius: 2,
            position: "relative", 
          }}
        >
          <ShoppingBasketOutlinedIcon />
          <Typography
            variant="body1"
            sx={{ color: "#ccc", fontSize: "12px", paddingTop: "5px" }}
          >
            Total Revenue
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: "600", fontSize: "28px" }}
          >
            $12K
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute", 
              bottom: 15,
              right: 10,
            }}
          >
            <ArrowDownwardIcon sx={{ color: "red", fontSize: "16px" }} />
            <Typography
              variant="body2"
              sx={{ color: "red", fontSize: "12px", marginLeft: "2px" }}
            >
              3%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: isSmallScreen ? "none" : isTabScreen ? 50 : 35,
          backgroundColor: "#1f1f26",
          padding: 2,
          marginLeft: isSmallScreen ? 0 : 1,
          width: isSmallScreen ? "100%" : "auto",
          marginTop: isSmallScreen ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
        }}
      >
        <Typography variant="body1" sx={{ color: "#fff"}}>
          Net Profit
        </Typography>
        <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: "600", fontSize: "28px" }}
          >
            $ 6759.25
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowDownwardIcon sx={{ color: "red", fontSize: "16px" }} />
            <Typography
              variant="body2"
              sx={{ color: "red", fontSize: "12px", marginLeft: "2px" }}
            >
              3%
            </Typography>
          </Box>
      </Box>
    </Box>
  );
};

export default ChildrenOne;
