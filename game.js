const STORAGE_KEY = "void-wager-state-v2";

const refinements = {
  Intact: {
    traceCost: 0,
    odds: { common: 76, uncommon: 22, rare: 2 },
    payouts: { common: 1.18, uncommon: 4.05, rare: 42 }
  },
  Exceptional: {
    traceCost: 25,
    odds: { common: 70, uncommon: 26, rare: 4 },
    payouts: { common: 1.25, uncommon: 3.4, rare: 22 }
  },
  Flawless: {
    traceCost: 50,
    odds: { common: 60, uncommon: 34, rare: 6 },
    payouts: { common: 1.45, uncommon: 2.6, rare: 14 }
  },
  Radiant: {
    traceCost: 100,
    odds: { common: 50, uncommon: 40, rare: 10 },
    payouts: { common: 1.75, uncommon: 2.15, rare: 8.5 }
  }
};

const currentRotation = {
  name: "Grendel Prime & Gauss Prime",
  sourceDate: "Official Prime Resurgence page checked April 30, 2026",
  dropTableDate: "Official PC drop tables last updated April 8, 2026"
};

const buildTargets = [
  { id: "all", name: "All Resurgence", type: "Rotation" },
  { id: "grendel-prime", name: "Grendel Prime", type: "Warframe" },
  { id: "gauss-prime", name: "Gauss Prime", type: "Warframe" },
  { id: "acceltra-prime", name: "Acceltra Prime", type: "Primary" },
  { id: "akarius-prime", name: "Akarius Prime", type: "Secondary" },
  { id: "masseter-prime", name: "Masseter Prime", type: "Melee" },
  { id: "zylok-prime", name: "Zylok Prime", type: "Secondary" }
];

const targetItemNames = buildTargets
  .filter((target) => target.id !== "all")
  .map((target) => target.name);

