import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}

  async getHello(): Promise<string> {
    ///////////////
    // const response = this.httpService
    //   .get('https://api.github.com/users/paulrda')
    //   .pipe(
    //     map((response) => response.data),
    //     catchError((e) => {
    //       throw new HttpException(e.response.data, e.response.status);
    //     }),
    //   );
    // return await firstValueFrom(response);
    ///////////////

    ////////////////////////
    const { data } = await firstValueFrom(
      this.httpService.get<string>('https://api.github.com/users/paulrda').pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
    ////////////////////////
  }
}
