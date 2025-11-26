<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Emmett Iris | Consulting & Professional English</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #0f172a;
            --light: #f8fafc;
            --gray: #64748b;
            --light-gray: #e2e8f0;
            --border: #cbd5e1;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--light);
            color: var(--secondary);
            line-height: 1.6;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .nav {
            display: flex;
            justify-content: center;
            padding: 1rem 0;
            background: white;
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.5rem 1.5rem;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }

        .nav button:hover {
            background: var(--primary-dark);
        }

        header {
            padding: 2.5rem 0 1.5rem;
        }

        .hero {
            text-align: center;
            padding: 2.5rem 0;
        }

        .hero h1 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--secondary);
        }

        .hero p {
            font-size: 1.125rem;
            color: var(--gray);
            max-width: 700px;
            margin: 0 auto;
        }

        .services {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2.5rem 0;
        }

        .service-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 1px solid var(--border);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        .service-card h2 {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
            color: var(--primary);
        }

        .service-card ul {
            list-style: none;
            padding-left: 0;
        }

        .service-card li {
            margin-bottom: 0.75rem;
            padding-left: 1.25rem;
            position: relative;
        }

        .service-card li:before {
            content: "•";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--primary);
            font-weight: bold;
        }

        .section-title {
            font-size: 1.875rem;
            font-weight: 700;
            margin: 2.5rem 0 1.5rem;
            text-align: center;
        }

        .pricing {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            margin: 2.5rem 0;
            border: 1px solid var(--border);
        }

        .pricing h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--primary);
        }

        .contact {
            text-align: center;
            padding: 2.5rem 0;
            background: white;
            border-radius: 12px;
            margin: 2.5rem 0;
            border: 1px solid var(--border);
        }

        .contact p {
            margin-bottom: 1rem;
            color: var(--gray);
        }

        .contact a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
        }

        .contact a:hover {
            text-decoration: underline;
        }

        .highlight {
            background-color: #dbeafe;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
        }

        footer {
            text-align: center;
            padding: 2rem 0;
            color: var(--gray);
            font-size: 0.9rem;
            border-top: 1px solid var(--border);
            margin-top: 2rem;
        }

        #teaching-page {
            display: none;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 1.875rem;
            }
            .hero p {
                font-size: 1rem;
            }
            .section-title {
                font-size: 1.5rem;
            }
            .container {
                padding: 0 1.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="nav">
        <button id="toggle-btn">Switch to Teaching Services</button>
    </div>

    <!-- Consulting Page -->
    <div id="consulting-page" class="container">
        <header>
            <h1>Emmett Iris</h1>
        </header>

        <section class="hero">
            <h1>Global Operations Consultant for Mission-Driven Organizations</h1>
            <p>I support small businesses and nonprofits with precision-focused systems for remote operations, compliance, and risk-aware workflows across borders.</p>
        </section>

        <h2 class="section-title">Consulting Services</h2>
        <div class="services">
            <div class="service-card">
                <h2>Remote Operations & Team Structuring</h2>
                <ul>
                    <li>Design sustainable remote workflows</li>
                    <li>Develop job structures and role definitions</li>
                    <li>Create B2B engagement models aligned with mission goals</li>
                    <li>Optimize virtual support infrastructure for scalability</li>
                </ul>
            </div>
            <div class="service-card">
                <h2>Contractor Compliance & Risk Management</h2>
                <ul>
                    <li>Audit and refine Standard Operating Procedures (SOPs)</li>
                    <li>Ensure contractor classification complies with local regulations</li>
                    <li>Build risk-aware frameworks for cross-border engagements</li>
                    <li>Streamline onboarding for international contractors</li>
                </ul>
            </div>
            <div class="service-card">
                <h2>Risk Advisory Services</h2>
                <ul>
                    <li>Conduct organizational risk assessments</li>
                    <li>Design workflows that mitigate operational and compliance risks</li>
                    <li>Provide referrals to local insurance agents and attorneys</li>
                    <li><em>Note: Aurelia Collective LLC does not sell or solicit insurance</em></li>
                </ul>
            </div>
        </div>

        <div class="pricing">
            <h2>Pricing Approach</h2>
            <p>We offer <span class="highlight">sliding-scale retainers</span> for small businesses and nonprofit organizations. Each retainer is priced to reflect the scope of work, and every task has its own Statement of Work (SOW). Specific SOWs may include subcontracted specialists as needed.</p>
        </div>

        <div class="contact">
            <p>Ready to streamline your operations or assess your organizational risk?</p>
            <p>Contact us by 
                <a href="mailto:iriscleary23@gmail.com">email</a> 
                or 
                <a href="https://wa.me/5491171546552">WhatsApp</a>.
            </p>
        </div>

        <footer>
            <p>© 2025 Emmett Iris / Aurelia Collective LLC. All consulting services provided with discretion and precision.</p>
        </footer>
    </div>

    <!-- Teaching Page -->
    <div id="teaching-page" class="container">
        <header>
            <h1>Emmett Iris</h1>
        </header>

        <section class="hero">
            <h1>Professional English Instruction for Working Adults</h1>
            <p>Tailored lessons focused on real-world communication, self-advocacy, and personal growth through language mastery.</p>
        </section>

        <h2 class="section-title">How It Works</h2>
        <div class="services">
            <div class="service-card">
                <h2>Personalized Learning Approach</h2>
                <ul>
                    <li>Lessons designed around your professional goals and challenges</li>
                    <li>Real-time and asynchronous collaboration via shared Google Docs</li>
                    <li>Focus on patterns in communication, not just isolated errors</li>
                    <li>Students are expected to be as engaged as the instructor</li>
                </ul>
            </div>
            <div class="service-card">
                <h2>For Professionals & Leaders</h2>
                <ul>
                    <li>Specialize in self-advocacy and clear professional expression</li>
                    <li>Build confidence in cross-cultural communication</li>
                    <li>Support personal growth through language fluency</li>
                    <li>Emphasis on practical, immediately applicable skills</li>
                </ul>
            </div>
            <div class="service-card">
                <h2>Lesson Structure</h2>
                <ul>
                    <li>25-minute or 50-minute sessions via Google Meet</li>
                    <li>Rolling 4-week scheduling window</li>
                    <li>Attendance expectation: <span class="highlight">85% or higher</span></li>
                    <li>Reschedules require 12+ hours notice within same calendar week</li>
                </ul>
            </div>
        </div>

        <div class="pricing">
            <h2>Investment & Commitment</h2>
            <p>All students maintain a <span class="highlight">minimum monthly contribution of $40</span> (equivalent to 8 hours of lessons). Payment is due 48 hours in advance for standard bookings, or immediately for short-notice sessions. This ensures sustainable, high-quality instruction tailored to your evolving needs.</p>
        </div>

        <div class="contact">
            <p>Ready to advance your professional English with a committed partner?</p>
            <p>Contact us by 
                <a href="mailto:iriscleary23@gmail.com">email</a> 
                or 
                <a href="https://wa.me/5491171546552">WhatsApp</a>.
            </p>
        </div>

        <footer>
            <p>© 2025 Emmett Iris. Professional English instruction for engaged, growth-oriented professionals.</p>
        </footer>
    </div>

    <script>
        document.getElementById('toggle-btn').addEventListener('click', function() {
            const consulting = document.getElementById('consulting-page');
            const teaching = document.getElementById('teaching-page');
            const btn = this;

            if (consulting.style.display === 'none') {
                consulting.style.display = 'block';
                teaching.style.display = 'none';
                btn.textContent = 'Switch to Teaching Services';
            } else {
                consulting.style.display = 'none';
                teaching.style.display = 'block';
                btn.textContent = 'Switch to Consulting Services';
            }
        });
    </script>
</body>
</html>

