# Forma Studio — Digital Marketing Agency

## How to deploy (Cloudflare Workers via GitHub)

This is a **Cloudflare Worker** project — NOT a Pages project.
The AI generator runs on Cloudflare's free AI models, so no API key is needed.

---

### Step 1 — Upload to GitHub

1. Create a new GitHub repository (e.g. `forma-studio`)
2. Upload ALL files keeping the folder structure:
   ```
   forma-studio/
   ├── public/
   │   └── index.html
   ├── worker.js
   ├── wrangler.toml
   └── README.md
   ```

---

### Step 2 — Deploy via Cloudflare Workers

1. Go to **dash.cloudflare.com**
2. Click **Workers & Pages** in the left sidebar
3. Click **Create** → **Worker**
4. Click **Connect to Git** (or use the dashboard editor)
5. Select your GitHub repository
6. Build settings:
   - **Build command:** `npx wrangler deploy`
   - **Build output:** (leave blank)
7. Click **Save and Deploy**

### Alternative — Deploy manually in 2 minutes

1. Go to **dash.cloudflare.com** → **Workers & Pages** → **Create** → **Worker**
2. Click **Edit code**
3. Paste the contents of `worker.js` into the editor
4. Click **Save and Deploy**
5. Then go to the Worker → **Settings** → **Bindings**
6. Add binding: Type = **AI**, Variable name = **AI**
7. Save — done.

---

### Enable AI binding (required for the content generator)

In your Worker settings:
- Go to **Settings** → **Bindings**
- Click **Add binding**
- Type: **Workers AI**
- Variable name: `AI`
- Save

This uses Cloudflare's free AI tier (no credit card needed for basic usage).

---

### Customise before going live

In `public/index.html`, search and replace:
- `Forma Studio` → your agency name
- `hello@formastudio.pl` → your email
- `+48 000 000 000` → your phone number
- `Warsaw, Poland` → your location
- Prices (800 zl, 999 zl etc.) → your actual prices
