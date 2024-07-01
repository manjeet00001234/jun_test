import axios from "axios";
import React, { useEffect, useState } from "react";
import "./showdata.css";

const ShowData = () => {
     const [showdata, setShowData] = useState([]);

     // ------------------get Data--------------------
     const getData = async () => {
          try {
               let gres = await axios.get(
                    "https://renderserver-z3g5.onrender.com/data"
               );
               setShowData(gres.data);
               console.log(gres.data, 19);
          } catch (error) {
               console.log(error);
          }
     };

     // ------------------delete Data---------------------

     const deleteData = async (id) => {
          try {
               let dres = await axios.delete(
                    `https://renderserver-z3g5.onrender.com/data/${id}`
               );
               alert("deleted Data");
               getData();
          } catch (error) {
               console.log(error);
          }
     };

     useEffect(() => {
          getData();
     }, []);

     return (
          <div className="main_table">
               <h1>Registration Data</h1>
               <table>
                    <thead>
                         <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>Action</th>
                         </tr>
                    </thead>

                    <tbody>
                         {showdata.map((item) => {
                              return (
                                   <tr>
                                        <td data-column="id">{item.id}</td>
                                        <td data-column="Name">{item.name}</td>
                                        <td data-column="Mobile">
                                             {item.mobile}
                                        </td>
                                        <td data-column="Email">
                                             {item.email}
                                        </td>
                                        <td data-column="Action">
                                             <button
                                                  style={{
                                                       backgroundColor: "red",
                                                  }}
                                                  onClick={() =>
                                                       deleteData(item.id)
                                                  }>
                                                  Delete
                                             </button>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
          </div>
     );
};

export default ShowData;
