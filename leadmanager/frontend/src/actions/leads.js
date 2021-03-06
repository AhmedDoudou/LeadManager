import axios from "axios";
import { GET_LEADS } from "./types";


// GET LEADS
export const getLeads = () => (dispatch, getState) => {
    axios
      .get('/api/leads/', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_LEADS,
          payload: res.data,
        });
      })
      .catch((err) =>  console.log(err));
  };
  
  // // DELETE LEAD
  // export const deleteLead = (id) => (dispatch, getState) => {
  //   axios
  //     .delete(`/api/leads/${id}/`, tokenConfig(getState))
  //     .then((res) => {
  //       dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
  //       dispatch({
  //         type: DELETE_LEAD,
  //         payload: id,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };
