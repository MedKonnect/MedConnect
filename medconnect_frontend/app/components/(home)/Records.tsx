
const recordList = [
    {
        value: 5000,
        description: 'Active users',    
    },
    {
        value: 50000,
        description: 'secured health records',    
    },
    {
        value: 10000,
        description: 'successful appointments',    
    },
];

const Records = () => {
  return (
    <section className="flex flex-col justify-center w-full pb-20 max-w-screen-2xl mx-auto items-center">
        <h3 className="text-[48px] w-[40ch] font-medium text-black opacity-80 text-center leading-[70px]">We put your health information back in your hands, giving you complete control over your healthcare journey.</h3>
        <div className="flex max-w-screen-2xl justify-between w-full">
            {
                recordList.map((record, index) => ( 
                    <Card 
                        key={index}
                        value={record.value}
                        description={record.description}
                    />
                ))

            }
        </div>
    </section>
  )
};

export default Records

interface CardProps {
    value: number;  
    description: string;
};

const Card = ({value, description}: CardProps) => {
    return (
       <div>
            <h4 className="text-4xl capitalize m-0">+{value}</h4>
            <p className="opacity-60 capitalize">{description}</p>
       </div>
    )
};