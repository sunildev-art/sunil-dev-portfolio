import type { Project, Experience, SkillCategory, Service, Testimonial } from '../types';

export const personalInfo = {
  name: 'Sunil Bairwa',
  titles: [
    'React Native Developer',
    'React Developer',
    'Node.js Developer',
    'Full Stack Developer',
  ],
  description:
    'I am a passionate Full Stack Developer with over 4 years of professional experience building scalable, high-performance mobile and web applications. I specialize in React Native, React.js, Node.js, Express.js, TypeScript, JavaScript, Firebase, REST APIs, Blockchain integrations, and modern frontend technologies.',
  subDescription:
    'I have successfully delivered numerous production-ready Android and iOS applications that are currently being used by thousands of users.',
  blockchainExp:
    'I have also worked in the Blockchain industry for more than 2 years, developing secure crypto wallets, payment solutions, decentralized applications, and Web3-based products.',
  passion: 'My passion is creating fast, scalable, pixel-perfect digital experiences.',
  email: 'devsunil72@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/sunil-bairwa-2154a7258?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagram: 'https://instagram.com',
  phone: '+91 8005810065',
  location: 'Jaipur, Rajasthan, India',
};

export const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Apps Published' },
  { value: 2, suffix: '+', label: 'Years Blockchain Exp' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', iconName: 'FaReact' },
      { name: 'React Native', iconName: 'TbBrandReactNative' },
      { name: 'TypeScript', iconName: 'SiTypescript' },
      { name: 'JavaScript', iconName: 'FaJsSquare' },
      { name: 'Redux', iconName: 'SiRedux' },
      { name: 'Context API', iconName: 'FaCode' },
      { name: 'HTML5', iconName: 'FaHtml5' },
      { name: 'CSS3', iconName: 'FaCss3Alt' },
      { name: 'Tailwind CSS', iconName: 'SiTailwindcss' },
      { name: 'Material UI', iconName: 'SiMaterialui' },
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'Node.js', iconName: 'FaNodeJs' },
      { name: 'Express', iconName: 'SiExpress' },
      { name: 'MongoDB', iconName: 'SiMongodb' },
      { name: 'Firebase', iconName: 'SiFirebase' },
      { name: 'REST APIs', iconName: 'AiOutlineApi' },
      { name: 'AWS Basics', iconName: 'FaAws' },
      { name: 'GitHub Actions', iconName: 'SiGithubactions' },
    ],
  },
  {
    category: 'Mobile Dev',
    items: [
      { name: 'Android Studio', iconName: 'FaAndroid' },
      { name: 'iOS/Xcode', iconName: 'FaApple' },
      { name: 'Push Notifications', iconName: 'FaBell' },
      { name: 'Google Maps API', iconName: 'FaMapMarkedAlt' },
      { name: 'Deep Linking', iconName: 'FaLink' },
      { name: 'Performance Optimization', iconName: 'MdOutlineSpeed' },
    ],
  },
  {
    category: 'Blockchain & Web3',
    items: [
      { name: 'Web3.js / Ether.js', iconName: 'FaEthereum' },
      { name: 'Crypto Wallet Integration', iconName: 'FaWallet' },
      { name: 'Wallet Connect', iconName: 'SiWalletconnect' },
      { name: 'Smart Contracts', iconName: 'FaFileContract' },
      { name: 'MetaMask', iconName: 'SiMetamask' },
    ],
  },
  {
    category: 'Animations & UI',
    items: [
      { name: 'Framer Motion', iconName: 'SiFramer' },
      { name: 'GSAP', iconName: 'SiGreenock' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'React Native Developer',
    company: 'Dev Technosys',
    period: 'Current Company',
    description: 'Currently building and maintaining scalable production React Native applications across media, dating, and service platforms.',
    points: [
      'Recently launched Tap In Shorts, ZimCupid, and Fewos, a Flutter-based application.',
      'Develop scalable React Native applications with REST APIs, authentication, state management, and push notifications.',
      'Handle performance optimization, bug fixing, production deployments, and ongoing app maintenance.',
      'Collaborate with cross-functional teams to deliver polished, stable mobile experiences.',
    ],
  },
  {
    id: 'exp2',
    role: 'React Native Developer & React Developer (Team Lead)',
    company: 'Think Technology',
    period: 'Team Lead Role',
    description: 'Led a small development team while delivering React Native apps, responsive React websites, blockchain products, and wallet applications.',
    points: [
      'Led a small team and participated in architecture, technical decisions, and code quality improvements.',
      'Built React Native mobile apps, responsive React websites, and Blockchain-based applications.',
      'Developed Do Coin Wallet, PEAFX Wallet, WEPE Wallet, and the Pray Humanity NGO application.',
      'Worked closely with designers and backend developers while optimizing performance and maintainability.',
    ],
  },
  {
    id: 'exp3',
    role: 'React Native Developer',
    company: 'Appic Software Solution',
    period: 'Career Start',
    description: 'Started my software development journey here, building cross-platform mobile applications with React Native.',
    points: [
      'Developed cross-platform mobile applications using React Native and mobile-first UI patterns.',
      'Integrated REST APIs, Firebase services, authentication flows, and notifications.',
      'Fixed bugs, improved application performance, and strengthened production stability.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Tap In Shorts',
    description: 'A modern short-series vertical streaming platform where users can browse, follow, and watch complete episodic content on the go.',
    tags: ['React Native', 'Redux Toolkit', 'REST API', 'Firebase', 'Android', 'iOS'],
    features: [
      'Optimized video player with pre-fetching & instant playback',
      'Episode-based vertical scrolling series flow',
      'Watch history & favorites synchronization',
      'Interactive comment section & real-time likes',
      'In-app coin/token billing for premium chapters',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://play.google.com',
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    category: 'mobile',
  },
  {
    id: 'proj2',
    title: 'Social Dating Platform',
    description: 'A social networking and dating application that allows users to securely connect, chat in real-time, matching, and share media worldwide.',
    tags: ['React Native', 'Node.js', 'Firebase', 'Socket.IO', 'Redux', 'Android', 'iOS'],
    features: [
      'Swipe matching algorithm & interactive deck animations',
      'Real-time chat with text, emojis, and media sharing',
      'Push notification alerts for matches and direct messages',
      'Secure geo-location calculation & filter settings',
      'Fully responsive layouts for smaller tablets and phones',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://dating.example.com',
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    category: 'mobile',
  },
  {
    id: 'proj3',
    title: 'DoCoin Wallet',
    description: 'A highly secure blockchain-based cryptocurrency wallet enabling users to store, manage, send, and receive decentralized assets.',
    tags: ['React Native', 'Blockchain', 'Web3', 'Node.js', 'REST API', 'Android', 'iOS'],
    features: [
      'Seed phrase / private key local secure encryption storage',
      'Multi-chain token balance fetching and transaction logs',
      'Gas fee price estimations & instant transfer execution',
      'QR Code scanner for swift wallet address parsing',
      'Financial performance metrics & live price updates',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://docoin.example.com',
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    category: 'blockchain',
  },
];

export const services: Service[] = [
  {
    id: 'srv1',
    title: 'Mobile App Development',
    description: 'End-to-end design, development, and publishing of high-performance Android & iOS apps using React Native.',
    iconName: 'Smartphone',
  },
  {
    id: 'srv2',
    title: 'React Native Architecture',
    description: 'Creating robust, modular, and reusable frontend infrastructures for scalable enterprise mobile solutions.',
    iconName: 'Cpu',
  },
  {
    id: 'srv3',
    title: 'Frontend Web Development',
    description: 'Building premium, high-speed websites and interactive user interfaces using React.js, Tailwind CSS, and Framer Motion.',
    iconName: 'Layout',
  },
  {
    id: 'srv4',
    title: 'Backend Engineering',
    description: 'Developing secured, fast, and scalable server architectures, custom REST and GraphQL APIs using Node.js & Express.',
    iconName: 'Database',
  },
  {
    id: 'srv5',
    title: 'Web3 & Blockchain',
    description: 'Integrating secure crypto wallets (MetaMask, WalletConnect) and interacting with Smart Contracts on EVM blockchains.',
    iconName: 'Layers',
  },
  {
    id: 'srv6',
    title: 'App Store Deployments & CI/CD',
    description: 'Managing store submission processes, resolving review guidelines, and automating release cycles using fastlane & GitHub Actions.',
    iconName: 'CloudLightning',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'Veloce Stream Inc.',
    content: 'Sunil delivered the vertical streaming application (Tap In Shorts) under a tight deadline. The player optimization is flawless, with instant load times. Absolute professional!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'DoCoin Network',
    content: 'Working with Sunil was a game-changer for our Web3 product. His understanding of local encryption, wallet management, and blockchain APIs kept our security audit spotless.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't3',
    name: 'Emily Zhao',
    role: 'VP of Technology',
    company: 'Synapse Connect',
    content: 'Sunil is an outstanding React Native and full-stack developer. His clean folder structuring, TypeScript implementation, and team communication made collaboration effortless.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
];
