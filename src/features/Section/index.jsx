import React from "react";
import "./section.scss";

function Section(props) {
  return <div className="section">{props.children}</div>;
}

Section.propTypes = {};

export function SectionTitle(props) {
  return <div className="section__title">{props.children}</div>;
}

export function SectionBody(props) {
  return <div className="section__body">{props.children}</div>;
}

export default Section;
