import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Quick links",
        link: ['Home', 'About us', 'Academics', 'student life', 'School news', 'contacts'],
    },
    {
        id: 2,
        section: "Our Contacts",
        link: ['P. O. Box 20142 Kampala', '+256 414 286 571', '+256 772608864', 'info@ojhs.sc.ug']
    }
    ,
    {
        id: 3,
        section: "More",
        link: ['Gallery', 'Co-extracurricular', 'E-library']
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-full sm:pt-12 px-8 sm:px-6 lg:max-w-full lg:px-12 bg-[red]">
            <div className="my-12 grid grid-cols-1 gap-y-5 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/logo/logo.png" alt="logo" width={100} height={66} />
                    </div>
                    <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16 text-white'> To produce a society of diligent, skilled, socially responsible <br />and useful citizens who strive for excellence.</h3>
                    
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2 gap-2">
                        <p className="text-black font-bold text-lg mb-4 text-white">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className='mb-2'>
                                    <Link href="/" className="text-darkgray text-base font-normal mb-6 space-links text-white">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-center border-t border-t-gray-blue'>
            <div>
                <h4 className='text-dark-red opacity-75 text-xs text-center md:text-start font-normal text-white'>@2024 Jericho High School .All rights reserved</h4>
                <div className='flex gap-4 items-center justify-center mt-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i}>
                            <div className="bg-white h-6 w-6 shadow-xl rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                            </div>
                        </Link>
                        ))}

                    </div>
            </div>
            </div>
        </div>
    )
}

export default footer;
