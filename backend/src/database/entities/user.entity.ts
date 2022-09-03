import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Activity } from './activity.entity';
import BaseEntity from './base.entity';
import { Group } from './group.entity';
import { UserGroup } from './user_group.entity';

@Entity('user', { schema: 'hellthmate' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', name: 'nickname', comment: '닉네임' })
  name: string;

  @Column({ type: 'varchar', name: 'profile', comment: '프로필' })
  profile: string;

  @Column({ type: 'varchar', name: 'token', comment: '카카오톡 OAuth 토큰' })
  token: string;

  @OneToMany(() => UserGroup, (userGroup) => userGroup.User)
  UserGroup: UserGroup[];

  @OneToMany(() => Activity, (activity) => activity.User)
  Activity: Activity[];
}
