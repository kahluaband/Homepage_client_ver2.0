import { resourceUsage } from "process"
import { SongList } from "../performance/SongList"
import PerformanceCard from "./PerformanceCard"

const PerformanceList = () => {
    return(
        <div>
            <PerformanceCard songs={SongList}/>
        </div>
    )
}

export default PerformanceList