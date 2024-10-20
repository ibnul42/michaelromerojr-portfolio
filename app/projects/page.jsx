import React from 'react'
import Title from '../components/Title'
import ScrollArea from '../components/ScrollArea'
// import DetailView from './DetailView'
import RenderItem from '../components/RenderItem'
import AllProjects from './AllProjects'

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
                    <Title text='Projects' />
                </div>
                <ScrollArea />
            </div>
            <div className="py-5 space-y-10">
                <AllProjects />
            </div>
        </div>
    )
}


