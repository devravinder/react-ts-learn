# rare-dev shadcn registry

Custom Shadcn registry
[documentation](https://ui.shadcn.com/docs/directory#documentation)

## Folder Structure

- `src`: for all the shadcn registry code

## To run locally

- `pnpm run dev`

## To deploy to Github pages

- `pnpm run d:registry`
  - Note:- this command should be run from repo root folder i.e from react-ts-learn

## Issues

- Still gh-pages is publishing all the dot files

## Usage / Adding Files,Components

1. Create file & add data under the `registry` folder
2. add file information in `registry.json`
3. Build files
   - `shadcn build --output ./public` or `pnpm run build`

4. Generate Index (optional)
   - `node --no-warnings indexGenerator.js` or `pnpm run generateIndex`

5. Run/deploy registry server
   1. locally `pnpm run dev`
   2. using hithub pages
      - go to the root folder of the repo
      - run `pnpm run d:registry`
6. use in anothe project(client)
   0. It should be a shadcn project (recommonded)

   1. using directly from clinet project
      - `pnpm dlx shadcn@latest add <hostname><file.json>`
      - eg: `pnpm dlx shadcn@latest add https://rare-dev.paravartech.com/HelloWorld.json`

   2. by adding as registry
      1. in client project add registry in components.json

         ```json
           "registries": {
                  "@rare-dev":"https://rare-dev.paravartech.com/{name}.json"
               }
         ```

      2. import with registry & file name
         eg: `pnpm dlx shadcn@latest add @rare-dev/HelloWorld`
