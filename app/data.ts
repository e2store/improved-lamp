export type AccountStatus = "available" | "reserved" | "sold";

export type Account = {
  id: string;
  price: number;
  originalPrice?: number;
  level: number;
  rank: string;
  server: string;
  mythic: number;
  gunLab: number;
  killMessages: number;
  weapons: string[];
  assets: string[];
  characters?: string[];
  image: string;
  status: AccountStatus;
  rarity: "entry" | "rare" | "collector";
  verified: string;
  note: string;
  conqueror?: string;
  video?: boolean;
  new?: boolean;
};

export const accounts: Account[] = [
  {
    id: "KW-079-GC",
    price: 28,
    level: 79,
    rank: "Ace",
    server: "الشرق الأوسط",
    mythic: 72,
    gunLab: 5,
    killMessages: 5,
    weapons: ["M416 Glacier — لفل 5", "Groza — لفل 4", "M762 — لفل 4", "UZI", "UMP"],
    assets: ["2 مثك لوبي", "UAZ أصفر", "Dacia النسر", "3 شخصيات مفعلة"],
    image: "assets/glacier-vault.jpg",
    status: "available",
    rarity: "rare",
    verified: "12 أغسطس، 17:40",
    note: "تسجيل دخول بإيميل · جاهز للنقل",
    conqueror: "مرتان كونكر",
    new: true,
  },
  {
    id: "KW-067-JK",
    price: 37,
    level: 67,
    rank: "Gold",
    server: "الشرق الأوسط",
    mythic: 68,
    gunLab: 11,
    killMessages: 11,
    weapons: ["M416 Fool — لفل 4", "UZI Fire — لفل 4", "Bizon — لفل 4", "M24 — لفل 4", "M762 — لفل 4", "UMP + S1897 + SCAR-L + SLR"],
    assets: ["قناع وحقيبة Joker", "Winter UAZ", "Dunes Dacia", "Lion + Wolf"],
    image: "assets/collector-vault.jpg",
    status: "available",
    rarity: "collector",
    verified: "12 أغسطس، 17:31",
    note: "تسجيل دخول بإيميل · جاهز للنقل",
  },
  {
    id: "KW-ACE-08",
    price: 8,
    level: 54,
    rank: "Ace",
    server: "الشرق الأوسط",
    mythic: 1,
    gunLab: 2,
    killMessages: 2,
    weapons: ["SLR — Kill Message", "S1897 — Kill Message"],
    assets: ["حقيبة Mythic", "Buggy", "Sara + Anna"],
    image: "assets/red-loadout.jpg",
    status: "available",
    rarity: "entry",
    verified: "11 أغسطس، 22:18",
    note: "بداية مرتبة بسعر خفيف",
  },
  {
    id: "KW-057-DR",
    price: 13,
    level: 57,
    rank: "Ace Master",
    server: "الشرق الأوسط",
    mythic: 3,
    gunLab: 4,
    killMessages: 3,
    weapons: ["AKM Dragon — لفل 3", "Skorpion", "S18", "SLR"],
    assets: ["Dacia ذهبية", "بطاقة تغيير اسم"],
    image: "assets/red-loadout.jpg",
    status: "available",
    rarity: "rare",
    verified: "11 أغسطس، 20:05",
    note: "تسجيل بإيميل · تغيير المنطقة متاح",
  },
  {
    id: "EU-074-X3",
    price: 48,
    originalPrice: 55,
    level: 74,
    rank: "Platinum",
    server: "أوروبا",
    mythic: 108,
    gunLab: 41,
    killMessages: 15,
    weapons: ["Marmoris X-Suit — لفل 3", "41 سلاح Gun Lab", "15 Kill Message"],
    assets: ["لوبي Mythic", "هدية مع الحساب", "مستوى المجموعة 64"],
    image: "assets/collector-vault.jpg",
    status: "available",
    rarity: "collector",
    verified: "11 أغسطس، 19:48",
    note: "خصم 7 د.ك + هدية",
    new: true,
  },
  {
    id: "EU-061-CQ",
    price: 10,
    level: 61,
    rank: "Platinum",
    server: "أوروبا",
    mythic: 10,
    gunLab: 3,
    killMessages: 3,
    weapons: ["UMP — لفل 4", "Kar98k", "Bizon"],
    assets: ["حقيبة Mythic", "Eagle Dacia", "بطاقة تغيير اسم"],
    image: "assets/red-loadout.jpg",
    status: "reserved",
    rarity: "rare",
    verified: "10 أغسطس، 23:22",
    note: "محجوز مؤقتًا — اسأل عن التوفر",
    conqueror: "كونكر",
  },
  {
    id: "KW-060-GL",
    price: 19,
    level: 60,
    rank: "Ace Master",
    server: "الشرق الأوسط",
    mythic: 9,
    gunLab: 3,
    killMessages: 3,
    weapons: ["M416 Glacier — لفل 4", "Shotgun", "SLR"],
    assets: ["خوذة + حقيبة Mythic", "Pool Dacia", "Academy UAZ"],
    image: "assets/glacier-vault.jpg",
    status: "available",
    rarity: "rare",
    verified: "10 أغسطس، 18:45",
    note: "تسجيل بإيميل · جاهز للنقل",
  },
  {
    id: "KW-074-BD",
    price: 13,
    level: 74,
    rank: "Ace",
    server: "الشرق الأوسط",
    mythic: 47,
    gunLab: 18,
    killMessages: 6,
    weapons: ["6 Kill Message", "3 أسلحة لفل 3", "9 أسلحة لفل 2"],
    assets: ["خوذة وشنطة Mythic", "Blue Dacia", "Sara + Carlo + Andy"],
    image: "assets/red-loadout.jpg",
    status: "available",
    rarity: "rare",
    verified: "9 أغسطس، 13:42",
    note: "تغيير السيرفر والمنطقة متاح",
  },
  {
    id: "EU-067-DM",
    price: 9,
    level: 67,
    rank: "Diamond",
    server: "أوروبا",
    mythic: 4,
    gunLab: 3,
    killMessages: 3,
    weapons: ["SLR", "Pan", "S18"],
    assets: ["حقيبة Mythic", "2 Buggy + Bus", "Sara + Lorenzo"],
    image: "assets/red-loadout.jpg",
    status: "available",
    rarity: "entry",
    verified: "9 أغسطس، 16:25",
    note: "بطاقة تغيير اسم متوفرة",
  },
  {
    id: "KW-CC-120",
    price: 120,
    level: 80,
    rank: "Conqueror",
    server: "الشرق الأوسط",
    mythic: 87,
    gunLab: 15,
    killMessages: 13,
    weapons: ["13 Kill Message", "2 أسلحة Max", "عتاد جامع نادر"],
    assets: ["كونكر الموسم الحالي", "عرض فيديو كامل", "ملف جامع"],
    image: "assets/collector-vault.jpg",
    status: "available",
    rarity: "collector",
    verified: "8 أغسطس، 20:34",
    note: "Collector Grade · موضح بالكامل بالفيديو",
    conqueror: "كونكر هذا الموسم",
    video: true,
  },
];

export const statusLabel = {
  available: "متاح الآن",
  reserved: "محجوز",
  sold: "تم البيع",
};

export function getAccount(id: string) {
  return accounts.find((account) => account.id === id);
}
