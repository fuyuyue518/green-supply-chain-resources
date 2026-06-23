const RESOURCE_REPO_URL = "https://github.com/fuyuyue518/green-supply-chain-resources";
function normalizeUrlBase(url) {
  if (!url) return "";
  return url.endsWith("/") ? url : `${url}/`;
}

const SITE_BASE_URL = normalizeUrlBase(new URL(".", window.location.href).href);
const RESOURCE_SITE_BASE_URL = normalizeUrlBase(
  window.__RESOURCE_PAGES_BASE_URL__ ||
    window.__RESOURCE_SITE_BASE_URL__ ||
    "https://fuyuyue518.github.io/green-supply-chain-resources/",
);
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
const resourceHomeUrl =
  window.location.protocol === "file:" || window.location.hostname === "localhost"
    ? `${SITE_BASE_URL}index.html`
    : `${RESOURCE_SITE_BASE_URL}index.html`;

resourceBaseLink.href = isChapterView ? "index.html" : resourceHomeUrl;
resourceBaseLink.textContent = isChapterView ? "返回门户首页" : "打开资源统一入口";

let activePartId = "all";

function getChapterUrl(chapterId) {
  const baseUrl =
    window.location.protocol === "file:" || window.location.hostname === "localhost"
      ? SITE_BASE_URL
      : RESOURCE_SITE_BASE_URL;
  return `${baseUrl}chapter.html?chapter=${encodeURIComponent(chapterId)}`;
}

function findChapterById(chapterId) {
  return chapterList.find((chapter) => chapter.id === chapterId);
}

function buildSupplementaryResources(chapter) {
  const sectionSamples = chapter.sections.slice(0, 4);
  const sectionTitles = sectionSamples.map(([, title]) => title);

  return {
    documents: [
      {
        kind: "\u8bb2\u4e49",
        title: "\u672c\u7ae0\u8bb2\u4e49\u63d0\u7eb2",
        note: `\u4f9d\u636e ${chapter.sections.length} \u4e2a\u5c0f\u8282\u6574\u7406\u7684\u8bfe\u5802\u8bb2\u4e49\u6846\u67b6\uff0c\u53ef\u76f4\u63a5\u6269\u5c55\u4e3a PDF \u6216 Markdown\u3002`,
      },
      {
        kind: "\u7d22\u5f15",
        title: "\u77e5\u8bc6\u5730\u56fe",
        note: `\u628a\u201c${chapter.title}\u201d\u62c6\u6210\u6982\u5ff5\u3001\u65b9\u6cd5\u548c\u5b9e\u8df5\u4e09\u5c42\u7d22\u5f15\uff0c\u4fbf\u4e8e\u540e\u7eed\u8865\u5145\u8d44\u6599\u94fe\u63a5\u3002`,
      },
    ],
    questions:
      sectionSamples.length > 0
        ? sectionSamples.map(([code, title]) => ({
            kind: "\u8bd5\u9898",
            title: `${code} \u81ea\u6d4b\u9898`,
            note: `\u56f4\u7ed5\u300c${title}\u300d\u8bbe\u8ba1 1 \u9053\u7b80\u7b54\u9898\u548c 1 \u9053\u5224\u65ad\u9898\uff0c\u9002\u5408\u653e\u5165\u9898\u5e93\u3002`,
          }))
        : [
            {
              kind: "\u8bd5\u9898",
              title: "\u672c\u7ae0\u81ea\u6d4b\u8bd5\u9898",
              note: "\u540e\u7eed\u53ef\u4ee5\u7ee7\u7eed\u8865\u5145\u9009\u62e9\u9898\u3001\u5224\u65ad\u9898\u3001\u7b80\u7b54\u9898\u548c\u6848\u4f8b\u5206\u6790\u9898\u3002",
            },
          ],
    readings: [
      {
        kind: "\u9605\u8bfb",
        title: "\u653f\u7b56\u4e0e\u6807\u51c6\u5bfc\u8bfb",
        note: "\u8865\u5145\u56fd\u5bb6\u653f\u7b56\u3001\u884c\u4e1a\u6807\u51c6\u3001\u6846\u67b6\u6027\u6587\u4ef6\u548c\u5e38\u7528\u672f\u8bed\u8bf4\u660e\u3002",
      },
      {
        kind: "\u9605\u8bfb",
        title: "\u4ea7\u4e1a\u5b9e\u8df5\u5ef6\u4f38\u9605\u8bfb",
        note: "\u8865\u5145\u4f01\u4e1a\u5b9e\u8df5\u3001\u516c\u5f00\u62a5\u544a\u548c\u884c\u4e1a\u6587\u7ae0\uff0c\u5e2e\u52a9\u628a\u6982\u5ff5\u8f6c\u6210\u573a\u666f\u3002",
      },
      {
        kind: "\u9605\u8bfb",
        title: "\u8bfe\u5802\u8ba8\u8bba\u63d0\u793a",
        note: `\u53ef\u4ee5\u56f4\u7ed5 ${sectionTitles.slice(0, 2).join("\u3001")} \u7ec4\u7ec7\u5c0f\u7ec4\u8ba8\u8bba\u3002`,
      },
    ],
    cases: [
      {
        kind: "\u6848\u4f8b",
        title: "\u4f01\u4e1a\u843d\u5730\u6848\u4f8b",
        note: `\u56f4\u7ed5\u300c${chapter.title}\u300d\u8865\u5145 1 \u4e2a\u884c\u4e1a\u6848\u4f8b\uff0c\u5efa\u8bae\u4f18\u5148\u4f7f\u7528\u516c\u5f00\u3001\u53ef\u8ffd\u6eaf\u6765\u6e90\u3002`,
      },
      {
        kind: "\u6848\u4f8b",
        title: "\u8bfe\u5802\u8ba8\u8bba\u6848\u4f8b",
        note: "\u53ef\u4ee5\u6574\u7406\u6210\u201c\u95ee\u9898-\u80cc\u666f-\u505a\u6cd5-\u6210\u6548-\u53cd\u601d\u201d\u4e94\u6bb5\u5f0f\uff0c\u65b9\u4fbf\u8bfe\u5802\u4f7f\u7528\u3002",
      },
    ],
  };
}

