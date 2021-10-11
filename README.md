![Spotiforce](img\Spotiforce.png)

![badge](https://img.shields.io/github/stars/SebastianMM-96/Spotiforce?style=social)

![badge](https://img.shields.io/github/forks/SebastianMM-96/Spotiforce?style=social)

![badge](https://img.shields.io/github/commit-activity/w/SebastianMM-96/Spotiforce?style=plastic)

![BADGE](https://img.shields.io/github/commit-activity/w/SebastianMM-96/Spotiforce/feature/Spotiforce)

![bad](https://img.shields.io/github/last-commit/SebastianMM-96/Spotiforce)

# [Spotiforce](https://spotiforce-sdmm-developer-edition.na162.force.com/spotiforce/s/)

## About the app
We want to create a new System where users (with subscription) can see and obtain songs, in the same way artists can enter with their profile and can upload their own songs / albums with freedom.

----

### Project Information

##### **Schema Builder**

The scheme of our application is similar to the one shown in the following image:

![Schema](img\Spotiforce-Schema.png)

##### **Constraints**

Some of the objects we created were the following:
* Album
* Songs

To differentiate each artist and user, we created a Record Type, with different layouts to show the information we needed.

When a user is registered within the Contact Object as "User", an Email alert is triggered to notify the administrator user that a new contact has been created in the system.

For the section of subscriptions to a "premium service" we implemented a checkbox, which triggered a Process Builder.

A complaints section was created so that users can create cases with their corresponding complaint

##### **Features**

As added features, implement the following:

* A sound player within a component (this only plays one song)

* Carousel of images to show multimedia content.

* A component to display the artists that are related to the organization's account.

* Custom Footer

* An own logo for the product.