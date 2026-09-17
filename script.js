const durationElement = document.querySelector("#current-role-duration");
const footerYearElement = document.querySelector("#footer-year");

if (footerYearElement) {
    footerYearElement.textContent = new Date().getFullYear();
}

if (durationElement) {
    const startDate = new Date(`${durationElement.dataset.startDate}T00:00:00`);
    const today = new Date();
    let months = (today.getFullYear() - startDate.getFullYear()) * 12
        + today.getMonth() - startDate.getMonth();

    if (today.getDate() < startDate.getDate()) {
        months -= 1;
    }

    if (months < 0) {
        durationElement.textContent = "0 mos";
    } else if (months < 12) {
        durationElement.textContent = `${months} mos`;
    } else {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        const yearLabel = `${years} ${years === 1 ? "yr" : "yrs"}`;
        const monthLabel = remainingMonths
            ? ` ${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`
            : "";

        durationElement.textContent = `${yearLabel}${monthLabel}`;
    }
}
