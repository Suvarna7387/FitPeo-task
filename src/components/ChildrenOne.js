import React from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  CircularProgress,
} from "@mui/material";
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
        flexWrap: isSmallScreen ? "wrap" : "nowrap",
        gap: 2,
      }}
    >
      <Box
        sx={{
          flex: isSmallScreen ? "none" : isTabScreen ? 50 : 65,
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          gap: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1f1f26",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            maxWidth: isSmallScreen ? "100%" : "250px",
            height: "auto",
          }}
        >
          <ShoppingCartOutlinedIcon />
          <Typography variant="body1" sx={{ color: "#ccc", paddingTop: 1 }}>
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
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "auto",
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
            padding: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            maxWidth: isSmallScreen ? "100%" : "250px",
            height: "auto",
          }}
        >
          <ShoppingCartCheckoutOutlinedIcon />
          <Typography variant="body1" sx={{ color: "#ccc", paddingTop: 1 }}>
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
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "auto",
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
            padding: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            maxWidth: isSmallScreen ? "100%" : "250px",
            height: "auto",
          }}
        >
          <RemoveShoppingCartOutlinedIcon />
          <Typography variant="body1" sx={{ color: "#ccc", paddingTop: 1 }}>
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
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "auto",
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
            padding: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            maxWidth: isSmallScreen ? "100%" : "250px",
            height: "auto",
          }}
        >
          <ShoppingBasketOutlinedIcon />
          <Typography variant="body1" sx={{ color: "#ccc", paddingTop: 1 }}>
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
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "auto",
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
          flex: isSmallScreen ? "none" : isTabScreen ? 50 : 33,
          backgroundColor: "#1f1f26",
          padding: 2,
          marginLeft: isSmallScreen ? 0 : 0,
          width: "100%",
          marginTop: isSmallScreen ? 2 : 0,
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: isSmallScreen ? 0 : 3 }}>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            Net Profit
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: "600", fontSize: "28px" }}
          >
            $6759.25
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
        <Box
  sx={{
    position: "relative",
    display: "inline-flex",
    marginTop: isSmallScreen ? 2 : 0,
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <CircularProgress
    variant="determinate"
    value={70}
    size={70}
    thickness={5}
    sx={{ color: "#7194fe" }}
  />
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <Typography
      variant="body2"
      sx={{
        color: "#fff",
        fontWeight: "600",
        fontSize: "12px",
        textAlign: "center",
      }}
    >
      70%
      <Typography
        variant="body2"
        sx={{
          color: "#fff",
          fontWeight: "200",
          fontSize: "8px",
          textAlign: "center",
        }}
      >
        Goal{" "}
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            fontWeight: "200",
            fontSize: "8px",
            textAlign: "center",
            marginBottom: "9px",
          }}
        >
          Completed
        </Typography>
      </Typography>
    </Typography>
  </Box>
  <Box sx={{ marginTop: 1 }}>
    <Typography
      variant="body2"
      sx={{
        color: "#fff",
        fontWeight: "400",
        fontSize: "9px",
        textAlign: "center",
      }}
    >
      *The value here has been rounded off.
    </Typography>
  </Box>
</Box>

      </Box>
    </Box>
  );
};

export default ChildrenOne;
