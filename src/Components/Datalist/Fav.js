import { Avatar, Badge, Box, Fab, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const FavPage = (props) => {
  const { HisotryCall } = props;
  const Items = useSelector((state) => state.CallState.CallData);
  const [Data, SetData] = useState([]);
  React.useEffect(() => {
    const someItem = Items.filter((item) => item.fav === true);
    SetData(someItem);
  }, [Items]);
  return (
    <>
      <Box className="fav-box-wrapper">
        <Grid container spacing={2}>
          {Data &&
            Data.map((data, index) => (
              <Grid item xs={4} key={index}>
                <Badge
                  className="badge-wrap"
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    <Fab color="#e0e0e0" size="small" className="badge-content">
                      <CallOutlinedIcon
                        color="#a5d6a7"
                        onClick={() => HisotryCall(data)}
                      ></CallOutlinedIcon>
                    </Fab>
                  }
                >
                  {data.path !== "" && (
                    <Avatar className="fav-icon" src={data.path}></Avatar>
                  )}
                  {data.path === "" && (
                    <Avatar className="fav-icon">
                      {data.fname.substr(0, 1)} {data.lname.substr(0, 1)}
                    </Avatar>
                  )}
                </Badge>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};
export default FavPage;
