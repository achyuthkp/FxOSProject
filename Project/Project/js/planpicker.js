// rename this file to planpicker.js


function planSatisfiesUsage(plan, usage) {
  if(plan.sms >= usage.sms && plan.call >= usage.call && plan.data >= usage.data) {
    return true;
  }
  else {
    return false;
  }
}

function desirabilityOf(plan, usage) {

  var d = (
    Math.log(usage.sms/plan.sms) +
    Math.log(usage.call/plan.call) +
    Math.log(usage.data/plan.data)
  ) / plan.cost;
  return d;
}

function findBestNPlans(plans, usage, n) {
  return plans.filter(function (plan) {
    return planSatisfiesUsage(plan, usage);
  }).sort(function (planA, planB) {
    return desirabilityOf(planB, usage) - desirabilityOf(planA, usage);

  }).slice(0, n);
}
