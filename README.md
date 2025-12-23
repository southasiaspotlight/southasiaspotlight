## Hi there 👋
<!doctype html>
<html lang="ne">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ताजा समाचार</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-row">
      <div class="brand">
        <div class="logo">📰</div>
        <div>
          <div class="name">ताजा समाचार</div>
          <div class="tagline">देश–विदेशका ताजा, सत्य र भरपर्दा समाचारहरू</div>
        </div>
      </div>

      <nav class="nav">
        <a href="#top">होम</a>
        <a href="#categories">श्रेणी</a>
        <a href="#latest">ताजा</a>
        <a href="#about">हाम्रो बारे</a>
        <a href="#contact">सम्पर्क</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1>तपाईंको दैनिक समाचार डोज ✨</h1>
          <p>
            छिटो अपडेट, स्पष्ट भाषा, र तथ्यमा आधारित खबर। 
            यहाँ तपाईंले राजनीति, अर्थतन्त्र, खेलकुद, मनोरञ्जन र प्रविधिका ताजा समाचार पाउनुहुन्छ।
          </p>
          <div class="hero-actions">
            <a class="btn" href="#latest">ताजा समाचार हेर्नुहोस्</a>
            <a class="btn btn-ghost" href="#about">हाम्रो उद्देश्य</a>
          </div>
        </div>

        <div class="hero-card">
          <div class="card-title">ब्रेकिङ</div>
          <div class="card-headline" id="breakingTitle">आजका मुख्य खबरहरू</div>
          <div class="card-meta" id="breakingMeta">अपडेट हुँदैछ…</div>
          <div class="card-actions">
            <button class="btn btn-small" id="refreshBtn">रिफ्रेस</button>
          </div>
          <div class="card-note">नोट: यो डेमो साइट हो — तल “posts” मा तपाईंले आफ्नै समाचार राख्न सक्नुहुन्छ।</div>
        </div>
      </div>
    </section>

    <section id="categories" class="section">
      <div class="container">
        <h2>समाचार श्रेणी</h2>
        <div class="chips">
          <button class="chip active" data-filter="all">सबै</button>
          <button class="chip" data-filter="politics">राजनीति</button>
          <button class="chip" data-filter="economy">अर्थतन्त्र</button>
          <button class="chip" data-filter="sports">खेलकुद</button>
          <button class="chip" data-filter="entertainment">मनोरञ्जन</button>
          <button class="chip" data-filter="tech">प्रविधि</button>
          <button class="chip" data-filter="world">विश्व</button>
        </div>
      </div>
    </section>

    <section id="latest" class="section">
      <div class="container">
        <div class="section-head">
          <h2>ताजा समाचार</h2>
          <div class="search">
            <input id="searchInput" type="search" placeholder="खोज्नुहोस्… (जस्तै: खेलकुद, अर्थतन्त्र)" />
          </div>
        </div>

        <div id="postsGrid" class="grid"></div>
      </div>
    </section>

    <section id="about" class="section alt">
      <div class="container two-col">
        <div>
          <h2>हाम्रो बारे</h2>
          <p>
            “ताजा समाचार” को लक्ष्य भनेको सरल नेपाली भाषामा, छिटो र भरपर्दो समाचार प्रस्तुत गर्नु हो।
            हामी तथ्य जाँच (fact-check) र स्रोतको सम्मानमा विश्वास गर्छौं।
          </p>
          <ul class="bullets">
            <li>छोटो, स्पष्ट र मोबाइल-फ्रेन्डली</li>
            <li>श्रेणी अनुसार फिल्टर र खोज सुविधा</li>
            <li>Facebook page सँग सजिलै शेयर गर्न मिल्ने</li>
          </ul>
        </div>
        <div class="info-box">
          <div class="info-title">टिप</div>
          <p>
            तपाईंले चाहनु भयो भने म यसलाई “Blog system” (WordPress) मा पनि रूपान्तरण गरेर
            तपाईंलाई सजिलै पोस्ट लेख्न मिल्ने बनाइदिन सक्छु।
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container two-col">
        <div>
          <h2>सम्पर्क</h2>
          <p>सुझाव, समाचार टिप वा सहकार्यका लागि:</p>
          <div class="contact-card">
            <div><strong>ईमेल:</strong> yournews@email.com</div>
            <div><strong>फेसबुक:</strong> facebook.com/yourpagename</div>
          </div>
        </div>

        <form class="form" onsubmit="return false;">
          <label>नाम</label>
          <input type="text" placeholder="तपाईंको नाम" />
          <label>सन्देश</label>
          <textarea rows="4" placeholder="यहाँ लेख्नुहोस्…"></textarea>
          <button class="btn" type="button" onclick="alert('धन्यवाद! यो डेमो हो — ईमेल/फर्म जडान गर्न म सहयोग गर्छु।')">
            पठाउनुहोस्
          </button>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-row">
      <div>© <span id="year"></span> ताजा समाचार • सबै अधिकार सुरक्षित</div>
      <div class="footer-links">
        <a href="#top">माथि</a>
        <a href="#about">हाम्रो बारे</a>
        <a href="#contact">सम्पर्क</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
