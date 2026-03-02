export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Forward the request to Google's API servers instead
    url.hostname = 'generativelanguage.googleapis.com';
    return fetch(new Request(url.toString(), request));
  },
};