const relics = [
  {
    id: "lith-a11",
    tier: "Lith",
    code: "A11",
    name: "Lith A11",
    node: "Maroo's Bazaar/Varzia",
    mission: "Prime Resurgence",
    faction: "Grendel and Gauss",
    accent: "#d8ad58",
    rewards: [
      { name: "Zylok Prime Barrel", item: "Zylok Prime", part: "Barrel", rarity: "common", ducats: 15 },
      { name: "Paris Prime Lower Limb", item: "Paris Prime", part: "Lower Limb", rarity: "common", ducats: 15 },
      { name: "Forma Blueprint", item: "Forma", part: "Blueprint", rarity: "common", ducats: 0 },
      { name: "Akarius Prime Link", item: "Akarius Prime", part: "Link", rarity: "uncommon", ducats: 45 },
      { name: "Grendel Prime Chassis Blueprint", item: "Grendel Prime", part: "Chassis Blueprint", rarity: "uncommon", ducats: 45 },
      { name: "Acceltra Prime Barrel", item: "Acceltra Prime", part: "Barrel", rarity: "rare", ducats: 100 }
    ]
  },
  {
    id: "meso-a11",
    tier: "Meso",
    code: "A11",
    name: "Meso A11",
    node: "Maroo's Bazaar/Varzia",
    mission: "Prime Resurgence",
    faction: "Grendel and Gauss",
    accent: "#40d6c8",
    rewards: [
      { name: "Gauss Prime Chassis Blueprint", item: "Gauss Prime", part: "Chassis Blueprint", rarity: "common", ducats: 15 },
      { name: "Paris Prime Upper Limb", item: "Paris Prime", part: "Upper Limb", rarity: "common", ducats: 15 },
      { name: "Forma Blueprint", item: "Forma", part: "Blueprint", rarity: "common", ducats: 0 },
      { name: "Masseter Prime Blueprint", item: "Masseter Prime", part: "Blueprint", rarity: "uncommon", ducats: 45 },
      { name: "Acceltra Prime Stock", item: "Acceltra Prime", part: "Stock", rarity: "uncommon", ducats: 45 },
      { name: "Akarius Prime Blueprint", item: "Akarius Prime", part: "Blueprint", rarity: "rare", ducats: 100 }
    ]
  },
  {
    id: "meso-z6",
    tier: "Meso",
    code: "Z6",
    name: "Meso Z6",
    node: "Maroo's Bazaar/Varzia",
    mission: "Prime Resurgence",
    faction: "Grendel and Gauss",
    accent: "#7aa6ff",
    rewards: [
      { name: "Acceltra Prime Blueprint", item: "Acceltra Prime", part: "Blueprint", rarity: "common", ducats: 15 },
      { name: "Paris Prime String", item: "Paris Prime", part: "String", rarity: "common", ducats: 15 },
      { name: "Forma Blueprint", item: "Forma", part: "Blueprint", rarity: "common", ducats: 0 },
      { name: "Gauss Prime Neuroptics Blueprint", item: "Gauss Prime", part: "Neuroptics Blueprint", rarity: "uncommon", ducats: 45 },
      { name: "Bronco Prime Barrel", item: "Bronco Prime", part: "Barrel", rarity: "uncommon", ducats: 45 },
      { name: "Zylok Prime Blueprint", item: "Zylok Prime", part: "Blueprint", rarity: "rare", ducats: 100 }
    ]
  },
  {
    id: "neo-g10",
    tier: "Neo",
    code: "G10",
    name: "Neo G10",
    node: "Maroo's Bazaar/Varzia",
    mission: "Prime Resurgence",
    faction: "Grendel and Gauss",
    accent: "#ef5b5b",
    rewards: [
      { name: "Masseter Prime Handle", item: "Masseter Prime", part: "Handle", rarity: "common", ducats: 15 },
      { name: "Paris Prime Blueprint", item: "Paris Prime", part: "Blueprint", rarity: "common", ducats: 15 },
      { name: "Forma Blueprint", item: "Forma", part: "Blueprint", rarity: "common", ducats: 0 },
      { name: "Gauss Prime Blueprint", item: "Gauss Prime", part: "Blueprint", rarity: "uncommon", ducats: 45 },
      { name: "Akarius Prime Receiver", item: "Akarius Prime", part: "Receiver", rarity: "uncommon", ducats: 45 },
      { name: "Grendel Prime Blueprint", item: "Grendel Prime", part: "Blueprint", rarity: "rare", ducats: 100 }
    ]
  },
  {
    id: "neo-m6",
    tier: "Neo",
    code: "M6",
    name: "Neo M6",
    node: "Maroo's Bazaar/Varzia",
    mission: "Prime Resurgence",
    faction: "Grendel and Gauss",
    accent: "#b995ff",
    rewards: [
      { name: "Akarius Prime Barrel", item: "Akarius Prime", part: "Barrel", rarity: "common", ducats: 15 },
      { name: "Bronco Prime Receiver", item: "Bronco Prime", part: "Receiver", rarity: "common", ducats: 15 },
      { name: "Forma Blueprint", item: "Forma", part: "Blueprint", rarity: "common", ducats: 0 },
      { name: "Acceltra Prime Receiver", item: "Acceltra Prime", part: "Receiver", rarity: "uncommon", ducats: 45 },
      { name: "Grendel Prime Systems Blueprint", item: "Grendel Prime", part: "Systems Blueprint", rarity: "uncommon", ducats: 45 },
      { name: "Masseter Prime Blade", item: "Masseter Prime", part: "Blade", rarity: "rare", ducats: 100 }
    ]
  },
  {
    id: "axi-g15",
    tier: "Axi",
    code: "G15",
    name: "Axi G15",
    node: "Maroo's Bazaar/Varzia",
    mission: "Prime Resurgence",
    faction: "Grendel and Gauss",
    accent: "#f0cf66",
    rewards: [
      { name: "Grendel Prime Neuroptics Blueprint", item: "Grendel Prime", part: "Neuroptics Blueprint", rarity: "common", ducats: 15 },
      { name: "Bronco Prime Blueprint", item: "Bronco Prime", part: "Blueprint", rarity: "common", ducats: 15 },
      { name: "Forma Blueprint", item: "Forma", part: "Blueprint", rarity: "common", ducats: 0 },
      { name: "Zylok Prime Receiver", item: "Zylok Prime", part: "Receiver", rarity: "uncommon", ducats: 45 },
      { name: "Paris Prime Grip", item: "Paris Prime", part: "Grip", rarity: "uncommon", ducats: 45 },
      { name: "Gauss Prime Systems Blueprint", item: "Gauss Prime", part: "Systems Blueprint", rarity: "rare", ducats: 100 }
    ]
  }
];

