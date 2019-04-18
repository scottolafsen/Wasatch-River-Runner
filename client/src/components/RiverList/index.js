import React from "react";
import { Table } from 'reactstrap';
// import "./style.css";
import Moment from 'react-moment';
import 'moment-timezone';


export function RiverTable({ children }) {
  return <Table>
  <thead>
    <tr>
      <th>River</th>
      <th>Section</th>
      <th>Difficulty</th>
      <th>CFS</th>
      <th>Updated</th>
    </tr>
  </thead>
  <tbody>
      {children}
  </tbody>
      </Table>
}
function getClassName (gauge, low, medium, high){
  if (gauge === ""){
    return 'no-gauge'
  }
  if (gauge <= low){
    return 'lowest'
  }
  if (gauge > low && gauge < medium){
    return 'low'
  }
  if (gauge >= medium && gauge < high){
    return 'medium'
  }
  if (gauge >= high){
    return 'high'
  }
  
}
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RiverTableItem({
  riverName,
  section,
  difficulty,
  gauge,
  updated,
  low,
  medium, 
  high
}) {
  return (
    <tr className={getClassName(gauge, low, medium, high)}>
        <td>{riverName}</td>
        <td>{section}</td>
        <td>{difficulty}</td>
        <td className="flow">{gauge}</td>
        <td><Moment fromNow>{updated}</Moment></td>
    </tr>
  );
}
