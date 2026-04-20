export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    const url = new URL(request.url);

    // Serve index.html for root
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return env.ASSETS.fetch(request);
    }

    // AI endpoint
    if (url.pathname === '/api/generate' && request.method === 'POST') {
      try {
        const { prompt } = await request.json();

        const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            {
              role: 'system',
              content: 'You are an expert digital marketing copywriter. Write professional, human-sounding marketing content. Be specific, avoid clichés, avoid filler words. Write like a sharp human copywriter, not AI filler.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 800,
        });

        return new Response(JSON.stringify({ text: response.response }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });

      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        });
      }
    }

    // Fallback to static assets
    return env.ASSETS.fetch(request);
  }
};
