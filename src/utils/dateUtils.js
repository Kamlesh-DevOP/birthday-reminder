export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
};

export const formatDate = (month, day) => {
    return `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export const isToday = (day, month, year) => {
    const today = new Date();
    return (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    );
};
