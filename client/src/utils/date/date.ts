import moment from 'moment';

export const formatDate = (date: Date, formatType?: string) => {
    return moment(date).format(formatType);
};
