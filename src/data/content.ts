import { images } from './images';

export const churchInfo = {
  name: 'Ideal Voice Worship Centre',
  shortName: 'Ideal Voice HQ',
  tagline: 'The Wealthy Church',
  phone: '+233 24 422 2808',
  email: 'thewealthychurch.2010@gmail.com',
  address: 'Anwomaso, Ashanti Region, Ghana',
  plusCode: 'MFQF+823, Anwomaso, Ghana',
  /** Ideal Voice Worship Center coordinates (Anwomaso) */
  lat: 6.688254,
  lng: -1.527444,
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Ideal+Voice+Worship+Center,+Anwomaso,+Ghana&ll=6.688254,-1.527444&z=16&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Ideal+Voice+Worship+Center,+Anwomaso,+Ashanti+Region,+Ghana',
  mapsPlaceUrl:
    'https://www.google.com/maps/search/?api=1&query=Ideal+Voice+Worship+Center+Anwomaso+Ghana',
  serviceTimes: [
    { day: 'Sunday', time: '8:00 AM – 11:00 AM', label: 'Sunday Morning Worship' },
    { day: 'Last Day of Month', time: 'Evening Service', label: 'Miracle Night · End of Month' },
  ],
  socials: {
    facebook: 'https://www.facebook.com/thewealtharians',
    instagram: 'https://www.facebook.com/thewealtharians',
    youtube: 'https://www.facebook.com/thewealtharians',
    /** WhatsApp chat — Ideal Voice HQ */
    whatsapp: 'https://wa.me/233244222808',
  },
};

/** Poster-style weekly lineup — Ideal Voice HQ programs */
export const weeklyPrograms = [
  {
    day: 'Sunday',
    program: 'Morning Worship',
    detail: 'Praise · Undiluted Word · Prayer',
    time: '8AM',
    timeLabel: '8:00 AM – 11:00 AM',
    highlight: true,
    image: 'worshipCongregation',
    tint: 'crimson',
  },
  {
    day: 'Tuesday',
    program: 'Prayer & Intercession',
    detail: 'Corporate prayer for the house & city',
    time: '6PM',
    timeLabel: '6:00 PM',
    highlight: false,
    image: 'sunsetPray',
    tint: 'navy',
  },
  {
    day: 'Wednesday',
    program: 'Bible Study',
    detail: 'Undistorted teaching of the Word',
    time: '6PM',
    timeLabel: '6:00 PM',
    highlight: false,
    image: 'biblePodium',
    tint: 'ember',
  },
  {
    day: 'Friday',
    program: 'Next Generation',
    detail: 'Youth & children fellowship',
    time: '5:30PM',
    timeLabel: '5:30 PM',
    highlight: false,
    image: 'gathering2',
    tint: 'teal',
  },
  {
    day: 'Month End',
    program: 'Miracle Night',
    detail: 'Anointing · Miracles · Fresh oil',
    time: 'EVE',
    timeLabel: 'Evening Service',
    highlight: true,
    image: 'worshipPraise',
    tint: 'gold',
  },
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Sermons', path: '/sermons' },
  { label: 'Events', path: '/events' },
  { label: 'Plan Your Visit', path: '/visit' },
  { label: 'Giving', path: '/giving' },
  { label: 'Contact', path: '/contact' },
];

export const ourStory = [
  {
    year: 'Founding',
    title: 'A Divine Mandate',
    text: 'Ideal Voice Worship Center was raised as a divine platform in Anwomaso where the undiluted, undistorted, and undeviated Word of God would be preached and taught—without compromise and with power.',
  },
  {
    year: 'Growth',
    title: 'A House of Encounter',
    text: 'What began as a local gathering in Anwomaso grew into a Spirit-filled house known for passionate worship, sound biblical teaching, and a loving family atmosphere that welcomes every soul who walks through the doors.',
  },
  {
    year: 'Today',
    title: 'A Voice Still Rising',
    text: 'Today Ideal Voice HQ continues to host powerful Sunday worship, end-of-month Miracle Nights, and Spirit-led ministry under Apostle Dr. Romeo Blankson—touching lives across Anwomaso, Kumasi, and beyond.',
  },
];

