# Walkthrough of Portfolio Website Customizations

Here is a summary of the visual customizations and functionality updates completed on your portfolio website.

## Changes Made

### 1. Doodle Customizations & Interactive Effects
- **Continuous Floating Animations**: Replaced the hover-only animation behavior on static doodles with the theme's pre-configured `animate-float-slow` keyframe helper class, enabling a continuous, smooth floating motion loop without requiring hover:
  - **Pencil Doodle** (`Education.jsx`): Floats smoothly up and down at `rotate-[-20deg]` continuously.
  - **Speech Bubble Doodle** (`Education.jsx`): Floats smoothly up and down at `rotate-[15deg]` continuously.
  - **Star Doodle** (`Skills.jsx`): Floats smoothly up and down at `rotate-[-15deg]` continuously (replacing `animate-pulse`).
  - **Light Bulb Doodle** (`Skills.jsx`): Floats smoothly up and down at `rotate-[12deg]` continuously.
- **Hover Scale Up**: Retained reactive hover states (`hover:scale-120 hover:rotate-...` transition classes) on these floating doodles to complement the floating loop animation.
- **Star Doodle Shift (Skills Section)**: Shifted the yellow `StarDoodle` in the Skills section header lower by changing its class positioning from `-top-6` to `top-2`.
- **Pencil Doodle Shift (Learning Journey)**: Shifted the `PencilDoodle` in the Learning Journey section header (`src/components/Education.jsx`) lower by changing its class positioning from `-top-6` to `top-2`.
- **Replaced Orange Line Doodle (Projects Section)**: Removed the orange line `ArrowDoodle` and the sparkle doodle from the projects header and replaced them with hand-drawn, black ink style doodle graphics created from your sketch sheet ideas:
  - **Magnifying Glass Doodle** (`MagnifyingGlassDoodle`) filled with soft lavender (`#E2D4F0`) on the left side of the header.
  - **Case Folder Doodle** (`FolderDoodle`) filled with soft yellow (`#FFE066`) on the right side of the header.
- **Magnifying Glass Doodle Shift**: Shifted the `MagnifyingGlassDoodle` on the left of the Projects section header to the right and lower (`top-20 left-[16%]`) to ensure perfect visual spacing and balance around the "Interactive Case Studies" text.

### 2. Learning Journey Layout & Card Resizing (`src/components/Education.jsx`)
- **Card Resizing**: Reduced the size (padding, spacing, min-height, and font sizes) of both the **Priya Kholiya Profile card** and **Education History card** in the left column. This layout adjustment ensures they complement the height of the right-side cards perfectly.
- **My Approach Card Removal**: Removed the **My Approach** sticky note card and its local `HandDrawnArrow` component definition entirely from the "My Learning Journey" section. The section now cleanly displays only the profile, education, and credentials/rating cards.

### 3. Custom Hover Cursor (`src/index.css`)
- **Transparency Correction**: Removed the fake checkerboard background from the uploaded hand-pointer image using a flood-fill algorithm, rendering it fully transparent.
- **Sizing & Hotspot**: Created standard cursor sizes (including 24x24 px and 32x32 px versions).
- **Match Default Cursor Scale**: Sized the hover hand pointer to **24x24 px** to match the size of the default arrow cursor exactly. The finger tip hotspot for the 24x24 px hand is precisely at coordinates `9 1`.
- **CSS Rule**: Set the cursor to change on hover of interactive elements (navigation links, buttons, project cards, links, social media icons, and any elements with class `cursor-pointer` or inline `cursor: pointer` style).
- **Exclusion rule (`src/components/Hero.jsx`)**: Removed the `cursor-pointer` class from the **Nice to meet you!** thought bubble card so it doesn't trigger the custom hover hand pointer, preserving the default orange triangle cursor when hovering over it.

### 4. LinkedIn Link Update (`src/components/Contact.jsx`)
- Updated all links and displays targeting your LinkedIn profile to the new URL: `https://www.linkedin.com/in/priyakholiya` (and text updated to `linkedin.com/in/priyakholiya`).

### 5. Case Study Redesign, Live Links, and Cards (`src/components/Projects.jsx`)
- **Live Links**: Added live deployment Vercel URLs to the projects portfolio data:
  - **Sanskriti (E-Commerce)**: `https://sanskriti-frontend.vercel.app`
  - **Restaurant Website**: `https://chill-and-grill.vercel.app`
- **New Tab Configuration**: Configured the **Live** anchor tag buttons on both cards with `target="_blank"` and `rel="noopener noreferrer"` to launch the project websites in a new tab securely.
- **Subheading Update**: Updated the project section subheading in `Projects.jsx` to: `"A curated collection of UI/UX designs and full-stack web applications."`
- **Folder Style Case File Modal**: Redesigned the "Read Case Study" popup to look and feel like an interactive vintage case folder:
  - Added binder hole loops and a **CLASSIFIED** stamp in the header alongside binder rings.
  - Placed a top-left decorative `PaperClip` overlay.
  - Added tag badges for metadata (`Solo Project`, `3 Weeks`, `Responsive`).
  - Added Problem (pink background), Solution (lavender background), and Impact (light green background) process cards with hover lift animations and sticky note tape graphics.
  - Added a dedicated tech stack list with small scrapbook-labeled tags.
  - Structured features into parallel `Customer` and `Admin` columns.
  - Refactored highlights to list core roles.
  - Customized the footer sign-off with `"Designed & Developed by Priya Kholiya"` and corresponding tech badges.
- **Sanskriti Image & Card Description Update**:
  - Saved the new premium Sanskriti showcase layout screenshot as `public/sanskriti_project_new.jpg` and applied it to the card.
  - Updated the Sanskriti card description on the main projects grid to: *"A premium full-stack e-commerce platform for handcrafted ethnic fashion, featuring a seamless shopping experience with an integrated inventory and admin management system."* (this card description is kept separate and is not shown inside the popup modal).
- **Project Cards Layout Compactness**:
  - Reduced the overall size of the two project cards in the main grid from `max-w-lg` to `max-w-md` (`max-w-[448px]`) to balance with other card components.
  - Replaced the previous 5 tech stack badges on the main card view with 3 curated highlights (`Full Stack`, `E-Commerce`, `Responsive` for Sanskriti; `Frontend`, `Interactive`, `Responsive` for Restaurant Website).
  - Redesigned these tags as clean uppercase/proper capitalized brutalist labels (using direct string text output instead of lowercase `#` prepending) with balanced spacing and thick borders.

---

## Verification & Screenshots

- **Build Check**: Ran `npm run build` and confirmed the project bundles successfully without any errors.
