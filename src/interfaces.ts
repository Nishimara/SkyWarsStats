interface iSWTotalModeStats {
    winstreak: number,
    playedGames: number,
    kills: number,
    deaths: number,
    wins: number,
    losses: number,
    KDRatio: number,
    WLRatio: number
}

interface iSWModeStats {
    kills: number,
    deaths: number,
    wins: number,
    losses: number,
    KDRatio: number,
    WLRatio: number
}

interface iLevelProgress {
    xpToNext: number,
    remainingXP: number,
    currentXP: number,
    percent: number,
    percentRemaining: number
}

interface iSWMegaStats {
    overall: iSWTotalModeStats,
    solo: iSWModeStats,
    doubles: iSWModeStats
}

interface iKitGameModes {
    solo: string,
    team: string
}

interface iKitType {
    basic: string,
    supporting: string,
    mining: string,
    defending: string,
    attacking: string,
    advanced: string,
    enderchest: string
}

interface iSWKitsGet {
    gamemode: iKitGameModes,
    type: iKitType
}

interface iSWKits {
    get(): iSWKitsGet
}

interface iSWPackages {
    achievements: Array<string>,
    cages: Array<string>,
    kits: iSWKits,
    rawPackages: Array<string>,
    _parseCages(): Array<string>
}

interface iSWPrestige {
    Iron: string,
    Gold: string,
    Diamond: string,
    Emerald: string,
    Sapphire: string,
    Ruby: string,
    Crystal: string,
    Opal: string,
    Amethyst: string,
    Rainbow: string,
    Mythic: string
}

interface iSWPrestigeIcons {
    '⋆': string,
    '★': string,
    '☆': string,
    '⁕': string,
    '✶': string,
    '✳': string,
    '✴': string,
    '✷': string,
    '❋': string,
    '✼': string,
    '❂': string,
    '❁': string,
    '☬': string,
    '✙': string,
    '❤️': string,
    '☠': string,
    '✦': string,
    '✌': string,
    '❦': string,
    '✵': string,
    '❣': string,
    '☯': string,
    '✺': string,
    'ಠ_ಠ': string,
    '⚔': string
}

interface iSWShardsInMode {}

interface iSWModeExtendedStats {
    overall: iSWTotalModeStats,
    normal: iSWModeStats,
    insane: iSWModeStats
}

interface iPetConsumables {
    BAKED_POTATO: number,
    COOKIE: number,
    FEATHER: number,
    HAY_BLOCK: number,
    SLIME_BALL: number,
    COOKED_BEEF: number,
    RED_ROSE: number,
    WATER_BUCKET: number,
    MELON: number,
    STICK: number,
    WOOD_SWORD: number,
    MILK_BUCKET: number,
    GOLD_RECORD: number,
    LEASH: number,
    LAVA_BUCKET: number,
    BONE: number,
    MAGMA_CREAM: number,
    WHEAT: number,
    MUSHROOM_SOUP: number,
    BREAD: number,
    PUMPKIN_PIE: number,
    APPLE: number,
    CARROT_ITEM: number,
    RAW_FISH: number,
    PORK: number,
    CAKE: number,
    ROTTEN_FLESH: number
}

interface iPet {
    active: boolean,
    exercise?: number,
    experience: number,
    hunger?: number,
    isFavorite: boolean,
    lastDrank?: number,
    lastDrankAt?: Date,
    lastExercised?: number,
    lastExercisedAt?: Date,
    lastFed?: number,
    lastFedAt: Date,
    name: string,
    nickname?: string,
    rawNickname?: string,
    thirst?: number
}

interface iPets {
    lastJourneyAt: Date | null,
    lastJourneyTimestamp: number | null,
    petConsumables: iPetConsumables,
    pets: Array<iPet>
}

interface iPlayerCosmetics {
    allCosmetics: Array<string>,
    clickEffects: Array<string>,
    cloaks: Array<string>,
    gadgets: Array<string>,
    hats: Array<string>,
    morphs: Array<string>,
    particlePacks: Array<string>,
    petManager: iPets | null,
}

