import Demo from '../../src/components/Demo'

export function patchRoutes({ routes }: { routes: any[] }) {
  console.log(routes)
  routes.unshift({
    path: '/demo',
    component: Demo,
  })
}
