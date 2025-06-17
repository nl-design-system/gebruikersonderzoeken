/**
 * Get the CSP value from a single source of truth. For now that single source
 * of truth is the vercel.json config file. Once we migate off of vercel, this
 * file can be updated with a new source of truth without the code being affected
 */

import vercelConfig from '../../vercel.json' with { type: 'json' };

const { key } = vercelConfig.headers[0].headers[0];
let { value } = vercelConfig.headers[0].headers[0];

if (key !== 'Content-Security-Policy') throw new Error('vercel.json is changed, CSP value not found');

// Allow HMR styles and scripts from Vites dev server
if (process.env['NODE_ENV'] === 'development') {
  value += "style-src-elem 'self' 'unsafe-inline';";
  value += "script-src-elem 'self' 'unsafe-inline';";
}

export const cspValue = value;
