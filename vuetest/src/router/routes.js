export const routes = [
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path: '/table',
        component: () => import('@/views/Table')
    },
    {
      path: '/register',
        component: () => import('@/views/register')
    },
    {
      path: '/dropzone',
        component: () => import('@/views/dropzone')
    }

];
