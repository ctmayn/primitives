import fs from 'fs'
import {PrimerStyleDictionary} from '~/src/PrimerStyleDictionary'
import {themes} from '../themes.config'
import {figma} from '~/src/platforms'
import type {ConfigGeneratorOptions} from '~/src/types/StyleDictionaryConfigGenerator'

export const buildFigma = (buildOptions: ConfigGeneratorOptions): void => {
  /** -----------------------------------
   * Colors, shadows & borders
   * ----------------------------------- */
  for (const {filename, source, include} of themes) {
    // build functional scales
    PrimerStyleDictionary.extend({
      source,
      include,
      platforms: {
        figma: figma(`figma/themes/${filename}.json`, buildOptions.prefix, buildOptions.buildPath),
      },
    }).buildAllPlatforms()
  }

  /** -----------------------------------
   * Create list of files
   * ----------------------------------- */
  const dirNames = fs
    .readdirSync(`${buildOptions.buildPath}figma`, {withFileTypes: true})
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)

  const files = dirNames.flatMap(dir => {
    const localFiles = fs.readdirSync(`${buildOptions.buildPath}figma/${dir}`)
    return localFiles.map(file => `${buildOptions.buildPath}figma/${dir}/${file}`)
  })

  fs.writeFileSync(`${buildOptions.buildPath}figma/files.json`, JSON.stringify(files, null, 2))
}

buildFigma({
  buildPath: 'tokens-next-private/',
})
