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


// Challenges One
const impact = (item) => {
  const currentlyInfected = item.reportedCases * 10;
  const timeInDays = normalizePeriod(item.periodType, item.timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(timeInDays / 3));

  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
};

const SevereImpact = (item) => {
  const currentlyInfected = item.reportedCases * 50;
  const timeInDays = normalizePeriod(item.periodType, item.timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(timeInDays / 3));

  return {
    currentlyInfected,
    infectionsByRequestedTime
  };
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
