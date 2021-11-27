import { getConnectionOptions } from 'typeorm';

export default {
  connectionOptions: async () =>
    Object.assign(await getConnectionOptions(), {
      autoLoadEntities: true,
    }),
};
