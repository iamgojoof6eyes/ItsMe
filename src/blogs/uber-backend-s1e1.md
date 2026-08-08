---
title: "How Uber handles backend"
slug: "uber-backend-s1e1"
date: "2026-07-25"
readTime: "5 min read"
category: "Tech"
matchScore: "84% Match"
rating: "HD 4K HDR"
season: "S1"
episode: "E1"
coverImage: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*06fBqJ0bSCeMLLrlW3BESg.jpeg"
synopsis: "Getting to know how the Uber handles requests and how they optimized their systems to handle the load"
author: "Raunak"
authorRole: "Student & Explorer"
authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Raunak"
tags: ["Backend", "Optimization", "Blog", "Learning How", "Tech"]
featured: true
---

# Knowing backend

Backend simply means the server side part of any website or app or software system. If this is hard to grasp let me explain with example of a resturant. Suppose you walk into a resturant, you tell the waiter your orders you wanted, the waiter will go and tell the chef to prepare all this for you and the waiter will come and give you your orders. So the resturant here is the website or app, the decoration you see is your frontend (ui/ux) which attracts you and make your visit good, the waiter here is API which you calls for your request, and the chef, you gussed it right he is our backend which works in the background (server side) to give you your order. So I hope that makes somewhat clear to you. Now let's move on to our question **How uber handles it's backend?**

# Knowing the problem
Before moving onto the part where we discuss the solution uber came up with, first of all let us understand what is the problem, because without understanding the problems we will not be able to really understand the significance of the solution.
So as we all know Uber has a huge userbase, there are millions of users booking ride every second across the globe, so it was a challenge for a uber to create an optimized backend which can show the results as fast as possible and also handle all the request with ease. They were not perfect from beginning they gradually improved and made it better, we will be discussiong all this in this blog so let's move ahead.

# The solution

## The Polling Approch

So in early days uber used [polling based approch](https://www.geeksforgeeks.org/system-design/polling-in-system-design/) to handle it queries, that means the client sends request to the server after a set interval of time, this approch may seems correct for small applications but we are talking about Uber here, this approch results in many unnecessary load for the server (if the status is not updated in the new request), it also leads to faster battery drain, app sluggishness, and network-level congestion. The most challenging part about polling was the cold startup of the up, as the app is opened for the first time, every serivce tries to pull latest data from the backend to render on UI. Thus the polling approch was not scalable at all.

## The RAMEN

So the developers at Uber came with a solution to eleminate the Polling based approch, by introducing their SSE (Server Side Events) which they named **RAMEN** (**R**eal-time **A**synchronous **ME**ssaging **N**etwork). Yeah I know I threw some big words like SSE, Asynchronous let me break them down. So SSE means that instead of client asking for new data everytime the server sends the data when they are changed, and asynchronous means the task can run without blocking anything currently ongoing that's all.
So by introducing RAMEN they divided the task into 3 major things:

- **When** to push
- **What** to push
- **How** to push

So for their _When to push_ they introduced a [microservice](https://www.geeksforgeeks.org/system-design/microservices/) called fireball, so what it do is handle when should the data from the server side pushed to the client side, the push are made when their is change in location or the user books a new ride or the driver confirms a new ride, also for location it doesn't push in slightest change it checks if the distance is long enough to be pushed or not.
After the _When to push_ is done the request is made to API which fetches the informations it have to push to the client this is our _What to push_. When the all the information are retrieved a push is made, for _How to push_ the RAMEN comes into picture it handles how the data should be pushed to the client.
However they now moved to a better approch now which is [gRPC](https://www.geeksforgeeks.org/software-engineering/what-is-grpc/) by which the flow of data is bi-directional, that means instead of only server pushing data the client can now also make requests, this is implemented to make sure the data reaches the user even under the network fluctuations.

# To be continued
I guess this is long enough for one topic so we will continue this discussion in next episode. Till then make sure to learn some new technicals words or feel free to explore on your own

# Conclusion
So what we came to know till now is how the Uber shifter from **Polling based approach** to **Push based approach** and how they gradually fixed and optimized their solutions.
