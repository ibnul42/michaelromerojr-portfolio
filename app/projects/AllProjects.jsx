'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import RenderItem from '../components/RenderItem';

const projects = [
    { id: 1, category: 'App', title: 'Project 1', image: 'https://picsum.photos/500' },
    { id: 2, category: 'Product', title: 'Project 2', image: 'https://picsum.photos/500' },
    { id: 3, category: 'Product', title: 'Project 3', image: 'https://picsum.photos/500' },
    { id: 4, category: 'App', title: 'Project 4', image: 'https://picsum.photos/500' },
    { id: 5, category: 'Product', title: 'Project 5', image: 'https://picsum.photos/500' },
    { id: 6, category: 'App', title: 'Project 6', image: 'https://picsum.photos/500' },
];

const categories = ['All', 'App', 'Product'];

export default function AllProjects() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="p-2">
            <div className="flex space-x-4 justify-center mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`text-gray-600 hover:text-sky-900 ${selectedCategory === category ? 'font-bold' : 'font-medium'
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProjects.map(project => (
                    <RenderItem key={project.id}>
                        <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                            <Image
                                src={project.image}
                                width={500}
                                height={500}
                                alt="Project"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 p-3">
                                <p className="text-sky-500 w-fit px-2 rounded-md text-xl font-bold transition-all duration-500">
                                    {project.title}
                                </p>
                            </div>
                        </div>
                    </RenderItem>
                ))}
            </div>
        </div>
    );
}
