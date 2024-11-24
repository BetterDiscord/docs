---
layout: home

title: Documentation

hero:
  name: BetterDiscord
  text: User & Developer Documentation
  tagline: Customize your Discord experience
  actions:
    - theme: brand
      text: Quick Start
      link: /users/
    - theme: alt
      text: Install Addons
      link: /users/guides/installing-addons
    - theme: alt
      text: For Developers
      link: /developers
  image:
    src: /branding/split.png
    alt: VitePress

features:
  - icon: 📝
    title: Live Editing
    details: Customize the look and feel of Discord on the fly by adding css snippets!
  - icon: 🔌
    title: Plugins
    details: Add and extend functionality bringing your efficiency to new heights.
  - icon: 🎨
    title: Themes
    details: Transform Discord into another app or even a wallpaper of your choosing.
  - icon: 🧑‍💻
    title: Rapid Development
    details: Create your own addons with our open-ended and flexible system.
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3e82e5 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3e82e5 50%, #41d1ff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
