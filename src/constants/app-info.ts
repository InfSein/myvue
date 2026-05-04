import PackageJson from '../../package.json'

class AppInfo {
  static readonly name = 'MyVue'
  static readonly version = PackageJson.version

  static readonly repoUrl = `https://github.com/InfSein/${PackageJson.name}`
}

export default AppInfo
