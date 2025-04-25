<template>
    <section class="hero">
      <h1>🔥 Fire Golem</h1>
      <h2>Built to battle wildfire. Born from the ground up.</h2>
      <p>
        Fire Golem is a hands-on, founder-built initiative creating smarter wildfire response tools—
        rugged sensors, real-time alerts, and software that actually works in the field.
      </p>
      <p>
        We’re testing on real land. Solving real problems. No fluff, no investors—just grit, gear, and
        goals.
      </p>
      <form id="contact-form">
        <label for="email">Get updates or say hey:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />
        <button type="submit">Join the Journey</button>
      </form>
      <p class="footnote">Currently testing in the field. Updates will be raw and real.</p>
    </section>
  </template>
  
  <style scoped>
  .hero {
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #2c2c2c;
    background: #fff5f0;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #b82e00;
  }
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    color: #4a4a4a;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  input[type='email'] {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  button {
    padding: 0.75rem;
    background-color: #b82e00;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #931f00;
  }
  
  .footnote {
    font-size: 0.875rem;
    color: #666;
    margin-top: 1rem;
  }
  </style>
  