const RESOURCE_REPO_URL = "https://github.com/fuyuyue518/green-supply-chain-resources";
const RESOURCE_BASE_URL = "https://fuyuyue518.github.io/green-supply-chain-resources/";

function normalizeUrlBase(url) {
  if (!url) return "";
  return url.endsWith("/") ? url : `${url}/`;
}

const normalizedResourceBaseUrl = normalizeUrlBase(RESOURCE_BASE_URL);
const pageParams = new URLSearchParams(window.location.search);
const activeChapterId = pageParams.get("chapter");
const isChapterView = Boolean(activeChapterId);

const parts = [
  {
    id: "part-1",
    title: "第一编 数字经济下绿色供应链认知",
    subtitle: "从概念、现状到技术底座，建立对数字经济与绿色供应链的共同语言。",
    chapters: [
      {
        id: "chapter-01",
        number: "第1章",
        title: "数字经济内涵与特点",
        summary: "梳理数字经济内涵、绿色供应链内涵、二者关系以及数字经济下绿色供应链管理架构。",
        videos: [
          {
            title: "数字经济学",
            provider: "中国大学MOOC · 西南财经大学",
            url: "https://www.icourse163.org/course/SWUFE-1470421178",
            note: "用来补数字经济的宏观框架和核心概念。",
          },
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 武汉理工大学",
            url: "https://www.icourse163.org/course/WHUT-1207166806?tid=1463285521",
            note: "覆盖供应链概念、网络规划、采购、库存和风险管理。",
          },
        ],
        sections: [
          ["1.1", "数字经济内涵与特点"],
          ["1.2", "数字经济下绿色供应链内涵及特点"],
          ["1.3", "数字经济与绿色发展的关系"],
          ["1.4", "绿色供应链的利益相关关系"],
          ["1.5", "数字经济下绿色供应链管理架构"],
        ],
        tags: ["概念认知", "基础框架", "理论导入"],
      },
      {
        id: "chapter-02",
        number: "第2章",
        title: "数字经济与绿色供应链发展现状",
        summary: "覆盖全球与中国数字经济发展态势，以及国外与国内绿色供应链管理实践。",
        videos: [
          {
            title: "数字经济学",
            provider: "中国大学MOOC · 西南财经大学",
            url: "https://www.icourse163.org/course/SWUFE-1470421178",
            note: "适合补全球数字经济与国内数字经济发展背景。",
          },
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 山东财经大学",
            url: "https://www.icourse163.org/learn/SDCJDX-1449597161",
            note: "适合补供应链构建、合作伙伴与风险管理发展脉络。",
          },
        ],
        sections: [
          ["2.1", "全球数字经济的发展态势"],
          ["2.2", "我国数字经济的发展态势"],
          ["2.3", "典型国家绿色供应链发展态势"],
          ["2.4", "国外绿色供应链管理实践"],
          ["2.5", "中国绿色供应链管理实践"],
        ],
        tags: ["发展态势", "案例对照", "实践分析"],
      },
      {
        id: "chapter-03",
        number: "第3章",
        title: "数字经济技术基础与数智化供应链",
        summary: "围绕数字经济相关技术、基础设施架构、发展规划与数智化供应链框架展开。",
        videos: [
          {
            title: "数字经济学",
            provider: "中国大学MOOC · 西南财经大学",
            url: "https://www.icourse163.org/course/SWUFE-1470421178",
            note: "适合补数字技术、产业数字化与治理框架。",
          },
          {
            title: "物流与供应链管理",
            provider: "中国大学MOOC · 合肥工业大学",
            url: "https://www.icourse163.org/course/-1001539002",
            note: "适合补供应链构建、库存、运输与配送管理。",
          },
        ],
        sections: [
          ["3.1", "数字经济相关技术"],
          ["3.2", "数字经济基础设施架构"],
          ["3.3", "数字经济发展规划框架"],
          ["3.4", "供应链数字化及趋势"],
          ["3.5", "数智化供应链框架构建"],
        ],
        tags: ["技术底座", "数字化", "框架构建"],
      },
    ],
  },
  {
    id: "part-2",
    title: "第二编 数字经济下绿色供应链网络设计",
    subtitle: "聚焦绿色供应链的构建逻辑、合作伙伴选择与设计优化方法。",
    chapters: [
      {
        id: "chapter-04",
        number: "第4章",
        title: "绿色供应链的构建与优化",
        summary: "从总体框架、类型、战略匹配到设计与优化方法，建立绿色供应链设计主线。",
        videos: [
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 武汉理工大学",
            url: "https://www.icourse163.org/course/WHUT-1207166806?tid=1463285521",
            note: "适合补供应链设计、网络规划和协调优化。",
          },
          {
            title: "物流与供应链管理",
            provider: "中国大学MOOC · 四川大学",
            url: "https://www.icourse163.org/learn/WHUT-1463826161",
            note: "适合补供应链构建与运营设计。",
          },
        ],
        sections: [
          ["4.1", "绿色供应链构建的总体框架"],
          ["4.2", "绿色供应链类型"],
          ["4.3", "战略匹配策略"],
          ["4.4", "绿色供应链构建原则与要点"],
          ["4.5", "绿色供应链结构中参与方的角色与责任"],
          ["4.6", "绿色供应链构建的设计与优化方法"],
        ],
        tags: ["网络设计", "优化方法", "结构协同"],
      },
      {
        id: "chapter-05",
        number: "第5章",
        title: "绿色供应链合作伙伴选择",
        summary: "围绕合作伙伴关系、基础理论、形成机制与选择方法建立决策视角。",
        videos: [
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 山东财经大学",
            url: "https://www.icourse163.org/learn/SDCJDX-1449597161",
            note: "课程内容包含供应链合作伙伴选择。",
          },
          {
            title: "采购与供应管理",
            provider: "中国大学MOOC · 武汉交通职业学院",
            url: "https://www.icourse163.org/learn/WHJZY-1003486003?tid=1207032231",
            note: "适合补供应商管理、采购协商与绩效分析。",
          },
        ],
        sections: [
          ["5.1", "供应链合作伙伴关系概述"],
          ["5.2", "供应链企业间合作的基础理论"],
          ["5.3", "绿色供应链合作伙伴关系的形成及其制约因素"],
          ["5.4", "绿色供应链合作伙伴选择的影响因素、程序与方法"],
        ],
        tags: ["伙伴选择", "合作机制", "决策支持"],
      },
    ],
  },
  {
    id: "part-3",
    title: "第三编 数字经济下的绿色供应链运营管理",
    subtitle: "覆盖物流、采购、制造和库存管理等核心运营场景。",
    chapters: [
      {
        id: "chapter-06",
        number: "第6章",
        title: "数字经济下的绿色物流管理",
        summary: "梳理绿色物流概述、特征与意义、影响机制以及融合与协调路径。",
        videos: [
          {
            title: "绿色物流",
            provider: "中国大学MOOC · 北京交通大学",
            url: "https://www.icourse163.org/learn/SDU-1206180801",
            note: "本章优先推荐，直接对应绿色运输、绿色仓储、逆向物流等内容。",
          },
          {
            title: "物流学导论",
            provider: "中国大学MOOC · 山东财经大学",
            url: "https://www.icourse163.org/learn/SDCJDX-1449491162?tid=1470945480",
            note: "适合补物流系统、包装、运输、配送与信息管理基础。",
          },
        ],
        sections: [
          ["6.1", "绿色物流概述"],
          ["6.2", "数字经济下的绿色物流特征与意义"],
          ["6.3", "数字经济对绿色物流发展的影响机制"],
          ["6.4", "数字经济与绿色物流融合及协调"],
        ],
        tags: ["绿色物流", "协同机制", "运行管理"],
      },
      {
        id: "chapter-07",
        number: "第7章",
        title: "绿色采购",
        summary: "介绍绿色采购基础、特点、数字化框架以及与人工智能技术的结合。",
        videos: [
          {
            title: "采购与供应管理",
            provider: "中国大学MOOC · 武汉交通职业学院",
            url: "https://www.icourse163.org/learn/WHJZY-1003486003?tid=1207032231",
            note: "采购管理与供应商管理的基础视频资源。",
          },
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 武汉理工大学",
            url: "https://www.icourse163.org/course/WHUT-1207166806?tid=1463285521",
            note: "可补采购策略、战略供应商管理和协调机制。",
          },
        ],
        sections: [
          ["7.1", "绿色采购基础认知"],
          ["7.2", "绿色采购的特点"],
          ["7.3", "绿色采购数字化框架"],
          ["7.4", "数字化绿色采购与人工智能技术"],
        ],
        tags: ["绿色采购", "数字化", "AI应用"],
      },
      {
        id: "chapter-08",
        number: "第8章",
        title: "绿色制造",
        summary: "从绿色制造概述、政策标准到数字技术驱动的制造绿色化展开。",
        videos: [
          {
            title: "钢铁绿色制造技术",
            provider: "中国大学MOOC · 北京科技大学",
            url: "https://www.icourse163.org/course/USTB-1206406807",
            note: "适合补绿色制造技术路线、污染治理和资源综合利用。",
          },
          {
            title: "机械制造技术",
            provider: "中国大学MOOC · 郑州财经学院",
            url: "https://www.icourse163.org/course/ZZJM-1465601163",
            note: "包含绿色制造、智能制造与现场视频内容。",
          },
        ],
        sections: [
          ["8.1", "绿色制造概述"],
          ["8.2", "绿色制造政策与标准体系"],
          ["8.3", "数字技术在绿色制造中的应用"],
          ["8.4", "数字技术驱动制造绿色化"],
        ],
        tags: ["绿色制造", "标准体系", "数字技术"],
      },
      {
        id: "chapter-09",
        number: "第9章",
        title: "数字经济下绿色供应链库存管理",
        summary: "聚焦库存基础、绿色供应链背景下的库存挑战、多级库存与优化控制。",
        videos: [
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 武汉理工大学",
            url: "https://www.icourse163.org/course/WHUT-1207166806?tid=1463285521",
            note: "课程中包含库存管理与控制、协调管理等内容。",
          },
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 山东财经大学",
            url: "https://www.icourse163.org/learn/SDCJDX-1449597161",
            note: "适合补库存控制、智慧供应链和方法工具。",
          },
        ],
        sections: [
          ["9.1", "库存管理基础与应用"],
          ["9.2", "绿色供应链背景下的库存管理挑战与策略"],
          ["9.3", "联合库存管理与多级库存管理"],
          ["9.4", "绿色供应链多级库存优化与控制"],
        ],
        tags: ["库存管理", "多级协同", "优化控制"],
      },
    ],
  },
  {
    id: "part-4",
    title: "第四编 数字经济下绿色供应链管理拓展",
    subtitle: "通过典型行业案例与风险控制，延展到更复杂的应用场景。",
    chapters: [
      {
        id: "chapter-10",
        number: "第10章",
        title: "典型行业绿色供应链管理",
        summary: "覆盖钢铁、新能源汽车、电力、通信和家电等典型行业绿色供应链管理。",
        videos: [
          {
            title: "钢铁绿色制造技术",
            provider: "中国大学MOOC · 北京科技大学",
            url: "https://www.icourse163.org/course/USTB-1206406807",
            note: "可作为钢铁行业案例的技术基础。",
          },
          {
            title: "资源材料与可持续发展",
            provider: "中国大学MOOC · 郑州大学",
            url: "https://www.icourse163.org/learn/ZZU-1207201802?tid=1207546205",
            note: "适合补材料生产、清洁生产和可持续发展案例。",
          },
        ],
        sections: [
          ["10.1", "钢铁行业绿色供应链管理"],
          ["10.2", "新能源汽车行业绿色供应链管理"],
          ["10.3", "电力行业绿色供应链管理"],
          ["10.4", "通信行业绿色供应链管理"],
          ["10.5", "家电行业绿色供应链管理"],
        ],
        tags: ["行业案例", "管理拓展", "场景迁移"],
      },
      {
        id: "chapter-11",
        number: "第11章",
        title: "供应链风险及控制管理",
        summary: "讨论供应链风险类型、脆弱性与韧性，以及数字技术与供应链韧性的关系。",
        videos: [
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 武汉理工大学",
            url: "https://www.icourse163.org/course/WHUT-1207166806?tid=1463285521",
            note: "课程中包含供应链风险管理专题。",
          },
          {
            title: "供应链管理",
            provider: "中国大学MOOC · 安阳学院",
            url: "https://www.icourse163.org/learn/AYRWEDU-1206698844?tid=1207054203",
            note: "适合补供应链信息管理与风险模块。",
          },
        ],
        sections: [
          ["11.1", "供应链风险类型与风险分析"],
          ["11.2", "供应链脆弱性及韧性"],
          ["11.3", "传统供应链韧性建设策略与框架构建"],
          ["11.4", "数字技术与供应链韧性的关系"],
        ],
        tags: ["风险控制", "韧性建设", "数字赋能"],
      },
    ],
  },
];

