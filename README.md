<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prince John - AI & Full-Stack Developer</title>
    <style>
        /* CSS Styles */
        :root {
            --bg-color: #0b1120;
            --card-bg: #1e293b;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent-primary: #38bdf8;
            --accent-secondary: #818cf8;
            --border-radius: 12px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header / Hero Section */
        header {
            text-align: center;
            padding: 100px 20px;
            background: linear-gradient(180deg, #111827 0%, #0b1120 100%);
            border-bottom: 1px solid rgba(56, 189, 248, 0.2);
            position: relative;
        }

        h1 {
            font-size: 3.5rem;
            background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
        }

        .summary {
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 700px;
            margin: 0 auto 25px auto;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .contact-links a {
            color: var(--accent-primary);
            text-decoration: none;
            padding: 10px 20px;
            border: 1px solid var(--accent-primary);
            border-radius: 30px;
            transition: all 0.3s ease;
            font-weight: 600;
        }

        .contact-links a:hover {
            background-color: var(--accent-primary);
            color: var(--bg-color);
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
        }

        /* Section Animations */
        .section {
            margin: 80px 0;
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        h2 {
            font-size: 2rem;
            color: var(--accent-secondary);
            margin-bottom: 30px;
            display: flex;
            align-items: center;
        }

        h2::after {
            content: "";
            flex: 1;
            height: 1px;
            background: linear-gradient(to right, var(--accent-secondary), transparent);
            margin-left: 15px;
        }

        /* Cards */
        .card {
            background-color: var(--card-bg);
            padding: 25px;
            border-radius: var(--border-radius);
            margin-bottom: 20px;
            border-left: 4px solid var(--accent-primary);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            border-left-color: var(--accent-secondary);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: var(--text-main);
        }

        .card-date {
            color: var(--accent-primary);
            font-weight: 600;
            font-size: 0.9rem;
        }

        .card-subtitle {
            color: var(--text-muted);
            font-style: italic;
            margin-bottom: 15px;
        }

        ul {
            padding-left: 20px;
            color: var(--text-muted);
        }

        li {
            margin-bottom: 8px;
        }

        /* Tags for Skills/Tech Stack */
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .tag {
            background-color: rgba(56, 189, 248, 0.1);
            color: var(--accent-primary);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            border: 1px solid rgba(56, 189, 248, 0.3);
        }
        
        .skill-group {
            margin-bottom: 15px;
        }
        
        .skill-group strong {
            color: var(--accent-secondary);
            margin-right: 10px;
        }

        /* Responsive */
        @media (max-width: 600px) {
            h1 { font-size: 2.5rem; }
            .card-header { flex-direction: column; }
            .card-date { margin-top: 5px; }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
            <h1>Prince John[cite: 1]</h1>
            <p class="summary">
                Results-driven developer bridging AI and full-stack engineering. Built user-centric applications that solve real problems in education and the Circular Economy. Strong communicator who translates technical work into business impact, aligned with goals[cite: 1]
            </p>
            <div class="contact-links">
                <a href="tel:+919400206726">+91 9400206726[cite: 1]</a>
                <a href="mailto:princejohn1700@gmail.com">princejohn1700@gmail.com[cite: 1]</a>
                <a href="https://linkedin.com/in/prince-john-ing" target="_blank">linkedin.com/in/prince-john-ing[cite: 1]</a>
            </div>
        </div>
    </header>

    <div class="container">
        
        <!-- Education Section -->
        <div class="section">
            <h2>Education</h2>
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Mar Athanasius College of Engineering | Kothamangalam, India[cite: 1]</div>
                    <div class="card-date">Expected Jul 2026[cite: 1]</div>
                </div>
                <div class="card-subtitle">Bachelor of Technology in Artificial Intelligence and Machine Learning[cite: 1]</div>
                <p style="color: var(--text-muted)">CGPA: 8.63[cite: 1]</p>
            </div>
        </div>

        <!-- Experience Section -->
        <div class="section">
            <h2>Professional Experience</h2>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Training Intern | Cognizant | Siruseri, Chennai[cite: 1]</div>
                    <div class="card-date">Jan 2026 - Apr 2026[cite: 1]</div>
                </div>
                <ul>
                    <li>Trained on Domain of ML Under AIA Service Line[cite: 1]</li>
                    <li>2 Projects & 17 Udemy Certification with Hands-On Learning for Data Warehouse, Pyspark, Copilot, ML, NLP, Feature Engineering[cite: 1]</li>
                </ul>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">Assisted Intern | Teachnook Edtech Online[cite: 1]</div>
                    <div class="card-date">Jul 2023 - Aug 2023[cite: 1]</div>
                </div>
                <ul>
                    <li>Learned and Implemented Basic Machine Learning Techniques[cite: 1]</li>
                </ul>
            </div>
        </div>

        <!-- Projects Section -->
        <div class="section">
            <h2>Projects</h2>
            
            <div class="card">
                <div class="card-header">
                    <div class="card-title">GraderAI: AI-Native Answer Sheet Evaluation Platform (RAG + Agentic)[cite: 1]</div>
                    <div class="card-date">Apr 2026[cite: 1]</div>
                </div>
                <div class="tags">
                    <span class="tag">FastAPI[cite: 1]</span>
                    <span class="tag">React[cite: 1]</span>
                    <span class="tag">Pinecone[cite: 1]</span>
                    <span class="tag">LangGraph[cite: 1]</span>
                    <span class="tag">LLM[cite: 1]</span>
                    <span class="tag">Tesseract[cite: 1]</span>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">Repart: Agentic Solution for Upcycling in Circular Economy[cite: 1]</div>
                    <div class="card-date">Aug 2025[cite: 1]</div>
                </div>
                <div class="tags">
                    <span class="tag">n8n[cite: 1]</span>
                    <span class="tag">React[cite: 1]</span>
                    <span class="tag">Django[cite: 1]</span>
                    <span class="tag">MongoDB[cite: 1]</span>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">Research Assistant: An Agentic helper for research[cite: 1]</div>
                    <div class="card-date">Apr 2025[cite: 1]</div>
                </div>
                <div class="tags">
                    <span class="tag">Langchain[cite: 1]</span>
                    <span class="tag">Pydantic[cite: 1]</span>
                    <span class="tag">LLM[cite: 1]</span>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">Smart Shelf: Image-based Smart Commercial Shelf tracking for Supermarket[cite: 1]</div>
                    <div class="card-date">Apr 2025[cite: 1]</div>
                </div>
                <div class="tags">
                    <span class="tag">ESP32-CAM[cite: 1]</span>
                    <span class="tag">Roboflow API[cite: 1]</span>
                    <span class="tag">Python[cite: 1]</span>
                    <span class="tag">Event Trigger[cite: 1]</span>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">Deep Learning Projects: Trained Model Using CIFAR-10, MNIST, IMDB[cite: 1]</div>
                    <div class="card-date">Apr 2025[cite: 1]</div>
                </div>
                <div class="tags">
                    <span class="tag">FF MLP[cite: 1]</span>
                    <span class="tag">Regularization[cite: 1]</span>
                    <span class="tag">CNN[cite: 1]</span>
                    <span class="tag">VGG-19[cite: 1]</span>
                    <span class="tag">RNN[cite: 1]</span>
                    <span class="tag">LSTM[cite: 1]</span>
                    <span class="tag">GRU[cite: 1]</span>
                </div>
            </div>
        </div>

        <!-- Certifications Section -->
        <div class="section">
            <h2>Certifications</h2>
            <div class="card">
                <ul>
                    <li><strong>SAP:</strong> SAP Certified Associate - SAP Generative Al Developer | Sep 2025[cite: 1]</li>
                    <li><strong>edX:</strong> Introduction to Kubernetes and Cloud Native Technologies | Jun 2024[cite: 1]</li>
                    <li><strong>NPTEL:</strong> Joy of Computing Using Python Certification | Apr 2024[cite: 1]</li>
                </ul>
            </div>
        </div>

        <!-- Skills & Extracurriculars -->
        <div class="section">
            <h2>Skills & Extracurricular</h2>
            <div class="card">
                <div class="skill-group">
                    <strong>Programming:</strong> Proficient in Python, Basic familiarity with C, C++, Java, R, HTML[cite: 1]
                </div>
                <div class="skill-group">
                    <strong>Technical Competencies:</strong> DSA, DBMS, ML, AI, NLP, Deep Learning, LLM, Robotics[cite: 1]
                </div>
                <div class="skill-group">
                    <strong>Soft Skills:</strong> Communication, Collaboration, Association, Management, Articulation[cite: 1]
                </div>
                <div class="skill-group">
                    <strong>Languages:</strong> English, Malayalam[cite: 1]
                </div>
                <br>
                <div class="skill-group">
                    <strong>Extracurricular:</strong>
                    <ul>
                        <li>Volunteering in Placement Cell - Student outreach & coordination[cite: 1]</li>
                        <li>Active participation in tech events and hackathons - pitch and solve real-world problems.[cite: 1]</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

    <!-- Interactivity Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');

            // Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        });
    </script>
</body>
</html>
