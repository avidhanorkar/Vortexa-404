// DSAList.js
import { useState, useEffect } from "react";
import {
    findSectionProgress,
    findOverallProgress,
} from "./CalculateProgress";
import DSATrackerList from "./DSATrackerList";
import Section from "./Section";

export default function DSAList() {
    const [dsaList, setDsaList] = useState([]);
    const [overallProgress, setOverallProgress] = useState(0);

    useEffect(() => {
        const localList = JSON.parse(localStorage.getItem("dsalist")) || [];
        setDsaList(localList.length !== 0 ? localList : DSATrackerList);
    }, []);

    useEffect(() => {
        setOverallProgress(findOverallProgress(dsaList));
    }, [dsaList]);

    const updateList = (index, indexOfSub) => {
        const newDSAList = [...dsaList];
        newDSAList[index].subsections[indexOfSub].completed =
            !newDSAList[index].subsections[indexOfSub].completed;
        newDSAList[index].progress = findSectionProgress(
            newDSAList[index].subsections
        );
        setDsaList(newDSAList);
        localStorage.setItem("dsalist", JSON.stringify(newDSAList));
    };

    return (
        <div className="flex flex-col gap-10 w-[60%] mb-40 relative">
            {overallProgress === 100 && (
                <h1 className="text-center text-4xl ">
                    Successfully Completed! Hurray.
                </h1>
            )}
            <p>Progress: {overallProgress}%</p>
            <div
                className={`-mt-5 rounded sticky top-0 
                            bg-gradient-to-r from-purple-500 
                            to-pink-500 transition-all h-2 w-[${overallProgress}%]`}>
            </div>
            {dsaList.map((section, index) => {
                return (
                    <Section
                        index={index}
                        updateList={updateList}
                        key={index}
                        section={section}
                    />
                );
            })}
        </div>
    );
}
