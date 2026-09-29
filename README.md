# Home Connect Washer Card

A polished, read-only Home Assistant Lovelace card for Home Connect washing machines. It pairs a custom vector illustration of a front-loading washer with operation state, selected program, cycle progress, finish time, door state, connectivity, remote-control readiness, temperature, and spin speed—only when those entities are available.

The card does not start, stop, pause, or configure the appliance. It makes no network calls and contains no credentials or personal entity IDs.

## Features

- Original inline SVG washing-machine artwork; no external image or asset dependency.
- Lightweight motion while a wash cycle is running, respecting reduced-motion preferences.
- Operation-state mapping for Home Connect washer states such as `ready`, `run`, `pause`, `finished`, and `error`.
- Progress bar, completion time, door state, connectivity, remote-control/start indicators, temperature, and spin speed.
- Native Home Assistant selectors in the card editor; each user chooses their own entities.
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
```

The Home Connect integration's entity set depends on the appliance and firmware. For example, progress and finish time can be unavailable while the machine is idle; the card then shows an idle/standby view rather than a false zero-percent cycle.

## Manual resource install

Copy `dist/home-connect-washer-card.js` to `/config/www/home-connect-washer-card.js`, add `/local/home-connect-washer-card.js` as a JavaScript module resource in **Settings → Dashboards → Resources**, refresh the browser, and use `type: custom:home-connect-washer-card`.

## Development

Dependency-free ES module:

```sh
npm run check
```

## License

MIT. See [LICENSE](LICENSE).
