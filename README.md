## Readme: Serhii Viazkov Seeking Alpha Demo

### Setup:

0. Clone repo, install deps with your preferred package manager (I use `yarn`)
1. `CRA` somehow can throw issue about non-relevant deps-version, so, please, put
    ```
    SKIP_PREFLIGHT_CHECK=true
    ```
   into your config to avoid issue, (or just rename `.env-example` to `.env`)
2. `yarn start` to run,
3. `yarn test` to test,
4. `.nvmrc` contains correct NodeJS versions to run project

### Description:

* To keep my demo simple enough, I've used Hooks approach to keep app's state management simply as possible. Also, there
  is no extra deps (Redux, eslint, etc...) - only `create-react-app` and required deps to run project.
* To prove the demo is scalable, you can adjust width & height through panel at top of the page.
* Update & Rules separated into different hook: you can 'eject' `useLife` hook and use it with another representational
  components. There are some improvements can be done about `useTime`
  (proper start after stopping the game);
* Typing implemented with Typescript, because it is clearer to use rather than Flow(to keep demo simple, all types
  located at
  `src/types.ts` - I know, at real production typings can be split to another repo / by categories, but there is no
  reason for that)
* Tests I wrote, covers simple logic for `Cell` and `Row` components & utils function. Proper unit tests should cover
  positive, negative, error caused cases with different set of props & component behavior.
* `Cell` component wrapped in `React.memo` in reason to avoid additional re-renders: in this case, all handled data -
  50x50 matrix of booleans, which doesn't take a lot allocated memory, and at each tick we can save up to ~half
  re-renders on `Cell` component (tested with `console.count` on `Cell` component for re-render count)
* Conway's Game of life has many optimization approaches. They are based on different data management approaches:
  trees, byte templating for neighbor cells. So, we can avoid `O(n^2)` complexity. For clearer equitation and test
  assignation time limitations, I've implemented basic approach.

### Contacts:

In case of any questions, mail is attached to my GitHub profile, or ask HR team for Telegram / Phone contacts.