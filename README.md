# Home Connect Washer Card

A polished Home Assistant Lovelace card for Home Connect washing machines. It pairs a custom animated vector illustration of a front-loading washer with operation state, selected program, cycle progress, finish time, door state, connectivity, remote-control readiness, temperature, spin speed, i-Dos refill alerts, and optional appliance controls.

The card makes no network calls and contains no credentials or personal entity IDs. Stop and Power controls are optional, must be mapped to the user's own entities, and require a second confirmation tap before Home Assistant is called.

## Features

- Original inline SVG washing-machine artwork; no external image or asset dependency.
- Visible rotating drum, bubbles, and subtle machine motion only while a wash cycle is running; respects reduced-motion preferences.
- Operation-state mapping for Home Connect washer states such as `ready`, `run`, `pause`, `finished`, and `error`.
- Progress bar, completion time, door state, connectivity, remote-control/start indicators, temperature, and spin speed.
- Native Home Assistant selectors in the card editor; each user chooses their own entities.
- Optional Stop and Power buttons, with explicit confirmation before calling Home Assistant's standard `button.press`, `switch.turn_on`, or `switch.turn_off` services.
- Optional i-Dos 1/2 low-level alert sensors. Home Connect exposes these as event enums—not percentages—so the card reports refill/acknowledgement status and does not invent a detergent gauge.
- Optional fields degrade gracefully when a washer model does not expose an entity.
- Responsive layout and Home Assistant light/dark theme colors.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/lovelace-home-connect-washer-card` with category **Dashboard**.
3. Install **Home Connect Washer Card** and refresh the browser.
4. Add the card to your dashboard and choose the Home Connect entities in the visual editor.

The repository is a HACS Dashboard plugin (Lovelace card), not a Home Assistant backend integration. The card editor uses the built-in `getConfigForm` API, available in Home Assistant 2026.6 and later.

## Configuration

The visual editor is recommended: choose the entities exposed for the washer in **Settings → Devices & services → Entities**. All entity fields are optional; map the ones your appliance provides.

Example only—replace every sample entity ID with one from your own Home Assistant:

```yaml
type: custom:home-connect-washer-card
title: Washing machine
operation_state_entity: sensor.my_washer_operation_state
connectivity_entity: binary_sensor.my_washer_connectivity
progress_entity: sensor.my_washer_program_progress
finish_time_entity: sensor.my_washer_program_finish_time
door_entity: sensor.my_washer_door
program_entity: select.my_washer_active_program
program_finished_entity: sensor.my_washer_program_finished
remote_control_entity: binary_sensor.my_washer_remote_control
remote_start_entity: binary_sensor.my_washer_remote_start
temperature_entity: select.my_washer_temperature
spin_speed_entity: select.my_washer_spin_speed
stop_button_entity: button.my_washer_stop_program
power_switch_entity: switch.my_washer_power
idos_1_sensor_entity: sensor.my_washer_idos_1_fill_level_alert
idos_2_sensor_entity: sensor.my_washer_idos_2_fill_level_alert
```

All entity IDs above are examples only; select your own entities in the editor. Stop is available while a cycle is running, paused, scheduled, or awaiting action. Both Stop and Power require a confirmation tap, and controls can be omitted by leaving their entity fields empty. Power off may interrupt an appliance; use it only when that is intended.

The Home Connect integration's entity set depends on the appliance and firmware. For example, progress and finish time can be unavailable while the machine is idle; the card then shows an idle/standby view rather than a false zero-percent cycle. i-Dos fill-level alerts use `present` (refill alert), `confirmed` (alert acknowledged), and `off` (no active alert); they do not represent a numeric fill percentage.

## Manual resource install

Copy `dist/home-connect-washer-card.js` to `/config/www/home-connect-washer-card.js`, add `/local/home-connect-washer-card.js` as a JavaScript module resource in **Settings → Dashboards → Resources**, refresh the browser, and use `type: custom:home-connect-washer-card`.

## Development

Dependency-free ES module (release 1.1.0):

```sh
npm run check
```

## License

MIT. See [LICENSE](LICENSE).
