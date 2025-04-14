import Image from "next/image"

type benefitsProps = {
    img: string,
    title: string,
    desc: string
}
const benefits: benefitsProps[] = [
    {
        title: "Track Your Health in One Place",
        desc: "Easily manage and access all your health information within a single app, making it convenient to stay on top of your wellness.",
        img: "/img/benefits/1.webp",
    },
    {
        title: "Connect with Healthcare Providers Anytime, Anywhere",
        desc: "Get the care you need without the wait. Book appointments and reach out to doctors from the comfort of your home",
        img: "/img/benefits/2.webp",
    },
    {
        title: "Full Control Over Your Health Data",
        desc: "Your medical records are securely stored, ensuring that only you can access and share them with healthcare providers as needed.",
        img: "/img/benefits/3.webp",
    },
    {
        title: "Easily manage your health insurance ",
        desc: "Track your coverage, check claims, and stay updated, without the stress or paperwork.",
        img: "/img/benefits/4.webp",
    },
]

const Benefits = () => {
  return (
    <section className="py-20 flex bg-[#F2FAFF] flex-col items-center justify-center">
         <h2 className="text-center opacity-60 font-semibold tracking-wide mb-3">Benefits</h2>
         <p className="text-[32px] text-center max-w-[35ch] leading-[1] mx-auto">We bring healthcare home, where you need it the most</p>
         <div className="max-w-6xl w-full mx-auto py-5">
            {
                benefits.map(b => (
                    <div key={b.title} className="flex flex-col lg:flex-row gap-y-4 bg-[#F9FEFF] px-4 lg:pr-8 rounded-4xl justify-between my-16 min-w-full">
                        <Image src={b.img} alt={b.title} width={500} height={500} className="w-full lg:w-[500px] h-[500px] relative z-[2] object-cover rounded-[20px]" />
                        <div className="py-6 md:px-6 xl:px-0 lg:py-12 lg:w-[500px]">
                            <h3 className="mb-4 opacity-80 text-black tracking-[3%] font-semibold text-[32px]">{b.title}</h3>
                            <p className="opacity-60 leading-[2] text-lg">{b.desc}</p>
                        </div>
                    </div>
                ))
            }
         </div>
    </section> 
  )
}

export default Benefits