const chapterList = parts.flatMap((part) =>
  part.chapters.map((chapter) => ({
    ...chapter,
    partId: part.id,
    partTitle: part.title,
  })),
);

const searchInput = document.getElementById("search-input");
const chaptersContainer = document.getElementById("chapters");
const partTabs = document.getElementById("part-tabs");
const chapterCount = document.getElementById("chapter-count");
const resourceBaseLink = document.getElementById("resource-base-link");
const heroCopy = document.querySelector(".hero-copy");
const resourceBlock = document.querySelector(".resource-block");
const controls = document.querySelector(".controls");

chapterCount.textContent = String(chapterList.length);
resourceBaseLink.href = isChapterView ? "index.html" : RESOURCE_REPO_URL || "#chapters";
resourceBaseLink.textContent = isChapterView
  ? "返回门户首页"
  : RESOURCE_REPO_URL
    ? "打开资源仓库"
    : "配置资源仓库地址";

let activePartId = "all";

function getChapterUrl(chapterId) {
  if (!normalizedResourceBaseUrl) {
    return `chapter.html?chapter=${chapterId}`;
  }
  return `${normalizedResourceBaseUrl}chapter.html?chapter=${chapterId}`;
}

function findChapterById(chapterId) {
  return chapterList.find((chapter) => chapter.id === chapterId);
}

