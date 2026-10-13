# Description
This is a project of mine aimed to share my journey learning of whatever I'm interested at the moment.
I've just started it (November 2024) so you won't find much now but stay connected and you'll see some updates.

# Technical details
This website is built with simple html, css and js code. I'm not a web developer and everything I know is self-taught.
Any suggestion to make this better is welcome, feel free to contact me anytime.
The hosting is done through an S3 bucket on AWS, I bought the domain with Route53 and content is distributed through cloudfront.
The code is also integrated with this repository on github through codepipeline and it's dynamically updated.
# Giulio Pontiggia — CV

A responsive, static CV website built with plain HTML, CSS, and JavaScript. It presents professional experience, technical skills, certifications, education, and selected projects.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static web server. No build step or package installation is required.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch containing the site and its root (`/`) folder, then save.

The root `index.html` is the site entry point. The site can also be deployed to any static host. The Google Fonts link is optional; system sans-serif and monospace fallbacks are included.

## Personalize

- Update the profile, work history, and contact details in `index.html`.
- Update experience, skills, certifications, education, and project details in `index.html`.
- Adjust colors, type, spacing, and responsive layouts in `style.css`.
- Navigation, scroll reveals, and the current-year label are handled by `script.js`.
