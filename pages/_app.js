import '../styles/global.css'

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '2a4ca00e-fc78-401a-9740-335f5d76a94d',
    clientToken: 'pub9a1fe748671c430aacdc711f0d09d2bf',
    site: 'datadoghq.eu',
    service:'car',

    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 100,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});

datadogRum.startSessionReplayRecording();

console.log("🚀 ~ file: _document.js:31 ~ datadogRum", datadogRum)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