export const whatWeBelieve = [
  {
    title: 'The Holy Scriptures',
    text: 'We believe the Bible is the inspired, infallible, and authoritative Word of God—our supreme guide for faith, doctrine, and daily living. We preach it undiluted, undistorted, and undeviated.',
  },
  {
    title: 'One Eternal God',
    text: 'We believe in one God, eternally existent in three persons: the Father, the Son, and the Holy Spirit—creator, sustainer, and redeemer of all things.',
  },
  {
    title: 'Salvation Through Christ',
    text: 'We believe that salvation is by grace through faith in Jesus Christ, who gave His life on the cross and rose again on the third day for the redemption of humanity.',
  },
  {
    title: 'The Holy Spirit',
    text: 'We believe in the present-day work of the Holy Spirit, who regenerates, empowers, fills, anoints, and gifts believers for service, holiness, and witness.',
  },
  {
    title: 'The Church',
    text: 'We believe the Church is the body of Christ on earth—a living community called to worship, fellowship, discipleship, service, and the proclamation of the Gospel.',
  },
  {
    title: 'Miracles & Divine Encounter',
    text: 'We believe God still moves in power today—healing, delivering, anointing, and transforming lives as His people gather in faith and expectancy.',
  },
];

export const ourMandate = {
  statement:
    'To be a divine platform where the undiluted, undistorted, and undeviated Word of God is preached and taught—raising worshippers, equipping ministers, and releasing the anointing that transforms lives.',
  pillars: [
    {
      title: 'The Word',
      text: 'We preach and teach Scripture without dilution or distortion—sound doctrine that builds faith and shapes destiny.',
    },
    {
      title: 'Worship',
      text: 'We gather for Spirit-filled worship that creates an atmosphere for encounter, praise, and the presence of God.',
    },
    {
      title: 'Anointing',
      text: 'We contend for fresh oil—Miracle Nights and end-of-month gatherings where God anoints, heals, and answers prayer.',
    },
    {
      title: 'Equipping',
      text: 'Through discipleship and mentoring, we raise believers and ministers ready to serve with excellence.',
    },
  ],
};

export const leadership = [
  {
    name: 'Apostle Dr. Romeo Blankson',
    role: 'World Moderating Apostle (WMA) · Senior Pastor',
    bio: 'Apostle Dr. Romeo Blankson, World Moderating Apostle (WMA), leads Ideal Voice Worship Centre with a mandate to preach and teach the Word of God without compromise. Under his leadership, the church has become known for powerful Sunday worship, end-of-month Miracle Nights, and Spirit-led ministry—raising a generation that hears God\'s voice and walks in anointing.',
    image: images.pastor,
  },
  {
    name: 'Pastoral Team',
    role: 'Ministry Oversight',
    bio: 'Our pastoral and ministry team serves alongside Apostle Blankson to care for the congregation, coordinate worship, prayer, outreach, and the day-to-day life of Ideal Voice HQ. Together they create a house where love is tangible and every member can grow.',
    image: images.man1,
  },
  {
    name: 'Women Ministry',
    role: 'Women\'s Fellowship',
    bio: 'Our Women Ministry gathers sisters for prayer, teaching, fellowship, and encouragement — raising women who walk in faith, purpose, and the anointing of God.',
    image: images.womenMinistry,
  },
  {
    name: 'Youth & Children Leaders',
    role: 'Next Generation',
    bio: 'Our youth and children\'s leaders invest in the next generation through teaching, sports, fellowship, and mentoring—helping young people discover Christ early and grow into strong believers.',
    image: images.woman3,
  },
  {
    name: 'Prayer & Intercession Team',
    role: 'Intercessory Ministry',
    bio: 'The prayer team anchors Ideal Voice in intercession before and during services, covering Miracle Nights, Sunday gatherings, and the personal needs of the church family in faith-filled prayer.',
    image: images.woman2,
  },
];

