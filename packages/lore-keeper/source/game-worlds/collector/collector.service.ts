import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Collector {
  private readonly logger = new Logger(Collector.name);
  private page: Observable<AxiosResponse<any, any>>;
  constructor(private fetch: HttpService, private config: ConfigService) {}
  public async collect(): Promise<Observable<AxiosResponse<any, any>>> {
    try {
      this.logger.log('req | /community/?subtopic=worlds');
      return this.fetch.get(
        `${this.config.get('BASE_URL')}${this.config.get('GAME_WORLDS_URL')}`,
        {
          headers: {
            'Accept-Encoding': 'gzip, deflate',
          },
        },
      );
    } catch (err) {
      this.logger.error(err);
    }
  }

  public async get_page() {
    return this.page;
  }
}
