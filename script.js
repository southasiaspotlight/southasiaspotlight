const posts = [
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
