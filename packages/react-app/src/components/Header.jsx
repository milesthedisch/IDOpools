import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/milesthedisch/IDOpools" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="IDOPools"
        subTitle="Pool together to maximize launchpad IDO chances"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
