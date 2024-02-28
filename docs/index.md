```js
import { histogram, dot, stackedBar } from "./components/chart.js";
```

```js
const movies250 = FileAttachment("data/movies.csv").csv({ typed: true });
const genres250 = FileAttachment("data/genres.csv").csv({ typed: true });
```

```js
const movies = movies250.filter((d) => d.rank <= top);
const genres = genres250.filter((d) => d.rank <= top);
```

```js
const top = view(Inputs.range([1, 250], { step: 1, value: 250, label: "Top" }));
```

```js
const stackedBarNode = stackedBar(genres, { width });
const outputGenre = Generators.input(stackedBarNode);
```

```js
const selectedGenre = outputGenre ? outputGenre[0].genre : null;
```

<div class="grid grid-cols-2">
  <div class="card">
    <h2>Box office and budget</h2>
    ${dot(movies, { genre: selectedGenre })}
  </div>
  <div class="card">
    <h2>Distribution of publish year</h2>
    ${histogram(movies, { genre: selectedGenre })}
  </div>
</div>
<div class="card">
  <h2>Genres of movies</h2>
  <h3>A movie may belong to multiple genres.</h3>
  ${stackedBarNode}
</div>

<div class="card" style="padding: 10px;">
  ${Inputs.table(movies)}
</div>