const randomEvents = [
  {
    name: "Smeeta Kavat Charm",
    apply(result) {
      result.ducats *= 2;
      result.notes.push("Smeeta doubled the Ducat pull.");
    }
  },
  {
    name: "Baro Ki'Teer Relay Ping",
    apply(result) {
      const bonus = result.reward.ducats * 160;
      result.creditPayout += bonus;
      result.notes.push(`Baro buzz added ${formatNumber(bonus)} credits.`);
    }
  },
  {
    name: "Void Trace Surge",
    apply(result) {
      result.traceBonus += 35;
      result.notes.push("Void Trace surge: +35 traces.");
    }
  },
  {
    name: "Kuva Siphon Detour",
    apply(result) {
      result.kuva += result.reward.rarity === "rare" ? 650 : 260;
      result.notes.push("Kuva Siphon detour paid out.");
    }
  },
  {
    name: "Cephalon Simaris Scan",
    apply(result) {
      result.endo += result.reward.rarity === "rare" ? 420 : 180;
      result.notes.push("Simaris converted scans into Endo.");
    }
  },
  {
    name: "Varzia Favor",
    apply(result) {
      result.traceBonus += 15;
      result.creditPayout += 1200;
      result.notes.push("Varzia favor: +15 traces and 1,200 credits.");
    }
  }
];

const initialState = {
  credits: 45000,
  traces: 150,
  ducats: 0,
  endo: 300,
  kuva: 0,
  selectedRelicId: "lith-a11",
  selectedRefinement: "Intact",
  targetFilter: "all",
  betRarity: "rare",
  wager: 2500,
  cracks: 0,
  streak: 0,
  bestStreak: 0,
  last: "--",
  lastRewardName: null,
  inventory: {},
  ledger: []
};

let state = loadState();
let isCracking = false;

