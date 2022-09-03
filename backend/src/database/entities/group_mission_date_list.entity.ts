import {
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import BaseEntity from './base.entity';
import { GroupMissionDate } from './group_mission_date.entity';
import { MissionCategory } from './mission_category.entity';
import { Activity } from './activity.entity';

@Entity('group_mission_date_list', { schema: 'hellthmate' })
export class GroupMissionDateList extends BaseEntity {
  @ManyToOne(
    () => GroupMissionDate,
    (groupMissionDate) => groupMissionDate.GroupMissionDateList,
  )
  GroupMissionDate: GroupMissionDate;

  @Column({ type: 'varchar', name: 'title', comment: '제목' })
  title: string;

  @Column({ type: 'varchar', name: 'content', comment: '내용' })
  content: string;

  @ManyToOne(
    () => MissionCategory,
    (missionCategory) => missionCategory.GroupMissionDateList,
  )
  @JoinColumn()
  MissionCategory: MissionCategory;

  @OneToMany(() => Activity, (activity) => activity.GroupMissionDateList)
  Activity: Activity[];
}
