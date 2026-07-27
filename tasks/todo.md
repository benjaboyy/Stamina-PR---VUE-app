- [x] Inspect route/nav/home patterns and SRPG response shape
- [x] Add Dutch SRPG ranking route, view, and navigation links
- [x] Run build/lint and review changes
- [x] Remove SP display and improve mobile rank contrast
- [x] Restyle SRPG player names and move mobile player link to icon

## Review

- Added `/dutch-srpg-ranking` as a lazy-loaded Vue route.
- Added buttons from the home screen and More menu.
- Added a Dutch SRPG ranking view that maps the Netherlands SRPG10 endpoint rows into rank/player/level/EXP.
- `npm run lint` passes.
- `npm run build` passes with existing dependency/browserlist/asset-size warnings.
- SRPG10 CORS access was enabled after deployment, so the direct browser fetch should work online.
- Removed SP from the table/card UI and improved mobile placement tile contrast.
- Restyled player names as plain larger white text and moved the mobile card player link to a top-right external-link icon.
