export interface VideoItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  videoUrl: string;
  thumbnail?: string;
  duration?: string;
  isPinned?: boolean;
  views?: string;
}

export interface ShortItem {
  id: string;
  title: string;
  file: string;
  url: string;
  tag?: string;
}

export const R2_BASE_URL = "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/";

export const CATEGORIES = [
  "All",
  "G.G.G. Ecosystem",
  "Gemini Music",
  "Holy & Good",
  "Goalogique Live Set",
  "Ritual Dance",
  "Goa Spirit",
  "Cosmic Rhythm",
  "Philosophy",
  "Ecosystem Data",
] as const;

export const VIDEO_ARSIFI: VideoItem[] = [
  {
    id: "hallelujah_feel_light",
    title: "Hallelujah - Feel the Light",
    desc: "A powerful, light-infused ritual celebration. Bridging the holy and the good through ecstatic dance frequencies.",
    category: "Holy & Good",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/G.G.G.-Hallelujah_Feel_the_light_Holly_and_Good.mp4",
    isPinned: true,
    views: "14.2K",
  },
  {
    id: "content_introduction_22min",
    title: "The Autonomous Paradigm: Awakening the Global Ecosystem",
    desc: "A comfortable, natural 22-minute journey that starts softly and evolves as everyone simply finds their own inner freedom with the rhythm. Reminding people of their purest state.",
    category: "Goalogique Live Set",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/ggg-holybookofgoodorg-tv_content_introduction.mp4",
    isPinned: true,
    views: "28.5K",
  },
  {
    id: "new_main_way_1",
    title: "New Main Way - Phase I",
    desc: "A short, precise introductory sequence establishing the clean geometric patterns of the new futuristic pathway.",
    category: "Ecosystem Data",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Holybookofgoodorg-New_Main_Way_1.mp4",
    isPinned: true,
    views: "9.8K",
  },
  {
    id: "book_of_the_tree",
    title: "Book of the Tree",
    desc: "Deep organic frequencies alignment mapping out the structural roots of the universal network consciousness.",
    category: "Philosophy Visuals",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Book_of_the_Tree.mp4",
    isPinned: true,
    views: "11.1K",
  },
  {
    id: "equinox_bloom",
    title: "Equinox Bloom",
    desc: "Symmetric geometric blossom textures synchronized perfectly with mid-tempo hypnotic elements.",
    category: "Cosmic Rhythm",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Equinox_Bloom%20(1).mp4",
    isPinned: true,
    views: "16.4K",
  },
  {
    id: "cosmic_teaser_1",
    title: "Cosmic Dance & Ritual Beats - Vol. I",
    desc: "An immersive audiovisual journey into the heart of cosmic frequencies. Experience the ultimate synergy of ritualistic dance.",
    category: "G.G.G. Ecosystem",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/G.G.G.-Cosmic-Teaser1.mp4",
    views: "34.1K",
  },
  {
    id: "criticism_ecosystem_explanation",
    title: "Criticism & Ecosystem Explanation",
    desc: "A direct, crystal-clear breakdown of the structural criticisms and architectural frameworks within the G.G.G. global ecosystem.",
    category: "Ecosystem Data",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/G.G.G.-Critizm_explanation_by_Holybookofgood.org.mp4",
    views: "8.3K",
  },
  {
    id: "feel_the_rhythm_control",
    title: "Feel the Rhythm - Let It Take Control",
    desc: "Surrender to the peak-time tribal percussion. An otonom flow engineered to activate cosmic connection and tribal unity.",
    category: "Ritual Dance",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/G.G.G.-Feel_the_rhythm_let_it_take_control.mp4",
    views: "19.7K",
  },
  {
    id: "feel_the_rhythm_spirit",
    title: "Feel the Rhythm - Let Your Spirit Fly",
    desc: "A melodic and uplifting spiritual flight. Pushing the boundaries of traditional Goa trance into a lighter, boundless cosmic sky.",
    category: "Goa Spirit",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/G.G.G.-Feel_the_rytim_let_your_spirit_fly.mp4",
    views: "22.0K",
  },
  {
    id: "pilgrimage_of_light",
    title: "Pilgrimage of Light (Gemini Music x Goalogique)",
    desc: "The monumental collaborative milestone. A sacred audio-visual pilgrimage crafted via artificial intelligence and pure cosmic vision.",
    category: "Gemini Music",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Gemini_Music_x_Goalogique-Pilgrimage_of_Light.mp4",
    views: "45.9K",
  },
  {
    id: "sacred_pulsing_sign",
    title: "Sacred Pulsing Sign",
    desc: "Deep atmospheric frequencies meeting structural sacred geometry. A rhythmic sigil activation designed for transcendental visual sets.",
    category: "Gemini Music",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Gemini_Music_x_Goalogique_-_Sacred_Pulsing_Sign.mp4",
    views: "18.3K",
  },
  {
    id: "the_design_reveals",
    title: "The Design Reveals",
    desc: "As the otonom algorithms unfold, the grand cosmic blueprint is unveiled. Cyber-ritual textures blending with hyper-dimensional aesthetics.",
    category: "Gemini Music",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Gemini_Music_x_Goalogique_-_The_Design_Reveals.mp4",
    views: "27.6K",
  },
  {
    id: "the_design_reveals_golden_meridian",
    title: "The Design Reveals - Golden Meridian",
    desc: "A premium geometric deep dive following the energetic neural lines of the golden meridian grid mapping.",
    category: "Gemini Music",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Gemini_Music_x_Goalogique_-_The_Design_RevealsGolden_Meridian.mp4",
    views: "13.4K",
  },
  {
    id: "threads_of_the_dawn",
    title: "Threads of the Dawn",
    desc: "Catching the very first holographic rays of a new golden era. Utopian electronic frequencies pushing light into the dark spaces.",
    category: "Gemini Music",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Gemini_Music_x_Goalogique_-_Threads_of_the_Dawn.mp4",
    views: "31.2K",
  },
  {
    id: "new_main_way_2",
    title: "New Main Way - Phase II",
    desc: "An extended, deeper musical perspective mapping out the architectural evolution and natural synchronization of the network.",
    category: "Ecosystem Data",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Holybookofgoodorg-New_Main_Way_2.mp4",
    views: "10.5K",
  },
  {
    id: "patterns_in_bloom",
    title: "Patterns in Bloom",
    desc: "A complex botanical and technological fractal generation exploring structural life forms inside the autonomous grid.",
    category: "Cosmic Rhythm",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Patterns_in_Bloom.mp4",
    views: "15.8K",
  },
  {
    id: "spinning_sphere",
    title: "Spinning Sphere",
    desc: "Transcendental structural meditation visuals looping through deep geometric rotations and multi-layer frequencies.",
    category: "Ritual Dance",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Spinning_Sphere.mp4",
    views: "17.0K",
  },
  {
    id: "sunward_bound",
    title: "Sunward Bound",
    desc: "Spiritual ambient journey accelerating directly towards the primary holographic light core source.",
    category: "Goa Spirit",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/Sunward_Bound.mp4",
    views: "21.3K",
  },
  {
    id: "the_autonomous_garden",
    title: "The Autonomous Garden",
    desc: "A completely generative virtual sanctuary showcasing organic ecosystem synthesis built via sovereign algorithms.",
    category: "Cosmic Rhythm",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/The_Autonomous_Garden.mp4",
    views: "19.9K",
  },
  {
    id: "the_solar_rite",
    title: "The Solar Rite",
    desc: "Ecstatic visual ceremony honoring solar frequencies, perfectly tuned to mid-range Goa percussion tracks.",
    category: "Holy & Good",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/The_Solar_Rite.mp4",
    views: "23.4K",
  },
  {
    id: "holybookofgood_philosophy",
    title: "HolyBookOfGood Philosophy",
    desc: "An intellectual and spiritual manifesto deep-dive. Explaining the core pillars, otonom structures, and the ultimate vision of the platform.",
    category: "Philosophy",
    videoUrl: "https://pub-4640fb9bc41e4e2ba4226985ab47e0b0.r2.dev/About_Holybookofgood.Org_Philosophy.mp4",
    views: "38.7K",
  },
];

