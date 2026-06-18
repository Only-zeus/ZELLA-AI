const membership = localStorage.getItem(“zellaMembership”) || “FREE”;

const premiumPages = [
“premium.html”,
“premium-signals.html”,
“voice-copilot.html”,
“vip-intelligence.html”
];

const proPages = [
“scanner-pro.html”,
“advanced-alerts.html”
];

const currentPage =
window.location.pathname.split(”/”).pop();

if (
premiumPages.includes(currentPage) &&
membership !== “PREMIUM”
) {

alert(
“Premium Membership Required.”
);

window.location.href =
“subscription.html”;

}

if (
proPages.includes(currentPage) &&
membership === “FREE”
) {

alert(
“Pro Membership Required.”
);

window.location.href =
“subscription.html”;

}

function checkFeatureAccess(feature){

const premiumFeatures = [
“premiumSignals”,
“voiceCopilot”,
“vipIntelligence”,
“autoTrading”
];

const proFeatures = [
“advancedScanner”,
“cloudSync”,
“unlimitedAlerts”
];

if(
premiumFeatures.includes(feature) &&
membership !== “PREMIUM”
){

alert(
  "Upgrade to Premium to unlock this feature."
);
return false;

}

if(
proFeatures.includes(feature) &&
membership === “FREE”
){

alert(
  "Upgrade to Pro to unlock this feature."
);
return false;

}

return true;

}

window.checkFeatureAccess =
checkFeatureAccess;

console.log(
“Premium Guard Active”,
membership
);