export const ministries = [
  {
    name: 'Sunday Morning Worship',
    description: 'Every Sunday from 8:00 AM to 11:00 AM we gather for Spirit-filled praise, undiluted teaching of the Word, prayer, and fellowship. Come expecting encounter and transformation.',
    image: images.worshipCongregation,
    icon: 'Music',
    meets: 'Sundays · 8:00 AM – 11:00 AM',
  },
  {
    name: 'Miracle Night',
    description: 'Our end-of-month Miracle Night is a special evening of anointing, miracles, and fresh oil. Themes such as "I Will Be Anointed" call the church to faith as God moves in power.',
    image: images.worshipPraise,
    icon: 'Sparkles',
    meets: 'Last day of every month',
  },
  {
    name: 'Singing Ministry',
    description: 'Our vocalists and worship leaders lift Ideal Voice HQ in passionate praise — hearts raised, voices united, creating an atmosphere where God is exalted and His presence fills the house.',
    image: images.singingMinistry,
    icon: 'Music',
    meets: 'Sundays & special services',
  },
  {
    name: 'Women Ministry',
    description: 'A sisterhood of women growing in faith, prayer, fellowship, and purpose — encouraging one another to walk in the fullness of their calling at Ideal Voice.',
    image: images.womenMinistry,
    icon: 'HeartHandshake',
    meets: 'As scheduled · Contact church office',
  },
  {
    name: 'Next Generation',
    description: 'Children and youth ministry through teaching, fellowship, sports, and mentoring—helping young people grow in Christ and find their place in the house of God.',
    image: images.children,
    icon: 'Flame',
    meets: 'Sundays & midweek activities',
  },
  {
    name: 'Prayer & Intercession',
    description: 'A dedicated company of intercessors who cover services, Miracle Nights, families, and the city in prayer—believing God for breakthroughs and divine intervention.',
    image: images.sunsetPray,
    icon: 'Sparkles',
    meets: 'Pre-service & midweek prayer',
  },
  {
    name: 'Community Life',
    description: 'Fellowship, celebrations, and shared life beyond Sunday — building a loving Ideal Voice family that serves Anwomaso together.',
    image: images.communityLife,
    icon: 'HandHeart',
    meets: 'Ongoing · Join the family',
  },
  {
    name: 'Community & Outreach',
    description: 'Ideal Voice serves Anwomaso and the surrounding communities with compassion, invitation, and practical love—sharing Christ beyond the walls of the sanctuary.',
    image: images.outreach,
    icon: 'HandHeart',
    meets: 'As scheduled · Join our team',
  },
  {
    name: 'Family & Discipleship',
    description: 'We strengthen homes and believers through discipleship, counseling, and fellowship so every member can walk in faith, purpose, and spiritual maturity.',
    image: images.gathering2,
    icon: 'Home',
    meets: 'Ongoing · Speak with pastoral team',
  },
];

export const sermons = [
  {
    id: 'iv-001',
    title: 'I Will Be Anointed',
    series: 'Miracle Night',
    speaker: 'Apostle Dr. Romeo Blankson',
    date: 'September 30, 2026',
    duration: 'Live',
    scripture: 'Psalm 92:10',
    description: 'Miracle Night September Edition — a night of fresh oil. Come expecting the anointing that breaks yokes and releases destiny.',
    image: images.pastorPreaching,
    videoUrl: 'https://www.facebook.com/thewealtharians',
  },
  {
    id: 'iv-002',
    title: 'The Undiluted Word',
    series: 'Sunday Worship',
    speaker: 'Apostle Dr. Romeo Blankson',
    date: 'September 21, 2026',
    duration: '45 min',
    scripture: '2 Timothy 2:15',
    description: 'A call to embrace Scripture without dilution or distortion—and to let the Word shape how we live, believe, and minister.',
    image: images.pastorSermon,
    videoUrl: 'https://www.facebook.com/thewealtharians',
  },
  {
    id: 'iv-003',
    title: 'My Miracle Is Here',
    series: 'Miracle Night',
    speaker: 'Apostle Dr. Romeo Blankson',
    date: 'August 31, 2026',
    duration: 'Live',
    scripture: 'Mark 10:27',
    description: 'End-of-month Miracle Night declaring faith for breakthrough—healing, provision, and divine visitation.',
    image: images.worshipPraise,
    videoUrl: 'https://www.facebook.com/thewealtharians',
  },
  {
    id: 'iv-004',
    title: 'Worship That Moves Heaven',
    series: 'Sunday Worship',
    speaker: 'Worship Ministry',
    date: 'August 24, 2026',
    duration: '40 min',
    scripture: 'Psalm 100:1–5',
    description: 'Entering God\'s courts with praise—how Spirit-filled worship prepares the way for the Word and miracles.',
    image: images.choirClap,
    videoUrl: 'https://www.facebook.com/thewealtharians',
  },
  {
    id: 'iv-005',
    title: 'Raising the Next Voice',
    series: 'Next Generation',
    speaker: 'Youth & Children Leaders',
    date: 'August 17, 2026',
    duration: '35 min',
    scripture: '1 Timothy 4:12',
    description: 'Equipping young people to own their faith early and become voices of hope in their generation.',
    image: images.kidsLearn,
    videoUrl: 'https://www.facebook.com/thewealtharians',
  },
];

