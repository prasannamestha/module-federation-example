# Module federation in nextjs example
This repo contains a remote and consumer app template.
The `remote` server exposes Button component. The `consumer` app uses the components exposed by the `remote` server.


## How to run:
Open two terminals and run `$npm run dev` in both `remote` and `consumer` directories

Then open localhost:3000 in the browser - you should be able to see the button `Crispy Button` rendered from the shell repo

## Troubleshooting:
If the installation fails for `@module-federation/nextjs-mf` package - you need to purchase a license at [privjs.com](https://app.privjs.com/buy/packageDetail?pkg=@module-federation/nextjs-mf)