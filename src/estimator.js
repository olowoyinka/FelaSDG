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


const impact = (item) => {
  if (item.periodType === 'weeks') {
    item.timeToElapse *= 7;
  } else if (item.periodType === 'months') {
    item.timeToElapse *= 30;
  }
  const days = item.timeToElapse;
  // common factor
  const factor = Math.floor(days / 3);

  // Challenges One
  const currentlyInfected = item.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);

  // Challenges Two
  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const TotalAvailableBedspace = item.totalHospitalBeds * 0.35;
  let hospitalBedsByRequestedTime = TotalAvailableBedspace - severeCasesByRequestedTime;
  if (hospitalBedsByRequestedTime > 0) {
    hospitalBedsByRequestedTime = Math.floor(hospitalBedsByRequestedTime);
  } else {
    hospitalBedsByRequestedTime = Math.ceil(hospitalBedsByRequestedTime);
  }

  // Challenges Three
  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
  const populate = item.region.avgDailyIncomePopulation;
  const income = item.region.avgDailyIncomeInUSD;
  const dollarsInFlight = Math.trunc(infectionsByRequestedTime * days * populate * income);

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
  if (item.periodType === 'weeks') {
    item.timeToElapse *= 7;
  } else if (item.periodType === 'months') {
    item.timeToElapse *= 30;
  }
  const days = item.timeToElapse;
  // common factor
  const factor = Math.floor(days / 3);

  // Challenges One
  const currentlyInfected = item.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * (2 ** factor);

  // Challenges Two
  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const TotalAvailableBedspace = item.totalHospitalBeds * 0.35;
  let hospitalBedsByRequestedTime = TotalAvailableBedspace - severeCasesByRequestedTime;
  if (hospitalBedsByRequestedTime > 0) {
    hospitalBedsByRequestedTime = Math.floor(hospitalBedsByRequestedTime);
  } else {
    hospitalBedsByRequestedTime = Math.ceil(hospitalBedsByRequestedTime);
  }

  // Challenges Three
  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
  const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
  const populate = item.region.avgDailyIncomePopulation;
  const income = item.region.avgDailyIncomeInUSD;
  const dollarsInFlight = Math.trunc(infectionsByRequestedTime * days * populate * income);

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
