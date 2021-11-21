import { Page } from '../../core.interface';
import * as Raw from '../game-worlds-raw.interface';

export class Processor {
  private page: Page;
  private content: Raw.WorldList | null = null;

  constructor(page: Page) {
    this.page = page;
  }

  private process(): void {
    const world_list = {
      regular_worlds: this.process_world_list(),
      tournament_worlds: this.process_world_list(true),
    };
    this.content = world_list;
  }

  private process_world_list(is_special = false): Raw.World[] {
    const game_world_list_page = this.page('div.TableContentContainer tbody')
      .eq(is_special ? 4 : 2)
      .contents()
      .toArray()
      .slice(1, -1);

    const processed_worldlist: Raw.World[] = game_world_list_page.map(
      (world) => {
        const world_item = this.page(world).contents();

        const processed_world = {
          name: world_item.eq(0).text(),
          online_players: world_item.eq(1).text(),
          location: world_item.eq(2).text(),
          pvp_type: world_item.eq(3).text(),
          battle_eye: world_item.eq(4).find('span img').attr('src'),
          aditional_information: world_item.eq(5).text(),
        };
        return processed_world;
      },
    );

    return processed_worldlist;
  }

  handle() {
    this.process();
  }

  get_content(): Raw.WorldList {
    return this.content;
  }
}
