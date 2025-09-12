import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "75%",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Reduction in engineer paperwork through AI automation - engineers focus on safety, not admin."
    },
    {
        title: "60%",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Faster certificate turnaround from job completion to customer delivery."
    },
    {
        title: "40%",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "More revenue opportunities captured through AI-identified upselling and maintenance needs."
    }
];