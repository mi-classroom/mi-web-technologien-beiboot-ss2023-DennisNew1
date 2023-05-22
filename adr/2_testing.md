# Testing - http-server, ngrok and eruda

## Status

Accepted

## Context

Augmented reality applications are created for devices with a camera, which also provides position data of it. Testing this on a personal computer creates a special challenge for developers: Most webcams do not provide such data. It needs to be emulated or directly tested on a phone or tablet. 
Furthermore due to security restrictions, only secure connections (https) are allowed to have access to the device camera. (See [MDN getUserMedia Security](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#security)).
These two problems are closely related together so they are decided in this ADR together.
Options for a solution are

- emulate webcam
- Deploying the project to a server
- forward a (localhost) port to a webserver

## Decision
Emulating a webcam is possible with programs like [OBS](https://obsproject.com/) with [VirtualCam Addon](https://obsproject.com/forum/resources/obs-virtualcam.949/). But those do provide orientation and position data, which is crucial for augmented reality. There this is not adaptable. 
Deploying the project to a HTTPS-secured server is working, but could be a hassle for developing applications, as it takes a lot of time. Especially for node.js apps with longer buildtimes this is a problem. This is not the case here but should be kept in mind.
Therefore remote port-forwarding seems to be nice option. This can be done manually or with applications like [ngrok](https://ngrok.com/). For ease of use reason ngrok is used as it also provides https directly. However, for this to work somekind of local server is needed. Ngrok can not serve index.html directly. For this the simple [http-server](https://github.com/http-party/http-server) npm packge is used.
As mobile Browser version do not provide a console or other debug options, [eruda](https://github.com/liriliri/eruda), a mobile console js package is added as well. 

## Consequences

### Pros
- testing is possible
- testing on actual device.
- project itselfs stays light:
    - http-server, ngrok are not part of the repo
- no long deploy times just for dev testing


### Cons
- Dev tools from eruda are still inferior to the original
- project dependency to ngrok to stay free