export const events = [
  {
    id: 'evt-001',
    title: 'Miracle Night — I Will Be Anointed',
    date: '2026-09-30',
    time: 'Evening Service',
    location: 'Ideal Voice HQ · Anwomaso',
    category: 'Miracle Night',
    description: 'September Edition of Miracle Night: "My Miracle Is Here — I Will Be Anointed." Ministering: Apostle Dr. Romeo Blankson (Rep. Blankson). Come expecting fresh oil.',
    image: images.heroWorship2,
  },
  {
    id: 'evt-002',
    title: 'Sunday Morning Worship',
    date: '2026-10-05',
    time: '8:00 AM – 11:00 AM',
    location: 'Main Sanctuary · Anwomaso',
    category: 'Worship',
    description: 'Join us for Spirit-filled praise, the undiluted Word, and fellowship. Every Sunday morning at Ideal Voice Worship Center.',
    image: images.worshipCongregation,
  },
  {
    id: 'evt-003',
    title: 'End of Month Miracle Night',
    date: '2026-10-31',
    time: 'Evening Service',
    location: 'Ideal Voice HQ · Anwomaso',
    category: 'Miracle Night',
    description: 'Our monthly Miracle Night—last day of the month. A night of anointing, miracles, and testimonies. Don\'t miss it.',
    image: images.worshipColorful,
  },
  {
    id: 'evt-005',
    title: 'Next Generation Gathering',
    date: '2026-10-18',
    time: 'After Sunday Service',
    location: 'Youth Hall · Anwomaso',
    category: 'Youth',
    description: 'Children and youth fellowship with teaching, games, and mentorship—building the next generation of Ideal Voice.',
    image: images.kidsPlay,
  },
  {
    id: 'evt-006',
    title: 'Community Welcome Sunday',
    date: '2026-11-02',
    time: '8:00 AM – 11:00 AM',
    location: 'Ideal Voice HQ · Anwomaso',
    category: 'Special',
    description: 'A special Sunday to welcome first-time visitors and neighbors from Anwomaso and beyond. Come as you are—you belong here.',
    image: images.gathering,
  },
];

export const serviceTimes = churchInfo.serviceTimes;

export const faqs = [
  {
    question: 'What should I expect on my first visit?',
    answer: 'Expect warm Ghanaian hospitality, Spirit-filled worship with an outstanding sound atmosphere, and undiluted teaching of God\'s Word. Sunday services run from about 8:00 AM to 11:00 AM. Come as you are—you will feel at home.',
  },
  {
    question: 'Where is Ideal Voice located?',
    answer: 'We are in Anwomaso, Ashanti Region, Ghana (plus code MFQF+823). If you are coming from Kumasi, pick a car toward Anwomaso and ask locals for Ideal Voice Worship Center—you will be directed safely.',
  },
  {
    question: 'What is Miracle Night?',
    answer: 'Miracle Night is our end-of-month special service held on the last day of every month. It is a night of anointing, miracles, and faith declarations—such as "I Will Be Anointed." Follow Ideal Voice HQ on Facebook for each month\'s theme and time.',
  },
  {
    question: 'Is there something for children and youth?',
    answer: 'Yes. Our Next Generation ministry welcomes children and young people with teaching, fellowship, and activities. Families are encouraged to worship together and connect with our youth and children\'s leaders.',
  },
  {
    question: 'How can I contact the church?',
    answer: 'WhatsApp or call +233 24 422 2808, email thewealthychurch.2010@gmail.com, or message us on Facebook at Ideal Voice HQ (@thewealtharians). We would love to hear from you.',
  },
];
