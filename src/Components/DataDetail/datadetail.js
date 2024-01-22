import {
  Avatar,
  Box,
  Card,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { useDispatch, useSelector } from "react-redux";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { AddtoFav, RemovetoFav } from "../../Redux/Actions/Action";
const Datadetail = (props) => {
  const Singledata = useSelector((state) => state.CallState.EditItem);
  const { Delete, Edit, Calling } = props;
  const dispatch = useDispatch();
  const AddFavItem = () => {
    if (Singledata.fav) {
      dispatch(RemovetoFav(Singledata.id));
    } else {
      dispatch(AddtoFav(Singledata.id));
    }
  };
  return (
    <>
      <Card variant="outlined" className="card scroll-wrapper">
        <Typography align="right" className="card-top-wrapper">
          <IconButton
            aria-label="delete"
            className="Delete-icon"
            color="error"
            size="small"
            variant="outlined"
            onClick={() => Delete(Singledata.fname)}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>
          <IconButton
            className="fav-icon"
            size="small"
            variant="outlined"
            onClick={() => AddFavItem(Singledata)}
          >
            {Singledata.fav ? (
              <StarOutlinedIcon color="success" />
            ) : (
              <StarOutlinedIcon
                color="disabled"
                // onClick={() => AddFavItem(Singledata)}
              />
            )}
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => Edit()}
            className="Edit-icon"
            size="small"
          >
            <EditIcon />
          </IconButton>
        </Typography>
        {Singledata.path !== "" && (
          <Avatar src={Singledata.path} className="images" />
        )}
        {Singledata.path === "" && (
          <Avatar className="avatar-big images">
            {" "}
            {Singledata.fname.substr(0, 1)} {Singledata.lname.substr(0, 1)}
          </Avatar>
        )}
        <Typography variant="h6" align="center">
          {Singledata.fname} {Singledata.lname}
        </Typography>
        <Typography variant="subtitle2" align="center">
          {Singledata.number[0].number}
        </Typography>
        <Box className="breaking-wrap">
          <Grid container spacing={2} align="center">
            <Grid item xs={4}>
              <Fab
                color="success"
                size="small"
                aria-label="add"
                onClick={() => Calling(Singledata)}
              >
                <CallOutlinedIcon size="small"></CallOutlinedIcon>
              </Fab>
            </Grid>
            <Grid item xs={4}>
              <Fab color="danger" size="small" aria-label="add">
                <SmsOutlinedIcon size="small"></SmsOutlinedIcon>
              </Fab>
            </Grid>
            <Grid item xs={4}>
              <Fab color="primary" size="small" aria-label="add">
                <VideocamOutlinedIcon></VideocamOutlinedIcon>
              </Fab>
            </Grid>
          </Grid>
        </Box>
        <Box className="box-contents">
          <Grid container spacing={2} className="Card-container-wrap">
            <Grid item xs={12}>
              {Singledata.number &&
                Singledata.number.map((num, index) => (
                  <div key={index}>
                    <Typography variant="subtitle2" align="left" sx={{ mt: 2 }}>
                      {num.title}
                    </Typography>
                    <Typography variant="h6" align="left">
                      {num.number}
                    </Typography>
                  </div>
                ))}
            </Grid>
          </Grid>
          <Grid container spacing={2} className="Card-container-wrap">
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="left">
                Email
              </Typography>
              <Typography variant="h6" align="left">
                abcd@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="Card-container-wrap">
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="left">
                Home Town
              </Typography>
              <Typography variant="h6" align="left">
                {Singledata.Area}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};
export default Datadetail;
