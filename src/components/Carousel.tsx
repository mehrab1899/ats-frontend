'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import dynamic from 'next/dynamic';

const FaChevronLeft = dynamic(() => import('react-icons/fa').then(mod => mod.FaChevronLeft));
const FaChevronRight = dynamic(() => import('react-icons/fa').then(mod => mod.FaChevronRight));

interface CarouselProps {
    children: React.ReactNode[];
    slidesPerView?: number;
    spacing?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
    children,
    slidesPerView = 3,
    spacing = 16,
}) => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: slidesPerView,
            spacing,
        },
        breakpoints: {
            '(max-width: 1024px)': {
                slides: { perView: 2, spacing },
            },
            '(max-width: 640px)': {
                slides: { perView: 1, spacing },
            },
        },
    });

    return (
        <div className="relative">
            {/* Arrows */}
            <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
                <FaChevronLeft size={20} />

            </button>
            <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            >
                <FaChevronRight size={20} />

            </button>

            {/* Slider */}
            <div ref={sliderRef} className="keen-slider py-2 px-6">
                {children.map((child, idx) => (
                    <div className="keen-slider__slide" key={idx}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
