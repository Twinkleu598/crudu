import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    id?: string;
  }
}
export default module;