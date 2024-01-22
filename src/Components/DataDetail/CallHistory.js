// import { Avatar, Card, Divider, Grid, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";

// const CallHistory = () => {
//   const Data = useSelector((state) => state.CallState.CallLog);
//   return (
//     <>
//       <Card variant="outlined" className="card scroll-wrapper">
//         {Data &&
//           Data.map((data, index) => (
//             <Grid key={index} container spacing={2} className="selected-row">
//               <Grid item xs={2} md={2}>
//                 {data.path !== "" && (
//                   <Avatar className="avatar-list" src={data.path}></Avatar>
//                 )}
//                 {data.path === "" && (
//                   <Avatar className="avatar avatar-list">
//                     {" "}
//                     {data.fname.substr(0, 1)} {data.lname.substr(0, 1)}
//                   </Avatar>
//                 )}
//               </Grid>
//               <Grid item xs={8} md={8}>
//                 <Typography variant="h6">
//                   {data.fname} {data.lname}
//                 </Typography>
//                 <Typography variant="subtitle2">
//                   {data.number[0].number}
//                 </Typography>
//                 <Typography variant="subtitle2">{data.Area}</Typography>
//                 <Divider></Divider>
//               </Grid>
//               <Grid xs={2} sx={{ textAlign: "center" }}>
//                 <CallTwoToneIcon sx={{ pt: 3 }}></CallTwoToneIcon>
//                 <Typography>
//                   {data.time.hours}:
//                   {data.time.minutes.toString().padStart(2, "0")}:
//                   {data.time.seconds.toString().padStart(2, "0")}
//                 </Typography>
//               </Grid>
//             </Grid>
//           ))}
//       </Card>
//     </>
//   );
// };
// export default CallHistory;