export const SHORTS_RAW_DATA = [
  {
    id: "freq_01",
    title: "Track 01: The Shamanic Scroll Dialogue (Turkish Edition)",
    file: "hamallikdedikamaobilesenineldehazineyedonustukaptan1",
    tag: "Shamanic Frequency",
  },
  {
    id: "freq_02",
    title: "Track 02: The Shamanic Scroll Dialogue (English Translation)",
    file: "hamallikdedikamaobilesenineldehazineyedonustukaptan2",
    tag: "Global Broadcast",
  },
  {
    id: "freq_03",
    title: "Loop Freq 03: Captain Treasure Part 3",
    file: "hamallikdedikamaobilesenineldehazineyedonustukaptan3",
    tag: "Captain Archive",
  },
  {
    id: "freq_04",
    title: "Loop Freq 04: We Called That One",
    file: "wecalledthat1",
    tag: "Echo Matrix",
  },
  {
    id: "freq_05",
    title: "Loop Freq 05: Cosmic Gate 007",
    file: "grok-video-0072f1a9-a859-4178-8936-2de29c8ff0f5",
    tag: "Grok Dimension",
  },
  {
    id: "freq_06",
    title: "Loop Freq 06: Space Echo 04F",
    file: "grok-video-04fd84ea-300a-476b-a704-f6392dfcca23",
    tag: "Deep Space",
  },
  {
    id: "freq_07",
    title: "Loop Freq 07: Otonom Vibe 061",
    file: "grok-video-0612805f-0cda-4350-8a0e-c47dcf35601e",
    tag: "Autonomous Pulse",
  },
];

export const SHORTS_ARSIFI: ShortItem[] = SHORTS_RAW_DATA.map((item) => ({
  id: item.id,
  title: item.title,
  file: item.file,
  url: `${R2_BASE_URL}${item.file}.mp4`,
  tag: item.tag,
}));
