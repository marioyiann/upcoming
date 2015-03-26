# Free Under Construction template with countdown timer.

UPcoming is a free HTML5/CSS3 Under Construction theme, based on twitter Bootstrap 3. The theme also include fontawesome icons, a countdown timer and a Mailchimp subscribe form. There are three layout options if you like to use it.

1. Slideshow on the background
2. Static background image
3. No background image
---
[Demo](http://marioyiann.com/upcoming/ "UPcoming")


**Features**
- HTML5/CSS3
- Responsive layout
- Twitter bootstrap v3.3.1
- Countdown timer
- Mailchimp subscribe form
- Easy to customize

**Compatible Browsers**  
Chrome, Firefox, Safari, Opera, IE9, IE10, IE11

## Instructions for use
---

### To set up the countdown timer 
>*Edit the main.js in the js folder*

In line 5 type your release date:

```
date: "30 May 2015 11:52:00"
```

To set up the timezone of your country edit the line 6.

> **Note:**  
For the demo purpose, the counter always counts the same date. To avoid this conflict delete or comment line 9.
```
customDuration: 10*40*20*260
```

---

### To set up the slideshow on the background
>*Edit the main.js in the the js folder*

By default, the template works with the slideshow option. Place your images in the img folder with the name ''background_01.jpg'', 02, 03. If you need more than 3 images on the background, you can add them in line 20.

```
$('body').vegas({
    slides: [
        { src: 'img/background_01.jpg' },
        { src: 'img/background_02.jpg' },
        { src: 'img/background_03.jpg' }
    ],
    overlay: "img/vegas/06.png"
});
```

>**Note:**  
You also have 9 options to change the overlay dot pattern. Start experimenting in the line 22. All overlay png patterns are in the folder img/vegas.

---

### To set up a static background image
>*Edit the main.js in the js folder*

In order to use a static background image, delete the lines 19 and 20. Don't forget to delete the comma after the curly brackets.

```
$('body').vegas({
    slides: [
        { src: 'img/background_01.jpg' }
    ],
    overlay: "img/vegas/06.png"
});
```

---

### To set up without background image

In order to have  a solid color in the background, delete the lines from 16 to 23 in the main.js file and also delete the line 124 in index.html file. 
```
<script src="js/vegas.js"></script> 
```

---

### To set up appearance colors

If you like to change the color of the background, text or links, edit the file styles.css  in css folder. 

>**Note:**  
In demo mode you can see 5 different colors. These colors are for the demonstration only and not included in styles.css.

---

### Setting up the mailchimp form

To use mailchimp form presupposes to have mailchimp account. If you don't have one, you can't use the form with the current setup. 

To setup your mailchimp subscribe form follow these steps.

1. Login in your mailchimp account 
2. Create a list. 
3. In the list field, access the "Signup forms"
4. Select "Embedded forms" and choose "Super Slim"

In the embedded form that you created, you need to keep two things:

1. The form action
2. The input type name

In line 95 and 98 of index.html file, replace the # with your form data.

```
<form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
```
```
<input type="text" name="#" value="">
```

To avoid page refresh and stop redirecting to default mailchimp page, you have to take some easy actions.

- In form action at list-manage.com/subscribe/post? 

Delete question mark and add -json? 

```
list-manage.com/subscribe/post-json?
```

- At the end of the form action after id number 

Add ```&amp;c=?```
```
id=yournubmer&amp;c=?" 
```

> To style the mailchimp subscribe form and button, access mailchimp.css in css folder and make your own changes.

---

Hope you enjoy it and find it useful for an easy and fast way to make a starting website!  
Find me on: [Twitter](https://twitter.com/marioyiann)

##### Thanks and Respect to all external resources!
Bootstrap: http://getbootstrap.com/  
Fontawesome: http://fontawesome.io/  
Logo font: http://absolutfoundry.com/fonts/mohave  
Countdown: http://devingredients.com/jcounter/  
Background slider: http://vegas.jaysalvat.com/  
Background photos: https://unsplash.com/austinban  
Mailchimp form: http://designshack.net/articles/css/custom-mailchimp-email-signup-form/