const dom = {
  credits: document.querySelector("#creditsValue"),
  traces: document.querySelector("#tracesValue"),
  ducats: document.querySelector("#ducatsValue"),
  endo: document.querySelector("#endoValue"),
  kuva: document.querySelector("#kuvaValue"),
  targetFilter: document.querySelector("#targetFilter"),
  filterSummary: document.querySelector("#filterSummary"),
  relicList: document.querySelector("#relicList"),
  rewardGrid: document.querySelector("#rewardGrid"),
  refinementButtons: document.querySelector("#refinementButtons"),
  rarityButtons: document.querySelector("#rarityButtons"),
  stakeRange: document.querySelector("#stakeRange"),
  stakeLabel: document.querySelector("#stakeLabel"),
  traceCostLabel: document.querySelector("#traceCostLabel"),
  payoutLabel: document.querySelector("#payoutLabel"),
  oddsBoard: document.querySelector("#oddsBoard"),
  crackButton: document.querySelector("#crackButton"),
  baroButton: document.querySelector("#baroButton"),
  cacheButton: document.querySelector("#cacheButton"),
  resetButton: document.querySelector("#resetButton"),
  chipButtons: document.querySelector("#chipButtons"),
  activeTier: document.querySelector("#activeTier"),
  activeRelicName: document.querySelector("#activeRelicName"),
  resultCard: document.querySelector("#resultCard"),
  resultRarity: document.querySelector("#resultRarity"),
  resultName: document.querySelector("#resultName"),
  resultPayout: document.querySelector("#resultPayout"),
  relicStage: document.querySelector("#relicStage"),
  relicCore: document.querySelector("#relicCore"),
  missionNode: document.querySelector("#missionNode"),
  missionFaction: document.querySelector("#missionFaction"),
  cracksValue: document.querySelector("#cracksValue"),
  streakValue: document.querySelector("#streakValue"),
  bestValue: document.querySelector("#bestValue"),
  lastValue: document.querySelector("#lastValue"),
  inventoryList: document.querySelector("#inventoryList"),
  ledgerList: document.querySelector("#ledgerList")
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...initialState, inventory: {}, ledger: [] };
    return { ...initialState, ...JSON.parse(saved) };
  } catch {
    return { ...initialState, inventory: {}, ledger: [] };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

function formatMultiplier(value) {
  return `${Number(value).toFixed(value % 1 === 0 ? 0 : 2)}x`;
}

function activeRelic() {
  return relics.find((relic) => relic.id === state.selectedRelicId) || filteredRelics()[0] || relics[0];
}

function activeRefinement() {
  return refinements[state.selectedRefinement];
}

function selectedTarget() {
  return buildTargets.find((target) => target.id === state.targetFilter) || buildTargets[0];
}

function filteredRelics() {
  if (state.targetFilter === "all") return relics;
  const target = selectedTarget();
  return relics.filter((relic) => relic.rewards.some((reward) => reward.item === target.name));
}

function targetNamesForRelic(relic) {
  const names = relic.rewards
    .map((reward) => reward.item)
    .filter((item) => targetItemNames.includes(item));
  return [...new Set(names)];
}

function ensureSelectedRelicVisible() {
  const visible = filteredRelics();
  if (!visible.length) {
    state.targetFilter = "all";
    state.selectedRelicId = relics[0].id;
    return;
  }
  if (!visible.some((relic) => relic.id === state.selectedRelicId)) {
    state.selectedRelicId = visible[0].id;
    state.lastRewardName = null;
  }
}

function setResultNeutral(message = "Select stake and crack") {
  state.lastRewardName = null;
  dom.resultCard.className = "result-card";
  dom.resultRarity.textContent = "Awaiting Fissure";
  dom.resultName.textContent = message;
  dom.resultPayout.textContent = "No wager settled yet";
}

function render() {
  ensureSelectedRelicVisible();
  renderWallet();
  renderTargetFilter();
  renderRelics();
  renderRewards();
  renderRefinements();
  renderRarityButtons();
  renderStake();
  renderOdds();
  renderRunStats();
  renderInventory();
  renderLedger();
  updateActionState();
  saveState();
}

function renderWallet() {
  dom.credits.textContent = formatNumber(state.credits);
  dom.traces.textContent = formatNumber(state.traces);
  dom.ducats.textContent = formatNumber(state.ducats);
  dom.endo.textContent = formatNumber(state.endo);
  dom.kuva.textContent = formatNumber(state.kuva);
}

function renderTargetFilter() {
  if (dom.targetFilter.children.length !== buildTargets.length) {
    dom.targetFilter.innerHTML = "";
    buildTargets.forEach((target) => {
      const option = document.createElement("option");
      option.value = target.id;
      option.textContent = target.name;
      dom.targetFilter.appendChild(option);
    });
  }

  const visible = filteredRelics();
  const target = selectedTarget();
  dom.targetFilter.value = target.id;

  if (target.id === "all") {
    dom.filterSummary.textContent = `${currentRotation.name}: ${visible.length} current relics. ${currentRotation.dropTableDate}.`;
    return;
  }

  const parts = new Set();
  visible.forEach((relic) => {
    relic.rewards
      .filter((reward) => reward.item === target.name)
      .forEach((reward) => parts.add(reward.part));
  });
  dom.filterSummary.textContent = `${target.type}: ${parts.size} parts across ${visible.length} relics.`;
}

function renderRelics() {
  const relic = activeRelic();
  dom.activeTier.textContent = relic.tier;
  dom.activeRelicName.textContent = relic.code;
  dom.relicCore.style.borderColor = relic.accent;
  dom.missionNode.textContent = `${relic.node} (${relic.mission})`;
  dom.missionFaction.textContent = relic.faction;

  dom.relicList.innerHTML = "";
  filteredRelics().forEach((entry) => {
    const rare = entry.rewards.find((reward) => reward.rarity === "rare");
    const targets = targetNamesForRelic(entry);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `relic-card${entry.id === state.selectedRelicId ? " active" : ""}`;
    button.style.color = entry.accent;
    button.innerHTML = `
      <span>${entry.tier} Relic</span>
      <strong>${entry.name}</strong>
      <small>${targets.join(", ")} / rare: ${rare.name}</small>
    `;
    button.addEventListener("click", () => {
      state.selectedRelicId = entry.id;
      setResultNeutral(`${entry.name} loaded`);
      render();
    });
    dom.relicList.appendChild(button);
  });
}

function renderRewards(hitReward = null) {
  const refinement = activeRefinement();
  const hitName = hitReward ? hitReward.name : state.lastRewardName;
  const target = selectedTarget();
  dom.rewardGrid.innerHTML = "";
  activeRelic().rewards.forEach((reward) => {
    const itemChance = chanceForReward(reward.rarity, refinement);
    const card = document.createElement("article");
    const hit = hitName === reward.name ? " hit" : "";
    const targetClass = target.name === reward.item ? " target" : "";
    card.className = `reward-card ${reward.rarity}${hit}${targetClass}`;
    card.dataset.rarity = reward.rarity;
    card.innerHTML = `
      <strong>${reward.name}</strong>
      <small>${reward.item} / ${itemChance}% / ${reward.ducats} Ducats</small>
    `;
    dom.rewardGrid.appendChild(card);
  });
}

function chanceForReward(rarity, refinement) {
  if (rarity === "common") return (refinement.odds.common / 3).toFixed(2);
  if (rarity === "uncommon") return (refinement.odds.uncommon / 2).toFixed(2);
  return refinement.odds.rare.toFixed(2);
}

function renderRefinements() {
  dom.refinementButtons.innerHTML = "";
  Object.entries(refinements).forEach(([name, config]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = name === state.selectedRefinement ? "active" : "";
    button.textContent = `${name} ${config.odds.rare}%`;
    button.addEventListener("click", () => {
      state.selectedRefinement = name;
      setResultNeutral(`${name} relic selected`);
      render();
    });
    dom.refinementButtons.appendChild(button);
  });
  dom.traceCostLabel.textContent = `${activeRefinement().traceCost} traces`;
}

function renderRarityButtons() {
  dom.rarityButtons.innerHTML = "";
  ["common", "uncommon", "rare"].forEach((rarity) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = rarity === state.betRarity ? "active" : "";
    button.textContent = `${capitalize(rarity)} ${formatMultiplier(activeRefinement().payouts[rarity])}`;
    button.addEventListener("click", () => {
      state.betRarity = rarity;
      setResultNeutral(`${capitalize(rarity)} wager armed`);
      render();
    });
    dom.rarityButtons.appendChild(button);
  });
  dom.payoutLabel.textContent = formatMultiplier(activeRefinement().payouts[state.betRarity]);
}

