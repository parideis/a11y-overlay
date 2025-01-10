# A11Y Overlay: An Honest Accessibility Overlay

**A11Y Overlay** is a free and open-source tool designed to help **users with disabilities** customize their browsing experience. Our primary goal is to discourage misleading marketing claims from commercial overlays, which often promise instant or total compliance with accessibility standards. Accessibility is a process that requires thoughtful design and development—this overlay simply offers **basic** assistive features for end users.

> **Note for Developers**: Please remember that no overlay can replace a fully accessible website. To learn more about best practices and how to integrate accessibility into your workflow, see our [Developer Guidance](#developer-guidance) below.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Criticisms of Existing A11Y Overlays](#criticisms-of-existing-a11y-overlays)  
3. [Project Goals](#project-goals)  
4. [Features](#planned-features)  
5. [Usage](#usage)  
6. [Privacy and Data Protection](#privacy-and-data-protection)  
7. [Developer Guidance](#developer-guidance)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Introduction

Commercial A11Y overlays often promise “one-click” or “one-line-of-code” solutions that claim to make websites fully compliant with WCAG or ADA guidelines. In reality, **true accessibility** involves comprehensive testing, design iteration, and development best practices. Overlays can **complement** (but never replace) a properly accessible website.

---

## Criticisms of Existing A11Y Overlays

1. **Incomplete Accessibility**  
   Many overlays only solve a fraction of the issues users encounter, leaving significant barriers unaddressed.

2. **Misleading Advertising**  
   Companies often claim total or automatic compliance, encouraging website owners to believe they’ve “fixed” accessibility.

3. **User Experience Conflicts**  
   Overlays can interfere with native assistive technology, making the experience worse for some users.

4. **Privacy Concerns**  
   Some commercial overlays track user interactions (e.g., button clicks, settings), raising data protection issues.

5. **Quick-Fix Mentality**  
   Overlays perpetuate the idea that accessibility can be instantly achieved, rather than emphasizing inclusive design and development from the start.

---

## Project Goals

- **User-Focused**  
  Provide useful customization features that genuinely assist users with various disabilities.

- **Honesty and Transparency**  
  Make it clear that overlays are **not** a complete accessibility solution, but an **option** for end users.

- **No Data Collection**  
  Ensure user privacy by not collecting or storing personal or behavioral data.

- **Open Source**  
  Encourage collaboration and improvements from the community.

---

## Planned Features

### 1. Profiles

- **Seizure Safe Profile**  
  Clears flashes and reduces strong color contrasts to minimize seizure triggers.

- **Vision Impaired Profile**  
  Enhances the website’s visuals for better clarity and readability.

- **ADHD Friendly Profile**  
  Emphasizes focus by reducing visual distractions and clutter.

- **Cognitive Disability Profile**  
  Assists with reading and focusing by simplifying content presentation.

- **Keyboard Navigation (Motor)**  
  Allows full navigation of the website using only the keyboard.

- **Blind Users (Screen Reader)**  
  Optimizes the website structure for screen-reader compatibility.

---

### 2. Color Adjustments

- **Dark Contrast**  
- **Light Contrast**  
- **High Contrast**  
- **Adjust Text Colors**  
- **High Saturation**  
- **Adjust Title Colors**  
- **Monochrome**  
- **Adjust Background Colors**  
- **Low Saturation**  

*(“Cancel” options are available to revert to default at any point.)*

---

### 3. Orientation Adjustments

- **Mute Sounds**  
- **Hide Images**  
- **Read Mode & Useful Links**  
- **Reading Guide**  
- **Stop Animations**  
- **Reading Mask**  
- **Highlight Hover / Focus**  
- **Big Black Cursor**  
- **Big White Cursor**  

*(“Select an option” or “#” placeholders can be used to add more orientation tools or custom links.)*

---

### 4. Text Adjustments

- **Increase/Decrease Text Size**  
- **Highlight Titles**  
- **Highlight Links**  
- **Adjust Line Height**  
- **Adjust Letter Spacing**  
- **Text Magnifier**  
- **Align Center / Left / Right**  
- **Default (Reset)**  

---

### 5. Additional Accessibility Options

- **Contrast Mode**  
  Adjust color contrast for easier reading.

- **Enable Blue Filter**  
  Reduce blue light to relieve eye strain.

- **Night Mode**  
  Apply a dark theme for low-light environments.

- **Read Aloud**  
  (Where possible) read on-screen text aloud.

- **Color Deficiency**  
  Simulate or adjust for color vision deficiencies.

- **Hide Images**  
  Remove or mask distracting visuals for better focus.

---

### 6. More Functions

- **Keyboard Navigation**  
  Enhance focus outlines and allow better tab navigation.

- **Large Cursor**  
  Increase cursor size for easier screen tracking.

- **Accessible Font**  
  Switch to simpler, more legible fonts.

- **Stop Animations**  
  Pause or remove autoplaying and looping animations.

- **Turn Off Sound/Audio**  
  Mute audio elements for a quieter experience.

- **Reset All**  
  Revert all settings and customizations to defaults.

These features are aimed at **end users** who need immediate adjustments to a webpage to improve their experience.


## Usage 

1. **Installation**  
 TODO
---

## Privacy and Data Protection

- **No Data Tracking**: This project does not, by default, collect any analytics or personal information.  
- **Local Operation**: All customization occurs locally in the user’s browser, unless you configure otherwise.  
- **User Control**: Users can reset or turn off all features at any time.

---

## Developer Guidance

Although this overlay provides convenience features for **end users**, it does **not** address underlying accessibility issues in your code or content. For genuine compliance with WCAG, ARIA, and other standards:

1. **Incorporate Accessibility by Design**  
   Start accessibility efforts early in the design process—color contrasts, keyboard navigation, alt text, etc.

2. **Use Semantic HTML**  
   Proper headings, landmarks, and element attributes help screen readers and other tools interpret your content correctly.

3. **Follow ARIA Guidelines**  
   When HTML alone isn’t sufficient, use ARIA attributes responsibly (e.g., `aria-labelledby`, `aria-describedby`).

4. **Perform Regular Testing**  
   Use automated tools as **one** part of your strategy, but also conduct manual testing and involve users with disabilities.

5. **Continuous Improvement**  
   Accessibility is an ongoing process. Regular audits and feedback loops ensure that new content remains accessible.

By focusing on these areas, you will **reduce** the need for overlays and truly improve your site’s usability for everyone.

---

## Contributing

We welcome contributions from the community! To get involved:

1. **Fork** this repository.  
2. **Create** a feature branch (e.g., `feature/my-new-feature`).  
3. **Commit** your changes, ensuring each commit has a clear message.  
4. **Open** a pull request, detailing the purpose and scope of your contribution.

Feel free to suggest new features, report bugs, or provide feedback in the issue tracker.

---

## License

This project is distributed under the [MIT License](LICENSE). You can use, modify, and distribute it according to the terms and conditions outlined in the license.

---

### Final Note

The **A11Y Overlay** is intended to **support** users and highlight the importance of honest accessibility. However, **no overlay** can fully substitute a robust, accessibility-first design and development process. We encourage you to use this tool responsibly, respect user privacy, and continue building an **inclusive** digital experience for everyone.
