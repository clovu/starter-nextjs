import json from '@/../package.json'

interface Package {
  description: string
  author: string
  homepage: string
  version: string
}

export function resolvePackage() {
  return json as Package
}
