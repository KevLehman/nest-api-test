import moment from 'moment-es6';

export function FilterMiddleware(req, res, next) {
  const filter: any = {};
  req.pagination = {};
  let { page = 1, limit = 10, start, end, tags } = req.query;
  const { likes = '0' } = req.query;

  if (!Number.isInteger(Number(page))) page = 1;
  if (!Number.isInteger(Number(limit))) limit = 10;
  // pagination
  if (page <= 0) page = 1;
  if (limit <= 0) limit = 10;
  req.pagination = {
    skip: (page - 1) * limit,
    limit,
  };
  // db query
  filter.userId = req.user.userId; // user can only see his own links!
  if (typeof start === 'undefined' || !moment(start).isValid()) start = moment.utc().startOf('week');
  if (typeof end === 'undefined' || !moment(end).isValid()) end = moment.utc().endOf('week');
  filter.createdAt = { $gte: start, $lte: end };
  if (typeof tags !== 'undefined') {
    tags = tags.split(',');
    filter.meta = { $all: tags };
  }
  if (likes.startsWith('-')) {
    filter.likes = { $lte: Number(likes.substring(1, 3))};
  }
  else {
    filter.likes = { $gte: Number(likes) };
  }
  req.filter = filter;
  next();
}
