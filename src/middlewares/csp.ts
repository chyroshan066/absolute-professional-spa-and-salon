export function generateCsp() {
    // Generate a random nonce on the server for each request
    const nonce = crypto.randomUUID();

    // The 'self' source allows scripts from your own domain.
    // The 'wasm-unsafe-eval' is needed because Next.js sometimes uses it.
    // The nonce-value allows only scripts with the matching nonce attribute.
    const csp = [
        `default-src 'self'`,
        `script-src 'self' 'wasm-unsafe-eval' ${process.env.NODE_ENV === 'development' ? `'unsafe-eval'` : ''} 'nonce-${nonce}'`,
        `style-src 'self' 'unsafe-inline'`, // 'unsafe-inline' is often needed for development/styling libraries
        `img-src 'self' data: https:`,
        `font-src 'self'`,
        // Add other directives like connect-src, media-src, etc. as needed
    ].join('; ');

    return { csp, nonce };
}