import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "15 minutes",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "What used to take an hour of evening paperwork now takes 15 minutes on-site. Engineers finish jobs and go home."
    },
    {
        title: "Same Day",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Certificates delivered to customers the same day, not 3-5 days later. Invoice immediately, get paid faster."
    },
    {
        title: "40%",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "More revenue from follow-on work and upsells you'd otherwise miss. Prompts capture opportunities on-site."
    }
];