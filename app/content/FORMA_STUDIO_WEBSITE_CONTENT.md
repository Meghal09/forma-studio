# FORMA-STUDIO — Full Website Content & 3D Scene Descriptions

> **Design Rule:** Entire website uses a BRIGHT THEME — white backgrounds, soft gradients, bright accents, clean minimalism. No dark mode. No dark backgrounds.

---

## SECTION 1 — HERO SECTION

---

### Headline

**We Build the Brands People Remember.**

### Subheadline

Forma-Studio is a full-service creative and digital agency. We design identities, build digital experiences, and drive growth — with precision, no guesswork.

### Primary CTA

`Start Your Project`

### Secondary CTA

`See Our Work`

---

### Trust Bar

| Item | Detail |
|---|---|
| **40+ Brands Launched** | Across 8 industries |
| **$12M+ in Client Revenue** | Generated through campaigns |
| **Award-Winning Design** | Awwwards, CSS Design Awards |
| **5+ Years of Experience** | Agency & startup expertise |
| **3 Continents** | Clients in EU, NA, MENA |
| **100% Project Delivery** | On time. Every time. |

---

### Hero Screenshot Placeholder

```
[IMAGE: Forma-Studio Hero — Full-width mockup of a flagship brand identity
and web project, displayed on bright white background]
```

---

### 3D HERO SCENE — React-Three-Fiber Description

**[3D SCENE: Hero — Floating Creative Universe]**

**Environment:**
- Background: Bright white-to-soft-ivory gradient. No hard edges.
- Ambient fog: White, ultra-light density. Creates depth without darkness.
- Ground plane: Reflective white surface with near-invisible grid lines (opacity 0.04).

**Objects:**
- **Large glass sphere** (center-left): Frosted glass material, slight iridescence. Slowly rotates on Y axis. Reflects surrounding environment. Diameter ~2 units.
- **Floating ribbon** (arc across frame): Thin, smooth bezier ribbon in soft white-to-lavender gradient. Animated sine wave undulation. Speed: slow and organic.
- **3D Text Block — "FORMA"**: Bold extruded 3D text, white matte with soft bevel. Floats 0.5 units above ground. Subtle Y-axis bob animation (amplitude: 0.1, period: 3s).
- **Scattered micro-spheres** (background): 20–30 tiny frosted spheres, 0.05–0.15 units diameter. Random float + rotation. Soft particle glow.
- **Abstract geometric shard**: Low-poly diamond shape, mirror chrome material. Off to the right. Slow rotation, catches the key light dramatically.
- **Soft bokeh particles**: 200 points, white, randomized positions in a wide sphere. Opacity 0.3. Faint drift upward.

