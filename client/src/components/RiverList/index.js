import React from "react";
import { Table } from 'reactstrap';
import "./style.css";
import Moment from 'react-moment';
import 'moment-timezone';
import GaugeModal from '../GaugeModal';
import { Link } from "react-router-dom";


export function RiverTable({ children }) {
  return <Table>
    <thead id="head">
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
function getClassName(level, low, medium, high) {
  if (level === "") {
    return 'no-gauge'
  }
  if (level <= low) {
    return 'lowest'
  }
  if (level > low && level < medium) {
    return 'low'
  }
  if (level >= medium && level < high) {
    return 'medium'
  }
  if (level >= high) {
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
  high,
  id,
  title,
  data,
  level
}) {
  return (
    <tr className={getClassName(level, low, medium, high)} id="table">
      <td> <Link id="link" to={"/" + id}>
        <strong>
          {riverName}
        </strong>
      </Link></td>
      <td>{section}</td>
      <td>{difficulty}</td>
      <td>{gauge !== "none" ? <GaugeModal
        buttonLabel={level}
        data={data}
        title={title}
      /> : <a href={data} target="blank">
       {"flow link"}
       </a>}
      </td>
      <td>{updated}</td>
    </tr>
  );
}
