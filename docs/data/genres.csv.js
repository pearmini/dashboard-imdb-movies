import * as d3 from "d3";
import * as path from "path";
import * as fs from "fs";

const filepath = path.resolve("./docs/data/movies.csv");
const raw = fs.readFileSync(filepath, "utf8");
const movies = d3.csvParse(raw);
const genres = movies.flatMap((d) =>
  d.genre.split(",").map((g) => ({ genre: g, rank: d.rank }))
);

process.stdout.write(d3.csvFormat(genres));
