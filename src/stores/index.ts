import { defineStore } from 'pinia'
import { getItem, setItem } from './storage'
import StorageKeys from './keys'
import { fixAppConfig, type AppConfig } from '@/types/config'

export const useStore = defineStore('main', {
  state: () => ({
    appConfig: fixAppConfig(getItem<AppConfig>(StorageKeys.AppConfig)),
  }),
  actions: {
    reloadAppConfig() {
      this.appConfig = fixAppConfig(getItem<AppConfig>(StorageKeys.AppConfig))
    },
    updateAppConfig() {
      this.appConfig = fixAppConfig(this.appConfig)
    },
    setAppConfig(value: AppConfig) {
      this.appConfig = fixAppConfig(value)
      setItem(StorageKeys.AppConfig, value)
    },
  }
})
