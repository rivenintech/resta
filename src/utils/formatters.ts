export const currency = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
});

export const getTimeAgo = (dateString: string) => {
    // Use user's locale
    const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
    const tf = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" });

    const date = new Date(dateString);
    const now = new Date();
    const dayDiff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    if (dayDiff < 7) {
        return rtf.format(-Math.round(dayDiff), "day");
    }
    if (dayDiff <= 30) {
        return rtf.format(-Math.ceil(dayDiff / 7), "week");
    }
    if (dayDiff <= 365) {
        return rtf.format(-Math.ceil(dayDiff / 30), "month");
    }
    return tf.format(date);
};

export const getWeekdayIndex = (weekday: string) => {
    const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    // Find index of given weekday
    const dayIndex = weekdays.indexOf(weekday);

    if (dayIndex === -1) {
        throw new Error("Invalid weekday name");
    }

    return dayIndex;
};
