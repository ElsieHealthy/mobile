import {VehicleType} from '../../types/appEnums';
import {Car as CarIcon} from './Car';
import {Commercial as CommercialIcon} from './Commercial';
import {DualPurpose as DualPurposeIcon} from './DualPurpose';
import {LandVehicle as LandVehicleIcon} from './LandVehicle';
import {LoryTrailer as LoryTrailerIcon} from './LoryTrailer';
import {MotorCycle as MotorCycleIcon} from './MotorCycle';
import {MotorLory as MotorLoryIcon} from './MotorLory';
import {PrimeMover as PrimeMoverIcon} from './PrimeMover';
import {ThreeWheeler as ThreeWheelerIcon} from './ThreeWheeler';

export const getVehicleIcon = (type: VehicleType) => {
  switch (type) {
    case 'Car':
      return CarIcon;
    case 'Commercial':
      return CommercialIcon;
    case 'Dual Purpose':
      return DualPurposeIcon;
    case 'Motor Cycle':
      return MotorCycleIcon;
    case 'Three Wheeler':
      return ThreeWheelerIcon;
    case 'Fork Lift':
      return PrimeMoverIcon;
    case 'Land Vehicle':
      return LandVehicleIcon;
    case 'Motor Lory':
      return MotorLoryIcon;
    case 'Lory Trailer':
      return LoryTrailerIcon;
    case 'Prime Mover':
      return PrimeMoverIcon;
    case 'Other':
      return PrimeMoverIcon;
    default:
      return CarIcon;
  }
};
