import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { BattleEye, Location, PvPType } from './worlds.interface';

@Entity('game_worlds')
export class GameWorld {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('enum', {
    enum: ['fully-protected', 'protected', 'inactive'],
  })
  battle_eye: BattleEye;

  @Column('enum', {
    enum: ['open', 'optional', 'retro-hardcore', 'hardcore', 'retro-open'],
  })
  pvp_type: PvPType;

  @Column('enum', {
    enum: ['europe', 'north-america', 'south-america'],
  })
  location: Location;

  @Column('text', { array: true })
  server_conditions: string[];

  @Column('uuid')
  merged_into: string | null;

  @Column('date')
  merged_at: Date | null;

  @Column('text', { array: true })
  server_titles: string[];

  @Column('bool')
  is_special_world: boolean;
}
