import React from 'react'
import Title from '../components/Title'
import ScrollArea from '../components/ScrollArea'
import DetailView from './DetailView'
import RenderItem from '../components/RenderItem'

const items = [
  {
    id: 1,
    description: `Lorem ipsum dolor sit amet  consectetur adipisicing elit. Quis illum culpa magni cum commodi enim qui impedit esse adipisci ipsum placeat molestiae, velit in, blanditiis maxime! Amet dolorum voluptas quos consectetur perspiciatis illum, ipsam officia ad in sequi omnis quia ipsum placeat explicabo.\n magnam quibusdam sint aperiam. Voluptatem sequi voluptate corrupti obcaecati. Quasi atque error accusamus ullam esse rerum assumenda sequi deleniti sint, totam exercitationem, qui soluta tempora itaque odio temporibus reprehenderit vel natus molestias modi, labore obcaecati officia? Odio debitis eius deserunt. Distinctio labore asperiores sunt, alias eveniet iure? Ipsum labore necessitatibus culpa veritatis officia autem quis debitis sit?`,
    asset: '',
  },
  {
    id: 2,
    description: `Lorem ipsum dolor sit amet  consectetur adipisicing elit. Quis illum culpa magni cum commodi enim qui impedit esse adipisci ipsum placeat molestiae, velit in, blanditiis maxime! Amet dolorum voluptas quos consectetur perspiciatis illum, ipsam officia ad in sequi omnis quia ipsum placeat explicabo.\n magnam quibusdam sint aperiam. Voluptatem sequi voluptate corrupti obcaecati. Quasi atque error accusamus ullam esse rerum assumenda sequi deleniti sint, totam exercitationem, qui soluta tempora itaque odio temporibus reprehenderit vel natus molestias modi, labore obcaecati officia? Odio debitis eius deserunt. Distinctio labore asperiores sunt, alias eveniet iure? Ipsum labore necessitatibus culpa veritatis officia autem quis debitis sit?`,
    asset: '',
  },
]

export default function Page() {
  return (
    <div className="px-5">
      <div className='h-screen flex flex-col gap-5 md:gap-10'>
        <div className="py-5 md:py-10">
          <Title text='About me' />
          <RenderItem>
            <p className='inline-block text-lg font-medium text-sky-700'>
              I&apos;m a
              <span className='text-sky-900 font-bold'> developer, </span>
              <span className='text-sky-900 font-bold'>designer </span> and
              <span className='text-sky-900 font-bold'> linguist </span>
              <span>who has been building for the web in some capacity since 2001. I specialise in accessibility, performance and usability without sacrificing creativity.</span>
            </p>
          </RenderItem>
        </div>
        <ScrollArea />
      </div>
      <div className="py-5 space-y-10">
        {items.map(item => (
          <DetailView key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}


