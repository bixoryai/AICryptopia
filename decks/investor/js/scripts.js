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
        
        // Problem-Solution Pair 5: Privacy
        'problem-5-title': 'Privacy Violations',
        'problem-5-highlight': 'Data Harvesting',
        'problem-5-detail-1': 'Big Tech AI harvests personal data',
        'problem-5-detail-2': 'Trading activity tracked and sold',
        'problem-5-detail-3': 'No control over your information',
        
        'solution-5-title': 'Local Data Sovereignty',
        'solution-5-highlight': 'Privacy First',
        'solution-5-detail-1': 'Download tools, run locally',
        'solution-5-detail-2': 'Your data never leaves your device',
        'solution-5-detail-3': 'True ownership of your AI interactions',
        
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
        
        // Value Card 5: Privacy
        'value-card-5-title': 'Local Privacy & Control',
        'value-card-5-highlight': 'Your Data, Your Device',
        'value-card-5-description': 'Download AI trading tools for free—run everything locally. Your data stays private while you capture crypto wealth',
        
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
        'trading-tools-title': 'AI-Powered Crypto Tools',
        'trading-feature-1': 'Intelligent trading bots & analysis',
        'trading-feature-2': 'Risk management & optimization',
        'trading-feature-3': '🔒 Download & run locally',
        'trading-feature-4': '🛡️ Your data stays private',
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
        
        // Slide 7 Content
        'growth-earning-title': 'Growth & Earning Potential',
        'revenue-model-header': '🚀 3-Stage Revenue Model: Building Sustainable Growth',
        'revenue-model-subtitle': 'From traffic monetization to tokenomics wealth creation',
        
        // Stage 1: Traffic-Based Revenue
        'stage-1-title': 'Traffic-Based Revenue',
        'stage-1-timeline': 'Months 1-12',
        'stage-1-source-1': '🎯 **Ad Revenue** from high-quality traffic',
        'stage-1-source-2': '📊 **Sponsored Content** partnerships',
        'stage-1-source-3': '🔗 **Affiliate Commissions** from crypto tools',
        'stage-1-source-4': '📧 **Email Marketing** monetization',
        'stage-1-projection-value': '$50K-200K ARR',
        'stage-1-projection-label': 'Bootstrap Phase',
        
        // Stage 2: Utility-Based Revenue
        'stage-2-title': 'Utility-Based Revenue',
        'stage-2-timeline': 'Year 1-2',
        'stage-2-source-1': '🎓 **Premium Training Programs** (custom paths)',
        'stage-2-source-2': '🤖 **AI Trading Tools** (joyful pay model)',
        'stage-2-source-3': '📊 **Advanced Analytics** subscriptions',
        'stage-2-source-4': '🔒 **VIP Community Access** tiers',
        'stage-2-projection-value': '$1M-5M ARR',
        'stage-2-projection-label': 'Growth Phase',
        
        // Stage 3: Tokenomics-Based Revenue
        'stage-3-title': 'Tokenomics-Based Wealth',
        'stage-3-timeline': 'Year 2-3+',
        'stage-3-source-1': '💰 **$AIC Token Appreciation** (100x target)',
        'stage-3-source-2': '🔥 **Token Burns** creating scarcity',
        'stage-3-source-3': '🏛️ **Platform Valuation** growth',
        'stage-3-source-4': '💎 **Stakeholder Wealth** realization',
        'stage-3-projection-value': '$100M+ TVL',
        'stage-3-projection-label': 'Wealth Phase',
        
        // Additional Revenue Streams
        'additional-revenue-header': '💼 Additional Revenue Streams',
        'additional-revenue-subtitle': 'Supplementary income sources across all stages',
        'additional-revenue-1-title': 'API & Data Licensing',
        'additional-revenue-1-description': 'Market insights to institutions',
        'additional-revenue-2-title': 'Transaction Fees',
        'additional-revenue-2-description': 'Small % on facilitated trades',
        'additional-revenue-3-title': 'Partnership Revenue',
        'additional-revenue-3-description': 'Revenue sharing with DeFi protocols',
        'additional-revenue-4-title': 'Marketplace Commissions',
        'additional-revenue-4-description': 'Trading strategies & tools marketplace',
        
        // Growth Chart
        'growth-chart-header': '📊 Projected Growth Trajectory',
        'growth-chart-subtitle': 'Revenue scaling from traffic monetization to tokenomics wealth creation',
        'target-year-1-label': 'Year 1:',
        'target-year-1-value': '10K Users, $500K ARR',
        'target-year-2-label': 'Year 2:',
        'target-year-2-value': '50K Users, $5M ARR',
        'target-year-3-label': 'Year 3:',
        'target-year-3-value': '100K Users, $100M TVL',
        
        // Slide 8 Content
        'tokenomics-main-title': '$AIC Tokenomics To The Moon',
        'tokenomics-header': '💎 The Ultimate Wealth Creation Engine',
        'tokenomics-subtitle': 'From user utility to generational wealth through strategic tokenomics',
        
        // Core Mechanics
        'core-mechanics-header': '🔥 Core $AIC Mechanics',
        'core-mechanics-subtitle': 'Built-in scarcity + real utility = explosive value creation',
        
        // Token Burns
        'burn-mechanic-title': 'Token Burns',
        'burn-mechanic-highlight': 'Deflationary Pressure',
        'burn-detail-1': '🎯 2% of all joyful pays burned',
        'burn-detail-2': '📈 Quarterly halvings reduce supply',
        'burn-detail-3': '💎 Increasing scarcity over time',
        'burn-detail-4': '🚀 Mathematical appreciation pressure',
        
        // Real Utility
        'utility-mechanic-title': 'Real Utility',
        'utility-mechanic-highlight': 'Genuine Value Driver',
        'utility-detail-1': '🎓 Stake for premium features',
        'utility-detail-2': '🤖 Access to AI trading tools',
        'utility-detail-3': '🗳️ Platform governance rights',
        'utility-detail-4': '💰 Earn tokens through contributions',
        
        // Network Effects
        'network-effects-title': 'Network Effects',
        'network-effects-highlight': 'Viral Growth Engine',
        'network-detail-1': '👥 More users = more demand',
        'network-detail-2': '💡 Better AI = higher utility',
        'network-detail-3': '🔗 Community grows platform value',
        'network-detail-4': '🌪️ Compounding feedback loops',
        
        // Wealth Creation
        'wealth-creation-title': 'Wealth Creation',
        'wealth-creation-highlight': '100x Target',
        'wealth-detail-1': '🎯 $TAO precedent: 1000x in 2 years',
        'wealth-detail-2': '📊 Our target: 100x in 3 years',
        'wealth-detail-3': '🏛️ Platform valuation grows with users',
        'wealth-detail-4': '🚀 Early holders benefit most',
        
        // Comparison Table
        'comparison-header': '⚖️ $AIC vs Traditional Crypto Tokens',
        'comparison-subtitle': 'Why $AIC has superior tokenomics for wealth creation',
        'comparison-feature-header': 'Feature',
        'comparison-aic-header': '$AIC (AICryptopia)',
        'comparison-others-header': 'Most Crypto Tokens',
        'comparison-row-1-feature': 'Utility Foundation',
        'comparison-row-1-aic': '✅ Real platform utility + staking',
        'comparison-row-1-others': '❌ Speculative trading only',
        'comparison-row-2-feature': 'Deflationary Mechanism',
        'comparison-row-2-aic': '✅ Burns from revenue + halvings',
        'comparison-row-2-others': '❌ Inflationary or no burns',
        'comparison-row-3-feature': 'User Earning Model',
        'comparison-row-3-aic': '✅ Earn tokens by contributing value',
        'comparison-row-3-others': '❌ Buy-only acquisition',
        'comparison-row-4-feature': 'Revenue Backing',
        'comparison-row-4-aic': '✅ Platform revenue funds buybacks',
        'comparison-row-4-others': '❌ No revenue foundation',
        'comparison-row-5-feature': 'Network Effects',
        'comparison-row-5-aic': '✅ More users = higher utility value',
        'comparison-row-5-others': '❌ Utility disconnected from adoption',
        
        // Wealth Trajectory
        'trajectory-header': '🎯 100x Wealth Creation Trajectory',
        'trajectory-subtitle': 'Conservative projection based on $TAO precedent and platform revenue growth',
        'milestone-year-1': 'Year 1',
        'milestone-growth-1': '5x - 10x',
        'milestone-driver-1': 'Platform adoption + utility demand',
        'milestone-year-2': 'Year 2',
        'milestone-growth-2': '25x - 50x',
        'milestone-driver-2': 'Revenue growth + token burns accelerate',
        'milestone-year-3': 'Year 3',
        'milestone-growth-3': '100x Target',
        'milestone-driver-3': 'Massive adoption + scarcity + valuations',
        
        // Investment Thesis
        'thesis-header': '💰 Why Early $AIC Investment Is Generational Wealth',
        'thesis-timing-title': 'Perfect Timing',
        'thesis-timing-description': 'Bitcoin Strategic Reserve + stablecoin legislation = crypto adoption acceleration',
        'thesis-precedent-title': 'Proven Precedent',
        'thesis-precedent-description': '$TAO: 1000x in 2 years from real utility. We\'re targeting conservative 100x',
        'thesis-platform-title': 'Platform Value',
        'thesis-platform-description': 'Token backed by real platform revenue + user growth, not just speculation',
        'thesis-community-title': 'Community Ownership',
        'thesis-community-description': 'Users build, own, and profit together - creating unstoppable network effects',
        
        // Slide 9 Content
        'risks-main-title': 'Competitive Challenges & Risks',
        'risk-analysis-header': '🎯 Transparent Risk Assessment & Strategic Positioning',
        'risk-analysis-subtitle': 'Comprehensive analysis of challenges with proven mitigation strategies',
        
        // Competitive Landscape
        'landscape-header': '🏟️ Competitive Landscape Analysis',
        'landscape-subtitle': 'Understanding the competitive environment and our strategic differentiation',
        
        // Competitor 1: Fee-Heavy Platforms
        'competitor-1-title': 'Fee-Heavy Platforms',
        'competitor-1-challenge': 'Direct Competition',
        'competitor-1-detail-1': '🎯 Token Metrics ($99/month premium)',
        'competitor-1-detail-2': '📊 CoinTracker (subscription model)',
        'competitor-1-detail-3': '💰 Extract maximum fees from users',
        'competitor-1-detail-4': '🚫 Limited free value proposition',
        'competitor-1-advantage-label': 'Our Advantage:',
        'competitor-1-advantage-text': 'Free-first model + $AIC rewards vs fee extraction',
        
        // Competitor 2: Big Tech
        'competitor-2-title': 'Big Tech Entry',
        'competitor-2-challenge': 'Potential Threat',
        'competitor-2-detail-1': '🔵 Meta AI + crypto integration',
        'competitor-2-detail-2': '🟡 Google\'s Bard + financial data',
        'competitor-2-detail-3': '💰 Massive resources and distribution',
        'competitor-2-detail-4': '⚡ Fast market entry capability',
        'competitor-2-advantage-label': 'Our Advantage:',
        'competitor-2-advantage-text': 'Crypto-native + community ownership vs corporate control',
        
        // Competitor 3: Traditional Crypto Tools
        'competitor-3-title': 'Traditional Crypto Tools',
        'competitor-3-challenge': 'Indirect Competition',
        'competitor-3-detail-1': '📱 CoinGecko, CoinMarketCap (data)',
        'competitor-3-detail-2': '💹 TradingView (charting tools)',
        'competitor-3-detail-3': '🤖 Basic trading bots (limited AI)',
        'competitor-3-detail-4': '📚 Fragmented educational content',
        'competitor-3-advantage-label': 'Our Advantage:',
        'competitor-3-advantage-text': 'Integrated AI platform + user ownership vs fragmented tools',
        
        // Competitor 4: Web3-Native Platforms
        'competitor-4-title': 'Web3-Native Platforms',
        'competitor-4-challenge': 'Emerging Competition',
        'competitor-4-detail-1': '🔗 Chainlink ecosystem tools',
        'competitor-4-detail-2': '🦄 Uniswap analytics suite',
        'competitor-4-detail-3': '💎 DeFi protocol dashboards',
        'competitor-4-detail-4': '🎯 Niche vertical solutions',
        'competitor-4-advantage-label': 'Our Advantage:',
        'competitor-4-advantage-text': 'Comprehensive platform + beginner-friendly vs technical complexity',
        
        // Risk Mitigation
        'mitigation-header': '⚖️ Risk Categories & Proven Mitigation Strategies',
        'mitigation-subtitle': 'Comprehensive risk management with concrete action plans',
        
        // Risk 1: Market Volatility
        'risk-1-title': 'Market Volatility Risk',
        'risk-1-level': 'High Impact, Medium Probability',
        'risk-1-challenge-label': 'Challenge:',
        'risk-1-challenge-text': 'Crypto market cycles affect user adoption and token values',
        'risk-1-mitigation-label': 'Mitigation:',
        'risk-1-mitigation-1': '🛡️ Revenue diversification (traffic + utility + tokenomics)',
        'risk-1-mitigation-2': '📚 Focus on educational value (recession-proof)',
        'risk-1-mitigation-3': '💰 Multiple income streams reduce dependency',
        'risk-1-mitigation-4': '🤖 AI tools valuable in any market condition',
        
        // Risk 2: Regulatory Changes
        'risk-2-title': 'Regulatory Changes',
        'risk-2-level': 'Medium Impact, Medium Probability',
        'risk-2-challenge-label': 'Challenge:',
        'risk-2-challenge-text': 'Evolving crypto regulations could affect operations',
        'risk-2-mitigation-label': 'Mitigation:',
        'risk-2-mitigation-1': '✅ Educational platform (compliance-friendly)',
        'risk-2-mitigation-2': '🌍 Decentralized architecture (jurisdiction-agnostic)',
        'risk-2-mitigation-3': '📋 Proactive legal framework adoption',
        'risk-2-mitigation-4': '🇺🇸 US Bitcoin Strategic Reserve = favorable environment',
        
        // Risk 3: Talent Acquisition
        'risk-3-title': 'Talent Acquisition',
        'risk-3-level': 'Medium Impact, Low Probability',
        'risk-3-challenge-label': 'Challenge:',
        'risk-3-challenge-text': 'AI/crypto talent is expensive and competitive',
        'risk-3-mitigation-label': 'Mitigation:',
        'risk-3-mitigation-1': '🤖 AI automation reduces talent dependency',
        'risk-3-mitigation-2': '🔓 Open-source leverage (Hugging Face, etc.)',
        'risk-3-mitigation-3': '💎 $AIC equity compensation attracts talent',
        'risk-3-mitigation-4': '🌍 Remote-first global talent access',
        
        // Risk 4: User Adoption
        'risk-4-title': 'User Adoption Risk',
        'risk-4-level': 'High Impact, Low Probability',
        'risk-4-challenge-label': 'Challenge:',
        'risk-4-challenge-text': 'Slow user adoption could delay growth milestones',
        'risk-4-mitigation-label': 'Mitigation:',
        'risk-4-mitigation-1': '🎁 Free-first model removes adoption barriers',
        'risk-4-mitigation-2': '🎯 $AIC rewards incentivize engagement',
        'risk-4-mitigation-3': '📚 Educational content drives organic growth',
        'risk-4-mitigation-4': '🔄 Viral sharing mechanisms built-in',
        
        // Strategic Advantages
        'advantages-header': '🚀 Strategic Advantages & Competitive Moats',
        'advantages-subtitle': 'Why AICryptopia is positioned to dominate the market',
        
        // Advantage 1: Network Effects
        'advantage-1-title': 'Network Effects Moat',
        'advantage-1-why-label': 'Why We Win:',
        'advantage-1-why-text': 'More users → Better AI → Higher value → More users',
        'advantage-1-context': 'vs Competitors: Static tools without learning loops',
        
        // Advantage 2: Superior Tokenomics
        'advantage-2-title': 'Superior Tokenomics',
        'advantage-2-why-label': 'Why We Win:',
        'advantage-2-why-text': 'Revenue-backed burns + user rewards + real utility',
        'advantage-2-context': 'vs Competitors: Pure speculation or no token economics',
        
        // Advantage 3: Community Ownership
        'advantage-3-title': 'Community Ownership',
        'advantage-3-why-label': 'Why We Win:',
        'advantage-3-why-text': 'Users build, own, and profit together',
        'advantage-3-context': 'vs Competitors: Extractive corporate models',
        
        // Advantage 4: Perfect Timing
        'advantage-4-title': 'Perfect Market Timing',
        'advantage-4-why-label': 'Why We Win:',
        'advantage-4-why-text': 'Bitcoin Strategic Reserve + AI maturity convergence',
        'advantage-4-context': 'vs Competitors: Too early or too late market entry',
        
        // Market Position Summary
        'position-header': '🎯 Market Position Summary',
        'assessment-title': 'Overall Risk Assessment:',
        'assessment-rating': 'LOW TO MEDIUM',
        'assessment-strength-label': 'Key Strength:',
        'assessment-strength-text': 'Multiple revenue streams + superior tokenomics + perfect timing = reduced risk profile',
        'assessment-opportunity-label': 'Major Opportunity:',
        'assessment-opportunity-text': '$1T+ market growth + government crypto endorsement = massive tailwinds',
        'assessment-conclusion-label': 'Investment Thesis:',
        'assessment-conclusion-text': 'Risk-adjusted returns favor early position in user-owned AI + crypto convergence',
        
        // Slide 10 Content
        'team-funding-title': 'Team & Funding',
        'team-overview-title': '🏗️ Lean Team + AI Leverage',
        
        // Team Stats
        'team-stat-1': 'Core Team + AI',
        'team-stat-2': 'Seed Ask',
        'team-stat-3': 'ROI Target',
        
        // Team Bios
        'founder-title': 'Founder',
        'founder-expertise': 'AI/Crypto Expert:',
        'founder-description': 'Deep expertise in AI systems and crypto market dynamics. Vision for user-first utopia democratizing wealth.',
        'dev-lead-title': 'Dev Lead',
        'dev-lead-expertise': 'Web3 Specialist:',
        'dev-lead-description': 'Expert in decentralized systems, open-source leverage, and scalable blockchain applications.',
        
        // Funding Header
        'funding-header': '💰 $500K Seed → Phase 1 Tokenomics-First Launch',
        'funding-subtitle': 'Strategic allocation aligned with open-source development roadmap',
        
        // Allocation 1: Development
        'allocation-1-title': 'Development (40% - $200K)',
        'allocation-1-highlight': 'Foundation + $AIC Launch',
        'allocation-1-detail-1': '🏛️ Core infra setup',
        'allocation-1-detail-2': '📚 Knowledge Nexus MVP',
        'allocation-1-detail-3': '💎 $AIC Tokenomics',
        'allocation-1-detail-4': '🎯 User reward system',
        'allocation-1-milestone': '1K users earning $AIC',
        
        // Allocation 2: Marketing
        'allocation-2-title': 'Marketing (30% - $150K)',
        'allocation-2-highlight': 'Community Building',
        'allocation-2-detail-1': '🎯 Crypto community user acquisition',
        'allocation-2-detail-2': '👥 Early adopter engagement programs',
        'allocation-2-detail-3': '📱 Content creation for viral growth',
        'allocation-2-detail-4': '🤝 Strategic partnership development',
        
        // Allocation 3: Operations
        'allocation-3-title': 'Operations (20% - $100K)',
        'allocation-3-highlight': 'Infrastructure & Compliance',
        'allocation-3-detail-1': '🌐 Platform infrastructure & hosting',
        'allocation-3-detail-2': '⚖️ Legal compliance & tokenomics structure',
        'allocation-3-detail-3': '🔒 Security audits & best practices',
        'allocation-3-detail-4': '📊 Analytics & monitoring systems',
        
        // Allocation 4: Strategic Reserve
        'allocation-4-title': 'Strategic Reserve (10% - $50K)',
        'allocation-4-highlight': 'Risk Mitigation',
        'allocation-4-detail-1': '📈 Market opportunity pivots',
        'allocation-4-detail-2': '🚀 Accelerated scaling preparation',
        'allocation-4-detail-3': '⚡ Unexpected growth support',
        'allocation-4-detail-4': '🎯 Competitive response fund',
        
        // Chart Section
        'chart-allocation-title': '📊 Capital Allocation',
        'chart-allocation-subtitle': 'Efficient deployment for Phase 1 success',
        
        // Milestones
        'milestone-1-label': 'Phase 1 Target:',
        'milestone-1-value': '1K users earning $AIC',
        'milestone-2-label': 'ROI Trajectory:',
        'milestone-2-value': '100x wealth creation',
        
        // Strategy Summary
        'strategy-1-title': 'Capital Efficiency',
        'strategy-1-label': 'AI + Open Source:',
        'strategy-1-description': '$500K achieves what traditional startups need $2M+ for',
        'strategy-2-title': 'De-risked Approach',
        'strategy-2-label': 'Tokenomics First:',
        'strategy-2-description': 'User engagement from day one reduces adoption risk',
        'strategy-3-title': 'Speed to Market',
        'strategy-3-label': 'Lean + AI:',
        'strategy-3-description': 'Rapid Phase 1 execution while competitors build heavy teams',
        
        // Slide 11 Content
        'validation-main-title': 'Market Validation',
        'validation-header': '🎯 Comprehensive Market Validation & De-Risk Analysis',
        'validation-subtitle': 'Multiple validation signals confirm strong market demand and reduced investment risk',
        
        // Proven Market Precedents
        'precedent-header': '📊 Proven Market Precedents & Benchmarks',
        'precedent-subtitle': 'Successful AI+crypto platforms demonstrate massive value creation potential',
        
        // Precedent 1: $TAO
        'precedent-1-title': '$TAO Success Story',
        'precedent-1-highlight': '1000x in 2 Years',
        'precedent-1-metric-label': 'Model Validation:',
        'precedent-1-metric-text': 'AI+crypto utility drives exponential growth',
        'precedent-1-advantage-label': 'Our Advantage:',
        'precedent-1-advantage-text': 'User-owned model vs pure speculation',
        
        // Precedent 2: Chainlink
        'precedent-2-title': 'Chainlink Ecosystem',
        'precedent-2-highlight': '$7B+ Market Cap',
        'precedent-2-metric-label': 'Infrastructure Value:',
        'precedent-2-metric-text': 'Web3 tooling creates massive valuations',
        'precedent-2-advantage-label': 'Our Advantage:',
        'precedent-2-advantage-text': 'User-friendly vs developer-only focus',
        
        // Precedent 3: TradingView
        'precedent-3-title': 'TradingView Model',
        'precedent-3-highlight': '$3B Valuation',
        'precedent-3-metric-label': 'Platform Success:',
        'precedent-3-metric-text': 'Free-first trading tools achieve unicorn status',
        'precedent-3-advantage-label': 'Our Advantage:',
        'precedent-3-advantage-text': 'Web3-native + tokenomics vs Web2 model',
        
        // Precedent 4: Coinbase
        'precedent-4-title': 'Coinbase Success',
        'precedent-4-highlight': '$85B Peak Value',
        'precedent-4-metric-label': 'User Focus:',
        'precedent-4-metric-text': 'Simplified crypto access creates massive value',
        'precedent-4-advantage-label': 'Our Advantage:',
        'precedent-4-advantage-text': 'Community ownership vs corporate extraction',
        
        // User Demand Signals
        'demand-header': '👥 Strong User Demand Signals',
        'demand-subtitle': 'Multiple indicators show high market appetite for our solution',
        
        // Demand 1: Crypto Education
        'demand-1-title': 'Crypto Education Demand',
        'demand-1-stat': 'YouTube crypto education views monthly',
        'demand-1-validation-label': 'Validation:',
        'demand-1-validation-text': 'Massive appetite for accessible crypto knowledge',
        
        // Demand 2: Pain Points
        'demand-2-title': 'Documented Pain Points',
        'demand-2-stat': 'Crypto users cite "too complex" as top barrier',
        'demand-2-validation-label': 'Validation:',
        'demand-2-validation-text': 'Clear market need for simplification',
        
        // Demand 3: AI Trading Tools
        'demand-3-title': 'AI Trading Tool Interest',
        'demand-3-stat': 'AI trading software market size 2024',
        'demand-3-validation-label': 'Validation:',
        'demand-3-validation-text': 'Proven willingness to pay for AI trading assistance',
        
        // Demand 4: Community Ownership
        'demand-4-title': 'Community Ownership Trend',
        'demand-4-stat': 'Crypto users prefer community-owned platforms',
        'demand-4-validation-label': 'Validation:',
        'demand-4-validation-text': 'Strong preference for user ownership model',
        
        // Technical & Market Timing
        'timing-header': '⏰ Perfect Technical & Market Timing',
        'timing-subtitle': 'Convergence of technological maturity and regulatory clarity creates ideal conditions',
        
        // Timing 1: AI Technology
        'timing-1-title': 'AI Technology Maturity',
        'timing-1-evidence-label': 'Evidence:',
        'timing-1-evidence-text': 'GPT-4, Claude, open-source LLMs enable sophisticated applications',
        'timing-1-advantage-label': 'Advantage:',
        'timing-1-advantage-text': 'We leverage mature AI without R&D costs',
        
        // Timing 2: Regulatory Environment
        'timing-2-title': 'Regulatory Environment',
        'timing-2-evidence-label': 'Evidence:',
        'timing-2-evidence-text': 'Bitcoin Strategic Reserve + stablecoin legislation passed',
        'timing-2-advantage-label': 'Advantage:',
        'timing-2-advantage-text': 'Government endorsement reduces regulatory risk',
        
        // Timing 3: Institutional Adoption
        'timing-3-title': 'Institutional Adoption',
        'timing-3-evidence-label': 'Evidence:',
        'timing-3-evidence-text': 'BlackRock, Fidelity, Tesla embrace crypto infrastructure',
        'timing-3-advantage-label': 'Advantage:',
        'timing-3-advantage-text': 'Mainstream acceptance drives mass adoption wave',
        
        // Timing 4: Web3 Infrastructure
        'timing-4-title': 'Web3 Infrastructure',
        'timing-4-evidence-label': 'Evidence:',
        'timing-4-evidence-text': 'Ethereum scaling, cross-chain bridges, wallet UX improvements',
        'timing-4-advantage-label': 'Advantage:',
        'timing-4-advantage-text': 'Technical barriers removed for mainstream users',
        
        // Investment Risk Assessment
        'risk-assessment-header': '🎯 Investment Risk Assessment Summary',
        'validation-score-title': 'Strong Validation Score:',
        'validation-score-rating': 'HIGH CONFIDENCE',
        'validation-precedent-label': 'Market Precedent:',
        'validation-precedent-text': '$TAO (1000x), Chainlink ($7B), TradingView ($3B) prove model viability',
        'validation-demand-label': 'User Demand:',
        'validation-demand-text': '500M+ monthly views for crypto education show massive appetite',
        'validation-timing-label': 'Perfect Timing:',
        'validation-timing-text': 'AI maturity + regulatory clarity + infrastructure readiness converge',
        'validation-conclusion-label': 'Investment Thesis:',
        'validation-conclusion-text': 'Multiple validation signals reduce risk and confirm market readiness',
        
        // Slide 12 Content
        'exit-strategy-title': 'Exit Strategy',
        'exit-header': '🎯 Multiple High-Value Exit Pathways & Investor Returns',
        'exit-subtitle': 'Strategic exit options leveraging $AIC tokenomics and platform value creation',
        
        // Strategic Acquisition Targets
        'acquisition-header': '🏢 Strategic Acquisition Targets',
        'acquisition-subtitle': 'Premium valuations from strategic buyers seeking AI+Web3 user acquisition',
        
        // Target 1: Major Crypto Exchanges
        'target-1-title': 'Major Crypto Exchanges',
        'target-1-highlight': '$5B-15B Valuations',
        'target-1-buyers-label': 'Strategic Buyers:',
        'target-1-buyers-text': 'Binance, Coinbase, Kraken, OKX',
        'target-1-logic-label': 'Acquisition Logic:',
        'target-1-logic-text': 'User acquisition costs $100-500 per crypto user',
        'target-1-advantage-label': 'Our Advantage:',
        'target-1-advantage-text': '100K+ engaged users = $50M+ acquisition premium',
        
        // Target 2: Big Tech AI Expansion
        'target-2-title': 'Big Tech AI Expansion',
        'target-2-highlight': '$10B-25B Valuations',
        'target-2-buyers-label': 'Strategic Buyers:',
        'target-2-buyers-text': 'Meta, Google, Microsoft, OpenAI',
        'target-2-logic-label': 'Acquisition Logic:',
        'target-2-logic-text': 'Web3 + AI convergence for next-gen platforms',
        'target-2-advantage-label': 'Our Advantage:',
        'target-2-advantage-text': 'Crypto-native AI platform with proven tokenomics',
        
        // Target 3: FinTech & Trading Platforms
        'target-3-title': 'FinTech & Trading Platforms',
        'target-3-highlight': '$3B-8B Valuations',
        'target-3-buyers-label': 'Strategic Buyers:',
        'target-3-buyers-text': 'Robinhood, Interactive Brokers, E*TRADE',
        'target-3-logic-label': 'Acquisition Logic:',
        'target-3-logic-text': 'Crypto trading expansion with AI differentiation',
        'target-3-advantage-label': 'Our Advantage:',
        'target-3-advantage-text': 'Simplified crypto access + AI trading tools',
        
        // Target 4: Web3 Infrastructure Players
        'target-4-title': 'Web3 Infrastructure Players',
        'target-4-highlight': '$2B-6B Valuations',
        'target-4-buyers-label': 'Strategic Buyers:',
        'target-4-buyers-text': 'Consensys, Chainlink, Polygon, Uniswap',
        'target-4-logic-label': 'Acquisition Logic:',
        'target-4-logic-text': 'User-facing platform for infrastructure adoption',
        'target-4-advantage-label': 'Our Advantage:',
        'target-4-advantage-text': 'Beginner-friendly gateway to Web3 ecosystem',
        
        // Value Creation Timeline
        'timeline-header': '📈 Value Creation Timeline & Exit Windows',
        'timeline-subtitle': 'Strategic exit timing aligned with platform milestones and $AIC token appreciation',
        
        // Stage 1: Early Strategic Exit
        'stage-1-title': 'Early Strategic Exit',
        'stage-1-timeframe': 'Year 1-2',
        'stage-1-metric-1-label': 'Platform Value:',
        'stage-1-metric-1-value': '$100M-500M',
        'stage-1-metric-2-label': '$AIC Multiple:',
        'stage-1-metric-2-value': '10x-25x',
        'stage-1-metric-3-label': 'User Base:',
        'stage-1-metric-3-value': '10K-50K users',
        'stage-1-logic-label': 'Exit Logic:',
        'stage-1-logic-text': 'Proven product-market fit attracts strategic premium',
        
        // Stage 2: Growth Stage Exit
        'stage-2-title': 'Growth Stage Exit',
        'stage-2-timeframe': 'Year 2-3',
        'stage-2-metric-1-label': 'Platform Value:',
        'stage-2-metric-1-value': '$1B-5B',
        'stage-2-metric-2-label': '$AIC Multiple:',
        'stage-2-metric-2-value': '50x-100x',
        'stage-2-metric-3-label': 'User Base:',
        'stage-2-metric-3-value': '100K-500K users',
        'stage-2-logic-label': 'Exit Logic:',
        'stage-2-logic-text': 'Scale + tokenomics creates massive acquisition value',
        
        // Stage 3: IPO or Mega Exit
        'stage-3-title': 'IPO or Mega Exit',
        'stage-3-timeframe': 'Year 3-5',
        'stage-3-metric-1-label': 'Platform Value:',
        'stage-3-metric-1-value': '$10B-50B',
        'stage-3-metric-2-label': '$AIC Multiple:',
        'stage-3-metric-2-value': '100x-500x',
        'stage-3-metric-3-label': 'User Base:',
        'stage-3-metric-3-value': '1M+ users',
        'stage-3-logic-label': 'Exit Logic:',
        'stage-3-logic-text': 'Dominant platform position enables public offering',
        
        // Investor Return Scenarios
        'returns-header': '💰 Investor Return Scenarios',
        'returns-subtitle': 'Conservative to optimistic return projections across different exit pathways',
        
        // Scenario 1: Conservative
        'scenario-1-title': 'Conservative Scenario',
        'scenario-1-probability': '70% Probability',
        'scenario-1-returns': '25x-50x Returns',
        'scenario-1-timeline-label': 'Exit Timeline:',
        'scenario-1-timeline-text': 'Year 2-3',
        'scenario-1-value-label': 'Platform Value:',
        'scenario-1-value-text': '$1B-2B',
        'scenario-1-route-label': 'Exit Route:',
        'scenario-1-route-text': 'Strategic acquisition',
        'scenario-1-users-label': 'User Base:',
        'scenario-1-users-text': '100K active users',
        
        // Scenario 2: Optimistic
        'scenario-2-title': 'Optimistic Scenario',
        'scenario-2-probability': '25% Probability',
        'scenario-2-returns': '100x-200x Returns',
        'scenario-2-timeline-label': 'Exit Timeline:',
        'scenario-2-timeline-text': 'Year 3-4',
        'scenario-2-value-label': 'Platform Value:',
        'scenario-2-value-text': '$5B-10B',
        'scenario-2-route-label': 'Exit Route:',
        'scenario-2-route-text': 'IPO or mega acquisition',
        'scenario-2-users-label': 'User Base:',
        'scenario-2-users-text': '500K+ active users',
        
        // Scenario 3: Moonshot
        'scenario-3-title': 'Moonshot Scenario',
        'scenario-3-probability': '5% Probability',
        'scenario-3-returns': '500x+ Returns',
        'scenario-3-timeline-label': 'Exit Timeline:',
        'scenario-3-timeline-text': 'Year 4-5',
        'scenario-3-value-label': 'Platform Value:',
        'scenario-3-value-text': '$25B-50B',
        'scenario-3-route-label': 'Exit Route:',
        'scenario-3-route-text': 'Market-leading IPO',
        'scenario-3-users-label': 'User Base:',
        'scenario-3-users-text': '1M+ active users',
        
        // Strategic Exit Positioning
        'positioning-header': '🎯 Strategic Exit Positioning',
        'positioning-title': 'Multi-Path Exit Strategy:',
        'positioning-rating': 'HIGH VALUE POTENTIAL',
        'positioning-assets-label': 'Strategic Assets:',
        'positioning-assets-text': 'User base + $AIC tokenomics + AI platform = premium acquisition target',
        'positioning-timing-label': 'Perfect Timing:',
        'positioning-timing-text': 'Web3 adoption wave + AI maturity creates maximum buyer interest',
        'positioning-unique-label': 'Unique Position:',
        'positioning-unique-text': 'Only user-owned AI+crypto platform with proven tokenomics model',
        'positioning-outcome-label': 'Investor Outcome:',
        'positioning-outcome-text': 'Multiple exit paths reduce risk while maximizing return potential',
        
        // Slide 13 Content
        'partnership-opportunities-title': 'Partnership & Investment Opportunities',
        'partnership-header': '🎯 Strategic Partnership & Investment Roadmap',
        'partnership-subtitle': 'Immediate opportunities to join the AI + Web3 wealth creation revolution',
        
        // Investment & Partnership Opportunities
        'opportunities-header': '💰 Investment & Partnership Opportunities',
        'opportunities-subtitle': 'Multiple ways to participate in AICryptopia\'s growth trajectory',
        
        // Opportunity 1: Seed Investment Round
        'opportunity-1-title': 'Seed Investment Round',
        'opportunity-1-highlight': '$500K Target',
        'opportunity-1-size-label': 'Investment Size:',
        'opportunity-1-size-text': '$25K - $150K individual tickets',
        'opportunity-1-timeline-label': 'Timeline:',
        'opportunity-1-timeline-text': 'Closing Q3 2025 for immediate deployment',
        'opportunity-1-returns-label': 'Target Returns:',
        'opportunity-1-returns-text': '25x-100x over 3-5 years',
        'opportunity-1-benefits-label': 'Investor Benefits:',
        'opportunity-1-benefits-text': 'Early $AIC allocation + platform governance rights',
        
        // Opportunity 2: Strategic Partnerships
        'opportunity-2-title': 'Strategic Partnerships',
        'opportunity-2-highlight': 'Mutual Value Creation',
        'opportunity-2-partners-label': 'Target Partners:',
        'opportunity-2-partners-text': 'Crypto exchanges, AI companies, DeFi protocols',
        'opportunity-2-engagement-label': 'Engagement:',
        'opportunity-2-engagement-text': 'Revenue sharing + cross-promotion opportunities',
        'opportunity-2-benefits-label': 'Partnership Benefits:',
        'opportunity-2-benefits-text': 'User base access + technology integration',
        'opportunity-2-value-label': 'Strategic Value:',
        'opportunity-2-value-text': 'Accelerated growth + market penetration',
        
        // Opportunity 3: Advisory Board Positions
        'opportunity-3-title': 'Advisory Board Positions',
        'opportunity-3-highlight': 'Equity + $AIC Rewards',
        'opportunity-3-advisors-label': 'Target Advisors:',
        'opportunity-3-advisors-text': 'Crypto veterans, AI experts, Web3 builders',
        'opportunity-3-commitment-label': 'Commitment:',
        'opportunity-3-commitment-text': '2-4 hours monthly + strategic guidance',
        'opportunity-3-compensation-label': 'Compensation:',
        'opportunity-3-compensation-text': 'Equity stake + early $AIC allocation',
        'opportunity-3-impact-label': 'Impact:',
        'opportunity-3-impact-text': 'Shape platform direction + tokenomics design',
        
        // Opportunity 4: Early User Program
        'opportunity-4-title': 'Early User Program',
        'opportunity-4-highlight': 'Founding Member Status',
        'opportunity-4-users-label': 'Target Users:',
        'opportunity-4-users-text': 'Crypto enthusiasts, traders, educators',
        'opportunity-4-launch-label': 'Launch:',
        'opportunity-4-launch-text': 'MVP access Q4 2025 + exclusive features',
        'opportunity-4-benefits-label': 'User Benefits:',
        'opportunity-4-benefits-text': 'Enhanced $AIC earning rates + governance voting',
        'opportunity-4-value-label': 'Community Value:',
        'opportunity-4-value-text': 'Shape platform features + early wealth creation',
        
        // Execution Timeline & Milestones
        'execution-header': '🚀 Execution Timeline & Key Milestones',
        'execution-subtitle': 'Detailed roadmap from funding to scale with concrete deliverables',
        
        // Execution Stage 1: Immediate Next Steps
        'execution-stage-1-title': 'Immediate Next Steps',
        'execution-stage-1-timeframe': 'Next 30-60 Days',
        'execution-stage-1-deliverable-1-label': '📋 Due Diligence Package:',
        'execution-stage-1-deliverable-1-text': 'Complete financial models + technical architecture',
        'execution-stage-1-deliverable-2-label': '🤝 Investor Meetings:',
        'execution-stage-1-deliverable-2-text': '1-on-1 deep dives + Q&A sessions',
        'execution-stage-1-deliverable-3-label': '💡 MVP Demo:',
        'execution-stage-1-deliverable-3-text': 'Interactive prototype + user experience walkthrough',
        'execution-stage-1-deliverable-4-label': '⚖️ Legal Framework:',
        'execution-stage-1-deliverable-4-text': 'Investment terms + $AIC tokenomics structure',
        
        // Execution Stage 2: Funding Deployment
        'execution-stage-2-title': 'Funding Deployment',
        'execution-stage-2-timeframe': 'Q3-Q4 2025',
        'execution-stage-2-deliverable-1-label': '💰 Seed Close ($500K):',
        'execution-stage-2-deliverable-1-text': 'Capital deployment across development, marketing, operations',
        'execution-stage-2-deliverable-2-label': '👥 Team Expansion:',
        'execution-stage-2-deliverable-2-text': 'Core developers + community managers hired',
        'execution-stage-2-deliverable-3-label': '🏛️ Platform Foundation:',
        'execution-stage-2-deliverable-3-text': 'Knowledge Nexus MVP + user reward infrastructure',
        'execution-stage-2-deliverable-4-label': '💎 $AIC Tokenomics Launch:',
        'execution-stage-2-deliverable-4-text': 'Community rewards system + early user acquisition',
        
        // Execution Stage 3: Market Entry & Scaling
        'execution-stage-3-title': 'Market Entry & Scaling',
        'execution-stage-3-timeframe': '2026 & Beyond',
        'execution-stage-3-deliverable-1-label': '📊 Growth Metrics:',
        'execution-stage-3-deliverable-1-text': '10K users, $1M ARR, viral adoption curves',
        'execution-stage-3-deliverable-2-label': '🤖 AI Trading Platform:',
        'execution-stage-3-deliverable-2-text': 'Advanced tools launch + joyful pay model',
        'execution-stage-3-deliverable-3-label': '💎 $AIC Appreciation:',
        'execution-stage-3-deliverable-3-text': 'Token burns + scarcity drives 25x-100x returns',
        'execution-stage-3-deliverable-4-label': '🚪 Exit Opportunities:',
        'execution-stage-3-deliverable-4-text': 'Strategic acquisition or IPO preparation',
        
        // Immediate Action Items
        'action-header': '⚡ Immediate Action Items',
        'action-subtitle': 'How to move forward and secure your position in AICryptopia\'s growth',
        
        // Action 1: For Investors
        'action-1-title': 'For Investors',
        'action-1-priority': 'HIGH PRIORITY',
        'action-1-step-1-label': '1. Express Interest:',
        'action-1-step-1-text': 'Email commitment to secure allocation',
        'action-1-step-2-label': '2. Due Diligence:',
        'action-1-step-2-text': 'Review detailed financial models + technical docs',
        'action-1-step-3-label': '3. Investment Terms:',
        'action-1-step-3-text': 'Finalize ticket size + early $AIC allocation',
        'action-1-step-4-label': '4. Legal Process:',
        'action-1-step-4-text': 'Execute investment agreement + fund deployment',
        
        // Action 2: For Strategic Partners
        'action-2-title': 'For Strategic Partners',
        'action-2-priority': 'MUTUAL BENEFIT',
        'action-2-step-1-label': '1. Partnership Discussion:',
        'action-2-step-1-text': 'Explore integration opportunities',
        'action-2-step-2-label': '2. Technical Integration:',
        'action-2-step-2-text': 'API access + cross-platform features',
        'action-2-step-3-label': '3. User Base Synergy:',
        'action-2-step-3-text': 'Cross-promotion + shared growth strategies',
        'action-2-step-4-label': '4. Revenue Sharing:',
        'action-2-step-4-text': 'Mutually beneficial monetization models',
        
        // Action 3: For Advisors
        'action-3-title': 'For Advisors',
        'action-3-priority': 'STRATEGIC IMPACT',
        'action-3-step-1-label': '1. Advisory Role:',
        'action-3-step-1-text': 'Define expertise areas + time commitment',
        'action-3-step-2-label': '2. Strategic Input:',
        'action-3-step-2-text': 'Platform development + tokenomics design',
        'action-3-step-3-label': '3. Network Access:',
        'action-3-step-3-text': 'Introductions + partnership facilitation',
        'action-3-step-4-label': '4. Equity Participation:',
        'action-3-step-4-text': 'Advisory shares + early $AIC allocation',
        
        // Contact & Engagement Summary
        'contact-header': '📞 Ready to Build the Future Together?',
        'cta-title': 'Join the AI + Web3 Wealth Revolution:',
        'cta-rating': 'IMMEDIATE ACTION REQUIRED',
        'cta-urgency-label': 'Limited Time Opportunity:',
        'cta-urgency-text': '$500K seed round closing Q3 2025 with early $AIC allocation',
        'cta-value-label': 'Massive Upside Potential:',
        'cta-value-text': '25x-100x returns from user-owned AI + crypto convergence',
        'cta-differentiation-label': 'First-Mover Advantage:',
        'cta-differentiation-text': 'Only user-first AI+crypto platform with proven tokenomics model',
        'cta-contact-label': 'Next Step:',
        'cta-contact-text': 'Contact us immediately to secure your position in generational wealth creation',
        
        // Slide 14 Content
        'invitation-title': 'Your Invitation to Generational Wealth',
        'invitation-header': '🌟 Welcome to the AICryptopia Movement',
        'invitation-subtitle': 'You\'ve been invited to join the AI + Web3 wealth creation revolution',
        
        // Invitation Summary
        'invitation-summary-header': '💰 What This Invitation Represents',
        'invitation-summary-subtitle': 'Your exclusive opportunity to participate in the next generational wealth transfer',
        
        // Value Proposition 1: Market Opportunity
        'value-prop-1-title': 'Market Opportunity',
        'value-prop-1-highlight': '$1T+ Market Expansion',
        'value-prop-1-timing-label': 'Perfect Timing:',
        'value-prop-1-timing-text': 'Bitcoin Strategic Reserve + AI maturity convergence',
        'value-prop-1-position-label': 'Your Position:',
        'value-prop-1-position-text': 'Early access to user-owned AI + crypto platform',
        
        // Value Proposition 2: Wealth Creation Potential
        'value-prop-2-title': 'Wealth Creation Potential',
        'value-prop-2-highlight': '25x-100x Returns',
        'value-prop-2-target-label': 'Conservative Target:',
        'value-prop-2-target-text': '25x-50x returns over 3-5 years',
        'value-prop-2-precedent-label': 'Precedent:',
        'value-prop-2-precedent-text': '$TAO achieved 1000x in 2 years with similar model',
        
        // Value Proposition 3: Competitive Advantage
        'value-prop-3-title': 'Competitive Advantage',
        'value-prop-3-highlight': 'First-Mover Position',
        'value-prop-3-unique-label': 'Unique Position:',
        'value-prop-3-unique-text': 'Only user-owned AI + crypto convergence platform',
        'value-prop-3-gap-label': 'Market Gap:',
        'value-prop-3-gap-text': 'Fee-heavy competitors vs. our user-first approach',
        
        // Value Proposition 4: Execution Advantage
        'value-prop-4-title': 'Execution Advantage',
        'value-prop-4-highlight': 'Lean + AI Leverage',
        'value-prop-4-efficiency-label': 'Capital Efficiency:',
        'value-prop-4-efficiency-text': '$500K achieves what others need $2M+ for',
        'value-prop-4-speed-label': 'Speed to Market:',
        'value-prop-4-speed-text': 'Tokenomics-first approach de-risks adoption',
        
        // Contact & Engagement
        'contact-final-header': '📞 Accept Your Invitation',
        'contact-final-subtitle': 'Ready to secure your position in the AI + Web3 wealth revolution?',
        
        // Contact Method 1: Direct Investment
        'contact-method-1-title': 'Direct Investment Inquiry',
        'contact-method-1-action': 'Email for immediate $500K seed round allocation',
        
        // Contact Method 2: Platform Updates
        'contact-method-2-title': 'Platform & Updates',
        'contact-method-2-action': 'Stay updated on development milestones',
        
        // Contact Method 3: Community
        'contact-method-3-title': 'Community & Insights',
        'contact-method-3-action': 'Join our growing movement of wealth builders',
        
        // Final Call to Action
        'final-cta-title': 'Limited Time Opportunity:',
        'final-cta-timeline-label': 'Seed Round Closing:',
        'final-cta-timeline-text': 'Q3 2025 - Secure your allocation before it\'s too late',
        'final-cta-exclusivity-label': 'Early $AIC Allocation:',
        'final-cta-exclusivity-text': 'Founding investors get enhanced token allocation + governance rights',
        'final-cta-wealth-label': 'Generational Wealth Awaits:',
        'final-cta-wealth-text': 'Be part of the AI + Web3 convergence that creates the next wave of crypto millionaires',
        'final-cta-action-label': 'Your Next Step:',
        'final-cta-action-text': 'Contact us immediately to accept your invitation to generational wealth 🚀💎',
        
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
        'slide-1-title': 'AI加密乐园 - 财富之门',
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
        'main-title': 'AI加密乐园',
        'main-tagline': '您在AI + Web3领域财富建设的快乐门户',
        'main-subtitle': '用去中心化AI普及世代财富获取',
        'prepared-by': '制作方：AICryptopia团队',
        'date': '日期：2025年1月',
        'cta-button': '体验加密乐园冲浪 💎',
        
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
        
        // Problem-Solution Pair 5: Privacy
        'problem-5-title': '隐私侵犯',
        'problem-5-highlight': '数据收割',
        'problem-5-detail-1': '大型科技公司AI收割个人数据',
        'problem-5-detail-2': '交易活动被跟踪并出售',
        'problem-5-detail-3': '无法控制您的信息',
        
        'solution-5-title': '本地数据主权',
        'solution-5-highlight': '隐私优先',
        'solution-5-detail-1': '下载工具，本地运行',
        'solution-5-detail-2': '您的数据永远不会离开您的设备',
        'solution-5-detail-3': '您对AI交互的真实所有权',
        
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
        
        // Value Card 5: Privacy
        'value-card-5-title': '本地隐私与控制',
        'value-card-5-highlight': '您的数据，您的设备',
        'value-card-5-description': '下载AI交易工具免费——在本地运行一切。您的数据在您捕获加密财富时保持私密',
        
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
        'central-hub-title': '用户拥有的AI加密乐园',
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
        'trading-tools-title': 'AI驱动的加密工具',
        'trading-feature-1': '智能交易机器人与分析',
        'trading-feature-2': '风险管理与优化',
        'trading-feature-3': '🔒 下载并本地运行',
        'trading-feature-4': '🛡️ 您的数据保持私密',
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
        'ownership-banner': '💎 真正的所有权：用户共同建设、拥有并从AI加密乐园中获利',
        
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
        'phase-1-deliverable-4': '�� 用户奖励系统',
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
        
        // Slide 7 Content
        'growth-earning-title': '增长与盈利潜力',
        'revenue-model-header': '🚀 三阶段收入模式：建设可持续增长',
        'revenue-model-subtitle': '从流量变现到代币经济学财富创造',
        
        // Stage 1: Traffic-Based Revenue
        'stage-1-title': '基于流量的收入',
        'stage-1-timeline': '第1-12个月',
        'stage-1-source-1': '🎯 **广告收入** 来自高质量流量',
        'stage-1-source-2': '📊 **赞助内容** 合作伙伴关系',
        'stage-1-source-3': '🔗 **联盟佣金** 来自加密工具',
        'stage-1-source-4': '📧 **邮件营销** 变现',
        'stage-1-projection-value': '$5-20万美元ARR',
        'stage-1-projection-label': '引导阶段',
        
        // Stage 2: Utility-Based Revenue
        'stage-2-title': '基于实用性的收入',
        'stage-2-timeline': '第1-2年',
        'stage-2-source-1': '🎓 **高级培训课程** (定制路径)',
        'stage-2-source-2': '🤖 **AI交易工具** (愉悦付费模式)',
        'stage-2-source-3': '📊 **高级分析** 订阅',
        'stage-2-source-4': '🔒 **VIP社区访问** 等级',
        'stage-2-projection-value': '$100-500万美元ARR',
        'stage-2-projection-label': '增长阶段',
        
        // Stage 3: Tokenomics-Based Revenue
        'stage-3-title': '基于代币经济学的财富',
        'stage-3-timeline': '第2-3年+',
        'stage-3-source-1': '💰 **$AIC代币升值** (100倍目标)',
        'stage-3-source-2': '🔥 **代币销毁** 创造稀缺性',
        'stage-3-source-3': '🏛️ **平台估值** 增长',
        'stage-3-source-4': '💎 **利益相关者财富** 实现',
        'stage-3-projection-value': '$1亿+美元TVL',
        'stage-3-projection-label': '财富阶段',
        
        // Additional Revenue Streams
        'additional-revenue-header': '💼 额外收入来源',
        'additional-revenue-subtitle': '跨所有阶段的补充收入来源',
        'additional-revenue-1-title': 'API与数据许可',
        'additional-revenue-1-description': '向机构提供市场洞察',
        'additional-revenue-2-title': '交易费用',
        'additional-revenue-2-description': '促成交易的小额百分比',
        'additional-revenue-3-title': '合作伙伴收入',
        'additional-revenue-3-description': '与DeFi协议的收入分享',
        'additional-revenue-4-title': '市场佣金',
        'additional-revenue-4-description': '交易策略与工具市场',
        
        // Growth Chart
        'growth-chart-header': '📊 预计增长轨迹',
        'growth-chart-subtitle': '从流量变现到代币经济学财富创造的收入扩展',
        'target-year-1-label': '第1年：',
        'target-year-1-value': '1万用户，50万美元ARR',
        'target-year-2-label': '第2年：',
        'target-year-2-value': '5万用户，500万美元ARR',
        'target-year-3-label': '第3年：',
        'target-year-3-value': '10万用户，1亿美元TVL',
        
        // Slide 8 Content
        'tokenomics-main-title': '$AIC代币经济学冲向月球',
        'tokenomics-header': '💎 终极财富创造引擎',
        'tokenomics-subtitle': '从用户实用性到通过战略代币经济学创造世代财富',
        
        // Core Mechanics
        'core-mechanics-header': '🔥 核心$AIC机制',
        'core-mechanics-subtitle': '内置稀缺性 + 真实实用性 = 爆炸式价值创造',
        
        // Token Burns
        'burn-mechanic-title': '代币销毁',
        'burn-mechanic-highlight': '通缩压力',
        'burn-detail-1': '🎯 所有愉悦付费的2%被销毁',
        'burn-detail-2': '📈 季度减半减少供应量',
        'burn-detail-3': '💎 随时间增加稀缺性',
        'burn-detail-4': '🚀 数学升值压力',
        
        // Real Utility
        'utility-mechanic-title': '真实实用性',
        'utility-mechanic-highlight': '真正的价值驱动',
        'utility-detail-1': '🎓 质押获得高级功能',
        'utility-detail-2': '🤖 访问AI交易工具',
        'utility-detail-3': '🗳️ 平台治理权利',
        'utility-detail-4': '💰 通过贡献赚取代币',
        
        // Network Effects
        'network-effects-title': '网络效应',
        'network-effects-highlight': '病毒式增长引擎',
        'network-detail-1': '👥 更多用户 = 更多需求',
        'network-detail-2': '💡 更好的AI = 更高的实用性',
        'network-detail-3': '🔗 社区增长平台价值',
        'network-detail-4': '🌪️ 复合反馈循环',
        
        // Wealth Creation
        'wealth-creation-title': '财富创造',
        'wealth-creation-highlight': '100倍目标',
        'wealth-detail-1': '🎯 $TAO先例：2年1000倍',
        'wealth-detail-2': '📊 我们的目标：3年100倍',
        'wealth-detail-3': '🏛️ 平台估值随用户增长',
        'wealth-detail-4': '🚀 早期持有者获益最多',
        
        // Comparison Table
        'comparison-header': '⚖️ $AIC vs 传统加密代币',
        'comparison-subtitle': '为什么$AIC在财富创造方面具有优越的代币经济学',
        'comparison-feature-header': '功能',
        'comparison-aic-header': '$AIC (AICryptopia)',
        'comparison-others-header': '大多数加密代币',
        'comparison-row-1-feature': '实用性基础',
        'comparison-row-1-aic': '✅ 真实平台实用性 + 质押',
        'comparison-row-1-others': '❌ 仅投机交易',
        'comparison-row-2-feature': '通缩机制',
        'comparison-row-2-aic': '✅ 收入销毁 + 减半',
        'comparison-row-2-others': '❌ 通胀或无销毁',
        'comparison-row-3-feature': '用户赚取模式',
        'comparison-row-3-aic': '✅ 通过贡献价值赚取代币',
        'comparison-row-3-others': '❌ 仅购买获取',
        'comparison-row-4-feature': '收入支撑',
        'comparison-row-4-aic': '✅ 平台收入资助回购',
        'comparison-row-4-others': '❌ 无收入基础',
        'comparison-row-5-feature': '网络效应',
        'comparison-row-5-aic': '✅ 更多用户 = 更高实用价值',
        'comparison-row-5-others': '❌ 实用性与采用脱节',
        
        // Wealth Trajectory
        'trajectory-header': '🎯 100倍财富创造轨迹',
        'trajectory-subtitle': '基于$TAO先例和平台收入增长的保守预测',
        'milestone-year-1': '第1年',
        'milestone-growth-1': '5倍 - 10倍',
        'milestone-driver-1': '平台采用 + 实用性需求',
        'milestone-year-2': '第2年',
        'milestone-growth-2': '25倍 - 50倍',
        'milestone-driver-2': '收入增长 + 代币销毁加速',
        'milestone-year-3': '第3年',
        'milestone-growth-3': '100倍目标',
        'milestone-driver-3': '大规模采用 + 稀缺性 + 估值',
        
        // Investment Thesis
        'thesis-header': '💰 为什么早期$AIC投资是世代财富',
        'thesis-timing-title': '完美时机',
        'thesis-timing-description': '比特币战略储备 + 稳定币立法 = 加密采用加速',
        'thesis-precedent-title': '已验证先例',
        'thesis-precedent-description': '$TAO：2年从真实实用性获得1000倍。我们目标保守的100倍',
        'thesis-platform-title': '平台价值',
        'thesis-platform-description': '代币由真实平台收入 + 用户增长支撑，而非仅仅投机',
        'thesis-community-title': '社区所有权',
        'thesis-community-description': '用户共同建设、拥有和获利 - 创造不可阻挡的网络效应',
        
        // Slide 9 Content
        'risks-main-title': '竞争挑战与风险',
        'risk-analysis-header': '🎯 透明风险评估与战略定位',
        'risk-analysis-subtitle': '全面分析挑战并提供经过验证的缓解策略',
        
        // Competitive Landscape
        'landscape-header': '🏟️ 竞争格局分析',
        'landscape-subtitle': '了解竞争环境和我们的战略差异化',
        
        // Competitor 1: Fee-Heavy Platforms
        'competitor-1-title': '费用沉重的平台',
        'competitor-1-challenge': '直接竞争',
        'competitor-1-detail-1': '🎯 Token Metrics (每月99美元高级版)',
        'competitor-1-detail-2': '📊 CoinTracker (订阅模式)',
        'competitor-1-detail-3': '💰 从用户身上提取最大费用',
        'competitor-1-detail-4': '🚫 有限的免费价值主张',
        'competitor-1-advantage-label': '我们的优势：',
        'competitor-1-advantage-text': '免费优先模式 + $AIC奖励 vs 费用提取',
        
        // Competitor 2: Big Tech
        'competitor-2-title': '大型科技公司进入',
        'competitor-2-challenge': '潜在威胁',
        'competitor-2-detail-1': '🔵 Meta AI + 加密整合',
        'competitor-2-detail-2': '🟡 Google的Bard + 金融数据',
        'competitor-2-detail-3': '💰 庞大的资源和分销',
        'competitor-2-detail-4': '⚡ 快速市场进入能力',
        'competitor-2-advantage-label': '我们的优势：',
        'competitor-2-advantage-text': '加密原生 + 社区所有权 vs 企业控制',
        
        // Competitor 3: Traditional Crypto Tools
        'competitor-3-title': '传统加密工具',
        'competitor-3-challenge': '间接竞争',
        'competitor-3-detail-1': '📱 CoinGecko, CoinMarketCap (数据)',
        'competitor-3-detail-2': '💹 TradingView (图表工具)',
        'competitor-3-detail-3': '🤖 基础交易机器人 (有限AI)',
        'competitor-3-detail-4': '📚 碎片化教育内容',
        'competitor-3-advantage-label': '我们的优势：',
        'competitor-3-advantage-text': '集成AI平台 + 用户所有权 vs 碎片化工具',
        
        // Competitor 4: Web3-Native Platforms
        'competitor-4-title': 'Web3原生平台',
        'competitor-4-challenge': '新兴竞争',
        'competitor-4-detail-1': '🔗 Chainlink生态系统工具',
        'competitor-4-detail-2': '🦄 Uniswap分析套件',
        'competitor-4-detail-3': '💎 DeFi协议仪表板',
        'competitor-4-detail-4': '🎯 利基垂直解决方案',
        'competitor-4-advantage-label': '我们的优势：',
        'competitor-4-advantage-text': '综合平台 + 初学者友好 vs 技术复杂性',
        
        // Risk Mitigation
        'mitigation-header': '⚖️ 风险类别与经过验证的缓解策略',
        'mitigation-subtitle': '具有具体行动计划的全面风险管理',
        
        // Risk 1: Market Volatility
        'risk-1-title': '市场波动风险',
        'risk-1-level': '高影响，中等概率',
        'risk-1-challenge-label': '挑战：',
        'risk-1-challenge-text': '加密市场周期影响用户采用和代币价值',
        'risk-1-mitigation-label': '缓解措施：',
        'risk-1-mitigation-1': '🛡️ 收入多元化 (流量 + 实用性 + 代币经济学)',
        'risk-1-mitigation-2': '📚 专注教育价值 (抗衰退)',
        'risk-1-mitigation-3': '💰 多重收入流减少依赖性',
        'risk-1-mitigation-4': '🤖 AI工具在任何市场条件下都有价值',
        
        // Risk 2: Regulatory Changes
        'risk-2-title': '监管变化',
        'risk-2-level': '中等影响，中等概率',
        'risk-2-challenge-label': '挑战：',
        'risk-2-challenge-text': '不断发展的加密监管可能影响运营',
        'risk-2-mitigation-label': '缓解措施：',
        'risk-2-mitigation-1': '✅ 教育平台 (合规友好)',
        'risk-2-mitigation-2': '🌍 去中心化架构 (司法管辖区不可知)',
        'risk-2-mitigation-3': '📋 主动法律框架采用',
        'risk-2-mitigation-4': '🇺🇸 美国比特币战略储备 = 有利环境',
        
        // Risk 3: Talent Acquisition
        'risk-3-title': '人才获取',
        'risk-3-level': '中等影响，低概率',
        'risk-3-challenge-label': '挑战：',
        'risk-3-challenge-text': 'AI/加密人才昂贵且竞争激烈',
        'risk-3-mitigation-label': '缓解措施：',
        'risk-3-mitigation-1': '🤖 AI自动化减少人才依赖',
        'risk-3-mitigation-2': '🔓 开源杠杆 (Hugging Face等)',
        'risk-3-mitigation-3': '💎 $AIC股权补偿吸引人才',
        'risk-3-mitigation-4': '🌍 远程优先全球人才获取',
        
        // Risk 4: User Adoption
        'risk-4-title': '用户采用风险',
        'risk-4-level': '高影响，低概率',
        'risk-4-challenge-label': '挑战：',
        'risk-4-challenge-text': '用户采用缓慢可能延迟增长里程碑',
        'risk-4-mitigation-label': '缓解措施：',
        'risk-4-mitigation-1': '🎁 免费优先模式消除采用壁垒',
        'risk-4-mitigation-2': '🎯 $AIC奖励激励参与',
        'risk-4-mitigation-3': '📚 教育内容推动有机增长',
        'risk-4-mitigation-4': '🔄 内置病毒式分享机制',
        
        // Strategic Advantages
        'advantages-header': '🚀 战略优势与竞争护城河',
        'advantages-subtitle': '为什么AICryptopia能够主导市场',
        
        // Advantage 1: Network Effects
        'advantage-1-title': '网络效应护城河',
        'advantage-1-why-label': '我们获胜的原因：',
        'advantage-1-why-text': '更多用户 → 更好的AI → 更高价值 → 更多用户',
        'advantage-1-context': 'vs 竞争对手：没有学习循环的静态工具',
        
        // Advantage 2: Superior Tokenomics
        'advantage-2-title': '优越的代币经济学',
        'advantage-2-why-label': '我们获胜的原因：',
        'advantage-2-why-text': '收入支撑的销毁 + 用户奖励 + 真实实用性',
        'advantage-2-context': 'vs 竞争对手：纯投机或无代币经济学',
        
        // Advantage 3: Community Ownership
        'advantage-3-title': '社区所有权',
        'advantage-3-why-label': '我们获胜的原因：',
        'advantage-3-why-text': '用户共同建设、拥有和获利',
        'advantage-3-context': 'vs 竞争对手：榨取式企业模式',
        
        // Advantage 4: Perfect Timing
        'advantage-4-title': '完美市场时机',
        'advantage-4-why-label': '我们获胜的原因：',
        'advantage-4-why-text': '比特币战略储备 + AI成熟度汇聚',
        'advantage-4-context': 'vs 竞争对手：过早或过晚的市场进入',
        
        // Market Position Summary
        'position-header': '🎯 市场地位总结',
        'assessment-title': '整体风险评估：',
        'assessment-rating': '低到中等',
        'assessment-strength-label': '关键优势：',
        'assessment-strength-text': '多重收入流 + 优越代币经济学 + 完美时机 = 降低风险档案',
        'assessment-opportunity-label': '重大机会：',
        'assessment-opportunity-text': '$1万亿+市场增长 + 政府加密认可 = 巨大顺风',
        'assessment-conclusion-label': '投资论点：',
        'assessment-conclusion-text': '风险调整回报有利于在用户拥有的AI + 加密汇聚中的早期位置',
        
        // Slide 10 Content
        'team-funding-title': '团队与融资',
        'team-overview-title': '🏗️ 精简团队 + AI杠杆',
        
        // Team Stats
        'team-stat-1': '核心团队 + AI',
        'team-stat-2': '种子轮需求',
        'team-stat-3': '投资回报目标',
        
        // Team Bios
        'founder-title': '创始人',
        'founder-expertise': 'AI/加密专家：',
        'founder-description': '在AI系统和加密市场动态方面具有深厚专业知识。致力于创建用户优先的乌托邦，实现财富民主化。',
        'dev-lead-title': '开发负责人',
        'dev-lead-expertise': 'Web3专家：',
        'dev-lead-description': '在去中心化系统、开源杠杆和可扩展区块链应用方面的专家。',
        
        // Funding Header
        'funding-header': '💰 50万美元种子轮 → 第一阶段代币经济学优先启动',
        'funding-subtitle': '与开源开发路线图一致的战略分配',
        
        // Allocation 1: Development
        'allocation-1-title': '开发 (40% - 20万美元)',
        'allocation-1-highlight': '基础设施 + $AIC启动',
        'allocation-1-detail-1': '🏛️ 知识中枢MVP开发',
        'allocation-1-detail-2': '💎 **$AIC代币经济学实施**',
        'allocation-1-detail-3': '🎯 用户奖励系统架构',
        'allocation-1-detail-4': '🔧 开源工具集成',
        
        // Allocation 2: Marketing
        'allocation-2-title': '营销 (30% - 15万美元)',
        'allocation-2-highlight': '社区建设',
        'allocation-2-detail-1': '🎯 加密社区用户获取',
        'allocation-2-detail-2': '👥 早期采用者参与计划',
        'allocation-2-detail-3': '📱 病毒式增长内容创作',
        'allocation-2-detail-4': '🤝 战略合作伙伴关系发展',
        
        // Allocation 3: Operations
        'allocation-3-title': '运营 (20% - 10万美元)',
        'allocation-3-highlight': '基础设施与合规',
        'allocation-3-detail-1': '🌐 平台基础设施与托管',
        'allocation-3-detail-2': '⚖️ 法律合规与代币经济学结构',
        'allocation-3-detail-3': '🔒 安全审计与最佳实践',
        'allocation-3-detail-4': '📊 分析与监控系统',
        
        // Allocation 4: Strategic Reserve
        'allocation-4-title': '战略储备 (10% - 5万美元)',
        'allocation-4-highlight': '风险缓解',
        'allocation-4-detail-1': '📈 市场机会转向',
        'allocation-4-detail-2': '🚀 加速扩展准备',
        'allocation-4-detail-3': '⚡ 意外增长支持',
        'allocation-4-detail-4': '🎯 竞争响应基金',
        
        // Chart Section
        'chart-allocation-title': '📊 资本分配',
        'chart-allocation-subtitle': '为第一阶段成功的高效部署',
        
        // Milestones
        'milestone-1-label': '第一阶段目标：',
        'milestone-1-value': '1千用户赚取$AIC',
        'milestone-2-label': '投资回报轨迹：',
        'milestone-2-value': '100倍财富创造',
        
        // Strategy Summary
        'strategy-1-title': '资本效率',
        'strategy-1-label': 'AI + 开源：',
        'strategy-1-description': '50万美元实现传统初创企业需要200万美元+才能达到的目标',
        'strategy-2-title': '去风险化方法',
        'strategy-2-label': '代币经济学优先：',
        'strategy-2-description': '从第一天开始的用户参与减少采用风险',
        'strategy-3-title': '快速市场化',
        'strategy-3-label': '精简 + AI：',
        'strategy-3-description': '当竞争对手建立庞大团队时，我们快速执行第一阶段',
        
        // Slide 11 Content
        'validation-main-title': '市场验证',
        'validation-header': '🎯 全面市场验证与去风险分析',
        'validation-subtitle': '多重验证信号确认强劲市场需求并降低投资风险',
        
        // Proven Market Precedents
        'precedent-header': '📊 经过验证的市场先例与基准',
        'precedent-subtitle': '成功的AI+加密平台展示了巨大的价值创造潜力',
        
        // Precedent 1: $TAO
        'precedent-1-title': '$TAO成功案例',
        'precedent-1-highlight': '2年内1000倍',
        'precedent-1-metric-label': '模式验证：',
        'precedent-1-metric-text': 'AI+加密实用性驱动指数级增长',
        'precedent-1-advantage-label': '我们的优势：',
        'precedent-1-advantage-text': '用户拥有模式 vs 纯投机',
        
        // Precedent 2: Chainlink
        'precedent-2-title': 'Chainlink生态系统',
        'precedent-2-highlight': '70亿美元+市值',
        'precedent-2-metric-label': '基础设施价值：',
        'precedent-2-metric-text': 'Web3工具创造巨大估值',
        'precedent-2-advantage-label': '我们的优势：',
        'precedent-2-advantage-text': '用户友好 vs 仅面向开发者',
        
        // Precedent 3: TradingView
        'precedent-3-title': 'TradingView模式',
        'precedent-3-highlight': '30亿美元估值',
        'precedent-3-metric-label': '平台成功：',
        'precedent-3-metric-text': '免费优先的交易工具达到独角兽地位',
        'precedent-3-advantage-label': '我们的优势：',
        'precedent-3-advantage-text': 'Web3原生 + 代币经济学 vs Web2模式',
        
        // Precedent 4: Coinbase
        'precedent-4-title': 'Coinbase成功',
        'precedent-4-highlight': '850亿美元峰值价值',
        'precedent-4-metric-label': '用户焦点：',
        'precedent-4-metric-text': '简化的加密访问创造巨大价值',
        'precedent-4-advantage-label': '我们的优势：',
        'precedent-4-advantage-text': '社区所有权 vs 企业榨取',
        
        // User Demand Signals
        'demand-header': '👥 强劲的用户需求信号',
        'demand-subtitle': '多重指标显示市场对我们解决方案的强烈需求',
        
        // Demand 1: Crypto Education
        'demand-1-title': '加密教育需求',
        'demand-1-stat': 'YouTube加密教育每月观看量',
        'demand-1-validation-label': '验证：',
        'demand-1-validation-text': '对易于理解的加密知识的巨大需求',
        
        // Demand 2: Pain Points
        'demand-2-title': '有记录的痛点',
        'demand-2-stat': '加密用户认为"太复杂"是首要障碍',
        'demand-2-validation-label': '验证：',
        'demand-2-validation-text': '明确的简化市场需求',
        
        // Demand 3: AI Trading Tools
        'demand-3-title': 'AI交易工具兴趣',
        'demand-3-stat': '2024年AI交易软件市场规模',
        'demand-3-validation-label': '验证：',
        'demand-3-validation-text': '已验证的AI交易辅助付费意愿',
        
        // Demand 4: Community Ownership
        'demand-4-title': '社区所有权趋势',
        'demand-4-stat': '加密用户偏好社区拥有的平台',
        'demand-4-validation-label': '验证：',
        'demand-4-validation-text': '对用户所有权模式的强烈偏好',
        
        // Technical & Market Timing
        'timing-header': '⏰ 完美的技术与市场时机',
        'timing-subtitle': '技术成熟度和监管清晰度的汇聚创造了理想条件',
        
        // Timing 1: AI Technology
        'timing-1-title': 'AI技术成熟度',
        'timing-1-evidence-label': '证据：',
        'timing-1-evidence-text': 'GPT-4、Claude、开源LLMs支持复杂应用',
        'timing-1-advantage-label': '优势：',
        'timing-1-advantage-text': '我们无需研发成本即可利用成熟AI',
        
        // Timing 2: Regulatory Environment
        'timing-2-title': '监管环境',
        'timing-2-evidence-label': '证据：',
        'timing-2-evidence-text': '比特币战略储备 + 稳定币法案通过',
        'timing-2-advantage-label': '优势：',
        'timing-2-advantage-text': '政府认可降低监管风险',
        
        // Timing 3: Institutional Adoption
        'timing-3-title': '机构采用',
        'timing-3-evidence-label': '证据：',
        'timing-3-evidence-text': 'BlackRock、Fidelity、Tesla拥抱加密基础设施',
        'timing-3-advantage-label': '优势：',
        'timing-3-advantage-text': '主流接受推动大规模采用浪潮',
        
        // Timing 4: Web3 Infrastructure
        'timing-4-title': 'Web3基础设施',
        'timing-4-evidence-label': '证据：',
        'timing-4-evidence-text': '以太坊扩容、跨链桥、钱包UX改善',
        'timing-4-advantage-label': '优势：',
        'timing-4-advantage-text': '为主流用户消除技术障碍',
        
        // Investment Risk Assessment
        'risk-assessment-header': '🎯 投资风险评估总结',
        'validation-score-title': '强劲验证得分：',
        'validation-score-rating': '高信心',
        'validation-precedent-label': '市场先例：',
        'validation-precedent-text': '$TAO (1000倍)、Chainlink (70亿美元)、TradingView (30亿美元) 证明模式可行性',
        'validation-demand-label': '用户需求：',
        'validation-demand-text': '加密教育每月5亿+观看量显示巨大需求',
        'validation-timing-label': '完美时机：',
        'validation-timing-text': 'AI成熟度 + 监管清晰度 + 基础设施就绪汇聚',
        'validation-conclusion-label': '投资论点：',
        'validation-conclusion-text': '多重验证信号降低风险并确认市场准备就绪',
        
        // Slide 12 Content
        'exit-strategy-title': '退出策略',
        'exit-header': '🎯 多元化高价值退出路径与投资者回报',
        'exit-subtitle': '利用$AIC代币经济学和平台价值创造的战略退出选择',
        
        // Strategic Acquisition Targets
        'acquisition-header': '🏢 战略收购目标',
        'acquisition-subtitle': '寻求AI+Web3用户获取的战略买家提供的溢价估值',
        
        // Target 1: Major Crypto Exchanges
        'target-1-title': '主要加密交易所',
        'target-1-highlight': '50-150亿美元估值',
        'target-1-buyers-label': '战略买家：',
        'target-1-buyers-text': 'Binance、Coinbase、Kraken、OKX',
        'target-1-logic-label': '收购逻辑：',
        'target-1-logic-text': '加密用户获取成本为每用户100-500美元',
        'target-1-advantage-label': '我们的优势：',
        'target-1-advantage-text': '10万+活跃用户 = 5000万美元+收购溢价',
        
        // Target 2: Big Tech AI Expansion
        'target-2-title': '大型科技公司AI扩张',
        'target-2-highlight': '100-250亿美元估值',
        'target-2-buyers-label': '战略买家：',
        'target-2-buyers-text': 'Meta、Google、Microsoft、OpenAI',
        'target-2-logic-label': '收购逻辑：',
        'target-2-logic-text': 'Web3 + AI融合打造下一代平台',
        'target-2-advantage-label': '我们的优势：',
        'target-2-advantage-text': '加密原生AI平台，具有已验证的代币经济学',
        
        // Target 3: FinTech & Trading Platforms
        'target-3-title': '金融科技与交易平台',
        'target-3-highlight': '30-80亿美元估值',
        'target-3-buyers-label': '战略买家：',
        'target-3-buyers-text': 'Robinhood、Interactive Brokers、E*TRADE',
        'target-3-logic-label': '收购逻辑：',
        'target-3-logic-text': '通过AI差异化扩展加密交易',
        'target-3-advantage-label': '我们的优势：',
        'target-3-advantage-text': '简化的加密访问 + AI交易工具',
        
        // Target 4: Web3 Infrastructure Players
        'target-4-title': 'Web3基础设施参与者',
        'target-4-highlight': '20-60亿美元估值',
        'target-4-buyers-label': '战略买家：',
        'target-4-buyers-text': 'Consensys、Chainlink、Polygon、Uniswap',
        'target-4-logic-label': '收购逻辑：',
        'target-4-logic-text': '面向用户的基础设施采用平台',
        'target-4-advantage-label': '我们的优势：',
        'target-4-advantage-text': '新手友好的Web3生态系统门户',
        
        // Value Creation Timeline
        'timeline-header': '📈 价值创造时间线与退出窗口',
        'timeline-subtitle': '与平台里程碑和$AIC代币升值一致的战略退出时机',
        
        // Stage 1: Early Strategic Exit
        'stage-1-title': '早期战略退出',
        'stage-1-timeframe': '第1-2年',
        'stage-1-metric-1-label': '平台价值：',
        'stage-1-metric-1-value': '1-5亿美元',
        'stage-1-metric-2-label': '$AIC倍数：',
        'stage-1-metric-2-value': '10-25倍',
        'stage-1-metric-3-label': '用户基础：',
        'stage-1-metric-3-value': '1-5万用户',
        'stage-1-logic-label': '退出逻辑：',
        'stage-1-logic-text': '已验证的产品市场契合度吸引战略溢价',
        
        // Stage 2: Growth Stage Exit
        'stage-2-title': '成长阶段退出',
        'stage-2-timeframe': '第2-3年',
        'stage-2-metric-1-label': '平台价值：',
        'stage-2-metric-1-value': '10-50亿美元',
        'stage-2-metric-2-label': '$AIC倍数：',
        'stage-2-metric-2-value': '50-100倍',
        'stage-2-metric-3-label': '用户基础：',
        'stage-2-metric-3-value': '10-50万用户',
        'stage-2-logic-label': '退出逻辑：',
        'stage-2-logic-text': '规模 + 代币经济学创造巨大收购价值',
        
        // Stage 3: IPO or Mega Exit
        'stage-3-title': 'IPO或超大退出',
        'stage-3-timeframe': '第3-5年',
        'stage-3-metric-1-label': '平台价值：',
        'stage-3-metric-1-value': '100-500亿美元',
        'stage-3-metric-2-label': '$AIC倍数：',
        'stage-3-metric-2-value': '100-500倍',
        'stage-3-metric-3-label': '用户基础：',
        'stage-3-metric-3-value': '100万+用户',
        'stage-3-logic-label': '退出逻辑：',
        'stage-3-logic-text': '主导平台地位支持公开发行',
        
        // Investor Return Scenarios
        'returns-header': '💰 投资者回报情景',
        'returns-subtitle': '不同退出路径下的保守到乐观回报预测',
        
        // Scenario 1: Conservative
        'scenario-1-title': '保守情景',
        'scenario-1-probability': '70%概率',
        'scenario-1-returns': '25-50倍回报',
        'scenario-1-timeline-label': '退出时间：',
        'scenario-1-timeline-text': '第2-3年',
        'scenario-1-value-label': '平台价值：',
        'scenario-1-value-text': '10-20亿美元',
        'scenario-1-route-label': '退出路径：',
        'scenario-1-route-text': '战略收购',
        'scenario-1-users-label': '用户基础：',
        'scenario-1-users-text': '10万活跃用户',
        
        // Scenario 2: Optimistic
        'scenario-2-title': '乐观情景',
        'scenario-2-probability': '25%概率',
        'scenario-2-returns': '100-200倍回报',
        'scenario-2-timeline-label': '退出时间：',
        'scenario-2-timeline-text': '第3-4年',
        'scenario-2-value-label': '平台价值：',
        'scenario-2-value-text': '50-100亿美元',
        'scenario-2-route-label': '退出路径：',
        'scenario-2-route-text': 'IPO或超大收购',
        'scenario-2-users-label': '用户基础：',
        'scenario-2-users-text': '50万+活跃用户',
        
        // Scenario 3: Moonshot
        'scenario-3-title': '登月情景',
        'scenario-3-probability': '5%概率',
        'scenario-3-returns': '500倍+回报',
        'scenario-3-timeline-label': '退出时间：',
        'scenario-3-timeline-text': '第4-5年',
        'scenario-3-value-label': '平台价值：',
        'scenario-3-value-text': '250-500亿美元',
        'scenario-3-route-label': '退出路径：',
        'scenario-3-route-text': '市场领先IPO',
        'scenario-3-users-label': '用户基础：',
        'scenario-3-users-text': '100万+活跃用户',
        
        // Strategic Exit Positioning
        'positioning-header': '🎯 战略退出定位',
        'positioning-title': '多路径退出策略：',
        'positioning-rating': '高价值潜力',
        'positioning-assets-label': '战略资产：',
        'positioning-assets-text': '用户基础 + $AIC代币经济学 + AI平台 = 溢价收购目标',
        'positioning-timing-label': '完美时机：',
        'positioning-timing-text': 'Web3采用浪潮 + AI成熟度创造最大买家兴趣',
        'positioning-unique-label': '独特定位：',
        'positioning-unique-text': '唯一的用户拥有AI+加密平台，具有已验证的代币经济学模式',
        'positioning-outcome-label': '投资者结果：',
        'positioning-outcome-text': '多重退出路径降低风险，同时最大化回报潜力',
        
        // Slide 13 Content
        'partnership-opportunities-title': '合作伙伴关系与投资机会',
        'partnership-header': '🎯 战略合作伙伴关系与投资路线图',
        'partnership-subtitle': '立即加入AI + Web3财富创造革命的机会',
        
        // Investment & Partnership Opportunities
        'opportunities-header': '💰 投资与合作伙伴机会',
        'opportunities-subtitle': '参与AICryptopia成长轨迹的多种方式',
        
        // Opportunity 1: Seed Investment Round
        'opportunity-1-title': '种子投资轮',
        'opportunity-1-highlight': '50万美元目标',
        'opportunity-1-size-label': '投资规模：',
        'opportunity-1-size-text': '2.5万-15万美元个人投资额',
        'opportunity-1-timeline-label': '时间线：',
        'opportunity-1-timeline-text': '2025年第三季度截止，立即部署',
        'opportunity-1-returns-label': '目标回报：',
        'opportunity-1-returns-text': '3-5年内25-100倍',
        'opportunity-1-benefits-label': '投资者福利：',
        'opportunity-1-benefits-text': '早期$AIC分配 + 平台治理权',
        
        // Opportunity 2: Strategic Partnerships
        'opportunity-2-title': '战略合作伙伴关系',
        'opportunity-2-highlight': '互利价值创造',
        'opportunity-2-partners-label': '目标合作伙伴：',
        'opportunity-2-partners-text': '加密交易所、AI公司、DeFi协议',
        'opportunity-2-engagement-label': '合作方式：',
        'opportunity-2-engagement-text': '收入分成 + 交叉推广机会',
        'opportunity-2-benefits-label': '合作伙伴福利：',
        'opportunity-2-benefits-text': '用户基础访问 + 技术集成',
        'opportunity-2-value-label': '战略价值：',
        'opportunity-2-value-text': '加速增长 + 市场渗透',
        
        // Opportunity 3: Advisory Board Positions
        'opportunity-3-title': '顾问委员会职位',
        'opportunity-3-highlight': '股权 + $AIC奖励',
        'opportunity-3-advisors-label': '目标顾问：',
        'opportunity-3-advisors-text': '加密资深人士、AI专家、Web3建设者',
        'opportunity-3-commitment-label': '承诺：',
        'opportunity-3-commitment-text': '每月2-4小时 + 战略指导',
        'opportunity-3-compensation-label': '薪酬：',
        'opportunity-3-compensation-text': '股权 + 早期$AIC分配',
        'opportunity-3-impact-label': '影响：',
        'opportunity-3-impact-text': '塑造平台方向 + 代币经济学设计',
        
        // Opportunity 4: Early User Program
        'opportunity-4-title': '早期用户计划',
        'opportunity-4-highlight': '创始成员身份',
        'opportunity-4-users-label': '目标用户：',
        'opportunity-4-users-text': '加密爱好者、交易员、教育者',
        'opportunity-4-launch-label': '启动：',
        'opportunity-4-launch-text': '2025年第四季度MVP访问 + 独家功能',
        'opportunity-4-benefits-label': '用户福利：',
        'opportunity-4-benefits-text': '增强$AIC赚取率 + 治理投票',
        'opportunity-4-value-label': '社区价值：',
        'opportunity-4-value-text': '塑造平台功能 + 早期财富创造',
        
        // Execution Timeline & Milestones
        'execution-header': '🚀 执行时间线与关键里程碑',
        'execution-subtitle': '从资金到规模化的详细路线图，包含具体交付成果',
        
        // Execution Stage 1: Immediate Next Steps
        'execution-stage-1-title': '立即行动步骤',
        'execution-stage-1-timeframe': '未来30-60天',
        'execution-stage-1-deliverable-1-label': '📋 尽职调查包：',
        'execution-stage-1-deliverable-1-text': '完整财务模型 + 技术架构',
        'execution-stage-1-deliverable-2-label': '🤝 投资者会议：',
        'execution-stage-1-deliverable-2-text': '一对一深度交流 + 问答环节',
        'execution-stage-1-deliverable-3-label': '💡 MVP演示：',
        'execution-stage-1-deliverable-3-text': '交互式原型 + 用户体验演练',
        'execution-stage-1-deliverable-4-label': '⚖️ 法律框架：',
        'execution-stage-1-deliverable-4-text': '投资条款 + $AIC代币经济学结构',
        
        // Execution Stage 2: Funding Deployment
        'execution-stage-2-title': '资金部署',
        'execution-stage-2-timeframe': '2025年第三、四季度',
        'execution-stage-2-deliverable-1-label': '💰 种子轮结束（50万美元）：',
        'execution-stage-2-deliverable-1-text': '资本部署于开发、营销、运营',
        'execution-stage-2-deliverable-2-label': '👥 团队扩张：',
        'execution-stage-2-deliverable-2-text': '招聘核心开发者 + 社区经理',
        'execution-stage-2-deliverable-3-label': '🏛️ 平台基础：',
        'execution-stage-2-deliverable-3-text': '知识中心MVP + 用户奖励基础设施',
        'execution-stage-2-deliverable-4-label': '💎 $AIC代币经济学启动：',
        'execution-stage-2-deliverable-4-text': '社区奖励系统 + 早期用户获取',
        
        // Execution Stage 3: Market Entry & Scaling
        'execution-stage-3-title': '市场进入与扩展',
        'execution-stage-3-timeframe': '2026年及以后',
        'execution-stage-3-deliverable-1-label': '📊 增长指标：',
        'execution-stage-3-deliverable-1-text': '1万用户，100万美元ARR，病毒式采用曲线',
        'execution-stage-3-deliverable-2-label': '🤖 AI交易平台：',
        'execution-stage-3-deliverable-2-text': '高级工具启动 + 愉悦付费模式',
        'execution-stage-3-deliverable-3-label': '💎 $AIC升值：',
        'execution-stage-3-deliverable-3-text': '代币销毁 + 稀缺性推动25-100倍回报',
        'execution-stage-3-deliverable-4-label': '🚪 退出机会：',
        'execution-stage-3-deliverable-4-text': '战略收购或IPO准备',
        
        // Immediate Action Items
        'action-header': '⚡ 立即行动项目',
        'action-subtitle': '如何推进并确保您在AICryptopia成长中的地位',
        
        // Action 1: For Investors
        'action-1-title': '对投资者',
        'action-1-priority': '高优先级',
        'action-1-step-1-label': '1. 表达兴趣：',
        'action-1-step-1-text': '邮件承诺以确保分配',
        'action-1-step-2-label': '2. 尽职调查：',
        'action-1-step-2-text': '审查详细财务模型 + 技术文档',
        'action-1-step-3-label': '3. 投资条款：',
        'action-1-step-3-text': '确定投资金额 + 早期$AIC分配',
        'action-1-step-4-label': '4. 法律程序：',
        'action-1-step-4-text': '执行投资协议 + 资金部署',
        
        // Action 2: For Strategic Partners
        'action-2-title': '对战略合作伙伴',
        'action-2-priority': '互利共赢',
        'action-2-step-1-label': '1. 合作讨论：',
        'action-2-step-1-text': '探索集成机会',
        'action-2-step-2-label': '2. 技术集成：',
        'action-2-step-2-text': 'API访问 + 跨平台功能',
        'action-2-step-3-label': '3. 用户基础协同：',
        'action-2-step-3-text': '交叉推广 + 共享增长策略',
        'action-2-step-4-label': '4. 收入分成：',
        'action-2-step-4-text': '互惠的货币化模式',
        
        // Action 3: For Advisors
        'action-3-title': '对顾问',
        'action-3-priority': '战略影响',
        'action-3-step-1-label': '1. 顾问角色：',
        'action-3-step-1-text': '定义专业领域 + 时间承诺',
        'action-3-step-2-label': '2. 战略输入：',
        'action-3-step-2-text': '平台开发 + 代币经济学设计',
        'action-3-step-3-label': '3. 网络接入：',
        'action-3-step-3-text': '介绍 + 合作伙伴关系促进',
        'action-3-step-4-label': '4. 股权参与：',
        'action-3-step-4-text': '顾问股份 + 早期$AIC分配',
        
        // Contact & Engagement Summary
        'contact-header': '📞 准备好一起建设未来吗？',
        'cta-title': '加入AI + Web3财富革命：',
        'cta-rating': '需要立即行动',
        'cta-urgency-label': '限时机会：',
        'cta-urgency-text': '50万美元种子轮2025年第三季度截止，早期$AIC分配',
        'cta-value-label': '巨大上涨潜力：',
        'cta-value-text': '用户拥有AI + 加密融合带来25-100倍回报',
        'cta-differentiation-label': '先发优势：',
        'cta-differentiation-text': '唯一用户优先AI+加密平台，具有已验证的代币经济学模式',
        'cta-contact-label': '下一步：',
        'cta-contact-text': '立即联系我们，确保您在世代财富创造中的地位',
        
        // Slide 14 Content
        'invitation-title': '您的世代财富邀请',
        'invitation-header': '🌟 欢迎加入AICryptopia运动',
        'invitation-subtitle': '您已被邀请加入AI + Web3财富创造革命',
        
        // Invitation Summary
        'invitation-summary-header': '💰 这份邀请所代表的意义',
        'invitation-summary-subtitle': '您参与下一次世代财富转移的独家机会',
        
        // Value Proposition 1: Market Opportunity
        'value-prop-1-title': '市场机会',
        'value-prop-1-highlight': '1万亿美元+市场扩张',
        'value-prop-1-timing-label': '完美时机：',
        'value-prop-1-timing-text': '比特币战略储备 + AI成熟度融合',
        'value-prop-1-position-label': '您的地位：',
        'value-prop-1-position-text': '早期接入用户拥有AI + 加密平台',
        
        // Value Proposition 2: Wealth Creation Potential
        'value-prop-2-title': '财富创造潜力',
        'value-prop-2-highlight': '25-100倍回报',
        'value-prop-2-target-label': '保守目标：',
        'value-prop-2-target-text': '3-5年内25-50倍回报',
        'value-prop-2-precedent-label': '先例：',
        'value-prop-2-precedent-text': '$TAO在2年内用类似模式实现1000倍',
        
        // Value Proposition 3: Competitive Advantage
        'value-prop-3-title': '竞争优势',
        'value-prop-3-highlight': '先发优势地位',
        'value-prop-3-unique-label': '独特地位：',
        'value-prop-3-unique-text': '唯一的用户拥有AI + 加密融合平台',
        'value-prop-3-gap-label': '市场空白：',
        'value-prop-3-gap-text': '高费用竞争对手 vs. 我们的用户优先方法',
        
        // Value Proposition 4: Execution Advantage
        'value-prop-4-title': '执行优势',
        'value-prop-4-highlight': '精益 + AI杠杆',
        'value-prop-4-efficiency-label': '资本效率：',
        'value-prop-4-efficiency-text': '50万美元实现其他公司需要200万美元+的效果',
        'value-prop-4-speed-label': '上市速度：',
        'value-prop-4-speed-text': '代币经济学优先方法降低采用风险',
        
        // Contact & Engagement
        'contact-final-header': '📞 接受您的邀请',
        'contact-final-subtitle': '准备好在AI + Web3财富革命中确保您的地位吗？',
        
        // Contact Method 1: Direct Investment
        'contact-method-1-title': '直接投资咨询',
        'contact-method-1-action': '发送邮件立即获得50万美元种子轮分配',
        
        // Contact Method 2: Platform Updates
        'contact-method-2-title': '平台与更新',
        'contact-method-2-action': '随时了解开发里程碑',
        
        // Contact Method 3: Community
        'contact-method-3-title': '社区与洞察',
        'contact-method-3-action': '加入我们不断壮大的财富建设者运动',
        
        // Final Call to Action
        'final-cta-title': '限时机会：',
        'final-cta-timeline-label': '种子轮截止：',
        'final-cta-timeline-text': '2025年第三季度 - 在为时已晚之前确保您的分配',
        'final-cta-exclusivity-label': '早期$AIC分配：',
        'final-cta-exclusivity-text': '创始投资者获得增强的代币分配 + 治理权',
        'final-cta-wealth-label': '世代财富等待着您：',
        'final-cta-wealth-text': '成为AI + Web3融合的一部分，创造下一波加密百万富翁',
        'final-cta-action-label': '您的下一步：',
        'final-cta-action-text': '立即联系我们，接受您的世代财富邀请 🚀💎',
        
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