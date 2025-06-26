
export interface Card {
  id: number;
  name: string;
  meaning_up: string;
  meaning_rev: string;
  ascii: string;
}

export const cards: Card[] = [
  {
    id: 0,
    name: 'The Fool',
    meaning_up: 'Beginnings, innocence, spontaneity, a free spirit',
    meaning_rev: 'Naivety, foolishness, recklessness, risk-taking',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|          |
|    ()    |
|   /||\   |
|   /  \   |
|          |
+----------+
`,
  },
  {
    id: 1,
    name: 'The Magician',
    meaning_up: 'Manifestation, resourcefulness, power, inspired action',
    meaning_rev: 'Manipulation, poor planning, untapped talents',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    /\    |
|   /  \   |
|  /____\  |
|   |  |   |
|          |
+----------+
`,
  },
  {
    id: 2,
    name: 'The High Priestess',
    meaning_up: 'Intuition, sacred knowledge, divine feminine, the subconscious mind',
    meaning_rev: 'Secrets, disconnected from intuition, withdrawal and silence',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    ()    |
|   /--\   |
|  /    \  |
|          |
|          |
+----------+
`,
  },
  {
    id: 3,
    name: 'The Empress',
    meaning_up: 'Femininity, beauty, nature, nurturing, abundance',
    meaning_rev: 'Creative block, dependence on others',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    ()    |
|   /\/\   |
|  /    \  |
| /______\ |
|          |
+----------+
`,
  },
  {
    id: 4,
    name: 'The Emperor',
    meaning_up: 'Authority, establishment, structure, a father figure',
    meaning_rev: 'Domination, excessive control, lack of discipline, inflexibility',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /--\   |
|  |    |  |
|  |____|  |
|   |  |   |
|          |
+----------+
`,
  },
  {
    id: 5,
    name: 'The Hierophant',
    meaning_up: 'Spiritual wisdom, religious beliefs, conformity, tradition, institutions',
    meaning_rev: 'Personal beliefs, freedom, challenging the status quo',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   +--+   |
|   |  |   |
|  -+--+-  |
|   |  |   |
|          |
+----------+
`,
  },
  {
    id: 6,
    name: 'The Lovers',
    meaning_up: 'Love, harmony, relationships, values alignment, choices',
    meaning_rev: 'Self-love, disharmony, imbalance, misalignment of values',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|  ()  ()  |
|  <3  <3  |
|   \/\/   |
|          |
|          |
+----------+
`,
  },
  {
    id: 7,
    name: 'The Chariot',
    meaning_up: 'Control, willpower, success, action, determination',
    meaning_rev: 'Self-discipline, opposition, lack of direction',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|  |----|  |
|  |    |  |
| o|----|o |
|  |    |  |
|          |
+----------+
`,
  },
  {
    id: 8,
    name: 'Strength',
    meaning_up: 'Strength, courage, persuasion, influence, compassion',
    meaning_rev: 'Inner strength, self-doubt, weakness, insecurity',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /\_    |
|  / o o\  |
| |  _  |  |
|  \___/   |
|          |
+----------+
`,
  },
  {
    id: 9,
    name: 'The Hermit',
    meaning_up: 'Soul-searching, introspection, being alone, inner guidance',
    meaning_rev: 'Isolation, loneliness, withdrawal',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    /\    |
|   /  \   |
|  /____\  |
|    ||    |
|          |
+----------+
`,
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    meaning_up: 'Good luck, karma, life cycles, destiny, a turning point',
    meaning_rev: 'Bad luck, resistance to change, breaking cycles',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    /\    |
|   /--\   |
|  ( o  )  |
|   \--/   |
|    \/    |
+----------+
`,
  },
  {
    id: 11,
    name: 'Justice',
    meaning_up: 'Justice, fairness, truth, cause and effect, law',
    meaning_rev: 'Unfairness, lack of accountability, dishonesty',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /\/\   |
|  |    |  |
|   \/\/   |
|    ||    |
|          |
+----------+
`,
  },
  {
    id: 12,
    name: 'The Hanged Man',
    meaning_up: 'Pause, surrender, letting go, new perspectives',
    meaning_rev: 'Delays, resistance, stalling, indecision',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    --    |
|   |  |   |
|   |  |   |
|  /  \   |
|          |
+----------+
`,
  },
  {
    id: 13,
    name: 'Death',
    meaning_up: 'Endings, change, transformation, transition',
    meaning_rev: 'Resistance to change, personal transformation, inner purging',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   ()_    |
|  /  _\   |
| |  /  |  |
|  \____/  |
|          |
+----------+
`,
  },
  {
    id: 14,
    name: 'Temperance',
    meaning_up: 'Balance, moderation, patience, purpose',
    meaning_rev: 'Imbalance, excess, self-healing, re-alignment',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /\/\   |
|  /    \  |
| <----> |
|  \    /  |
|   \/\/   |
+----------+
`,
  },
  {
    id: 15,
    name: 'The Devil',
    meaning_up: 'Shadow self, attachment, addiction, restriction, sexuality',
    meaning_rev: 'Releasing limiting beliefs, exploring dark thoughts, detachment',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   >--<   |
|  /    \  |
| | () ()| |
|  \ -- /  |
|          |
+----------+
`,
  },
  {
    id: 16,
    name: 'The Tower',
    meaning_up: 'Sudden change, upheaval, chaos, revelation, awakening',
    meaning_rev: 'Personal transformation, fear of change, averting disaster',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /\/\   |
|  |    |  |
|  |    |  |
| /----\ |
|          |
+----------+
`,
  },
  {
    id: 17,
    name: 'The Star',
    meaning_up: 'Hope, faith, purpose, renewal, spirituality',
    meaning_rev: 'Lack of faith, despair, self-trust, disconnection',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    *     |
|   / \    |
|  /   \   |
| *-----*  |
|          |
+----------+
`,
  },
  {
    id: 18,
    name: 'The Moon',
    meaning_up: 'Illusion, fear, anxiety, subconscious, intuition',
    meaning_rev: 'Release of fear, repressed emotion, inner confusion',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /---\  |
|  /     ) |
| |     (  |
|  \     ) |
|   \---/  |
+----------+
`,
  },
  {
    id: 19,
    name: 'The Sun',
    meaning_up: 'Positivity, fun, warmth, success, vitality',
    meaning_rev: 'Inner child, feeling down, overly optimistic',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|    O     |
|  / | \   |
| -- O --  |
|  \ | /   |
|    O     |
+----------+
`,
  },
  {
    id: 20,
    name: 'Judgement',
    meaning_up: 'Judgement, rebirth, inner calling, absolution',
    meaning_rev: 'Self-doubt, inner critic, ignoring the call',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /\_    |
|  /   \   |
| |  _  |  |
|  \/ \/  |
|          |
+----------+
`,
  },
  {
    id: 21,
    name: 'The World',
    meaning_up: 'Completion, integration, accomplishment, travel',
    meaning_rev: 'Seeking personal closure, short-cuts, delays',
    ascii: `
    .°+.
   .°  +.
  .°    +.
 .°      +.
.°        +.
+----------+
|   /--\   |
|  ( () )  |
|   \--/   |
|  /    \  |
|          |
+----------+
`,
  },
];
