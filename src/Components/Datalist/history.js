import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import React, { useState } from "react";

const Historypage = (props) => {
  const { HisotryCall } = props;
  const Data = useSelector((state) => state.CallState.CallLog);
  const [Item, SetItem] = useState([]);
  React.useEffect(() => {
    const someItem = Data.reverse();
    SetItem(someItem);
  }, [Data]);
  return (
    <>
      {Item &&
        Item.map((data, index) => (
          <Box key={index} className="hist-page-contnets">
            <Grid container spacing={2} className="hist-row selected-row">
              <Grid item xs={2} md={2}>
                {data.path !== "" && (
                  <Avatar className="avatar-list" src={data.path}></Avatar>
                )}
                {data.path === "" && (
                  <Avatar className="avatar avatar-list">
                    {" "}
                    {data.fname.substr(0, 1)} {data.lname.substr(0, 1)}
                  </Avatar>
                )}
              </Grid>
              <Grid item xs={8} md={8}>
                <Typography variant="h6">
                  {data.fname} {data.lname}
                </Typography>
                <Typography variant="subtitle2">
                  {data.number[0].number}
                </Typography>
                <Typography variant="subtitle2">{data.Area}</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <CallTwoToneIcon
                  sx={{ pt: 2 }}
                  onClick={() => HisotryCall(data)}
                ></CallTwoToneIcon>
                <Typography>
                  {data.time.hours}:
                  {data.time.minutes.toString().padStart(2, "0")}:
                  {data.time.seconds.toString().padStart(2, "0")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
    </>
  );
};
export default Historypage;
