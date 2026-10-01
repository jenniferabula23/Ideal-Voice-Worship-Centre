/** Ideal Voice HQ photos — local church gallery preferred over stock */
const img = (name: string) => `/images/${name}.jpg`;
const church = (name: string) => `/images/church/${name}`;

export const images = {
  logo: '/images/logo.png',
  logoMark: '/images/logo-mark.png',
  logoFull: '/images/logo-full.png',

  // Heroes & worship (no uniforms / graduation)
  heroWorship: church('IMG_1994.jpg'),
  heroWorship2: church('IMG_2160.jpg'),
  heroWorship3: church('IMG_2161.jpg'),
  /** Full sanctuary / congregation — Ideal Voice HQ */
  sanctuaryGathering: church('IMG_2174.jpg'),
  /** Warm welcome moment — Ideal Voice family */
  welcomeJoy: church('IMG_2141.jpg'),
  /** Singing ministry / choir worship */
  singingMinistry: church('IMG_2161.jpg'),
  worshipCongregation: church('IMG_2174.jpg'),
  worshipPraise: church('IMG_2160.jpg'),
  worshipBand: church('IMG_2059.jpg'),
  worshipColorful: church('IMG_2161.jpg'),

  churchInterior: church('IMG_2174.jpg'),
  churchInterior2: church('IMG_2248.jpg'),
  churchModernNight: church('IMG_1994.jpg'),
  churchRock: church('IMG_2182.jpg'),

  pastor: church('IMG_2251.jpg'),
  /** Pastor in joyful service moment */
  pastorJoy: church('IMG_2141.jpg'),
  pastorPreaching: church('IMG_2251.jpg'),
  pastorSermon: church('IMG_2141.jpg'),
  priestSermon: church('IMG_2248.jpg'),
  biblePodium: church('IMG_2275.jpg'),

  bibleCandle: img('profile'),
  bibleOpen: church('IMG_2059.jpg'),
  bibleHands: church('IMG_2160.jpg'),
  bibleHeld: church('IMG_2161.jpg'),

  choirRed: church('IMG_2161.jpg'),
  choirSinging: church('IMG_2161.jpg'),
  choirClap: church('IMG_1994.jpg'),
  choirPractice: church('IMG_2059.jpg'),
  communityWelcome: church('IMG_2141.jpg'),

  children: church('IMG_2161.jpg'),
  children2: church('IMG_2182.jpg'),
  kidsPlay: church('IMG_2161.jpg'),
  kidsLearn: church('IMG_2182.jpg'),

  womenMinistry: church('IMG_2160.jpg'),
  communityLife: church('IMG_2093.jpg'),

  outreach: church('IMG_2182.jpg'),
  outreachFood: church('IMG_2093.jpg'),
  outreachVan: church('IMG_2248.jpg'),
  volunteer: church('IMG_2182.jpg'),

  sunsetPray: church('IMG_2275.jpg'),
  sunsetCross: church('IMG_2285.jpg'),
  sunsetRosary: img('profile'),

  gathering: church('IMG_2182.jpg'),
  gathering2: church('IMG_2093.jpg'),
  diverseWorship: church('IMG_1994.jpg'),

  man1: church('IMG_2093.jpg'),
  man2: church('IMG_2248.jpg'),
  man3: church('IMG_2275.jpg'),
  man4: church('IMG_2285.jpg'),
  woman1: church('IMG_2160.jpg'),
  woman2: church('IMG_2161.jpg'),
  woman3: church('IMG_2182.jpg'),
  woman4: church('IMG_2059.jpg'),
};
