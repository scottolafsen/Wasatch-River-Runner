import React from "react";
import { Table } from 'reactstrap';
// import "./style.css";


// RecipeList renders a bootstrap list item
export function RiverTable({ children }) {
  return <Table>
  <thead>
    <tr>
      <th>River</th>
      <th>Section</th>
      <th>Difficulty</th>
      <th>Level</th>
      <th>Updated</th>
    </tr>
  </thead>
  <tbody>
      {children}
  </tbody>
      </Table>
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RiverTableItem({
  riverName,
  section,
  difficulty,
  gauge,
  updated
}) {
  return (
    <tr>
        <td>{riverName}</td>
        <td>{section}</td>
        <td>{difficulty}</td>
        <td>{gauge}</td>
        <td>{updated}</td>
    </tr>
  );
}