**Lighting:**
- Hemisphere light: White above, very soft cream below. Intensity 0.8.
- Directional key light: Position [5, 8, 5]. Color white. Intensity 1.2. Casts soft, diffused shadows.
- Point light (accent): Position [-3, 2, 2]. Color: soft lavender (#E8D5FF). Intensity 0.6. No shadows.
- Environment map: Studio HDRI (bright, neutral, indoor).

**Camera:**
- Position: [0, 1.5, 8]
- Looking at: [0, 0.5, 0]
- FOV: 55°
- Animation: Slow auto-rotate around Y axis (±8°), smooth lerp.
- Scroll behavior: Camera pulls backward slightly as user scrolls down (parallax depth).

**Interactions:**
- Mouse hover → micro-spheres drift toward cursor slowly.
- Scroll down → ribbon fades, camera zooms out, scene transitions into Section 2.
- Click on glass sphere → ripple light pulse radiates outward.

---

## SECTION 2 — ABOUT FORMA-STUDIO

---

### Mission Statement

We exist to give great ideas the form they deserve.

Forma-Studio was built on a single belief: that great strategy and great design are not separate disciplines — they are one. We work at the intersection of both to create brands, digital products, and campaigns that move people and move markets.

### What We Stand For

- **Clarity over complexity.** Every decision has a reason.
- **Craft over commodity.** We do not produce templates.
- **Results over aesthetics.** Beauty that doesn't perform is decoration.
- **Partnership over transaction.** We are invested in your growth.

### Why Clients Choose Forma-Studio

- We bring strategic thinking into every creative decision.
- We build systems, not just deliverables — so everything scales.
- We are small enough to care deeply, experienced enough to move fast.
- We have worked with bootstrapped founders and Series B companies. We adapt.

---

### Value Pillars

#### 1. Clarity
We cut through the noise. Strategy, brand, and messaging — aligned and laser-focused before anything is designed.

#### 2. Creativity
Original thinking drives everything we make. No templates, no recycled concepts. Every project is built from your unique position.

#### 3. Precision
Every pixel, every word, every line of code is intentional. We sweat the details because they compound into great work.

#### 4. Results
We measure what we make. Campaigns, websites, and brands are only as good as the outcomes they generate.

---

### 3D ABOUT SCENE — React-Three-Fiber Description

**[3D SCENE: About — Floating Value Pillar Cards]**

**Environment:**
- Background: Pure white (#FFFFFF).
- Soft radial gradient plane behind cards: off-white to light blue-gray at edges.
- No fog. Clean, airy space.

**Objects:**
- **4 floating 3D cards** (one per value pillar):
  - Material: White matte with subtle surface normal variation (micro-texture).
  - Edges: Soft bevel radius 0.05.
  - Each card: ~1.8 × 1.1 × 0.08 units.
  - Arrangement: Slight arc, facing camera with gentle individual tilt angles.
  - Float animation: Each card bobs at slightly different phase offset (organic feel).
  - Card face: Embossed icon + raised text label (extruded 0.02 units).
- **Thin connector lines** between cards: Hairline SVG-style lines in 3D space, opacity 0.15.
- **Ambient dust particles**: 80 soft white specks, slow drift.

**Icons (per card, 3D embossed):**
- Clarity → simplified prism/lens shape
- Creativity → abstract spiral
- Precision → crosshair/target circle
- Results → upward arrow / graph line

**Lighting:**
- Hemisphere: White top, cream bottom. Intensity 1.0.
- Two soft fill lights from left and right. Color: warm white. Intensity 0.4 each.
- No hard shadows — only ambient occlusion in card creases.

**Camera:**
- Position: [0, 0.5, 6]
- Cards spread along X axis: [-3, -1, 1, 3]
- Scroll trigger: Cards animate in from below (Y = -3 → 0) staggered by 150ms.

**Interactions:**
- Hover on card → card elevates 0.3 units, soft shadow intensifies, icon rotates 15°.
- Click → card flips to reveal back content (pillar description text).

---

## SECTION 3 — SERVICES SECTION

---

### Section Intro

**Everything your brand needs. Under one roof.**

We work across the full creative and digital stack — from brand identity to automation workflows. Every service connects to a larger system designed for growth.

---

### Service 01 — Branding

**Build an identity that holds.**

We create brand systems that communicate clearly, scale consistently, and differentiate sharply — across every touchpoint.

**Key Outcomes:**
- Logo + visual identity system
- Brand voice and messaging guidelines
- Color, typography, and motion standards
- Brand book (print-ready + digital)

---

### Service 02 — Web Design & Development

**Your website should be your best salesperson.**

We design and build fast, beautiful, conversion-focused websites. Custom, not template-driven. Responsive, not just mobile-friendly.

**Key Outcomes:**
- Custom UI/UX design
- Next.js or Webflow development
- CMS integration
- Performance-optimized, accessibility-compliant

---

### Service 03 — 3D Digital Experiences

**The web in three dimensions.**

We design immersive 3D web environments and interactive digital experiences that make brands unforgettable. Built with React-Three-Fiber and Three.js.

**Key Outcomes:**
- Interactive 3D landing pages
- Product visualizations
- WebGL animations and transitions
- Real-time 3D brand environments

---

### Service 04 — Marketing Strategy

**Clarity before spend.**

We build marketing strategies grounded in data, competitive research, and a clear understanding of your audience. No guesswork. No wasted budget.

**Key Outcomes:**
- Market and audience analysis
- Positioning + messaging framework
- Channel strategy and roadmap
- KPI framework and reporting structure

---

### Service 05 — Social Media Management

**Consistent presence. Real growth.**

We manage your social channels end-to-end — strategy, content creation, scheduling, and community engagement. Every post has a purpose.

**Key Outcomes:**
- Monthly content calendar
- Platform-specific content (IG, LinkedIn, TikTok, X)
- Engagement management
- Monthly performance reports

---

### Service 06 — Paid Advertising

**Every dollar accountable.**

We run performance-driven paid campaigns across Meta, Google, LinkedIn, and TikTok. Targeting, creative, and optimization — fully managed.

**Key Outcomes:**
- Campaign setup + audience targeting
- Creative production (ads, copy, video)
- A/B testing framework
- ROAS tracking + monthly reporting

---

### Service 07 — Content Production

**Content that earns attention.**

We produce strategic, high-quality content — written, visual, and video — built to perform on every channel and for every audience.

**Key Outcomes:**
- Long-form articles and thought leadership
- Short-form video scripts and production
- Photography art direction
- Brand storytelling assets

---

### Service 08 — Automation & AI Workflows

**Work smarter. Scale faster.**

We build custom automation systems and AI-assisted workflows that reduce manual work, accelerate delivery, and keep your team focused on what matters.

**Key Outcomes:**
- CRM and marketing automation setup
- AI content + data workflows
- Tool integrations (Zapier, Make, n8n)
- Custom GPT and AI agent configuration

---

### 3D SERVICES SCENE — React-Three-Fiber Description

**[3D SCENE: Services — Floating Service Tiles]**

**Environment:**
- Background: Soft white with an ultra-light blue-gray gradient at top.
- Floor: Invisible (no ground plane). Clean floating space.

**Objects:**
- **8 floating white tiles** — one per service:
  - Size: 1.4 × 1.0 × 0.06 units.
  - Material: White PBR material, roughness 0.15, slight reflectivity.
  - Bevel: 0.04 radius, smooth edges.
  - Grid layout: 4 × 2. Slight Z offset alternation for depth (odd tiles: Z=0.3, even: Z=0).
  - Each tile has a 3D embossed icon (unique per service) and a raised text label.
  - Tiles float with subtle individual phase-offset bob animations.
- **Shadow plane** under each tile: Very soft, blurred drop shadow (opacity 0.08).
- **Thin grid lines**: Ultra-light background grid, opacity 0.03.

**3D Service Icons (embossed on tiles):**
- Branding → hexagonal stamp
- Web Design → browser frame outline
- 3D Experiences → cube with orbit ring
- Marketing Strategy → compass rose
- Social Media → speech bubble cluster
- Paid Ads → target/bullseye
- Content → film strip / document stack
- Automation → circuit node network

**Lighting:**
- Hemisphere: White/cream. Intensity 1.0.
- Top directional light: Soft white. Intensity 0.9. Casts faint tile shadows downward.
- Two rim lights (left/right): Soft warm white. Intensity 0.3.

**Camera:**
- Position: [0, 2, 9]
- Slight downward tilt to see tile surfaces.
- Scroll: Tiles animate in with stagger (scale from 0.6 → 1.0 + Y rise).

**Interactions:**
- Hover on tile → tile rises 0.4 units, shadow deepens, icon spins 360° once, subtle bright accent glow appears on tile edges (color: soft cobalt #6B9FFF or lavender #C4A8FF).
- Click → tile expands to full service detail view with smooth 3D morph.

---

## SECTION 4 — PORTFOLIO / CASE STUDIES

---

### Section Intro

**Work that speaks louder than we do.**

Every project in our portfolio began with a real problem. Here is how we solved them — and what happened next.

---

### Case Study 01

**Project:** Apex Ventures — Brand Identity

**Industry:** Venture Capital / Finance

**Problem:** A new VC firm with no visual identity, indistinguishable from competitors in a saturated market. Founders needed to convey credibility and ambition simultaneously.

**Solution:** Built a complete brand system anchored around the concept of "structured momentum" — clean geometric mark, restrained typographic system, deep navy + warm gold palette, and a brand voice that was authoritative without being cold.

**Result:** Launched at a major fintech conference. 3 LP meetings secured within the first week. Featured in a design publication within 30 days.

```
[IMAGE: Apex Ventures Brand Identity — Logo, stationery, brand book spread]
```

---

### Case Study 02

**Project:** Bloom Skincare — E-Commerce Web Experience

**Industry:** Beauty / DTC

**Problem:** An existing Shopify store with a 3.1% conversion rate, high bounce rate, and no clear brand differentiation online. Products were strong; presentation was not.

**Solution:** Full UX audit, redesigned information architecture, custom Shopify theme development with micro-animation system, updated photography art direction, and a revised product copywriting framework.

**Result:** Conversion rate increased to 5.8% within 60 days of launch. Average order value up 22%.

```
[IMAGE: Bloom Skincare — Website desktop + mobile mockup]
```

---

### Case Study 03

**Project:** Kinetic — 3D Product Launch Page

**Industry:** Consumer Technology / Hardware

**Problem:** A hardware startup needed a launch page that could generate pre-orders and media attention — without a physical product available to photograph.

**Solution:** Designed and built a full WebGL product page using React-Three-Fiber. Real-time 3D product model with interactive rotation, animated disassembly sequence, scroll-driven storytelling, and a waitlist flow.

**Result:** 4,200 pre-orders in 14 days. Coverage in 3 tech publications. Page shared organically across design communities.

```
[IMAGE: Kinetic — 3D Product Page — Interactive scene screenshot]
```

---

### Case Study 04

**Project:** Meridian Consulting — Paid Ads & Marketing Strategy

**Industry:** B2B Professional Services

**Problem:** High-ticket consulting firm spending €8,000/month on Google Ads with no lead attribution, no tracking, and a 4.8% CTR on an unoptimized landing page.

**Solution:** Full account restructure, custom landing page with conversion-optimized copy, audience segmentation rebuild, LinkedIn ABM layer, and weekly reporting cadence.

**Result:** CPL reduced by 44% in 90 days. Qualified leads per month increased from 6 to 17.

```
[IMAGE: Meridian — Campaign dashboard + landing page mockup]
```

---

### Case Study 05

**Project:** Nova Collective — Brand + Social + Content System

**Industry:** Creative Agency / Culture

**Problem:** A growing creative collective with no unified visual identity, inconsistent social presence, and no content strategy — despite having genuinely interesting work.

**Solution:** Developed a flexible brand identity system built for creative range, built a 6-month social media strategy and content calendar, produced a monthly editorial-style content series showcasing their projects.

**Result:** Instagram grew from 1,100 to 8,400 followers in 5 months. Inbound project inquiries up 3×.

```
[IMAGE: Nova Collective — Brand guidelines + social grid mockup]
```

---

### 3D PORTFOLIO SCENE — React-Three-Fiber Description

**[3D SCENE: Portfolio — 3D Rotating Project Frames]**

**Environment:**
- Background: White with an ultra-soft warm gradient at bottom.
- Ambient environment: Bright studio.

**Objects:**
- **5 floating project frames**:
  - Each frame: A thin-bezel rectangle, like a framed screen.
  - Material: Frosted white border, screen face shows project screenshot texture.
  - Frame bezel: 0.06 unit thick, white PBR material, slight gloss.
  - Arrangement: Fan arc — frames fanned slightly toward and away from camera, overlapping by 20%.
  - Main featured frame (center): Largest. Others recede in scale on both sides.
  - Each frame bobs gently on Y axis.
- **Thin drop shadows** below each frame.
- **Parallax depth layer**: Background frames move slower than foreground on scroll.

**Lighting:**
- Hemisphere: Bright white. Intensity 1.2.
- Front area light: Soft white, facing camera direction. Illuminates screen faces.
- Rim light top: Soft warm cream from above-behind.

**Camera:**
- Position: [0, 0, 7]
- On scroll: Camera tracks horizontally as user scrolls (projects carousel effect).
- Auto-advance: Every 4s, next frame moves to center position with smooth lerp.

**Interactions:**
- Hover on frame → frame tilts toward viewer 5°, scale up 1.05×, bright thin border highlight appears.
- Click → frame expands to full case study view. Background blurs. Overlay animates in.
- Scroll left/right → frames cycle (mobile swipe supported).

---

## SECTION 5 — HOW WE WORK

---

### Section Intro

**A process built for results, not rituals.**

We don't believe in bloated timelines or endless revision loops. Our process is tight, collaborative, and moves at pace without cutting corners.

---

### Step 1 — Discovery

We learn everything about your business, market, and goals before we touch a brief. Deep listening. Direct questions. No assumptions.

In this phase we map your competitive landscape, interview stakeholders, and define the real problem we are solving. Most agencies skip this. We don't.

**Icon Placeholder:** `[ICON: Magnifying glass]`

---

### Step 2 — Strategy

With clarity established, we build the strategic foundation. Positioning, messaging, channel selection, and creative direction are locked before execution begins.

Strategy is not a document we hand over. It is a shared understanding that guides every decision downstream. We present, align, and move.

**Icon Placeholder:** `[ICON: Chess piece or strategy grid]`

---

### Step 3 — Creation

This is where everything comes to life. Design, copy, development, production — executed by senior talent with a clear brief and zero ambiguity.

We work in sprint cycles with defined review checkpoints. You see progress regularly. Feedback is structured, not chaotic. Revisions are purposeful.

**Icon Placeholder:** `[ICON: Pen tool or creative brush]`

---

### Step 4 — Launch & Optimization

We ship. Then we watch. Then we improve.

Post-launch, we monitor performance, run A/B tests where relevant, and make data-informed optimizations. A great launch is not the end — it is the beginning.

**Icon Placeholder:** `[ICON: Rocket or upward chart]`

---

### 3D HOW WE WORK SCENE — React-Three-Fiber Description

**[3D SCENE: Process — 4-Step Animated Sequence]**

**Environment:**
- Background: Bright white. Clean.
- Steps are revealed sequentially as user scrolls — each step occupies a scroll "frame."

---

**Step 1 Scene — Discovery:**
- **Object:** Floating holographic magnifying glass.
  - Material: Frosted glass lens, thin wireframe handle.
  - Lens: Refracts background geometry subtly (fake refraction shader).
  - Animation: Slow rotation on Y, gentle float on Z.
- **Supporting elements:** Small data point orbs floating into the lens (representing information gathering).
- **Lighting:** Soft white hemisphere. Single soft key from top-right.
- **Trigger:** Animates in when step scrolls into view.

---

**Step 2 Scene — Strategy:**
- **Object:** 3D strategy board — an angled plane with raised grid markers.
  - Material: White matte board surface.
  - On surface: Small 3D chess pieces or node network (abstract strategic positioning).
  - Connector lines between nodes: Bright soft blue (animated draw-in effect).
- **Animation:** Board tilts into view from flat → angled. Nodes appear one by one.
- **Lighting:** Even fill. Soft top directional.

---

**Step 3 Scene — Creation:**
- **Object cluster:** Floating creative tools.
  - A 3D pen tool nib (abstract).
  - A flat abstract shape with gradient color banding.
  - A small cursor arrow.
  - A type "A" glyph (extruded 3D letter).
  - All tools orbit slowly around a central invisible axis.
- **Animation:** Tools float in from edges, orbit, slow rotation.
- **Lighting:** Warm rim light from left. Soft hemisphere.

---

**Step 4 Scene — Launch:**
- **Object:** Upward-pointed rocket (minimal, geometric, white + light accent).
  - Material: White matte body, soft chrome fins.
  - Animation: Rocket accelerates upward. Trail of bright particles (white + soft gold) streams behind.
- **Particle burst:** At peak, particles explode outward in a sphere — bright, soft, 0.2–0.6 opacity.
- **Supporting element:** Rising graph line drawn below (hairline bright line, drawn-on animation).
- **Lighting:** Bright hemisphere. Point light at particle burst peak (warm white glow).

---

## SECTION 6 — TEAM SECTION

---

### Team Introduction

**The people behind the work.**

Forma-Studio is a senior-first team. No juniors unsupervised. No outsourcing without oversight. Every project is handled by specialists who have built brands and products across industries and continents.

---

### Team Member 01

**Name:** [Placeholder — e.g., Alex Morrow]
**Role:** Founder & Creative Director
**Bio:** 10+ years in brand strategy and visual identity. Has led projects for global financial institutions, DTC brands, and tech startups. Believes design is strategy made visible.

```
[IMAGE: Team — Alex Morrow profile photo, bright neutral background]
```

---

### Team Member 02

**Name:** [Placeholder — e.g., Sofia Reinholt]
**Role:** Head of Strategy
**Bio:** Former marketing director at a Series B SaaS company. Brings a performance-first lens to every campaign. Specialist in B2B positioning and go-to-market.

```
[IMAGE: Team — Sofia Reinholt profile photo]
```

---

### Team Member 03

**Name:** [Placeholder — e.g., James Okafor]
**Role:** Lead Web Developer
**Bio:** Full-stack developer with deep expertise in Next.js, Three.js, and React. Builds web experiences that are as fast as they are beautiful.

```
[IMAGE: Team — James Okafor profile photo]
```

---

### Team Member 04

**Name:** [Placeholder — e.g., Mia Chen]
**Role:** 3D Design Lead
**Bio:** Blender and React-Three-Fiber specialist. Creates interactive 3D environments for the web that push what people believe is possible in a browser.

```
[IMAGE: Team — Mia Chen profile photo]
```

---

### Team Member 05

**Name:** [Placeholder — e.g., Rayan Siddiq]
**Role:** Performance Marketing Manager
**Bio:** Managed over €2M in ad spend across Meta, Google, and LinkedIn. Obsessive about attribution, testing, and eliminating wasted budget.

```
[IMAGE: Team — Rayan Siddiq profile photo]
```

---

### Team Member 06

**Name:** [Placeholder — e.g., Elena Vasić]
**Role:** Content & Social Lead
**Bio:** Editorial journalist turned content strategist. Creates content systems that make brands worth following — and worth buying from.

```
[IMAGE: Team — Elena Vasić profile photo]
```

---

### 3D TEAM SCENE — React-Three-Fiber Description

**[3D SCENE: Team — Floating 3D Profile Cards]**

**Environment:**
- Background: Soft warm white, very slight ivory tint.
- Open, bright space.

**Objects:**
- **6 floating profile cards** in a loose arc or staggered grid:
  - Card: 1.0 × 1.3 × 0.07 units.
  - Material: White matte, bevel edges 0.04.
  - Card face: Circle cutout at top (profile photo placeholder, soft frosted disc), name embossed below, role as thinner raised text.
  - Thin colored accent strip on bottom edge (unique accent per card — soft palette: lavender, cobalt, mint, peach, gold, rose).
  - Each card bobs independently at unique phase.
- **Connecting arc lines** between cards: Hairline, opacity 0.1.

**Lighting:**
- Bright hemisphere. Intensity 1.0.
- Per-card soft point light from slightly above: Intensity 0.2 each. Gives each card its own halo.

**Camera:**
- Position: [0, 0.5, 7]
- Slight upward tilt to see card faces clearly.

**Interactions:**
- Hover → card rises 0.35 units, accent strip glows gently, card casts a longer soft shadow.
- Click → card expands. Full bio + linked portfolio appears on back face (card flip animation 180° Y-axis, smooth).

---

## SECTION 7 — PRICING / PACKAGES

---

### Section Intro

**Transparent pricing. No surprises.**

We offer three engagement tiers designed for different stages of growth. All packages are starting prices — final scope is confirmed after your discovery call.

---

### Tier 1 — Starter

**For:** Early-stage brands and founders ready to build a foundation.

**Starting at:** €2,500 / project

**Includes:**
- Brand identity (logo + brand mark + color palette + typography)
- Brand guidelines (single-page PDF)
- 1 landing page design + development
- 1 round of revisions per deliverable
- 2-week delivery

**CTA:** `Book a Discovery Call`

---

### Tier 2 — Growth

**For:** Scaling businesses that need a complete brand and digital system.

**Starting at:** €6,500 / project

**Includes:**
- Everything in Starter
- Full brand identity system (extended mark set, icon set, motion standards)
- 4-6 page website design + development
- Social media template system (8 templates)
- 1-month post-launch support
- 3 weeks delivery

**Most Popular**

**CTA:** `Start Your Project`

---

### Tier 3 — Enterprise

**For:** Established companies requiring full-service creative and marketing partnerships.

**Custom Pricing** — From €15,000 / quarter

**Includes:**
- Full brand and digital strategy
- Custom website (unlimited pages)
- 3D digital experience (if applicable)
- Monthly content production (8 pieces)
- Paid advertising management
- Monthly social media management
- Dedicated account manager
- Weekly reporting + optimization

**CTA:** `Request a Custom Proposal`

---

### 3D PRICING SCENE — React-Three-Fiber Description

**[3D SCENE: Pricing — Floating Elevated Pricing Cards]**

**Environment:**
- Background: White. Soft radial gradient (center bright → edges very soft gray).
- Clean, minimal space.

**Objects:**
- **3 floating pricing cards** in a horizontal row:
  - Starter: Left. Slight recede (Z = -0.5). Scale 0.95.
  - Growth: Center. Raised highest (Y + 0.4). Scale 1.0. "Most Popular" badge: small floating 3D pill above card.
  - Enterprise: Right. Slight recede. Scale 0.95.
  - Card size: 1.6 × 2.2 × 0.08 units.
  - Material: White PBR, roughness 0.1.
  - Growth card: Thin edge glow (soft cobalt blue #5B8BFF, intensity 0.3, animated pulse slow).
  - Each card has embossed tier name, price block, and bullet points as raised micro-text.
- **Drop shadows** below all cards. Growth card shadow slightly larger/softer.

**Lighting:**
- Hemisphere: Bright white. Intensity 1.1.
- Spot on Growth card: Soft white from above-front. Makes center card slightly brighter.
- Subtle fill lights from left and right.

**Camera:**
- Position: [0, 0, 8]
- Slight downward tilt to see card tops.

**Interactions:**
- Hover → card lifts further (0.3 units), shadow spreads, edge glow brightens.
- Growth card: Persistent slow glow pulse animation.
- Click → card zooms to fill screen, full pricing detail + CTA appears.

---

## SECTION 8 — TESTIMONIALS

---

### Section Intro

**What our clients say.**

We let the results speak. Our clients speak too.

---

### Testimonial 01

**Quote:** "Forma-Studio didn't just redesign our brand — they rebuilt how we think about it. The clarity we have now is something I didn't know was possible."

**Name:** [Placeholder — Marcus T.]
**Company:** Apex Ventures

---

### Testimonial 02

**Quote:** "Our website conversion rate went from 3.1% to 5.8% in 60 days. The design is beautiful, but it's the strategy behind it that made the difference."

**Name:** [Placeholder — Lena K.]
**Company:** Bloom Skincare

---

### Testimonial 03

**Quote:** "The 3D launch page they built for us got us 4,200 pre-orders and three press features. I've never seen a web experience like it. Neither had our users."

**Name:** [Placeholder — Tom Allard]
**Company:** Kinetic

---

### Testimonial 04

**Quote:** "Working with Forma-Studio is like having a senior creative director and marketing strategist in-house — without the overhead. Worth every cent."

**Name:** [Placeholder — Priya M.]
**Company:** Meridian Consulting

---

### Testimonial 05

**Quote:** "Our Instagram following grew from 1,100 to 8,400 in five months. But the real win is the brand consistency — everything looks and sounds like us now."

**Name:** [Placeholder — Daniel F.]
**Company:** Nova Collective

---

### Testimonial 06

**Quote:** "They cut our cost per lead by 44%. I've worked with three other agencies and never seen accountability like this. They treat the budget like it's their own."

**Name:** [Placeholder — Aisha R.]
**Company:** Growth Partners Group

---

### 3D TESTIMONIALS SCENE — React-Three-Fiber Description

**[3D SCENE: Testimonials — Floating 3D Quote Bubbles]**

**Environment:**
- Background: Soft warm white with very faint peach tint at bottom.

**Objects:**
- **6 floating quote cards** in a staggered masonry-style 3D arrangement:
  - Size: Varies slightly (1.2–1.8 units wide × 0.8–1.1 units tall × 0.05 deep).
  - Material: White, ultra-soft matte.
  - Speech bubble notch: Small extruded triangle at bottom-left of each card.
  - Contains: Embossed quote mark (large, 3D extruded, opacity 0.08), raised name and company text.
  - Different Z depths (0, 0.3, -0.2, 0.5, -0.1, 0.4) for parallax effect.
  - All float with unique phase-offset Y animations.
- **Soft particle field**: 60 tiny dots, white, distributed behind cards. Slow upward drift.

**Lighting:**
- Bright hemisphere. Intensity 1.0.
- Warm area light from front-below. Gives cards a soft warm face illumination.

**Camera:**
- Position: [0, 0, 9]
- On scroll: Camera drifts horizontally to reveal more cards (hidden off-screen).
- Auto-carousel: Cycles through card groups every 5s.

**Interactions:**
- Hover on card → card brightens slightly, shadow deepens, quote text lifts 0.02 units.
- Mobile: Swipe to cycle through testimonials.

---

## SECTION 9 — FAQ SECTION

---

### Section Intro

**Frequently asked questions.**

Everything you need to know before we start.

---

**Q1: How much does a project cost?**
Our projects start at €2,500 for brand identity and €3,500 for web design. Comprehensive brand + web + marketing engagements typically range from €6,500–€25,000+. Exact pricing is confirmed after a scoping call.

---

**Q2: How long does a typical project take?**
Brand identity: 2–3 weeks. Landing page: 1–2 weeks. Full website: 3–5 weeks. Ongoing retainers are structured in monthly cycles. Timelines are always agreed and contractually confirmed upfront.

---

**Q3: How many revisions do I get?**
All projects include defined revision rounds per deliverable (typically 2). We structure feedback sessions to be productive — not open-ended loops. Additional revision rounds can be added by agreement.

---

**Q4: How do we communicate during the project?**
We work via a dedicated Slack or Notion workspace per client. You will have a single point of contact. We hold weekly check-in calls and share progress updates at every defined milestone.

---

**Q5: Do you work with clients internationally?**
Yes. We work with clients across Europe, North America, and the Middle East. All project work is handled remotely. We are comfortable with asynchronous collaboration across time zones.

---

**Q6: What information do you need to get started?**
After a discovery call, we send a brief questionnaire covering your business, target audience, competitors, and project goals. This brief is the foundation of everything that follows.

---

**Q7: Do you offer retainer arrangements?**
Yes. Our Growth and Enterprise tiers are structured as ongoing monthly partnerships. Retainer clients receive priority scheduling, dedicated support, and preferential rates for out-of-scope work.

---

**Q8: Do you sign NDAs and contracts?**
Yes. Every engagement begins with a signed project agreement that covers scope, deliverables, payment terms, and IP ownership. NDAs are available on request before any sensitive information is shared.

---

**Q9: Who owns the final deliverables?**
You do — fully. Upon final payment, all design files, source code, and assets are transferred to you with no restrictions. We retain the right to showcase work in our portfolio unless otherwise agreed.

---

**Q10: Do you work with startups or only established companies?**
Both. We have worked with pre-revenue founders and Series B companies. The approach adapts to your stage. What matters is the quality of the brief, not the size of the company.

---

**Q11: Can you manage everything — brand, web, and marketing — together?**
Yes. Our Enterprise tier is specifically designed for this. Integrated delivery means strategy, design, and marketing are aligned from day one — which is why results compound faster.

---

**Q12: What happens if I'm not happy with the direction?**
We structure projects with alignment checkpoints before full execution begins. If direction is unclear or misaligned at any checkpoint, we pause and realign. We have never had a project go fully off-track because we do not let it get there.

---

## SECTION 10 — CONTACT SECTION

---

### Contact Headline

**Let's build something worth talking about.**

### Contact Subheadline

Tell us about your project. We will respond within 24 hours with honest initial thoughts — no sales pitch, no automated reply.

---

### Contact Form Fields

- **Full Name** *(required)*
- **Company / Brand Name** *(required)*
- **Email Address** *(required)*
- **Website URL** *(optional)*
- **Services Interested In** *(multi-select: Branding / Web Design / 3D Experience / Marketing Strategy / Social Media / Paid Ads / Content / Automation / Not Sure Yet)*
- **Project Budget Range** *(select: Under €3K / €3K–€7K / €7K–€15K / €15K+ / Let's Discuss)*
- **Tell us about your project** *(textarea, min 50 characters)*
- **How did you hear about us?** *(optional)*
- **Submit CTA:** `Send Your Brief`

---

### Contact Info

**Email:** `hello@formastudio.co` *(placeholder)*

**Office Location:** `[Placeholder — e.g., Warsaw, PL / Amsterdam, NL / Remote-first]*`

**Response Time:** Within 24 hours on working days.

---

### 3D CONTACT SCENE — React-Three-Fiber Description

**[3D SCENE: Contact — Floating Envelope & Connection Lines]**

**Environment:**
- Background: Bright white with a very soft sky-blue gradient at the top.
- Clean, open, airy.

**Objects:**
- **3D Envelope** (center-right of scene):
  - Minimalist geometric envelope shape. White matte body, soft chrome clasp.
  - Flap slightly open — animated slow open/close loop (inhale/exhale).
  - Soft particle stream from envelope to contact form direction.
- **Glowing connection lines**:
  - 4–5 thin lines arc from envelope outward to edge of frame.
  - Lines are animated draw-in: starts from envelope, extends outward slowly.
  - Color: Soft bright cobalt (#6B9FFF), opacity 0.25.
  - Dotted at endpoints with small sphere nodes.
- **Floating micro text blocks** (abstract): Tiny 3D text fragments float near envelope — representing messages. Opacity 0.1. Drift upward and fade.
- **Ambient particle field**: 50 soft white particles, slow float.

**Lighting:**
- Bright hemisphere. White top, soft cream bottom. Intensity 1.0.
- Point light inside envelope: Soft warm white glow — as if the envelope is glowing from within.
- Fill light from front: Even, soft.

**Camera:**
- Position: [1, 0.5, 6]
- Envelope is off-center, leaving space for the contact form on the left.
- On scroll into section: Envelope animates in from right, connection lines draw themselves.

**Interactions:**
- Hover on envelope → flap opens fully, bright inner glow pulses.
- Form submission → confetti particle burst (soft white + brand accent colors). Envelope seals and floats upward.

---

## SECTION 11 — FOOTER + LEGAL

---

### Footer Structure

```
[FORMA-STUDIO LOGO]

Column 1 — Company
- About Us
- Our Work
- Services
- Team
- Careers (Coming Soon)

Column 2 — Services
- Branding
- Web Design
- 3D Experiences
- Marketing Strategy
- Social Media
- Paid Ads
- Content Production
- Automation & AI

Column 3 — Connect
- hello@formastudio.co
- [LinkedIn]
- [Instagram]
- [Behance / Dribbble]
- [Twitter / X]

Column 4 — Legal
- Terms of Service
- Privacy Policy
- Cookie Policy
```

---

### Footer Bottom Bar

```
© 2025 Forma-Studio. All rights reserved.
Registered in [Country Placeholder].
```

---

### Company Info Placeholder

- **Company Name:** Forma-Studio Creative Agency
- **Registration:** [Placeholder — Company No. / VAT No.]
- **Registered Address:** [Placeholder]

---

### Legal Pages (Placeholder Titles)

- **Terms of Service** — Covers project agreements, payment terms, intellectual property, deliverables, dispute resolution.
- **Privacy Policy** — Covers data collection, storage, third-party tools (analytics, CRM), and GDPR compliance.
- **Cookie Policy** — Covers essential, analytics, and marketing cookies with opt-in/out controls.

---

## SECTION 12 — 3D MAIN PAGE: FULL DIGITAL ENVIRONMENT

---

### Concept

**[3D SCENE: Forma-Studio HQ — Full Bright 3D World]**

The main page is an explorable 3D headquarters — a bright, minimalist architectural space where each room or zone represents a division of the agency. The user scrolls through a camera path that moves through this environment, revealing each room in sequence.

---

### Overall Environment

- **Aesthetic:** Modern minimal architecture. White walls, light oak floors, frosted glass partitions, chrome accents.
- **Scale:** Expansive but approachable. Not overwhelming. Ceiling height: high.
- **Atmosphere:**
  - Bright natural light simulation (large skylight windows at top).
  - Very soft ambient occlusion in corners.
  - Floating holographic overlays throughout (labels, tools, data).
  - Subtle dust particles in shafts of light.
- **Materials:** PBR white matte (walls/floors), frosted glass (partitions), light chrome (fixtures), warm oak (accents).
- **Fog:** Very light, white, low density. Creates depth at far end of space.

---

### Room Layout

**Room 1 — Reception / Hero Zone**
- Large glass entrance. Forma-Studio logomark hangs in 3D above reception desk.
- Floating quote: "We Build the Brands People Remember."
- Soft particle welcome animation.

**Room 2 — Branding Studio**
- Walls lined with abstract brand mark panels.
- Floating color palette swatches in 3D.
- Rotating logo mark constructions in center.
- Tools: Pen, grid, color wheel — all 3D, floating.

**Room 3 — Web Lab**
- Large screen mockups floating on wall.
- Code snippets drifting past in soft opacity.
- Browser window frame objects in 3D.
- Floating performance metrics (LCP, CLS, TTI) as holographic readouts.

**Room 4 — 3D Studio**
- Darkest room (but still BRIGHT) — soft blue-white lighting.
- Blender-like viewport floating in space.
- Geometric 3D objects orbiting slowly (spheres, shards, ribbons).
- Glass surfaces reflecting environment.

**Room 5 — Strategy Room**
- Long meeting table in 3D. Holographic boards float above it.
- Node network on one wall (strategy diagram).
- Floating KPI metrics and funnel diagrams.

**Room 6 — Ads & Performance**
- Screens with campaign dashboards.
- Target/bullseye 3D objects orbiting.
- Numbers scrolling: CTR, ROAS, CPL.

**Room 7 — Social & Content Studio**
- Grid wall of content cards floating in 3D.
- Camera object (abstract) in center.
- Film strip ribbon floating above.

**Room 8 — Automation Lab**
- Circuit board aesthetic floor (light, clean version).
- Node network with flowing animated data lines.
- AI orb — glowing white sphere pulsing.
- Automation flow diagram in holographic 3D.

---

### Camera Path (Scroll-Driven)

- **Entry:** Front of building. Camera faces entrance. Forma-Studio sign above.
- **Scroll 1:** Moves through reception zone.
- **Scroll 2–3:** Pans left into Branding Studio. Slow arc movement.
- **Scroll 4–5:** Transitions right to Web Lab. Linear track along wall of screens.
- **Scroll 6:** Pulls back to reveal 3D Studio. Camera tilts up slightly.
- **Scroll 7–8:** Moves through Strategy Room. Camera tilts to show table overhead.
- **Scroll 9:** Quick pan to Ads zone.
- **Scroll 10:** Drifts into Social Studio.
- **Scroll 11–12:** Final room — Automation Lab. Camera slows, centers on AI orb. Gentle pulse animation. CTA floats in: "Start Your Project."

---

### Lighting Setup

- **Global:** Large skylight hemisphere from above. Intensity 1.2. Clean white.
- **Room lighting:** Each room has own light character:
  - Branding: Warm soft white
  - Web Lab: Cool neutral white
  - 3D Studio: Soft blue-white
  - Strategy: Even neutral white
  - Ads: Slightly warm
  - Social: Warm + bright
  - Automation: Cool white + soft blue pulse
- **Accent lights:** Frosted glass partitions glow faintly from behind (soft white).
- **Holographic glows:** Each holographic overlay emits very soft light on surfaces.

---

### Interaction Triggers

- **Hover on room zone:** Holographic label appears with room name + division description.
- **Click on room:** Camera smoothly transitions to that room's sub-page or expanded view.
- **Hover on 3D object:** Object gently pulses, tooltip appears.
- **Scroll to CTA zone:** Environment brightens, objects slow, clear CTA overlay appears.

---

### Performance Structure (R3F Optimized)

- Use `drei` library: `<Environment>`, `<ContactShadows>`, `<Float>`, `<Html>`.
- Lazy load rooms off-screen using Suspense boundaries.
- Instanced geometry for repeated objects (particles, micro-spheres).
- LOD (Level of Detail) for room geometry — simplified at distance.
- Use `useFrame` for animation loops (avoid re-renders).
- Draco compressed GLTF for all room models.
- Preload critical assets (logo, Room 1) on initial load. Defer Rooms 4–8.
- Target: 60fps on desktop, 30fps minimum on mobile.

---

## SECTION 13 — 3D SUB-PAGES

---

### SUB-PAGE 1 — Services Page

**[3D SCENE: Services Page — Workshop Environment]**

**Scene Layout:**
- A single large bright open workshop/studio room.
- 8 service "stations" arranged in a wide arc.
- Each station: A floating table with relevant 3D tools + icon.
- Center: Open floor for camera navigation.

**Camera Movement:**
- Default view: Center of the arc. All stations visible.
- Hover on station: Camera slowly dolly-zooms toward it.
- Click: Camera moves to station. Full service detail appears as holographic overlay.

**Lighting:**
- Bright overhead skylights. Even illumination.
- Per-station accent light: Unique soft color per service zone.
- Ambient: White hemisphere.

**3D Objects per Station:**
- Branding: Logo mark pieces assembling/disassembling in slow loop.
- Web: Browser frame with morphing layout inside.
- 3D: Geometric sculpture spinning.
- Strategy: Floating chessboard.
- Social: Floating content grid.
- Ads: Target with orbiting metric orbs.
- Content: Camera + film strip.
- Automation: Flowing circuit board panel.

**Interaction Logic:**
- Each station glows softly when hovered.
- Service tiles in 2D UI overlay appear on click, anchored to 3D station position.
- Back button: Camera returns to center.

---

### SUB-PAGE 2 — Portfolio Page

**[3D SCENE: Portfolio Page — Gallery Hall]**

**Scene Layout:**
- Long bright gallery corridor. White walls, polished light floor.
- Project frames mounted along both walls — large, thin-bezel screens.
- Some projects float off-wall in center of corridor.
- Corridor extends into soft depth fog (white, low density).

**Camera Movement:**
- Entry: Camera at beginning of corridor, looking down the hall.
- Scroll: Camera walks forward through corridor. Projects revealed in sequence.
- Hover: Camera gently turns to face the hovered project frame.
- Click: Camera moves to frame. Frame expands. Case study overlay appears.

**Lighting:**
- Corridor ceiling has evenly spaced soft recessed lights.
- Each project frame has a soft top-mounted gallery spotlight.
- Warm ambient fill throughout.

**3D Objects:**
- Project frames: Large screens with screenshot texture + white matte bezel.
- Floating metadata: Small 3D tag objects beside each frame (industry, service type).
- Floor reflection: Very subtle, adds depth.

**Interaction Logic:**
- Hover frame → spotlight brightens, frame shifts toward camera slightly.
- Click → immersive case study view. Background corridor blurs. Full content appears.

---

### SUB-PAGE 3 — Team Page

**[3D SCENE: Team Page — Open Atrium]**

**Scene Layout:**
- Bright open atrium. High ceilings. Lots of natural light simulation.
- 6 floating profile "pods" suspended in the atrium — arranged in two rows of three.
- Each pod: A floating disc platform with a profile card above it.
- Center floor: Forma-Studio logotype extruded in 3D on floor (very subtle, low height).

**Camera Movement:**
- Entry: Wide overhead shot of atrium.
- Scroll: Camera descends to eye level. Profile pods come into focus.
- Hover: Camera tilts gently toward hovered pod.
- Click: Camera moves to pod. Profile expands.

**Lighting:**
- Sky roof: Large white hemisphere from directly above. Main source.
- Per-pod light: Soft warm white from above each pod. Creates individual halo.
- Very soft ambient fill.

**3D Objects:**
- Profile pod: Circular platform disc (white, slight chrome edge), floating profile card above.
- Profile card: As described in Section 6 3D scene.
- Thin light beams from ceiling to each pod: Soft white cylinders, opacity 0.04.

**Interaction Logic:**
- Hover pod → platform disc rotates slowly, card elevates, accent color strip glows.
- Click → card flips, full bio + role + links on reverse.

---

### SUB-PAGE 4 — Contact Page

**[3D SCENE: Contact Page — Bright Communication Hub]**

**Scene Layout:**
- Open minimalist room. One large floor-to-ceiling window on right (simulated external light).
- Left: Contact form in 2D overlay pinned to a floating 3D board.
- Right: 3D communication objects floating in window light.
- Center: Clear open space between form and 3D objects.

**Camera Movement:**
- Entry: Camera faces center of room. Both form zone and 3D zone visible.
- No scroll path — static scene with slow ambient animation.
- Camera breathes: Very slow +/- 0.05 Y drift. Gives life to scene.

**Lighting:**
- Window light from right: Strong warm-white directional. Creates volumetric light shaft (soft, not dramatic).
- Ambient fill: Bright white hemisphere.
- Form zone: Even soft fill from front-left. No harsh shadows.

**3D Objects:**
- Envelope (from Section 10 description): Center-right. Animated flap, inner glow.
- Connection lines: Arcing from form board to envelope.
- Floating spheres (3): Small, frosted, around envelope. Orbit slowly.
- Form board: Flat white 3D plane. 2D contact form is a `<Html>` component embedded in it.

**Interaction Logic:**
- Typing in form → connection lines animate (pulse).
- Submit → envelope seals, particle burst, rises out of window.
- Mobile: 3D scene is a top hero panel. Form below it in standard scroll layout.

---

*End of Forma-Studio Website Content Document.*

---

> **Next Steps:** Content approved → move to component architecture and R3F scene implementation.
> **File:** `FORMA_STUDIO_WEBSITE_CONTENT.md` — v1.0, generated for Forma-Studio project.
