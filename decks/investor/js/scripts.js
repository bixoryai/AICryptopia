// AICryptopia Investor Deck - Interactive JavaScript

// Global Variables
let currentSlide = 1;
const totalSlides = 14;
let charts = {}; // Store chart instances
let currentLanguage = localStorage.getItem('aicryptopia-language') || 'en';

// Translation Data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Go to Title Slide (Home)',
        'nav-prev': 'Previous Slide (←)',
        'nav-next': 'Next Slide (→)',
        'nav-end': 'Go to Final Slide (End)',
        'sidebar-title': 'Slide Index',
        
        // Slide Titles
        'slide-1-title': 'AI Cryptopia - Gateway to Wealth',
        'slide-2-title': 'Market Opportunity',
        'slide-3-title': 'Problem & Solution',
        'slide-4-title': 'User-centric Value Proposition',
        'slide-5-title': 'What We Build',
        'slide-6-title': 'Staged Open-source Development',
        'slide-7-title': 'Growth & Earning Potential',
        'slide-8-title': '$AIC Tokenomics To The Moon',
        'slide-9-title': 'Competitive Challenges & Risks',
        'slide-10-title': 'Team & Funding',
        'slide-11-title': 'Market Validation',
        'slide-12-title': 'Exit Strategy',
        'slide-13-title': 'Partnership & Investment Opportunities',
        'slide-14-title': 'Your Invitation to Generational Wealth',
        
        // Main Titles
        'main-title': 'AI Cryptopia',
        'main-tagline': 'Your Happy Gateway to Wealth Building in AI + Web3 Space',
        'main-subtitle': 'Democratizing Access to Generational Wealth with Decentralized AI',
        'prepared-by': 'Prepared by: AICryptopia Team',
        'date': 'Date: January 2025',
        'cta-button': 'Experience the Crypto Rush Utopia 💎',
        
        // Slide 2 Content
        'opportunity-title': 'Market Opportunity 📈',
        'market-outlook': 'Market Outlook',
        'explosive-growth': 'Explosive Growth',
        'ai-web3-revolution': 'AI + Web3 Revolution',
        'intelligence-everywhere': 'Intelligence Everywhere',
        'access-barriers': 'Access Barriers',
        'wealth-gap-crisis': 'Wealth Gap Crisis',
        'web3-migration': 'Web3 Migration',
        'light-tunnel': 'Light at the Tunnel',
        
        // Slide 2 Card Details
        'market-card-1': 'US Bitcoin Strategic Reserve adoption',
        'market-card-2': 'Stablecoin legislation passed',
        'market-card-3': 'Institutional crypto validation accelerating',
        'market-card-4': '$703M → $1T+ market expansion imminent',
        'ai-card-1': 'AI-powered trading bots (15-20% APY)',
        'ai-card-2': 'Intelligent DePIN infrastructure',
        'ai-card-3': 'Smart contracts with AI decision-making',
        'ai-card-4': 'AI-driven Web3 app development',
        'barrier-card-1': 'Complex Web3 interfaces exclude masses',
        'barrier-card-2': 'High fees lock out retail investors',
        'barrier-card-3': 'Fragmented tools & information',
        'barrier-card-4': 'Our solution: Free-first democratization',
        'migration-card-1': 'Web2 → Web3 migration accelerating',
        'migration-card-2': 'True decentralized world emerging',
        'migration-card-3': '"Digital money" becoming universal',
        'migration-card-4': 'Users ready for simplified access',
        'chart-title': 'Market Opportunity',
        'chart-subtitle': 'AI + Web3 Market Growth',
        
        // Slide 3 Content
        'problem-solution-title': 'Problem & Solution 💡',
        
        // Problem 1: Too Cryptic
        'problem-1-title': 'Too Cryptic',
        'problem-1-highlight': 'Learning Curve Nightmare',
        'problem-1-detail-1': 'Complex jargon and buzzwords everywhere',
        'problem-1-detail-2': 'Technical barriers exclude regular users',
        'problem-1-detail-3': 'Steep learning curve discourages entry',
        
        // Solution 1: Easy Knowledge Nexus
        'solution-1-title': 'Easy Knowledge Nexus',
        'solution-1-highlight': 'Plain English Learning',
        'solution-1-detail-1': 'AI explains complex concepts simply',
        'solution-1-detail-2': 'Beginner-friendly step-by-step guides',
        'solution-1-detail-3': 'Progressive learning paths for all levels',
        
        // Problem 2: Overwhelming
        'problem-2-title': 'Overwhelming',
        'problem-2-highlight': 'Information Chaos',
        'problem-2-detail-1': 'Fragmented data across platforms',
        'problem-2-detail-2': 'Conflicting advice and signals',
        'problem-2-detail-3': 'Analysis paralysis from too many options',
        
        // Solution 2: Curated Intelligence
        'solution-2-title': 'Curated Intelligence',
        'solution-2-highlight': 'Relevant Insights Only',
        'solution-2-detail-1': 'AI filters noise, surfaces value',
        'solution-2-detail-2': 'Personalized content recommendations',
        'solution-2-detail-3': 'Quality over quantity approach',
        
        // Problem 3: Scam-Ridden
        'problem-3-title': 'Scam-Ridden',
        'problem-3-highlight': 'Trust Crisis',
        'problem-3-detail-1': 'Countless scams and rug pulls',
        'problem-3-detail-2': 'Fake influencers promoting garbage',
        'problem-3-detail-3': 'Fear prevents user participation',
        
        // Solution 3: Research-Based Trust
        'solution-3-title': 'Research-Based Trust',
        'solution-3-highlight': 'Verified Insights',
        'solution-3-detail-1': 'AI verifies claims with ZK proofs',
        'solution-3-detail-2': 'Research-backed recommendations',
        'solution-3-detail-3': 'Community-verified signal quality',
        
        // Problem 4: Fee-Heavy
        'problem-4-title': 'Fee-Heavy',
        'problem-4-highlight': 'Money Extraction',
        'problem-4-detail-1': 'Hidden fees and subscription traps',
        'problem-4-detail-2': 'Platforms prioritize extraction over value',
        'problem-4-detail-3': 'Users feel exploited, not empowered',
        
        // Solution 4: User-First Value
        'solution-4-title': 'User-First Value',
        'solution-4-highlight': 'Free + Transparent',
        'solution-4-detail-1': 'Core features completely FREE',
        'solution-4-detail-2': '$AIC tokens reward user contributions',
        'solution-4-detail-3': 'Joyful premium experience, never forced',
        
        // Slide 4 Content
        'value-proposition-title': 'User-centric Value Proposition ⭐',
        'crypto-gold-rush-title': '💎 Positioning Users for the Crypto Gold Rush',
        'crypto-gold-rush-context': 'With Bitcoin becoming a Strategic Reserve and institutional adoption accelerating, we position users to capitalize on the largest wealth transfer in crypto history.',
        
        // Value Cards
        'value-card-1-title': 'Easy Knowledge Nexus',
        'value-card-1-highlight': 'Plain English Learning',
        'value-card-1-description': 'AI explains crypto simply—no more cryptic jargon. Position yourself confidently for emerging opportunities',
        
        'value-card-2-title': 'Curated Intelligence',
        'value-card-2-highlight': 'Relevant Insights Only',
        'value-card-2-description': 'Stop being overwhelmed—AI filters noise to surface gold rush signals before the crowd',
        
        'value-card-3-title': 'Research-Based Trust',
        'value-card-3-highlight': 'Verified & Safe',
        'value-card-3-description': 'No more scams—AI verifies claims with ZK proofs. Navigate the biggest crypto wave with confidence',
        
        'value-card-4-title': 'User-First Value',
        'value-card-4-highlight': 'Free + Rewarding',
        'value-card-4-description': 'Core features FREE, $AIC tokens reward participation. Access institutional-grade tools for mass adoption',
        
        // Comparison Table
        'competitive-advantage-title': '🚀 Our Advantage vs Fee-Heavy Competitors',
        'table-header-feature': 'Feature',
        'table-header-aicryptopia': 'AICryptopia',
        'table-header-competitors': 'Token Metrics, Others',
        
        'table-row-1-feature': 'Learning Curve',
        'table-row-1-aicryptopia': '✅ Plain English AI',
        'table-row-1-competitors': '❌ Cryptic Jargon',
        
        'table-row-2-feature': 'Information Overload',
        'table-row-2-aicryptopia': '✅ Curated Intelligence',
        'table-row-2-competitors': '❌ Fragmented Chaos',
        
        'table-row-3-feature': 'Trust & Safety',
        'table-row-3-aicryptopia': '✅ ZK Proof Verification',
        'table-row-3-competitors': '❌ Scam-Prone Black Box',
        
        'table-row-4-feature': 'Payment Model',
        'table-row-4-aicryptopia': '✅ Free + Joyful Premium',
        'table-row-4-competitors': '❌ Fee-Heavy Extraction',
        
        'table-row-5-feature': 'Community Ownership',
        'table-row-5-aicryptopia': '✅ $AIC Token Rewards',
        'table-row-5-competitors': '❌ Centralized Platform',
        
        // Slide 5 Content
        'what-we-build-title': 'What We Build 🏗️',
        
        // Central Hub
        'central-hub-title': 'User-Owned AI Cryptopia',
        'central-hub-tagline': 'Community-driven wealth building platform',
        'central-hub-flow-text': 'Powers Everything',
        
        // Knowledge Nexus Component
        'knowledge-nexus-title': 'Crypto Knowledge Nexus',
        'knowledge-feature-1': 'AI-curated learning paths',
        'knowledge-feature-2': 'Community-verified content',
        'knowledge-feature-3': 'Interactive tutorials',
        'knowledge-feature-4': 'Real-time insights',
        'knowledge-task-1': '✍️ Write guides',
        'knowledge-task-2': '✅ Verify content',
        
        // AI Trading Tools Component
        'trading-tools-title': 'AI-Powered Trading Tools',
        'trading-feature-1': 'Intelligent trading bots',
        'trading-feature-2': 'Market analysis AI',
        'trading-feature-3': 'Risk management tools',
        'trading-feature-4': 'Portfolio optimization',
        'trading-task-1': '📊 Share insights',
        'trading-task-2': '🔧 Tool feedback',
        
        // Community Ecosystem Component
        'community-ecosystem-title': 'Community Ecosystem',
        'community-feature-1': 'User governance via tokens',
        'community-feature-2': 'Collaborative strategies',
        'community-feature-3': 'Peer-to-peer learning',
        'community-feature-4': 'Community challenges',
        'community-task-1': '🤝 Help members',
        'community-task-2': '🗳️ Governance',
        
        // Ownership Banner
        'ownership-banner': '💎 True Ownership: Users build, own, and profit from AI Cryptopia together',
        
        // Slide 6 Content
        'staged-development-title': 'Staged Open-source Development ⏳',
        'roadmap-header': '🚀 Strategic 3-Phase Roadmap: Tokenomics-First Approach',
        'roadmap-subtitle': 'Building user ownership from day one with immediate $AIC rewards',
        
        // Phase 1
        'phase-1-title': 'Foundation + $AIC Launch',
        'phase-1-timeline': 'Q3-Q4 2025',
        'phase-1-deliverable-1': '🏛️ Core infra setup',
        'phase-1-deliverable-2': '📚 Knowledge Nexus MVP',
        'phase-1-deliverable-3': '💎 $AIC Tokenomics',
        'phase-1-deliverable-4': '🎯 User reward system',
        'phase-1-milestone': '1K users earning $AIC',
        
        // Phase 2
        'phase-2-title': 'AI Trading Platform',
        'phase-2-timeline': 'Q1-Q2 2026',
        'phase-2-deliverable-1': '🤖 AI trading tools',
        'phase-2-deliverable-2': '📊 Market analysis bots',
        'phase-2-deliverable-3': '💰 Joyful pay model',
        'phase-2-deliverable-4': '🔧 Premium features',
        'phase-2-milestone': '10K users, $1M ARR',
        
        // Phase 3
        'phase-3-title': 'Scale & Governance',
        'phase-3-timeline': 'Q3-Q4 2026',
        'phase-3-deliverable-1': '🔥 $AIC burns & halvings',
        'phase-3-deliverable-2': '🗳️ DAO governance',
        'phase-3-deliverable-3': '🌍 Community features',
        'phase-3-deliverable-4': '🚀 Massive adoption',
        'phase-3-milestone': '100K users, $100M TVL',
        
        // Strategic Benefits
        'benefits-header': '🎯 Why This Approach Wins',
        'benefit-1-title': 'Tokenomics First:',
        'benefit-1-description': 'Early $AIC rewards create immediate engagement',
        'benefit-2-title': 'Flywheel Effect:',
        'benefit-2-description': 'Free Knowledge + $AIC → User Value → Viral Growth',
        'benefit-3-title': 'Competitive Advantage:',
        'benefit-3-description': 'While others extract fees, we reward users',
        
        // Common Terms
        'market-expansion': '$1T+ Market Expansion',
        'wealth-creation': '25x-100x Returns',
        'first-mover': 'First-Mover Position',
        'lean-ai': 'Lean + AI Leverage',
        'act-now': 'ACT NOW',
        'contact-email': 'contact@aicryptopia.com',
        'website': 'www.aicryptopia.com',
        'twitter': '@AICryptopia'
    },
    zh: {
        // Navigation
        'nav-home': '前往标题页（首页）',
        'nav-prev': '上一页（←）',
        'nav-next': '下一页（→）',
        'nav-end': '前往最后一页（结束）',
        'sidebar-title': '幻灯片索引',
        
        // Slide Titles
        'slide-1-title': 'AI加密乌托邦 - 财富之门',
        'slide-2-title': '市场机遇',
        'slide-3-title': '问题与解决方案',
        'slide-4-title': '以用户为中心的价值主张',
        'slide-5-title': '我们构建什么',
        'slide-6-title': '分阶段开源开发',
        'slide-7-title': '增长与盈利潜力',
        'slide-8-title': '$AIC代币经济学冲向月球',
        'slide-9-title': '竞争挑战与风险',
        'slide-10-title': '团队与融资',
        'slide-11-title': '市场验证',
        'slide-12-title': '退出策略',
        'slide-13-title': '合作与投资机会',
        'slide-14-title': '您的世代财富邀请函',
        
        // Main Titles
        'main-title': 'AI加密乌托邦',
        'main-tagline': '您在AI + Web3领域财富建设的快乐门户',
        'main-subtitle': '用去中心化AI普及世代财富获取',
        'prepared-by': '制作方：AICryptopia团队',
        'date': '日期：2025年1月',
        'cta-button': '体验加密冲击乌托邦 💎',
        
        // Slide 2 Content
        'opportunity-title': '市场机遇 📈',
        'market-outlook': '市场展望',
        'explosive-growth': '爆炸性增长',
        'ai-web3-revolution': 'AI + Web3革命',
        'intelligence-everywhere': '智能无处不在',
        'access-barriers': '准入壁垒',
        'wealth-gap-crisis': '财富差距危机',
        'web3-migration': 'Web3迁移',
        'light-tunnel': '隧道之光',
        
        // Slide 2 Card Details
        'market-card-1': '美国比特币战略储备采用',
        'market-card-2': '稳定币立法通过',
        'market-card-3': '机构加密验证加速',
        'market-card-4': '$7030万 → $1万亿+市场扩张即将到来',
        'ai-card-1': 'AI驱动的交易机器人 (15-20% APY)',
        'ai-card-2': '智能DePIN基础设施',
        'ai-card-3': 'AI决策的智能合约',
        'ai-card-4': 'AI驱动的Web3应用开发',
        'barrier-card-1': '复杂的Web3界面排斥大众',
        'barrier-card-2': '高额费用锁定散户投资者',
        'barrier-card-3': '工具和信息碎片化',
        'barrier-card-4': '我们的解决方案: 免费优先民主化',
        'migration-card-1': 'Web2 → Web3迁移加速',
        'migration-card-2': '真正的去中心化世界正在崛起',
        'migration-card-3': '"数字货币"成为主流',
        'migration-card-4': '用户准备好了简化访问',
        'chart-title': '市场机遇',
        'chart-subtitle': 'AI + Web3市场增长',
        
        // Slide 3 Content
        'problem-solution-title': '问题与解决方案 💡',
        
        // Problem 1: Too Cryptic
        'problem-1-title': '过于晦涩',
        'problem-1-highlight': '学习曲线噩梦',
        'problem-1-detail-1': '复杂术语和流行词无处不在',
        'problem-1-detail-2': '技术壁垒排斥普通用户',
        'problem-1-detail-3': '陡峭的学习曲线阻碍入门',
        
        // Solution 1: Easy Knowledge Nexus
        'solution-1-title': '简易知识枢纽',
        'solution-1-highlight': '通俗易懂的学习',
        'solution-1-detail-1': 'AI简单解释复杂概念',
        'solution-1-detail-2': '初学者友好的分步指南',
        'solution-1-detail-3': '适合所有级别的渐进式学习路径',
        
        // Problem 2: Overwhelming
        'problem-2-title': '信息过载',
        'problem-2-highlight': '信息混乱',
        'problem-2-detail-1': '跨平台数据碎片化',
        'problem-2-detail-2': '冲突的建议和信号',
        'problem-2-detail-3': '选择过多导致分析瘫痪',
        
        // Solution 2: Curated Intelligence
        'solution-2-title': '精选智能',
        'solution-2-highlight': '只提供相关洞察',
        'solution-2-detail-1': 'AI过滤噪音，呈现价值',
        'solution-2-detail-2': '个性化内容推荐',
        'solution-2-detail-3': '质量优于数量的方法',
        
        // Problem 3: Scam-Ridden
        'problem-3-title': '诈骗猖獗',
        'problem-3-highlight': '信任危机',
        'problem-3-detail-1': '无数诈骗和跑路事件',
        'problem-3-detail-2': '虚假影响者推广垃圾项目',
        'problem-3-detail-3': '恐惧阻止用户参与',
        
        // Solution 3: Research-Based Trust
        'solution-3-title': '基于研究的信任',
        'solution-3-highlight': '经过验证的洞察',
        'solution-3-detail-1': 'AI通过ZK证明验证声明',
        'solution-3-detail-2': '研究支持的推荐',
        'solution-3-detail-3': '社区验证的信号质量',
        
        // Problem 4: Fee-Heavy
        'problem-4-title': '费用沉重',
        'problem-4-highlight': '资金提取',
        'problem-4-detail-1': '隐藏费用和订阅陷阱',
        'problem-4-detail-2': '平台优先提取而非创造价值',
        'problem-4-detail-3': '用户感到被剥削，而非被赋能',
        
        // Solution 4: User-First Value
        'solution-4-title': '用户优先价值',
        'solution-4-highlight': '免费+透明',
        'solution-4-detail-1': '核心功能完全免费',
        'solution-4-detail-2': '$AIC代币奖励用户贡献',
        'solution-4-detail-3': '愉悦的高级体验，从不强制',
        
        // Slide 4 Content
        'value-proposition-title': '以用户为中心的价值主张 ⭐',
        'crypto-gold-rush-title': '💎 为用户在加密淘金热中定位',
        'crypto-gold-rush-context': '随着比特币成为战略储备和机构采用加速，我们帮助用户在加密历史上最大的财富转移中获利。',
        
        // Value Cards
        'value-card-1-title': '简易知识枢纽',
        'value-card-1-highlight': '通俗易懂的学习',
        'value-card-1-description': 'AI简单解释加密货币——告别晦涩术语。自信地为新兴机会做好准备',
        
        'value-card-2-title': '精选智能',
        'value-card-2-highlight': '只提供相关洞察',
        'value-card-2-description': '不再被淹没——AI过滤噪音，在人群之前发现淘金热信号',
        
        'value-card-3-title': '基于研究的信任',
        'value-card-3-highlight': '经过验证且安全',
        'value-card-3-description': '告别诈骗——AI通过ZK证明验证声明。自信地驾驭最大的加密浪潮',
        
        'value-card-4-title': '用户优先价值',
        'value-card-4-highlight': '免费+奖励',
        'value-card-4-description': '核心功能免费，$AIC代币奖励参与。为大规模采用获得机构级工具',
        
        // Comparison Table
        'competitive-advantage-title': '🚀 我们相对于费用沉重竞争对手的优势',
        'table-header-feature': '功能',
        'table-header-aicryptopia': 'AICryptopia',
        'table-header-competitors': 'Token Metrics等其他平台',
        
        'table-row-1-feature': '学习曲线',
        'table-row-1-aicryptopia': '✅ 通俗易懂的AI',
        'table-row-1-competitors': '❌ 晦涩术语',
        
        'table-row-2-feature': '信息过载',
        'table-row-2-aicryptopia': '✅ 精选智能',
        'table-row-2-competitors': '❌ 碎片化混乱',
        
        'table-row-3-feature': '信任与安全',
        'table-row-3-aicryptopia': '✅ ZK证明验证',
        'table-row-3-competitors': '❌ 易受诈骗的黑盒',
        
        'table-row-4-feature': '付费模式',
        'table-row-4-aicryptopia': '✅ 免费+愉悦高级版',
        'table-row-4-competitors': '❌ 费用沉重的提取',
        
        'table-row-5-feature': '社区所有权',
        'table-row-5-aicryptopia': '✅ $AIC代币奖励',
        'table-row-5-competitors': '❌ 中心化平台',
        
        // Slide 5 Content
        'what-we-build-title': '我们构建什么 🏗️',
        
        // Central Hub
        'central-hub-title': '用户拥有的AI加密乌托邦',
        'central-hub-tagline': '社区驱动的财富建设平台',
        'central-hub-flow-text': '驱动一切',
        
        // Knowledge Nexus Component
        'knowledge-nexus-title': '加密知识枢纽',
        'knowledge-feature-1': 'AI策划的学习路径',
        'knowledge-feature-2': '社区验证的内容',
        'knowledge-feature-3': '互动式教程',
        'knowledge-feature-4': '实时洞察',
        'knowledge-task-1': '✍️ 撰写指南',
        'knowledge-task-2': '✅ 验证内容',
        
        // AI Trading Tools Component
        'trading-tools-title': 'AI驱动的交易工具',
        'trading-feature-1': '智能交易机器人',
        'trading-feature-2': '市场分析AI',
        'trading-feature-3': '风险管理工具',
        'trading-feature-4': '投资组合优化',
        'trading-task-1': '📊 分享洞察',
        'trading-task-2': '🔧 工具反馈',
        
        // Community Ecosystem Component
        'community-ecosystem-title': '社区生态系统',
        'community-feature-1': '通过代币进行用户治理',
        'community-feature-2': '协作策略',
        'community-feature-3': '点对点学习',
        'community-feature-4': '社区挑战',
        'community-task-1': '🤝 帮助成员',
        'community-task-2': '🗳️ 治理',
        
        // Ownership Banner
        'ownership-banner': '💎 真正的所有权：用户共同建设、拥有并从AI加密乌托邦中获利',
        
        // Slide 6 Content
        'staged-development-title': '分阶段开源开发 ⏳',
        'roadmap-header': '🚀 战略三阶段路线图：代币经济学优先方法',
        'roadmap-subtitle': '从第一天开始建设用户所有权，立即获得$AIC奖励',
        
        // Phase 1
        'phase-1-title': '基础建设 + $AIC发布',
        'phase-1-timeline': '2025年第三-四季度',
        'phase-1-deliverable-1': '🏛️ 核心基础设施搭建',
        'phase-1-deliverable-2': '📚 知识枢纽MVP',
        'phase-1-deliverable-3': '💎 $AIC代币经济学',
        'phase-1-deliverable-4': '🎯 用户奖励系统',
        'phase-1-milestone': '1千名用户获得$AIC',
        
        // Phase 2
        'phase-2-title': 'AI交易平台',
        'phase-2-timeline': '2026年第一-二季度',
        'phase-2-deliverable-1': '🤖 AI交易工具',
        'phase-2-deliverable-2': '📊 市场分析机器人',
        'phase-2-deliverable-3': '💰 愉悦付费模式',
        'phase-2-deliverable-4': '🔧 高级功能',
        'phase-2-milestone': '1万用户，100万美元ARR',
        
        // Phase 3
        'phase-3-title': '规模化与治理',
        'phase-3-timeline': '2026年第三-四季度',
        'phase-3-deliverable-1': '🔥 $AIC销毁与减半',
        'phase-3-deliverable-2': '🗳️ DAO治理',
        'phase-3-deliverable-3': '🌍 社区功能',
        'phase-3-deliverable-4': '🚀 大规模采用',
        'phase-3-milestone': '10万用户，1亿美元TVL',
        
        // Strategic Benefits
        'benefits-header': '🎯 为什么这种方法获胜',
        'benefit-1-title': '代币经济学优先：',
        'benefit-1-description': '早期$AIC奖励创造即时参与',
        'benefit-2-title': '飞轮效应：',
        'benefit-2-description': '免费知识 + $AIC → 用户价值 → 病毒式增长',
        'benefit-3-title': '竞争优势：',
        'benefit-3-description': '当其他人提取费用时，我们奖励用户',
        
        // Common Terms
        'market-expansion': '$1万亿+市场扩张',
        'wealth-creation': '25x-100x回报',
        'first-mover': '先发优势地位',
        'lean-ai': '精益+AI杠杆',
        'act-now': '立即行动',
        'contact-email': 'contact@aicryptopia.com',
        'website': 'www.aicryptopia.com',
        'twitter': '@AICryptopia'
    }
};

