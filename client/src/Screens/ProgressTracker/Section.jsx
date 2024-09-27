import { useState } from "react";
import SubSection from "./Subsection";

export default function Section({ section, index, updateList }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="bg-gray-200 px-10 py-6 w-full 
                        text-slate-800 rounded shadow-lg 
                        transition hover:shadow-2xl 
                        hover:-translate-y-2 hover:scale-[101%]"
        >
            <div className="flex w-full justify-between items-center cursor-pointer">
                <h3
                    className="font-bold text-xl flex-1"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {section.title}
                </h3>
                <div className="flex gap-4 items-center">
                    <p className="font-bold text-slate-800">
                        {section.progress}%
                    </p>
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="bg-gray-800 text-white px-5 py-3 
                                   rounded hover:bg-gray-600"
                    >
                        {open ? "Close" : "Open"}
                    </button>
                </div>
            </div>

            {open && (
                <div className="flex flex-col w-full my-10 gap-4">
                    {section.subsections.map((sub, i) => {
                        return (
                            <SubSection
                                key={i}
                                index={i}
                                sectionIndex={index}
                                updateList={updateList}
                                subtitle={sub.subtitle}
                                completed={sub.completed}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}