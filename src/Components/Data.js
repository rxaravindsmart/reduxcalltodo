import { useDispatch, useSelector } from "react-redux";
import "./Data.css";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DeleteItem, EditItem } from "../Redux/Actions/Action";
import Datalist from "./Datalist/datalist";
import Datadetail from "./DataDetail/datadetail";
import DataForm from "./DataForm/dataform";
import CallPerson from "./DataForm/callperson";
export const Data = () => {
  const Items = useSelector((state) => state.CallState.CallData);
  const dispatch = useDispatch();
  const Singledata = useSelector((state) => state.CallState.EditItem);
  const [FlagOne, SetFlagOne] = useState(false);
  const [FlagTwo, SetflagTwo] = useState(false);
  const [additem, SetAddItem] = useState(false);
  const [isEdit, SetisEdit] = useState(false);
  const [Call, SetCall] = useState(false);
  const [history, Sethistory] = useState(false);
  const [value, SetValue] = useState(
    {
      fname: "",
      lname: "",
      Area: "",
      number: [
        { title: "Mobile", number: "", flag: false },
        { title: "Home", number: "", flag: true },
      ],
      path: "",
    },
    []
  );
  useEffect(() => {
    Singledata && SetValue(() => Singledata);
  }, [Singledata]);
  const SelectedItem = (data) => {
    dispatch(EditItem(data.fname));
    SetFlagOne(true);
    SetflagTwo(false);
    SetisEdit(true);
    SetCall(false);
  };
  const EditValues = () => {
    SetflagTwo(true);
  };
  const DeleteItems = (item) => {
    dispatch(DeleteItem(item));
    SetFlagOne(false);
    SetflagTwo(false);
  };
  const addItem = () => {
    SetFlagOne(false);
    SetflagTwo(true);
    SetAddItem(true);
    const item = {
      fname: "",
      lname: "",
      Area: "",
      number: [{ title: "", number: "" }],
      path: "",
    };
    SetValue(item);
    SetisEdit(false);
    SetisEdit(false);
    Sethistory(false);
  };
  const CallingItem = (item) => {
    SetCall(true);
    SetflagTwo(false);
  };
  const histCall = (data) => {
    dispatch(EditItem(data.fname));
    SetCall(true);
    SetflagTwo(false);
    SetflagTwo(false);
  };
  return (
    <div className="Data-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Datalist
            Items={Items}
            SelectedItem={SelectedItem}
            addItem={addItem}
            callflag={Sethistory}
            callingFlag={history}
            SetisEdit={SetisEdit}
            SetFlagOne={SetFlagOne}
            histCall={histCall}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          {FlagOne === true && (
            <Datadetail
              data={Singledata}
              Delete={DeleteItems}
              Edit={EditValues}
              Calling={CallingItem}
              SetisEdit={SetisEdit}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          {FlagTwo === true && (
            <DataForm
              add={additem}
              val={value}
              isEdit={isEdit}
              valSet={SetValue}
              flagSet={SetflagTwo}
              flagSetTwo={SetflagTwo}
              SetEdit={SetisEdit}
            />
          )}
          {Call === true && (
            <CallPerson
              hist={Sethistory}
              FlagTwo={SetFlagOne}
              setCall={SetCall}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
