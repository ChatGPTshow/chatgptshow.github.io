(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{386:function(_,a,t){"use strict";t.r(a);var v=t(10),r=Object(v.a)({},(function(){var _=this,a=_._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"claude-的上下文检索功能提升了-rag-准确率-这会是人工智能革命"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claude-的上下文检索功能提升了-rag-准确率-这会是人工智能革命"}},[_._v("#")]),_._v(" Claude 的上下文检索功能提升了 RAG 准确率，这会是人工智能革命？")]),_._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),a("p",[_._v("在人工智能领域不断进步的过程中，人们对更准确且具备上下文理解能力的响应的追求，催生了诸多突破性创新。")]),_._v(" "),a("p",[_._v("而 Claude 的上下文检索技术就是其中一项进步，有望显著提升检索增强生成 (RAG) 系统的表现。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://img.zeker.top/claude/claude_about_rag/1.webp",alt:""}})]),_._v(" "),a("p",[_._v("可能有同学就要问了：上下文检索技术是什么？")]),_._v(" "),a("p",[_._v("大白话来说，就是现在的AI越来越聪明了，尤其是在回答问题的时候，它可以更好地理解和利用上下文，而不仅仅是“查”到一些零碎的信息。")]),_._v(" "),a("p",[_._v("而本篇文章将讲解 Claude 先进的上下文检索技术如何提高 RAG 准确性，提高 AI 的知识检索能力，从而获得更精确、更具上下文感知的响应")]),_._v(" "),a("blockquote",[a("p",[_._v("如果你对Claude感兴趣的话，又很想升级Claude Pro，可以看看往期文章")])]),_._v(" "),a("h2",{attrs:{id:"rag-革命及其局限性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rag-革命及其局限性"}},[_._v("#")]),_._v(" RAG 革命及其局限性")]),_._v(" "),a("p",[_._v("RAG （检索增强生成）改变了游戏规则，为 AI 模型提供了庞大的知识库。")]),_._v(" "),a("p",[_._v("通过检索相关信息并将其纳入生成过程，RAG 系统使 AI 能够提供更明智、更准确的响应。")]),_._v(" "),a("p",[_._v("不过，传统的 RAG 解决方案往往难以保留上下文，导致系统无法检索最相关的信息。打个比方，你和AI聊了一阵，它可能忘记了前面说过的话，没法持续保持“记忆”，导致有时给出的信息不够准确。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://img.zeker.top/claude/claude_about_rag/2.webp",alt:""}})]),_._v(" "),a("p",[_._v("而这种局限性在需要细致理解或特定领域知识的场景中尤为明显。例如，如果无法全面掌握业务背景，客户支持聊天机器人可能难以提供准确的帮助，而如果无法访问相关案例历史，法律分析机器人可能会失败。")]),_._v(" "),a("h2",{attrs:{id:"进入上下文检索-范式转变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入上下文检索-范式转变"}},[_._v("#")]),_._v(" 进入上下文检索：范式转变")]),_._v(" "),a("p",[_._v("Anthropic 的上下文检索方法代表了解决这些挑战的重大飞跃。通过引入两个关键子技术——"),a("strong",[_._v("上下文嵌入")]),_._v("和"),a("strong",[_._v("上下文 BM25")]),_._v("（下文会对这两个子技术进行解释）。")]),_._v(" "),a("p",[_._v("这两个技术的结合极大地改进了RAG系统的效果，这些创新之后的影响也是惊人的：")]),_._v(" "),a("ul",[a("li",[_._v("仅上下文嵌入就将检索失败率降低了 35％（从 5.7％ 降至 3.7％）。")]),_._v(" "),a("li",[_._v("上下文嵌入和上下文 BM25 的组合进一步将失败率降低了 49%（从 5.7% 降至 2.9%）。")]),_._v(" "),a("li",[_._v("与重新排序技术结合使用时，检索失败率可大幅降低 67%。")])]),_._v(" "),a("p",[_._v("这些进步显著提高了搜索准确性，从而也提高了广泛 AI 应用的性能。")]),_._v(" "),a("h2",{attrs:{id:"解读语境检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解读语境检索"}},[_._v("#")]),_._v(" 解读语境检索")]),_._v(" "),a("p",[_._v("上下文检索的核心就是尽量保留和利用相关的上下文信息，特别是在面对大型数据库和复杂问题时。这里面有两个关键部分：")]),_._v(" "),a("ul",[a("li",[_._v("上下文嵌入")])]),_._v(" "),a("p",[_._v("这个技术通过给每个文本片段加上背景信息，确保系统能理解这些片段的语义。简单来说，AI不仅知道每个词的意思，还知道它们背后的含义。")]),_._v(" "),a("ul",[a("li",[_._v("上下文 BM25")])]),_._v(" "),a("p",[_._v("这是结合了传统的文本匹配算法，确保AI可以处理那些对精确匹配有要求的查询。这样，AI既可以理解大概意思，又能精确找到关键字，适用于更多不同类型的问题。")]),_._v(" "),a("h2",{attrs:{id:"重新构想检索过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新构想检索过程"}},[_._v("#")]),_._v(" 重新构想检索过程")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://img.zeker.top/claude/claude_about_rag/3.webp",alt:""}})]),_._v(" "),a("p",[_._v("有了上下文检索，整个检索流程也变得更加优化。它包括：")]),_._v(" "),a("p",[_._v("文档分块和上下文生成\n嵌入和 BM25 索引创建\n搜索和排序\n上下文融合和最终生成回答\n这样，每个步骤都可以保持上下文，确保AI生成的答案更加相关。")]),_._v(" "),a("h2",{attrs:{id:"重新排序-最后一步的优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新排序-最后一步的优化"}},[_._v("#")]),_._v(" 重新排序：最后一步的优化")]),_._v(" "),a("p",[_._v("上下文检索的最后一步是“重新排序”，这相当于给找到的答案再打个分，确保最终传递给AI的内容是最相关的。")]),_._v(" "),a("h2",{attrs:{id:"成本和效率考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成本和效率考虑"}},[_._v("#")]),_._v(" 成本和效率考虑")]),_._v(" "),a("p",[_._v("而这么强大的技术也带来了计算成本的问题。为了应对这个挑战，Anthropic 引入了一个优化方案，叫做“即时缓存”。它可以存储和重复使用上下文信息，这样一来，系统的运行成本和时间都会大大降低。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://img.zeker.top/claude/claude_about_rag/4.webp",alt:""}})]),_._v(" "),a("p",[_._v("实际效果是：")]),_._v(" "),a("ul",[a("li",[_._v("上下文嵌入的生成成本降低了90%")]),_._v(" "),a("li",[_._v("检索延迟减少了50%")])]),_._v(" "),a("p",[_._v("这使得上下文检索不仅强大，而且在大规模应用中也变得可行。")]),_._v(" "),a("h2",{attrs:{id:"现实中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现实中的应用"}},[_._v("#")]),_._v(" 现实中的应用")]),_._v(" "),a("p",[_._v("这种技术不只是理论上的进步，它可以真正改变很多AI应用。比如：")]),_._v(" "),a("ul",[a("li",[_._v("客服系统可以提供更个性化的帮助")]),_._v(" "),a("li",[_._v("法律AI可以更精准地分析案件")]),_._v(" "),a("li",[_._v("研究助手可以更细致地提供信息")]),_._v(" "),a("li",[_._v("内容推荐系统可以更好地匹配用户的需求")])]),_._v(" "),a("h2",{attrs:{id:"未来展望"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未来展望"}},[_._v("#")]),_._v(" 未来展望")]),_._v(" "),a("p",[_._v("尽管上下文检索已经取得了显著进步，这可能还只是个开始。未来的发展可能会让AI理解和利用上下文的能力更强，比如：")]),_._v(" "),a("ul",[a("li",[_._v("更复杂的上下文生成")]),_._v(" "),a("li",[_._v("与其他高级NLP模型的结合")]),_._v(" "),a("li",[_._v("多模态检索，包括图像、音频和视频")])]),_._v(" "),a("p",[_._v("这项技术将为更智能、更细腻的AI系统铺平道路。")]),_._v(" "),a("h2",{attrs:{id:"最后有话说"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后有话说"}},[_._v("#")]),_._v(" 最后有话说")]),_._v(" "),a("p",[_._v("Claude 的上下文检索技术确实为 AI 在理解和记忆对话背景方面带来了巨大的进步。它解决了传统 RAG 系统难以保持上下文的缺点，让 AI 能够给出更加准确、贴近用户需求的答案。这种技术特别适合复杂的、需要细致分析的场景，比如法律分析或客户支持。")]),_._v(" "),a("p",[_._v("不过，从长远来看，随着多模态技术的发展，如何在更多数据形式中应用上下文检索，仍是个值得期待的方向。总的来说，这是 AI 迈向更智能、更人性化的重要一步。")]),_._v(" "),a("p",[_._v("往期文章推荐：")]),_._v(" "),a("p",[a("a",{attrs:{href:"https://chatgptshow.com/blog/ai/wildcard.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("国内如何仅通过支付宝方式快速开通订阅升级各类海外服务 （内含邀请码）"),a("OutboundLink")],1)]),_._v(" "),a("p",[a("a",{attrs:{href:"https://chatgptshow.com/blog/claude/claude_upgrade_opus.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("（最新详细图文教程）如何注册升级Claude3大模型，Claude 3.5订阅升级教程以及防封号经验"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);