import Nav from './Nav'

import { RiLiveFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { IoBarChart } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";


const IncludedIn = () => {

    return (
        <div id="IncludedIn" className="bg-[url('assets/included-2.png')] bg-cover min-w-screen min-h-screen flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="">
                    <span></span>
                </div>
                <div className="backdrop-blur-2xl rounded-3xl text-black lg:w-[530px] p-10 mt-[100px]">
                    <h1 className="includedH1"><RiLiveFill className="colorIconIncluded"/>Live Trading Sessions</h1>
                    <p className="includedParaph">Trade live with our team, boasting a combined total of over 7 figures in payouts. Experience live tape reading, real-time trade executions, and ongoing education.</p>
                    <h1 className="includedH1"><GiBrain className="colorIconIncluded"/>Inclusive Mentorship Programs</h1>
                    <p className="includedParaph">Master our trading and account management strategies. Gain an exclusive edge you won't find elsewhere. We guide you step by step through what made us successful.</p>
                    <h1 className="includedH1"><FaHandshake className="colorIconIncluded"/>Supportive Community</h1>
                    <p className="includedParaph">We pride ourselves on having one of the most talented and supportive trading communities. Join the chat and trade alongside fellow traders throughout all trading sessions.</p>
                    <h1 className="includedH1"><IoBarChart className="colorIconIncluded"/>Detailed Chart Analysis</h1>
                    <p className="includedParaph">Access our live market insights, liquidity analysis, and both pre-market and post-market charting.</p>
                    <h1 className="includedH1"><FaMoneyBillTrendUp className="colorIconIncluded"/>Proprietary Firm Payout Strategies</h1>
                    <p className="includedParaph">Our trading team has accumulated over 7 figures in payouts and has more than 30 years of experience. We know what works and we share all our strategies with you.</p>
                </div>
            </div>
            
        </div>
    )
}

export default IncludedIn;