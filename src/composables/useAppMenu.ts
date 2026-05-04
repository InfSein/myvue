import {
  HomeFilled,
  BoltFilled as BookIcon,
} from '@vicons/material'
import { renderIcon } from '@/utils/ui'

// #region 自定义菜单项
type MenuItem =
  | {
    type: 'title',
    label: string
  }
  | {
    type: 'router',
    icon: Component,
    label: string,
    routeKey: string,
  }
  | {
    type: 'button',
    icon: Component,
    label: string,
    onClick: () => void,
  }

const menuItems = computed(() : MenuItem[] => {
  return [
    {
      type: 'router',
      icon: HomeFilled,
      label: '首页',
      routeKey: '/',
    },
    {
      type: 'title',
      label: menuData.menuCollapsed ? '组1' : '示例组1',
    },
    {
      type: 'button',
      icon: BookIcon,
      label: '示例项1',
      onClick: () => {
        console.log('示例项1')
      },
    },
    {
      type: 'button',
      icon: BookIcon,
      label: '示例项2',
      onClick: () => {
        console.log('示例项2')
      },
    },
    {
      type: 'title',
      label: menuData.menuCollapsed ? '组2' : '示例组2',
    },
    {
      type: 'button',
      icon: BookIcon,
      label: '示例项3',
      onClick: () => {
        console.log('示例项3')
      },
    },
    {
      type: 'button',
      icon: BookIcon,
      label: '示例项4',
      onClick: () => {
        console.log('示例项4')
      },
    },
  ]
})
// #endregion

const menuData = reactive({
  currMenu: 'home',
  menuCollapsed: false,
})

const useAppMenu = () => {
  const route = useRoute()
  const router = useRouter()

  const appMenuOptions = computed(() => {
    return menuItems.value.map((item) => {
      switch (item.type) {
        case 'title':
          return {
            type: 'group',
            key: item.label,
            label: item.label,
            children: [],
          }
        case 'router':
          return {
            label: item.label,
            key: `router_${item.routeKey}`,
            icon: renderIcon(item.icon),
            onClick: () => {
              router.push(item.routeKey)
            }
          }
        case 'button':
          return {
            label: item.label,
            key: item.label,
            icon: renderIcon(item.icon),
            onClick: item.onClick,
          }
      }
    })
  })

  watch(
    () => route.path,
    (path) => {
      menuData.currMenu = (() => {
        switch (path) {
          default:
            return 'router_/'
        }
      })()
    },
    { immediate: true }
  )

  return {
    menuData,
    appMenuOptions,
  }
}

export default useAppMenu
