# On this Day

You are looking at my test task, which I am doing for one UA IT company. This task is supposed to develop a widget to show which users have a Birthday today. I asked to change the domain to make a widget to present Who has Anniversary on the date.

## Implementation

- Widget / App developed using [Create React App](https://create-react-app.dev/). So you you can use usual CRA approaches to run this app on your localhost.

## Features CheckList

| Rdy? | Feature ID | Description                                                              |
| :--: | :--------: | :----------------------------------------------------------------------- |
|  ✅  |    F-10    | List Events on the "Today" Tab                                           |
|  ✅  |    F-11    | Lists of users on the tabs “Past dates” and “Upcoming dates”             |
|  ✅  |    F-12    | “Past dates” and “Upcoming dates” are sorted at first by date of birth   |
|  ✅  |    F-13    | Then “Past dates” and “Upcoming dates” are sorted alphabetically by name |
|  ✅  |    F-20    | Rule "February 29th"                                                     |
|  ✅  |    F-30    | “Past Dates” includes users whose anniversaries were in the past 2 weeks |
|  ✅  |    F-40    | “Today” list includes users whose anniversary matches the current date   |
|  ✅  |    F-50    | Next Dates” includes users whose anniversaries were in the past 2 weeks  |
|  ✅  |    F-60    | After tab open, display only first 10 users of corresponding list        |
|  ✅  |    F-70    | The “Show more” button should show additional 10 users in list.          |
|  ✅  |    F-80    | Do not display “Show more” button, if there no more additional users     |
|  ✅  |    F-90    | Widget should display message if there is no users on current list       |

### If you wonder how to run [CRA](https://create-react-app.dev/) app

```bash
yarn
yarn start
```

### Estimating Completing

|     | Component / Feature | hours  |
| --- | :------------------ | :----: |
|     | Figma Outlining     |  1/2   |
|     | Applying Styling    |  1/2   |
|     | Showmore Button     |  1/4   |
|     | Adaptive layout     |  1/2   |
|     | Event Card remaking |   1    |
|     | Toggling to New API |  1/2   |
|     | COdequality fixing  |  1/2   |
|     |                     | **5h** |
