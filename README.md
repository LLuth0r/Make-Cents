# Make Cent$

## Project Description

Make Cent$ is an Airtable and React build where the user is able to make different financial decisions and the impacts those decisions could or would have had on them. Navigating from the home page, the user is able to select 3 different options: 100 Pennies Make Cent$, Time Traveller$, and Vacation Fund$.

The main portion of the app is called '100 Pennies Make Cent$', which allows the user to see the impact of how saving a dollar a day could impact them based on how many years they saved that money.

Time Traveller$ is about taking a trip back in time and investing in a publicly traded company, allowing the user to see how much their investment would be worth now.

Vacation Fund$ is about budgeting their personal finances and displaying that information in a visual manner. It starts with them inputting their income and adding expenses. This will display a chart that also returns a 'Vacation Fund$' section which is the leftover amount per month. They can adjust their budgeting by adding or deleting expenses.

---

## Wireframes

The wireframes below depict the homepage, 100 Pennies Make Cent$, Time Traveller$, and Vacation Fund$ pages in web, phone and tablet formats. The homepage has a header containing the name of the App, and contains 3 icons with descriptions of each component of the app. Clicking on the icons will take them to that components page. The pages change their display format based on the screen size.\
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107543/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Phone%20Homepage.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107541/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Phone%20Dollar.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Phone%20Time%20Traveler.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Phone%20Vacation.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Tablet%20Homepage.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Tablet%20Dollar%20Day.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Tablet%20Time%20Traveler.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Tablet%20Vacation%20Funds.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107542/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Web%20Homepage.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107541/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Web%20Dollar%20Day.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107541/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Web%20Time.png)
![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607107541/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Web%20Vacation.png)

---

## Component Hierarchy

![imageAlt](https://res.cloudinary.com/decd84s0g/image/upload/v1607108467/Heroes%20and%20Villains/Make%20Cent%24/Make%20Cents%20Component%20Hierarchy.png)

---

## API and Data Sample

https://airtable.com/shrsMWWTU8o4gSole

Airtable is returning the data for this base as shown below:\

```
{
    "records": [
        {
            "id": "recjfsGoTDtEvErqz",
            "fields": {
                "number of years": 15,
                "dollars per year": 365,
                "total": 5475
            },
            "createdTime": "2020-12-04T17:18:03.000Z"
        },
        {
            "id": "recYhfhRcqZcKIHmB",
            "fields": {
                "total": 12775,
                "number of years": 35,
                "dollars per year": 365
            },
            "createdTime": "2020-12-04T17:18:03.000Z"
        },
        {
            "id": "recbztFPMaekuFFOH",
            "fields": {
                "total": 3650,
                "number of years": 10,
                "dollars per year": 365
            },
            "createdTime": "2020-12-04T17:18:03.000Z"
        }
    ],
    "offset": "recbztFPMaekuFFOH"
}
```

---

### MVP/PostMVP

#### MVP

- Home page with clickable icons that route to each component feed
- Get and post dollar per day years from Airtable
- Increase/Decrease buttons for number of years saved
- Get and post income and expenses from Airtable
- Use input field and buttons to update budget
- Dynamically rendered charts

#### PostMVP

- Collaborate with a UX student to make the UI more attractive/responsive
- API call for financial stock historic performance
- Get and post year/month/day and amount invested
- Get and post stock financial performance of stock based on inputs
- Dynamically render chart

---

## Project Schedule

| Day      | Deliverable                                        | Status     |
| -------- | -------------------------------------------------- | ---------- |
| Dec 3-4  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| Dec 4    | Project Approval                                   | Incomplete |
| Dec 5-6  | Component Creation / Get, Set, Delete Data         | Incomplete |
| Dec 7    | Basic Styling / CSS Layouts                        | Incomplete |
| Dec 8    | Dynamic Chart Integration                          | Incomplete |
| Dec 9-10 | Advanced CSS / MVP                                 | Incomplete |
| Dec 11   | Presentations                                      | Incomplete |

---

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      3hrs      |               |             |
| Airtable Setup            |    H     |      2hrs      |               |             |
| Homepage Setup            |    H     |      2hrs      |               |             |
| Clickable Icons           |    H     |      2hrs      |               |             |
| Navbar Setup              |    H     |      1hrs      |               |             |
| Data population pg 1      |    H     |      3hrs      |               |             |
| Data population pg 2      |    H     |      3hrs      |               |             |
| Input Creation pg 1       |    H     |      3hrs      |               |             |
| Input Creation pg 2       |    H     |      3hrs      |               |             |
| Data Creation/Update pg 1 |    H     |      3hrs      |               |             |
| Data Creation/Update pg 2 |    H     |      3hrs      |               |             |
| Data Deletion pg 2        |    H     |      2hrs      |               |             |
| Graph Integration pg 1    |    H     |      4hrs      |               |             |
| Graph Integration pg 2    |    H     |      4hrs      |               |             |
| Component CSS pg 1        |    H     |      3hrs      |               |             |
| Component CSS pg 2        |    H     |      3hrs      |               |             |
| Component CSS pg 3        |    H     |      3hrs      |               |             |
| Total                     |    H     |     47hrs      |               |             |

---

## SWOT Analysis

### Strengths:

I have a very good understanding of how I want the application to look and function and what each component will be doing. I feel like I have a well thought out plan for what needs to be done and the stages of project completion. I know what labs and exercises I can reference for help when needed.

### Weaknesses:

I am not as strong using functional components and props certainly still confuse me at times still. I will likely use most of my research time/TA help on making sure I have everything properly setup. Dynamic charts is also completely new to me, but something I strongly want to use to properly execute my vision for the project.

### Opportunities:

This project will help propel my understanding of React from a 3 to hopefully a 4.5/5 out of 5. I am truly excited to build this app and really hope to get to my Post MVP material so I can have it built out the way I have it envisioned.

### Threats:

When I get stuck, I tend to invest a lot of time trying to find the solution which I know takes away time from the project itself. I'm hoping I can manage this one a lot better from a time perspective. The dynamic charts will also be a big time threat as I do not have any experience using them to visually represent data on a webpage.
