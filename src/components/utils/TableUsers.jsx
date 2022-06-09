import React from 'react';
import {Table} from "react-bootstrap";
import {useFetch} from "../../services/profile.service";
import {URLApiExpertSys} from "../../envs/apiExpertSys";
import {Link} from "react-router-dom";

export const TableUsers = () => {
    
    const response = useFetch(`${URLApiExpertSys}/api/user/all`);
    
    return (
        <>
           <div className="mt-5 mx-auto w-50 p-2">
               
               <h3>Lista de usuarios</h3>
               <Table striped bordered hover responsive className="mt-3">
                   <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Email</th>
                   </tr>
                   </thead>
                   <tbody>
                   {!response.loading &&
                       response.data.map((user, k) => {
                           return (
                               <tr key={`${k}user${user.id}`}>
                                   <Link className="nav-link text-dark" to={`${user.id}`}><td>{user.id}</td></Link>
                                   <td>{user.name}</td>
                                   <td>{user.email}</td>
                               </tr>
                           );
                       })
                   }
                   </tbody>
               </Table>
           </div>
            
        </>
    );
};