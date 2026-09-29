const CARD_TYPE = "home-connect-washer-card";
const VERSION = "1.1.0";

const WASHER_ART = `<svg class="washer-art" viewBox="0 0 280 340" role="img" aria-label="Illustration of a front-loading washing machine">
  <defs>
    <linearGradient id="washer-body" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#dce8f2"/></linearGradient>
    <linearGradient id="washer-glass" x1=".15" y1="0" x2=".85" y2="1"><stop stop-color="#b4e1ef"/><stop offset=".45" stop-color="#5c94b3"/><stop offset="1" stop-color="#193b56"/></linearGradient>
    <linearGradient id="washer-water" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#6de0df" stop-opacity=".8"/><stop offset="1" stop-color="#2b82bd" stop-opacity=".95"/></linearGradient>
    <radialGradient id="washer-highlight" cx=".24" cy=".18"><stop stop-color="#fff" stop-opacity=".84"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="washer-shadow" x="-.3" y="-.2" width="1.7" height="1.7"><feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#17334a" flood-opacity=".2"/></filter>
    <clipPath id="washer-window"><circle cx="140" cy="210" r="64"/></clipPath>
  </defs>
  <ellipse cx="140" cy="321" rx="95" ry="10" fill="#23394c" opacity=".11"/>
  <g filter="url(#washer-shadow)">
    <path d="M74 26h132a19 19 0 0 1 19 19v258a19 19 0 0 1-19 19H74a19 19 0 0 1-19-19V45a19 19 0 0 1 19-19Z" fill="url(#washer-body)" stroke="#c4d2de" stroke-width="2"/>
    <path d="M55 75h170v5H55z" fill="#cbd9e4"/>
    <rect x="71" y="43" width="47" height="20" rx="5" fill="#eef4f8" stroke="#cbd8e2"/>
    <path d="M81 49h27M81 54h20M81 59h23" stroke="#a8bac8" stroke-width="2" stroke-linecap="round"/>
    <rect x="138" y="42" width="55" height="23" rx="6" fill="#142d42"/>
    <rect x="144" y="47" width="43" height="13" rx="3" fill="#8ef4df" opacity=".92"/>
    <path d="M149 52h12M149 56h7M169 52h12" stroke="#287789" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="209" cy="53" r="10" fill="#e9f0f5" stroke="#c1cfdb"/>
    <path d="M209 47v6l4 3" fill="none" stroke="#71899b" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="140" cy="210" r="79" fill="#e8f0f5" stroke="#acbecb" stroke-width="5"/>
    <circle cx="140" cy="210" r="69" fill="#19354b"/>
    <g clip-path="url(#washer-window)">
      <circle cx="140" cy="210" r="64" fill="url(#washer-glass)"/>
      <g class="drum-spin">
        <path d="M69 236c20-11 38-11 57 0 17 10 35 11 55-1 19-11 35-9 53 0v45H69z" fill="url(#washer-water)" opacity=".9"/>
        <path d="M72 235c19-11 36-11 55 0 18 10 35 11 54-1 19-11 36-9 51 0" fill="none" stroke="#c3ffff" stroke-opacity=".85" stroke-width="3"/>
        <ellipse cx="111" cy="174" rx="45" ry="29" fill="url(#washer-highlight)"/>
        <circle class="bubble bubble-a" cx="116" cy="222" r="5" fill="#e8ffff" fill-opacity=".7"/>
        <circle class="bubble bubble-b" cx="151" cy="242" r="3" fill="#e8ffff" fill-opacity=".65"/>
        <circle class="bubble bubble-c" cx="171" cy="218" r="4" fill="#e8ffff" fill-opacity=".6"/>
        <path d="M92 199c17 9 39 10 63 1" fill="none" stroke="#c6fbff" stroke-opacity=".6" stroke-width="2"/>
      </g>
    </g>
    <circle cx="140" cy="210" r="67" fill="none" stroke="#f5f8fa" stroke-opacity=".85" stroke-width="3"/>
    <rect x="96" y="300" width="88" height="5" rx="2.5" fill="#c4d2de"/>
    <circle cx="85" cy="311" r="3" fill="#9caebb"/><circle cx="195" cy="311" r="3" fill="#9caebb"/>
  </g>
</svg>`;

