import { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import { Calendar, Image  } from 'antd';
import type { Moment } from 'moment';

import './style.scss'
import { IMG_PROFILE } from 'src/helper/helper';
  
  
export const PersonalArea= () => {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className="profile-block">
      <div className='profile-content-left'>
        <Image
          width={200}
          src={IMG_PROFILE}
        />
      </div>
      <div className="profile-content-right">
        <div className="calendar-profile">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </div>
  </div>
);
}