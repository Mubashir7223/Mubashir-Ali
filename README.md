# Mubashir Ali — Developer Portfolio

A responsive, single-page portfolio built with React, Vite, and Tailwind CSS. Its visual direction is based on the supplied black-and-gold reference, with a custom illustrated portrait, responsive navigation, project cards, and subtle hover interactions.

## Project structure

```text
public/
  images/                     # Portrait illustration and static assets
src/
  components/
    layout/                   # Site header and footer
    projects/                 # Reusable project card and preview selector
      visuals/                # Project preview artwork
    sections/                 # Home, about, skills, projects, experience, hobbies, contact
  data/                       # Editable project content
  hooks/                      # EmailJS form behavior
  pages/                      # Page-level section composition
  styles/                     # Tailwind theme and project artwork styles
  App.jsx
  main.jsx
```

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set the EmailJS values if you want the contact form enabled.
4. Run `npm run dev` and open the local URL Vite prints.

## EmailJS

Create two EmailJS templates: one to notify you, and one to send an automatic reply to the visitor. Both receive `from_name`, `reply_to`, and `message`; configure the auto-reply template's **To Email** as `{{reply_to}}`. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in `.env`. The auto-reply template ID is optional: the main contact message will still be delivered if it is missing or its send fails. The public key is intended for browser use; do not put a private key in this project.

## GitHub Pages

The live site is available at [mubashir7223.github.io/Mubashir-Ali](https://mubashir7223.github.io/Mubashir-Ali/). The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. The repository's **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**. Add repository Actions secrets named `SERVICE_ID`, `Message_Received_key`, and `Public_key`; add `Auto_Reply_key` optionally to enable visitor confirmations. The workflow maps them to Vite's `VITE_EMAILJS_*` variables during the build and reports a clear error if a required secret is missing.

## Personalize before launch

- Replace `public/images/mubashir-portrait.svg` with a portrait that represents you.
- Replace the starter project concepts in `src/data/projects.js` and update their preview artwork under `src/components/projects/visuals/`.
- Review the skills and learning milestones in the corresponding section files.
- Update the sample hobbies in `src/components/sections/HobbiesSection.jsx`.
- Replace the placeholder GitHub and LinkedIn URLs in the hero and footer with your profiles.
