# INTERNSHIP - Task 1: Create a Simple Responsive Landing Page using HTML & CSS

## Overview
As part of my internship, I completed Task 1 by developing a simple responsive landing page using HTML and CSS. This task emphasized building a clean structure with a header, hero section, and footer, while ensuring adaptability across devices through modern layout techniques. The deliverables are two files—`index.html` and `style.css`—located in this directory, which together render a fully functional, responsive webpage.

This README documents the development process, tools utilized, usage instructions, and key learnings, reflecting my approach as a student interning in web development.

## Screenshots
Below is a screenshot demonstrating the landing page on desktop view. (To add your own: Replace the placeholder image path with an actual screenshot file in the same directory.)

![](.resource/screenshot.png)

## Features
- **Header**: Includes a logo and navigation links (Home, About, Contact) using Flexbox for horizontal alignment.
- **Hero Section**: Features a centered heading, paragraph, and call-to-action (CTA) button, styled for visual appeal and responsiveness.
- **Footer**: Contains copyright information and social media links, laid out with Flexbox.
- **Responsiveness**: Utilizes media queries to collapse navigation on small screens, adjust font sizes, and stack elements vertically for mobile devices.
- **Layout Techniques**: Employs CSS Flexbox for one-dimensional layouts (e.g., header, footer) and ensures semantic HTML for accessibility.

## Tools and Setup
The development environment utilized **Visual Studio Code (VS Code)**, chosen for its excellent support for HTML and CSS, including Live Preview and extensions like Live Server for real-time reloading. Testing was conducted in **Google Chrome** browser to inspect responsiveness and validate rendering.

- **Extensions**: Live Server (for local server simulation).
- **No External Frameworks**: Pure HTML and CSS for foundational learning.
- **Prerequisites**: A modern web browser and VS Code installed.

## How to Run the Landing Page
1. **Prepare the Environment**:
   - Ensure VS Code and Chrome are installed.
   - Place `index.html` and `style.css` in the same working directory.
2. **Launch in VS Code**:
   - Open VS Code and load the directory containing the files.
   - Install the Live Server extension if not already present (Extensions > Search "Live Server").
3. **Execute and View**:
   - Right-click `index.html` in VS Code and select "Open with Live Server" (or use the "Go Live" button in the status bar).
   - The page will open automatically in Chrome at `http://127.0.0.1:5500/index.html`.
4. **Test Responsiveness**:
   - Resize the browser window or use Chrome DevTools (F12 > Toggle Device Toolbar) to simulate mobile views.
   - Interact with elements like navigation links and the CTA button.

**Sample View (Desktop)**: Header with inline nav, centered hero, horizontal footer links.  
**Sample View (Mobile)**: Stacked nav, smaller hero text, vertical footer.

If Live Server does not start, ensure port 5500 is available or check VS Code's output panel for errors.

## Development Process
Adhering to the task guidelines, I followed an iterative approach to create a semantic HTML structure and link it to CSS, incorporating Flexbox, media queries, and testing for responsiveness. The process prioritized simplicity and cross-device compatibility.

### Step 1: Initial Planning
- Created `index.html` and `style.css` in VS Code via "New File."
- Added basic HTML boilerplate (DOCTYPE, head with viewport meta for responsiveness) and linked the CSS file in the `<head>`.

### Step 2: Building the HTML Structure
- Structured the body with semantic elements: `<header>`, `<section class="hero">`, and `<footer>`.
- Added content: Logo as text, unordered list for nav links, heading/paragraph/CTA in hero, and paragraph/social links in footer.

### Step 3: Applying CSS Layout and Styling
- Reset styles with universal selector and set base body fonts/colors.
- Used Flexbox for header (`justify-content: space-between`), hero (`justify-content: center`), and footer (`justify-content: space-between`).
- Styled interactive elements: Hover effects on links and CTA button with transitions.

### Step 4: Implementing Responsiveness
- Added media queries: At 768px, stack header/nav vertically and reduce hero fonts; at 480px, further compact hero padding.
- Ensured mobile-first principles by starting with base styles and overriding for larger screens where needed.

### Step 5: Testing and Refinement
- Launched via Live Server and tested in Chrome by resizing the window.
- Used Chrome DevTools to emulate devices (e.g., iPhone) and debug layout breaks.
- Iterated on padding/margins for optimal spacing, resolving a minor Flexbox alignment issue in the footer.

The entire development took approximately one hour, streamlined by VS Code's auto-save and Live Server's instant previews.

## Key Learnings
- **HTML Semantics**: Appreciated the role of elements like `<header>` and `<section>` in improving structure and SEO.
- **CSS Flexbox**: Mastered one-dimensional layouts for efficient alignment without complex floats.
- **Media Queries**: Learned to target breakpoints (e.g., 768px for tablets) for true responsiveness, preventing layout collapses on small screens.
- **VS Code Workflow**: Leveraged Live Server for rapid iteration and Chrome DevTools for precise testing.
- **Challenges Overcome**: Balancing desktop elegance with mobile usability required fine-tuning queries, reinforcing the importance of viewport meta tags.

This task solidified my understanding of front-end fundamentals, equipping me for more intricate web projects in the internship.