<!--:root{
  --bg:#0b0f14;
  --card:#101826;
  --text:#e9eef6;
  --muted:#a8b3c4;
  --line:#1d2a3d;
  --accent:#5aa7ff;
  --accent2:#6ee7b7;
}

*{box-sizing:border-box}
html,body{margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial; background:var(--bg); color:var(--text)}
a{color:inherit; text-decoration:none}
.container{width:min(1100px,92%); margin:0 auto}

.site-header{
  position:sticky; top:0; z-index:10;
  background:rgba(11,15,20,.85);
  backdrop-filter: blur(10px);
  border-bottom:1px solid var(--line);
}
.header-row{display:flex; align-items:center; justify-content:space-between; padding:14px 0; gap:14px}
.brand{display:flex; align-items:center; gap:12px}
.logo{width:44px;height:44px; display:grid; place-items:center; background:var(--card); border:1px solid var(--line); border-radius:12px}
.name{font-weight:800; letter-spacing:.3px}
.tagline{font-size:.88rem; color:var(--muted)}

.nav{display:flex; gap:14px; flex-wrap:wrap; justify-content:flex-end}
.nav a{padding:8px 10px; border-radius:10px; color:var(--muted)}
.nav a:hover{background:var(--card); color:var(--text)}

.hero{border-bottom:1px solid var(--line); padding:34px 0}
.hero-grid{display:grid; grid-template-columns: 1.3fr .9fr; gap:22px; align-items:stretch}
.hero-text h1{margin:0 0 10px; font-size:2rem}
.hero-text p{margin:0 0 16px; color:var(--muted); line-height:1.6}
.hero-actions{display:flex; gap:10px; flex-wrap:wrap}

.hero-card{
  background:linear-gradient(180deg, rgba(90,167,255,.12), rgba(16,24,38,.9));
  border:1px solid var(--line);
  border-radius:16px;
  padding:16px;
}
.card-title{font-weight:700; color:var(--accent)}
.card-headline{font-size:1.15rem; margin:10px 0 6px; font-weight:800}
.card-meta{color:var(--muted); font-size:.92rem}
.card-actions{margin-top:12px}
.card-note{margin-top:12px; color:var(--muted); font-size:.88rem; line-height:1.5}

.section{padding:26px 0}
.section.alt{background:rgba(16,24,38,.45); border-top:1px solid var(--line); border-bottom:1px solid var(--line)}
.section h2{margin:0 0 14px}

.section-head{display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap}
.search input{
  width:min(360px, 82vw);
  padding:10px 12px;
  border-radius:12px;
  border:1px solid var(--line);
  background:var(--card);
  color:var(--text);
}

.chips{display:flex; gap:10px; flex-wrap:wrap}
.chip{
  padding:10px 12px;
  border-radius:999px;
  border:1px solid var(--line);
  background:var(--card);
  color:var(--muted);
  cursor:pointer;
}
.chip.active{border-color:rgba(110,231,183,.6); color:var(--text)}
.chip:hover{color:var(--text)}

.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:14px;
}
.post{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:16px;
  padding:14px;
  display:flex;
  flex-direction:column;
  gap:10px;
}
.badge{display:inline-flex; align-items:center; gap:8px; font-size:.84rem; color:var(--muted)}
.dot{width:8px;height:8px;border-radius:50%; background:var(--accent2)}
.title{font-weight:900; line-height:1.25}
.excerpt{color:var(--muted); line-height:1.55; font-size:.95rem}
.meta{display:flex; justify-content:space-between; color:var(--muted); font-size:.85rem; border-top:1px dashed var(--line); padding-top:10px}
.actions{display:flex; gap:10px; flex-wrap:wrap}
.btn{
  background:var(--accent);
  border:none;
  padding:10px 14px;
  border-radius:12px;
  color:#06101f;
  font-weight:800;
  cursor:pointer;
}
.btn:hover{filter:brightness(1.05)}
.btn-ghost{
  background:transparent;
  border:1px solid var(--line);
  color:var(--text);
}
.btn-small{padding:8px 10px; border-radius:10px; font-weight:800}

.two-col{display:grid; grid-template-columns: 1.2fr .8fr; gap:16px; align-items:start}
.bullets{color:var(--muted); line-height:1.8}
.info-box{
  background:rgba(90,167,255,.10);
  border:1px solid var(--line);
  border-radius:16px;
  padding:14px;
}
.info-title{font-weight:900; margin-bottom:8px}

.contact-card{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:16px;
  padding:14px;
  color:var(--muted);
  line-height:1.8;
}
.form{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:16px;
  padding:14px;
  display:grid;
  gap:8px;
}
.form input,.form textarea{
  padding:10px 12px;
  border-radius:12px;
  border:1px solid var(--line);
  background:#0c121c;
  color:var(--text);
}

.footer{border-top:1px solid var(--line); padding:18px 0; color:var(--muted)}
.footer-row{display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap}
.footer-links{display:flex; gap:12px}
.footer a:hover{color:var(--text)}

