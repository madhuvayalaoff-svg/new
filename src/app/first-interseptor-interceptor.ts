import { HttpInterceptorFn } from '@angular/common/http';

export const firstInterseptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
