import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const membershipData = [
    {
        title: "Gold Membership",
        monthlyPrice: '$40/monthly or ',
        yearlyPrice: '$440/yearly',
        benefits: [
            {
                icon: FaCheck,
                text: "30 minute Aerobic classes offered through zoom",
            },
            {
                icon: FaCheck,
                text: "To improve endurance and overall fitness",
            },       
            {
                icon: FaCheck,
                text: "Different levels so you can work in YOUR zone",
            },
            {
                icon: FaCheck,
                text: "Enhance balance, coordination, and reaction time at home",
            },
            {
                icon: FaCheck,
                text: "Stay after class for Cora Zone Health 15 minute seminars",
            },


        ]
    },
    {
        title: "Diamond Membership",
        monthlyPrice: '$80/monthly or ',
        yearlyPrice: '$880/yearly',
        benefits:  [
            {
                icon: FaCheck,
                text: "All the benefits of the gold membership",
            },
            {
                icon: FaCheck,
                text: "Weekly check- ins, through phone or email",
            },       
            {
                icon: FaCheck,
                text: "Individualized goals and programs for fall prevention",
            },
            {
                icon: FaCheck,
                text: "Handling metabolic conditions, neuromuscular diagnosis",
            },
            {
                icon: FaCheck,
                text: "We help you track health markers for your next appointment",
            },            
            {
                icon: FaCheck,
                text: "Weekly check-ins; goal reviews ",
            },       
            {
                icon: FaCheck,
                text: "Diamond members can access exercise and health consultations anytime",
            },
            // {
            //     icon: FaCheck,
            //     text: "Assistance in navigating the health care system",
            // },


        ]
    },
    {
        title: "Individualized Training",
        price: 'Click Buy Now to see details',
        benefits: [
            {
                icon: FaCheck,
                text: "In person or virtual training",
            },
            {
                icon: FaCheck,
                text: "ICBC Active Rehab with valid claim #",
            },
            {
                icon: FaCheck,
                text: "Workers Compensation claims",
            },            
            
        ]
    },
]

export default membershipData