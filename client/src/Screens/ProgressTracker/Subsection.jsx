export default function SubSection({
    subtitle,
    completed,
    index,
    sectionIndex,
    updateList,
}) {
    return (
        <div className="flex w-full justify-between items-center">
            <h4 className="font-bold text-lg">
                <span className="inline-block mr-4">{index}.</span> {subtitle}
            </h4>
            <input
                onChange={() => {
                    updateList(sectionIndex, index);
                }}
                checked={completed || false}
                type="checkbox"
                className="border rounded w-4 h-4 accent-emerald-500"
            />
        </div>
    );
}