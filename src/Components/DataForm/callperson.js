import { Avatar, Box, Card, Fab, Grid, Typography } from "@mui/material";
import MicOffIcon from "@mui/icons-material/MicOff";
import DialpadOutlinedIcon from "@mui/icons-material/DialpadOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import CallEndTwoToneIcon from "@mui/icons-material/CallEndTwoTone";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addlog } from "../../Redux/Actions/Action";

const CallPerson = (props) => {
  const { hist, FlagTwo, setCall } = props;
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const Singledata = useSelector((state) => state.CallState.EditItem);
  const EditedValues = useSelector((state) => [...state.CallState.CallData]);
  // const
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  var hours = Math.floor(time / (60 * 60));
  var divisor_for_minutes = time % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);
  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);
  const startAndStop = () => {
    setIsRunning(false);
    hist(true);
    FlagTwo(false);
    const item = { hours, minutes, seconds };
    dispatch(Addlog(item, Singledata));
    setCall(false);
  };
  return (
    <>
      <Card variant="outlined" className="card scroll-wrapper">
        <Box sx={{ mb: 12, mt: 10 }}>
          {Singledata.path !== "" && (
            <Avatar src={Singledata.path} className="images" />
          )}
          {Singledata.path === "" && (
            <Avatar className="avatar-big images">
              {" "}
              {Singledata.fname.substr(0, 1)} {Singledata.lname.substr(0, 1)}
            </Avatar>
          )}
          <Typography variant="h6" align="center" sx={{ mt: 2 }}>
            {Singledata.fname} {Singledata.lname}
          </Typography>
          <Typography variant="subtitle2" align="center">
            {Singledata.number[0].number}
          </Typography>
          <Typography variant="h6" align="center" sx={{ mt: 2 }}>
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </Typography>
        </Box>
        <Box className="box-wrap-content">
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <MicOffIcon className="call-icons mic"></MicOffIcon>
              <Typography>Mute</Typography>
            </Grid>

            <Grid item xs={4}>
              <DialpadOutlinedIcon className="call-icons dailcall"></DialpadOutlinedIcon>
              <Typography>Keypad</Typography>
            </Grid>
            <Grid item xs={4}>
              <VolumeUpOutlinedIcon className="call-icons volcall"></VolumeUpOutlinedIcon>
              <Typography>Speacker</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={6} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <AddIcCallOutlinedIcon className="call-icons addcall"></AddIcCallOutlinedIcon>
              <Typography>Add Call</Typography>
            </Grid>

            <Grid item xs={4}>
              <VideocamOutlinedIcon className="call-icons videocall"></VideocamOutlinedIcon>
              <Typography>Video Call</Typography>
            </Grid>
            <Grid item xs={4}>
              <PauseOutlinedIcon className="call-icons pausecall"></PauseOutlinedIcon>
              <Typography>Hold</Typography>
            </Grid>
          </Grid>
          <Fab color="error" size="large" aria-label="add" sx={{ mt: 8 }}>
            <CallEndTwoToneIcon
              onClick={() => startAndStop()}
            ></CallEndTwoToneIcon>
          </Fab>
        </Box>
      </Card>
    </>
  );
};
export default CallPerson;
