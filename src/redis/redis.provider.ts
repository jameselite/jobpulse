import { Provider } from '@nestjs/common';
import { Redis } from 'ioredis';

export const REDIS_CLIENT = 'REDIS_CLIENT';

export const redisProvider: Provider = {
  provide: REDIS_CLIENT,
  useFactory: () => {
    return new Redis({
        host: "localhost",
        port: 6379
    });
  },
};