// Translation Functions
function translateElement(element) {
    const key = element.getAttribute('data-translate');
    if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
        if (element.tagName === 'INPUT' && element.type === 'button') {
            element.value = translations[currentLanguage][key];
        } else {
            // Preserve HTML content like icons while replacing text
            const iconHTML = element.querySelector('i') ? element.querySelector('i').outerHTML : '';
            const translatedText = translations[currentLanguage][key];
            if (iconHTML) {
                element.innerHTML = iconHTML + ' ' + translatedText;
            } else {
                element.textContent = translatedText;
            }
        }
    }
}

function translatePage() {
    // Translate all elements with data-translate attribute
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(translateElement);
    
    // Update charts if they exist
    updateChartTranslations();
    
    // Save language preference
    localStorage.setItem('aicryptopia-language', currentLanguage);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    translatePage();
    updateLanguageButton();
}

function updateLanguageButton() {
    const langButton = document.getElementById('language-toggle');
    if (langButton) {
        langButton.textContent = currentLanguage === 'en' ? 'CH' : 'EN';
        langButton.title = currentLanguage === 'en' ? 'Switch to Chinese' : 'Switch to English';
    }
}

function updateChartTranslations() {
    // This will be called to update chart labels when language changes
    // Charts will be reinitalized with new language data
    if (Object.keys(charts).length > 0) {
        initializeCharts();
    }
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePresentation();
    initializeCharts();
    updateProgressBar();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
});

