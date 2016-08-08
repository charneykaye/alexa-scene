/**
 * Author: Charney Kaye <hiya@charney.io>
 * Company: Outright Mental
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, run Scene to Bravo."
 *  Alexa: "Bravo OK."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.110ca0a1-9652-4f9f-aae6-d941fb731c0d";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * Help text
 */
var helptext ="Use the phonetic alphabet to tell me what scene you would like to go to.";

/**
 * GoScene is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var GoScene = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
GoScene.prototype = Object.create(AlexaSkill.prototype);
GoScene.prototype.constructor = GoScene;

GoScene.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("GoScene onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

GoScene.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("GoScene onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to the Alexa Skills Kit. " + helptext;
    var repromptText = helptext;
    response.ask(speechOutput, repromptText);
};

GoScene.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("GoScene onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

GoScene.prototype.intentHandlers = {
    // register custom intent handlers
    "GoScene": function (intent, session, response) {
        var msg = intent.slots.Scene.value + " OK.";
        response.tellWithCard(msg, "Scene", msg);
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask(helptext, helptext);
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the GoScene skill.
    var goScene = new GoScene();
    goScene.execute(event, context);
};