function renderStake() {
  const maxStake = Math.max(500, Math.min(25000, Math.floor(state.credits / 500) * 500 || 500));
  dom.stakeRange.max = String(maxStake);
  if (state.wager > maxStake) state.wager = maxStake;
  dom.stakeRange.value = String(state.wager);
  dom.stakeLabel.textContent = `${formatNumber(state.wager)} credits`;

  dom.chipButtons.innerHTML = "";
  [500, 1000, 2500, 5000, 10000].forEach((amount) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = state.wager === amount ? "active" : "";
    button.textContent = formatNumber(amount);
    button.disabled = amount > maxStake;
    button.addEventListener("click", () => {
      state.wager = amount;
      render();
    });
    dom.chipButtons.appendChild(button);
  });
}

function renderOdds() {
  const refinement = activeRefinement();
  dom.oddsBoard.innerHTML = "";
  Object.entries(refinement.odds).forEach(([rarity, chance]) => {
    const row = document.createElement("div");
    row.className = "odds-row";
    row.innerHTML = `
      <span>${capitalize(rarity)}</span>
      <div class="odds-track"><div class="odds-fill ${rarity}" style="width: ${chance}%"></div></div>
      <strong>${chance}%</strong>
    `;
    dom.oddsBoard.appendChild(row);
  });
}

