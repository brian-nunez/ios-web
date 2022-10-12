import React, { useMemo } from 'react';
import useBattery from '../../hooks/useBattery';
import useNetworkState from '../../hooks/useNetworkState';
import { BatteryFullIcon, BatteryHalfIcon, WifiIcon } from '../icons';

function TopBar() {
  const battery = useBattery();
  const { online } = useNetworkState();

  console.log(battery);

  const icons = useMemo(() => {
    const barIcons: JSX.Element[] = [];
    if (online) {
      barIcons.push(<WifiIcon className="w-8 h-8" />);
    }

    if (battery.isSupported && battery.fetched) {
      const BatIcon = battery.level > 0.9 ?
        BatteryFullIcon : battery.level <= .1
          ? BatteryHalfIcon : BatteryHalfIcon;
      barIcons.push(
        <BatIcon className={battery.charging ? 'text-green-500 fill-green-500 w-8 h-8' : 'w-8 h-8'} />
      );
    } else {
      barIcons.push(<BatteryFullIcon className="w-8 h-8" />);
    }
    return barIcons;
  }, [battery.isSupported && battery.fetched && battery?.charging, online]);

  return (
    <div className=" absolute top-0 left-0 right-0 bg-transparent h-16 flex justify-between items-center px-8 py-2">
      <h1 className="text-white fill-white text-xl font-bold">
        {online ? 'Connected' : 'No Internet'}
      </h1>
      <div className="text-white fill-white text-2xl font-bold flex gap-4">
        {icons}
      </div>
    </div>
  )
}

export default TopBar;
