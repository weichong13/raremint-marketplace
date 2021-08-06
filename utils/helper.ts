export const timeAgo = (prevDate: any) => {
  prevDate = new Date(prevDate);
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  switch (true) {
    case diff < minute:
      const seconds = Math.round(diff / 1000);
      return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`;
    case diff < hour:
      return Math.round(diff / minute) + ' minutes ago';
    case diff < day:
      return Math.round(diff / hour) + ' hours ago';
    case diff < month:
      return Math.round(diff / day) + ' days ago';
    case diff < year:
      return Math.round(diff / month) + ' months ago';
    case diff > year:
      return Math.round(diff / year) + ' years ago';
    default:
      return '';
  }
};

export const getQueryStringParams = (query: string) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params: any, param) => {
          let [key, value] = param.split('=');
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : '';
          return params;
        }, {})
    : {};
};