const STYLE = `
  :host{display:block;color:var(--primary-text-color)}
  ha-card{overflow:hidden;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:26px;background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--ha-card-box-shadow,0 16px 44px rgba(18,40,59,.11))}
  .shell{position:relative;padding:clamp(18px,3vw,28px);background:radial-gradient(ellipse at 15% 100%,color-mix(in srgb,var(--primary-color) 9%,transparent),transparent 48%)}
  .head{display:flex;align-items:center;justify-content:space-between;gap:14px}.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:14px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font-size:20px}.eyebrow{color:var(--secondary-text-color);font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.title{margin:3px 0 0;overflow:hidden;font-size:clamp(18px,2.6vw,23px);letter-spacing:-.035em;text-overflow:ellipsis;white-space:nowrap}
  .state-pill{display:flex;align-items:center;gap:8px;padding:8px 11px;border-radius:999px;background:var(--secondary-background-color);color:var(--secondary-text-color);font-size:11px;font-weight:750;white-space:nowrap}.state-dot{width:8px;height:8px;border-radius:50%;background:currentColor}.state-pill.running{color:var(--success-color,#218a72)}.state-pill.running .state-dot{box-shadow:0 0 0 4px color-mix(in srgb,currentColor 17%,transparent)}.state-pill.warning{color:var(--warning-color,#b57500)}.state-pill.error{color:var(--error-color,#d34444)}
  .hero{display:grid;grid-template-columns:minmax(170px,.82fr) minmax(0,1.18fr);align-items:center;gap:clamp(12px,3vw,28px);margin-top:8px}.machine{position:relative;display:grid;place-items:center;min-height:250px}.washer-art{display:block;width:min(100%,250px);height:auto;overflow:visible}.drum-spin{transform-box:view-box;transform-origin:140px 210px}.machine.spinning .drum-spin{animation:drum-rotation 4s linear infinite}.bubble{opacity:.55}.machine.spinning .bubble{animation:bubble-rise 2s ease-in-out infinite}.machine.spinning .bubble-b{animation-delay:-.7s}.machine.spinning .bubble-c{animation-delay:-1.3s}.machine.spinning .washer-art{animation:machine-hum 1.2s ease-in-out infinite}
  .hero-info{min-width:0;padding:8px 0}.state-label{color:var(--secondary-text-color);font-size:12px;font-weight:650}.operation{margin:5px 0 0;font-size:clamp(25px,4.5vw,40px);line-height:1.05;letter-spacing:-.055em;font-weight:780}.program{margin-top:10px;overflow:hidden;color:var(--secondary-text-color);font-size:14px;font-weight:650;text-overflow:ellipsis;white-space:nowrap}.progress-block{margin-top:24px}.progress-meta{display:flex;justify-content:space-between;gap:12px;margin-bottom:8px;font-size:12px}.progress-caption{color:var(--secondary-text-color)}.progress-value{font-weight:760;font-variant-numeric:tabular-nums}.track{height:9px;overflow:hidden;border-radius:99px;background:var(--secondary-background-color)}.bar{height:100%;width:var(--progress);border-radius:inherit;background:linear-gradient(90deg,#42b8bd,#5d91e7);transition:width .4s ease}
  .info-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:16px}.info{min-width:0;padding:11px 12px;border:1px solid color-mix(in srgb,var(--divider-color) 55%,transparent);border-radius:15px;background:color-mix(in srgb,var(--card-background-color,#fff) 78%,var(--secondary-background-color))}.info-label{color:var(--secondary-text-color);font-size:10px;font-weight:720;letter-spacing:.06em;text-transform:uppercase}.info-value{display:block;margin-top:5px;overflow:hidden;font-size:13px;font-weight:730;text-overflow:ellipsis;white-space:nowrap}.info-value.good{color:var(--success-color,#218a72)}.info-value.bad{color:var(--warning-color,#b57500)}
  .footer{display:flex;justify-content:space-between;gap:10px;margin-top:17px;padding-top:12px;border-top:1px solid var(--divider-color);color:var(--secondary-text-color);font-size:10px}.footer span:last-child{text-align:right}
  .extras{display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;margin-top:16px;padding-top:15px;border-top:1px solid var(--divider-color)}.idos{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.idos-title{width:100%;color:var(--secondary-text-color);font-size:10px;font-weight:760;letter-spacing:.08em;text-transform:uppercase}.idos-chip{display:flex;align-items:center;gap:7px;padding:8px 10px;border-radius:12px;background:var(--secondary-background-color);font-size:11px;font-weight:700}.idos-dot{width:7px;height:7px;border-radius:50%;background:var(--success-color,#218a72)}.idos-chip.low{color:var(--warning-color,#b57500)}.idos-chip.low .idos-dot{background:currentColor}.idos-chip.unknown{color:var(--secondary-text-color)}.idos-chip.unknown .idos-dot{background:currentColor}.actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:8px}.action-btn{min-height:38px;padding:0 14px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color,#fff);color:var(--primary-text-color);font:inherit;font-size:12px;font-weight:760;cursor:pointer}.action-btn:hover:not(:disabled){border-color:var(--primary-color);color:var(--primary-color)}.action-btn.stop{color:var(--error-color,#d34444)}.action-btn.confirm{border-color:var(--error-color,#d34444);background:var(--error-color,#d34444);color:#fff}.action-btn:disabled{opacity:.42;cursor:not-allowed}.action-error{width:100%;color:var(--error-color,#d34444);font-size:11px;text-align:right}
  @keyframes bubble-rise{0%,100%{transform:translateY(4px);opacity:.4}50%{transform:translateY(-10px);opacity:1}}@keyframes drum-rotation{to{transform:rotate(360deg)}}@keyframes machine-hum{0%,100%{transform:translateX(0)}25%{transform:translateX(1px)}75%{transform:translateX(-1px)}}
  @media(max-width:520px){.shell{padding:17px}.hero{grid-template-columns:120px minmax(0,1fr);gap:12px;margin-top:10px}.machine{min-height:185px}.washer-art{width:155px}.operation{font-size:27px}.progress-block{margin-top:17px}.info-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.state-pill{padding:7px 9px;font-size:10px}.extras{grid-template-columns:1fr}.actions{justify-content:flex-start}.action-error{text-align:left}}
  @media(max-width:360px){.hero{grid-template-columns:1fr}.machine{min-height:155px}.washer-art{width:150px}.hero-info{padding:0}.operation{font-size:30px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
`;