// Initialize presentation
function initializePresentation() {
    console.log('AICryptopia Investor Deck Loaded! 🚀');
    
    // Update slide counter
    document.getElementById('current-slide').textContent = currentSlide;
    document.getElementById('total-slides').textContent = totalSlides;
    
    // Generate slide indicators
    generateSlideIndicators();
    
    // Initialize language system
    updateLanguageButton();
    translatePage();
    
    // Show first slide and update navigation
    showSlide(currentSlide);
    updateNavigationState();
    updateSlideIndicators();
    updateSidebarIndex();
    
    // Close sidebar on window resize for better UX
    window.addEventListener('resize', () => {
        if (sidebarOpen && window.innerWidth <= 768) {
            closeSidebar();
        }
    });
}

// Generate slide indicator dots
function generateSlideIndicators() {
    const indicatorsContainer = document.getElementById('slide-indicators');
    indicatorsContainer.innerHTML = '';
    
    for (let i = 1; i <= totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'slide-dot';
        indicator.setAttribute('data-slide', i);
        indicator.title = `Go to slide ${i}`;
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
}

// Update slide indicators
function updateSlideIndicators() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Slide Navigation Functions
function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    
    if (newSlide >= 1 && newSlide <= totalSlides) {
        currentSlide = newSlide;
        showSlide(currentSlide);
        updateProgressBar();
        updateSlideCounter();
        updateNavigationState();
        
        // Initialize charts for current slide if needed
        initializeSlideCharts(currentSlide);
    }
}

