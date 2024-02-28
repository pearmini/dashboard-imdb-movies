import * as Plot from "npm:@observablehq/plot";

function isGenre(d, genre) {
  return d.genre.split(",").includes(genre);
}

export function stackedBar(data, { width, height = 100 } = {}) {
  return Plot.plot({
    width,
    height,
    x: { percent: true, label: "Proportion (%) →" },
    marks: [
      Plot.barX(
        data,
        Plot.stackX(
          { order: "x", reverse: true },
          Plot.groupZ(
            { x: "proportion" },
            {
              z: "genre",
              fillOpacity: 0.2,
              inset: 0.5,
              tip: true,
            }
          )
        )
      ),
      Plot.text(
        data,
        Plot.stackX(
          { order: "x", reverse: true },
          Plot.groupZ(
            { x: "proportion", text: "first" },
            { z: "genre", text: "genre", rotate: 90 }
          )
        )
      ),
      Plot.ruleX([0, 1]),
    ],
  });
}

export function dot(data, { width, height, genre } = {}) {
  return Plot.plot({
    width,
    height,
    x: { type: "log", grid: true, nice: 5 },
    y: { type: "log", grid: true, nice: 5 },
    marks: [
      Plot.dot(data, {
        x: "budget",
        y: "box_office",
        stroke: (d) => (isGenre(d, genre) ? "red" : "black"),
        channels: { name: "name", directors: "directors" },
        tip: true,
      }),
    ],
  });
}

export function histogram(data, { width, height, genre } = {}) {
  return Plot.plot({
    width,
    height,
    y: { grid: true },
    color: { legend: true },
    marks: [
      Plot.rectY(
        genre ? data.filter((d) => isGenre(d, genre)) : data,
        Plot.binX(
          { y: "count" },
          { x: { value: "year", thresholds: 20 }, tip: true }
        )
      ),
      Plot.ruleY([0]),
    ],
  });
}
