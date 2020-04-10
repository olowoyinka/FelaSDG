/* const datas = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
}; */

const normalizePeriod = (period, timeToElapse) => {
  switch (period) {
    case 'days':
      return timeToElapse;
    case 'weeks':
      return (7 * timeToElapse);
    case 'months':
      return (30 * timeToElapse);
    default:
      break;
  }

  return null;
};

const impact = (item) => {
  // Challenges One
  const currentlyInfected = item.reportedCases * 10;
  const timeInDays = normalizePeriod(item.periodType, item.timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(timeInDays / 3));

  // Challenges Two
  const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 0.15);
  const TotalAvailableBedspace = Math.floor(item.totalHospitalBeds * 0.35);
  const hospitalBedsByRequestedTime = TotalAvailableBedspace - severeCasesByRequestedTime - 1;

  // Challenges Three
  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
  const dollarsIn = item.region.avgDailyIncomePopulation * item.region.avgDailyIncomeInUSD;
  const dollarsInFlight = infectionsByRequestedTime * timeInDays * dollarsIn;

  const value = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  return value;
};

const SevereImpact = (item) => {
  // Challenges One
  const currentlyInfected = item.reportedCases * 50;
  const timeInDays = normalizePeriod(item.periodType, item.timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(timeInDays / 3));

  // Challenges Two
  const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 0.15);
  const TotalAvailableBedspace = Math.floor(item.totalHospitalBeds * 0.35);
  const hospitalBedsByRequestedTime = TotalAvailableBedspace - severeCasesByRequestedTime - 1;

  // Challenges Three
  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
  const dollarsIn = item.region.avgDailyIncomePopulation * item.region.avgDailyIncomeInUSD;
  const dollarsInFlight = infectionsByRequestedTime * timeInDays * dollarsIn;

  const value = {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  return value;
};

const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    data: input,
    impact: impact(data),
    severeImpact: SevereImpact(data)
  };
};


export default covid19ImpactEstimator;
