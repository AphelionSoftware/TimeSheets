/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="LightSwitchTools.js" />

myapp.AddEditResourcePlanByDay.created = function (screen) {
    // Write code here.
    msls.application.lightswitchTools.configureCaptureForm(screen);
};
myapp.AddEditResourcePlanByDay.DeletePlan_execute = function (screen) {
    // Write code here.
    screen.ResourcePlanByDay.deleteEntity();

    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });

};