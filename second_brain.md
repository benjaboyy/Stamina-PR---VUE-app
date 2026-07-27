## 2026-07-27

- SRPG10 Netherlands ranking endpoint returns JSON data but no `Access-Control-Allow-Origin` header, so direct browser fetches from the Vue app are expected to fail under CORS. A production-quality live table needs SRPG to allow the app origin or a small backend/proxy.
