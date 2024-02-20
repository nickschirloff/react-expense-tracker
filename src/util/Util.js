
export const formatNumberString = (str) => {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getGoalPercentage = (savedAmount, totalAmount) => {
    return ((savedAmount / totalAmount) * 100).toFixed(2);
};