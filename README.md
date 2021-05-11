# On this Day

You are looking at my test task, which I am doing for one UA / US IT company. This task is supposed to develop a widget to show which users have a Birthday today. I asked to change the domain to make a widget to present today's historical events from Wiki.

## Implementation

- Widget / App developed using [Create React App](https://create-react-app.dev/). So you you can use usual CRA approaches to run this app on your localhost.
- Since I my app will not follow the given design Pixel Perfect, I decided to spent some time on writing my own UI design. Check it on [Figma](https://www.figma.com/proto/YWWyHyEycQwDFWIjx2JgW7/This-Day-in-History?node-id=202%3A6&scaling=min-zoom&page-id=0%3A1).

## Features CheckList

| Rdy? | Feature ID | Description                                                                                                  |
| :--: | ---------: | :----------------------------------------------------------------------------------------------------------- |
|  ✅  |       F-11 | List Events on the "Today" Tab                                                                               |
|  ✅  |       F-12 | Events should be sorted chronically by it's year                                                             |
|  🏗  |       F-21 | On non-leap years, events from the Feb 29th should be displayed on the "Today" tab on Feb 28th               |
|  ❌  |       F-31 | List Events from last 7 days on "Past Days" Tab                                                              |
|  ❌  |       F-51 | List Events from next 7 days on "Next Days" Tab                                                              |
|  ❌  |       F-61 | By default, the widget displays only 10 first events                                                         |
|  ❌  |       F-71 | Provide "Show more" button to list 10 events more                                                            |
|  ❌  |       F-81 | Show "Show more" button only if there are items to show more                                                 |
|  ✅  |       F-91 | Show "Unfortunately there is no users with birthdays on these dates" message if no events on the chosen tab  |
|  ❌  |       F-X1 | Group events by day on "Past Days" & "Next Days" Tabs                                                        |
|  ❌  |       F-X2 | Provide navigation sidebar to navigate on days on "Next/Past Days" Tabs                                      |
|  ❌  |      NF-10 | Adaptive for narrow & wide screens                                                                           |
|  ❌  |      NF-20 | Test cross-browser compatibility                                                                             |
|  ✅  |      NF-30 | Use Vodafone Regular font                                                                                    |
|  ❌  |      NF-X1 | Ensure that project structure and source code are clear and understandable                                   |
|  ✅  |      NF-X2 | Provide a very short README file that describes project structure, build instructions and launch instruction |
|  ✅  |      NF-X3 | Publish source code to a accessible git repository                                                           |

### If you wonder how to run [CRA](https://create-react-app.dev/) app

```bash
yarn
yarn start
```

### Estimating process

|     | Component / Feature    |  hours  |
| --- | :--------------------- | :-----: |
|     | Layout & Styling       |    1    |
|     | Navigation             |    ½    |
|     | Event Component        |    ½    |
|     | Event List Component   |    1    |
|     | Global State (Context) |    1    |
|     | Api                    |    ½    |
|     |                        | **4,5** |
