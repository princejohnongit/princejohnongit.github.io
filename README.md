<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Moolamattom | The Powerhouse of Kerala</title>
  <style>
    :root {
      --primary: #059669;
      --primary-dark: #047857;
      --bg: #f8fafc;
      --surface: #ffffff;
      --text: #0f172a;
      --text-muted: #475569;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    body {
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    /* Navigation */
    header {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid #e2e8f0;
    }

    .nav-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--primary-dark);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-muted);
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%);
      color: white;
      text-align: center;
      padding: 5rem 1.5rem;
    }

    .hero h1 {
      font-size: 2.75rem;
      margin-bottom: 1rem;
      font-weight: 800;
    }

    .hero p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto 2rem auto;
      opacity: 0.9;
    }

    .btn {
      display: inline-block;
      background-color: #ffffff;
      color: var(--primary-dark);
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    }

    /* Main Container */
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 4rem 1.5rem;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      text-align: center;
      color: var(--text-muted);
      margin-bottom: 3rem;
    }

    /* Attractions Cards */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .card {
      background: var(--surface);
      border-radius: 12px;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .card-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .card h3 {
      margin-bottom: 0.75rem;
      color: var(--primary-dark);
    }

    .card p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    /* Info Box */
    .info-box {
      background: #ecfdf5;
      border-left: 4px solid var(--primary);
      padding: 2rem;
      border-radius: 0 12px 12px 0;
      margin-top: 4rem;
    }

    .info-box h3 {
      color: var(--primary-dark);
      margin-bottom: 1rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .info-item h4 {
      font-size: 0.85rem;
      text-transform: uppercase;
      color: var(--text-muted);
      letter-spacing: 0.05em;
    }

    .info-item p {
      font-weight: 600;
      color: var(--text);
    }

    /* Footer */
    footer {
      background-color: #0f172a;
      color: #94a3b8;
      text-align: center;
      padding: 2rem 1.5rem;
      margin-top: 4rem;
    }

    footer p {
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <header>
    <div class="nav-container">
      <a href="#" class="logo">⚡ Moolamattom</a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#attractions">Highlights</a></li>
        <li><a href="#facts">Travel Info</a></li>
      </ul>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="hero">
    <h1>Welcome to Moolamattom</h1>
    <p>Nestled in the foothills of the Western Ghats, home to India's largest underground hydroelectric power station and endless green vistas.</p>
    <a href="#attractions" class="btn">Explore Highlights</a>
  </section>

  <!-- Content Section -->
  <main class="container">
    
    <!-- About Section -->
    <section id="about" style="margin-bottom: 4rem;">
      <h2 class="section-title">A Hidden Gem in Idukki</h2>
      <p class="section-subtitle">Combining technological engineering with pristine natural beauty</p>
      <p style="text-align: center; max-width: 800px; margin: 0 auto; color: var(--text-muted);">
        Moolamattom is a picturesque town situated in the Idukki district of Kerala, India. Known primarily for the Idukki Hydroelectric Project, it is a vital contributor to Kerala's power grid while offering visitors calm backwaters, lush rubber plantations, and rolling hills.
      </p>
    </section>

    <!-- Key Attractions -->
    <section id="attractions">
      <h2 class="section-title">Key Attractions</h2>
      <p class="section-subtitle">What makes Moolamattom unique</p>
      
      <div class="grid">
        <div class="card">
          <div class="card-icon">⚡</div>
          <h3>Underground Power Station</h3>
          <p>India’s largest underground power station, built deep inside a rocky mountain. Water from the Idukki reservoir flows down through penstock pipes to generate hydroelectric power here.</p>
        </div>

        <div class="card">
          <div class="card-icon">🌊</div>
          <h3>Malankara Dam & Lake</h3>
          <p>A popular picnic and boating spot situated nearby on the Thodupuzha River. Its peaceful surroundings and well-maintained tourism park make it perfect for relaxing afternoons.</p>
        </div>

        <div class="card">
          <div class="card-icon">⛰️</div>
          <h3>Scenic Viewpoints</h3>
          <p>Surrounded by high slopes like Ilaveezhapoonchira and Meenuliyan Para, offering panoramic vistas, mist-covered hills, and ideal trekking terrain for adventure enthusiasts.</p>
        </div>
      </div>
    </section>

    <!-- Travel Info -->
    <section id="facts" class="info-box">
      <h3>Plan Your Trip</h3>
      <div class="info-grid">
        <div class="info-item">
          <h4>District</h4>
          <p>Idukki, Kerala</p>
        </div>
        <div class="info-item">
          <h4>Nearest Town</h4>
          <p>Thodupuzha (~22 km)</p>
        </div>
        <div class="info-item">
          <h4>Best Time to Visit</h4>
          <p>September to February</p>
        </div>
        <div class="info-item">
          <h4>Nearest Airport</h4>
          <p>Cochin International (COK)</p>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; Explore Moolamattom — Idukki, Kerala.</p>
  </footer>

</body>
</html>
