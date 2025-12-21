import json from '@/../package.json'

interface Package {
  description: string
  author: string
  homepage: string
}

export function resolvePackage() {
  return json as Package
}
