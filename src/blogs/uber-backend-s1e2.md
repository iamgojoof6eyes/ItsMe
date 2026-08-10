---
title: "How Uber handles backend S1 E2"
slug: "uber-backend-s1e2"
date: "2026-08-10"
readTime: "5 min read"
category: "Tech"
matchScore: "86% Match"
rating: "HD 4K HDR"
season: "S1"
episode: "E2"
coverImage: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*06fBqJ0bSCeMLLrlW3BESg.jpeg"
synopsis: "Getting to know how the Uber handles requests and how they optimized their systems to handle the load Episode 2"
author: "Raunak"
authorRole: "Student & Explorer"
authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Raunak"
tags: ["Backend", "Optimization", "Blog", "Learning How", "Tech"]
featured: true
---

# Previously on Uber backend

So till this point, we all know how Uber optimised their issues to enhance user experience by introducing RAMEN and how they later switched to gRPC for further improvements. If you haven't read the previous blog which explained all this, I highly recommend doing it; you can read it [here](https://its-me-pi.vercel.app/documentary/uber-backend-s1e1).



# The new challenge

So after handling all the issues with the backend and the server load, there was still a problem with the requests. Uber recreceives realtime updates for millions of locations around the globe, so the issue was how to handle this and show the users data they care about, for example it will be waste of resources to show someone location of a driver which is let's say 100KM away from the user, so to handle that you will think take a ring around the user then calculate the distance of all riders in the ring and show it to the user if they are in the ring, right? But this approach is not optimised at all. Why? Because Uber have millions of users around the globe, how many calculations do they have to do for every user? So Uber came up with a much smarter way to solve this: spatial partitioning. It simply means, instead of treating an area as a whole, break it into smaller pieces by drawing shapes on it, so instead of a whole area, just make grids on it. So now, you can take a driver's position and map it to a clear region; in this way, when a user books a ride, they just see in which region they are and show the relevant drivers.



# Issue with grid partitioning

So after solving the issue how the booking ride will take place, they faced a new challenge by dividing the world into grids, which we call the **Corner Bias**, as all the neineighbors are not equi-distant from the center of the squre i.e. the diagonals are further away than the points top or left of it. Suppose you have a square who's length is _a_, if we measure the up or down or left or right distance from the center it's a/2 but if we calculate the distance to the diagonal it will be a/√2, we can clearly see the diagonal is further away so it would have been a loss of a driver to cover that extra distance as well as the loss of time for the user.



# Fixing Corner Bias

So to overcome the issue with the **Corner Bias**, Uber came up with a brilliant solution, instead of dividing the world into smaller square they divided it in hexagon in form of honeyhoneycomb, they named it [H3 (Hexagonal Hierarchical Spatial Index)](https://www.uber.com/in/en/blog/h3/), which resulted in the same distances to all the neighbouring points from the center. So, for a given GPS coordinate, it takes a look at which hexagon it is in and returns the H3 index. So now instead of asking for the distance of every driver, you ask for the kRing, so those hex's withing K steps from your rider's cell, so when k=1 it will form the first layer, which will have 7 hexagons in total; if k=2 it will form the second layer is then included and so on. So it bringed down the time complexity from **O(n)**, where _n_ can be million of active drivers, to **O(k² + m)**, where _k_ is the layer of ring (radius) and _m_ is the number of drivers in the nearby region. It just didn't solve the problem with finding nearby drivers, but also resulted in many benefits such as finding the ETA of the driver and/or creating dynamic pricing regions or for things like forecasting demands.



# The Network Connectivity

So the next issue in the line is the network connectivity of the user, as we can't ensure a stable internet connection always outside of home. Uber have to find a way to process all the requests and function properly within these limitations. 

So first of all, they had to reduce the network latency, or what we call ping, of the server. They handled it by using Edge server, which is nothing but a server sitting near the user, outside of the central data center, so now instead of sending a request to the network request to the centeral data centers they can just send the request the data to this Edge servers to get a proper response, which greatly reduced the ping as the shorter distance between the server and client lower the ping will be. Not only this Edge servers store the data of users and client they also cache the relevant data, thus resulting in even lower latency.

So after fixing the issue with the low latency, the next issue was how to update the GPS location of the current driver on the map. Let's say the server had to send the 3 updates in the period of 20 seconds to mark the driver, but a network drop happens, so instead of making the driver jump the points when the network comes back, they had to make it smooth, or even if their is no network issues it will be weird to just make the driver position jump from one point to another. Here they use something called **Dead Reckoning**,  which simply means the system will predict the path of the driver based on their last known information such as position, speed, direction. This then used in combination of **Kalman Filters**, which is an algorithm which helps to predict the path of an object by combining the data with dynamic model and noise of the equipment, I will not go deep in algorithm here but this is how they predicts and correct the next position of the driver on the map when the update arrives.



# Conclusion 

So this is how the simple-looking UI of Uber handles its backend, and we can also see by this how you have to optimise your applications when you want to scale them.

So this is all for the end of the season. Hope you learnt something new and interesting.