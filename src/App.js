import React, { useState } from "react";
import "./styles.css";
import bc from "./images/bc.webp";
import bk from "./images/bk.webp";
import bl from "./images/bl.webp";
import bp from "./images/bp.webp";
import bq from "./images/bq.webp";
import bs from "./images/bs.webp";
import em from "./images/em.png";
import wc from "./images/wc.webp";
import wk from "./images/wk.webp";
import wl from "./images/wl.webp";
import wp from "./images/wp.webp";
import wq from "./images/wq.webp";
import ws from "./images/ws.webp";
import emgreen from "./images/emgreen.png";
import emgray from "./images/emgray.png";

// function move(from, to) {
//   let boardMap = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8
//   };
//   let mass1 = [boardMap[from[0]], +from[1]];
//   let mass2 = [boardMap[to[0]], +to[1]];
//   let first = field[mass1[0]][mass1[1]];
//   field[mass1[0]][mass1[1]] = field[mass2[0]][mass2[1]];
//   field[mass2[0]][mass2[1]] = first;
// }

const figures = {
  bc,
  bk,
  bl,
  bp,
  bq,
  bs,
  em,
  wc,
  wk,
  wl,
  wp,
  wq,
  ws,
  emgreen,
  emgray
};

function Field(props) {
  return (
    <div className="figures">
      {props.field.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((figure, index) => (
            <img
              onClick={() => {
                props.updateField(moveFigure([rowIndex, index], figure));
              }}
              key={index}
              alt=""
              src={figures[figure]}
            />
          ))}
        </div>
      ))}
      {/* <div className="inputes">
        <br />
        <br />
        <input placeholder="from(a1)" id="from" />
        <input placeholder="to(h8)" id="to" />
        <button
        onclick={Hod(
          document.getElementById("from"),
          document.getElementById("to")
          )}
          className="submit"
          >
          move
          </button>
        </div> */}
    </div>
  );
}

function moveFigure(currentPosition, figureCode) {
  switch (figureCode) {
    case "bp":
      return movePeshka(currentPosition, false);
    case "wp":
      return movePeshka(currentPosition, true);
    default:
      throw new Error("Figure not found");
  }
}

function movePeshka(currentPosition, isWhite) {
  if (isWhite) {
    if (currentPosition[0] === 6) {
      return [
        [currentPosition[0] - 1, currentPosition[1]],
        [currentPosition[0] - 2, currentPosition[1]]
      ];
    } else {
      return [[currentPosition[0] - 1, currentPosition[1]]];
    }
  } else {
    if (currentPosition[0] === 1) {
      return [
        [currentPosition[0] + 1, currentPosition[1]],
        [currentPosition[0] + 2, currentPosition[1]]
      ];
    } else {
      return [[currentPosition[0] + 1, currentPosition[1]]];
    }
  }
}
export function Chess(props) {
  // const [figur, setFigur] = useState({});
  const [field, setField] = useState([
    ["bl", "bc", "bs", "bq", "bk", "bs", "bc", "bl"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wl", "wc", "ws", "wq", "wk", "ws", "wc", "wl"]
  ]);

  function updateField(positions, figure = "emgray") {
    setField((prevField) => {
      const fieldCopy = prevField.map((row) => row.slice());
      for (let i = 0; i < positions.length; i++) {
        fieldCopy[positions[i][0]][positions[i][1]] = figure;
      }
    });
  }

  return (
    <>
      <Field field={field} updateField={updateField} />
    </>
  );
}