@media (max-width: 900px){
  .hero-grid{grid-template-columns: 1fr}
  .grid{grid-template-columns: 1fr}
  .two-col{grid-template-columns: 1fr}
}const posts = [
  {
    id: 1,
    category: "politics",
    categoryLabel: "राजनीति",
    title: "सरकारको नयाँ निर्णय: आज के भयो?",
    excerpt: "आजको निर्णयले आम नागरिकलाई के प्रभाव पार्छ? मुख्य बुँदाहरू सरल भाषामा…",
    date: "आज",
    readTime: "२ मिनेट"
  },
  {
    id: 2,
    category: "economy",
    categoryLabel: "अर्थतन्त्र",
    title: "डलर र सुनको मूल्य: किन उतारचढाव हुन्छ?",
    excerpt: "सुनको मूल्य किन बढ्छ/घट्छ? बजारको सामान्य नियम र कारणहरू…",
    date: "आज",
    readTime: "३ मिनेट"
  },
  {
    id: 3,
    category: "sports",
    categoryLabel: "खेलकुद",
    title: "आजको खेल अपडेट: नतिजा र हाइलाइट्स",
    excerpt: "आज भएका खेलहरूको छोटो सारांश, स्कोर र मुख्य क्षणहरू…",
    date: "आज",
    readTime: "२ मिनेट"
  },
  {
    id: 4,
    category: "tech",
    categoryLabel: "प्रविधि",
    title: "मोबाइल सुरक्षित राख्ने 5 सजिला टिप्स",
    excerpt: "फोन ह्याकबाट बच्न पासकोड, 2FA, र प्राइभेसी सेटिङ…",
    date: "हिजो",
    readTime: "४ मिनेट"
  },
  {
    id: 5,
    category: "world",
    categoryLabel: "विश्व",
    title: "विश्व समाचार: मुख्य घटनाहरू एकै ठाउँमा",
    excerpt: "आजका अन्तर्राष्ट्रिय हेडलाइनहरू, छोटो र स्पष्ट अपडेट…",
    date: "हिजो",
    readTime: "३ मिनेट"
  },
  {
    id: 6,
    category: "entertainment",
    categoryLabel: "मनोरञ्जन",
    title: "ट्रेन्डिङ: आज सबैले हेरेको भिडियो/गीत",
    excerpt: "सोसल मिडियामा ट्रेन्ड भएको कन्टेन्ट र छोटो समीक्षा…",
    date: "हिजो",
    readTime: "२ मिनेट"
  }
];

const postsGrid = document.getElementById("postsGrid");
const chips = document.querySelectorAll(".chip");
const searchInput = document.getElementById("searchInput");
const breakingTitle = document.getElementById("breakingTitle");
const breakingMeta = document.getElementById("breakingMeta");
const refreshBtn = document.getElementById("refreshBtn");
document.getElementById("year").textContent = new Date().getFullYear();

let activeFilter = "all";

function render(list){
  postsGrid.innerHTML = "";
  if(list.length === 0){
    postsGrid.innerHTML = `<div class="post"><div class="title">कुनै परिणाम भेटिएन</div><div class="excerpt">फिल्टर परिवर्तन गर्नुहोस् वा अर्को शब्द खोज्नुहोस्।</div></div>`;
    return;
  }
  list.forEach(p => {
    const el = document.createElement("article");
    el.className = "post";
    el.innerHTML = `
      <div class="badge"><span class="dot"></span>${p.categoryLabel}</div>
      <div class="title">${p.title}</div>
      <div class="excerpt">${p.excerpt}</div>
      <div class="actions">
        <button class="btn btn-small" onclick="sharePost('${p.title}')">FB मा शेयर</button>
        <button class="btn btn-small btn-ghost" onclick="alert('यो डेमो हो — चाहनु भयो भने म पोस्ट-पेज बनाइदिन्छु।')">पूरा पढ्नुहोस्</button>
      </div>
      <div class="meta"><span>${p.date}</span><span>${p.readTime}</span></div>
    `;
    postsGrid.appendChild(el);
  });
}

function applyFilters(){
  const q = (searchInput.value || "").trim().toLowerCase();
  let list = [...posts];

  if(activeFilter !== "all"){
    list = list.filter(p => p.category === activeFilter);
  }
  if(q){
    list = list.filter(p =>
      (p.title + " " + p.excerpt + " " + p.categoryLabel).toLowerCase().includes(q)
    );
  }
  render(list);
}

chips.forEach(c => {
  c.addEventListener("click", () => {
    chips.forEach(x => x.classList.remove("active"));
    c.classList.add("active");
    activeFilter = c.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

function pickBreaking(){
  const p = posts[Math.floor(Math.random() * posts.length)];
  breakingTitle.textContent = p.title;
  breakingMeta.textContent = `${p.categoryLabel} • ${p.date} • ${p.readTime}`;
}
function sharePost(title){
  const text = encodeURIComponent(`${title} — थप अपडेटका लागि हाम्रो पेज फलो गर्नुहोस् ✅`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank");
}

refreshBtn.addEventListener("click", pickBreaking);

pickBreaking();
render(posts);
**southasiaspotlight/southasiaspotlight** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
