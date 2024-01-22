import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import Historypage from "./history";
import { useState } from "react";
import FavPage from "./Fav";

const Datalist = (props) => {
  const { histCall } = props;
  const [hist, Sethist] = useState(false);
  const [fav, Setfav] = useState(false);
  const [contact, Setcontact] = useState(true);
  const { Items, addItem, SelectedItem, callflag, callingFlag, SetFlagOne } =
    props;
  const History = () => {
    callflag(!callingFlag);
    SetFlagOne(false);
    Sethist(false);
    Setcontact(false);
    Sethist(true);
    Setfav(false);
  };
  const Contact = () => {
    Setcontact(true);
    Setfav(false);
    Sethist(false);
  };
  const Favourites = () => {
    Setcontact(false);
    Sethist(false);
    Setfav(true);
  };
  return (
    <>
      <Card variant="outlined" className="card card-home scroll-wrapper">
        <div className="fixed-scroll-wrap">
          {contact && (
            <div>
              <Box className="Add-contact" onClick={() => addItem()}>
                <PersonAddAltOutlinedIcon className="add-icon inline-wrap " />
                <Typography variant="h6" className="inline-wrap">
                  Create New Contact
                </Typography>
              </Box>
              {Items &&
                Items.map((data, index) => (
                  <Grid
                    key={index}
                    container
                    onClick={() => SelectedItem(data)}
                    spacing={2}
                    className="selected-row"
                  >
                    <Grid item xs={2} md={2}>
                      {data.path !== "" && (
                        <Avatar
                          className="avatar-list"
                          src={data.path}
                        ></Avatar>
                      )}
                      {data.path === "" && (
                        <Avatar className="avatar avatar-list">
                          {" "}
                          {data.fname.substr(0, 1)} {data.lname.substr(0, 1)}
                        </Avatar>
                      )}
                    </Grid>
                    <Grid item xs={10} md={10}>
                      <Typography variant="h6">
                        {data.fname} {data.lname}
                      </Typography>
                      <Typography variant="subtitle2">
                        {data.number[0].number}
                      </Typography>
                      <Typography variant="subtitle2">{data.Area}</Typography>
                    </Grid>
                    {/* <Divider></Divider> */}
                  </Grid>
                ))}
            </div>
          )}
          {hist && <Historypage HisotryCall={histCall} />}
          {fav && <FavPage HisotryCall={histCall} />}
        </div>
        <CardContent className="box-model-wrap">
          <Grid container className="" spacing={2} align="center">
            <Grid item xs={4} className="box-model-wrap-one">
              <StarBorderOutlinedIcon
                onClick={() => Favourites()}
              ></StarBorderOutlinedIcon>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                Favrourite
              </Typography>
            </Grid>
            <Grid item xs={4} className="box-model-wrap-two">
              <AccessTimeTwoToneIcon
                className=""
                onClick={() => History()}
                align="center"
              />
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                Recent
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <PeopleOutlineOutlinedIcon
                onClick={() => Contact()}
              ></PeopleOutlineOutlinedIcon>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                Contact
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default Datalist;
