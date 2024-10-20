import React from 'react'
import RenderItem from './RenderItem'

export default function Title({ text = '' }) {
    return (
        <div>
            <div className="space-y-3 w-fit py-2 md:py-5">
                <RenderItem duration={0.7} initialX={50} initialY={0}>
                    <p className='text-sky-900 font-bold text-4xl md:text-5xl tracking-tight'>
                        <span>{text}</span>
                        <span className='text-sky-400'>.</span>
                    </p>
                </RenderItem>
                <RenderItem duration={1} initialX={100} initialY={0}>
                    <p className='h-1 w-20 rounded-full bg-sky-400'></p>
                </RenderItem>
            </div>
        </div>
    )
}
