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
  const calculate = infectionsByRequestedTime * populate * income;
  const dollarsInFlight = Math.trunc(calculate / timeInDays);

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
  const calculate = infectionsByRequestedTime * populate * income;
  const dollarsInFlight = Math.trunc(calculate / timeInDays);

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
