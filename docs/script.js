const posts = [
  { title: "Why I’m Building My First Portfolio + Blog", date: "2025-09-04", file: "posts/first-post.md" }
];

function renderList() {
  const ul = document.getElementById("blog-list");
  ul.innerHTML = "";
  posts.forEach((p, idx) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#blog";
    a.textContent = `${p.title} — ${p.date}`;
    a.onclick = (e) => { e.preventDefault(); openPost(idx); };
    li.appendChild(a);
    ul.appendChild(li);
  });
}

async function openPost(i) {
  const res = await fetch(posts[i].file);
  const text = await res.text();
  document.getElementById("post-title").textContent = posts[i].title;
  document.getElementById("post-date").textContent = posts[i].date;
  document.getElementById("post-content").innerHTML = marked.parse(text);
  document.getElementById("blog-post").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  renderList();
  document.getElementById("year").textContent = new Date().getFullYear();
  const back = document.getElementById("back-to-list");
  if (back) back.onclick = () =>
    document.getElementById("blog-post").classList.add("hidden");
});