interface iExpHistory {
    day: string,
    date: Date,
    exp: number,
    totalExp: number
}

interface iGuildMaster {
    expHistory: Array<iExpHistory>,
    joinedAt: Date,
    joinedAtTimestamp: number,
    mutedUntil: Date | null,
    mutedUntillTimestamp: number | null,
    questParticipation: number,
    rank: string,
    uuid: string,
    weeklyExperience: number,
    toString(): string,
}

interface iGuildMember {
    expHistory: Array<iExpHistory>,
    joinedAt: Date,
    joinedAtTimestamp: number,
    mutedUntil: Date | null,
    mutedUntillTimestamp: number | null,
    questParticipation: number,
    rank: string,
    uuid: string,
    weeklyExperience: number,
    toString(): string
}

interface iGameCode {
    QUAKECRAFT: string,
    WALLS: string,
    PAINTBALL: string,
    SURVIVAL_GAMES: string,
    TNTGAMES: string,
    VAMPIREZ: string,
    WALLS3: string,
    ARCADE: string,
    ARENA: string,
    UHC: string,
    MCGO: string,
    WARLORDS: string,
    SUPER_SMASH: string,
    GINGERBREAD: string,
    HOUSING: string,
    SKYWARS: string,
    TRUE_COMBAT: string,
    SPEED_UHC: string,
    SKYCLASH: string,
    LEGACY: string,
    PROTOTYPE: string,
    BEDWARS: string,
    MURDER_MYSTERY: string,
    BUILD_BATTLE: string,
    DUELS: string,
    SKYBLOCK: string,
    PIT: string,
    REPLAY: string,
    SMP: string
}

enum eGameID {
    QUAKECRAFT = 2,
    WALLS,
    PAINTBALL,
    SURVIVAL_GAMES,
    TNTGAMES,
    VAMPIREZ,
    WALLS3 = 13,
    ARCADE,
    ARENA = 17,
    UHC = 20,
    MCGO,
    BATTLEGROUND = 23,
    SUPER_SMASH,
    GINGERBREAD,
    HOUSING,
    SKYWARS = 51,
    TRUE_COMBAT,
    SPEED_UHC = 54,
    SKYCLASH,
    LEGACY,
    PROTOTYPE,
    BEDWARS,
    MURDER_MYSTERY,
    BUILD_BATTLE,
    DUELS,
    SKYBLOCK = 63,
    PIT
}

enum eGameString {
    QUAKECRAFT = "Quake Craft",
    WALLS = "Walls",
    PAINTBALL = "Paintball",
    SURVIVAL_GAMES = "Blitz Survival Games",
    TNTGAMES = "The TNT Games",
    VAMPIREZ = "VAMPIREZ",
    WALLS3 = "Mega Walls",
    ARCADE = "Arcade",
    ARENA = "Arena Brawl",
    UHC = "UHC Champions",
    MCGO = "Cops And Crims",
    WARLORDS = "Warlords",
    SUPER_SMASH = "Smash Heroes",
    GINGERBREAD = "Turbo Kart Racers",
    HOUSING = "Housing",
    SKYWARS = "SkyWars",
    TRUE_COMBAT = "Crazy Walls",
    SPEED_UHC = "Speed UHC",
    SKYCLASH = "SkyClash",
    LEGACY = "Classic Games",
    PROTOTYPE = "Prototype",
    BEDWARS = "BedWars",
    MURDER_MYSTERY = "Murder Mystery",
    BUILD_BATTLE = "Build Battle",
    DUELS = "Duels",
    SKYBLOCK = "SkyBlock",
    PIT = "The Pit",
    REPLAY = "Replay",
    SMP = "SMP"
}

interface iGame {
    code: iGameCode,
    found: boolean,
    game: eGameID | iGameCode,
    id: eGameID,
    name: eGameString,
    CODES: Array<iGameCode>, //static
    IDS: Array<eGameID>, //static
    NAMES: Array<eGameString>,
    toString(): eGameString
}

