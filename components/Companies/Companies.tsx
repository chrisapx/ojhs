"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/canteen.jpg"
    },
    {
        imgSrc: "/assets/class1.jpg"
    },
    {
        imgSrc: "/assets/art.jpg"
    },
    {
        imgSrc: "/assets/exam.jpg"
    },
    {
        imgSrc: "/assets/pic1.jpg"
    },
    {
        imgSrc: "/assets/van.jpg"
    },
    {
        imgSrc: "/assets/aerial.jpg"
    },
    {
        imgSrc: "/assets/class2.jpg"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center my-20'>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-[#2f66a6] text-2xl font-semibold">Gallery</h2>
                    <div className="py-4">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="px-4">
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={116} height={36} className="rounded-[5px] w-full mr-4" />
                                </div>
                            )}
                        </Slider>
                    </div>
                    <hr />
                </div>
            </div>

        )
    }
}
