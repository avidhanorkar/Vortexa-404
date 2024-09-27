// calculateProgress.js
export function findSectionProgress(subsections) {
    let completed = 0;
    for (let i = 0; i < subsections.length; i++) {
        if (subsections[i].completed) completed++;
    }
    return Math.round((completed / subsections.length) * 100);
}

export function findOverallProgress(dsalist) {
    let totalProgress = 0;
    for (let i = 0; i < dsalist.length; i++) {
        totalProgress += dsalist[i].progress;
    }
    return Math.round((totalProgress / (dsalist.length * 100)) * 100);
}