const CONFIG_LABELS = {
  title: "Card title",
  operation_state_entity: "Operation state",
  connectivity_entity: "Connectivity",
  progress_entity: "Program progress (%)",
  finish_time_entity: "Program finish time",
  door_entity: "Door state",
  program_entity: "Active or selected program",
  program_finished_entity: "Program finished indicator",
  remote_control_entity: "Remote control available",
  remote_start_entity: "Remote start available",
  temperature_entity: "Selected temperature",
  spin_speed_entity: "Selected spin speed",
  stop_button_entity: "Stop program button",
  power_switch_entity: "Appliance power switch",
  idos_1_sensor_entity: "i-Dos 1 low-level alert",
  idos_2_sensor_entity: "i-Dos 2 low-level alert",
};

const SCHEMA = [
  { name: "title", selector: { text: {} } },
  { type: "grid", name: "", schema: [
    { name: "operation_state_entity", selector: { entity: { domain: "sensor" } } },
    { name: "connectivity_entity", selector: { entity: { domain: "binary_sensor" } } },
    { name: "progress_entity", selector: { entity: { domain: "sensor" } } },
    { name: "finish_time_entity", selector: { entity: { domain: "sensor" } } },
    { name: "door_entity", selector: { entity: {} } },
    { name: "program_entity", selector: { entity: {} } },
    { name: "program_finished_entity", selector: { entity: { domain: "sensor" } } },
    { name: "remote_control_entity", selector: { entity: { domain: "binary_sensor" } } },
    { name: "remote_start_entity", selector: { entity: { domain: "binary_sensor" } } },
    { name: "temperature_entity", selector: { entity: { domain: "select" } } },
    { name: "spin_speed_entity", selector: { entity: { domain: "select" } } },
    { name: "stop_button_entity", selector: { entity: { domain: "button" } } },
    { name: "power_switch_entity", selector: { entity: { domain: "switch" } } },
    { name: "idos_1_sensor_entity", selector: { entity: { domain: "sensor" } } },
    { name: "idos_2_sensor_entity", selector: { entity: { domain: "sensor" } } },
  ] },
];

function emit(target, name, detail) {
  const event = new Event(name, { bubbles: true, composed: true });
  event.detail = detail;
  target.dispatchEvent(event);
}

class HomeConnectWasherCard extends HTMLElement {
  static getConfigForm() {
    return {
      schema: SCHEMA,
      computeLabel: (field) => CONFIG_LABELS[field.name],
      computeHelper: (field) => field.name === "door_entity" || field.name === "program_entity" ? "Choose the matching entity from the appliance you want to display." : undefined,
    };
  }