function renderRunStats() {
  dom.cracksValue.textContent = formatNumber(state.cracks);
  dom.streakValue.textContent = formatNumber(state.streak);
  dom.bestValue.textContent = formatNumber(state.bestStreak);
  dom.lastValue.textContent = state.last;
}

function renderInventory() {
  const entries = Object.entries(state.inventory)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);

  if (!entries.length) {
    dom.inventoryList.innerHTML = `<div class="inventory-item"><span>No Prime parts yet</span><strong>0</strong></div>`;
    return;
  }

  dom.inventoryList.innerHTML = "";
  entries.forEach(([name, count]) => {
    const item = document.createElement("div");
    item.className = "inventory-item";
    item.innerHTML = `<span>${name}</span><strong>x${count}</strong>`;
    dom.inventoryList.appendChild(item);
  });
}

function renderLedger() {
  if (!state.ledger.length) {
    dom.ledgerList.innerHTML = `<li>Cephalon waiting for the first crack.</li>`;
    return;
  }

  dom.ledgerList.innerHTML = "";
  state.ledger.slice(0, 12).forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = entry;
    dom.ledgerList.appendChild(li);
  });
}

function updateActionState() {
  const refinement = activeRefinement();
  dom.crackButton.disabled = isCracking || state.credits < state.wager || state.traces < refinement.traceCost;
  dom.baroButton.disabled = state.ducats < 25 || isCracking;
  dom.cacheButton.disabled = isCracking || (state.credits >= 500 && state.traces >= 25);
}

function crackRelic() {
  if (isCracking) return;

  const refinement = activeRefinement();
  if (state.credits < state.wager) {
    setResultNeutral("Need more credits");
    return;
  }
  if (state.traces < refinement.traceCost) {
    setResultNeutral("Need more Void Traces");
    return;
  }

  isCracking = true;
  state.credits -= state.wager;
  state.traces -= refinement.traceCost;
  dom.relicStage.classList.add("cracking");
  dom.crackButton.disabled = true;

  let flickers = 0;
  const flickerTimer = window.setInterval(() => {
    const flickerReward = activeRelic().rewards[Math.floor(Math.random() * activeRelic().rewards.length)];
    dom.resultCard.className = `result-card ${flickerReward.rarity}`;
    dom.resultRarity.textContent = `${capitalize(flickerReward.rarity)} Flicker`;
    dom.resultName.textContent = flickerReward.name;
    dom.resultPayout.textContent = "Void fissure unstable";
    flickers += 1;
    if (flickers > 10) {
      window.clearInterval(flickerTimer);
      settleCrack();
    }
  }, 70);

  renderWallet();
}

function settleCrack() {
  const refinement = activeRefinement();
  const rarity = rollRarity(refinement.odds);
  const reward = rollReward(rarity);
  const matched = rarity === state.betRarity;
  const multiplier = refinement.payouts[state.betRarity];

  const result = {
    reward,
    matched,
    creditPayout: matched ? Math.round(state.wager * multiplier) : 0,
    ducats: reward.ducats,
    endo: rarity === "rare" ? 300 : rarity === "uncommon" ? 125 : 45,
    kuva: rarity === "rare" ? 450 : 0,
    traceBonus: rarity === "rare" ? 18 : rarity === "uncommon" ? 8 : 3,
    notes: []
  };

  if (Math.random() < 0.22) {
    const event = randomEvents[Math.floor(Math.random() * randomEvents.length)];
    result.notes.push(event.name);
    event.apply(result);
  }

  state.credits += result.creditPayout;
  state.ducats += result.ducats;
  state.endo += result.endo;
  state.kuva += result.kuva;
  state.traces += result.traceBonus;
  state.cracks += 1;
  state.streak = matched ? state.streak + 1 : 0;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.last = matched ? "Win" : "Loss";
  state.lastRewardName = reward.name;
  state.inventory[reward.name] = (state.inventory[reward.name] || 0) + 1;

  const sign = matched ? "+" : "-";
  const settled = matched
    ? `${sign}${formatNumber(result.creditPayout - state.wager)} credits`
    : `${sign}${formatNumber(state.wager)} credits`;
  const notes = result.notes.length ? ` ${result.notes.join(" ")}` : "";
  state.ledger.unshift(
    `<strong>${activeRelic().name}</strong> cracked ${capitalize(rarity)}: ${reward.name}. ${settled}. +${result.ducats} Ducats, +${result.traceBonus} traces.${notes}`
  );
  state.ledger = state.ledger.slice(0, 24);

  dom.relicStage.classList.remove("cracking");
  dom.resultCard.className = `result-card ${rarity}`;
  dom.resultRarity.textContent = `${capitalize(rarity)} ${matched ? "Hit" : "Miss"}`;
  dom.resultName.textContent = reward.name;
  dom.resultPayout.textContent = matched
    ? `Paid ${formatNumber(result.creditPayout)} credits at ${formatMultiplier(multiplier)}`
    : `Wager missed; kept ${result.ducats} Ducats and ${result.traceBonus} traces`;

  isCracking = false;
  renderRewards(reward);
  render();
}

