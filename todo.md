# Website Development Todo List

## Phase 1: Project Setup & Core Structure
- [X] Extract and analyze DOCX content
- [X] Select Next.js website template
- [X] Create Next.js project (`my-nextjs-app` in `/home/ubuntu/`)
- [X] Initialize `todo.md` for progress tracking

## Phase 2: Page Implementation
### Homepage (`app/page.tsx`)
- [X] Create Homepage component
- [X] Implement Hero feature section (top stories with image, headline, teaser, "Read More")
- [X] Implement News feed section (grid/cards for recent articles)
- [X] Implement Scoreboard callout/ticker (linking to Scores page)
- [X] Implement Clear section headings (e.g., "High School News", "7-on-7", "Coach Updates")
- [X] Apply styling: Minimal distraction, clean white/light-gray content areas, bold sans-serif headlines, readable body text.

### Article Pages (`app/articles/[slug]/page.tsx`)
- [X] Create dynamic route for articles
- [X] Create Article Page component
- [X] Display full text, images
- [X] Placeholder for embedded video (HUDL/YouTube)

### Pick’em Fantasy Page (`app/pickem/page.tsx`)
- [X] Create Pick’em Page component
- [X] Design user-friendly interface for name/email collection
- [X] List weekly matchups with clickable picks (initial static implementation)
- [X] Consider optional login/leaderboard (for future enhancement)

### Scores Page (`app/scores/page.tsx`)
- [X] Create Scores Page component
- [X] Design clean layout for weekly matchups and results (initial static implementation)
- [X] Placeholder for embedding live scoreboard (e.g., ScoreStream)
- [X] Implement "This Week’s Games" section

### Teams Page (`app/teams/page.tsx` and `app/teams/[teamId]/page.tsx`)
- [X] Create main Teams Page component (grid/dropdown of teams)
- [X] Create dynamic route for individual team subpages
- [X] Create Team Subpage component
- [X] Display Roster info (placeholder)
- [X] Display Coach-submitted content (placeholder)
- [X] Display Photos/videos (placeholder)
- [X] Display Team preview (500 words - placeholder text)

### Sales Page (Magazine & Merch) (`app/sales/page.tsx`)
- [X] Create Sales Page component
- [X] Promote Top O' Texas Football Magazine (placeholder content)
- [X] Section for ad space, subscriptions, branded merchandise (placeholder)
- [X] Simple shopping cart functionality (placeholder, consider future WooCommerce-like integration)
- [X] Call-to-action for advertisers/schools

### Coach Upload Portal (Optional - `app/coach-portal/page.tsx`)
- [X] Create Coach Upload Portal page component (initially hidden or basic)
- [X] Design basic form for uploading roster PDFs, photos, bios/stats (placeholder)
- [X] Consider optional login/password protection (for future enhancement)

## Phase 3: Global Components & Styling
- [X] Implement Header/Navigation (Sticky top bar: Home, Scores, Pick’em, Teams, Contact)
- [X] Implement Footer (Copyright, quick links, social icons)
- [X] Apply global styles: Color Scheme (Black, Red, White), Fonts (Oswald/Bebas Neue for headlines, Open Sans/Montserrat for body), Layout (Grid-based, wide margins, white/light-gray background, uniform card sizes)
- [X] Ensure Mobile Optimization: Responsive design, sections stack vertically, clean tap targets, hamburger menu.

## Phase 4: Testing & Deployment
- [X] Test all pages and features locally
- [X] Verify responsiveness on different screen sizes
- [X] Prepare for deployment
- [X] Report and send website to user

