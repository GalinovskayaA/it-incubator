import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "./../../p1-main/m1-ui/u1-app/App.module.css"

// types
export type AffairPriorityType = string; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
}; // need to fix any
export type FilterType = "all" | "high" | "middle" | "low" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "Anime", priority: "low"},
    {_id: 3, name: "Games", priority: "low"},
    {_id: 4, name: "Work", priority: "high"},
    {_id: 5, name: "Html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    else if (filter === "high") return affairs.filter(a => a.priority === "high");
    else if (filter === "middle") return affairs.filter(a => a.priority === "middle");
    else if (filter === "low") return affairs.filter(a => a.priority === "low");
    else return affairs// need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a._id !== _id)  // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div className={s.content}>
            <div className={s.HW}>
                <h4>homeworks 2</h4>
                {/*should work (должно работать)*/}
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    );
}

export default HW2;
