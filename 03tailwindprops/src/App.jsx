import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
  {
    id: 2,
    title: 'How to clear SSB',
    href: '#',
    description: 'SSB is service selection board. SSB select people for the post of officers in Tri-services and ICG(Indian Coast guards) as Entry level officers. SSB has two stages, Screening and Conference perocess.',
    date: 'Oct-28-2024',
    datetime: '2024-10-28',
    category: { title: 'SSB', href: '#' },
    author: {
      name: 'Avinash Pandey',
      role: 'Lieutenant',
      href: '#',
      imageUrl:
        'https://as2.ftcdn.net/v2/jpg/08/89/12/31/1000_F_889123157_7QVVKH23xa1DSEwy7OruGjIL8s5mKHpm.jpg',
    }
  }
]
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-green-500 text-black border-lime-900'>Tailwind CSS</h1> */}
    <br />
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
    </div>
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

      {posts.map((posts)=>
      <article key={posts.id} class="flex max-w-xl flex-col items-start justify-between">
        <div class="flex items-center gap-x-4 text-xs">
          <time datetime={posts.datetime} class="text-gray-500">{posts.date}</time>
          <a href={posts.category.href} class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{posts.category.title}</a>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href={posts.href}>
              <span class="absolute inset-0"></span>{posts.title}
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{posts.description}</p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <img src={posts.author.imageUrl} alt="" class="size-10 rounded-full bg-gray-50"/>
          <div class="text-sm/6">
            <p class="font-semibold text-gray-900">
              <a href={posts.author.href}/>
                <span class="absolute inset-0"></span>
                {posts.author.name}
            </p>
            <p class="text-gray-600">{posts.author.role}</p>
          </div>
        </div>
      </article>
      )}

    </div>
  </div>
</div>
    </>
  )
}

export default App
