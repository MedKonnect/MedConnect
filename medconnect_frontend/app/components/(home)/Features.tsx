import Image from "next/image"

const features = [
    {
        image: '/img/features/feature1.webp',
        title: 'Health hub',
        description: 'All your medical records, prescriptions, and insurance details—securely stored in one place.',
    },
    {
        image: '/img/features/feature2.webp',
        title: 'Easy access to care',
        description: 'Book appointments, connect with doctors, and manage your consultations effortlessly.',
    },
    {
        image: '/img/features/feature3.webp',
        title: 'Virtual access and support',
        description: 'Message healthcare providers, join video calls, and stay on top of your health anytime.',
    },
]

const Features = () => {
  return (
    <section className="max-w-screen-2xl bg-[#EDFCFF] py-16 mx-auto mt-12 px-4 lg:px-12">
        <h2 className="text-center opacity-60 font-semibold tracking-wide mb-3">Features</h2>
        <p className="text-[32px] text-center max-w-[35ch] leading-[1] mx-auto">We bring healthcare home, where you need it the most</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 xl:gap-8 mt-16">
            {
                features.map((feature, index) => (
                    <FeatureCard 
                        key={index}
                        index={index}
                        image={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))
            }
        </div>
        <div className="flex justify-center"><button className="my-5 lg:my-[100px] rounded-[30px] cursor-pointer px-20 py-5 border mx-auto tracking-wide font-semibold">Sign Up</button></div>
    </section>
  )
}

interface FeatureCardProps {
    image: string;
    index: number;
    title: string;
    description: string;
}

const FeatureCard = ({ image, title, description, index }: FeatureCardProps) => {
    return (
        <div className="flex flex-col">
            <Image src={image} alt={title} width={500} height={300} className="w-full h-[300px] relative z-[2] object-cover rounded-[20px]" />
            <div className='bg-[#EAF7FF] py-[40px] px-[24px] relative z-[1] -mt-4 rounded-[20px] flex flex-col gap-y-4'>
                <p className="opacity-60 leading-[1.5]">{description}</p>
                <div className={`${index === 1 ? 'bg-gradient-to-r from-[#5DADE2] to-[#7CFFCB]' : 'border border-[#2C3431]'} relative rounded-[30px] p-4 w-full flex justify-center gap-2 items-center`}>
                    {index != 1 && <Image src="/img/gradienticon.svg" alt="arrow" width={20} height={20} className="w-5 h-5 left-4 absolute" />}
                    <h3 className="text-center tracking-[3%] font-semibold">{title}</h3>
                </div>
            </div>
        </div>
    )
}


export default Features