function rollRarity(odds) {
  const roll = Math.random() * 100;
  if (roll < odds.rare) return "rare";
  if (roll < odds.rare + odds.uncommon) return "uncommon";
  return "common";
}

function rollReward(rarity) {
  const pool = activeRelic().rewards.filter((reward) => reward.rarity === rarity);
  return pool[Math.floor(Math.random() * pool.length)];
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function tradeDucats() {
  if (state.ducats < 25) return;
  const bundles = Math.floor(state.ducats / 25);
  const credits = bundles * 6500;
  state.ducats -= bundles * 25;
  state.credits += credits;
  state.last = "Trade";
  state.ledger.unshift(`<strong>Baro exchange</strong>: ${bundles * 25} Ducats became ${formatNumber(credits)} credits.`);
  render();
}

function claimCache() {
  if (state.credits >= 500 && state.traces >= 25) return;
  state.credits += 12000;
  state.traces += 25;
  state.last = "Cache";
  state.streak = 0;
  state.ledger.unshift("<strong>Syndicate Cache</strong>: +12,000 credits and +25 Void Traces.");
  render();
}

function resetRun() {
  const ok = window.confirm("Reset this Void Wager run?");
  if (!ok) return;
  state = { ...initialState, inventory: {}, ledger: [] };
  setResultNeutral();
  render();
}

function bindEvents() {
  dom.targetFilter.addEventListener("change", (event) => {
    state.targetFilter = event.target.value;
    const visible = filteredRelics();
    if (visible.length) state.selectedRelicId = visible[0].id;
    setResultNeutral(`${selectedTarget().name} filter armed`);
    render();
  });
  dom.stakeRange.addEventListener("input", (event) => {
    state.wager = Number(event.target.value);
    renderStake();
    updateActionState();
    saveState();
  });
  dom.crackButton.addEventListener("click", crackRelic);
  dom.baroButton.addEventListener("click", tradeDucats);
  dom.cacheButton.addEventListener("click", claimCache);
  dom.resetButton.addEventListener("click", resetRun);
}

function startVoidCanvas() {
  const canvas = document.querySelector("#voidCanvas");
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 96 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.8 + 0.4,
    speed: Math.random() * 0.0008 + 0.00025,
    hue: Math.random() > 0.55 ? "gold" : "teal"
  }));

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = "screen";
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += Math.sin((Date.now() * particle.speed + particle.r) * 0.9) * 0.00025;
      if (particle.y < -0.02) particle.y = 1.02;
      if (particle.x > 1.02) particle.x = -0.02;
      if (particle.x < -0.02) particle.x = 1.02;

      const x = particle.x * window.innerWidth;
      const y = particle.y * window.innerHeight;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.r * 8);
      const color = particle.hue === "gold" ? "216, 173, 88" : "64, 214, 200";
      gradient.addColorStop(0, `rgba(${color}, 0.34)`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, particle.r * 8, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalCompositeOperation = "source-over";
    window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

bindEvents();
startVoidCanvas();
setResultNeutral();
render();
