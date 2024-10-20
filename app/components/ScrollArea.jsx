import React from 'react'
import WavyText from './WavyText'
import RenderItem from './RenderItem'

export default function ScrollArea() {
    return (
        <div className="flex-grow flex flex-col items-center py-10 md:py-20">
            <RenderItem classStyle='flex-grow flex flex-col items-center w-full h-full'>
                <div className="flex-grow flex flex-col gap-16 w-full max-w-96">
                    <WavyText text="Scroll" />
                    <div className="flex-grow min-h-28 w-[1px] bg-sky-400"></div>
                </div>
            </RenderItem>
        </div>
    )
}
