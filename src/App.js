import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  TrendingUp, 
  Eye, 
  CheckCircle, 
  DollarSign,
  BarChart3,
  PieChart,
  ArrowRight,
  Menu,
  X,
  Star,
  Globe,
  Lock,
  Zap,
  Calendar,
  Award,
  Target,
  Bell,
  Share2,
  Download,
  Filter,
  Search,
  MapPin,
  Phone,
  Mail,
  Camera,
  Video,
  FileText,
  Settings,
  User,
  CreditCard,
  Repeat,
  AlertTriangle,
  Timer,
  Wallet,
  Building,
  Handshake,
  BookOpen,
  Activity,
  TrendingDown,
  MessageCircle,
  ThumbsUp,
  Gift,
  Bookmark,
  Clock,
  Map,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  Languages,
  Accessibility,
  Moon,
  Sun,
  HelpCircle,
  ExternalLink,
  Copy,
  QrCode,
  Smartphone,
  Laptop,
  Tablet
} from 'lucide-react';

const CharityApp = () => {
  // State Management
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState('education');
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi');
  const [donationHistory, setDonationHistory] = useState([]);
  const [impactStories, setImpactStories] = useState([]);
  const [emergencyAlerts, setEmergencyAlerts] = useState([]);
  const [userBadges, setUserBadges] = useState([]);
  const [donationGoals, setDonationGoals] = useState([]);
  const [volunteerHours, setVolunteerHours] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [socialImpactScore, setSocialImpactScore] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({});
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [exchangeRates, setExchangeRates] = useState({});
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [accessibilityMode, setAccessibilityMode] = useState(false);
  const [showImpactAnimation, setShowImpactAnimation] = useState(false);
  const [realTimeUpdates, setRealTimeUpdates] = useState(true);
  const [donationStreak, setDonationStreak] = useState(0);
  const [leaderboardPosition, setLeaderboardPosition] = useState(null);
  const [corporateMode, setCorporateMode] = useState(false);
  const [csrBudget, setCsrBudget] = useState(0);
  const [complianceStatus, setComplianceStatus] = useState('verified');
  const [blockchainStatus, setBlockchainStatus] = useState('synced');
  const [fraudAlerts, setFraudAlerts] = useState([]);
  const [taxSavings, setTaxSavings] = useState(0);
  const [donationSchedule, setDonationSchedule] = useState([]);
  const [impactMetrics, setImpactMetrics] = useState({});
  const [communityRating, setCommunityRating] = useState(4.8);
  const [trustScore, setTrustScore] = useState(98);
  const [mediaPlaylist, setMediaPlaylist] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaPlaying, setIsMediaPlaying] = useState(false);
  const [donationInsights, setDonationInsights] = useState({});
  const [predictiveAnalytics, setPredictiveAnalytics] = useState({});
  const [socialShares, setSocialShares] = useState(0);
  const [referralCount, setReferralCount] = useState(0);
  const [gamificationPoints, setGamificationPoints] = useState(0);
  const [achievementProgress, setAchievementProgress] = useState({});
  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: '🔗', fees: '0%', processingTime: 'Instant' },
    { id: 'credit_card', name: 'Credit Card', icon: '💳', fees: '2%', processingTime: 'Instant' },
    { id: 'debit_card', name: 'Debit Card', icon: '🏧', fees: '1.5%', processingTime: 'Instant' },
    { id: 'net_banking', name: 'Net Banking', icon: '🏦', fees: '0.5%', processingTime: '1-2 days' },
    { id: 'wallet', name: 'Wallet', icon: '👛', fees: '0%', processingTime: 'Instant' }
  ];
  const achievements = [
    { name: 'First Donation', icon: '🎉', unlocked: true, date: '2024-01-01' },
    { name: '1000 Points', icon: '🏅', unlocked: false, progress: 75 },
    { name: 'Volunteer', icon: '🤝', unlocked: true, date: '2024-02-15' },
    { name: 'Top Donor', icon: '👑', unlocked: false, progress: 40 }
  ];

  // Language Support
  const languages = {
    en: {
      title: 'TransparentGive',
      subtitle: 'Blockchain-Powered Transparent Charity',
      donate: 'Donate Now',
      track: 'Track Impact',
      analytics: 'Analytics',
      profile: 'Profile',
      emergency: 'Emergency Relief',
      corporate: 'Corporate CSR',
      volunteer: 'Volunteer',
      stories: 'Impact Stories'
    },
    hi: {
      title: 'पारदर्शी दान',
      subtitle: 'ब्लॉकचेन-संचालित पारदर्शी दान',
      donate: 'अभी दान करें',
      track: 'प्रभाव ट्रैक करें',
      analytics: 'विश्लेषण',
      profile: 'प्रोफ़ाइल',
      emergency: 'आपातकालीन राहत',
      corporate: 'कॉर्पोरेट सीएसआर',
      volunteer: 'स्वयंसेवक',
      stories: 'प्रभाव कहानियां'
    }
  };

  // Mock Data
  const stats = {
    totalDonations: '₹2,50,00,000',
    activeDonors: '15,847',
    projectsFunded: '342',
    transparencyScore: '98.5%',
    livesImpacted: '1,25,000',
    carbonSaved: '50,000 kg',
    volunteersActive: '5,200',
    emergencyFundsDeployed: '₹45,00,000'
  };

  const causes = [
    { 
      id: 'education', 
      name: 'Education', 
      raised: '₹85,00,000', 
      goal: '₹1,00,00,000', 
      projects: 45,
      urgency: 'medium',
      category: 'basic-needs',
      trustScore: 96,
      impactStories: 12,
      volunteers: 200,
      beneficiaries: 5000,
      location: 'Pan India',
      lastUpdate: '2 hours ago',
      trending: true,
      verified: true,
      emergency: false,
      sustainabilityScore: 85,
      transparency: 98,
      description: 'Providing quality education to underprivileged children across India',
      gallery: ['image1.jpg', 'image2.jpg', 'video1.mp4'],
      milestones: [
        { title: '100 Schools Built', date: '2024-01-15', completed: true },
        { title: '10,000 Students Enrolled', date: '2024-06-01', completed: false }
      ]
    },
    { 
      id: 'healthcare', 
      name: 'Healthcare', 
      raised: '₹92,00,000', 
      goal: '₹1,20,00,000', 
      projects: 38,
      urgency: 'high',
      category: 'emergency',
      trustScore: 94,
      impactStories: 18,
      volunteers: 350,
      beneficiaries: 8000,
      location: 'Rural Areas',
      lastUpdate: '30 mins ago',
      trending: true,
      verified: true,
      emergency: true,
      sustainabilityScore: 90,
      transparency: 95,
      description: 'Providing essential healthcare services to remote communities',
      gallery: ['health1.jpg', 'health2.jpg', 'health_video.mp4'],
      milestones: [
        { title: '50 Mobile Clinics Deployed', date: '2024-03-20', completed: true },
        { title: '100,000 Patients Treated', date: '2024-08-15', completed: false }
      ]
    },
    { 
      id: 'environment', 
      name: 'Environment', 
      raised: '₹43,00,000', 
      goal: '₹60,00,000', 
      projects: 22,
      urgency: 'critical',
      category: 'environment',
      trustScore: 97,
      impactStories: 8,
      volunteers: 120,
      beneficiaries: 50000,
      location: 'Coastal Regions',
      lastUpdate: '1 hour ago',
      trending: false,
      verified: true,
      emergency: false,
      sustainabilityScore: 95,
      transparency: 99,
      description: 'Protecting and restoring natural ecosystems for future generations',
      gallery: ['env1.jpg', 'env2.jpg', 'tree_planting.mp4'],
      milestones: [
        { title: '1 Million Trees Planted', date: '2024-02-10', completed: true },
        { title: 'Clean 100 Water Bodies', date: '2024-09-01', completed: false }
      ]
    },
    { 
      id: 'poverty', 
      name: 'Poverty Relief', 
      raised: '₹67,00,000', 
      goal: '₹80,00,000', 
      projects: 28,
      urgency: 'high',
      category: 'basic-needs',
      trustScore: 93,
      impactStories: 15,
      volunteers: 180,
      beneficiaries: 12000,
      location: 'Urban Slums',
      lastUpdate: '45 mins ago',
      trending: true,
      verified: true,
      emergency: false,
      sustainabilityScore: 88,
      transparency: 92,
      description: 'Empowering families to break the cycle of poverty through skill development',
      gallery: ['poverty1.jpg', 'poverty2.jpg', 'skill_training.mp4'],
      milestones: [
        { title: '5,000 Families Supported', date: '2024-01-30', completed: true },
        { title: '10,000 Jobs Created', date: '2024-07-15', completed: false }
      ]
    }
  ];

  const recentTransactions = [
    { 
      id: 1, 
      donor: 'Anonymous', 
      amount: '₹5,000', 
      cause: 'Education', 
      time: '2 mins ago', 
      txHash: '0x1a2b3c4d5e6f7890',
      status: 'confirmed',
      blockNumber: 12345678,
      gasUsed: '21000',
      type: 'one-time',
      impact: 'Educated 2 children for a month',
      location: 'Mumbai, Maharashtra'
    },
    { 
      id: 2, 
      donor: 'Rahul S.', 
      amount: '₹2,500', 
      cause: 'Healthcare', 
      time: '15 mins ago', 
      txHash: '0x4d5e6f7890123456',
      status: 'pending',
      blockNumber: 12345677,
      gasUsed: '21000',
      type: 'recurring',
      impact: 'Provided medical care for 1 family',
      location: 'Delhi, NCR'
    },
    { 
      id: 3, 
      donor: 'Priya M.', 
      amount: '₹10,000', 
      cause: 'Environment', 
      time: '32 mins ago', 
      txHash: '0x7g8h9i0123456789',
      status: 'confirmed',
      blockNumber: 12345676,
      gasUsed: '21000',
      type: 'emergency',
      impact: 'Planted 50 trees in coastal area',
      location: 'Chennai, Tamil Nadu'
    }
  ];

  // Enhanced Styles with Theme Support
  const getStyles = () => {
    const baseColors = isDarkMode ? {
      primary: '#e74c3c',
      secondary: '#3498db',
      success: '#27ae60',
      warning: '#f39c12',
      danger: '#e74c3c',
      background: '#1a202c',
      surface: '#2d3748',
      text: '#f7fafc',
      textMuted: '#a0aec0',
      border: '#4a5568',
      overlay: 'rgba(0,0,0,0.8)'
    } : {
      primary: '#e74c3c',
      secondary: '#3498db',
      success: '#27ae60',
      warning: '#f39c12',
      danger: '#e74c3c',
      background: '#f8fafc',
      surface: '#ffffff',
      text: '#1a202c',
      textMuted: '#64748b',
      border: '#e2e8f0',
      overlay: 'rgba(0,0,0,0.5)'
    };

    return {
      app: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        minHeight: '100vh',
        backgroundColor: baseColors.background,
        color: baseColors.text,
        transition: 'all 0.3s ease',
        fontSize: accessibilityMode ? '18px' : '16px'
      },
      nav: {
        backgroundColor: baseColors.surface,
        boxShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: `1px solid ${baseColors.border}`
      },
      navContainer: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      },
      logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer'
      },
      logoText: {
        fontSize: '28px',
        fontWeight: '800',
        color: baseColors.primary,
        background: `linear-gradient(135deg, ${baseColors.primary}, ${baseColors.secondary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },
      navLinks: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      },
      navLink: {
        background: 'none',
        border: 'none',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '600',
        color: baseColors.textMuted,
        cursor: 'pointer',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      },
      navLinkActive: {
        color: baseColors.primary,
        backgroundColor: isDarkMode ? 'rgba(231, 76, 60, 0.1)' : '#fef2f2',
        transform: 'translateY(-2px)',
        boxShadow: `0 4px 12px rgba(231, 76, 60, 0.2)`
      },
      navActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      },
      iconButton: {
        background: 'none',
        border: 'none',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        color: baseColors.textMuted,
        transition: 'all 0.3s ease',
        position: 'relative'
      },
      badge: {
        position: 'absolute',
        top: '2px',
        right: '2px',
        backgroundColor: baseColors.danger,
        color: 'white',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: '600'
      },
      emergencyAlert: {
        backgroundColor: baseColors.danger,
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        animation: 'pulse 2s infinite'
      },
      page: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: 'calc(100vh - 80px)'
      },
      hero: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '80px',
        alignItems: 'center',
        marginBottom: '100px',
        padding: '60px 0'
      },
      heroContent: {
        maxWidth: '600px'
      },
      heroTitle: {
        fontSize: '56px',
        fontWeight: '900',
        lineHeight: '1.1',
        color: baseColors.text,
        marginBottom: '24px',
        background: `linear-gradient(135deg, ${baseColors.text}, ${baseColors.primary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      },
      heroSubtitle: {
        fontSize: '20px',
        color: baseColors.textMuted,
        lineHeight: '1.6',
        marginBottom: '40px',
        fontWeight: '400'
      },
      heroButtons: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      },
      primaryBtn: {
        backgroundColor: baseColors.primary,
        color: 'white',
        border: 'none',
        padding: '18px 36px',
        fontSize: '18px',
        fontWeight: '700',
        borderRadius: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        transition: 'all 0.3s ease',
        boxShadow: `0 8px 25px rgba(231, 76, 60, 0.3)`,
        transform: 'translateY(0)'
      },
      secondaryBtn: {
        backgroundColor: 'transparent',
        color: baseColors.primary,
        border: `2px solid ${baseColors.primary}`,
        padding: '18px 36px',
        fontSize: '18px',
        fontWeight: '700',
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      },
      heroStats: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px'
      },
      statCard: {
        backgroundColor: baseColors.surface,
        padding: '32px 24px',
        borderRadius: '20px',
        boxShadow: isDarkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        border: `1px solid ${baseColors.border}`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      },
      statNumber: {
        fontSize: '32px',
        fontWeight: '800',
        color: baseColors.text,
        margin: '0 0 8px 0'
      },
      statLabel: {
        fontSize: '14px',
        color: baseColors.textMuted,
        margin: 0,
        fontWeight: '500'
      },
      quickActions: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '60px'
      },
      quickAction: {
        backgroundColor: baseColors.surface,
        padding: '24px',
        borderRadius: '16px',
        border: `1px solid ${baseColors.border}`,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.08)'
      },
      sectionTitle: {
        fontSize: '42px',
        fontWeight: '800',
        textAlign: 'center',
        color: baseColors.text,
        marginBottom: '60px',
        position: 'relative'
      },
      featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginBottom: '80px'
      },
      featureCard: {
        backgroundColor: baseColors.surface,
        padding: '40px 32px',
        borderRadius: '20px',
        boxShadow: isDarkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        border: `1px solid ${baseColors.border}`,
        position: 'relative',
        overflow: 'hidden'
      },
      emergencySection: {
        backgroundColor: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '24px',
        marginBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      },
      emergencyCard: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '32px',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.2)',
        marginBottom: '24px'
      },
      donationForm: {
        backgroundColor: baseColors.surface,
        padding: '48px',
        borderRadius: '24px',
        boxShadow: isDarkMode ? '0 16px 64px rgba(0,0,0,0.4)' : '0 16px 64px rgba(0,0,0,0.1)',
        border: `1px solid ${baseColors.border}`,
        position: 'sticky',
        top: '100px'
      },
      formGroup: {
        marginBottom: '32px'
      },
      label: {
        display: 'block',
        fontSize: '16px',
        fontWeight: '600',
        color: baseColors.text,
        marginBottom: '10px'
      },
      input: {
        width: '100%',
        padding: '16px 20px',
        border: `2px solid ${baseColors.border}`,
        borderRadius: '12px',
        fontSize: '16px',
        backgroundColor: baseColors.background,
        color: baseColors.text,
        transition: 'all 0.3s ease',
        boxSizing: 'border-box'
      },
      select: {
        width: '100%',
        padding: '16px 20px',
        border: `2px solid ${baseColors.border}`,
        borderRadius: '12px',
        fontSize: '16px',
        backgroundColor: baseColors.background,
        color: baseColors.text,
        cursor: 'pointer'
      },
      amountGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        marginBottom: '24px'
      },
      amountButton: {
        padding: '16px 12px',
        border: `2px solid ${baseColors.border}`,
        borderRadius: '12px',
        backgroundColor: baseColors.background,
        color: baseColors.text,
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        textAlign: 'center'
      },
      amountButtonActive: {
        borderColor: baseColors.primary,
        backgroundColor: baseColors.primary,
        color: 'white',
        transform: 'scale(1.05)'
      },
      donateBtn: {
        width: '100%',
        backgroundColor: baseColors.primary,
        color: 'white',
        border: 'none',
        padding: '20px',
        fontSize: '20px',
        fontWeight: '700',
        borderRadius: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '32px',
        boxShadow: `0 8px 25px rgba(231, 76, 60, 0.3)`,
        transition: 'all 0.3s ease'
      },
      paymentMethods: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '12px',
        marginTop: '24px'
      },
      paymentMethod: {
        padding: '12px 8px',
        border: `2px solid ${baseColors.border}`,
        borderRadius: '12px',
        backgroundColor: baseColors.background,
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.3s ease'
      },
      paymentMethodActive: {
        borderColor: baseColors.primary,
        backgroundColor: baseColors.primary,
        color: 'white'
      },
      causeCard: {
        backgroundColor: baseColors.surface,
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: isDarkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)',
        border: `1px solid ${baseColors.border}`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative'
      },
      causeHeader: {
        padding: '32px',
        position: 'relative'
      },
      causeName: {
        fontSize: '28px',
        fontWeight: '800',
        color: baseColors.text,
        marginBottom: '12px'
      },
      causeDescription: {
        fontSize: '16px',
        color: baseColors.textMuted,
        lineHeight: '1.6',
        marginBottom: '24px'
      },
      progressContainer: {
        marginBottom: '20px'
      },
      progressBar: {
        width: '100%',
        height: '12px',
        backgroundColor: baseColors.border,
        borderRadius: '6px',
        overflow: 'hidden',
        marginBottom: '12px'
      },
      progressFill: {
        height: '100%',
        backgroundColor: baseColors.primary,
        borderRadius: '6px',
        transition: 'width 0.8s ease'
      },
      progressStats: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
        fontWeight: '600'
      },
      causeFooter: {
        padding: '24px 32px',
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      transactionCard: {
        backgroundColor: baseColors.surface,
        padding: '24px',
        borderRadius: '16px',
        border: `1px solid ${baseColors.border}`,
        marginBottom: '16px',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      },
      transactionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      },
      transactionAmount: {
        fontSize: '20px',
        fontWeight: '700',
        color: baseColors.primary
      },
      transactionStatus: {
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
        textTransform: 'uppercase'
      },
      statusConfirmed: {
        backgroundColor: 'rgba(39, 174, 96, 0.1)',
        color: baseColors.success
      },
      statusPending: {
        backgroundColor: 'rgba(243, 156, 18, 0.1)',
        color: baseColors.warning
      },
      achievementCard: {
        backgroundColor: baseColors.surface,
        padding: '20px',
        borderRadius: '16px',
        border: `1px solid ${baseColors.border}`,
        textAlign: 'center',
        transition: 'all 0.3s ease',
        opacity: 0.7
      },
      achievementUnlocked: {
        opacity: 1,
        borderColor: baseColors.primary,
        backgroundColor: isDarkMode ? 'rgba(231, 76, 60, 0.1)' : '#fef2f2'
      },
      modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: baseColors.overlay,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      },
      modalContent: {
        backgroundColor: baseColors.surface,
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        position: 'relative'
      },
      closeButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: baseColors.textMuted,
        padding: '8px'
      },
      filterContainer: {
        backgroundColor: baseColors.surface,
        padding: '32px',
        borderRadius: '20px',
        marginBottom: '40px',
        border: `1px solid ${baseColors.border}`
      },
      filterGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      },
      searchInput: {
        width: '100%',
        padding: '16px 20px 16px 50px',
        border: `2px solid ${baseColors.border}`,
        borderRadius: '12px',
        fontSize: '16px',
        backgroundColor: baseColors.background,
        color: baseColors.text,
        marginBottom: '20px'
      },
      emergencyBanner: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
        animation: 'pulse 2s infinite'
      },
      impactCard: {
        backgroundColor: baseColors.surface,
        padding: '32px',
        borderRadius: '20px',
        border: `1px solid ${baseColors.border}`,
        textAlign: 'center',
        marginBottom: '24px'
      },
      impactNumber: {
        fontSize: '48px',
        fontWeight: '900',
        color: baseColors.primary,
        marginBottom: '8px'
      },
      impactLabel: {
        fontSize: '16px',
        color: baseColors.textMuted,
        fontWeight: '600'
      },
      chartContainer: {
        backgroundColor: baseColors.surface,
        padding: '32px',
        borderRadius: '20px',
        border: `1px solid ${baseColors.border}`,
        marginBottom: '32px'
      },
      donorCard: {
        backgroundColor: baseColors.surface,
        padding: '24px',
        borderRadius: '16px',
        border: `1px solid ${baseColors.border}`,
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '16px'
      },
      avatar: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: baseColors.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: '700'
      },
      donorInfo: {
        flex: 1
      },
      donorName: {
        fontSize: '18px',
        fontWeight: '700',
        color: baseColors.text,
        marginBottom: '4px'
      },
      donorStats: {
        fontSize: '14px',
        color: baseColors.textMuted
      },
      donorAmount: {
        fontSize: '20px',
        fontWeight: '700',
        color: baseColors.primary
      },
      loadingSpinner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        fontSize: '18px',
        color: baseColors.textMuted
      },
      footer: {
        backgroundColor: baseColors.surface,
        padding: '60px 20px 40px',
        marginTop: '100px',
        borderTop: `1px solid ${baseColors.border}`
      },
      footerContent: {
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px'
      },
      footerSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      },
      footerTitle: {
        fontSize: '18px',
        fontWeight: '700',
        color: baseColors.text,
        marginBottom: '8px'
      },
      footerLink: {
        color: baseColors.textMuted,
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.3s ease'
      },
      copyrightText: {
        textAlign: 'center',
        color: baseColors.textMuted,
        fontSize: '14px',
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: `1px solid ${baseColors.border}`
      }
    };
  };

  const styles = getStyles();

  // Effects
  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (realTimeUpdates) {
        // Update donation amounts randomly
        const updatedCauses = causes.map(cause => ({
          ...cause,
          raised: `₹${(parseInt(cause.raised.replace(/[₹,]/g, '')) + Math.floor(Math.random() * 10000)).toLocaleString()}`
        }));
        // In real app, you would update state here
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [realTimeUpdates]);

  // Component Functions
  const handleDonation = (amount, causeId) => {
    if (!amount || amount <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }

    const donation = {
      id: Date.now(),
      amount: `₹${amount.toLocaleString()}`,
      cause: causes.find(c => c.id === causeId)?.name || selectedCause,
      timestamp: new Date().toISOString(),
      frequency: donationFrequency,
      paymentMethod: selectedPaymentMethod,
      status: 'processing'
    };

    setDonationHistory([donation, ...donationHistory]);
    setGamificationPoints(prev => prev + Math.floor(amount / 100));
    setDonationStreak(prev => prev + 1);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      donation.status = 'confirmed';
      donation.txHash = `0x${Math.random().toString(16).substring(2, 18)}`;
      alert(`Donation successful! Transaction: ${donation.txHash}`);
    }, 3000);

    setDonationAmount('');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setSelectedLanguage(selectedLanguage === 'en' ? 'hi' : 'en');
  };

  // Render Components
  const renderNavigation = () => {
    const currentLang = languages[selectedLanguage];
    
    return (
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo} onClick={() => setActiveTab('home')}>
            <Heart size={32} color="#e74c3c" />
            <span style={styles.logoText}>
              {currentLang.title}
            </span>
          </div>

          <div style={styles.navLinks}>
            {['home', 'donate', 'track', 'analytics', 'profile'].map(tab => (
              <button
                key={tab}
                style={{
                  ...styles.navLink,
                  ...(activeTab === tab ? styles.navLinkActive : {})
                }}
                onClick={() => setActiveTab(tab)}
              >
                {getCurrentIcon(tab)}
                {currentLang[tab] || tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div style={styles.navActions}>
            <button style={styles.iconButton} onClick={toggleTheme}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button style={styles.iconButton} onClick={toggleLanguage}>
              <Globe size={20} />
            </button>

            <button style={styles.iconButton}>
              <Bell size={20} />
              {notifications.length > 0 && (
                <span style={styles.badge}>{notifications.length}</span>
              )}
            </button>

            <button style={styles.iconButton}>
              <User size={20} />
            </button>
          </div>
        </div>
      </nav>
    );
  };

  const getCurrentIcon = (tab) => {
    const icons = {
      home: <Heart size={18} />,
      donate: <DollarSign size={18} />,
      track: <Eye size={18} />,
      analytics: <BarChart3 size={18} />,
      profile: <User size={18} />
    };
    return icons[tab];
  };

  const renderHomePage = () => (
    <div style={styles.page}>
      {/* Emergency Banner */}
      {emergencyAlerts.length > 0 && (
        <div style={styles.emergencyBanner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertTriangle size={24} />
            <span>Emergency: Flood Relief needed in Kerala - ₹50,00,000 required</span>
          </div>
          <button 
            style={{ 
              background: 'white', 
              color: '#e74c3c', 
              border: 'none', 
              padding: '8px 16px', 
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedCause('emergency')}
          >
            Donate Now
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Transform Lives with<br />Transparent Giving
          </h1>
          <p style={styles.heroSubtitle}>
            Experience the future of charitable giving with blockchain-powered transparency, 
            real-time impact tracking, and verified fund allocation.
          </p>
          <div style={styles.heroButtons}>
            <button 
              style={styles.primaryBtn}
              onClick={() => setActiveTab('donate')}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 35px rgba(231, 76, 60, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(231, 76, 60, 0.3)';
              }}
            >
              <Heart size={20} />
              Start Donating
            </button>
            <button 
              style={styles.secondaryBtn}
              onClick={() => setActiveTab('track')}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#e74c3c';
              }}
            >
              <Eye size={20} />
              Track Impact
            </button>
          </div>
        </div>

        <div style={styles.heroStats}>
          {Object.entries(stats).slice(0, 4).map(([key, value], index) => (
            <div 
              key={key}
              style={{
                ...styles.statCard,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = isDarkMode ? '0 16px 48px rgba(0,0,0,0.4)' : '0 16px 48px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = isDarkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)';
              }}
            >
              <div>
                <h3 style={styles.statNumber}>{value}</h3>
                <p style={styles.statLabel}>{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>
              </div>
              <div style={{ fontSize: '32px' }}>
                {getStatIcon(key)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.quickActions}>
        {[
          { icon: <Zap size={32} />, title: 'Emergency Relief', desc: 'Immediate disaster response' },
          { icon: <Building size={32} />, title: 'Corporate CSR', desc: 'Business social responsibility' },
          { icon: <Users size={32} />, title: 'Volunteer', desc: 'Contribute your time' },
          { icon: <Award size={32} />, title: 'Impact Stories', desc: 'See real change happen' }
        ].map((action, index) => (
          <div 
            key={index}
            style={styles.quickAction}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = isDarkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = isDarkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{ color: '#e74c3c', marginBottom: '16px' }}>
              {action.icon}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              {action.title}
            </h3>
            <p style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
              {action.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Featured Causes */}
      <section>
        <h2 style={styles.sectionTitle}>Featured Causes</h2>
        <div style={styles.featuresGrid}>
          {causes.map((cause, index) => (
            <div 
              key={cause.id}
              style={{
                ...styles.causeCard,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = isDarkMode ? '0 16px 48px rgba(0,0,0,0.4)' : '0 16px 48px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = isDarkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.1)';
              }}
              onClick={() => {
                setSelectedCause(cause.id);
                setActiveTab('donate');
              }}
            >
              <div style={styles.causeHeader}>
                {cause.trending && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    <TrendingUp size={12} style={{ marginRight: '4px', display: 'inline' }} />
                    Trending
                  </div>
                )}
                
                <h3 style={styles.causeName}>{cause.name}</h3>
                <p style={styles.causeDescription}>{cause.description}</p>
                
                <div style={styles.progressContainer}>
                  <div style={styles.progressBar}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${(parseInt(cause.raised.replace(/[₹,]/g, '')) / parseInt(cause.goal.replace(/[₹,]/g, ''))) * 100}%`
                      }}
                    />
                  </div>
                  <div style={styles.progressStats}>
                    <span>{cause.raised} raised</span>
                    <span>{cause.goal} goal</span>
                  </div>
                </div>
              </div>

              <div style={styles.causeFooter}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={16} />
                    <span style={{ fontSize: '14px' }}>{cause.projects} projects</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Shield size={16} />
                    <span style={{ fontSize: '14px' }}>{cause.trustScore}% trust</span>
                  </div>
                </div>
                <ArrowRight size={20} color="#e74c3c" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Transactions */}
      <section>
        <h2 style={styles.sectionTitle}>Recent Donations</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} style={styles.transactionCard}>
              <div style={styles.transactionHeader}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '600', fontSize: '16px' }}>{transaction.donor}</span>
                    <span style={{
                      ...styles.transactionStatus,
                      ...(transaction.status === 'confirmed' ? styles.statusConfirmed : styles.statusPending)
                    }}>
                      {transaction.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                    {transaction.cause} • {transaction.time}
                  </div>
                </div>
                <div style={styles.transactionAmount}>{transaction.amount}</div>
              </div>
              <div style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                Impact: {transaction.impact}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const getStatIcon = (key) => {
    const icons = {
      totalDonations: '💰',
      activeDonors: '👥',
      projectsFunded: '🎯',
      transparencyScore: '🛡️',
      livesImpacted: '❤️',
      carbonSaved: '🌱',
      volunteersActive: '👋',
      emergencyFundsDeployed: '🚨'
    };
    return icons[key] || '📊';
  };

  const renderDonatePage = () => (
    <div style={styles.page}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px', alignItems: 'start' }}>
        <div>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '24px' }}>
            Make a Difference Today
          </h1>
          
          {/* Cause Selection */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              Choose Your Cause
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {causes.map((cause) => (
                <div
                  key={cause.id}
                  style={{
                    ...styles.causeCard,
                    cursor: 'pointer',
                    border: selectedCause === cause.id ? '3px solid #e74c3c' : `1px solid ${isDarkMode ? '#4a5568' : '#e2e8f0'}`,
                    transform: selectedCause === cause.id ? 'scale(1.02)' : 'scale(1)'
                  }}
                  onClick={() => setSelectedCause(cause.id)}
                >
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                      {cause.name}
                    </h4>
                    <p style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b', marginBottom: '12px' }}>
                      {cause.beneficiaries.toLocaleString()} beneficiaries
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px', fontWeight: '600', color: '#e74c3c' }}>
                        {cause.raised}
                      </span>
                      <span style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                        of {cause.goal}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Impact Stories */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              Recent Impact Stories
            </h3>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                {
                  title: "100 Children Got School Supplies",
                  description: "Thanks to recent donations, 100 children in rural Maharashtra now have proper school supplies and books.",
                  image: "/api/placeholder/300/200",
                  date: "2 days ago",
                  cause: "Education"
                },
                {
                  title: "Mobile Health Clinic Launched",
                  description: "A new mobile health clinic is now serving 5 remote villages, providing essential medical care.",
                  image: "/api/placeholder/300/200",
                  date: "1 week ago",
                  cause: "Healthcare"
                }
              ].map((story, index) => (
                <div key={index} style={styles.impactCard}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', textAlign: 'left' }}>
                    <img 
                      src={story.image} 
                      alt={story.title}
                      style={{ 
                        width: '120px', 
                        height: '80px', 
                        borderRadius: '12px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        marginBottom: '8px'
                      }}>
                        <span style={{
                          backgroundColor: '#e74c3c',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>
                          {story.cause}
                        </span>
                        <span style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                          {story.date}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                        {story.title}
                      </h4>
                      <p style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                        {story.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div style={styles.donationForm}>
          <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }}>
            Complete Your Donation
          </h3>

          {/* Donation Amount */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Donation Amount (₹)</label>
            <div style={styles.amountGrid}>
              {[500, 1000, 2500, 5000, 10000, 25000].map((amount) => (
                <button
                  key={amount}
                  style={{
                    ...styles.amountButton,
                    ...(donationAmount == amount ? styles.amountButtonActive : {})
                  }}
                  onClick={() => setDonationAmount(amount)}
                >
                  ₹{amount.toLocaleString()}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Donation Frequency */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Donation Frequency</label>
            <select
              value={donationFrequency}
              onChange={(e) => {
                setDonationFrequency(e.target.value);
                setIsRecurring(e.target.value === 'recurring');
              }}
              style={styles.select}
            >
              <option value="one-time">One-Time</option>
              <option value="recurring">Recurring</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>

          {/* Recurring Donation Options */}
          {isRecurring && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Recurring Interval</label>
              <select
                value={filterOptions.recurringInterval || 'monthly'}
                onChange={(e) =>
                  setFilterOptions({ ...filterOptions, recurringInterval: e.target.value })
                }
                style={styles.select}
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          )}

          {/* Payment Method */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Payment Method</label>
            <div style={styles.paymentMethods}>
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  style={{
                    ...styles.paymentMethod,
                    ...(selectedPaymentMethod === method.id ? styles.paymentMethodActive : {})
                  }}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                >
                  <span style={{ fontSize: '24px' }}>{method.icon}</span>
                  <div>{method.name}</div>
                  <small style={{ color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                    Fees: {method.fees} | {method.processingTime}
                  </small>
                </div>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <button
            style={styles.donateBtn}
            onClick={() => handleDonation(Number(donationAmount), selectedCause)}
            disabled={!donationAmount || donationAmount <= 0}
          >
            Donate {selectedCurrency === 'INR' ? '₹' : selectedCurrency} {donationAmount}
          </button>
        </div>
      </div>
    </div>
  );

  const renderTrackPage = () => (
    <div style={styles.page}>
      <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '40px' }}>
        Track Your Donations
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '24px' }}>
        View real-time blockchain transaction status and impact reports for your donations.
      </p>
      <div style={styles.featuresGrid}>
        {donationHistory.length === 0 ? (
          <p style={{ fontSize: '16px', color: styles.textMuted }}>No donations made yet.</p>
        ) : (
          donationHistory.map((donation) => (
            <div key={donation.id} style={styles.transactionCard}>
              <div style={styles.transactionHeader}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '600', fontSize: '16px' }}>
                      {donation.cause}
                    </span>
                    <span style={{
                      ...styles.transactionStatus,
                      ...(donation.status === 'confirmed' ? styles.statusConfirmed : styles.statusPending)
                    }}>
                      {donation.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                    {new Date(donation.timestamp).toLocaleString()}
                  </div>
                </div>
                <div style={styles.transactionAmount}>{donation.amount}</div>
              </div>
              {donation.txHash && (
                <div style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                  Transaction Hash: {donation.txHash}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderAnalyticsPage = () => (
    <div style={styles.page}>
      <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '40px' }}>
        Donation Analytics & Insights
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '24px' }}>
        Explore predictive analytics, donation trends, and impact metrics.
      </p>
      {/* Placeholder for charts and analytics */}
      <div style={styles.chartContainer}>
        <p style={{ textAlign: 'center', color: styles.textMuted }}>
          Analytics charts will be displayed here.
        </p>
      </div>
    </div>
  );

  const renderProfilePage = () => (
    <div style={styles.page}>
      <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '40px' }}>
        Your Profile & Dashboard
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '24px' }}>
        Manage your donations, view achievements, and update your preferences.
      </p>

      {/* Previous Donations Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
          Previous Donations
        </h2>
        {donationHistory.length === 0 ? (
          <p style={{ fontSize: '16px', color: styles.textMuted }}>
            You have not made any donations yet.
          </p>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {donationHistory.map((donation) => (
              <div key={donation.id} style={styles.transactionCard}>
                <div style={styles.transactionHeader}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '600', fontSize: '16px' }}>
                        {donation.cause}
                      </span>
                      <span style={{
                        ...styles.transactionStatus,
                        ...(donation.status === 'confirmed' ? styles.statusConfirmed : styles.statusPending)
                      }}>
                        {donation.status}
                      </span>
                    </div>
                    <div style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                      {new Date(donation.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div style={styles.transactionAmount}>{donation.amount}</div>
                </div>
                {donation.txHash && (
                  <div style={{ fontSize: '14px', color: isDarkMode ? '#a0aec0' : '#64748b' }}>
                    Transaction Hash: {donation.txHash}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
          Achievements
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {achievements.map((ach, index) => (
            <div
              key={index}
              style={{
                ...styles.achievementCard,
                ...(ach.unlocked ? styles.achievementUnlocked : {})
              }}
              title={ach.unlocked ? `Unlocked on ${ach.date}` : `Progress: ${ach.progress || 0}%`}
            >
              <span style={{ fontSize: '32px' }}>{ach.icon}</span>
              <h4 style={{ marginTop: '12px', fontWeight: '700' }}>{ach.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // Main render
  return (
    <div style={styles.app}>
      {renderNavigation()}
      {activeTab === 'home' && renderHomePage()}
      {activeTab === 'donate' && renderDonatePage()}
      {activeTab === 'track' && renderTrackPage()}
      {activeTab === 'analytics' && renderAnalyticsPage()}
      {activeTab === 'profile' && renderProfilePage()}
    </div>
  );
};

export default CharityApp;
