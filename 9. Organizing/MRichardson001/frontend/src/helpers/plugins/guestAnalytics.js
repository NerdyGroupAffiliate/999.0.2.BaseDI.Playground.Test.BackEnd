import { canUseDOM } from "../utils";
import { debounce } from "lodash";
import { ServiceBusClient } from "@azure/service-bus"
import moment from "moment";
import config from "../../config";
import * as Sentry from '@sentry/browser';
import publicIp from 'public-ip';

//Global
if (!!config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN
  });
}

let cookieList = {};
const { connectionString, queueName } = config.SERVICE_BUS;

//helpers
function getUTCDateTime(){
        return (new Date()).toISOString();
}
function handleNull(){
        return null;
}

//Event Handlers
export const EventSaveQuote = canUseDOM ? function(propertyId, price, sqFt, beds, floorPlanId, unitId, firstName, lastName, emailAddress, userId, quoteId){
        let payload = {
                table: "EventSaveQuote",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: propertyId,
                        pageUrl: window.location.href,
                        price: price,
                        sqFt: sqFt,
                        beds: beds,
                        floorPlanId: floorPlanId,
                        unitId: unitId,
                        firstName: firstName,
                        lastName: lastName,
                        emailAddress: emailAddress,
                        userId: userId,
                        quoteId: parseInt(quoteId),
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventSignIn = canUseDOM ? function(userId, emailAddress){
        let payload = {
                table: "EventSignIn",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        pageUrl: window.location.href,
                        emailAddress: emailAddress,
                        guestCardId: null, //waiting on this feature
                        userId: userId,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventSubmitForm = canUseDOM ? function(firstName, lastName, emailAddress, phoneNumber){
        let payload = {
                table: "EventSubmitForm",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: null, //waiting on it to be available on other form submits.
                        pageUrl: window.location.href,
                        firstName: firstName,
                        lastName: lastName,
                        emailAddress: emailAddress,
                        phoneNumber: phoneNumber,
                        guestCardId: null, // waiting on this feature.
                        formName: null, //waiting on HTML form names to available.
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventSearchFloorPlan = canUseDOM ? function(propertyId, moveInDate, beds){
        let payload = {
                table: "EventSearchFloorPlan",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: propertyId,
                        moveInDate: moment(moveInDate).format('YYYY-MM-DD'),
                        beds: parseInt(beds),
                        pageUrl: window.location.href,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventSearchApartment = canUseDOM ? debounce(function(regionId, subRegionName, minRent, maxRent, minBeds, maxBeds) {
        let payload = {
                table: "EventSearchApartment",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        regionId: regionId,
                        subRegionName: subRegionName,
                        minRent: minRent,
                        maxRent: maxRent,
                        minBeds: minBeds,
                        maxBeds: maxBeds,
                        pageUrl: window.location.href,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}, 1000): handleNull;

export const EventViewFloorPlan = canUseDOM ? function(propertyId, floorplanId, moveInDate){
        let payload = {
                table: "EventViewFloorPlan",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: propertyId,
                        floorPlanId: parseInt(floorplanId),
                        moveInDate: moveInDate,
                        pageUrl: window.location.href,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventViewMedia = canUseDOM ? function(propertyId, mediaType){
        let payload = {
                table: "EventViewMedia",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: propertyId,
                        mediaType: mediaType,
                        pageUrl: window.location.href,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventViewUnit = canUseDOM ? function(propertyId, floorPlanId, unitId, sqFt, beds){
        let payload = {
                table: "EventViewUnit",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: propertyId,
                        floorPlanId: parseInt(floorPlanId),
                        unitId: parseInt(unitId),
                        pageUrl: window.location.href,
                        sqFt: sqFt,
                        beds: beds,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}: handleNull;

export const EventViewProperty = canUseDOM ? debounce(function(propertyId) {
        let payload = {
                table: "EventViewProperty",
                data: {
                        sessionUuid: cookieList["session_uuid"],
                        propertyId: propertyId,
                        pageUrl: window.location.href,
                        createdAt: getUTCDateTime()
                }
        }
        QueueSender(payload);
}, 10): handleNull;

export const ViewCapture = canUseDOM ? debounce(async function(page, regionId, subRegionName) {
        function runCookies(){
                checkCookie("machine_uuid", 2160);
                checkCookie("session_uuid", 3);
        }

        async function checkCookie(key, hours) {
                let value = getCookieValue(key);
                if(value !== null && /^\d+$/.test(value) && value.length === 23){
                        cookieList[key] = createCookie(key, value, hours)
                }else{
                        cookieList[key] = createCookie(key, uuid(), hours);
                        await sendId(key);
                }
        }

        function getCookieValue(key) {
                let val = document.cookie.match('(^|[^;]+)\\s*' + key + '\\s*=\\s*([^;]+)');
                return val ? val.pop() : null;
        }

        function createCookie(key, value, hours) {
                let expTime = new Date(new Date().getTime() + hours*60*60*1000);
                document.cookie = key + "=" + value + "; expires=" + expTime.toGMTString() + "; path=/";
                return value;
        }

        async function sendId(key){
                if( key === "session_uuid"){
                        let payload = {
                                table: "Session",
                                data: {
                                        sessionUuid: cookieList["session_uuid"],
                                        machineUuid: cookieList["machine_uuid"],
                                        ipAddress: await getClientIPAddress(),
                                        referrer: document.referrer,
                                        campaignCode: getUTMcode("utm_campaign"),
                                        sourceCode: getUTMcode("utm_source"),
                                        switchCode: getUTMcode("switch_code"),
                                        createdAt: getUTCDateTime()
                                }
                        }
                        QueueSender(payload);
                }
                else if(key === "machine_uuid"){
                        let payload = {
                                table: "Machine",
                                data: {
                                        machineUuid: cookieList["machine_uuid"],
                                        device: navigator.userAgent,
                                        createdAt: getUTCDateTime()
                                }
                        }
                        QueueSender(payload);
                }
        }

        function uuid() { // think about performance BigInt is faster, how long it will last, how secure it is.
                let array = new Uint32Array(1);
                const crypto = window.crypto || window.msCrypto;
                crypto.getRandomValues(array);
                let d = new Date();
                return  d.getTime() + crypto.getRandomValues(array)[0].toString().padStart(10, "0");
        }

        function getUTMcode(name) {
                name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(document.referrer);
                return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        function EventViewRegion(){
                let payload = {
                        table: "EventViewRegion",
                        data: {
                                sessionUuid: cookieList["session_uuid"],
                                regionId: regionId,
                                pageUrl: window.location.href,
                                createdAt: getUTCDateTime()
                        }
                }
                QueueSender(payload)
        }

        function EventViewSubRegion(){
                let payload = {
                        table: "EventViewSubRegion",
                        data: {
                                sessionUuid: cookieList["session_uuid"],
                                subRegionName: subRegionName,
                                pageUrl: window.location.href,
                                createdAt: getUTCDateTime()
                        }
                }
                QueueSender(payload)
        }

        function EventViewPage(){
                let payload = {
                        table: "EventViewPage",
                        data: {
                                sessionUuid: cookieList["session_uuid"],
                                pageUrl: window.location.href,
                                createdAt: getUTCDateTime()
                        }
                }
                QueueSender(payload);
        }

        async function getClientIPAddress() {
                try{
                        return await publicIp.v4();
                }
                catch(err){
                        // Sentry.captureException(err);
                        // ignore
                        return null
                }
        }

        runCookies();
        EventViewPage();
        switch(page){
                case "region":      EventViewRegion();
                        break;
                case "sub-region":  EventViewSubRegion();
                        break;
                default:
                        break;
        }
}, 10): handleNull;

async function QueueSender(payload){
        try{
                if (!connectionString || !queueName || !payload.data.sessionUuid ) {
                                return null
                };

                const sbClient = ServiceBusClient.createFromConnectionString(connectionString);
                try {
                        const queueClient = sbClient.createQueueClient(queueName);
                        const sender = queueClient.createSender();
                        const message= {
                                body: payload
                        };
                        await sender.send(message);
                        await queueClient.close();
                } catch (err){
                        Sentry.captureException(err);
                }
                finally {
                        await sbClient.close();
                }
        }catch(err){
                // Sentry.captureException(err);
                // Ignore error to prevent rate limiting
        }
}
