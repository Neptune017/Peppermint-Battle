# Generated combat frame sheets

This folder is for new, card-specific transparent WebP sprite sheets. Existing SVG effects and the older `30FPS_FA*` examples remain untouched.

## Sheet format

- Use a regular grid with equal-size cells and transparent pixels around the effect.
- Describe a chronological animation from left to right, then top to bottom.
- Before generating a replacement, inspect that card's artwork and its existing SVG scene, recipe, and projectile profile. The card artwork is the authority for the character's weapon and unique props; the SVG scene is the authority for the action, projectile, impact, and timing.
- Preserve the specific weapon silhouette and decorative details whenever it appears. Keep the sheet focused on the same effect the SVG currently shows; don't replace it with a generic element or add unrelated props.
- Match the painted style of the card for weapons, props, and creatures. Give elemental effects such as fire and lightning more realistic motion and lighting.
- Give every Fighter its own attack art. Creatures without distinctive weapons or traits can share a simple elemental, bite, claw, or slash effect. Keep signature effects, such as Barfy and Meadsting's mead, distinct.
- Register each sheet under its card and cue in `combat-frame-sheet-manifest.js`.
- `mode: "impact"` pins a local effect at the source or target; `mode: "projectile"` moves only the projectile/weapon sheet along a target-dependent path; `mode: "scene"` animates a wider source-to-target composition and aims it at the target.
- Projectile paths support `trajectory: "direct"`, `"arc"`, or `"zigzag"`.
- `mode: "prop"` replaces a prop inside an existing scene. Amethyst's mirrors use this mode so the vector scene still computes both bounce points and all three beam segments from the target.
- Scene sheets can set `fitPath: true` to scale their source-to-target composition to each live target distance before aiming it down that line.
- Set `width`, `height`, `fps`, grid columns/rows, and an optional `duration` to control the result.
- Set `impactFrame` to the cell where a traveling attack meets its target so the visual impact and card break stay synchronized.

## Reverting an effect

Each new sheet is opt-in. Set its registry entry's `enabled` to `false` or remove that entry to return to the existing SVG effect. The vector source stays in `combat-effects.js` and its related files.
