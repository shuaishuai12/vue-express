/**
 * Created by Administrator on 2018/5/4 0004.
 */


export const routes =[
  {
    path: '/shuai',
    name: 'HelloWorld',
    component: () => import('@/views/HelloWorld')
  },
{
  path: '/add',
    name: 'add',
  component: () => import('@/views/add')
}
]
