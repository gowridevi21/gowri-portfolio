* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  line-height: 1.6;
}

header {
  background: rgba(15, 23, 42, 0.95);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #1e293b;
}

nav {
  max-width: 1100px;
  margin: auto;
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h2 {
  color: #38bdf8;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 22px;
}

nav a {
  color: #e2e8f0;
  text-decoration: none;
  transition: 0.3s;
}

nav a:hover {
  color: #38bdf8;
}

main {
  max-width: 1100px;
  margin: auto;
  padding: 0 25px;
}

section {
  padding: 85px 0;
}

.hero {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-size: 55px;
  margin-bottom: 10px;
}

.hero h3 {
  font-size: 30px;
  color: #38bdf8;
  margin-bottom: 20px;
}

.hero p {
  max-width: 650px;
  font-size: 19px;
  color: #94a3b8;
}

.hero-buttons {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-block;
  padding: 12px 22px;
  background: #38bdf8;
  color: #0f172a;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn.secondary {
  background: transparent;
  color: #38bdf8;
  border: 1px solid #38bdf8;
}

section h2 {
  font-size: 36px;
  margin-bottom: 30px;
  color: #f8fafc;
}

#about p {
  max-width: 800px;
  font-size: 18px;
  color: #cbd5e1;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 15px;
}

.skills-grid span {
  background: #1e293b;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #334155;
  transition: 0.3s;
}

.skills-grid span:hover {
  border-color: #38bdf8;
  transform: translateY(-4px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.card {
  background: #1e293b;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #334155;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #38bdf8;
}

.card h3 {
  margin-bottom: 12px;
  color: #38bdf8;
}

.card p {
  color: #cbd5e1;
}

#contact p {
  margin-bottom: 10px;
  color: #cbd5e1;
}

footer {
  text-align: center;
  padding: 25px;
  border-top: 1px solid #1e293b;
  color: #64748b;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 15px;
  }

  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero h1 {
    font-size: 40px;
  }

  .hero h3 {
    font-size: 24px;
  }

  .hero {
    min-height: 75vh;
  }
}
