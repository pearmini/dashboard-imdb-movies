// See https://observablehq.com/framework/config for documentation.
export default {
  title: "IMDB Movies",
  theme: "dashboard",
  pager: false,
  toc: false,
  header: `<style>

#observablehq-header a[href] {
  color: inherit;
}

#observablehq-header a[target="_blank"] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
}

#observablehq-header a[target="_blank"]:hover span {
  text-decoration: underline;
}

#observablehq-header a[target="_blank"]::after {
  content: "\\2197";
}

#observablehq-header a[target="_blank"]:not(:hover, :focus)::after {
  color: var(--theme-foreground-muted);
}

@container not (min-width: 640px) {
  .hide-if-small {
    display: none;
  }
}

</style>
<div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; height: 2.2rem; margin: -1.5rem -2rem 2rem -2rem; padding: 0.5rem 2rem; border-bottom: solid 1px var(--theme-foreground-faintest); font: 500 16px var(--sans-serif);">
  <h1 class="hide-if-small">IMDB Movies</h1>
  <span style="display: flex; align-items: baseline; gap: 0.5rem; font-size: 14px;">
    <a target="_blank" href="https://github.com/pearmini/dashboard-imdb-movies"><span>View source</span></a>
  </span>
</div>`,
};