function createVideoList(items) {
  return `
    <div class="detail-card">
      <div class="detail-card-head">
        <h3>本章视频推荐</h3>
        <span>${items.length} 条</span>
      </div>
      <div class="detail-media-list">
        ${items
          .map(
            (item) => `
              <article class="detail-media-item">
                <a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a>
                <div class="detail-media-provider">${item.provider}</div>
                <p>${item.note}</p>
              </article>`,
          )
          .join("")}
      </div>
    </div>`;
}

function createSectionList(sections) {
  return `
    <div class="detail-card">
      <div class="detail-card-head">
        <h3>本章小节</h3>
        <span>${sections.length} 节</span>
      </div>
      <ol class="detail-section-list">
        ${sections
          .map(
            ([code, title]) => `
              <li>
                <span class="detail-section-code">${code}</span>
                <span class="detail-section-title">${title}</span>
              </li>`,
          )
          .join("")}
      </ol>
    </div>`;
}

function renderChapterView(chapter) {
  document.body.classList.add("chapter-view");

  if (heroCopy) {
    heroCopy.innerHTML = `
      <p class="eyebrow">章节资源页 · ${chapter.partTitle}</p>
      <h1>${chapter.number} ${chapter.title}</h1>
      <h2>${chapter.partTitle}</h2>
      <p class="lede">${chapter.summary}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="index.html">返回门户首页</a>
        <a class="button button-secondary" href="${RESOURCE_REPO_URL}" target="_blank" rel="noreferrer">打开资源仓库</a>
      </div>
      <div class="hero-meta">
        <div>
          <span class="meta-label">视频资源</span>
          <strong>${chapter.videos.length}</strong>
        </div>
        <div>
          <span class="meta-label">本章小节</span>
          <strong>${chapter.sections.length}</strong>
        </div>
        <div>
          <span class="meta-label">资源标签</span>
          <strong>${chapter.tags.length}</strong>
        </div>
      </div>
    `;
  }

  if (controls) controls.style.display = "none";
  if (resourceBlock) resourceBlock.style.display = "none";

  chaptersContainer.innerHTML = `
    <section class="chapter-detail-shell">
      <div class="chapter-detail-grid">
        ${createVideoList(chapter.videos)}
        ${createSectionList(chapter.sections)}
      </div>
      <div class="detail-card chapter-overview-card">
        <div class="detail-card-head">
          <h3>本章说明</h3>
          <span>概览</span>
        </div>
        <p>${chapter.summary}</p>
        <ul class="chapter-tags">
          ${chapter.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function createChapterCard(chapter) {
  const article = document.createElement("article");
  article.className = "chapter-card";
  article.dataset.chapter = `${chapter.number} ${chapter.title} ${chapter.sections
    .map(([, title]) => title)
    .join(" ")}`;

  article.innerHTML = `
    <div class="chapter-top">
      <span class="chapter-number">${chapter.number}</span>
      <span class="chapter-number" aria-hidden="true">${chapter.partTitle}</span>
    </div>
    <div>
      <h3>${chapter.title}</h3>
      <p class="chapter-desc">${chapter.summary}</p>
    </div>
    <ul class="chapter-tags">
      ${chapter.tags.map((tag) => `<li>${tag}</li>`).join("")}
    </ul>
    <div class="video-box">
      <div class="video-box-header">
        <span>本章视频推荐</span>
        <span>${chapter.videos.length} 条</span>
      </div>
      <ul class="video-list">
        ${chapter.videos
          .map(
            (video) => `
              <li class="video-item">
                <a class="video-link" href="${video.url}" target="_blank" rel="noreferrer">${video.title}</a>
                <div class="video-meta">${video.provider}</div>
                <div class="video-note">${video.note}</div>
              </li>`,
          )
          .join("")}
      </ul>
    </div>
    <details class="chapter-details">
      <summary>查看本章小节</summary>
      <ul class="section-list">
        ${chapter.sections
          .map(
            ([code, title]) => `
              <li class="section-item">
                <span>${code}</span>
                <span>${title}</span>
              </li>`,
          )
          .join("")}
      </ul>
    </details>
    <div class="chapter-actions">
      <a class="chapter-link is-primary" href="${getChapterUrl(chapter.id)}" target="_blank" rel="noreferrer">
        打开 GitHub Pages 资源页
      </a>
      <a class="chapter-link" href="#${chapter.id}">
        定位到本章
      </a>
    </div>
  `;

  article.id = chapter.id;
  return article;
}

function renderTabs() {
  const tabs = [{ id: "all", title: "全部章节" }, ...parts.map((part) => ({ id: part.id, title: part.title }))];

  partTabs.innerHTML = tabs
    .map(
      (tab) => `
      <button class="part-tab ${tab.id === activePartId ? "is-active" : ""}" data-part="${tab.id}" role="tab">
        ${tab.title}
      </button>`,
    )
    .join("");

  partTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activePartId = button.dataset.part || "all";
      render();
    });
  });
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleParts = parts
    .map((part) => ({
      ...part,
      chapters: part.chapters.filter((chapter) => {
        const haystack = [
          chapter.number,
          chapter.title,
          chapter.summary,
          chapter.tags.join(" "),
          chapter.sections.map(([, title]) => title).join(" "),
        ]
          .join(" ")
          .toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        const matchesPart = activePartId === "all" || activePartId === part.id;
        return matchesQuery && matchesPart;
      }),
    }))
    .filter((part) => part.chapters.length > 0);

  renderTabs();

  if (!visibleParts.length) {
    chaptersContainer.innerHTML = `<div class="empty-state">没有找到匹配的章节。请换一个关键词，或者切换分编后再试。</div>`;
    return;
  }

  chaptersContainer.innerHTML = visibleParts
    .map(
      (part) => `
        <section aria-labelledby="${part.id}">
          <h2 class="part-heading" id="${part.id}">${part.title}</h2>
          <p class="part-subtitle">${part.subtitle}</p>
          <div class="chapter-grid">
            ${part.chapters.map((chapter) => createChapterCard(chapter).outerHTML).join("")}
          </div>
        </section>`,
    )
    .join("");
}

if (isChapterView) {
  const chapter = findChapterById(activeChapterId);
  if (chapter) {
    document.title = `${chapter.number} ${chapter.title} | 数字经济下绿色供应链管理`;
    renderChapterView(chapter);
  } else {
    document.title = "章节不存在 | 数字经济下绿色供应链管理";
    if (heroCopy) {
      heroCopy.innerHTML = `
        <p class="eyebrow">章节资源页</p>
        <h1>未找到对应章节</h1>
        <h2>请返回门户首页选择章节</h2>
        <p class="lede">当前链接里的章节编号不存在，可能是链接写错了，或者章节资源页还没有创建。</p>
        <div class="hero-actions">
          <a class="button button-primary" href="index.html">返回门户首页</a>
          <a class="button button-secondary" href="${RESOURCE_REPO_URL}" target="_blank" rel="noreferrer">打开资源仓库</a>
        </div>
      `;
    }
    if (controls) controls.style.display = "none";
    if (resourceBlock) resourceBlock.style.display = "none";
    chaptersContainer.innerHTML = `<div class="empty-state">未找到该章节资源页。</div>`;
  }
} else {
  searchInput.addEventListener("input", render);
  render();
}