  static getStubConfig() { return { title: "Washing machine" }; }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Provide a valid Home Connect washer card configuration.");
    this._config = { title: "Washing machine", ...config };
    this._root ??= this.attachShadow({ mode: "open" });
    this.render();
  }

  set hass(hass) { this._hass = hass; this.render(); }
  getCardSize() { return 5; }
  getGridOptions() { return { rows: 5, columns: 6, min_rows: 4, max_rows: 8 }; }

  state(entityKey) {
    const entityId = this._config[entityKey];
    return entityId ? this._hass?.states?.[entityId] : undefined;
  }

  escape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  stateText(entityKey) {
    const entity = this.state(entityKey);
    if (!entity || ["unknown", "unavailable", "none", ""].includes(String(entity.state).toLowerCase())) return null;
    return String(entity.state);
  }

  operation() {
    const value = (this.stateText("operation_state_entity") || "").toLowerCase().replace(/[^a-z]/g, "");
    const labels = {
      inactive: ["Standby", ""], ready: ["Ready", ""], delayedstart: ["Scheduled", ""],
      run: ["Washing", "running"], pause: ["Paused", "warning"], actionrequired: ["Attention needed", "warning"],
      finished: ["Cycle complete", "running"], error: ["Error", "error"], aborting: ["Stopping", "warning"],
    };
    return labels[value] || [value ? this.pretty(value) : "Status unavailable", value ? "" : "warning"];
  }

  pretty(value) {
    let name = String(value ?? "").replace(/^laundry_care_washer_program_/, "").replace(/^laundry_care_washer_enum_type_/, "");
    const known = {
      cotton_eco_4060: "Cottons Eco 40–60", cotton: "Cottons", easy_care: "Easy care", mix: "Mixed load",
      delicates_silk: "Delicates / silk", wool: "Wool", shirts_blouses: "Shirts / blouses", outdoor: "Outdoor",
      dark_wash: "Dark wash", auto_30: "Automatic 30°", auto_40: "Automatic 40°", drum_clean: "Drum clean",
      sport_fitness: "Sportswear", sensitive: "Sensitive", super_153045_super_1530: "Super 15/30 min",
      temperature_g_c_20: "20°C", temperature_g_c_30: "30°C", temperature_g_c_40: "40°C", temperature_g_c_50: "50°C", temperature_g_c_60: "60°C", temperature_cold: "Cold",
      spin_speed_r_p_m_400: "400 rpm", spin_speed_r_p_m_600: "600 rpm", spin_speed_r_p_m_700: "700 rpm", spin_speed_r_p_m_800: "800 rpm", spin_speed_r_p_m_900: "900 rpm", spin_speed_r_p_m_1000: "1000 rpm", spin_speed_r_p_m_1200: "1200 rpm", spin_speed_r_p_m_1400: "1400 rpm", spin_speed_r_p_m_1600: "1600 rpm",
    };
    const canonical = name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
    if (known[canonical]) return known[canonical];
    name = name.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    return name || "No program selected";
  }

  connectivity() {
    const value = (this.stateText("connectivity_entity") || "").toLowerCase();
    if (!value) return null;
    return ["on", "connected", "online", "true"].includes(value);
  }

  idosStatus(entityKey) {
    const value = (this.stateText(entityKey) || "").toLowerCase();
    if (!value) return null;
    if (value === "present") return { text: "Low · refill", className: "low" };
    if (value === "confirmed") return { text: "Low · acknowledged", className: "low" };
    if (value === "off") return { text: "Level OK", className: "" };
    return { text: this.pretty(value), className: "unknown" };
  }

  doorInfo() {
    const value = (this.stateText("door_entity") || "").toLowerCase();
    if (!value) return null;
    if (["open", "unlocked"].includes(value)) return { text: "Open", className: "bad" };
    if (["locked"].includes(value)) return { text: "Locked", className: "good" };
    if (["closed", "off", "on"].includes(value)) return { text: value === "on" ? "Closed" : "Closed", className: "good" };
    return { text: this.pretty(value), className: "" };
  }

  finishTime() {
    const value = this.stateText("finish_time_entity");
    if (!value) return null;
    const timestamp = Date.parse(value);
    if (!Number.isFinite(timestamp)) return this.pretty(value);
    return new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(new Date(timestamp));
  }

  render() {
    if (!this._root || !this._config || !this._hass) return;
    const [operationLabel, operationClass] = this.operation();
    const connected = this.connectivity();
    const statusLabel = connected === false ? "Offline" : operationLabel;
    const statusClass = connected === false ? "error" : operationClass;
    const program = this.stateText("program_entity");
    const progressRaw = this.stateText("progress_entity");
    let progress = progressRaw === null ? null : Number.parseFloat(progressRaw);
    if (!Number.isFinite(progress)) progress = null;
    if (progress !== null) progress = Math.max(0, Math.min(100, progress));
    if (progress === null && (this.stateText("operation_state_entity") || "").toLowerCase() === "finished") progress = 100;
    const isRunning = (this.stateText("operation_state_entity") || "").toLowerCase() === "run";
    const hasProgress = progress !== null;
    const door = this.doorInfo();
    const remoteControl = this.stateText("remote_control_entity");
    const remoteStart = this.stateText("remote_start_entity");
    const finished = (this.stateText("program_finished_entity") || "").toLowerCase();
    const finishedText = ["confirmed", "present", "on"].includes(finished) ? "Laundry ready" : null;
    const temperature = this.stateText("temperature_entity");
    const spinSpeed = this.stateText("spin_speed_entity");
    const finish = this.finishTime();
    const idos1 = this.idosStatus("idos_1_sensor_entity");
    const idos2 = this.idosStatus("idos_2_sensor_entity");
    const powerEntityId = this._config.power_switch_entity;
    const powerState = powerEntityId ? this._hass.states?.[powerEntityId]?.state : null;
    const powerAvailable = ["on", "off"].includes(powerState);
    const stopEntityId = this._config.stop_button_entity;
    const canStop = Boolean(stopEntityId && ["run", "pause", "delayedstart", "actionrequired"].includes((this.stateText("operation_state_entity") || "").toLowerCase()));
    const actionMode = this._actionMode || "";
    const actionBusy = Boolean(this._actionBusy);
    const infoItems = [
      door && { label: "Door", value: door.text, className: door.className },
      finish && { label: "Finish", value: finish, className: "" },
      remoteControl && { label: "Remote control", value: ["on", "true"].includes(remoteControl.toLowerCase()) ? "Available" : "Local only", className: ["on", "true"].includes(remoteControl.toLowerCase()) ? "good" : "" },
      remoteStart && { label: "Remote start", value: ["on", "true"].includes(remoteStart.toLowerCase()) ? "Enabled" : "Not enabled", className: ["on", "true"].includes(remoteStart.toLowerCase()) ? "good" : "bad" },
      temperature && { label: "Temperature", value: this.pretty(temperature), className: "" },
      spinSpeed && { label: "Spin", value: this.pretty(spinSpeed), className: "" },
    ].filter(Boolean);
    const remainingCopy = isRunning ? "Cycle in progress · time not reported" : finishedText || (operationLabel === "Standby" || operationLabel === "Ready" ? "Ready for the next cycle" : "Live appliance status");
    const progressCopy = hasProgress ? `${Math.round(progress)}%` : progress === null ? "—" : `${progress}%`;

    this._root.innerHTML = `<style>${STYLE}</style><ha-card><div class="shell">
      <header class="head"><div class="brand"><div class="brand-mark" aria-hidden="true">⌁</div><div style="min-width:0"><div class="eyebrow">Home Connect · Laundry</div><h2 class="title">${this.escape(this._config.title)}</h2></div></div><div class="state-pill ${statusClass}"><span class="state-dot"></span>${this.escape(statusLabel)}</div></header>
      <main class="hero"><div class="machine ${isRunning ? "spinning" : ""}">${WASHER_ART}</div><section class="hero-info"><div class="state-label">WASH CYCLE</div><div class="operation">${this.escape(operationLabel)}</div><div class="program">${this.escape(program ? this.pretty(program) : "No active program")}</div><div class="progress-block"><div class="progress-meta"><span class="progress-caption">${this.escape(remainingCopy)}</span><span class="progress-value">${hasProgress ? progressCopy : "—"}</span></div><div class="track"><div class="bar" style="--progress:${hasProgress ? progress : progress === 100 ? 100 : 0}%"></div></div></div></section></main>
      ${infoItems.length ? `<section class="info-grid">${infoItems.map((item) => `<div class="info"><span class="info-label">${this.escape(item.label)}</span><span class="info-value ${item.className}">${this.escape(item.value)}</span></div>`).join("")}</section>` : ""}
      ${(idos1 || idos2 || powerEntityId || stopEntityId) ? `<section class="extras">${idos1 || idos2 ? `<div class="idos"><span class="idos-title">i-Dos detergent</span>${[idos1 && { name: "i-Dos 1", ...idos1 }, idos2 && { name: "i-Dos 2", ...idos2 }].filter(Boolean).map((item) => `<span class="idos-chip ${item.className}"><i class="idos-dot"></i>${this.escape(item.name)} · ${this.escape(item.text)}</span>`).join("")}</div>` : "<div></div>"}<div class="actions">${stopEntityId ? (actionMode === "stop" ? `<button class="action-btn confirm" data-confirm="stop" ${!canStop || actionBusy ? "disabled" : ""}>${actionBusy ? "Sending…" : "Confirm stop"}</button><button class="action-btn" data-cancel>Cancel</button>` : `<button class="action-btn stop" data-action="stop" ${!canStop || actionBusy ? "disabled" : ""}>Stop</button>`) : ""}${powerEntityId ? (actionMode === "power" ? `<button class="action-btn confirm" data-confirm="power" ${!powerAvailable || actionBusy ? "disabled" : ""}>${actionBusy ? "Sending…" : `Confirm power ${powerState === "on" ? "off" : "on"}`}</button><button class="action-btn" data-cancel>Cancel</button>` : `<button class="action-btn" data-action="power" ${!powerAvailable || actionBusy ? "disabled" : ""}>Power ${powerState === "on" ? "Off" : "On"}</button>`) : ""}${this._actionError ? `<span class="action-error">${this.escape(this._actionError)}</span>` : ""}</div></section>` : ""}
      <footer class="footer"><span>${connected === false ? "Appliance disconnected" : connected === true ? "Connected to Home Assistant" : "Home Connect appliance"}</span><span>${this.escape(remainingCopy)}</span></footer>
    </div></ha-card>`;
    this._root.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => { this._actionMode = button.dataset.action; this._actionError = ""; this.render(); }));
    this._root.querySelectorAll("[data-cancel]").forEach((button) => button.addEventListener("click", () => { this._actionMode = ""; this._actionError = ""; this.render(); }));
    this._root.querySelectorAll("[data-confirm]").forEach((button) => button.addEventListener("click", () => this.performAction(button.dataset.confirm)));
  }

  async performAction(action) {
    if (!this._hass || this._actionBusy) return;
    const operation = (this.stateText("operation_state_entity") || "").toLowerCase();
    if (action === "stop") {
      if (!this._config.stop_button_entity || !["run", "pause", "delayedstart", "actionrequired"].includes(operation)) return;
      this._actionBusy = true;
      this.render();
      try {
        await this._hass.callService("button", "press", { entity_id: this._config.stop_button_entity });
        this._actionMode = "";
        this._actionError = "";
      } catch (error) {
        this._actionError = "Stop command failed. Check Home Assistant.";
      } finally {
        this._actionBusy = false;
        this.render();
      }
      return;
    }
    if (action === "power") {
      const entityId = this._config.power_switch_entity;
      const current = entityId ? this._hass.states?.[entityId]?.state : null;
      if (!entityId || !["on", "off"].includes(current)) return;
      this._actionBusy = true;
      this.render();
      try {
        await this._hass.callService("switch", current === "on" ? "turn_off" : "turn_on", { entity_id: entityId });
        this._actionMode = "";
        this._actionError = "";
      } catch (error) {
        this._actionError = "Power command failed. Check Home Assistant.";
      } finally {
        this._actionBusy = false;
        this.render();
      }
    }
  }
}

if (!customElements.get(CARD_TYPE)) customElements.define(CARD_TYPE, HomeConnectWasherCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === CARD_TYPE)) {
  window.customCards.push({ type: CARD_TYPE, name: "Home Connect Washer", description: "A visual status and control card for Home Connect washing machines", preview: true, version: VERSION, documentationURL: "https://github.com/Liionboy/lovelace-home-connect-washer-card" });
}

console.info(`%c HOME CONNECT WASHER CARD %c ${VERSION} `, "color:#fff;background:#0875c9;font-weight:700", "color:#0875c9;background:#fff;font-weight:700");
