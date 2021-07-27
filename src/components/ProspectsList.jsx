import React from "react";
import { ProspectItem } from "./ProspectItem";
export const ProspectList = ({ prospects }) => {
  return prospects.map((prospect) => (
    <div id={prospect.id || prospect._id} style={{ marginTop: "1em" }}>
      <ProspectItem prospect={prospect} />
    </div>
  ));
};
