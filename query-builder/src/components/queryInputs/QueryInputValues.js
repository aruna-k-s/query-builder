export const fieldOptions = [
    { value: 'Theme', label: 'Theme' },
    { value: 'Sub-theme', label: 'Sub-theme' },
    { value: 'Reason', label: 'Reason' },
    { value: 'Language', label: 'Language' },
    { value: 'Source', label: 'Source' },
    { value: 'Rating', label: 'Rating' },
    { value: 'Time Period', label: 'Time Period' },
    { value: 'Customer ID', label: 'Customer ID' }
];

export const conditionOptions = [
    { value: '==', label: 'Equals' },
    { value: '!=', label: 'Does not equal' },
    { value: '>', label: 'Greater than' },
    { value: '<', label: 'Lesser than' },
    { value: '>=', label: 'Greater than or equal' },
    { value: '<=', label: 'Lesseer than or equal' },
    { value: 'Like', label: 'Like' },
    { value: 'Not like', label: 'Not like' },
    { value: 'Is Empty', label: 'Is Empty' },
    { value: 'Is', label: 'Is' },
    { value: 'Is not', label: 'Is not' }
]

export const themeCriteriaOptions = [
    { value: 'Product feedback', label: 'Product feedback' },
    { value: 'User feedback', label: 'User feedback' },
    { value: 'User Reviews', label: 'User Reviews' }
]

export const subThemeCriteriaOptions = [
    { value: 'Vehicle Products feedback', label: 'Product feedback' },
    { value: 'Two wheelers User feedback', label: 'Four wheelers user feedback' },
    { value: 'Four wheelers user Reviews', label: 'Four wheelers user reviews' }
]

export const reasonCriteriaOptions = [
    { value: 'In progress', label: 'In progress' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Delayed', label: 'Delayed' },
    { value: 'Over Delayed', label: 'Over Delayed' }
]

export const languageCriteriaOptions = [
    { value: 'English', label: 'English' },
    { value: 'Kannada', label: 'Kannada' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Telugu', label: 'Telugu' }
]
export const sourceCriteriaOptions = [
    { value: 'Google drive', label: 'Google drive' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Instagram', label: 'Instagram' }
]
export const ratingCriteriaOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' }
]
const today = new Date();
const nextDay = new Date(today);
export const timePeriodCriteriaOptions = [
    { value: today, label: '' + (today.getMonth() + 1) + "/" + today.getDate() },
    { value: new Date(nextDay.setDate(today.getDate() + 1)), label: '' + (today.getMonth() + 1) + "/" + (today.getDate() + 1) },
    { value: new Date(nextDay.setDate(today.getDate() + 2)), label: '' + (today.getMonth() + 1) + "/" + (today.getDate() + 2) },
    { value: new Date(nextDay.setDate(today.getDate() + 3)), label: '' + (today.getMonth() + 1) + "/" + (today.getDate() + 3) },
    { value: new Date(nextDay.setDate(today.getDate() + 4)), label: '' + (today.getMonth() + 1) + "/" + (today.getDate() + 4) },
    { value: new Date(nextDay.setDate(today.getDate() + 5)), label: '' + (today.getMonth() + 1) + "/" + (today.getDate() + 5) }
]
export const customerIdCriteriaOptions = [
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
    { value: '400', label: '400' }
]
