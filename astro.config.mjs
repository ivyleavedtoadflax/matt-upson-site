// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mattupson.com',
  // GitHub Pages can't send headers, so Astro writes the CSP as a <meta> tag
  // and hashes every inline script and style it emits. A meta CSP can't carry
  // frame-ancestors; that needs a real header.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://mattupson.goatcounter.com",
        "connect-src 'self' https://mattupson.goatcounter.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
});