interface iGuildRank {
    createdAt: Date,
    createdAtTimestamp: number,
    default: boolean,
    name: string,
    priority: number,
    tag: string | null,
    toString: string
}

interface iColor {
    toCode: object
}

interface iGuild {
    achievements: Object,
    banner: Array<{Pattern: string, Color: string}>,
    chatMuteUntil: Date | null,
    chatMuteUntilTimestamp: number | null,
    createdAt: Date,
    createdAtTimestamp: string,
    description: string,
    experience: number,
    expHistory: Array<iExpHistory>,
    guildMaster: iGuildMaster,
    id: string,
    joinable: boolean,
    legacyRank: number, // deprecated
    level: number,
    me: iGuildMember | null,
    members: Array<iGuildMember>,
    name: string,
    preferredGames: Array<iGame>,
    publiclyListed: boolean,
    ranks: Array<iGuildRank>
    tag: string,
    tagColor: iColor,
    totalWeeklyGexp: number,
    getMemberUUIDMap(): Map<string, iGuildMember>
    getRankByPriority(): iGuildRank,
    getRanksByNewest(): Array<iGuildRank>,
    toString(): string
}

interface iPlayerRank {
    Default: string,
    VIP: string,
    "VIP+": string,
    MVP: string,
    "MVP+": string,
    "MVP++": string,
    "Game Master": string,
    Admin: string,
    YouTube: string
}

interface iRanksPurchaseTime {
    VIP: Date | null,
    VIP_PLUS: Date | null,
    MVP: Date | null,
    MVP_PLUS: Date | null
}

interface iRecentGame {
    code: iGameCode,
    date: Date,
    dataTimestamp: number,
    endedAt: Date
}

interface iPlayerSocialMedia {
    name: string,
    link: string,
    id: string
}

export interface iSWStats {
    angelOfDeathLevel: number,
    avarice: number,
    coins: number,
    deaths: number,
    experience: number,
    heads: number,
    KDRatio: number,
    kills: number,
    lab: iSWTotalModeStats,
    level: number,
    levelFormatted: string,
    leveProgress: iLevelProgress,
    lootChests: number,
    losses: number,
    mega: iSWMegaStats,
    opals: number,
    openedLootChests: number,
    packages: iSWPackages,
    playedGames: number,
    prestige: iSWPrestige,
    prestigeIcon: iSWPrestigeIcons,
    shards: number,
    shardsInMode: iSWShardsInMode,
    solo: iSWModeExtendedStats,
    souls: number,
    team: iSWModeExtendedStats,
    tenacity: number,
    tokens: number,
    wins: number,
    winstreak: number,
    WLRatio: number
}

interface iPlayerStats {
    skywars: iSWStats
}

export default interface iSWPlayer {
    achievementPoints: number,
    achievements: Object,
    channel: string | null,
    claimedLevelingRewards: Array<number>,
    firstLogin: Date | null,
    firstLoginTimestamp: number | null,
    giftBundlesReceived: number,
    giftBundlesSent: number,
    giftsSent: number,
    globalCosmetics: iPlayerCosmetics,
    guild: iGuild,
    history: Array<string>,
    isOnline: boolean,
    karma: number,
    lastDailyReward: Date | null,
    lastDailyRewardTimestamp: number | null,
    lastLogin: number | null,
    lastLoginTimestamp: iGame | null,
    lastLogout: Date | null,
    lastLogoutTimestamp: Date | null,
    level: number,
    levelProgress: iLevelProgress,
    mcVersion: string | null,
    nickname: string,
    plusColor: iColor | null,
    prefixColor: iColor | null,
    rank: iPlayerRank,
    ranksPurchaseTime: iRanksPurchaseTime,
    recentGames: Array<iRecentGame> | null,
    recentlyPlayedGame: iGame | null,
    rewardHighScore: number | null,
    rewardScore: number | null,
    rewardStreak: number | null,
    socialMedia: Array<iPlayerSocialMedia>,
    stats: iPlayerStats,
    totalDailyRewards: number | null,
    totalExperience: number,
    totalRewards: number | null,
    userLanguage: string,
    uuid: string,
    toString(): string
}