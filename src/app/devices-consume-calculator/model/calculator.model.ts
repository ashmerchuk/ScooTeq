export type VoltageOutput = '110V' | '220V' | '440V';

export interface DeviceItem {
  id: number;
  name: string;
  amount: number;
  consume: number;
  deactivate?: boolean;
};

export interface CalculatorConditions {
  kwhCost: number,
  weeklyWorkHours: number,
  evaluatedPeriod: number,
}