function createResourceCards(title, items, accent) {
  return `
    <article class="resource-panel">
      <div class="detail-card-head">
        <h3>${title}</h3>
        <span>${items.length} \u6761</span>
      </div>
      <div class="resource-list">
        ${items
          .map(
            (item) => `
              <div class="resource-item">
                <span class="resource-kind ${accent}">${item.kind}</span>
                <div class="resource-copy">
                  <strong>${item.title}</strong>
                  <p>${item.note}</p>
                  ${item.url ? `<a class="resource-link" href="${item.url}" target="_blank" rel="noreferrer">打开资源</a>` : ""}
                </div>
              </div>`,
          )
          .join("")}
      </div>
    </article>`;
}

function createVideoList(items) {
  return `
    <div class="detail-card">
      <div class="detail-card-head">
        <h3>\u672c\u7ae0\u89c6\u9891\u63a8\u8350</h3>
        <span>${items.length} \u6761</span>
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
        <h3>\u672c\u7ae0\u5c0f\u8282</h3>
        <span>${sections.length} \u8282</span>
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
  const supplementaryResources = buildSupplementaryResources(chapter);
  const totalSupplementaryItems = Object.values(supplementaryResources).reduce(
    (sum, group) => sum + group.length,
    0,
  );

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
        <div>
          <span class="meta-label">补充模块</span>
          <strong>${Object.keys(supplementaryResources).length}</strong>
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
      <div class="chapter-resource-grid">
        ${createResourceCards("文档资料", supplementaryResources.documents, "is-doc")}
        ${createResourceCards("试题练习", supplementaryResources.questions, "is-quiz")}
        ${createResourceCards("拓展阅读", supplementaryResources.readings, "is-reading")}
        ${createResourceCards("案例库", supplementaryResources.cases, "is-case")}
      </div>
      <div class="detail-card chapter-overview-card">
        <div class="detail-card-head">
          <h3>本章说明</h3>
          <span>${totalSupplementaryItems} 个补充条目</span>
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
      <span class="chapter-number chapter-part" aria-hidden="true">${chapter.partTitle}</span>
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
