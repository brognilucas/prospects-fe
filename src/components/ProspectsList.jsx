import React from "react";
import { ProspectItem } from "./ProspectItem";
export const ProspectList = ({ prospects }) => {
  return prospects.map((prospect) => {
    return (
      <div id={prospect.id} style={{ marginTop: "1em" }}>
        <ProspectItem prospect={prospect} />
      </div>
    );
  });
};