function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.removeAttribute('tabindex');
    });
    
    // Show current slide
    const currentSlideElement = document.getElementById(`slide-${slideNumber}`);
    if (currentSlideElement) {
        currentSlideElement.classList.add('active');
        // Ensure slide can receive scroll events
        currentSlideElement.setAttribute('tabindex', '0');
        // Reset scroll position to top
        currentSlideElement.scrollTop = 0;
    }
}

function updateSlideCounter() {
    document.getElementById('current-slide').textContent = currentSlide;
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Keyboard Navigation
function handleKeyboard(event) {
    switch(event.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
            if (!sidebarOpen) { // Only navigate if sidebar is closed
                event.preventDefault();
                changeSlide(1);
            }
            break;
        case 'ArrowLeft':
            if (!sidebarOpen) { // Only navigate if sidebar is closed
                event.preventDefault();
                changeSlide(-1);
            }
            break;
        case 'Home':
            event.preventDefault();
            goToFirstSlide();
            break;
        case 'End':
            event.preventDefault();
            goToLastSlide();
            break;
        case 'Escape':
            event.preventDefault();
            if (sidebarOpen) {
                closeSidebar(); // ESC closes sidebar if open
            } else {
                goToFirstSlide(); // Otherwise goes to first slide
            }
            break;
        case 'Tab':
            if (event.ctrlKey) { // Ctrl+Tab toggles sidebar
                event.preventDefault();
                toggleSidebar();
            }
            break;
        case 's':
        case 'S':
            if (event.ctrlKey) { // Ctrl+S toggles sidebar
                event.preventDefault();
                toggleSidebar();
            }
            break;
    }
}

// Chart.js Initialization
function initializeCharts() {
    // Initialize charts for slides that are immediately visible
    initializeSlideCharts(1);
}

function initializeSlideCharts(slideNumber) {
    switch(slideNumber) {
        case 2:
            initializeOpportunityChart();
            break;
        case 4:
            initializeBuildChart();
            break;
        case 7:
            initializeGrowthChart();
            break;
        case 8:
            initializeROIChart();
            break;
        case 10:
            initializeFundsChart();
            break;
    }
}

// Slide 2: Opportunity Chart
function initializeOpportunityChart() {
    const ctx = document.getElementById('opportunityChart');
    if (!ctx || charts.opportunityChart) return; // Don't recreate if already exists
    
    charts.opportunityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2024', '2026', '2028', '2030'],
            datasets: [{
                label: 'Market Size ($M)',
                data: [703, 2000, 5000, 10000],
                borderColor: '#00ffff',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#00ffff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'AI + Web3 Market Growth Projection',
                    color: '#00ffff',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff',
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });
}

// Slide 4: Build Chart (Phase Development)
function initializeBuildChart() {
    const ctx = document.getElementById('buildChart');
    if (!ctx || charts.buildChart) return; // Don't recreate if already exists
    
    charts.buildChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Phase 1\nKnowledge Hub', 'Phase 2\nUtilities Platform', 'Phase 3\nTokenomics Layer'],
            datasets: [{
                label: 'Development Progress (%)',
                data: [30, 60, 100],
                backgroundColor: [
                    'rgba(0, 255, 255, 0.8)',
                    'rgba(255, 0, 255, 0.8)',
                    'rgba(0, 255, 0, 0.8)'
                ],
                borderColor: [
                    '#00ffff',
                    '#ff00ff',
                    '#00ff00'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Phased Development Timeline',
                    color: '#00ffff',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff',
                        maxRotation: 0,
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#ffffff',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Slide 7: Growth Chart (3-Stage Revenue Progression)
function initializeGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx || charts.growthChart) return;
    
    charts.growthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Stage 1: Traffic', 'Stage 2: Utility', 'Stage 3: Tokenomics', 'Year 3+'],
            datasets: [
                {
                    label: 'Traffic Revenue',
                    data: [0.2, 0.3, 0.3, 0.3],
                    borderColor: '#ffa500',
                    backgroundColor: 'rgba(255, 165, 0, 0.2)',
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#ffa500',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                },
                {
                    label: 'Utility Revenue',
                    data: [0, 1, 5, 8],
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.2)',
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#00ffff',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                },
                {
                    label: 'Total Platform Value',
                    data: [0.2, 1.3, 15, 100],
                    borderColor: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ffd700',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 3,
                    pointRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { 
                        color: '#ffffff', 
                        font: { size: 12 },
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: '3-Stage Revenue Progression: Traffic → Utility → Tokenomics Wealth',
                    color: '#00ffff',
                    font: { size: 14, weight: 'bold' }
                }
            },
            scales: {
                x: { 
                    ticks: { color: '#ffffff', font: { size: 11 } }, 
                    grid: { color: 'rgba(255, 255, 255, 0.1)' } 
                },
                y: { 
                    beginAtZero: true,
                    ticks: { 
                        color: '#ffffff',
                        font: { size: 11 },
                        callback: function(value) { 
                            return value >= 1 ? '$' + value + 'M' : '$' + (value * 1000) + 'K'; 
                        }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}

// Slide 8: $AIC Tokenomics To The Moon Chart
function initializeROIChart() {
    const ctx = document.getElementById('roiChart');
    if (!ctx || charts.roiChart) return;
    
    charts.roiChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Launch', '6M (Utility)', '1Y (Burns)', '2Y (Growth)', '3Y (Moon)'],
            datasets: [
                {
                    label: '$AIC Token Value',
                    data: [1, 8, 25, 60, 100],
                    borderColor: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ffd700',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 3,
                    pointRadius: 10
                },
                {
                    label: 'Platform Revenue Impact',
                    data: [0, 2, 8, 25, 50],
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#00ffff',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                },
                {
                    label: 'Token Burns & Scarcity',
                    data: [0, 1, 5, 15, 35],
                    borderColor: '#ff4500',
                    backgroundColor: 'rgba(255, 69, 0, 0.1)',
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#ff4500',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { 
                        color: '#ffffff', 
                        font: { size: 12 },
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: '🚀 $AIC "To The Moon" Trajectory: Conservative 100x Target',
                    color: '#ffd700',
                    font: { size: 14, weight: 'bold' }
                }
            },
            scales: {
                x: { 
                    ticks: { color: '#ffffff', font: { size: 11 } }, 
                    grid: { color: 'rgba(255, 255, 255, 0.1)' } 
                },
                y: { 
                    beginAtZero: true,
                    ticks: { 
                        color: '#ffffff',
                        font: { size: 11 },
                        callback: function(value) { 
                            return value === 0 ? '1x' : value + 'x'; 
                        }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}

// Slide 10: Funds Allocation Chart
function initializeFundsChart() {
    const ctx = document.getElementById('fundsChart');
    if (!ctx || charts.fundsChart) return;
    
    charts.fundsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Development (40%)', 'Marketing (30%)', 'Operations (20%)', 'Reserve (10%)'],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: [
                    'rgba(0, 255, 255, 0.8)',
                    'rgba(255, 0, 255, 0.8)',
                    'rgba(0, 255, 0, 0.8)',
                    'rgba(255, 255, 0, 0.8)'
                ],
                borderColor: [
                    '#00ffff',
                    '#ff00ff',
                    '#00ff00',
                    '#ffff00'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#ffffff', font: { size: 12 } },
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: '$500K Seed Fund Allocation',
                    color: '#00ffff',
                    font: { size: 16, weight: 'bold' }
                }
            }
        }
    });
}

// Auto-play functionality (optional)
let autoPlayInterval;
let isAutoPlaying = false;

function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function startAutoPlay() {
    isAutoPlaying = true;
    autoPlayInterval = setInterval(() => {
        if (currentSlide < totalSlides) {
            changeSlide(1);
        } else {
            stopAutoPlay();
        }
    }, 5000); // 5 seconds per slide
}

function stopAutoPlay() {
    isAutoPlaying = false;
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// Utility Functions
function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        currentSlide = slideNumber;
        showSlide(currentSlide);
        updateProgressBar();
        updateSlideCounter();
        updateNavigationState();
        initializeSlideCharts(currentSlide);
        
        // Auto-close sidebar after navigation (helpful for mobile)
        if (sidebarOpen && window.innerWidth <= 768) {
            setTimeout(() => closeSidebar(), 300);
        }
    }
}

// Enhanced Navigation Functions
function goToFirstSlide() {
    currentSlide = 1;
    showSlide(currentSlide);
    updateProgressBar();
    updateSlideCounter();
    updateNavigationState();
    initializeSlideCharts(currentSlide);
}

function goToLastSlide() {
    currentSlide = totalSlides;
    showSlide(currentSlide);
    updateProgressBar();
    updateSlideCounter();
    updateNavigationState();
    initializeSlideCharts(currentSlide);
}

// Update navigation button states
function updateNavigationState() {
    const homeBtn = document.querySelector('.home-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const endBtn = document.querySelector('.end-btn');
    
    // Highlight home button if on first slide
    if (currentSlide === 1) {
        homeBtn.classList.add('active');
    } else {
        homeBtn.classList.remove('active');
    }
    
    // Highlight end button if on last slide
    if (currentSlide === totalSlides) {
        endBtn.classList.add('active');
    } else {
        endBtn.classList.remove('active');
    }
    
    // Disable prev button on first slide
    if (currentSlide === 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    // Disable next button on last slide
    if (currentSlide === totalSlides) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    
    // Update slide indicators and sidebar
    updateSlideIndicators();
    updateSidebarIndex();
}

// Sidebar Functionality
let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.getElementById('slide-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        toggleBtn.classList.add('active');
        toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        toggleBtn.classList.remove('active');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        toggleSidebar();
    }
}

function updateSidebarIndex() {
    const indexItems = document.querySelectorAll('.index-item');
    indexItems.forEach((item, index) => {
        if (index + 1 === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Presentation Control Functions (for development/testing)
window.presentationControls = {
    goToSlide: goToSlide,
    goToFirst: goToFirstSlide,
    goToLast: goToLastSlide,
    next: () => changeSlide(1),
    prev: () => changeSlide(-1),
    toggleAutoPlay: toggleAutoPlay,
    getCurrentSlide: () => currentSlide,
    getTotalSlides: () => totalSlides
};

// Chart.js Global Configuration
Chart.defaults.color = '#ffffff';
Chart.defaults.backgroundColor = 'rgba(0, 255, 255, 0.1)';

// Allow natural scrolling within slide content
// Removed wheel event prevention to enable scroll wheel functionality

// Prevent context menu for cleaner presentation
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Console welcome message
console.log(`
🚀 AICryptopia Investor Deck Ready!
📊 Total Slides: ${totalSlides}
⌨️  Navigation: Arrow keys, Space bar, Home/End, ESC
🖱️  Mouse: Home/Prev/Next/End buttons, Click slide dots
📱 Mobile: Swipe left/right, tap navigation
🎮 Controls: Use window.presentationControls for programmatic control

✨ New Features:
🏠 Home button (green) - Always get back to title slide
🏁 End button (magenta) - Jump to thank you slide  
⚪ Slide indicators - Click any dot to jump to that slide
🔴 Active states - Visual feedback for current position
📋 Sidebar Index - Toggle with button or Ctrl+S/Ctrl+Tab

📋 Sidebar Controls:
🔘 Toggle: Click sidebar button (top-left) or Ctrl+S
📖 Navigate: Click any slide title to jump instantly
🎯 Active tracking: Current slide highlighted in sidebar
📱 Auto-close: Sidebar closes after selection on mobile
⌨️  ESC key: Closes sidebar if open

Happy presenting! 💎✨
`); 